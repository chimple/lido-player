import { DragSelectedMapKey, SelectedValuesKey } from './constants';
import { executeActions, handleShowCheck, matchStringPattern, onActivityComplete, storingEachActivityScore } from './utils';
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

const createDummyElement = (element: HTMLElement) => {

  const dummy = document.createElement('div');
  if(element.getAttribute("type") === "option"){
    dummy.style.width = element.style.width;
    dummy.style.height = element.style.height;
    return dummy;
  }
  const originalWidth = element.style.width;
  const originalPadding = element.style.padding;
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
  return dummy;
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
  const elementType = element.getAttribute('type');
  const optionArea = container.querySelector('[type="optionArea"]') as HTMLElement;
  if (optionArea) {
    optionArea.style.display = 'block';
    optionArea.style.overflowY = 'auto';
  }

  if (!container) {
    console.error(`Container with ID "lido-container" not found.`);
    return;
  }

  const onStart = (event: MouseEvent | TouchEvent): void => {
    isClicked = true;
    isDragging = false;

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

      if (element.parentElement !== blankArea && elementType === 'word') {
        const blankSpace = createDummyElement(element);
        element.parentElement.insertBefore(blankSpace, element.nextElementSibling);
      }

      if (element.parentElement.getAttribute('type') !== 'category' && elementType === 'option') {
        const dummy = createDummyElement(element);
        dummy.setAttribute('value', `${element.getAttribute('value')}`);
        dummy.style.visibility = 'hidden';
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
    isClicked = false;
    event.preventDefault();

    const containerRect = container.getBoundingClientRect();
    const containerScale = getElementScale(container);

    const newLeft = (point.clientX - containerRect.left - offsetXInElement) / containerScale;
    const newTop = (point.clientY - containerRect.top - offsetYInElement) / containerScale;

    element.style.left = `${newLeft}px`;
    element.style.top = `${newTop}px`;

    let overlap: HTMLElement;
    if (elementType === 'option') {
      overlap = findMostoverlappedElement(element, 'option') || findMostoverlappedElement(element, 'dummy');
    } else {
      overlap = findMostoverlappedElement(element, 'word') || findMostoverlappedElement(element, 'dummy');
      if (overlap && overlap.parentElement !== document.querySelector('[type="blank"]')) return;
    }

    if (overlap && overlap.getAttribute('type') === 'dummy') return;
    if (preOverlap !== null && preOverlap === overlap) return;
    moveWithAnimation(element, overlap);
    preOverlap = overlap;
  };

  const onEnd = (): void => {
    isDragging = false;
    document.removeEventListener('mousemove', onMove);
    document.removeEventListener('mouseup', onEnd);
    document.removeEventListener('touchmove', onMove);
    document.removeEventListener('touchend', onEnd);
    const dummy = document.querySelector('[type="dummy"]') as HTMLElement;
    if (isClicked) {
      onClickElement(element);
      return;
    }

    if (elementType === 'option') {
      const category = findMostoverlappedElement(element, 'category');
      const sameElArr = Array.from(container.querySelectorAll(`[value="${element.getAttribute('value')}"]`));
      const divEl = sameElArr.find(el => el !== element) as HTMLElement;
      
      if (category) {
        if (dummy) {
          dummy.replaceWith(element);
          category.parentElement.classList.add('highlight-element');
          const categoryArr = container.querySelectorAll('[type="category"]');
          categoryArr.forEach(el => {
            if (el === category) return;
            el.parentElement.classList.remove('highlight-element');
          });
          onDropToCategory(element, category);
        }
        if (divEl) {
          const keyframes = `
            @keyframes widthDecrease {
              0% { width: ${divEl.offsetWidth}px; height: ${divEl.offsetHeight}px; }
              100% { width: 0px; height: 0px;}
            }
          `;
          const styleSheet = document.styleSheets[0];
          styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
          divEl.style.animation = `widthDecrease 0.5s`;
          divEl.addEventListener('animationend', () => {
            divEl.remove();
          });
        }
      } else {
        if (element.parentElement['type'] !== 'category') {
          executeActions('this.alignMatch=true', divEl, element);
          setTimeout(() => {
            divEl.replaceWith(element);
          }, 500);
        } else {
          const categoryElement = element.parentElement;
          const dragValues = JSON.parse(localStorage.getItem(DragSelectedMapKey)) || {};
          const tabKey = categoryElement['tabIndex'];
          const targetValue = element['value'];
          if (dragValues[tabKey]) {
            dragValues[tabKey] = dragValues[tabKey].filter((el: string) => el !== targetValue);
            localStorage.setItem(DragSelectedMapKey, JSON.stringify(dragValues));
          }
          optionArea.scrollTo({
            top: optionArea.scrollHeight,
            behavior: 'smooth' 
          });
          
          optionArea.appendChild(element);
          if (dummy) {
            dummy.remove();
          }
        }
      }
      resetElementStyles(element);
      return;
    }

    if (findMostoverlappedElement(element, 'blank')) {
      if (dummy) {
        dummy.replaceWith(element);
      }
    }

    if (wordParent) {
      const childs = Array.from(wordParent.children);
      const overlap = isOverlappingArea(element, wordParent);
      if (overlap || element.parentElement === wordParent) {
        childs.forEach(item => {
          if (item === element) return;
          if (item.getAttribute('value') === element.getAttribute('value')) {
            item.replaceWith(element);
          }
        });
      }
    }
    resetElementStyles(element);
    preOverlap = null;
    wordDropComplete(blankArea as HTMLElement, element);
  };

  const onClickElement = (element: HTMLElement) => {
    if (elementType === 'option') {
      const categoryArr = container.querySelectorAll('[type="category"]');
      const category = Array.from(categoryArr).find(el => el.parentElement.className.includes('highlight-element')) as HTMLElement;
      if (element.parentElement.getAttribute('type') === 'category') {
        const dragValues = JSON.parse(localStorage.getItem(DragSelectedMapKey)) || {};
        const tabKey = category['tabIndex'];
        const targetValue = element['value'];
        if (dragValues[tabKey]) {
          dragValues[tabKey] = dragValues[tabKey].filter((el: string) => el !== targetValue);
          localStorage.setItem(DragSelectedMapKey, JSON.stringify(dragValues));
        }

        const dummy = createDummyElement(element);
        optionArea.appendChild(dummy);
        optionArea.scrollTo({
          top: optionArea.scrollHeight,
          behavior: 'smooth' 
        });
        element.style.position = 'absolute';
        executeActions("this.alignMatch='true'", dummy, element);
        setTimeout(() => {
          resetElementStyles(element);
          dummy.replaceWith(element);
        }, 500);
        return;
      } else {
        if (!category) return;
        const divEl = createDummyElement(element)
        category.appendChild(divEl);
        element.style.position = "absolute";
        executeActions('this.alignMatch=true', divEl, element);
        setTimeout(() => {
          divEl.replaceWith(element);
          resetElementStyles(element);
          onDropToCategory(element, category);
          element.style.transform = 'translate(0,0)';
          element.style.marginBottom = '10px';
        }, 500);
        return;
      }
    }
    if (elementType === 'word' && element.parentElement === wordParent) {
      const placeholder = createDummyElement(element);
      placeholder.style.visibility = "hidden";
      blankArea.appendChild(placeholder);
      executeActions('this.alignMatch=true', placeholder, element);
      setTimeout(() => {
        const blankElement = createDummyElement(element);
        element.parentElement.insertBefore(blankElement, element.nextElementSibling);
        placeholder.replaceWith(element);
        element.style.transform = 'translate(0,0)';
        wordDropComplete(blankArea as HTMLElement, element);
      }, 500);
      return
    } else {
      const wordArray = Array.from(wordParent.children);
      const prePlace = wordArray.find(el => el.getAttribute('value') === element.getAttribute('value')) as HTMLElement;
      executeActions('this.alignMatch=true', prePlace, element);
      setTimeout(() => {
        prePlace.replaceWith(element);
        element.style.transform = 'translate(0,0)';
      }, 500);
    }
    
    return;
  };

  element.style.cursor = 'move';
  element.addEventListener('pointerdown', onStart);
}

const resetElementStyles = (el: HTMLElement): void => {
  el.style.opacity = '';
  el.style.cursor = 'move';
  el.style.zIndex = '';
  el.style.transform = '';
  el.style.position = '';
  el.style.left = '';
  el.style.top = '';
};

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
function moveWithAnimation(target: HTMLElement, overlapped: HTMLElement): void {
  if (target === overlapped) return;
  if (overlapped && overlapped.getAttribute('type') === 'option' && overlapped.parentElement.getAttribute('type') !== 'category') return;
  if (target.getAttribute('type') === 'word' && !findMostoverlappedElement(target, 'blank')) return;
  if (target.getAttribute('type') === 'option' && !findMostoverlappedElement(target, 'category')) return;
  const blankArea = document.querySelector('[type="blank"]') as HTMLElement;
  const cloneDummy = document.querySelector('[type="dummy"]') as HTMLElement;

  if (cloneDummy) {
    if (overlapped) {
      overlapped.parentNode?.insertBefore(cloneDummy, overlapped);
    } else {
      const overlapCategory = findMostoverlappedElement(target, 'category');
      if (overlapCategory) {
        overlapCategory.appendChild(cloneDummy);
      } else {
        blankArea.appendChild(cloneDummy);
      }
    }
  } else {
    const dummy = createDummyElement(target);
    dummy.style.visibility = "hidden";
    dummy.setAttribute('type', 'dummy');
    const keyframes = `
      @keyframes widthIncrease {
        0% { width: 0px; height: 0px; }
        100% { width: ${target.offsetWidth}px; height: ${target.offsetHeight}px;}
      }
    `;
    if (!overlapped) {
      const overlapCategory = findMostoverlappedElement(target, 'category');
      if (overlapCategory) {
        overlapCategory.appendChild(dummy);
      } else {
        blankArea.appendChild(dummy);
      }
    } else {
      overlapped.parentNode?.insertBefore(dummy, overlapped);
    }

    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    dummy.style.animation = `widthIncrease 0.5s`;
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

    if (!res && container['isAllowOnlyCorrect']) {
      const childs = Array.from(container.querySelectorAll(`[value="${element['value']}"]`));
      const dubEl = childs.find(el => el !== element);
      dubEl.replaceWith(element);
    }
    storingEachActivityScore(res);
    handleShowCheck();
  }
};

async function onDropToCategory(dragElement: HTMLElement, categoryElement: HTMLElement) {
  let dragSelected = JSON.parse(localStorage.getItem(DragSelectedMapKey)) || {};
  let elementArr = dragSelected[categoryElement['tabIndex']];

  if (Array.isArray(elementArr)) {
    if (elementArr.includes(dragElement['value'])) return;
  }

  for (const key in dragSelected) {
    const index = dragSelected[key].indexOf(dragElement['value']);
    if (index !== -1) {
      dragSelected[key].splice(index, 1);
    }
  }

  localStorage.setItem(DragSelectedMapKey, JSON.stringify(dragSelected));
  await onActivityComplete(dragElement, categoryElement);
}
