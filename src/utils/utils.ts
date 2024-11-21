import { DragSelectedMapKey, SelectedValuesKey } from './constants';

export function format(first?: string, middle?: string, last?: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

// Function to get the scale of an element
const getElementScale = (el: HTMLElement): number => {
  const transform = window.getComputedStyle(el).transform;
  if (transform === 'none') {
    return 1; // No scaling
  } else {
    const matrix = transform.match(/matrix\(([^)]+)\)/);
    if (matrix) {
      const matrixValues = matrix[1].split(', ');
      const scaleX = parseFloat(matrixValues[0]);
      return scaleX; // Assuming uniform scaling (same scale in X and Y)
    }
  }
  return 1; // Fallback to no scaling
};

function enableDraggingWithScaling(element: HTMLElement): void {
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let initialX = 0;
  let initialY = 0;

  // Fetch the container element
  const container = document.getElementById('container');
  if (!container) {
    console.error(`Container with ID "container" not found.`);
    return;
  }

  const onStart = (event: MouseEvent | TouchEvent): void => {
    removeHighlight(element);
    isDragging = true;

    if (event instanceof MouseEvent) {
      startX = event.clientX;
      startY = event.clientY;
    } else {
      startX = event.touches[0].clientX;
      startY = event.touches[0].clientY;
    }

    // Apply dragging styles to the element
    element.style.opacity = '0.8';
    element.style.cursor = 'grabbing';

    // Parse the current transform values at the start of each drag
    const transform = window.getComputedStyle(element).transform;
    if (transform !== 'none') {
      const matrix = transform.match(/matrix\(([^)]+)\)/);
      if (matrix) {
        const matrixValues = matrix[1].split(', ');
        initialX = parseFloat(matrixValues[4]);
        initialY = parseFloat(matrixValues[5]);
      }
    } else {
      initialX = 0;
      initialY = 0;
    }

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onEnd);
    document.addEventListener('touchmove', onMove);
    document.addEventListener('touchend', onEnd);
  };

  const rect1 = container.getBoundingClientRect();
  const rect2 = element.getBoundingClientRect();

  let verticalDistance = rect1.top - rect2.top;
  let horizontalDistance = rect1.left - rect2.left;

  const observer = new MutationObserver(mutationsList => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
        const rect1 = container.getBoundingClientRect();
        const rect2 = element.getBoundingClientRect();
        verticalDistance = rect1.top - rect2.top;
        horizontalDistance = rect1.left - rect2.left;
      }
    }
  });

  // Configure the observer to watch for attribute changes
  const observerConfig = {
    attributes: true, // Monitor attribute changes
    attributeFilter: ['style'], // Only observe changes to the 'style' attribute
  };

  // Start observing the element
  observer.observe(container, observerConfig);

  const onMove = (event: MouseEvent | TouchEvent): void => {
    if (!isDragging) return;

    const containerScale = getElementScale(container);

    let dx = 0;
    let dy = 0;

    if (event instanceof MouseEvent) {
      dx = (event.clientX - startX) / containerScale;
      dy = (event.clientY - startY) / containerScale;
    } else {
      dx = (event.touches[0].clientX - startX) / containerScale;
      dy = (event.touches[0].clientY - startY) / containerScale;
    }

    // Calculate the new position considering scaling
    const newLeft = initialX + dx;
    const newTop = initialY + dy;

    // Get the dimensions and scale-corrected position of the container and element
    const containerRect = container.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();

    const numbers = element.style.transform.match(/-?\d+(\.\d+)?/g);
    const result = numbers.map(Number);
    const initialElementLeftPx = elementRect.left / containerScale - result[0];
    const initialElementTopPx = elementRect.top - result[1];

    const maxRight = containerRect.width / containerScale - Math.abs(horizontalDistance / containerScale) - elementRect.width / containerScale;
    const maxLeft = containerRect.left - initialElementLeftPx;
    const maxTop = containerRect.top - initialElementTopPx;
    const maxBottom = containerRect.height / containerScale - Math.abs(verticalDistance / containerScale) - elementRect.height / containerScale;

    const newLeftClamp = newLeft + initialElementLeftPx <= containerRect.left ? maxLeft : Math.min(newLeft, maxRight);
    const newTopClamp = newTop + initialElementTopPx <= containerRect.top ? maxTop : Math.min(newTop, maxBottom);

    // Apply transform with translation within boundaries
    element.style.transform = `translate(${newLeftClamp}px, ${newTopClamp}px)`;

    // Check for overlaps and highlight only the most overlapping element
    const allElements = document.querySelectorAll<HTMLElement>("[type='drop']");
    let mostOverlappedElement: HTMLElement | null = null;
    let maxOverlapArea = 0;

    allElements.forEach(otherElement => {
      const otherRect = otherElement.getBoundingClientRect();

      // Check if there is overlap
      const overlapWidth = Math.max(0, Math.min(elementRect.right, otherRect.right) - Math.max(elementRect.left, otherRect.left));
      const overlapHeight = Math.max(0, Math.min(elementRect.bottom, otherRect.bottom) - Math.max(elementRect.top, otherRect.top));
      const overlapArea = overlapWidth * overlapHeight;

      // Update the most overlapped element if this one has a larger overlap area
      if (overlapArea > maxOverlapArea) {
        maxOverlapArea = overlapArea;
        mostOverlappedElement = otherElement;
      }
    });

    // Reset styles for all elements
    allElements.forEach(otherElement => {
      otherElement.style.border = ''; // Reset border
      otherElement.style.backgroundColor = ''; // Reset background color
    });

    // Apply styles only to the most overlapped element
    if (mostOverlappedElement) {
      mostOverlappedElement.style.border = '2px dashed #ff0000'; // Red dashed border
      mostOverlappedElement.style.backgroundColor = 'rgba(255, 0, 0, 0.1)'; // Light red background
    }
  };

  const onEnd = (endEv): void => {
    isDragging = false;
    document.removeEventListener('mousemove', onMove);
    document.removeEventListener('mouseup', onEnd);
    document.removeEventListener('touchmove', onMove);
    document.removeEventListener('touchend', onEnd);

    // Reset styles when dragging ends
    element.style.opacity = '';
    element.style.cursor = 'move';

    // Reset overlapping styles from all elements
    const allElements = document.querySelectorAll<HTMLElement>("[type='drop']");
    allElements.forEach(otherElement => {
      otherElement.style.border = ''; // Reset border
      otherElement.style.backgroundColor = ''; // Reset background color
    });

    // Check for overlaps and log the most overlapping element
    const elementRect = element.getBoundingClientRect();
    let mostOverlappedElement: HTMLElement | null = null;
    let maxOverlapArea = 0;

    allElements.forEach(otherElement => {
      const otherRect = otherElement.getBoundingClientRect();

      // Calculate overlap
      const overlapWidth = Math.max(0, Math.min(elementRect.right, otherRect.right) - Math.max(elementRect.left, otherRect.left));
      const overlapHeight = Math.max(0, Math.min(elementRect.bottom, otherRect.bottom) - Math.max(elementRect.top, otherRect.top));
      const overlapArea = overlapWidth * overlapHeight;

      // Update the most overlapped element if this one has a larger overlap area
      if (overlapArea > maxOverlapArea) {
        maxOverlapArea = overlapArea;
        mostOverlappedElement = otherElement;
      }
    });

    onElementDropComplete(element, mostOverlappedElement);
  };
  // Initialize draggable element styles
  element.style.cursor = 'move';
  element.style.transform = 'translate(0, 0)'; // Initialize transform for consistent dragging

  element.addEventListener('mousedown', onStart);
  element.addEventListener('touchstart', onStart);
  element.addEventListener('click', ev => {
    onClickDropOrDragElement(element, 'drag');
  });
}



