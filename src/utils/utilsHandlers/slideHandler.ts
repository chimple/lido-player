import { LidoContainer, SelectedValuesKey } from '../constants';
import { findMostoverlappedElement, getElementScale } from './dragDropHandler';
import { handleShowCheck, matchStringPattern, storingEachActivityScore } from '../utils';
import { onClickDropOrDragElement } from './dragDropHandler';
import { removeHighlight } from './highlightHandler';

let numberOfSlides = 0;
const slideNumbers = (element: HTMLElement) => {
  const tag = `<div class="slide-numbers">${++numberOfSlides}</div>`;

  let numbersElement = document.querySelector('.slide-numbers-div') as HTMLElement;

  if (numbersElement) {
    numbersElement.innerHTML += tag;
    return;
  }
  const elementParent = element.parentElement;
  numbersElement = document.createElement('div') as HTMLElement;
  numbersElement.innerHTML = tag;
  elementParent.appendChild(numbersElement);
  elementParent.style.position = 'relative';
  numbersElement.className = 'slide-numbers-div slide-numbers-bottom';

  if (elementParent.className === 'lido-col') {
    numbersElement.className = 'slide-numbers-div slide-numbers-left';
  }
};

export function slidingWithScaling(element: HTMLElement): void {
  let overlapElement = false;
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let initialX = 0;
  let initialY = 0;
  element.classList.add('drag-element');
  // slideNumbers(element);
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

  const objectiveString = document.getElementById(LidoContainer)['objective'];
  const objectiveArray = objectiveString.split(',');
  const elementIndex = slideArr.indexOf(slideElement['value']);
  const isCorrect = matchStringPattern(slideElement['value'], [objectiveArray[elementIndex].trim()]);
  storingEachActivityScore(isCorrect);
  handleShowCheck();
};
