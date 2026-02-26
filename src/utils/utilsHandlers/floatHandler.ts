import { AudioPlayer } from '../audioPlayer';
import { LidoContainer } from '../constants';
import { calculateScale, calculateScore, executeActions, matchStringPattern, storingEachActivityScore, triggerNextContainer } from '../utils';
import { stopHighlightForSpeakingElement } from './highlightHandler';

let fillCompleted = false;
export async function handleElementClick(element: HTMLElement) {
  AudioPlayer.getI().play(element);
  stopHighlightForSpeakingElement(element);
  element.style.animation = 'none';
  handleFloatElementPosition(element);
  const container = document.getElementById(LidoContainer) as HTMLElement;
  if (!container) {
    console.error(`No container found with id: lido-container`);
    return;
  }
  const objectiveArray = container['objective'];
  const fillElement = container.querySelector('.lido-slide-fill') as HTMLElement;

  if (!fillElement) {
    return;
  }

  const res = matchStringPattern(element['value'], [objectiveArray]);
  storingEachActivityScore(res);
  if (res) {
    const onCorrect = container['onCorrect'];
    await executeActions(onCorrect, container);
    
    const fillValue = JSON.parse(fillElement['fill']);

    if (fillValue === 100 && !fillCompleted) {
      fillCompleted = true;
      container.style.pointerEvents = 'none';
      triggerNextContainer();
      calculateScore();
    } else {
      fillCompleted = false;
    }
  } else {
    const onInCorrect = container['onInCorrect'];
    await executeActions(onInCorrect, container);
  }
}

let entryValue = 0;
export function handleFloatElementPosition(element: HTMLElement) {
  const container = document.getElementById(LidoContainer) as HTMLElement;
  if (!container) {
    console.error(`No container found with id: lido-container`);
    return;
  }
  stopHighlightForSpeakingElement(element);

  const floatContainer = container.querySelector('.lido-float') as HTMLElement;
  if (!floatContainer) return;

  const direction = floatContainer.getAttribute('float-direction') || 'bottomToTop';

  const delay = Math.random() * 5;

  // const isFirstEntry = element.getAttribute('data-entry') !== 'true';
  // if (isFirstEntry) {
  //   element.setAttribute('data-entry', 'true');
  //   entryValue += 10;
  // }

  element.style.position = 'absolute';

  if (direction === 'leftToRight') {
    const containerHeight = floatContainer.offsetHeight;
    // Add class for bubble elements to identify them later for input matching and scoring
    element.classList.add("bubble-element")
    element.style.left = 'unset';
    element.style.right = `${window.innerWidth + document.body.getBoundingClientRect().width}px`;

    // element.style.top = isFirstEntry ? `${entryValue}%` : `${Math.floor(Math.random() * (containerHeight - element.clientHeight))}px`;
    element.style.top = `${Math.floor(Math.random() * (containerHeight - element.clientHeight))}px`;

    // const duration = 15 + Math.random() * 15;
    element.style.setProperty('--el-left', element.style.right);
    element.style.animation = `float-lr 15s linear ${delay}s`;
  } else {
    const containerWidth = floatContainer.offsetWidth;

    // element.style.left = isFirstEntry ? `${entryValue}%` : `${Math.floor(Math.random() * (containerWidth - element.clientWidth))}px`;
    element.style.left = `${Math.floor(Math.random() * (containerWidth - element.clientWidth))}px`;

    const startTop = document.body.offsetHeight + element.offsetHeight * (1/calculateScale());
    element.style.top = `${startTop}px`;
    const duration = 5 + Math.random() * 5;
    element.style.setProperty('--el-top', `${startTop}px`);
    element.style.animation = `float-up ${duration}s linear ${delay}s`;
    element.id = 'removeShadow';
  }

  element.addEventListener(
    'animationend',
    () => {
      element.style.animation = 'none';
      handleFloatElementPosition(element);
    },
    { once: true },
  );
}

export function fillSlideHandle(value: string) {
  const container = document.getElementById(LidoContainer) as HTMLElement;
  const fillElement = container.querySelector('#lido-slide-fill') as HTMLElement;
  let fillValue = fillElement['fill'];

  fillValue = calculateFill(value, JSON.parse(fillValue));
  fillElement.setAttribute('fill', fillValue);
}

function calculateFill(input, currentFill = 0) {
  const str = input.toString().trim().replace('%', '');
  const value = parseFloat(str);

  if (isNaN(value)) return currentFill;

  if (str.startsWith('+')) {
    if (currentFill >= 100) return 100;
    return Math.min(100, currentFill + value);
  }

  if (str.startsWith('-')) {
    if (currentFill <= 0) return 0;
    return Math.max(0, currentFill + value);
  }

  return Math.max(0, Math.min(100, value));
}
