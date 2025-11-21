import { convertUrlToRelative, speakText } from './utils';
import { highlightSpeakingElement, stopHighlightForSpeakingElement } from './utilsHandlers/highlightHandler';
import { setDraggingDisabled }from './utilsHandlers/dragDropHandler';
import { NextContainerKey, PrevContainerKey, ActivityChangeKey, GameCompletedKey, GameExitKey, ActivityEndKey, LessonEndKey } from './constants';

export class AudioPlayer {
  private static instance: AudioPlayer;
  private audioElement: HTMLAudioElement;

  // — Safety & usability improvements —
  private lastInteractionTime = 0;
  private debounceDelay = 100; // ms
  private lastTouchTime = 0;   // avoid touch + click duplicate play

  private constructor() {
    this.audioElement = document.createElement('audio');
    this.audioElement.id = 'audio';
    document.body.appendChild(this.audioElement);

    this.registerGlobalStopEvents();
    this.registerInteractionListeners();
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
        setDraggingDisabled(true);
        highlightSpeakingElement(targetElement);

        await this.audioElement.play();

        await new Promise<void>(resolve => {
          this.audioElement.onended = () => {
            resolve();
          };
        });
      } catch (error) {
        console.log('🚀 Audio play error:', error);
      }
      finally {
        this.audioElement.onended = null;  // cleanup
        setDraggingDisabled(false);
        stopHighlightForSpeakingElement(targetElement);
      }
    }
    // If no audio, use text-to-speech
    else if (targetElement.textContent) {
      try {
        highlightSpeakingElement(targetElement);
        await speakText(targetElement.textContent, targetElement);
        const highlightedElements = document.querySelectorAll('.speaking-highlight');
        highlightedElements.forEach(element => stopHighlightForSpeakingElement(element as HTMLElement));        
      } catch (error) {
        console.log('🚀 TTS Error:', error);
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

  // USER INTERACTION LISTENERS (click, drag…)
  private registerInteractionListeners() {
    const opts = { capture: true }; // guaranteed early interception

    // document.addEventListener("mousedown", this.handleInteraction, opts);
    // document.addEventListener("touchstart", this.handleTouch, opts);
    // document.addEventListener("click", this.handleInteraction, opts);
    // document.addEventListener("dragstart", this.handleInteraction, opts);
  }

  // touchstart handler — avoids duplicate click fire
  private handleTouch = () => {
    this.lastTouchTime = Date.now();
  };

  // private handleInteraction = (event: Event) => {
  //   const now = Date.now();

  //   // Touch+click duplicate → ignore click
  //   if (event.type === "click" && now - this.lastTouchTime < 300) {
  //     return;
  //   }
  //   // Debounce rapid interactions (avoid double stop/play)
  //   if (now - this.lastInteractionTime < this.debounceDelay) {
  //     return;
  //   }
    
  //   this.lastInteractionTime = now;

  //   const target = event.target as HTMLElement;
  //   if (!target) return;

  //   // Only elements with audio or speak="true" should stop audio
  //   const audioElement = target.closest("[audio], [speak='true']") as HTMLElement;
  //   if (!audioElement) {
  //     // No audio element , DO NOT STOP current audio
  //     return;
  //   }

  //   const audioAttr = target.closest("[audio]");
  //   const speakAttr = target.closest("[speak='true']");
  //   // audio="" should NOT trigger stop
  //   // VALID conditions
  //   const hasValidAudio = audioAttr && audioAttr.getAttribute("audio")?.trim() !== "";
  //   const hasSpeak = speakAttr != null;

  //   // If element has neither valid audio nor speak, DO NOT stop or play
  //   if (!hasValidAudio && !hasSpeak) {
  //     console.log("NO valid audio or speak=true → continue existing audio");
  //     return;
  //   }

  //   // Stop any currently playing audio
  //   this.stop();
  //   // If element contains audio, play it
  //   this.play(audioElement);
  // }

  // DESTROY (for hot-reload)
  public destroy() {
    console.log("AudioPlayer destroyed (hot-reload safe)");

    // document.removeEventListener("mousedown", this.handleInteraction, true);
    // document.removeEventListener("touchstart", this.handleTouch, true);
    // document.removeEventListener("click", this.handleInteraction, true);
    // document.removeEventListener("dragstart", this.handleInteraction, true);

    this.stop();

    // Remove DOM element
    if (this.audioElement.parentNode) {
      this.audioElement.parentNode.removeChild(this.audioElement);
    }

    AudioPlayer.instance = undefined as any;
  }
}
// import { convertUrlToRelative, speakText } from './utils';
// import { highlightSpeakingElement, stopHighlightForSpeakingElement } from './utilsHandlers/highlightHandler';
// import { setDraggingDisabled } from './utilsHandlers/dragDropHandler';
// import { NextContainerKey, PrevContainerKey, ActivityChangeKey, GameCompletedKey, GameExitKey, ActivityEndKey, LessonEndKey } from './constants';

// export class AudioPlayer {
//   private static instance: AudioPlayer;
//   private audioElement: HTMLAudioElement;

//   // — Safety & usability improvements —
//   private lastInteractionTime = 0;
//   private debounceDelay = 100; // ms
//   private lastTouchTime = 0;   // avoid touch + click duplicate play

//   private constructor() {
//     this.audioElement = document.createElement('audio');
//     this.audioElement.id = 'audio';
//     document.body.appendChild(this.audioElement);

//     this.registerGlobalStopEvents();
//     this.registerInteractionListeners();
//   }

//   public static getI(): AudioPlayer {
//     if (!AudioPlayer.instance) {
//       AudioPlayer.instance = new AudioPlayer();
//     }
//     return AudioPlayer.instance;
//   }
  
//   // STOP EVERYTHING
//   public stop() 
//   {
//     console.log(" --- AUDIO STOP CALLED --- ");
    
//     //check if speechSynthesis is supported
//     if (window?.speechSynthesis) {
//       window.speechSynthesis.cancel();
//     }
//     this.audioElement.pause();
//     this.audioElement.currentTime = 0;
//     this.audioElement.src = '';

//     // Clear stale handlers
//     this.audioElement.onended = null;
//     this.audioElement.onerror = null;

//     const highlightedElements = document.querySelectorAll('.speaking-highlight');
//     highlightedElements.forEach(element => stopHighlightForSpeakingElement(element as HTMLElement));

//     const playElement = document.querySelector('#play') as HTMLElement;
//     const pauseElement = document.querySelector('#pause') as HTMLElement;
//     if (playElement && pauseElement) {
//       playElement.style.visibility = 'visible';
//       pauseElement.style.visibility = 'hidden';
//     }
//   }

//   public async play(targetElement: HTMLElement) 
//   {
//     let audioUrl = targetElement.getAttribute('audio') || '';

//     if (!audioUrl) {
//       const childElements = targetElement.children;
//       for (let i = 0; i < childElements.length; i++) {
//         const childAudioUrl = childElements[i].getAttribute('audio');
//         if (childAudioUrl) {
//           audioUrl = childAudioUrl;
//           break;
//         }
//       }
//     }

//     if (audioUrl) {
//       audioUrl = convertUrlToRelative(audioUrl);

//       // Avoid replaying same audio if already playing
//       if (this.audioElement.src === audioUrl && !this.audioElement.paused) {
//         return;
//       }

//       this.audioElement.src = audioUrl;
//       console.log('🎧 Playing audio:', this.audioElement.src);

//       try {
//         setDraggingDisabled(true);
//         highlightSpeakingElement(targetElement);

//         await this.audioElement.play();

//         await new Promise<void>(resolve => {
//           this.audioElement.onended = () => {
//             stopHighlightForSpeakingElement(targetElement);
//             this.audioElement.onended = null;  // cleanup
//             setDraggingDisabled(false);
//             resolve();
//           };
//         });
//       } 
//       catch (error) {
//         console.log('🚀 Audio play error:', error);
//       }
//     }
//     // If no audio, use text-to-speech
//     else if (targetElement.textContent) {
//       try {
//         highlightSpeakingElement(targetElement);
//         setDraggingDisabled(false);
//         await speakText(targetElement.textContent, targetElement);
//         const highlightedElements = document.querySelectorAll('.speaking-highlight');
//         highlightedElements.forEach(element => stopHighlightForSpeakingElement(element as HTMLElement));        
//       } 
//       catch (error) {
//         console.log('🚀 TTS Error:', error);
//       }
//     }
//   }

//   // GLOBAL STOP EVENTS (container change, activity change…)
//   private registerGlobalStopEvents() {
//     const stopEvents = [
//       NextContainerKey, PrevContainerKey, LessonEndKey, ActivityChangeKey,
//       ActivityEndKey, GameCompletedKey, GameExitKey
//     ];

//     stopEvents.forEach(key => {
//       window.addEventListener(key, () => this.stop());
//     });
//   }

//   // USER INTERACTION LISTENERS (click, drag…)
//   private registerInteractionListeners() {
//     const opts = { capture: true }; // guaranteed early interception

//     document.addEventListener("mousedown", this.handleInteraction, opts);
//     document.addEventListener("touchstart", this.handleTouch, opts);
//     document.addEventListener("click", this.handleInteraction, opts);
//     document.addEventListener("dragstart", this.handleInteraction, opts);
//   }

//   // touchstart handler — avoids duplicate click fire
//   private handleTouch = () => {
//     this.lastTouchTime = Date.now();
//   };

//   private handleInteraction = (event: Event) => {
//     const now = Date.now();

//     // Touch+click duplicate → ignore click
//     if (event.type === "click" && now - this.lastTouchTime < 300) {
//       return;
//     }
//     // Debounce rapid interactions (avoid double stop/play)
//     if (now - this.lastInteractionTime < this.debounceDelay) {
//       return;
//     }
    
//     this.lastInteractionTime = now;

//     const target = event.target as HTMLElement;
//     if (!target) return;

//     // Only elements with audio or speak="true" should stop audio
//     const audioElement = target.closest("[audio], [speak='true']") as HTMLElement;
//     if (!audioElement) {
//       // No audio element , DO NOT STOP current audio
//       return;
//     }

//     const audioAttr = target.closest("[audio]");
//     const speakAttr = target.closest("[speak='true']");
//     // audio="" should NOT trigger stop
//     // VALID conditions
//     const hasValidAudio = audioAttr && audioAttr.getAttribute("audio")?.trim() !== "";
//     const hasSpeak = speakAttr != null;

//     // If element has neither valid audio nor speak, DO NOT stop or play
//     if (!hasValidAudio && !hasSpeak) {
//       console.log("NO valid audio or speak=true → continue existing audio");
//       return;
//     }

//     // Stop any currently playing audio
//     this.stop();
//     // If element contains audio, play it
//     this.play(audioElement);
//   }

//   // DESTROY (for hot-reload)
//   public destroy() {
//     console.log("AudioPlayer destroyed (hot-reload safe)");

//     document.removeEventListener("mousedown", this.handleInteraction, true);
//     document.removeEventListener("touchstart", this.handleTouch, true);
//     document.removeEventListener("click", this.handleInteraction, true);
//     document.removeEventListener("dragstart", this.handleInteraction, true);

//     this.stop();

//     // Remove DOM element
//     if (this.audioElement.parentNode) {
//       this.audioElement.parentNode.removeChild(this.audioElement);
//     }

//     AudioPlayer.instance = undefined as any;
//   }
// }