async function onElementDropComplete(dragElement: HTMLElement, dropElement: HTMLElement): Promise<void> {
  if (!dropElement) return;

  const onMatch = dropElement.getAttribute("onMatch");

  await executeActions(onMatch, dropElement, dragElement);

  let dragScore = JSON.parse(localStorage.getItem(DragSelectedMapKey) ?? '{}');
  if (!dragScore[dropElement.getAttribute('tabindex')]) {
    dragScore[dropElement.getAttribute('tabindex')] = [];
  }
  // dragScore[mostOverlappedElement.getAttribute('tabindex')].push(element['value']);
  dragScore[dropElement.getAttribute('tabindex')] = [dragElement['value']];

  localStorage.setItem(DragSelectedMapKey, JSON.stringify(dragScore));
  const sortedKeys = Object.keys(dragScore).sort((a, b) => parseInt(a) - parseInt(b));
  const sortedValues = sortedKeys.reduce((acc, key) => acc.concat(dragScore[key]), []);
  localStorage.setItem(SelectedValuesKey, JSON.stringify(sortedValues));

  // Add pulse and highlight effect for a successful match
  if (matchStringPattern(dropElement['value'], [dragElement['value']])) {
    // Perform actions if onMatch is defined
    const onCorrectMatch = dropElement.getAttribute('onCorrectMatch');
    if (onCorrectMatch) {

      await executeActions(onCorrectMatch, dropElement, dragElement);

    }
  } else {
    const onWrong = dropElement.getAttribute('onWrong');

    await executeActions(onWrong, dropElement, dragElement);
    
    // showWrongAnswerAnimation([dropElement, dragElement]);
  }

  await onActivityComplete();
}

