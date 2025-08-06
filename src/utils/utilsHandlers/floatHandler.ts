import { AudioPlayer } from '../audioPlayer';
import { LidoContainer } from '../constants';
import { executeActions, matchStringPattern, storingEachActivityScore, triggerNextContainer } from '../utils';
import { stopHighlightForSpeakingElement } from './highlightHandler';

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
    console.error(`No fill element found with class: lido-slide-fill`);
    return;
  }

  const res = matchStringPattern(element['value'], [objectiveArray]);
  storingEachActivityScore(res);
  if (res) {
    const onCorrect = container['onCorrect'];
    await executeActions(onCorrect, container);
    const fillValue = JSON.parse(fillElement['fill']);
    if (fillValue !== 100) return;
    triggerNextContainer();
  } else {
    const onInCorrect = container['onInCorrect'];
    await executeActions(onInCorrect, container);
  }
}

export function handleFloatElementPosition(element: HTMLElement) {
  const container = document.getElementById(LidoContainer) as HTMLElement;

  if (!container) {
    console.error(`No container found with id: lido-container`);
    return;
  }
  const floatContainer = container.querySelector('.lido-float') as HTMLElement;
  if (!floatContainer) return;
  const containerWidth = floatContainer.offsetWidth;
  const randomLeft = Math.floor(Math.random() * (containerWidth - element.clientWidth));

  element.style.position = 'absolute';
  element.style.left = `${randomLeft}px`;
  element.style.top = '300vh';

  const duration = 5 + Math.random() * 5;
  const delay = Math.random() * 2;
  element.style.animation = `float-up ${duration}s linear ${delay}s`;

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
