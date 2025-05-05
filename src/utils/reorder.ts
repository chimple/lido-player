import { SelectedValuesKey } from './constants';
import { executeActions, handleShowCheck, matchStringPattern, storingEachActivityScore } from './utils';
let preOverlap: HTMLElement;

function getElementScale(element: HTMLElement): number {
  const transform = window.getComputedStyle(element).transform;
  if (transform && transform !== 'none') {
    const match = transform.match(/matrix\(([^)]+)\)/);
    if (match) {
      const values = match[1].split(',').map(v => parseFloat(v.trim()));
      return values[0];
    }
  }
  return 1;
}

export function enableReorderDrag(element: HTMLElement): void {
  let isDragging = false;
  let isClicked = false;
  let offsetXInElement = 0;
  let offsetYInElement = 0;
  let startX = 0;
  let startY = 0;

  const container = document.querySelector('#lido-container') as HTMLElement;
  const blankArea = document.querySelector('[type="blank"]') as HTMLElement;
  const wordParent = element.parentElement !== blankArea ? element.parentElement : null;
  if (!container) {
    console.error(`Container with ID "lido-container" not found.`);
    return;
  }

  const onStart = (event: MouseEvent | TouchEvent): void => {
    isClicked = true;
    isDragging = false; // Don't set this yet

    const point = getPoint(event);
    startX = point.clientX;
    startY = point.clientY;

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onEnd);
    document.addEventListener('touchmove', onMove, { passive: false });
    document.addEventListener('touchend', onEnd);
  };

  const onMove = (event: MouseEvent | TouchEvent): void => {
    const point = getPoint(event);

    const dx = Math.abs(point.clientX - startX);
    const dy = Math.abs(point.clientY - startY);

    // Only activate dragging if movement is significant
    if (!isDragging && (dx > 5 || dy > 5)) {
      isDragging = true;
      isClicked = false;

      if (element.parentElement !== blankArea) {
        const originalWidth = element.style.width;
        const originalPadding = element.style.padding;
        const dummy = document.createElement('div');
        element.style.width = 'auto';
        element.style.padding = '0 20px';
        dummy.style.width = `${element.offsetWidth + 20}px`;
        dummy.style.height = `${element.offsetHeight + 20}px`;
        dummy.style.border = '1px solid';
        dummy.style.backgroundColor = '#00000021';
        dummy.style.borderRadius = '10px';
        element.style.width = originalWidth;
        element.style.padding = originalPadding;
        dummy.setAttribute('value', `${element.getAttribute('value')}`);
        element.parentElement.insertBefore(dummy, element.nextElementSibling);
      }

      const containerRect = container.getBoundingClientRect();
      const containerScale = getElementScale(container);

      const newLeft = (point.clientX - containerRect.left - offsetXInElement) / containerScale;
      const newTop = (point.clientY - containerRect.top - offsetYInElement) / containerScale;

      element.style.left = `${newLeft}px`;
      element.style.top = `${newTop}px`;
      const elementRect = element.getBoundingClientRect();

      offsetXInElement = point.clientX - elementRect.left;
      offsetYInElement = point.clientY - elementRect.top;

      element.style.opacity = '0.8';
      element.style.cursor = 'grabbing';
      element.style.position = 'absolute';
      element.style.zIndex = '1000';
      element.style.touchAction = 'none';
      element.style.transition = 'none';
    }

    if (!isDragging) return;
    event.preventDefault();

    const containerRect = container.getBoundingClientRect();
    const containerScale = getElementScale(container);

    const newLeft = (point.clientX - containerRect.left - offsetXInElement) / containerScale;
    const newTop = (point.clientY - containerRect.top - offsetYInElement) / containerScale;

    element.style.left = `${newLeft}px`;
    element.style.top = `${newTop}px`;

    const overlapped = findMostoverlappedElement(element, 'word') || findMostoverlappedElement(element, 'dummy');
    if (overlapped && overlapped.parentElement !== document.querySelector('[type="blank"]')) return;
    if (overlapped && overlapped.getAttribute('type') === 'dummy') return;
    if (preOverlap !== null && preOverlap === overlapped) return;
    moveWithAnimation(element, overlapped);
    preOverlap = overlapped;
  };

  const onEnd = (): void => {
    isDragging = false;

    document.removeEventListener('mousemove', onMove);
    document.removeEventListener('mouseup', onEnd);
    document.removeEventListener('touchmove', onMove);
    document.removeEventListener('touchend', onEnd);

    if (isClicked) {
      isClicked = false;

      if (element.parentElement === wordParent) {
        const divEl = document.createElement('div');
        const originalWidth = element.style.width;
        const originalPadding = element.style.padding;
        element.style.width = 'auto';
        element.style.padding = '0 20px';
        divEl.style.width = `${element.offsetWidth + 20}px`;
        divEl.style.height = `${element.offsetHeight + 20}px`;
        element.style.width = originalWidth;
        element.style.padding = originalPadding;
        blankArea.appendChild(divEl);

        element.style.transition = 'transform 0.5s ease';
        executeActions('this.alignMatch=true', divEl, element);
        setTimeout(() => {
          const dummy = document.createElement('div');

          element.style.width = 'auto';
          element.style.padding = '0 20px';
          dummy.style.width = `${element.offsetWidth + 20}px`;
          dummy.style.height = `${element.offsetHeight + 20}px`;
          dummy.style.border = '1px solid';
          dummy.style.backgroundColor = '#00000021';
          dummy.style.borderRadius = '10px';
          element.style.width = originalWidth;
          element.style.padding = originalPadding;
          dummy.setAttribute('value', `${element.getAttribute('value')}`);

          element.parentElement.insertBefore(dummy, element.nextElementSibling);

          element.style.transform = 'translate(0,0)';
          divEl.replaceWith(element);
          wordDropComplete(blankArea as HTMLElement, element);
        }, 500);

      } else {
        const wordArray = Array.from(wordParent.children);
        const prePlace = wordArray.find(el => el.getAttribute('value') === element.getAttribute('value')) as HTMLElement;
        element.style.transition = 'transform 0.5s ease';
        executeActions('this.alignMatch=true', prePlace, element);
        setTimeout(() => {
          element.style.transform = 'translate(0,0)';
          prePlace.replaceWith(element);
        }, 500);
      }

      return;
    }

    const dummy = document.querySelector('[type="dummy"]') as HTMLElement;
    if (dummy) {
      dummy.replaceWith(element);
    }

    if (wordParent) {
      const childs = Array.from(wordParent.children);
      const overlap = isOverlappingArea(element, wordParent);
      console.log("overlap : ", overlap);
      
      if (overlap || element.parentElement === wordParent) {
        childs.forEach(item => {
          if (item === element) return;
          if (item.getAttribute('value') === element.getAttribute('value')) {
            item.replaceWith(element);
          }
        });
      } 
    }

    element.style.opacity = '';
    element.style.cursor = 'move';
    element.style.zIndex = '';
    element.style.transform = '';
    element.style.transition = '';
    element.style.position = '';
    element.style.left = '';
    element.style.top = '';

    preOverlap = null;
    wordDropComplete(blankArea as HTMLElement, element);
  };

  element.style.cursor = 'move';
  element.addEventListener('mousedown', onStart);
  element.addEventListener('touchstart', onStart);
}

