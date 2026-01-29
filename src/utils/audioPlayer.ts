import { convertUrlToRelative, speakText } from './utils';
import { highlightSpeakingElement, stopHighlightForSpeakingElement } from './utilsHandlers/highlightHandler';
import { setDraggingDisabled } from './utilsHandlers/dragDropHandler';
import { NextContainerKey, PrevContainerKey, ActivityChangeKey, GameCompletedKey, GameExitKey, ActivityEndKey, LessonEndKey, LidoContainer } from './constants';
import { WordTimelineEntry, LANGUAGE_PROFILES, FAST_WORDS_BY_LANG } from './constants';

export class AudioPlayer {
  private static instance: AudioPlayer;
  private audioElement: HTMLAudioElement;

  private highlightOverlay: HTMLElement | null = null;
  private wordRects: DOMRect[] = [];
  private activeWordIndex = -1;
  private highlightRAF: number | null = null;

  private constructor() {
    this.audioElement = document.createElement('audio');
    this.audioElement.id = 'audio';
    document.body.appendChild(this.audioElement);

    this.registerGlobalStopEvents();
  }

  public static getI(): AudioPlayer {
    if (!AudioPlayer.instance) {
      AudioPlayer.instance = new AudioPlayer();
    }
    return AudioPlayer.instance;
  }

