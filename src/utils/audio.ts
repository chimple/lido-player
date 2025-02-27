import { convertUrlToRelative, highlightSpeakingElement, stopHighlightForSpeakingElement, speakText } from './utils';

export class AudioPlayer {
  private static instance: AudioPlayer = new AudioPlayer();

  private constructor() {}

  public static stop() {
    const audioElement = document.querySelector('#audio') as HTMLAudioElement;
    if (audioElement) {
      audioElement.pause();
      audioElement.currentTime = 0;
    }
    const highlightedElement = document.querySelector(".speaking-highlight") as HTMLElement;
    stopHighlightForSpeakingElement(highlightedElement)
    speakText("stop")
  }

  public static async play(targetElement: HTMLElement) {
    let audioUrl = targetElement.getAttribute('audio');
    if (!audioUrl) {
      const childElements = targetElement.children;
      for (let i = 0; i < childElements.length; i++) {
        const child = childElements[i];
        const childAudioUrl = child.getAttribute('audio');
        if (childAudioUrl) {
          audioUrl = childAudioUrl;
        }
      }
    }
    if (audioUrl) {
      audioUrl = convertUrlToRelative(audioUrl);
      let audioElement = document.querySelector('#audio') as HTMLAudioElement;
      if (!audioElement) {
        const newAudio = document.createElement('audio');
        newAudio.id = 'audio';
        document.body.appendChild(newAudio);
        audioElement = newAudio;
      }

      audioElement.pause();
      audioElement.currentTime = 0;
      audioElement.src = audioUrl;
      console.log('🚀 ~ executeActions ~ audioElement.src:', audioElement.src);

      try {
        await audioElement.play();
        highlightSpeakingElement(targetElement);
        while (!audioElement.ended || audioElement.error) {
          await new Promise(resolve => setTimeout(resolve, 100));
        }
        stopHighlightForSpeakingElement(targetElement);
      } catch (error) {
        console.log('🚀 ~ executeActions ~ audioElement.src: error', error);
      }
    }
    //check if the targetElement has a text property
    else if (targetElement.textContent) {
      try {
        highlightSpeakingElement(targetElement);
        await speakText(targetElement.textContent, targetElement);
        // stopHighlightForSpeakingElement(targetElement);
      } catch (error) {
        console.log('🚀 ~ executeActions ~ error:', error);
      }
    }
  }
}