// Function to execute actions parsed from the onMatch string
const executeActions = async (actionsString: string, thisElement: HTMLElement, element?: HTMLElement): Promise<void> => {
  const actions = parseActions(actionsString);

  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];
    const targetElement = action.actor === 'this' ? thisElement : action.actor === 'element' ? element : document.getElementById(action.actor);

    if (targetElement) {
      // Handle the 'transform' property separately
      switch (action.action) {
        case 'transform': {
          const currentTransform = window.getComputedStyle(targetElement).transform;
          targetElement.style.transform = currentTransform !== 'none' ? `${currentTransform} ${action.value}` : action.value;
          break;
        }
        case 'alignMatch' : {
          const dropElement = targetElement;
          const dragElement = element;

          if(dropElement.childElementCount == 0){
            dragElement.style.transform = 'translate(0, 0)';
            dropElement.appendChild(dragElement);
          }else{
            dragElement.style.transform = 'translate(0, 0)';
            dragElement.parentElement.appendChild(dropElement.firstChild);
            dropElement.appendChild(dragElement);
          }
          
        }
        case 'speak': {
          {
            const audioUrl = targetElement.getAttribute('audio');
            if (audioUrl) {
              let audioElement = document.getElementById('audio') as HTMLAudioElement;
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
            break;
          }
        }

        case 'sleep': {
          const isNumber = !isNaN(Number(action.value));
          if (isNumber) {
            await new Promise(resolve => setTimeout(resolve, Number(action.value)));
          }
          break;
        }

        default: {
          targetElement.style[action.action] = action.value;
          break;
        }
      }
    }
  }
};

