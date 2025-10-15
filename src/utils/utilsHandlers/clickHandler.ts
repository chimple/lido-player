import { countPatternWords,buildDragSelectedMapFromDOM, executeActions, handleShowCheck, handlingElementFlexibleWidth, storingEachActivityScore, validateObjectiveStatus } from '../utils';
import { AudioPlayer } from '../audioPlayer';
import { DragSelectedMapKey, LidoContainer, SelectedValuesKey } from '../constants';
import { dispatchClickEvent } from '../customEvents';
import tinycolor from 'tinycolor2';
import { setDraggingDisabled } from './dragDropHandler';

export function onTouchListenerForOnTouch(element: HTMLElement) {
  if (!element) return;
   const container = document.getElementById('lido-container') as HTMLElement;
    // const container = element.closest('lido-container') as HTMLElement;
  if (container && container.getAttribute('disableSpeak') === 'true') {
    return;
  }

  // if (element.closest('[disableSpeak="true"]')) {
  //   return;
  // }
  const onTouch = element.getAttribute('onTouch');
  let onholdTimer: NodeJS.Timeout | null = null;
  let onholdTriggered = false;
  const onholdTime = 1000;

  const playAudio = async () => {
    onholdTriggered = true;
    setDraggingDisabled(true);
    await AudioPlayer.getI().play(element);
    setDraggingDisabled(false);
  };

  const onPointerDown = (event: PointerEvent) => {
    event.stopPropagation();
    onholdTriggered = false;
    onholdTimer = setTimeout(() => {
      playAudio();
    }, onholdTime);
  };

  const onPointerUp = async (event: PointerEvent) => {
    clearTimeout(onholdTimer!);

    if (!onholdTriggered && onTouch) {
      await executeActions(onTouch, element);
    } else if (!onTouch) {
      if (['category', 'option'].includes(element.getAttribute('type') || '')) {
        element.dispatchEvent(
          new MouseEvent('click', { bubbles: true, cancelable: true })
        );
      }
    }

    setDraggingDisabled(false);
  };

  const onPointerLeave = () => {
    clearTimeout(onholdTimer!);
  };

  element.addEventListener('pointerdown', onPointerDown);
  element.addEventListener('pointerup', onPointerUp);
  element.addEventListener('pointerleave', onPointerLeave);
}



export function addClickListenerForClickType(element: HTMLElement): void {
  handlingElementFlexibleWidth(element, 'click');
  element.style.cursor = 'pointer';
  if (!element) {
    console.error('No element provided.');
    return;
  }

  const onClick = async () => {
    const lido_buttons = element.getAttribute('id');
    if (lido_buttons === 'lido-arrow-left' || lido_buttons === 'lido-arrow-right') {
      return;
    }
    AudioPlayer.getI().stop();
    const container = document.getElementById(LidoContainer) as HTMLElement;
    const objective = container['objective'].split(',');

    const checkButton = document.querySelector('#lido-checkButton') as HTMLElement;
    const showCheck = container.getAttribute('show-check') === 'true';

    if (element.getAttribute('id') == 'lido-checkButton') {
      checkButton.classList.add('lido-disable-check-button');
      await validateObjectiveStatus();
      return;
    }

    if(container['objective'].length === 0)return;

    // element.style.border = '2px solid yellow';
    // element.style.boxShadow = '0px 0px 10px rgba(255, 255, 0, 0.7)';

    // element.style.transition = 'transform 0.2s ease, border 0.5s ease';
    // element.style.transform = 'scale(1.1)';

    // element.style.transform = 'scale(1)';
    // element.style.border = '';
    // element.style.boxShadow = '';

    const isActivated = element.classList.contains('lido-element-selected');
    let selectedValue = JSON.parse(container.getAttribute(SelectedValuesKey) ?? '[]') ;
    
    if (objective.length === 1) {
      container.setAttribute(SelectedValuesKey, JSON.stringify([element['value']]));
      const isCorrect = objective.includes(element['value']);
      dispatchClickEvent(element, isCorrect);
      if (isCorrect) {
        const onCorrect = element.getAttribute('onCorrect');
        // element.style.pointerEvents = 'none';
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
      container.setAttribute(SelectedValuesKey, JSON.stringify([element['value']]));

      let multiOptionScore =buildDragSelectedMapFromDOM();
      const valueToRemove = element['value'];
      const keyToRemove = Object.keys(multiOptionScore).find(key => multiOptionScore[key].includes(valueToRemove));

      if (keyToRemove) {
        multiOptionScore[keyToRemove] = multiOptionScore[keyToRemove].filter(item => item !== valueToRemove);
        if (multiOptionScore[keyToRemove].length === 0) {
          delete multiOptionScore[keyToRemove];
        }
        container.setAttribute(DragSelectedMapKey, JSON.stringify(multiOptionScore));
        const sortedKeys = Object.keys(multiOptionScore).sort((a, b) => parseInt(a) - parseInt(b));
        const sortedValues = sortedKeys.reduce((acc, key) => acc.concat(multiOptionScore[key]), []);
        container.setAttribute(SelectedValuesKey, JSON.stringify(sortedValues));
      }

      if (showCheck && selectedValue.length === 0) {
        checkButton.classList.add('lido-disable-check-button');
      }
      return;
    } else {
      element.classList.add('lido-element-selected');
      const valueToFind = element['value'];
      const key = Object.keys(objective).find(key => objective[key] === valueToFind);
      let multiOptionScore = buildDragSelectedMapFromDOM();
      if (!key) {
        multiOptionScore[objective.length + selectedValue.length] = [valueToFind];
      } else {
        multiOptionScore[key] = [valueToFind];
      }
      container.setAttribute(DragSelectedMapKey, JSON.stringify(multiOptionScore));
      const sortedKeys = Object.keys(multiOptionScore).sort((a, b) => parseInt(a) - parseInt(b));
      const sortedValues = sortedKeys.reduce((acc, key) => acc.concat(multiOptionScore[key]), []);
      container.setAttribute(SelectedValuesKey, JSON.stringify(sortedValues));

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

  // using pointerup and pointerdown - for handling mouse and touch events combined
  element.addEventListener('pointerdown', () => {
    if (element.getAttribute('animation') === 'clickable') {
      element.classList.add('removeShadow');
      element.style.top = '40px';
      element.style.position = 'relative';
    }
  });

  element.addEventListener('pointerup', () => {
    if (element.getAttribute('animation') === 'clickable') {
      setTimeout(() => {
        element.classList.remove('removeShadow');
        element.style.top = '0px';
        element.style.position = 'relative';
      }, 50);
    }
  });
  clickableElementStyle(element);
}

const clickableElementStyle = (element: HTMLElement) => {
  const elementShadow = element.offsetHeight * 0.08;
  const backGroundColor = element.style?.backgroundColor || '#FFB742';
  element.style.setProperty('--btn-bg-color', backGroundColor);
  element.style.setProperty('--btn-shadow-px', `0px ${elementShadow}px 0px`);
  element.style.setProperty('--btn-active', `${elementShadow}px`);
  element.style.setProperty('--btn-shadow-color', tinycolor(backGroundColor).darken(17).toString());
  element.classList.add('click-element');
};
