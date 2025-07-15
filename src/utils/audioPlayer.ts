import { convertUrlToRelative, speakText } from './utils';
import { highlightSpeakingElement, stopHighlightForSpeakingElement } from './utilsHandlers/highlightHandler';

export class AudioPlayer {
  private static instance: AudioPlayer;
  private audioElement: HTMLAudioElement;

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

  public stop() {
    //check if speechSynthesis is supported
    if (window?.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    this.audioElement.pause();
    this.audioElement.currentTime = 0;
    this.audioElement.src = '';
    const highlightedElements = document.querySelectorAll('.speaking-highlight');
    // highlightedElements.forEach(element => stopHighlightForSpeakingElement(element as HTMLElement));

    const playElement = document.querySelector('#play') as HTMLElement;
    const pauseElement = document.querySelector('#pause') as HTMLElement;
    if (playElement && pauseElement) {
      playElement.style.visibility = 'visible';
      pauseElement.style.visibility = 'hidden';
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
        // highlightSpeakingElement(targetElement);

        await new Promise<void>(resolve => {
          this.audioElement.onended = () => {
            // stopHighlightForSpeakingElement(targetElement);
            resolve();
          };
        });
      } catch (error) {
        console.log('🚀 Audio play error:', error);
      }
    }
    // If no audio, use text-to-speech
    else if (targetElement.textContent) {
      try {
        // highlightSpeakingElement(targetElement);
        await speakText(targetElement.textContent, targetElement);
        // stopHighlightForSpeakingElement(targetElement);
      } catch (error) {
        console.log('🚀 TTS Error:', error);
      }
    }
  }
}