// Function to parse actions string
const parseActions = (input: string): Array<{ actor: string; action: string; value: string }> => {
  const actions = [];
  if (!input) return actions;
  const actionStrings = input.split(';')?.map(action => action.trim());

  actionStrings.forEach(actionString => {
    if (actionString) {
      const [actorAction, value] = actionString.split('=').map(part => part.trim());
      const lastDotIndex = actorAction.lastIndexOf('.');
      if (lastDotIndex !== -1) {
        const actor = actorAction.substring(0, lastDotIndex).trim();
        const action = actorAction.substring(lastDotIndex + 1).trim();
        actions.push({ actor, action, value: value.replace(/['"]/g, '') });
      }
    }
  });

  return actions;
};

const matchStringPattern = (pattern: string, arr: string[]): boolean => {
  
  const patternGroups = pattern.split(',').map(group => group.trim());

  let arrIndex = 0;
  let options = new Set<string>();

  for (const group of patternGroups) {
    if (group.startsWith('(') && group.endsWith(')')) {
      // Inside parentheses: '|' acts like "OR" condition
      const choices = group
        .slice(1, -1)
        .split('|')
        .map(option => option.trim());

      if (arrIndex >= arr.length) return false;

      if (!choices.includes(arr[arrIndex])) return false;

      arrIndex++;
    } else if (group.includes('|')) {
      // Outside parentheses: '|' acts as optional order
      const choices = group.split('|').map(option => option.trim());

      for (const choice of choices) {
        options.add(choice);
      }
    } else {
      // Exact match required
      if (arrIndex >= arr.length || arr[arrIndex] !== group) return false;

      arrIndex++;
    }
  }

  // Validate the optional ordered items against the remaining array elements
  while (arrIndex < arr.length) {
    if (!options.has(arr[arrIndex])) {
      return false;
    }
    options.delete(arr[arrIndex]);
    arrIndex++;
  }

  return arrIndex === arr.length;
};

const countPatternWords = (pattern: string): number => {
  const patternGroups = pattern.split(',').map(group => group.trim());

  let wordCount = 0;

  for (const group of patternGroups) {
    if (group.startsWith('(') && group.endsWith(')')) {
      wordCount += 1;
    } else {
      wordCount += group.split('|').length;
    }
  }

  return wordCount;
};

async function onActivityComplete() {

  const dragArr = document.querySelectorAll(`[type='drag']`);
  const dropArr = document.querySelectorAll(`[type='drop']`);

  const container = document.getElementById('container');
  if (!container) return;
  const objectiveString = container['objective'];
  const objectiveArray = JSON.parse(localStorage.getItem(SelectedValuesKey) ?? '[]');
  const res = matchStringPattern(objectiveString, objectiveArray);
  
  if (res) {
    
    for (let i = 0; i < dropArr.length; i++) {
      
      const dropItem = dropArr[i];
      const matchingDragItem = dragArr[i] as HTMLElement;

      if (matchingDragItem) {
        matchingDragItem.style.transform = 'translate(0, 0)'; // Reset transform
        dropItem.appendChild(matchingDragItem); // Replace in the DOM then automatically change parent
      }
    }

    const onMatch = container.getAttribute('onCorrectMatch');
    console.log('onMatch,', container, onMatch);
    if (onMatch) {
      await executeActions(onMatch, container);
    }

    localStorage.removeItem(SelectedValuesKey);
    localStorage.removeItem(DragSelectedMapKey);
    await new Promise(resolve => setTimeout(resolve, 1500));
    await new Promise(resolve => setTimeout(resolve, 2000));
    triggerNextContainer();
  }else{
    const objectName = objectiveString.split(',').map(item => item.trim());
    
    if(objectiveArray.length == objectName.length){
      const onWrong = container.getAttribute('onWrong');
      await executeActions(onWrong, container);
    }
    
  }
}

export const triggerNextContainer = () => {
  const event = new CustomEvent('nextContainer');
  console.log('🚀 ~ triggerNextContainer ~ event:', event);
  window.dispatchEvent(event);
};

export const initEventsForElement = async (element: HTMLElement, type: string) => {
  const container = document.getElementById('container');
  if (!container) return;
  const canplay = container.getAttribute('canplay');
  if (canplay != null && canplay === 'false') return;
  switch (type) {
    case 'drag': {
      enableDraggingWithScaling(element);
      break;
    }
    case 'click': {
      addClickListenerForClickType(element);
      break;
    }
    case 'drop': {
      handleDropElement(element);
      break;
    }
    default:
      break;
  }
  const onEntry = element.getAttribute('onEntry');
  await executeActions(onEntry, element);
  onTouchListenerForOnTouch(element);
};

function onTouchListenerForOnTouch(element: HTMLElement) {
  if (!element) return;
  const onTouch = element.getAttribute('onTouch');
  console.log(onTouch);

  if (!onTouch) return;
  element.onclick = async () => {
    console.log('🚀 ~ element.onclick= ~ onTouch:', onTouch);
    if (!onTouch) return;
    await executeActions(onTouch, element);
  };
}

function addClickListenerForClickType(element: HTMLElement): void {
  element.style.cursor = 'pointer';
  if (!element) {
    console.error('No element provided.');
    return;
  }

  const onClick = async () => {
    console.log('Element clicked:', element);
    localStorage.setItem(SelectedValuesKey, JSON.stringify([element['value']]));
    element.style.border = '2px solid yellow';
    element.style.boxShadow = '0px 0px 10px rgba(255, 255, 0, 0.7)';

    element.style.transition = 'transform 0.2s ease, border 0.5s ease';
    element.style.transform = 'scale(1.1)';

    element.style.transform = 'scale(1)';
    element.style.border = '';
    element.style.boxShadow = '';
    const container = document.getElementById('container');
    const objective = container['objective'];
    if (matchStringPattern(objective, [element['value']])) {
      const onTouch = element.getAttribute('onCorrectTouch');
      await executeActions(onTouch, element);

      const onContainerTouch = container.getAttribute('onCorrectTouch');
      await executeActions(onContainerTouch, element);
    } else {
      const onContainerIncorrect = container.getAttribute('onIncorrectTouch');
      await executeActions(onContainerIncorrect, element);
      const onIncorrect = element.getAttribute('onIncorrectTouch');
      await executeActions(onIncorrect, element);
      
      // showWrongAnswerAnimation([element]);
    }

    await onActivityComplete();
  };
  element.addEventListener('click', onClick);
}

export function showWrongAnswerAnimation(elements: HTMLElement[]): void {
  const styleId = 'wrong-answer-animation-style';

  executeActions("tryAgain.speak='true'", document.getElementById('tryAgain'));

  // Check if the style is already added, if not, add it
  if (!document.getElementById(styleId)) {
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

function handleDropElement(element: HTMLElement): void {
  element.onclick = () => {
    onClickDropOrDragElement(element, 'drop');
  };
}

async function onClickDropOrDragElement(element: HTMLElement, type: 'drop' | 'drag'): Promise<void> {
  // Remove the highlight class from elements matching the selector
  const highlightedElements = document.querySelectorAll(`[type='${type}']`);
  
  highlightedElements.forEach(el => {
    removeHighlight(el as HTMLElement);
  });

  // Dynamically create the highlight class if it doesn't exist
  if (!document.getElementById('dynamic-highlight-style')) {
    const style = document.createElement('style');
    style.id = 'dynamic-highlight-style';
    style.innerHTML = `
      .highlight {
        border: 4px solid #e74c3c; /* Thicker red border for more visibility */
        border-radius: 12px; /* Larger rounded corners */
        background-color: rgba(231, 76, 60, 0.3); /* Stronger, more noticeable background */
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2), 0 12px 40px rgba(0, 0, 0, 0.2); /* Stronger shadow */
        outline: 4px solid rgba(231, 76, 60, 0.6); /* Glow effect */
      }
    `;

    document.head.appendChild(style);
  }

  element?.classList.add('highlight');
  element.ariaPressed = 'true';

  const selectedDropElement: HTMLElement = type === 'drop' ? element : document.querySelector("[type='drop'].highlight");
  const selectedDragElement: HTMLElement = type === 'drag' ? element : document.querySelector("[type='drag'].highlight");

 
  if (selectedDropElement && selectedDragElement) {
    // Add a transition for a smooth, slower movement
    (selectedDragElement as HTMLElement).style.transition = 'transform 0.5s ease'; // 0.5s for a slower move

    // Reset the transform of the drag element before calculating the new position
    (selectedDragElement as HTMLElement).style.transform = '';
    const container = document.getElementById('container');

    const containerScale = getElementScale(container);
    console.log('🚀 ~ onClickDropOrDragElement ~ containerScale:', containerScale);

    // Get the positions of the drop and drag elements
    const dropRect = selectedDropElement.getBoundingClientRect();
    const dragRect = selectedDragElement.getBoundingClientRect();

    // Calculate the difference in positions
    const translateX = (dropRect.left - dragRect.left) / containerScale;
    const translateY = (dropRect.top - dragRect.top) / containerScale;

    // Move the drag element to the drop position
    selectedDragElement.style.transform = `translate(${translateX}px, ${translateY}px)`;

    // Remove highlights after moving the element
    const allElements = document.querySelectorAll(`*`);
    allElements.forEach(el => {
      removeHighlight(el as HTMLElement);
    });
    await new Promise(resolve => setTimeout(resolve, 500));
    await onElementDropComplete(selectedDragElement, selectedDropElement);
    await new Promise(resolve => setTimeout(resolve, 500));
    selectedDragElement.style.transform = 'translate(0px, 0px)';
  }
}

function removeHighlight(element: HTMLElement): void {
  element.classList.remove('highlight');
  element.ariaPressed = 'false';
}

// Function to highlight the speaking element
function highlightSpeakingElement(element: HTMLElement): void {
  if (!element) return;

  // Add a custom class for highlighting
  element.classList.add('speaking-highlight');

  // Inject keyframe animation and class styles into the document's head if it doesn't already exist
  const styleId = 'speaking-highlight-style';
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.innerHTML = `
      .speaking-highlight {
        box-shadow: 0 0 20px 10px rgba(255, 165, 0, 0.9); /* Stronger orange glow effect */
        border: 3px solid orange;
        transition: box-shadow 0.5s ease-in-out, transform 0.5s ease-in-out;
        transform: scale(1.05); /* Subtle scale effect to pop the element */
        animation: pulseEffect 1.5s infinite; /* Pulsing animation */
      }

      @keyframes pulseEffect {
        0% {
          box-shadow: 0 0 20px 10px rgba(255, 165, 0, 0.9);
          transform: scale(1.05);
        }
        50% {
          box-shadow: 0 0 30px 15px rgba(255, 165, 0, 1);
          transform: scale(1.1);
        }
        100% {
          box-shadow: 0 0 20px 10px rgba(255, 165, 0, 0.9);
          transform: scale(1.05);
        }
      }
    `;
    document.head.appendChild(style);
  }
}

// Function to stop highlighting
function stopHighlightForSpeakingElement(element: HTMLElement): void {
  if (!element) return;

  // Remove the custom class for highlighting
  element.classList.remove('speaking-highlight');

  // Remove inline styles
  element.style.boxShadow = '';
  element.style.border = '';
}
