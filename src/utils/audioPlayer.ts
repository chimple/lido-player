import { convertUrlToRelative, speakText } from './utils';
import { highlightSpeakingElement, stopHighlightForSpeakingElement } from './utilsHandlers/highlightHandler';

export class AudioPlayer {
  private static instance: AudioPlayer;
  private audioElement: HTMLAudioElement;
  private TIMING_DATA: any[] = [];
  private wordSpans: HTMLElement[] = [];
  private currentHighlightIndex: number = -1;
  private CHARACTER_WEIGHTS = {
    ' ': 0.1,
    ',': 12,
    '.': 20,
    '!': 20,
    '?': 20,
    ';': 15,
  };
  private DEFAULT_CHAR_WEIGHT = 1;
  private animationFrameId: number | null = null;

  private constructor() {
    this.audioElement = document.createElement('audio');
    this.audioElement.id = 'audio';
    document.body.appendChild(this.audioElement);
  }

  public static getI(): AudioPlayer {
    if (!AudioPlayer.instance) {
      AudioPlayer.instance = new AudioPlayer();
    }
    return AudioPlayer.instance;
  }

  private generateEstimatedTimings(text: string, duration: number) {
    let totalWeightedLength = 0;
    for (const char of text) {
      totalWeightedLength += this.CHARACTER_WEIGHTS[char] || this.DEFAULT_CHAR_WEIGHT;
    }

    const timePerUnit = duration / totalWeightedLength;
    const words = text.split(/\s+/);
    const generatedTimings = [];
    let currentTime = 0;

    words.forEach(word => {
      let wordWeightedLength = 0;
      for (const char of word) {
        wordWeightedLength += this.CHARACTER_WEIGHTS[char] || this.DEFAULT_CHAR_WEIGHT;
      }

      const wordDuration = wordWeightedLength * timePerUnit;
      generatedTimings.push({
        word: word,
        startTime: currentTime,
        endTime: currentTime + wordDuration,
      });

      const spaceDuration = (this.CHARACTER_WEIGHTS[' '] || 0.1) * timePerUnit;
      currentTime += wordDuration + spaceDuration;
    });

    return generatedTimings;
  }

  private prepareText(text: string) {
    const textContainer = document.getElementById('text-container') as HTMLElement;
    textContainer.innerHTML = '';
    this.wordSpans = [];
    this.TIMING_DATA.forEach((data, index) => {
      const span = document.createElement('span');
      span.textContent = data.word + ' ';
      span.dataset.wordIndex = index.toString();
      span.addEventListener('click', event => this.handleWordClick(event));
      this.wordSpans.push(span);
      textContainer.appendChild(span);
    });
  }

  private highlightLoop() {
    const currentTime = this.audioElement.currentTime;
    let foundIndex = -1;
    for (let i = 0; i < this.TIMING_DATA.length; i++) {
      if (currentTime >= this.TIMING_DATA[i].startTime && currentTime < this.TIMING_DATA[i].endTime) {
        foundIndex = i;
        break;
      }
    }

    if (foundIndex !== this.currentHighlightIndex) {
      if (this.currentHighlightIndex !== -1) {
        this.wordSpans[this.currentHighlightIndex].classList.remove('highlight');
      }
      if (foundIndex !== -1) {
        this.wordSpans[foundIndex].classList.add('highlight');
      }
      this.currentHighlightIndex = foundIndex;
    }

    if (!this.audioElement.paused) {
      this.animationFrameId = requestAnimationFrame(() => this.highlightLoop());
    }
  }

  private handleWordClick(event: Event) {
    const clickedIndex = parseInt((event.target as HTMLElement).dataset.wordIndex || '', 10);
    if (this.TIMING_DATA[clickedIndex]) {
      this.audioElement.currentTime = this.TIMING_DATA[clickedIndex].startTime;
      if (this.audioElement.paused) {
        this.audioElement.play();
      }
    }
  }

  public stop() {
    if (window?.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    this.audioElement.pause();
    this.audioElement.currentTime = 0;
    this.audioElement.src = '';
    const highlightedElements = document.querySelectorAll('.speaking-highlight');
    highlightedElements.forEach(element => stopHighlightForSpeakingElement(element as HTMLElement));

    const playElement = document.querySelector('#play') as HTMLElement;
    const pauseElement = document.querySelector('#pause') as HTMLElement;
    if (playElement && pauseElement) {
      playElement.style.visibility = 'visible';
      pauseElement.style.visibility = 'hidden';
    }

    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  public async play(targetElement: HTMLElement) {
    let audioUrl = targetElement.getAttribute('audio') || '';

    if (!audioUrl) {
      const childElements = targetElement.children;
      for (let i = 0; i < childElements.length; i++) {
        const childAudioUrl = childElements[i].getAttribute('audio');
        if (childAudioUrl) {
          audioUrl = childAudioUrl;
        }
      }
    }

    if (audioUrl) {
      audioUrl = convertUrlToRelative(audioUrl);
      this.audioElement.src = audioUrl;
      console.log('🚀 Playing audio:', this.audioElement.src);

      try {
        await this.audioElement.play();
        highlightSpeakingElement(targetElement);

        this.audioElement.addEventListener('loadedmetadata', () => {
          const fullText = targetElement.textContent || '';
          this.TIMING_DATA = this.generateEstimatedTimings(fullText, this.audioElement.duration);
          this.prepareText(fullText);
        });

        await new Promise<void>(resolve => {
          this.audioElement.onended = () => {
            stopHighlightForSpeakingElement(targetElement);
            resolve();
          };
        });
      } catch (error) {
        console.log('🚀 Audio play error:', error);
      }
    } else if (targetElement.textContent) {
      try {
        highlightSpeakingElement(targetElement);
        await speakText(targetElement.textContent, targetElement);
        stopHighlightForSpeakingElement(targetElement);
      } catch (error) {
        console.log('🚀 TTS Error:', error);
      }
    }
  }
}
