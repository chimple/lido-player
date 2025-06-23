import { ActivityScoreKey, DragSelectedMapKey, DragMapKey, SelectedValuesKey, DropMode, DropToAttr, DropTimeAttr, LidoContainer } from './constants';
import { dispatchActivityEndEvent, dispatchLessonEndEvent, dispatchNextContainerEvent } from './customEvents';
import GameScore from './constants';
import { RiveService } from './rive-service';
import { getAssetPath } from '@stencil/core';
import { AudioPlayer } from './audioPlayer';
import { enableReorderDrag } from './utilsHandlers/sortHandler';
import { slidingWithScaling } from './utilsHandlers/slideHandler';
import { enableDraggingWithScaling, enableOptionArea, getElementScale, handleDropElement,appendingDragElementsInDrop } from './utilsHandlers/dragDropHandler';
import { addClickListenerForClickType, onTouchListenerForOnTouch } from './utilsHandlers/clickHandler';
import { evaluate, isArray } from 'mathjs';
import { fillSlideHandle } from './utilsHandlers/floatHandler';
const gameScore = new GameScore();

export function format(first?: string, middle?: string, last?: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export const initEventsForElement = async (element: HTMLElement, type: string) => {
  const container = document.getElementById(LidoContainer) as HTMLElement;
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
    case 'word': {
      enableReorderDrag(element);
      break;
    }
    case 'option': {
      enableReorderDrag(element);
      break;
    }
    case 'optionArea': {
      enableOptionArea(element);
      break;
    }
    default:
      break;
  }

  onTouchListenerForOnTouch(element);
};

