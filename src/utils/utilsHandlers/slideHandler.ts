import { LidoContainer, SelectedValuesKey } from '../constants';
import { findMostoverlappedElement, getElementScale } from './dragDropHandler';
import { calculateScale, executeActions, handleShowCheck, matchStringPattern, storingEachActivityScore } from '../utils';
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

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export const slideAnimation = async () => {
  const container = document.getElementById(LidoContainer);
  if (!container) return;

  container.style.pointerEvents = 'none';

  const slideElements = Array.from(container.querySelectorAll('[type="slide"]')) as HTMLElement[];

  const containerScale = getElementScale(container);

  const count = slideElements.length;

  const loopLength = count % 2 === 0 ? count : count - 1;

  for (let i = 0; i < loopLength; i += 2) {
    const first = slideElements[i];
    const second = slideElements[i + 1];

    const firstRect = first.getBoundingClientRect();
    const secondRect = second.getBoundingClientRect();

    const firstX = firstRect.left + firstRect.width / 2;
    const secondX = secondRect.left + secondRect.width / 2;
    const firstY = firstRect.top + firstRect.height / 2;
    const secondY = secondRect.top + secondRect.height / 2;

    const xDiff = (secondX - firstX) / containerScale;
    const yDiff = (secondY - firstY) / containerScale;

    first.style.transition = second.style.transition = 'transform 0.5s ease';
    first.style.transform = `translate(${xDiff}px, ${yDiff}px)`;
    second.style.transform = `translate(${-xDiff}px, ${-yDiff}px)`;
  }

  await delay(800);

  for (let i = 0; i < loopLength; i++) {
    const el = slideElements[i];
    el.style.transform = 'translate(0, 0)';
  }

  await delay(500);

  for (let i = 0; i < loopLength; i++) {
    const el = slideElements[i];
    el.style.transition = '';
  }

  container.style.pointerEvents = '';
};

export function slidingWithScaling(element: HTMLElement): void {
  let overlapElement = false;
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let initialX = 0;
  let initialY = 0;
  element.classList.add('drag-element');
  let elementRect;
  let elementLeft;
  let elementTop;
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
    elementRect = element.getBoundingClientRect();
    elementLeft = elementRect.left;
    elementTop = elementRect.top;

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

    const speedMultiplier = 1 / calculateScale();

    const newLeft = initialX + dx * speedMultiplier;
    const newTop = initialY + dy * speedMultiplier;

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
        isDragging = false;
        const parent1 = element.parentElement;
        const parent2 = mostOverlappedElement.parentElement;

        const overlapRect = mostOverlappedElement.getBoundingClientRect();
        const container = document.getElementById(LidoContainer) as HTMLElement;

        const containerScale = getElementScale(container);

        const dropCenterX = elementLeft + elementRect.width / 2;
        const dropCenterY = elementTop + elementRect.height / 2;
        const dragCenterX = overlapRect.left + overlapRect.width / 2;
        const dragCenterY = overlapRect.top + overlapRect.height / 2;

        const scaledLeft = (dropCenterX - dragCenterX) / containerScale;
        const scaledTop = (dropCenterY - dragCenterY) / containerScale;

        mostOverlappedElement.style.transition = 'transform 0.3s ease';
        element.style.transition = 'transform 0.3s ease';

        if (parent1 && parent2) {
          // Temporarily detach both elements
          const elementPlaceholder = document.createComment('element-placeholder');
          const overlappedPlaceholder = document.createComment('overlapped-placeholder');

          // Swap the elements
          mostOverlappedElement.style.transform = `translate(${scaledLeft}px, ${scaledTop}px)`;
          element.style.transform = `translate(${-scaledLeft}px, ${-scaledTop}px)`;
          setTimeout(() => {
            parent1.replaceChild(elementPlaceholder, element);

            parent2.replaceChild(overlappedPlaceholder, mostOverlappedElement);

            parent1.replaceChild(mostOverlappedElement, elementPlaceholder);
            parent2.replaceChild(element, overlappedPlaceholder);
            mostOverlappedElement.style.transform = 'translate(0, 0)';
            mostOverlappedElement.style.transition = '';

            element.style.transform = 'translate(0, 0)';
            element.style.transition = '';
          }, 300);

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

    setTimeout(() => {
      if (overlapElement) {
        slideCompleted(element);
        overlapElement = false;
      }
    }, 300);
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
