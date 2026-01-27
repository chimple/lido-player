import { convertUrlToRelative, speakText } from './utils';
import { highlightSpeakingElement, stopHighlightForSpeakingElement } from './utilsHandlers/highlightHandler';
import { setDraggingDisabled } from './utilsHandlers/dragDropHandler';
import { NextContainerKey, PrevContainerKey, ActivityChangeKey, GameCompletedKey, GameExitKey, ActivityEndKey, LessonEndKey } from './constants';

export class AudioPlayer {
  private static instance: AudioPlayer;
  private audioElement: HTMLAudioElement;

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
    //check if speechSynthesis is supported
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
  }
    private handleUserClick = () => {
      this.stop();
    };
  public async play(targetElement: HTMLElement) {
    // Stop any currently playing audio first if target element has audio given
    try {
      await AudioPlayer.getI().stop();
    } 
    catch (e) {
      console.error('Error stopping audio before speak action:', e);
    }
  const text=targetElement.closest('lido-text') as HTMLElement;
  // if(text && text.getAttribute('disable-speak')==='true'){
  //   return;
  // }


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
        highlightSpeakingElement(targetElement);
        // window.addEventListener('click', this.handleUserClick, true);
        await this.audioElement.play();

        await new Promise<void>(resolve => {
          this.audioElement.onended = () => {
            resolve();
          };
        });
      }
      catch (error) {
        console.log('🎧 Audio play error:', error);
      }
      finally {
        window.removeEventListener('click', this.handleUserClick, true);
        this.audioElement.onended = null;  // cleanup
        setDraggingDisabled(false);
        stopHighlightForSpeakingElement(targetElement);
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
}