// Function to execute actions parsed from the onMatch string
export const executeActions = async (actionsString: string, thisElement: HTMLElement, element?: HTMLElement): Promise<void> => {
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
          const container = document.getElementById(LidoContainer) as HTMLElement;
          const containerScale = getElementScale(container);
          dragElement.style.transform = 'translate(0,0)';
          // dropElement.parentElement.append(dragElement)

          const dropRect = dropElement.getBoundingClientRect();
          const dragRect = dragElement.getBoundingClientRect();

          const dropCenterX = dropRect.left + dropRect.width / 2;
          const dropCenterY = dropRect.top + dropRect.height / 2;
          const dragCenterX = dragRect.left + dragRect.width / 2;
          const dragCenterY = dragRect.top + dragRect.height / 2;

          let scaledLeft = (dropCenterX - dragCenterX) / containerScale;
          let scaledTop = (dropCenterY - dragCenterY) / containerScale;

          if (element.getAttribute('dropAttr')?.toLowerCase() === DropMode.Diagonal) {
            dragElement.style.transform = `translate(${scaledLeft - 70}px, ${scaledTop - 70}px)`;
          } else {
            dragElement.style.transform = `translate(${scaledLeft}px, ${scaledTop}px)`;
            const isAppend = container.getAttribute('afterDrop') === 'append';
            if (!isAppend) return;
            setTimeout(() => {
              dragElement.style.transform = 'translate(0,0)';
              dragElement.style.transition = 'none';

              const dummyElement = document.createElement('div');
              dummyElement.setAttribute('id', dragElement.getAttribute('id'));
              dragElement.replaceWith(dummyElement);
              dropElement.parentElement.append(element);
              dragElement.style.position = 'absolute';
              dragElement.style.zIndex = '1';

              const dropRect = dropElement.getBoundingClientRect();
              const dragRect = dragElement.getBoundingClientRect();

              const dropCenterX = dropRect.left + dropRect.width / 2;
              const dropCenterY = dropRect.top + dropRect.height / 2;
              const dragCenterX = dragRect.left + dragRect.width / 2;
              const dragCenterY = dragRect.top + dragRect.height / 2;

              scaledLeft = (dropCenterX - dragCenterX) / containerScale;
              scaledTop = (dropCenterY - dragCenterY) / containerScale;

              dragElement.style.transform = `translate(${scaledLeft}px, ${scaledTop}px)`;
            }, 500);
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
        case 'removeClass': {
          targetElement.classList.remove(action.value);
          break;
        }
        case 'speak': {
          await AudioPlayer.getI().play(targetElement);
          break;
        }
        case 'fill-slide': {
          fillSlideHandle(action.value);
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

export const matchStringPattern = (pattern: string, arr: string[]): boolean => {
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

      if (arrIndex > arrChoice.length) return false;
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

export const countPatternWords = (pattern: string): number => {
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

export const storingEachActivityScore = (flag: boolean) => {
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

export async function onActivityComplete(dragElement?: HTMLElement, dropElement?: HTMLElement) {
  const container = document.getElementById(LidoContainer) as HTMLElement;
  if (!container) return;

  const isAllowOnlyCorrect = container.getAttribute('isAllowOnlyCorrect') === 'true';
  if (isAllowOnlyCorrect) {
    const isCorrect = dropElement['value'].includes(dragElement['value']);

    if (!isCorrect) {
      dragElement.style.transform = 'translate(0,0)';
      if (dragElement['type'] === 'option') {
        const childs = Array.from(container.querySelectorAll(`[value="${dragElement['value']}"]`));
        childs.forEach(item => {
          if (item === dragElement) return;
          if (item.getAttribute('value') === dragElement.getAttribute('value')) {
            item.replaceWith(dragElement);
          }
        });
      }
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

  //localStorage
  let drag = JSON.parse(localStorage.getItem(DragMapKey) ?? '{}');
  const index = dropElement.getAttribute('tabindex');
  if (!drag[index]) {
    drag[index] = [];
  }
  drag[index].push(dragElement.id);
  // localStorage.setItem(DragMapKey, JSON.stringify(drag));

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
      if (!(otherElement.getAttribute('dropAttr')?.toLowerCase() === DropMode.Diagonal)) {
        if (otherElement.tagName.toLowerCase() === 'lido-text') {
          otherElement.style.border = ''; // Reset border
          otherElement.style.backgroundColor = 'transparent'; // Reset background color**
        }
        if (otherElement.tagName.toLowerCase() === 'lido-image') {
          otherElement.style.opacity = '0';
        }
      }
    } else {
      if (otherElement.tagName.toLowerCase() === 'lido-text') {
        otherElement.style.border = '5px dashed #f34d08'; // Reset border
        otherElement.style.backgroundColor = 'transparent'; // Reset background color**********
      }
      if (otherElement.tagName.toLowerCase() === 'lido-image') {
        otherElement.style.opacity = '1';
      }
    }
  });
  handleShowCheck();
}

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

export const handleShowCheck = () => {
  const container = document.getElementById(LidoContainer) as HTMLElement;
  const objectiveString = container['objective'];
  const selectValues = localStorage.getItem(SelectedValuesKey) ?? '';

  const checkButton = document.querySelector('#lido-checkButton') as HTMLElement;

  if (!selectValues || countPatternWords(selectValues) !== countPatternWords(objectiveString)) {
    executeActions("this.addClass='lido-disable-check-button'", checkButton);
    return;
  }

  const showCheck = container.getAttribute('showCheck') == 'true';

  if (showCheck) {
    checkButton?.classList?.remove('lido-disable-check-button');
  } else {
    validateObjectiveStatus();
  }
};

export const validateObjectiveStatus = async () => {
  const container = document.getElementById(LidoContainer) as HTMLElement;
  if (!container) return;
  const objectiveString = container['objective'];
  const objectiveArray = JSON.parse(localStorage.getItem(SelectedValuesKey)) ?? [];
  let res;
  const additionalCheck = container.getAttribute('equationCheck');
  if (!!additionalCheck) {
    res = equationCheck(additionalCheck);
    console.log('🚀 ~ handleShowCheck ~ res:', res);
  } else {
    res = matchStringPattern(objectiveString, objectiveArray);
  }
  if (res) {
    const attach=container.getAttribute('appendToDropOnCompletion');
    if(attach === 'true') {
    appendingDragElementsInDrop();
    }
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

export const triggerNextContainer = () => {
  AudioPlayer.getI().stop();
  // const event = new CustomEvent('nextContainer');
  console.log('🚀 ~ triggerNextContainer ~ event:', event);
  // window.dispatchEvent(event);
  dispatchNextContainerEvent();
};

export function convertUrlToRelative(url: string): string {
  const container = document.getElementById(LidoContainer) as HTMLElement;
  const baseUrl = container.getAttribute('baseUrl');

  if (url?.startsWith('http') || url?.startsWith('blob')) {
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

export function handlingChildElements(element: HTMLElement, minLength: number, maxLength: number, currentLength: number) {
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
    if (index > allowedLength - 1) {
      (child as HTMLElement).style.display = 'none';
    }
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

export const handlingElementFlexibleWidth = (element: HTMLElement, type: string) => {
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

    if (!(element.getAttribute('dropAttr')?.toLowerCase() === DropMode.Stretch)) {
      if (tempWidth > maxWidth) {
        maxWidth = tempWidth;
      }
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

export const equationCheck = (additionalCheck: string): boolean => {
  if (!additionalCheck) {
    console.log('Input string is empty.');
    return undefined;
  }

  // 1. Split the string by the comma to get an array of individual parts
  const parts: string[] = additionalCheck.split(',');
  // 2. Map through the parts, replacing those that start with '#'
  const modifiedParts: string[] = parts.map(part => {
    if (part.startsWith('$')) {
      const cleanWord = part.substring(1);
      const dragSelectedElements = getElementsForQueries(cleanWord);
      const randomReplacement = isArray(dragSelectedElements)
        ? dragSelectedElements?.map(val => val.getAttribute('value'))
        : dragSelectedElements.getAttribute('value') || document.getElementById(cleanWord)?.['value'];

      return randomReplacement;
    } else {
      return part;
    }
  });

  // 3. Join the modified parts back into one string
  const resultString = modifiedParts.join('');
  const finalRes = evaluate(resultString);
  return finalRes;
};

const getElementsForQueries = (query: string) => {
  if (query.startsWith('#')) {
    const elementIdWithoutHash = query.substring(1);
    const ele = document.getElementById(elementIdWithoutHash);
    if (ele.getAttribute('type') === 'drop') {
      const dragSelectedElements = document.querySelectorAll(`[${DropToAttr}="${elementIdWithoutHash}"]`);
      return dragSelectedElements.length > 0 ? dragSelectedElements[0] : [];
    }
    return ele;
  }
  const dragSelectedElements = document.querySelectorAll(`[${DropToAttr}="${query}"]`);
  const sortedDragSelectedElements = Array.from(dragSelectedElements).sort((a, b) => parseInt(a.getAttribute(DropTimeAttr)) - parseInt(b.getAttribute(DropTimeAttr)));
  return sortedDragSelectedElements;
};