//find target element
function isOverlappingArea(dragEl, targetEl) {
  const dragRect = dragEl.getBoundingClientRect();
  const targetRect = targetEl.getBoundingClientRect();

  return !(dragRect.right < targetRect.left || dragRect.left > targetRect.right || dragRect.bottom < targetRect.top || dragRect.top > targetRect.bottom);
}

//find same element
function findMostoverlappedElement(target: HTMLElement, className: string): HTMLElement | null {
  const candidates = Array.from(document.querySelectorAll(`[type="${className}"]`)) as HTMLElement[];
  let maxOverlap = 0;
  let mostOverlapped: HTMLElement | null = null;

  const r1 = target.getBoundingClientRect();
  for (const el of candidates) {
    if (el === target) continue;
    const r2 = el.getBoundingClientRect();
    const overlap = getOverlapArea(r1, r2);
    if (overlap > maxOverlap) {
      maxOverlap = overlap;
      mostOverlapped = el;
    }
  }
  return mostOverlapped;
}

// Helper to unify pointer values
function getPoint(event: MouseEvent | TouchEvent): { clientX: number; clientY: number } {
  return event instanceof MouseEvent ? { clientX: event.clientX, clientY: event.clientY } : { clientX: event.touches[0].clientX, clientY: event.touches[0].clientY };
}

function getOverlapArea(r1: DOMRect, r2: DOMRect): number {
  const x_overlap = Math.max(0, Math.min(r1.right, r2.right) - Math.max(r1.left, r2.left));
  const y_overlap = Math.max(0, Math.min(r1.bottom, r2.bottom) - Math.max(r1.top, r2.top));
  return x_overlap * y_overlap;
}
let animtionTrack = false;
function moveWithAnimation(target: HTMLElement, overlapped: HTMLElement): void {
  if (target === overlapped) return;
  if (!findMostoverlappedElement(target, 'blank')) return;

  const blankArea = document.querySelector('[type="blank"]') as HTMLElement;
  const cloneDummy = document.querySelector('[type="dummy"]') as HTMLElement;

  if (cloneDummy) {
    if (overlapped) {
      overlapped.parentNode?.insertBefore(cloneDummy, overlapped);
    } else {
      blankArea.appendChild(cloneDummy);
    }
  } else {
    const originalWidth = target.style.width;
    const originalPadding = target.style.padding;
    const dummy = document.createElement('div');
    target.style.width = 'auto';
    target.style.padding = '0 20px';
    dummy.style.width = '0px';
    dummy.style.height = '0px';
    target.style.width = originalWidth;
    target.style.padding = originalPadding;
    dummy.setAttribute('type', 'dummy');
    const keyframes = `
      @keyframes widthIncrease {
        0% { width: 0px; height: 0px; }
        100% { width: ${target.offsetWidth}px; height: ${target.offsetHeight}px;}
      }
    `;
    if (!overlapped) {
      blankArea.appendChild(dummy);
    } else {
      overlapped.parentNode?.insertBefore(dummy, overlapped);
    }

    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    dummy.style.animation = `widthIncrease 0.3s`;
    dummy.addEventListener('animationend', () => {
      dummy.style.width = `${target.offsetWidth}px`;
      dummy.style.height = `${target.offsetHeight}px`;
    });
  }
}

// Drop Completed
const wordDropComplete = (block: HTMLElement, element?: HTMLElement) => {
  const container = document.querySelector('#lido-container');
  const objective = container.getAttribute('objective');
  const objectiveArray = objective.split(',');

  let wordArray = JSON.parse(localStorage.getItem(SelectedValuesKey)) || [];
  const wordBlock = block.children;
  wordArray = Array.from(wordBlock).map(child => child.getAttribute('value'));
  localStorage.setItem(SelectedValuesKey, JSON.stringify(wordArray));

  const elementIndex = wordArray.indexOf(element['value']);
  if (elementIndex >= 0) {
    const res = matchStringPattern(element['value'], [objectiveArray[elementIndex].trim()]);
    storingEachActivityScore(res);
    handleShowCheck();
  }
};