  public stop() {

    const container = document.getElementById(LidoContainer);
    if(container && container.getAttribute('highlight-word-by-word')==='true'){
      // stop any highlight loop
      this.stopOverlayHighlightLoop(); 
    }
    //check if speechSynthesis is supported
    if (window?.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    this.audioElement.pause();
    this.audioElement.currentTime = 0;
    this.audioElement.src = '';

    if(container && container.getAttribute('highlight-word-by-word')!=='true'){
      const highlightedElements = document.querySelectorAll('.speaking-highlight');
      highlightedElements.forEach(element => stopHighlightForSpeakingElement(element as HTMLElement));
    }

    const playElement = document.querySelector('#play') as HTMLElement;
    const pauseElement = document.querySelector('#pause') as HTMLElement;
    if (playElement && pauseElement) {
      playElement.style.visibility = 'visible';
      pauseElement.style.visibility = 'hidden';
    }
  }

  private handleUserClick = () => {
    this.stop();
  };

  private getLidoTextElement(el: HTMLElement): HTMLElement | null {
    if (el.tagName.toLowerCase() === 'lido-text') return el;
    return el.closest('lido-text');
  }

  public async play(targetElement: HTMLElement) {
    // Stop any currently playing audio first if target element has audio given
    try {
      await AudioPlayer.getI().stop();
    } 
    catch (e) {
      console.error('Error stopping audio before speak action:', e);
    }
    const container = document.getElementById(LidoContainer);
    if(!container){
      console.warn('[AudioPlayer] No lido-container found');
      return;
    }
    // Check if speaking is disabled on the target element or its closest lido-text parent
    const text = targetElement.closest('lido-text') as HTMLElement;
    // if(text && text.getAttribute('disable-speak')==='true'){
    //   return;
    // }

    if(container.getAttribute('highlight-word-by-word') === 'true') {
      const textElement = this.getLidoTextElement(targetElement);
      if (!textElement) {
        console.warn('[AudioPlayer] No lido-text found');
        return;
      }
      // HARD RESET previous sentence
      this.stopOverlayHighlightLoop(); // stop any highlight loop;
      targetElement = textElement;
    }


    // then play the target element audio.
    let audioUrl = targetElement.getAttribute('audio') || '';

    // If no direct audio attribute, check childrens for audio
    if (!audioUrl) {
      const childElements = targetElement.children;
      for (let i = 0; i < childElements.length; i++) {
        const childAudioUrl = childElements[i].getAttribute('audio');
        if (childAudioUrl) {
          audioUrl = childAudioUrl;
          break;
        }
      }
    }

    if (audioUrl) 
    {
      audioUrl = convertUrlToRelative(audioUrl);
      this.audioElement.src = audioUrl;
      console.log('🚀 Playing audio:', this.audioElement.src);

      try {
        setDraggingDisabled(true);

        const language = container.getAttribute('Lang') || 'en';
        const profile = LANGUAGE_PROFILES[language] || LANGUAGE_PROFILES[language.split('-')[0]] || LANGUAGE_PROFILES['en'];
        let timeline: WordTimelineEntry[] = [];

        const isWordByWord = container.getAttribute('highlight-word-by-word') === 'true';

        // ALWAYS clear handlers first (important)
        this.audioElement.onloadedmetadata = null;
        this.audioElement.onended = null;

        // If word-by-word highlighting is enabled prepare timeline & rects
        if (isWordByWord) {
          this.audioElement.onloadedmetadata = () => {
            const durationMs = this.audioElement.duration * 1000;
            const textContent = targetElement.textContent || '';

            timeline = this.buildWordTimeline(textContent,durationMs,profile,language);
            this.wordRects = this.computeWordRects(targetElement);
          };
        } 
        else {
          highlightSpeakingElement(targetElement);
        }

        // PLAY ONCE
        await this.audioElement.play();

        // ensure metadata processed before overlay
        if(isWordByWord && timeline.length === 0) 
        {
          await new Promise<void>(resolve => {
            this.audioElement.onloadedmetadata = () => resolve();
          });
          this.startOverlayHighlightLoop(timeline, profile);
        } 
        else if (isWordByWord) {
          this.startOverlayHighlightLoop(timeline, profile);
        }

        // unified end
        await new Promise<void>(resolve => {
          this.audioElement.onended = () => resolve();
        });

      }
      catch (error) {
        console.log('🎧 Audio play error:', error);
      }
      finally {
        this.audioElement.onended = null;
        this.audioElement.onloadedmetadata = null;
        this.stopOverlayHighlightLoop();

        window.removeEventListener('click', this.handleUserClick, true);
        this.audioElement.onended = null;  // cleanup
        setDraggingDisabled(false);
        if(container.getAttribute('highlight-word-by-word') !== 'true')
        {
          stopHighlightForSpeakingElement(targetElement);
        }
      }
    }
    // If no audio, use text-to-speech
    else if (targetElement.textContent) 
    {
      try {
        highlightSpeakingElement(targetElement);
        window.addEventListener('click', this.handleUserClick, true);
        await speakText(targetElement.textContent, targetElement);
        const highlightedElements = document.querySelectorAll('.speaking-highlight');
        highlightedElements.forEach(element => stopHighlightForSpeakingElement(element as HTMLElement));        
      } 
      catch (error) {
        console.log('🎧 TTS Error:', error);
      }
      finally {
        setDraggingDisabled(false);
      }
    }
  }

  // GLOBAL STOP EVENTS (container change, activity change…)
  private registerGlobalStopEvents() {
    const stopEvents = [
      NextContainerKey, PrevContainerKey, LessonEndKey, ActivityChangeKey,
      ActivityEndKey, GameCompletedKey, GameExitKey
    ];

    stopEvents.forEach(key => {
      window.addEventListener(key, () => this.stop());
    });
  }

  // DESTROY (for hot-reload)
  public destroy() {
    console.log("AudioPlayer destroyed (hot-reload safe)");

    this.stop();

    // Remove DOM element
    if (this.audioElement.parentNode) {
      this.audioElement.parentNode.removeChild(this.audioElement);
    }

    AudioPlayer.instance = undefined as any;
  }

  private countSyllables(word: string, language: string): number {
    if (language !== 'en') {
      return Math.max(2, Math.ceil(word.length / 3)); // average syllable count for Indic words
    }
    const cleaned = word.toLowerCase().replace(/[^a-z]/g, "");
    if (cleaned.length <= 3) return 1;
    const matches = cleaned.match(/[aeiouy]{1,2}/g);
    return matches ? matches.length : 1;
  }

  private tokenize(text: string): string[] {
    return text.split(/(\s+)/).filter(Boolean);
  }

  private isFastCluster(prev?: string, curr?: string, language?: string) {
    if (!prev || !curr || !language) return false;
    const fastWords = FAST_WORDS_BY_LANG[language];
    return fastWords?.has(prev) && fastWords?.has(curr);
  }

  private buildWordTimeline(text: string, totalDurationMs: number, profile: any,language: string): WordTimelineEntry[] {
    const tokens = this.tokenize(text).filter(t => t.trim());
    console.log('[buildTimeline] words:', tokens);

    const expectedDurationMs = (tokens.length / profile.expectedWPM) * 60000;

    let speedScale = 1;

    // Only scale if mismatch is significant
    if (expectedDurationMs > 0) {
      const ratio = totalDurationMs / expectedDurationMs;

      if (ratio > 1.15) speedScale = 1.1;   // audio slower
      else if (ratio < 0.85) speedScale = 0.9; // audio faster
    }


    const weights = tokens.map((word,i) => {
      const prev = tokens[i - 1]?.toLowerCase();
      const curr = word.toLowerCase();

      const syllables = this.countSyllables(word,language);
      const hasPunctuation = /[.,!?]$/.test(word);

      let weight = syllables * profile.syllableWeight;

      // punctuation pause boost
      if (hasPunctuation) {
        weight += profile.punctuationPauseWeight;
      }

      if (FAST_WORDS_BY_LANG[language]?.has(curr)) {
        weight *= profile.fastWordMultiplier     // faster words get less weight
      }
      if (this.isFastCluster(prev, curr, language)) {
        weight *= profile.fastClusterMultiplier;  // compress phrase
      }

      console.log(
        `[buildTimeline] "${word}" syllables=${syllables}, weight=${weight}`
      );

      return weight;
    });

    const totalWeight = weights.reduce((a, b) => a + b, 0);
    console.log('[buildTimeline] totalWeight:', totalWeight);

    let cursor = 0;
    const timeline = tokens.map((word, i) => {
      let duration = (weights[i] / totalWeight) * totalDurationMs;

      // NEW: minimum readable duration
      duration *= speedScale;
      duration = Math.max(profile.minWordMs, duration);

      const entry = {
        word,
        index: i,
        startMs: cursor,
        endMs: cursor + duration,
      };
      console.log('[timeline]', entry);

      cursor += duration;
      return entry;
    });

    const last = timeline[timeline.length - 1];
    if (last && last.endMs > totalDurationMs) {
      const scale = totalDurationMs / last.endMs;

      timeline.forEach(t => {
        t.startMs *= scale;
        t.endMs *= scale;
      });
    }

    return timeline;
  }


  private ensureOverlay() {
    if (this.highlightOverlay) return;

    const overlay = document.createElement('div');
    overlay.className = 'tts-highlight-overlay';
    document.body.appendChild(overlay);
    this.highlightOverlay = overlay;
  }

  private clearOverlay() {
    if (this.highlightOverlay) {
      this.highlightOverlay.remove();
      this.highlightOverlay = null;
    }
  }

  private computeWordRects(element: HTMLElement): DOMRect[] {
    const walker = document.createTreeWalker(
      element,
      NodeFilter.SHOW_TEXT,
      null
    );

    const rects: DOMRect[] = [];
    let node: Text | null;
    let globalIndex = 0;

    while ((node = walker.nextNode() as Text | null)) {
      const text = node.textContent || '';
      const words = text.split(/\s+/).filter(Boolean);

      let offset = 0;
      words.forEach(word => {
        const start = text.indexOf(word, offset);
        const end = start + word.length;

        if (start >= 0) {
          const range = document.createRange();
          range.setStart(node, start);
          range.setEnd(node, end);

          const rect = range.getBoundingClientRect();
          if (rect.width > 0 && rect.height > 0) {
            rects[globalIndex++] = rect;
          }
        }
        offset = end;
      });
    }

    return rects;
  }

  private moveOverlay(rect: DOMRect) {
    if (!this.highlightOverlay) return;

    this.highlightOverlay.style.left = `${rect.left}px`;
    this.highlightOverlay.style.top = `${rect.top}px`;
    this.highlightOverlay.style.width = `${rect.width}px`;
    this.highlightOverlay.style.height = `${rect.height}px`;
  }

  private startOverlayHighlightLoop(timeline: WordTimelineEntry[], profile: any) {
    this.ensureOverlay();
    this.activeWordIndex = -1;

    const tick = () => {
      if (this.audioElement.paused || this.audioElement.ended) {
        this.stopOverlayHighlightLoop();
        return;
      }

      const currentMs = this.audioElement.currentTime * 1000 + profile.preemptiveOffsetMs;

      const index = timeline.findIndex(
        w => 
        (currentMs+profile.smoothingMs >= w.startMs) && 
        (currentMs-profile.smoothingMs < w.endMs)
      );

      // NEW: drift correction
      if (index >= 0 && this.activeWordIndex >= 0 && index - this.activeWordIndex >= 2) {
        const nextIndex = this.activeWordIndex + 1;

        if (this.wordRects[nextIndex]) {
          this.moveOverlay(this.wordRects[nextIndex]);
          this.activeWordIndex = nextIndex;
        }
        // DO NOT return — allow normal sync logic to continue
      }

      if (index !== this.activeWordIndex && this.wordRects[index]) {
        this.moveOverlay(this.wordRects[index]);
        this.activeWordIndex = index;
      }

      this.highlightRAF = requestAnimationFrame(tick);
    };

    this.highlightRAF = requestAnimationFrame(tick);
  }

  private stopOverlayHighlightLoop() {
    if (this.highlightRAF !== null) {
      cancelAnimationFrame(this.highlightRAF);
      this.highlightRAF = null;
    }

    this.clearOverlay();
    this.activeWordIndex = -1;
  }  
}