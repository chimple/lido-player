import { LidoContainer } from '../constants';
import { countOfMistakes, executeActions } from '../utils';
import { buildDropHasDragFromDOM } from './dragDropHandler';

export function showWrongAnswerAnimation(elements: HTMLElement[]): void {
  const styleId = '#wrong-answer-animation-style';

  executeActions("tryAgain.speak='true'", document.querySelector('#tryAgain'));

  // Check if the style is already added, if not, add it
  if (!document.querySelector(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.innerHTML = `
          @keyframes enhanced-shake {
              0% { left: 0; }
              10% { left: -8px; }
              20% { left: 8px; }
              30% { left: -8px; }
              40% { left: 8px; }
              50% { left: -6px; }
              60% { left: 6px; }
              70% { left: -4px; }
              80% { left: 4px; }
              90% { left: -2px; }
              100% { left: 0; }
          }

          
          .wrong-answer {
              position: relative; /* Enable relative positioning to move the element */
              animation: enhanced-shake 0.6s cubic-bezier(0.36, 0.07, 0.19, 0.97);
              background-color: #ffdddd; /* Flash red background to indicate wrong answer */
              box-shadow: 0 0 10px rgba(255, 0, 0, 0.5); /* Subtle red shadow */

              border: 4px solid red;
          }

          
      `;

    document.head.appendChild(style);
  }

  elements.forEach(element => {
    // Add the class to trigger the animation
    element.classList.add('wrong-answer');

    // Remove the class after the animation ends to reset the element
    element.addEventListener(
      'animationend',
      () => {
        element.classList.remove('wrong-answer');
      },
      { once: true },
    );
  });
}

export function removeHighlight(element: HTMLElement): void {
  element.classList.remove('highlight-element');
  element.ariaPressed = 'false';
}

// Function to highlight the speaking element
export function highlightSpeakingElement(element: HTMLElement): void {
  if (!element) return;

  // Add a custom class for highlighting
  element.classList.add('speaking-highlight');

  // Inject keyframe animation and class styles into the document's head if it doesn't already exist
  const styleId = '#speaking-highlight-style';
  if (!document.querySelector(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.innerHTML = `
      .speaking-highlight {
        --base-transform: ${element.style.transform};
        box-shadow: 0 0 20px 10px rgba(255, 165, 0, 0.9) !important; /* Stronger orange glow effect */
        // border: 3px solid green !important;
        // transition: box-shadow 0.5s ease-in-out, transform 0.5s ease-in-out;
        // transform: scale(1.05); /* Subtle scale effect to pop the element */
        // animation: pulseEffect 1.5s infinite; /* Pulsing animation */
        
      }

      @keyframes pulseEffect {
        0% {
          box-shadow: 0 0 20px 10px rgba(255, 165, 0, 0.9);
          // transform: var(--base-transform) scale(1.05);
          // background-color: #FFFF0B;
        }
        50% {
          box-shadow: 0 0 30px 15px rgba(255, 165, 0, 1);
          // transform: var(--base-transform) scale(1.1);
          // background-color: #FFFF0B;
        }
        100% {
          box-shadow: 0 0 20px 10px rgba(255, 165, 0, 0.9);
          // transform: var(--base-transform) scale(1.05);
          // background-color: #FFFF0B;
        }
      }
    `;
    document.head.appendChild(style);
  }
}

// Function to stop highlighting
export function stopHighlightForSpeakingElement(element: HTMLElement): void {
  if (!element) return;

  // Remove the custom class for highlighting
  element.classList.remove('speaking-highlight');

  // Remove inline styles
  // element.style.boxShadow = '';
  // element.style.border = '';
}

export function highlightElement(): void {
  const container = document.querySelector(LidoContainer);
  if (!container) return;
  const dropElements = buildDropHasDragFromDOM();
  let firstFalse = Object.values(dropElements).find(item => !item.isFull);
  if (firstFalse) {
    const dropEls = container.querySelectorAll(`[type="drop"]`);
    dropEls.forEach(dropEl => {
      dropEl.classList.remove('highlight-element');
    });
    const dropEle = container.querySelector(`#${firstFalse.drop}`) as HTMLElement;
    if (dropEle) {
      dropEle.classList.add('highlight-element');
    }

    // Highlight corresponding drag elements if mistakes are more than 2
    const dragElements = container.querySelectorAll(`[type="drag"]`);    
    if(countOfMistakes > 2){
      dragElements.forEach(dragEl => {
        dragEl.classList.remove('highlight-element');
        if(dragEl.getAttribute('value') === dropEle.getAttribute('value')){
          dragEl.classList.add('highlight-element');
          dragEl.classList.remove('drag-element')
        }
      });
    } else {
      dragElements.forEach(dragEl => {
        dragEl.classList.remove('highlight-element');
        dragEl.classList.add('drag-element');
      });
    }
  } else {
      if(countOfMistakes < 2)return;
      const clickTemplate = container.querySelectorAll("[type='click']");
      clickTemplate.forEach(clickEl => {
        if(clickEl.getAttribute('value') === container.getAttribute('objective')){
          if(!clickEl.classList.contains('highlight-element')){
            clickEl.className = `${clickEl.className} highlight-element`;
          }
        }
      })
  }

}