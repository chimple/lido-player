import { countPatternWords, executeActions, handleShowCheck, handlingElementFlexibleWidth, onActivityComplete, storingEachActivityScore } from '../utils';
import { AudioPlayer } from '../audioPlayer';
import { DragSelectedMapKey, DragMapKey, DropHasDrag, DropLength, SelectedValuesKey, DropMode, DropToAttr, DropTimeAttr, LidoContainer } from '../constants';
import { dispatchElementDropEvent } from '../customEvents';
import { removeHighlight } from './highlightHandler';

// Function to get the scale of an element
export const getElementScale = (el: HTMLElement): number => {
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

export function enableOptionArea(element: HTMLElement) {
  const children = Array.from(element.children);
  children.forEach(child => {
    child.classList.add('drag-element');
  });
}

export function enableDraggingWithScaling(element: HTMLElement): void {
  let isDragging = false;
  let isClicked = false;
  let startX = 0;
  let startY = 0;
  let initialX = 0;
  let initialY = 0;
  let clone: HTMLElement | null = null;
  let duplicateElement: HTMLElement = null;

  // Fetch the container element
  const container = document.getElementById(LidoContainer) as HTMLElement;
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
    element.style.opacity = '1';
    element.style.cursor = 'grabbing';

    if (element.getAttribute('dropAttr')?.toLowerCase() === DropMode.Diagonal) {
      const computedStyle = window.getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      if (!clone) {
        clone = element.cloneNode(true) as HTMLElement;
        clone.style.left = `${rect.left}px`;
        clone.style.top = `${rect.top}px`;
        clone.style.width = `${rect.width}px`;
        clone.style.height = `${rect.height}px`;
        clone.style.transform = computedStyle.transform;
        clone.style.zIndex = '0';
        clone.setAttribute('visible', 'true');
        clone.classList.add('cloned-element');
        document.body.appendChild(clone);
      }
    }

    // for infinite drop functionality
    if (element.getAttribute('dropAttr')?.toLowerCase() === DropMode.InfiniteDrop) {
      const imgElement = element.querySelector('img');
      const src = imgElement?.getAttribute('src');
      const computedStyle = window.getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      if (!duplicateElement) {
        duplicateElement = element.cloneNode(false) as HTMLElement;
        duplicateElement.setAttribute('src', src);
        duplicateElement.setAttribute('value', element.getAttribute('value'));
        duplicateElement.setAttribute('visible', 'true');
        duplicateElement.style.left = `${rect.left}px`;
        duplicateElement.style.top = `${rect.top}px`;
        duplicateElement.style.width = `${rect.width}px`;
        duplicateElement.style.height = `${rect.height}px`;
        duplicateElement.style.transform = computedStyle.transform;
        duplicateElement.style.position = 'absolute';
        duplicateElement.style.zIndex = '0';
        element.style.zIndex = '100';
        document.body.appendChild(duplicateElement);
      }

      // remove all dropped element with same value at click start
      if (element.getAttribute('droppedelement')) {
        const dropAttrValue = element.getAttribute('droppedelement');
        const elementsToRemove = document.querySelectorAll(`body > [droppedelement="${dropAttrValue}"]`);
        elementsToRemove.forEach(el => el.remove());
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
        if (!(element.getAttribute('dropAttr')?.toLowerCase() === DropMode.Diagonal)) {
          if (otherElement.tagName.toLowerCase() === 'lido-text') {
            otherElement.style.border = ''; // Reset border
            otherElement.style.backgroundColor = 'transparent'; // Reset background color
          }
          if (otherElement.tagName.toLowerCase() === 'lido-image') {
            otherElement.style.opacity = '0';
          }
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
    if (isClicked) {
      if (clone) {
        clone.remove();
        clone = null;
      }
      element.style.opacity = '1';
      return;
    }
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
          if (!(element.getAttribute('dropAttr')?.toLowerCase() === DropMode.Diagonal)) {
            if (otherElement.tagName.toLowerCase() === 'lido-text') {
              otherElement.style.border = ''; // Reset border
              otherElement.style.backgroundColor = 'transparent'; // Reset background color
            }
            if (otherElement.tagName.toLowerCase() === 'lido-image') {
              otherElement.style.opacity = '0';
            }
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
    
    if (element.getAttribute('dropAttr')?.toLowerCase() === DropMode.Diagonal) {
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

    if (element.getAttribute('dropAttr')?.toLowerCase() === DropMode.Stretch) {
      const computedStyle = window.getComputedStyle(element);
      mostOverlappedElement.style.width = computedStyle.width;
    }

    if (element.getAttribute('dropAttr')?.toLowerCase() === DropMode.InfiniteDrop) {
      mostOverlappedElement.style.opacity = '0';
      if (element.getAttribute('value')) {
        element.setAttribute('droppedElement', `${element.getAttribute('value')}-dropped`);
      }
    }
  };
  // Initialize draggable element styles
  element.style.cursor = 'move';
  element.style.transform = 'translate(0, 0)'; // Initialize transform for consistent dragging
  element.classList.add('drag-element');
  element.addEventListener('mousedown', onStart);
  element.addEventListener('touchstart', onStart);
  element.addEventListener('click', ev => {
    if (isClicked) {
      onClickDropOrDragElement(element, 'drag');
    }
  });
}

export const findMostoverlappedElement = (element: HTMLElement, type: string) => {
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

export async function onElementDropComplete(dragElement: HTMLElement, dropElement: HTMLElement): Promise<void> {
  const selectedValueData = localStorage.getItem(SelectedValuesKey) || '';
  const dragSelectedData = localStorage.getItem(DragSelectedMapKey);
  const dropSelectedData = localStorage.getItem(DragMapKey);
  
  let dropHasDrag = JSON.parse(localStorage.getItem(DropHasDrag) || ' {}') as Record<string, { drop: string; isFull: boolean }>;
  if (dragElement) {
    if (dropElement) {
      dragElement.setAttribute(DropToAttr, dropElement?.id);
    } else {
      dragElement.removeAttribute(DropToAttr);
    }
    dragElement.setAttribute(DropTimeAttr, new Date().getTime().toString());
  }
  if (dropElement) {
    if (!(dropElement.getAttribute('dropAttr')?.toLowerCase() === DropMode.Diagonal) && (dropElement.getAttribute('minDrops') === '1' || !dropElement.getAttribute('minDrops'))) {
      const isisFull = Object.values(dropHasDrag).find(item => document.getElementById(item.drop) === dropElement);
      if (isisFull) {
        isisFull.isFull = true;
      } else {
        console.warn('No matching drop item found for', dropElement);
      }
      localStorage.setItem(DropHasDrag, JSON.stringify(dropHasDrag));

      if (dragSelectedData) {
        let dragSelected = JSON.parse(dragSelectedData);
        for (const key in dragSelected) {
          if (dragSelected[key].includes(dragElement['value'])) {
            delete dragSelected[key];
          }
        }
        localStorage.setItem(DragSelectedMapKey, JSON.stringify(dragSelected));
      }

      // Check for overlaps and highlight only the most overlapping element
      let mostOverlappedElement: HTMLElement = findMostoverlappedElement(dragElement, 'drag');
      if (mostOverlappedElement) {
        dragElement.style.transform = 'translate(0,0)';
        dragElement.style.transition = 'transform 0.5s ease';

        const allElements = document.querySelectorAll<HTMLElement>("[type='drop']");
        allElements.forEach(otherElement => {
          const dropObject = JSON.parse(localStorage.getItem(DragSelectedMapKey)) || {};
          const storedTabIndexes = Object.keys(dropObject).map(Number);
          if (storedTabIndexes.includes(otherElement['tabIndex'])) {
            if (!(otherElement.getAttribute('dropAttr')?.toLowerCase() === DropMode.Diagonal)) {
              if (otherElement.tagName.toLowerCase() === 'lido-text') {
                otherElement.style.border = ''; // Reset border
                otherElement.style.backgroundColor = 'transparent'; // Reset background color
              }
              if (otherElement.tagName.toLowerCase() === 'lido-image') {
                otherElement.style.opacity = '0';
              }
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
    dragElement.style.transition = 'transform 0.5s ease';
    let currentDrop = dragToDropMap.get(dragElement);
    if (currentDrop) {
       updateDropBorder(currentDrop);
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
      let dropSelected = JSON.parse(dropSelectedData);
      for (const key in dragSelected) {
        if (dragSelected[key].includes(dragElement['value'])) {
          for (const key in dropSelected) {
            if (dropSelected[key].includes(dragElement.id)) {
              delete dropSelected[key];
            }
          }

          delete dragSelected[key];
        }
      }

      localStorage.setItem(DragSelectedMapKey, JSON.stringify(dragSelected));
      // localStorage.setItem(DragMapKey, JSON.stringify(dropSelected));
    }

    const allElements = document.querySelectorAll<HTMLElement>("[type='drop']");
    allElements.forEach(otherElement => {
      const dropObject = JSON.parse(localStorage.getItem(DragSelectedMapKey)) || {};
      const storedTabIndexes = Object.keys(dropObject).map(Number);
      if (storedTabIndexes.includes(otherElement['tabIndex'])) {
        if (!(otherElement.getAttribute('dropAttr')?.toLowerCase() === DropMode.Diagonal)) {
          if (otherElement.tagName.toLowerCase() === 'lido-text') {
            otherElement.style.border = ''; // Reset border
            otherElement.style.backgroundColor = 'transparent'; // Reset background color
          }
          if (otherElement.tagName.toLowerCase() === 'lido-image') {
            otherElement.style.opacity = '0';
          }
        }
      } else {
        if (otherElement.tagName.toLowerCase() === 'lido-text') {
          otherElement.style.border = ''; // Reset border*********
          otherElement.style.backgroundColor = 'transparent'; // Reset background color**********
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
    //accepting identical
    // let dragSelected = JSON.parse(dragSelectedData);
    // for (const key in dragSelected) {
    //   if (dragSelected[key].includes(dragElement.id)) {
    //     delete dragSelected[key];
    //   }
    // }
    // localStorage.setItem(DragSelectedMapKey, JSON.stringify(dragSelected));
  }
  let dropLength = JSON.parse(localStorage.getItem(DropLength)) || 0;
  dropLength += 1;
  localStorage.setItem(DropLength, JSON.stringify(dropLength));

  if (dropLength === countPatternWords(dropElement['value'])) {
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
  const allDropElements = document.querySelectorAll<HTMLElement>('.drop-element');
allDropElements.forEach(el => updateDropBorder(el));
   
}

export function updateDropBorder(element: HTMLElement): void {
  if (!element.classList.contains('drop-element')) return;

  const dropId = element.id;
  const dragSelectedElements = document.querySelectorAll(`[${DropToAttr}="${dropId}"]`);

  if (dragSelectedElements.length > 0) {
    element.classList.add('filled');
    element.classList.remove('empty');
  } else {
    element.classList.add('empty');
    element.classList.remove('filled');
  }
}


export function handleDropElement(element: HTMLElement): void {
  // let nextIndex = Object.keys(dropHas).length; // Get next index
  // dropHas[nextIndex] = { drop: element, isFull: false };
   element.classList.add('drop-element');
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
  updateDropBorder(element);
}

export async function onClickDropOrDragElement(element: HTMLElement, type: 'drop' | 'drag'): Promise<void> {
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
        // background-color: rgba(231, 76, 60, 0.3); /* Stronger, more noticeable background */
        // box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2), 0 12px 40px rgba(0, 0, 0, 0.2); /* Stronger shadow */
        // outline: 4px solid rgba(231, 76, 60, 0.6); /* Glow effect */
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
    selectedDragElement.getBoundingClientRect();
  
    const container = document.getElementById(LidoContainer) as HTMLElement;

    const containerScale = getElementScale(container);
    console.log('🚀 ~ onClickDropOrDragElement ~ containerScale:', containerScale);

    // Get the positions of the drop and drag elements
    const dropRect = selectedDropElement.getBoundingClientRect();
    const dragRect = selectedDragElement.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect(); 
    const dragX = dragRect.left - containerRect.left;
    const dragY = dragRect.top - containerRect.top;
    const dropX = dropRect.left - containerRect.left;
    const dropY = dropRect.top - containerRect.top;
    const translateX = (dropX - dragX) / containerScale;
    const translateY = (dropY - dragY) / containerScale;


    // Calculate the difference in positions
    // const translateX = (dropRect.left - dragRect.left) / containerScale;
    // const translateY = (dropRect.top - dragRect.top) / containerScale;

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

export const dragToDropMap = new Map<HTMLElement, HTMLElement | null>();
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

 export const appendingDragElementsInDrop = () => {
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
