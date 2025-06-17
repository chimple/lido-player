import { executeActions, matchStringPattern, storingEachActivityScore, triggerNextContainer } from '../utils';

export async function handleElementClick(element: HTMLElement) {
  element.style.animation = 'none';
  handleFloatElementPosition(element);
  const container = document.querySelector('#lido-container') as HTMLElement;
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
  let fillValue = JSON.parse(fillElement['fill']);

  if (res) {
    fillValue = fillValue + 10
    fillElement.setAttribute('fill', JSON.stringify(fillValue));
    storingEachActivityScore(res);
    if (fillValue >= 100) {
      const onCorrect = container['onCorrect'];
      await executeActions(onCorrect, container);
      triggerNextContainer();
      return;
    }
  } else {
    fillValue = fillValue - 10
    if (fillValue >= 0) {
      fillElement.setAttribute('fill', JSON.stringify(fillValue));
    }
    const onInCorrect = container['onInCorrect'];
    await executeActions(onInCorrect, container);
    storingEachActivityScore(res);
  }
}

export function handleFloatElementPosition(element: HTMLElement) {
  const container = document.querySelector('#lido-container') as HTMLElement;

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

  element.addEventListener('animationend', () => {
    element.style.animation = 'none';
    handleFloatElementPosition(element);
  }, { once: true });
}
