import { ActivityScoreKey, DragSelectedMapKey, DropHasDrag, DropLength, LessonEndKey, SelectedValuesKey } from './constants';
import { dispatchActivityEndEvent, dispatchClickEvent, dispatchElementDropEvent, dispatchLessonEndEvent, dispatchNextContainerEvent } from './customEvents';
import GameScore from './constants';
import { RiveService } from './rive-service';
import { getAssetPath } from '@stencil/core';
import { AudioPlayer } from './audioPlayer';
const gameScore = new GameScore();

export function format(first?: string, middle?: string, last?: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

// Function to get the scale of an element
const getElementScale = (el: HTMLElement): number => {
  el.style.animation = 'unset';
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

function slidingWithScaling(element: HTMLElement): void {
  let overlapElement = false;
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let initialX = 0;
  let initialY = 0;

  // Fetch the container element
  const parentElement = element.parentElement;
  if (!parentElement) {
    console.error(`Parent element not found.`);
    return;
  }

  let verticalDistance;
  let horizontalDistance;

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

    const rect1 = parentElement.getBoundingClientRect();
    const rect2 = element.getBoundingClientRect();
    verticalDistance = rect1.top - rect2.top;
    horizontalDistance = rect1.left - rect2.left;

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onEnd);
    document.addEventListener('touchmove', onMove);
    document.addEventListener('touchend', onEnd);
  };

  const observer = new MutationObserver(mutationsList => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
        const rect1 = parentElement.getBoundingClientRect();
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
  observer.observe(parentElement, observerConfig);

  const onMove = (event: MouseEvent | TouchEvent): void => {
    if (!isDragging) return;
    const parentElementScale = getElementScale(parentElement);
    let dx = 0;
    let dy = 0;

    if (event instanceof MouseEvent) {
      dx = (event.clientX - startX) / parentElementScale;
      dy = (event.clientY - startY) / parentElementScale;
    } else {
      dx = (event.touches[0].clientX - startX) / parentElementScale;
      dy = (event.touches[0].clientY - startY) / parentElementScale;
    }

    // Calculate the new position considering scaling
    const newLeft = initialX + dx;
    const newTop = initialY + dy;

    // Get the dimensions and scale-corrected position of the container and element
    const containerRect = parentElement.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();

    const numbers = element.style.transform.match(/-?\d+(\.\d+)?/g);
    const result = numbers.map(Number);
    const initialElementLeftPx = elementRect.left / parentElementScale - result[0];
    const initialElementTopPx = elementRect.top - result[1];
    const initialElementRightPx = elementRect.right / parentElementScale - result[0];
    const initialElementBottomPx = elementRect.bottom - result[1];

    const maxRight = containerRect.right - initialElementRightPx;
    const maxLeft = containerRect.left - initialElementLeftPx;
    const maxTop = containerRect.top - initialElementTopPx;
    const maxBottom = containerRect.bottom - initialElementBottomPx;

    const newLeftClamp = newLeft + initialElementLeftPx <= containerRect.left ? maxLeft : Math.min(newLeft, maxRight);
    const newTopClamp = newTop + initialElementTopPx <= containerRect.top ? maxTop : Math.min(newTop, maxBottom);

    // Apply transform with translation within boundaries
    element.style.transform = `translate(${newLeftClamp}px, ${newTopClamp}px)`;

    // Check for overlaps and highlight only the most overlapping element
    let mostOverlappedElement: HTMLElement = findMostoverlappedElement(element, 'slide');

    // Apply styles only to the most overlapped element
    if (mostOverlappedElement) {
      if (mostOverlappedElement != element) {
        const parent1 = element.parentElement;
        const parent2 = mostOverlappedElement.parentElement;

        if (parent1 && parent2) {
          // Temporarily detach both elements
          const elementPlaceholder = document.createComment('element-placeholder');
          const overlappedPlaceholder = document.createComment('overlapped-placeholder');
          parent1.replaceChild(elementPlaceholder, element);
          parent2.replaceChild(overlappedPlaceholder, mostOverlappedElement);
          // Swap the elements
          parent1.replaceChild(mostOverlappedElement, elementPlaceholder);
          parent2.replaceChild(element, overlappedPlaceholder);
          element.style.transform = 'translate(0, 0)';

          // Recalculate starting points for the swapped element
          startX = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
          startY = event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;
          initialX = 0;
          initialY = 0;
          overlapElement = true;
        }
      }
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
    element.style.transform = 'translate(0, 0)';

    if (overlapElement) {
      slideCompleted(element);
      overlapElement = false;
    }
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

const slideCompleted = (slideElement: HTMLElement) => {
  const slideArr = JSON.parse(localStorage.getItem(SelectedValuesKey)) || [];
  const allSlideElements = document.querySelectorAll("[type='slide']");

  let index = 0;
  allSlideElements.forEach(item => {
    slideArr[index++] = item['value'];
  });
  localStorage.setItem(SelectedValuesKey, JSON.stringify(slideArr));

  const objectiveString = document.querySelector('#lido-container')['objective'];
  const objectiveArray = objectiveString.split(',');
  const elementIndex = slideArr.indexOf(slideElement['value']);
  const isCorrect = matchStringPattern(slideElement['value'], [objectiveArray[elementIndex].trim()]);
  storingEachActivityScore(isCorrect);
  handleShowCheck();
};

function enableDraggingWithScaling(element: HTMLElement): void {
  let isDragging = false;
  let isClicked = false;
  let startX = 0;
  let startY = 0;
  let initialX = 0;
  let initialY = 0;
  let originalTransform = '';
  let clone: HTMLElement | null = null;

  // Fetch the container element
  const container = document.querySelector('#lido-container') as HTMLElement;
  if (!container) {
    console.error(`Container with ID "container" not found.`);
    return;
  }

  handlingElementFlexibleWidth(element, 'drag');

  let verticalDistance;
  let horizontalDistance;

  const onStart = (event: MouseEvent | TouchEvent): void => {
    AudioPlayer.getI().stop();
    removeHighlight(element);
    isDragging = true;
    isClicked = true;

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

    const diagonalDropEffect = element.getAttribute('dropAttr')?.toLowerCase() === 'diagonal';
    if(diagonalDropEffect) {
      const computedStyle = window.getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      if (!clone) {
        clone = element.cloneNode(true) as HTMLElement;
        // clone.style.left = `${rect.left - 230}px`; for appending into parent (landscape)
        // clone.style.top = `${rect.top}px`;
        clone.style.left = `${rect.left}px`;
        clone.style.top = `${rect.top}px`;
        clone.style.width = `${rect.width}px`;
        clone.style.height = `${rect.height}px`;
        clone.style.transform = computedStyle.transform;
        clone.setAttribute('visible', 'true');
        clone.classList.add('cloned-element');
        document.body.appendChild(clone);
  
        // for appending into parent
        // const parent = element.parentElement;
        // if (parent) {
        //   parent.style.position = parent.style.position || 'relative';
        //   parent.appendChild(clone);
        // }
      }
    }

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
  verticalDistance = rect1.top - rect2.top;
  horizontalDistance = rect1.left - rect2.left;

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
    isClicked = false;
    element.style.transition = 'none';
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
    let mostOverlappedElement: HTMLElement = findMostoverlappedElement(element, 'drop');

    const allElements = document.querySelectorAll<HTMLElement>("[type='drop']");
    // Reset styles for all elements
    allElements.forEach(otherElement => {
      const dropObject = JSON.parse(localStorage.getItem(DragSelectedMapKey)) || {};
      const storedTabIndexes = Object.keys(dropObject).map(Number);
      if (storedTabIndexes.includes(otherElement['tabIndex'])) {
        if (otherElement.tagName.toLowerCase() === 'lido-text') {
          otherElement.style.border = ''; // Reset border
          otherElement.style.backgroundColor = 'transparent'; // Reset background color
        }
        if (otherElement.tagName.toLowerCase() === 'lido-image') {
          otherElement.style.opacity = '0';
        }
      } else {
        if (otherElement.tagName.toLowerCase() === 'lido-text') {
          otherElement.style.border = ''; // Reset border
          otherElement.style.backgroundColor = ''; // Reset background color
        }
        if (otherElement.tagName.toLowerCase() === 'lido-image') {
          otherElement.style.opacity = '1';
        }
      }
    });
    // Apply styles only to the most overlapped element
    if (mostOverlappedElement) {
      if (mostOverlappedElement.tagName.toLowerCase() === 'lido-text') {
        mostOverlappedElement.style.border = '2px dashed #ff0000'; // Red dashed border
        mostOverlappedElement.style.backgroundColor = 'rgba(255, 0, 0, 0.1)'; // Light red background
      } else {
        mostOverlappedElement.style.opacity = '0.3';
      }
    }
  };

  let lastOverlappedElement: HTMLElement | null = null;
  const onEnd = (endEv): void => {
    isDragging = false;
    if (isClicked) return;
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
      allElements.forEach(otherElement => {
        const dropObject = JSON.parse(localStorage.getItem(DragSelectedMapKey)) || {};
        const storedTabIndexes = Object.keys(dropObject).map(Number);
        if (storedTabIndexes.includes(otherElement['tabIndex'])) {
          if (otherElement.tagName.toLowerCase() === 'lido-text') {
            otherElement.style.border = ''; // Reset border
            otherElement.style.backgroundColor = 'transparent'; // Reset background color
          }
          if (otherElement.tagName.toLowerCase() === 'lido-image') {
            otherElement.style.opacity = '0';
          }
        } else {
          if (otherElement.tagName.toLowerCase() === 'lido-text') {
            otherElement.style.border = ''; // Reset border
            otherElement.style.backgroundColor = ''; // Reset background color
          }
          if (otherElement.tagName.toLowerCase() === 'lido-image') {
            otherElement.style.opacity = '1';
          }
        }
      });
    });

    // Check for overlaps and log the most overlapping element
    let mostOverlappedElement: HTMLElement | null = findMostoverlappedElement(element, 'drop');
    onElementDropComplete(element, mostOverlappedElement);

    const containerElement = element.getAttribute('dropAttr')?.toLowerCase() === 'diagonal';
    if (containerElement) {
      if (mostOverlappedElement) {
          if (element) {
              element.classList.add('diagonal-drop');
              mostOverlappedElement.classList.add('diagonal-target');
              lastOverlappedElement = mostOverlappedElement;
          }
      } else {
          if (lastOverlappedElement) {
              lastOverlappedElement.classList.remove('diagonal-target');
              lastOverlappedElement = null;
          }
  
          element?.classList.remove('diagonal-drop');

          element.style.transform = `translate(0, 0)`; // drop to original position
          if (clone) {
            clone.remove();
            clone = null;
          }
      }
    }
  };
  // Initialize draggable element styles
  element.style.cursor = 'move';
  element.style.transform = 'translate(0, 0)'; // Initialize transform for consistent dragging
  element.addEventListener('mousedown', onStart);
  element.addEventListener('touchstart', onStart);
  element.addEventListener('click', ev => {
    if(isClicked){
      onClickDropOrDragElement(element, 'drag');
    }
  });
}

const findMostoverlappedElement = (element: HTMLElement, type: string) => {
  const elementRect = element.getBoundingClientRect();
  const allElements = document.querySelectorAll<HTMLElement>(`[type="${type}"]`);

  let mostOverlappedElement: HTMLElement | null = null;
  let maxOverlapArea = 0;

  allElements.forEach(otherElement => {
    if (otherElement === element) return;
    const otherRect = otherElement.getBoundingClientRect();

    const overlapWidth = Math.max(0, Math.min(elementRect.right, otherRect.right) - Math.max(elementRect.left, otherRect.left));
    const overlapHeight = Math.max(0, Math.min(elementRect.bottom, otherRect.bottom) - Math.max(elementRect.top, otherRect.top));
    const overlapArea = overlapWidth * overlapHeight;

    if (overlapArea === 0) return; 

    if (type === 'slide') {
      const elementArea = elementRect.width * elementRect.height;
      const otherArea = otherRect.width * otherRect.height;
      const minRequiredOverlap = Math.min(elementArea, otherArea) * 0.8;

      if (overlapArea >= minRequiredOverlap && overlapArea > maxOverlapArea) {
        maxOverlapArea = overlapArea;
        mostOverlappedElement = otherElement;
      }
    } else if (overlapArea > maxOverlapArea) {
      maxOverlapArea = overlapArea;
      mostOverlappedElement = otherElement;
    }
  });

  return mostOverlappedElement;
};

async function onElementDropComplete(dragElement: HTMLElement, dropElement: HTMLElement): Promise<void> {
  const selectedValueData = localStorage.getItem(SelectedValuesKey) || '';
  const dragSelectedData = localStorage.getItem(DragSelectedMapKey);
  let dropHasDrag = JSON.parse(localStorage.getItem(DropHasDrag) || ' {}') as Record<string, { drop: string; isFull: boolean }>;
  if (dropElement) {

    if (dropElement.getAttribute('isAllowOnlyOneDrop') === 'true' || !dropElement.getAttribute('isAllowOnlyOneDrop')) {
      const isisFull = Object.values(dropHasDrag).find(item => document.getElementById(item.drop) === dropElement);
      if (isisFull) {
        isisFull.isFull = true;
      } else {
        console.warn('No matching drop item found for', dropElement);
      }
      localStorage.setItem(DropHasDrag, JSON.stringify(dropHasDrag));
      // Check for overlaps and highlight only the most overlapping element
      let mostOverlappedElement: HTMLElement = findMostoverlappedElement(dragElement, 'drag');
      if (mostOverlappedElement) {
        dragElement.style.transform = 'translate(0,0)';
        dragElement.style.transition = 'transform 0.5s ease';

        if (dragSelectedData) {
          let dragSelected = JSON.parse(dragSelectedData);
          for (const key in dragSelected) {
            if (dragSelected[key].includes(dragElement['value'])) {
              delete dragSelected[key];
            }
          }
          localStorage.setItem(DragSelectedMapKey, JSON.stringify(dragSelected));
        }
        const allElements = document.querySelectorAll<HTMLElement>("[type='drop']");
        allElements.forEach(otherElement => {
          const dropObject = JSON.parse(localStorage.getItem(DragSelectedMapKey)) || {};
          const storedTabIndexes = Object.keys(dropObject).map(Number);
          if (storedTabIndexes.includes(otherElement['tabIndex'])) {
            if (otherElement.tagName.toLowerCase() === 'lido-text') {
              otherElement.style.border = ''; // Reset border
              otherElement.style.backgroundColor = 'transparent'; // Reset background color
            }
            if (otherElement.tagName.toLowerCase() === 'lido-image') {
              otherElement.style.opacity = '0';
            }
          } else {
            if (otherElement.tagName.toLowerCase() === 'lido-text') {
              otherElement.style.border = ''; // Reset border
              otherElement.style.backgroundColor = ''; // Reset background color
            }
            if (otherElement.tagName.toLowerCase() === 'lido-image') {
              otherElement.style.opacity = '1';
            }
          }
        }); 
        return;
      }
      
    }
  }
  if (!dropElement) {
    dragElement.style.transform = 'translate(0,0)';
    dragElement.style.transition = "transform 0.5s ease";
    let currentDrop = dragToDropMap.get(dragElement);
    if (currentDrop) {
      let prevDropItem = Object.values(dropHasDrag).find(item => document.getElementById(item.drop) === currentDrop);
      if (prevDropItem) {
        prevDropItem.isFull = false;
        localStorage.setItem(DropHasDrag, JSON.stringify(dropHasDrag));
      }
      dragToDropMap.delete(dragElement);
    }

    if (selectedValueData) {
      let selectedValue = JSON.parse(selectedValueData);
      selectedValue = selectedValue.filter(value => value != dragElement['value']);
      localStorage.setItem(SelectedValuesKey, JSON.stringify(selectedValue));
    }
    if (dragSelectedData) {
      let dragSelected = JSON.parse(dragSelectedData);
      for (const key in dragSelected) {
        if (dragSelected[key].includes(dragElement['value'])) {
          delete dragSelected[key];
        }
      }
      localStorage.setItem(DragSelectedMapKey, JSON.stringify(dragSelected));
    }

    const allElements = document.querySelectorAll<HTMLElement>("[type='drop']");
    allElements.forEach(otherElement => {
      const dropObject = JSON.parse(localStorage.getItem(DragSelectedMapKey)) || {};
      const storedTabIndexes = Object.keys(dropObject).map(Number);
      if (storedTabIndexes.includes(otherElement['tabIndex'])) {
        if (otherElement.tagName.toLowerCase() === 'lido-text') {
          otherElement.style.border = ''; // Reset border
          otherElement.style.backgroundColor = 'transparent'; // Reset background color
        }
        if (otherElement.tagName.toLowerCase() === 'lido-image') {
          otherElement.style.opacity = '0';
        }
      } else {
        if (otherElement.tagName.toLowerCase() === 'lido-text') {
          otherElement.style.border = ''; // Reset border
          otherElement.style.backgroundColor = ''; // Reset background color
        }
        if (otherElement.tagName.toLowerCase() === 'lido-image') {
          otherElement.style.opacity = '1';
        }
      }
    });

    handleShowCheck();
    return;
  }

  if (dragSelectedData) {
    let currentDrop = dragToDropMap.get(dragElement);
    if (currentDrop) {
      let prevDropItem = Object.values(dropHasDrag).find(item => document.getElementById(item.drop) === currentDrop);
      if (prevDropItem) {
        prevDropItem.isFull = false;
        localStorage.setItem(DropHasDrag, JSON.stringify(dropHasDrag));
      }
    }
    let dragSelected = JSON.parse(dragSelectedData);
    for (const key in dragSelected) {
      if (dragSelected[key].includes(dragElement['value'])) {
        delete dragSelected[key];
      }
    }
    localStorage.setItem(DragSelectedMapKey, JSON.stringify(dragSelected));
  }
  let dropLength = JSON.parse(localStorage.getItem(DropLength)) || 0;
  dropLength += 1;
  localStorage.setItem(DropLength, JSON.stringify(dropLength));

  if (dropLength === countPatternWords(dropElement["value"])) {
    const isisFull = Object.values(dropHasDrag).find(item => document.getElementById(item.drop) === dropElement);
    if (isisFull) {
      isisFull.isFull = true;
    } else {
      console.warn('No matching drop item found for', dropElement);
    }
    localStorage.setItem(DropHasDrag, JSON.stringify(dropHasDrag));
    dropLength = 0;
    localStorage.setItem(DropLength, JSON.stringify(dropLength));
  }

  dragToDropMap.set(dragElement, dropElement);

  // Add pulse and highlight effect for a successful match
  const isCorrect = dropElement['value'].includes(dragElement['value']);
  dispatchElementDropEvent(dragElement, dropElement, isCorrect);
  if (isCorrect) {
    // Perform actions if onMatch is defined
    const onCorrect = dropElement.getAttribute('onCorrect');
    if (onCorrect) {
      await executeActions(onCorrect, dropElement, dragElement);
    }
  } else {
    const onInCorrect = dropElement.getAttribute('onInCorrect');

    await executeActions(onInCorrect, dropElement, dragElement);

    // showWrongAnswerAnimation([dropElement, dragElement]);
  }
  storingEachActivityScore(isCorrect);
  dragElement.style.opacity = '1';
  await onActivityComplete(dragElement, dropElement);
}

// Function to execute actions parsed from the onMatch string
const executeActions = async (actionsString: string, thisElement: HTMLElement, element?: HTMLElement): Promise<void> => {
  const actions = parseActions(actionsString);

  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];

    const queriedElement = document.querySelector(action.actor) as HTMLElement | null;
    const targetElement = action.actor === 'this' ? thisElement : action.actor === 'element' ? element : queriedElement ? queriedElement : document.getElementById(action.actor);

    if (targetElement) {
      // Handle the 'transform' property separately
      switch (action.action) {
        case 'transform': {
          const currentTransform = window.getComputedStyle(targetElement).transform;
          targetElement.style.transform = currentTransform !== 'none' ? `${currentTransform} ${action.value}` : action.value;
          break;
        }
        case 'alignMatch': {
          const dropElement = targetElement;
          const dragElement = element;
          const diagonalDropping = element.getAttribute('dropAttr')?.toLowerCase() === 'diagonal';

          const container = document.querySelector('#lido-container') as HTMLElement;
          const containerScale = getElementScale(container);
          dragElement.style.transform = 'translate(0,0)';

          const dropRect = dropElement.getBoundingClientRect();
          const dragRect = dragElement.getBoundingClientRect();

          const dropCenterX = dropRect.left + dropRect.width / 2;
          const dropCenterY = dropRect.top + dropRect.height / 2;
          const dragCenterX = dragRect.left + dragRect.width / 2;
          const dragCenterY = dragRect.top + dragRect.height / 2;

          const scaledLeft = (dropCenterX - dragCenterX) / containerScale;
          const scaledTop = (dropCenterY - dragCenterY) / containerScale;
          
          if (diagonalDropping) {
            dragElement.style.transform = `translate(${scaledLeft - 90}px, ${scaledTop - 90}px)`;
          } else {
            dragElement.style.transform = `translate(${scaledLeft}px, ${scaledTop}px)`;
          }
          break;
        }
        case 'removeClone': {
          const clonedElements = document.querySelectorAll(action.value);
          clonedElements.forEach(el => el.remove());
          break;
        }
        case 'addClass': {
          targetElement.classList.add(action.value);
          break;
        }
        case 'speak': {
          await AudioPlayer.getI().play(targetElement);
          break;
        }
        case 'stop': {
          await AudioPlayer.getI().stop();
          break;
        }

        case 'sleep': {
          const isNumber = !isNaN(Number(action.value));
          if (isNumber) {
            await new Promise(resolve => setTimeout(resolve, Number(action.value)));
          }
          break;
        }

        case 'avatarAnimate': {
          const riveService = RiveService.getInstance();
          const riveInstance = riveService.getRiveInstance();

          if (riveInstance && action.value) {
            riveInstance.play(action.value);
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

      const arrChoice = arr[arrIndex]
        .slice(1, -1)
        .split('|')
        .map(option => option.trim());

      if (arrIndex >= arrChoice.length) return false;
      for (let i = 0; i < choices.length; i++) {
        if (!choices.includes(arrChoice[i])) return false;
      }
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
      if (group.includes('|')) {
        wordCount += group.split('|').length;
      } else {
        wordCount += 1;
      }
    } else {
      wordCount += group.split('|').length;
    }
  }

  return wordCount;
};

async function onActivityComplete(dragElement?: HTMLElement, dropElement?: HTMLElement) {
  const container = document.querySelector('#lido-container') as HTMLElement;
  if (!container) return;

  const isAllowOnlyCorrect = container.getAttribute('isAllowOnlyCorrect') === 'true';
  if (isAllowOnlyCorrect) {
    const isCorrect = dropElement['value'].includes(dragElement['value']);
    if (!isCorrect) {
      dragElement.style.transform = 'translate(0,0)';
      return;
    }
  }

  await executeActions("this.alignMatch='true'", dropElement, dragElement);

  let dragScore = JSON.parse(localStorage.getItem(DragSelectedMapKey) ?? '{}');
  const tabindex = dropElement.getAttribute('tabindex');

  if (!dragScore[tabindex]) {
    dragScore[tabindex] = [];
  }

  dragScore[tabindex].push(dragElement['value']);

  localStorage.setItem(DragSelectedMapKey, JSON.stringify(dragScore));

  const sortedKeys = Object.keys(dragScore).sort((a, b) => parseInt(a) - parseInt(b));

  const sortedValues = sortedKeys.reduce((acc, key) => {
    const values = dragScore[key];
    if (values.length > 1) {
      acc.push(`(${values.join('|')})`);
    } else {
      acc.push(values[0]);
    }
    return acc;
  }, []);

  localStorage.setItem(SelectedValuesKey, JSON.stringify(sortedValues));

  const allElements = document.querySelectorAll<HTMLElement>("[type='drop']");
  allElements.forEach(otherElement => {
    const dropObject = JSON.parse(localStorage.getItem(DragSelectedMapKey)) || {};
    const storedTabIndexes = Object.keys(dropObject).map(Number);
    if (storedTabIndexes.includes(otherElement['tabIndex'])) {
      if (otherElement.tagName.toLowerCase() === 'lido-text') {
        otherElement.style.border = ''; // Reset border
        otherElement.style.backgroundColor = 'transparent'; // Reset background color
      }
      if (otherElement.tagName.toLowerCase() === 'lido-image') {
        otherElement.style.opacity = '0';
      }
    } else {
      if (otherElement.tagName.toLowerCase() === 'lido-text') {
        otherElement.style.border = ''; // Reset border
        otherElement.style.backgroundColor = ''; // Reset background color
      }
      if (otherElement.tagName.toLowerCase() === 'lido-image') {
        otherElement.style.opacity = '1';
      }
    }
  });
  handleShowCheck();
}

const storingEachActivityScore = (flag: boolean) => {
  if (flag) {
    gameScore.rightMoves += 1;
  } else {
    gameScore.wrongMoves += 1;
  }
  console.log('Right Moves : ', gameScore.rightMoves);
  console.log('Wrong Moves : ', gameScore.wrongMoves);
};

const calculateScore = () => {
  const rightMoves = gameScore.rightMoves;
  const wrongMoves = gameScore.wrongMoves;
  let finalScore = Math.floor((rightMoves / (rightMoves + wrongMoves)) * 100);
  storeActivityScore(finalScore);
  gameScore.rightMoves = 0;
  gameScore.wrongMoves = 0;
};

const storeActivityScore = (score: number) => {
  const appHome = document.querySelector('lido-home');
  if (!appHome) return;
  const index = Number(appHome.getAttribute('index') ?? 0);
  const totalIndex = Number(appHome.getAttribute('totalIndex') ?? 0);

  const activityScore = JSON.parse(localStorage.getItem(ActivityScoreKey) ?? '{}');
  const activityScoreKey = index.toString();
  activityScore[activityScoreKey] = score;

  //send Custom Event to parent
  // window.dispatchEvent(new CustomEvent(ActivityEndKey, { detail: { index: index, totalIndex: totalIndex, score: score } }));
  dispatchActivityEndEvent(index, totalIndex, score);

  localStorage.setItem(ActivityScoreKey, JSON.stringify(activityScore));
  if (totalIndex - 1 == index) {
    const scoresArray: number[] = Object.values(activityScore);
    const finalScore = scoresArray.reduce((acc, cur) => acc + cur, 0) / scoresArray.length;
    gameScore.finalScore = Math.floor(finalScore);
    console.log('Total Score : ', gameScore.finalScore);
    // window.dispatchEvent(new CustomEvent(LessonEndKey, { detail: { score: finalScore } }));
    dispatchLessonEndEvent(finalScore);
    localStorage.removeItem(ActivityScoreKey);
  }
};

const handleShowCheck = () => {
  const container = document.querySelector('#lido-container') as HTMLElement;
  const objectiveString = container['objective'];
  const selectValues = localStorage.getItem(SelectedValuesKey) ?? '';

  const checkButton = document.querySelector('#lido-checkButton') as HTMLElement;

  if (!selectValues || countPatternWords(selectValues) !== countPatternWords(objectiveString)) {
    executeActions("this.addClass='lido-disable-check-button'", checkButton);
    return;
  }

  const showCheck = container.getAttribute('showCheck') == 'true';

  if (showCheck) {
    checkButton.classList.remove('lido-disable-check-button');
  } else {
    validateObjectiveStatus();
  }
};

const validateObjectiveStatus = async () => {
  const container = document.querySelector('#lido-container') as HTMLElement;
  if (!container) return;
  const objectiveString = container['objective'];
  const objectiveArray = JSON.parse(localStorage.getItem(SelectedValuesKey)) ?? [];
  const res = matchStringPattern(objectiveString, objectiveArray);

  if (res) {
    // appendingDragElementsInDrop();
    const onCorrect = container.getAttribute('onCorrect');
    if (onCorrect) {
      await executeActions(onCorrect, container);
    }
    triggerNextContainer();
  } else {
    const onInCorrect = container.getAttribute('onInCorrect');
    await executeActions(onInCorrect, container);
    const isContinueOnCorrect = container.getAttribute('isContinueOnCorrect') === 'true';
    if (!isContinueOnCorrect) {
      triggerNextContainer();
    }
  }
  await calculateScore();
};

const appendingDragElementsInDrop = () => {
  const dragItems = document.querySelectorAll("[type='drag']");
  const dropItems = document.querySelectorAll("[type='drop']");
  if (!dragItems || !dropItems) return;
  dropItems.forEach(dropElement => {
    dragItems.forEach(dragElement => {
      const drag = dragElement as HTMLElement;
      const drop = dropElement as HTMLElement;
      if (drop['value'].includes(drag['value'])) {
        drag.style.transform = 'translate(0,0)';
        drop.appendChild(drag);
      }
    });
  });
};

export const triggerNextContainer = () => {
  AudioPlayer.getI().stop();
  // const event = new CustomEvent('nextContainer');
  console.log('🚀 ~ triggerNextContainer ~ event:', event);
  // window.dispatchEvent(event);
  dispatchNextContainerEvent();
};

export const initEventsForElement = async (element: HTMLElement, type: string) => {
  const container = document.querySelector('#lido-container') as HTMLElement;
  if (!container) return;
  const onEntry = element.getAttribute('onEntry');
  await executeActions(onEntry, element);
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
    case 'slide': {
      slidingWithScaling(element);
      break;
    }
    default:
      break;
  }

  onTouchListenerForOnTouch(element);
};

function onTouchListenerForOnTouch(element: HTMLElement) {
  if (!element) return;
  const onTouch = element.getAttribute('onTouch');
  if (!onTouch) return;
  element.onclick = async () => {
    console.log('🚀 ~ element.onclick= ~ onTouch:', onTouch);
    if (!onTouch) return;
    await executeActions(onTouch, element);
  };
}

function addClickListenerForClickType(element: HTMLElement): void {
  handlingElementFlexibleWidth(element, 'click');
  element.style.cursor = 'pointer';
  if (!element) {
    console.error('No element provided.');
    return;
  }

  const onClick = async () => {
    AudioPlayer.getI().stop();
    const container = document.querySelector('#lido-container') as HTMLElement;
    const objective = container['objective'].split(',');
    const checkButton = document.querySelector('#lido-checkButton') as HTMLElement;
    const showCheck = container.getAttribute('showCheck') === 'true';

    if (element.getAttribute('id') == 'lido-checkButton') {
      checkButton.classList.add('lido-disable-check-button');
      await validateObjectiveStatus();
      return;
    }

    // element.style.border = '2px solid yellow';
    // element.style.boxShadow = '0px 0px 10px rgba(255, 255, 0, 0.7)';

    // element.style.transition = 'transform 0.2s ease, border 0.5s ease';
    // element.style.transform = 'scale(1.1)';

    // element.style.transform = 'scale(1)';
    // element.style.border = '';
    // element.style.boxShadow = '';

    const isActivated = element.classList.contains('lido-element-selected');
    let selectedValue = JSON.parse(localStorage.getItem(SelectedValuesKey)) || [];

    if (objective.length === 1) {
      localStorage.setItem(SelectedValuesKey, JSON.stringify([element['value']]));
      const isCorrect = objective.includes(element['value']);
      dispatchClickEvent(element, isCorrect);
      if (isCorrect) {
        const onCorrect = element.getAttribute('onCorrect');
        element.style.pointerEvents = "none";
        await executeActions(onCorrect, element);
      } else {
        const onInCorrect = element.getAttribute('onInCorrect');
        await executeActions(onInCorrect, element);
        // showWrongAnswerAnimation([element]);
      }
      storingEachActivityScore(isCorrect);
      handleShowCheck();
      return;
    }

    if (showCheck) {
      checkButton.classList.remove('lido-disable-check-button');
    }

    if (isActivated) {
      element.classList.remove('lido-element-selected');
      executeActions(element.getAttribute('onEntry'), element);

      selectedValue = selectedValue.filter(item => item != element['value']);
      localStorage.setItem(SelectedValuesKey, JSON.stringify(selectedValue));

      let multiOptionScore = JSON.parse(localStorage.getItem(DragSelectedMapKey)) || {};
      const valueToRemove = element['value'];
      const keyToRemove = Object.keys(multiOptionScore).find(key => multiOptionScore[key].includes(valueToRemove));

      if (keyToRemove) {
        multiOptionScore[keyToRemove] = multiOptionScore[keyToRemove].filter(item => item !== valueToRemove);
        if (multiOptionScore[keyToRemove].length === 0) {
          delete multiOptionScore[keyToRemove];
        }
        localStorage.setItem(DragSelectedMapKey, JSON.stringify(multiOptionScore));
        const sortedKeys = Object.keys(multiOptionScore).sort((a, b) => parseInt(a) - parseInt(b));
        const sortedValues = sortedKeys.reduce((acc, key) => acc.concat(multiOptionScore[key]), []);
        localStorage.setItem(SelectedValuesKey, JSON.stringify(sortedValues));
      }

      if (showCheck && selectedValue.length === 0) {
        checkButton.classList.add('lido-disable-check-button');
      }
      return;
    } else {
      element.classList.add('lido-element-selected');
      const valueToFind = element['value'];
      const key = Object.keys(objective).find(key => objective[key] === valueToFind);
      let multiOptionScore = JSON.parse(localStorage.getItem(DragSelectedMapKey)) || {};
      if (!key) {
        multiOptionScore[objective.length + selectedValue.length] = [valueToFind];
      } else {
        multiOptionScore[key] = [valueToFind];
      }
      localStorage.setItem(DragSelectedMapKey, JSON.stringify(multiOptionScore));
      const sortedKeys = Object.keys(multiOptionScore).sort((a, b) => parseInt(a) - parseInt(b));
      const sortedValues = sortedKeys.reduce((acc, key) => acc.concat(multiOptionScore[key]), []);
      localStorage.setItem(SelectedValuesKey, JSON.stringify(sortedValues));

      const isCorrect = objective.includes(element['value']);
      dispatchClickEvent(element, isCorrect);
      if (isCorrect) {
        const onCorrect = element.getAttribute('onCorrect');
        await executeActions(onCorrect, element);
      } else {
        const onInCorrect = element.getAttribute('onInCorrect');
        await executeActions(onInCorrect, element);
        // showWrongAnswerAnimation([element]);
      }
      storingEachActivityScore(isCorrect);
    }

    if (!showCheck && countPatternWords(objective) === countPatternWords(selectedValue)) {
      validateObjectiveStatus();
    }
  };
  element.addEventListener('click', onClick);
}

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

function handleDropElement(element: HTMLElement): void {
  // let nextIndex = Object.keys(dropHas).length; // Get next index
  // dropHas[nextIndex] = { drop: element, isFull: false };
  let dropHas = JSON.parse(localStorage.getItem(DropHasDrag) || '{}');
  const tabIndex = element.getAttribute('tabIndex');

  if (typeof dropHas !== 'object' || dropHas === null) {
    dropHas = {};
  }

  if (!dropHas[tabIndex]) {
    dropHas[tabIndex] = { drop: element.id, isFull: false };
    localStorage.setItem(DropHasDrag, JSON.stringify(dropHas));
  }

  element.onclick = () => {
    onClickDropOrDragElement(element, 'drop');
  };
  handlingElementFlexibleWidth(element, 'drop');
}

async function onClickDropOrDragElement(element: HTMLElement, type: 'drop' | 'drag'): Promise<void> {
  // Remove the highlight class from elements matching the selector
  const highlightedElements = document.querySelectorAll(`[type='${type}']`);

  highlightedElements.forEach(el => {
    removeHighlight(el as HTMLElement);
  });

  // Dynamically create the highlight class if it doesn't exist
  if (!document.querySelector('#dynamic-highlight-style')) {
    const style = document.createElement('style');
    style.id = 'dynamic-highlight-style';
    style.innerHTML = `
      .highlight {
        // border: 4px solid #e74c3c; /* Thicker red border for more visibility */
        // border-radius: 12px; /* Larger rounded corners */
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

  if (!selectedDropElement) {
    onClickDragElement(element);
  }

  if (selectedDropElement && selectedDragElement) {
    // Add a transition for a smooth, slower movement
    (selectedDragElement as HTMLElement).style.transition = 'transform 0.5s ease'; // 0.5s for a slower move

    // Reset the transform of the drag element before calculating the new position
    (selectedDragElement as HTMLElement).style.transform = '';
    const container = document.querySelector('#lido-container') as HTMLElement;

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

    // await new Promise(resolve => setTimeout(resolve, 500));
    await onElementDropComplete(selectedDragElement, selectedDropElement);
    // await new Promise(resolve => setTimeout(resolve, 500));
    // selectedDragElement.style.transform = 'translate(0px, 0px)';
  }
}
const dragToDropMap = new Map<HTMLElement, HTMLElement | null>();
async function onClickDragElement(element) {
  const dropElements = JSON.parse(localStorage.getItem(DropHasDrag) || '{}') as Record<string, { drop: string; isFull: boolean }>;
  const dragEl = element;
  if (!dragEl) {
    console.error('Element not found');
    return;
  }
  const currentTransform = getComputedStyle(dragEl).transform;
  removeHighlight(element);

  if (currentTransform && currentTransform !== 'none' && currentTransform !== 'matrix(1, 0, 0, 1, 0, 0)') {
    dragEl.style.transition = 'transform 0.5s ease';
    dragEl.style.transform = 'translate(0px, 0px)';
    onElementDropComplete(dragEl, null);
    return;
  }

  let firstFalse = Object.values(dropElements).find(item => !item.isFull);
  if (firstFalse) {
    const dropEl = document.querySelector(`#${firstFalse.drop}`) as HTMLElement;
    dragEl.style.transition = 'transform 0.5s ease';
    onElementDropComplete(dragEl, dropEl);
  }
}

function removeHighlight(element: HTMLElement): void {
  element.classList.remove('highlight');
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
        transition: box-shadow 0.5s ease-in-out, transform 0.5s ease-in-out;
        transform: scale(1.05); /* Subtle scale effect to pop the element */
        animation: pulseEffect 1.5s infinite; /* Pulsing animation */
      }

      @keyframes pulseEffect {
        0% {
          box-shadow: 0 0 20px 10px rgba(255, 165, 0, 0.9);
          transform: var(--base-transform) scale(1.05);
        }
        50% {
          box-shadow: 0 0 30px 15px rgba(255, 165, 0, 1);
          transform: var(--base-transform) scale(1.1);
        }
        100% {
          box-shadow: 0 0 20px 10px rgba(255, 165, 0, 0.9);
          transform: var(--base-transform) scale(1.05);
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

export function convertUrlToRelative(url: string): string {
  const container = document.querySelector('#lido-container') as HTMLElement;
  const baseUrl = container.getAttribute('baseUrl');

  if (url?.startsWith('http')) {
    return url;
  } else if (baseUrl) {
    return baseUrl + url;
  } else {
    return getAssetPath(url);
  }
}

/**
 * Asynchronously speaks the given text using the browser's text-to-speech API.
 * Returns true if speech is completed successfully, false otherwise.
 *
 * @param text The text to be spoken.
 * @returns A Promise that resolves to true if speech is successful, or false if an error occurs or speech synthesis is not supported.
 */
export async function speakText(text: string, targetElement?: HTMLElement): Promise<boolean> {
  return new Promise<boolean>((resolve, reject) => {
    if (!('speechSynthesis' in window)) {
      reject(new Error('Speech synthesis is not supported in this browser.'));
      return;
    }

    const synth = window.speechSynthesis;

    setTimeout(() => {
      const utterance = new SpeechSynthesisUtterance(text);

      utterance.onend = () => {
        resolve(true); // Resolve when speech is completed
      };
      synth.speak(utterance);
    }, 50);
  });
}

export function handlingChildElements(element: HTMLElement, minLength: number, maxLength: number, currentLength: number, displayStyle: string) {
  if (currentLength === undefined) return;

  const children = Array.from(element.children);
  let allowedLength = currentLength;

  if (minLength && currentLength < minLength) {
    allowedLength = minLength;
  }
  if (maxLength && currentLength > maxLength) {
    allowedLength = maxLength;
  }

  children.forEach((child, index) => {
    (child as HTMLElement).style.display = index < allowedLength ? displayStyle : 'none';
  });
}

export const parseProp = (propValue: string, orientation: string) => {
  if (!propValue || !propValue.includes(',')) {
    return propValue;
  }

  const parsedValues = propValue.split(',').reduce((acc, pair) => {
    const [key, value] = pair.split('.');
    acc[key.trim()] = value.trim();
    return acc;
  }, {} as Record<string, string>);

  return parsedValues[orientation] || '';
};

const handlingElementFlexibleWidth = (element: HTMLElement, type: string) => {
  const dragElements = document.querySelectorAll("[type='drag']");
  const dropElements = document.querySelectorAll("[type='drop']");
  const clickElements = document.querySelectorAll("[type='click']");
  let maxWidth = 0;

  if (type === 'click') {
    clickElements.forEach(item => {
      const clickEl = item as HTMLElement;
      let targetElement: HTMLElement | null = null;

      if (clickEl.getAttribute('flexibleWidth')) {
        targetElement = clickEl;
      } else {
        // If the parent doesn't have flexibleWidth, check its child elements
        const childElements = clickEl.children;
        for (let i = 0; i < childElements.length; i++) {
          const childEl = childElements[i] as HTMLElement;
          if (childEl.getAttribute('flexibleWidth')) {
            targetElement = childEl;
            break;
          }
        }
      }

      if (targetElement) {
        // Store original styles before modification
        const originalWidth = targetElement.style.width;
        const originalPadding = targetElement.style.padding;

        // Set width to auto and padding to measure actual width
        targetElement.style.width = 'auto';
        targetElement.style.padding = '0 20px';

        // Get updated width
        const tempWidth = targetElement.offsetWidth;

        // Restore original styles
        targetElement.style.width = originalWidth;
        targetElement.style.padding = originalPadding;

        // Update max width if the new value is greater
        if (tempWidth > maxWidth) {
          maxWidth = tempWidth;
        }
      }
    });

    clickElements.forEach(item => {
      const clickEl = item as HTMLElement;

      if (clickEl.getAttribute('flexibleWidth')) {
        if (clickEl.getAttribute('flexibleWidth') === 'true') return;
        clickEl.style.width = `${maxWidth}px`;
      } else {
        const childElements = clickEl.children;
        for (let i = 0; i < childElements.length; i++) {
          const childEl = childElements[i] as HTMLElement;
          if (childEl.getAttribute('flexibleWidth')) {
            if (childEl.getAttribute('flexibleWidth') === 'true') return;
            childEl.style.width = `${maxWidth}px`;
            break;
          }
        }
      }
    });
    return;
  }

  dragElements.forEach(dragItem => {
    const dragEl = dragItem as HTMLElement;

    const originalWidth = dragEl.style.width;
    const originalPadding = dragEl.style.padding;

    dragEl.style.width = 'auto';
    dragEl.style.padding = '0 20px';

    const tempWidth = dragEl.offsetWidth;

    dragEl.style.width = originalWidth;
    dragEl.style.padding = originalPadding;

    if (tempWidth > maxWidth) {
      maxWidth = tempWidth;
    }
  });

  dragElements.forEach(dragItem => {
    const dragEl = dragItem as HTMLElement;
    const isFlexible = dragEl.getAttribute('flexibleWidth');

    if (isFlexible === 'false') {
      dragEl.style.width = `${maxWidth}px`;
    } else if (isFlexible === 'true' && type === 'drag') {
      dragEl.style.width = 'auto';
      dragEl.style.padding = '0 20px';
    }
  });

  dropElements.forEach(dropItem => {
    const dropEl = dropItem as HTMLElement;
    const isFlexible = dropEl.getAttribute('flexibleWidth');

    if (isFlexible === 'false') {
      const borderWidth = parseFloat(getComputedStyle(dropEl).borderWidth);

      if (typeof borderWidth === 'number') {
        const currentWidth = maxWidth - borderWidth * 2;
        const currentHeight = parseFloat(dropEl.style.height) - borderWidth * 2;
        dropEl.style.height = `${currentHeight}px`;
        dropEl.style.width = `${currentWidth}px`;
        return;
      }
    } else if (isFlexible === 'true' && type === 'drag') {
      dropEl.style.width = 'auto';
      dropEl.style.padding = '0 20px';
    }
  });
};
