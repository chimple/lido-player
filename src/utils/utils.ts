import {
  ActivityScoreKey,
  DragSelectedMapKey,
  DragMapKey,
  SelectedValuesKey,
  DropMode,
  DropToAttr,
  DropTimeAttr,
  LidoContainer,
  DropAction,
  DropHasDrag,
  DropLength,
} from './constants';
import { dispatchActivityEndEvent, dispatchLessonEndEvent, dispatchNextContainerEvent, dispatchPrevContainerEvent } from './customEvents';
import GameScore from './constants';
import { RiveService } from './rive-service';
import { getAssetPath } from '@stencil/core';
import { AudioPlayer } from './audioPlayer';
import { enableReorderDrag } from './utilsHandlers/sortHandler';
import { slideAnimation, slidingWithScaling } from './utilsHandlers/slideHandler';
import { enableDraggingWithScaling, enableOptionArea, getElementScale, handleDropElement, appendingDragElementsInDrop } from './utilsHandlers/dragDropHandler';
import { addClickListenerForClickType, onTouchListenerForOnTouch } from './utilsHandlers/clickHandler';
import { evaluate, isArray } from 'mathjs';
import { fillSlideHandle } from './utilsHandlers/floatHandler';
import { highlightElement, stopHighlightForSpeakingElement } from './utilsHandlers/highlightHandler';
import { handleSolvedEquationSubmissionAndScoreUpdate } from './utilsHandlers/lidoCalculatorHandler'; 
import { handlingMatrix } from './utilsHandlers/matrixHandler';
import {balanceResult} from './utilsHandlers/lidoBalanceHandler';
const gameScore = new GameScore();

export function buildDragSelectedMapFromDOM(): Record<string, string[]> {
  const map: Record<string, string[]> = {};
  const draggedEls = document.querySelectorAll<HTMLElement>(`[${DropToAttr}]`);
  draggedEls.forEach(dragEl => {
    const to = dragEl.getAttribute(DropToAttr);
    if (!to) return;
    const dropEl = document.getElementById(to);
    if (!dropEl) return;
    const tabIndex = dropEl.getAttribute('tab-index') ?? to;
    if (!map[tabIndex]) map[tabIndex] = [];
    const value = dragEl.getAttribute('value') ?? (dragEl as any).value ?? '';
    map[tabIndex].push(value);
  });
  return map;
}
export function getSortedValuesArrayFromMap(map: Record<string, string[]>): string[] {
  const sortedKeys = Object.keys(map).sort((a, b) => parseInt(a) - parseInt(b));
  const sortedValues = sortedKeys.reduce((acc: string[], key) => {
    const values = map[key];
    if (values.length > 1) {
      acc.push(`(${values.join('|')})`);
    } else {
      acc.push(values[0]);
    }
    return acc;
  }, []);
  return sortedValues;
}
export function format(first?: string, middle?: string, last?: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export const initEventsForElement = async (element: HTMLElement, type?: string) => {
  const container = document.getElementById(LidoContainer) as HTMLElement;
  if (!container) {
    setTimeout(() => {
      return initEventsForElement(element, type);
    }, 500);
    return;
  }
  const onEntry = element.getAttribute('onEntry');
  await executeActions(onEntry, element);
  // const canplay = container.getAttribute('canplay');
  // if (canplay != null && canplay === 'false') return;
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
    case 'checkerBlock': {
      handlingMatrix(element);
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
  body.style.pointerEvents = 'none';
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
        case 'revealImageValue': {
          if (targetElement) {
            revealImageValue(targetElement); // call your function here
          }
          break;
        }

        case 'scrollCellAfterEquationSolved': { 
          if(targetElement){ 
            handleSolvedEquationSubmissionAndScoreUpdate();
          } 
          break; 
        }          

        case 'alignMatch': {
          const dropElement = targetElement;
          const dragElement = element;
          const container = document.getElementById(LidoContainer) as HTMLElement;
          const containerScale = getElementScale(container);
          dragElement.style.transform = 'translate(0,0)';
          console.log('logg alinmatch');

          const dropRect = dropElement.getBoundingClientRect();
          const dragRect = dragElement.getBoundingClientRect();

          const dropCenterX = dropRect.left + dropRect.width / 2;
          const dropCenterY = dropRect.top + dropRect.height / 2;
          const dragCenterX = dragRect.left + dragRect.width / 2;
          const dragCenterY = dragRect.top + dragRect.height / 2;

          const scaledLeft = (dropCenterX - dragCenterX) / containerScale;
          const scaledTop = (dropCenterY - dragCenterY) / containerScale;

          if (element.getAttribute('dropAttr')?.toLowerCase() === DropMode.Diagonal) {
            dragElement.style.transform = `translate(${scaledLeft - 70}px, ${scaledTop - 70}px)`;
          } else {
            dragElement.style.transform = `translate(${scaledLeft}px, ${scaledTop}px)`;
          }
          if (dragElement.getAttribute('hasDummy') === 'true') return;
          afterDropDragHandling(dragElement, dropElement);
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
          const val = (action.value || '').toString().trim().toLowerCase();
          if (val === 'true' || val === '1' || val === 'yes') {
            try {
              await AudioPlayer.getI().play(targetElement);
            } 
            catch (err) {
              console.error('Error playing audio for speak action:', err);
            }
          }
          break;
        }
        case 'fill-slide': {
          fillSlideHandle(action.value);
          break;
        }
        case 'nextBtn': {
          const container = document.getElementById(LidoContainer) as HTMLElement;
          if (container.getAttribute('is-continue-on-correct') !== 'true') {
            targetElement.style.pointerEvents = 'none';
          }
          await validateObjectiveStatus();
          break;
        }
        case 'prevBtn': {
          triggerPrevcontainer();
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

        case 'cellBorderAnimate': {
          const value = action.value;
          if (value && targetElement) {
            applyBorderToClickableCell(targetElement as HTMLElement, value);
          }
          break;
        }

        case 'vibrate': {
          const value = action.value;
          if (value && targetElement) {
            await vibrateCell(targetElement as HTMLElement, value);
          }
          break;
        }

        case 'highlightStarsAndDisapper': {
          const value = action.value;
          if (value && targetElement) {
            console.log('highlightStar action triggered');
            console.log('Target Element:', targetElement);
            await HighlightStarsOneByOne(targetElement as HTMLElement, value);
          }
          break;
        }

        case 'boxAnimationOneByOne': {
          const value = action.value;
          if (value && targetElement) {
            await animateBoxCells(targetElement as HTMLElement, value);
          }
          break;
        }

        case 'questionBoxAnimate' : {
          const value = action.value;
          if (value && targetElement) {
            await questionBoxAnimation(targetElement as HTMLElement, value)
          }
          break;
        }

        case 'slideAnimation': {
          slideAnimation();
          break;
        }
        case 'showBalanceSymbol': {
          const balanceEl = document.querySelector('lido-balance') as any;
          if (!balanceEl) break;
          const leftVal = Number(balanceEl.leftVal ?? Number(balanceEl.dataset?.leftVal ?? 0));
          const rightVal = Number(balanceEl.rightVal ?? Number(balanceEl.dataset?.rightVal ?? 0));
          const symbol = leftVal > rightVal ? '>' : leftVal < rightVal ? '<' : '=';
          balanceEl.balanceSymbol = symbol;
          balanceEl.dataset.balanceSymbol = symbol;
          if (balanceEl.revealSymbol) {
            await balanceEl.revealSymbol();
          } else {
            balanceEl.showSymbol = true;
          }
          break;
        }

        case 'hideBalanceSymbol': {
          const balanceEl = document.querySelector('lido-balance') as any;
          if (!balanceEl) break;
          if (balanceEl.hideSymbol) {
            await balanceEl.hideSymbol();
          } 
          else{
              balanceEl.showSymbol = false;
              }
          break;
        }


        case 'sumTogetherAnimation' : {
          const value = action.value;
          if(value) {
            SumTogetherAnimation(targetElement,value);
          }
          break;
        }

        case 'addText': {
          const value = action.value;
          if (value) {
            targetElement.textContent += value;
          }
          break;
        }
        
        case 'disableType': {
          const dragEle = document.querySelector<HTMLElement>('[type="drag"]');
            dragEle.removeAttribute('type');
            dragEle.style.pointerEvents = 'none';
          break;
        }

        case 'updateCountBlender': {
          const allDrags = document.querySelectorAll('[type="drag"]');
          let units = 0;
          let tens = 0;
          let hundreds = 0;
          allDrags.forEach(el => {
            const dropTo = el.getAttribute("drop-to");

            if (dropTo === "unitsDrop") units++;
            if (dropTo === "tensDrop") tens++;
            if (dropTo === "hundredsDrop") hundreds++;
          });

          const unitsValue = units * 1;
          const tensValue = tens * 10;
          const hundredsValue = hundreds * 100;
          const totalValue = unitsValue + tensValue + hundredsValue;

          // ✅ Update Lido Text Boxes
          const unitsBox = document.getElementById("units");
          const tensBox = document.getElementById("tens");
          const hundredsBox = document.getElementById("hundreds");
        
          if (unitsBox) {
            unitsBox.setAttribute("string", unitsValue.toString());
          }
          if (tensBox) {
            tensBox.setAttribute("string", tensValue.toString());
          }
          if (hundredsBox) {
            hundredsBox.setAttribute("string", hundredsValue.toString());
          }
          console.log(`Units = ${units} → ${unitsValue}`);
          console.log(`Tens = ${tens} → ${tensValue}`);
          console.log(`Hundreds = ${hundreds} → ${hundredsValue}`);
          console.log(`✅ Total Value = ${totalValue}`);
          break;
        }
        case 'updateCalculatorAnswer': {
          if(targetElement){
          updateCalculatorAnswer(targetElement); 
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
  body.style.pointerEvents = 'auto';
};

const afterDropDragHandling = (dragElement: HTMLElement, dropElement: HTMLElement) => {
  const container = document.getElementById(LidoContainer);
  const containerScale = getElementScale(container);
  const element = dragElement;
  const isAppend = container.getAttribute('drop-action') === DropAction.Move;
  const isInfinite = container.getAttribute('drop-action') === DropAction.InfiniteDrop;

  if (isAppend || isInfinite) {
    setTimeout(() => {
      dragElement.style.transform = 'translate(0,0)';
      dragElement.style.transition = '';

      let dummyElement = document.createElement('div') as HTMLElement;
      if (isInfinite) {
        dummyElement = cloneElementWithComputedStyles(dragElement);
        dummyElement.classList.remove('dropped');
        dummyElement.removeAttribute('drop-to');
        dummyElement.removeAttribute('drop-time');
        dragElement.style.width = dropElement.style.width;
        dragElement.style.height = dropElement.style.height;
        dragElement.setAttribute('hasDummy', 'true');
      }

      dummyElement.setAttribute('id', dragElement.getAttribute('id'));
      dragElement.replaceWith(dummyElement);
      

      const keyframes = `
      @keyframes widthDecrease {
        0% { width: ${dragElement.style.width}; height: ${dragElement.style.height}; margin: ${dragElement.style.margin}; }
        100% { width: 0px; height: 0px; margin: 0px;}
      }
    `;

      if (!isInfinite) {
        dummyElement.style.width = element.style.width;
        dummyElement.style.height = element.style.height;
        dummyElement.style.margin = element.style.margin;
        const styleSheet = document.styleSheets[0];
        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
        dummyElement.style.animation = `widthDecrease 0.5s`;
        dummyElement.addEventListener('animationend', () => {
          dummyElement.style.width = '0px';
          dummyElement.style.height = '0px';
          dummyElement.style.margin = '0px';
        });
      }
      const orientation = window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
      const rowAttr = dropElement.getAttribute('dropAttr');
      const dropAttr = parseProp(rowAttr, orientation); // will return stackcascade or verticalstack

      if ((dropAttr)?.toLowerCase() === "stackcascade" || (dropAttr)?.toLowerCase() === "verticalstack") {
            dropElement.append(dragElement);
            placeElementInDropZone(dropElement, dragElement, orientation, dropAttr);
            return;
     }

      dropElement.parentElement.append(element);

      dragElement.style.position = 'absolute';
      dragElement.style.zIndex = '1';

      const dropRect = dropElement.getBoundingClientRect();
      const dragRect = dragElement.getBoundingClientRect();

      const dropCenterX = dropRect.left + dropRect.width / 2;
      const dropCenterY = dropRect.top + dropRect.height / 2;
      const dragCenterX = dragRect.left + dragRect.width / 2;
      const dragCenterY = dragRect.top + dragRect.height / 2;

      const scaledLeft = (dropCenterX - dragCenterX) / containerScale;
      const scaledTop = (dropCenterY - dragCenterY) / containerScale;

      dragElement.style.transform = `translate(${scaledLeft}px, ${scaledTop}px)`;
    }, 100);
  }
};

// function cloneElementWithComputedStyles(originalEl: HTMLElement): HTMLElement {
//   let clone = document.createElement('div') as HTMLElement;

//   clone.innerHTML = originalEl.outerHTML;
//   clone = clone.firstChild as HTMLElement;
//   clone.setAttribute('height', originalEl.style.height);
//   clone.setAttribute('width', originalEl.style.width);
//   clone.setAttribute('visible', 'true');
//   return clone;
// }

function cloneElementWithComputedStyles(originalEl: HTMLElement): HTMLElement {
  const tag = originalEl.tagName.toLowerCase();
  if (tag === "lido-text") {
      let clone = document.createElement('div') as HTMLElement;

  clone.innerHTML = originalEl.outerHTML;
  clone = clone.firstChild as HTMLElement;
  clone.setAttribute('height', originalEl.style.height);
  clone.setAttribute('width', originalEl.style.width);
  clone.setAttribute('visible', 'true');
  return clone;
  }
   // ✅ For ALL other types (INCLUDING lido-image & matrix) use your simple logic
  const clone = originalEl.cloneNode(false) as HTMLElement;
  clone.style.width = originalEl.style.width;
  clone.style.height = originalEl.style.height;
  clone.style.margin = originalEl.style.margin;
  clone.style.opacity = originalEl.style.opacity;
  clone.style.transform = originalEl.style.transform;

  clone.setAttribute("visible", "true");
  clone.setAttribute("data-dummy", "true");
  if(tag === "lido-math-matrix"){
    clone.setAttribute('clickable' , "false");
  }

  return clone;
  
}


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

  if (patternGroups.length == 0) { // If pattern is empty
    return true;
  }
  if (patternGroups.length > 0) {
    if (arr.length === 0) return false; // If pattern is not empty but user provided array is empty, return false
  }

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

export let countOfMistakes = 0;

export const storingEachActivityScore = (flag: boolean) => {
  if (flag) {
    gameScore.rightMoves += 1;
    countOfMistakes = 0;
    highlightElement();
  } else {
    gameScore.wrongMoves += 1;
    countOfMistakes += 1;
  }
  console.log('Right Moves : ', gameScore.rightMoves);
  console.log('Wrong Moves : ', gameScore.wrongMoves);
};

export const calculateScore = () => {
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
  await executeActions("this.alignMatch='true'", dropElement, dragElement);

    if (dragElement && dropElement) {
  const isCorrect = dropElement['value'].toLowerCase().includes(dragElement['value'].toLowerCase());
  // storing each activity score based on isCorrect for (all drag-drop events)
    storingEachActivityScore(isCorrect);
  if (isCorrect) {
    const onCorrect = dropElement.getAttribute('onCorrect');
    if (onCorrect) {
      await executeActions(onCorrect, dropElement, dragElement);
    }
  }
}

  let dragScore =buildDragSelectedMapFromDOM();

 const sortedValues = getSortedValuesArrayFromMap(dragScore);
 container.setAttribute(SelectedValuesKey, JSON.stringify(sortedValues));
 

  //localStorage
  let drag = JSON.parse(localStorage.getItem(DragMapKey) ?? '{}');
  const index = dropElement.getAttribute('tab-index');
  if (!drag[index]) {
    drag[index] = [];
  }
  drag[index].push(dragElement.id);
 


  const allElements = document.querySelectorAll<HTMLElement>("[type='drop']");
  allElements.forEach(otherElement => {
    const storedTabIndexes = Object.keys(dragScore).map(Number);
    if (storedTabIndexes.includes(JSON.parse(otherElement.getAttribute('tab-index')))) {
      if (!(otherElement.getAttribute('dropAttr')?.toLowerCase() === DropMode.Diagonal)) {
        if (otherElement.tagName.toLowerCase() === 'lido-text') {
          // otherElement.style.backgroundColor = 'transparent'; // Reset background color**
        }
        if (otherElement.tagName.toLowerCase() === 'lido-image') {
          otherElement.style.opacity = '0';
          otherElement.style.backgroundColor = 'transparent';
        }
      }
    } else {
      if (otherElement.tagName.toLowerCase() === 'lido-text') {
        // otherElement.style.backgroundColor = 'transparent'; // Reset background color**********
      }
      if (otherElement.tagName.toLowerCase() === 'lido-image') {
        otherElement.style.opacity = '1';
        otherElement.style.backgroundColor = 'transparent';
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
  const selectValues = container.getAttribute(SelectedValuesKey) ?? '';

  const checkButton = document.querySelector('#lido-checkButton') as HTMLElement;

  if (!selectValues || countPatternWords(selectValues) < countPatternWords(objectiveString)) {
    executeActions("this.addClass='lido-disable-check-button'", checkButton);
    return;
  }

  const showCheck = container.getAttribute('show-check') == 'true';

  if (showCheck) {
    checkButton?.classList?.remove('lido-disable-check-button');
    const balanceEl = document.querySelector('lido-balance') as any;
    if (balanceEl) {
     if (!checkButton.hasAttribute('data-balance-listener')) {
    checkButton.addEventListener('click', async function onClick() {
    if(balanceResult && res){
      await executeActions("this.showBalanceSymbol='true'", checkButton);
      checkButton.removeEventListener('click', onClick);}
    });
    checkButton.setAttribute('data-balance-listener', 'true'); 
  }}
  } else {
    validateObjectiveStatus();
  }
};

const body = document.body;
let res;
export const validateObjectiveStatus = async () => {
  const container = document.getElementById(LidoContainer) as HTMLElement;
  if (!container) return;
  const objectiveString = container['objective'];
  const additionalCheck = container.getAttribute('equationCheck');
  const isAllowOnlyCorrect = container.getAttribute('isAllowOnlyCorrect') === 'true' || '';
  console.log('🚀 ~ validateObjectiveStatus ~ additionalCheck:', additionalCheck);
  let equationGiven = false;
  if (objectiveString == null || objectiveString.length === 0) 
  { 
    if(additionalCheck) 
    {
      equationGiven = true;
    }
    if(!equationGiven)
    {
      const onCorrect = container.getAttribute('onCorrect');
      if (onCorrect) {
        await executeActions(onCorrect, container);
      }
      storeActivityScore(100);
      storingEachActivityScore(true);
      triggerNextContainer();
      return;
    }
  } 

  const objectiveArray =  JSON.parse(container.getAttribute(SelectedValuesKey) ?? '[]') ?? [];
  
  if (!!additionalCheck) 
  {
    const balanceEl = document.querySelector('lido-balance') as any;
    if (!balanceEl) 
    {
      res = equationCheck(additionalCheck);
    }
    else
    {
      res = balanceResult(container, objectiveString);
    }
    console.log('🚀 ~ handleShowCheck ~ res:', res);
  } 
  else 
  {
    res = matchStringPattern(objectiveString, objectiveArray);
  }
  if (res) 
  {
    const attach = container.getAttribute('appendToDropOnCompletion');

    const onCorrect = container.getAttribute('onCorrect');
    if (onCorrect) 
    {
      if (attach === 'true') 
      {
        appendingDragElementsInDrop();
      }
      storingEachActivityScore(true);
      await executeActions(onCorrect, container);
    }
    if (container.getAttribute('dropAttr') === 'EnableAnimation') 
    {
      setTimeout(() => {
        triggerNextContainer();
      }, 2000);
    } 
    else 
    {
      triggerNextContainer();
    }

    await calculateScore();
  } 
  else 
  {
    const isContinueOnCorrect = container.getAttribute('is-continue-on-correct') === 'true';
    const onCorrect = container.getAttribute('onCorrect');
    if (!isContinueOnCorrect) 
    {
      await calculateScore();
      await executeActions(onCorrect, container);
      triggerNextContainer()
    } 
    else 
    {
      const onInCorrect = container.getAttribute('onInCorrect');
      storingEachActivityScore(false);
      await executeActions(onInCorrect, container);
    }    
  }
};

export const triggerNextContainer = () => {
  AudioPlayer.getI().stop();
  // const event = new CustomEvent('nextContainer');
  console.log('🚀 ~ triggerNextContainer ~ event:', event);
  // window.dispatchEvent(event);
  dispatchNextContainerEvent();
};

export const triggerPrevcontainer = () => {
  AudioPlayer.getI().stop();
  console.log('⬅️ ~ triggerPrevContainer triggered');
  dispatchPrevContainerEvent();
};

export function convertUrlToRelative(url: string): string {
  const container = document.getElementById(LidoContainer) as HTMLElement;
  const baseUrl = container.getAttribute('baseUrl');

  if (url?.startsWith('http') || url?.startsWith('blob') || url?.startsWith('data')) {
    return url;
  }
  if ( url.startsWith('/Lido-CommonAudios/')) {  
    return url;
  }
  if (baseUrl) {
    const newUrl = url.startsWith('/') ? url.slice(1) : url;
    if (newUrl.startsWith(baseUrl.replace(/^\/+|\/+$/g, ''))) return newUrl;
    return baseUrl.endsWith('/') ? baseUrl + newUrl : `${baseUrl}/${newUrl}`;
  }
  return getAssetPath(url);
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
      if (!synth.speaking) {
        stopHighlightForSpeakingElement(targetElement);
      }
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

      if (clickEl.getAttribute('flexible-width')) {
        targetElement = clickEl;
      } else {
        // If the parent doesn't have flexible-width, check its child elements
        const childElements = clickEl.children;
        for (let i = 0; i < childElements.length; i++) {
          const childEl = childElements[i] as HTMLElement;
          if (childEl.getAttribute('flexible-width')) {
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

      if (clickEl.getAttribute('flexible-width')) {
        if (clickEl.getAttribute('flexible-width') === 'true') return;
        clickEl.style.width = `${maxWidth}px`;
      } else {
        const childElements = clickEl.children;
        for (let i = 0; i < childElements.length; i++) {
          const childEl = childElements[i] as HTMLElement;
          if (childEl.getAttribute('flexible-width')) {
            if (childEl.getAttribute('flexible-width') === 'true') return;
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
    const isFlexible = dragEl.getAttribute('flexible-width');

    if (isFlexible === 'false') {
      dragEl.style.width = `${maxWidth}px`;
    } else if (isFlexible === 'true' && type === 'drag') {
      dragEl.style.width = 'auto';
      dragEl.style.padding = '0 20px';
    }
  });

  dropElements.forEach(dropItem => {
    const dropEl = dropItem as HTMLElement;
    const isFlexible = dropEl.getAttribute('flexible-width');

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
  console.log('🚀 ~ equationCheck ~ resultString:', resultString);
  // 4. Evaluate the final string as a mathematical expression
  const finalRes = evaluate(resultString);
  console.log('🚀 ~ equationCheck ~ finalRes:', finalRes);
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

let currentlySpeakingElement: HTMLElement | null = null;
export const speakIcon = (targetElement: HTMLElement) => {
  if (targetElement.className.includes('lido-speak-icon')) {
    return null;
  }
  const parentDiv = document.createElement('div');
  parentDiv.style.width = '0';
  parentDiv.style.height = '0';

  const speakIcon = document.createElement('div');
  parentDiv.append(speakIcon);
  speakIcon.classList.add('lido-speak-icon');
  // const stringAttr = targetElement?.getAttribute('string') || (targetElement as any)?.string;
  // const hasAudioAttr = targetElement?.getAttribute('audio');
  // if (!stringAttr && !hasAudioAttr) {// hide the button
  //   speakIcon.style.display = 'none';
  // }
  //  targetElement.appendChild(speakIcon);

  speakIcon.addEventListener('click', async event => {
    event.stopPropagation();

    setCancelBtnPopup(true); // Cancel popup loop
    await AudioPlayer.getI().stop(); // Stop current playback immediately

    try {
      await AudioPlayer.getI().play(targetElement); // Play clicked element
    } catch (error) {
      console.error('Error playing audio or TTS:', error);
    }

    setCancelBtnPopup(false); // Reset cancel state
  });

  targetElement.style.position = 'relative';
  return speakIcon;
};

export const attachSpeakIcon = async (element: HTMLElement) => {
  let speakIconElement = speakIcon(element);

  if (element['type'] === 'option') {
    element.style.position = 'unset';
    const speakDiv = document.createElement('div');
    speakDiv.className = element.className;
    speakDiv.style.position = 'relative';
    speakDiv.style.backgroundColor = 'transparent';
    speakDiv.style.padding = '0';
    speakDiv.style.width = '100%';
    speakDiv.style.height = '100%';
    Array.from(element.children).forEach(child => {
      speakDiv.appendChild(child);
    });
    speakDiv.appendChild(speakIconElement);
    speakIconElement.style.position = 'absolute';
    speakIconElement = speakDiv as HTMLDivElement;
  }

  element.appendChild(speakIconElement);
};


/**
 * Applies a delay to the element's visibility based on `delayVisible`.
 */

export const setVisibilityWithDelay = async (element: HTMLElement, delayVisible: string) => {
  const container = document.getElementById(LidoContainer) as HTMLElement;
  if (!container) return;

  if (delayVisible) {
    const delay = parseInt(delayVisible, 10);
    element.style.visibility = 'hidden';

    if (!isNaN(delay)) {
      await new Promise<void>(resolve => {
        setTimeout(() => {
          element.style.visibility = 'visible';
          resolve();
        }, delay);
      });
    }
  }
};

// apply border to the clickable cell
export const applyBorderToClickableCell = (cell: HTMLElement, color: string) => {
  if (!cell) return;

  if (!color) {
    color = 'green'; // Default color if none is provided
  }

  // Calculate the shadow based on the cell's height
  const elementShadow = cell.offsetHeight * 0.08; // 8% of the cell height
  const redRing = `0 0 0 6px ${color}`; // 6px red ring around the cell
  // Adjust the drop shadow to be below the cell
  const dropShadow = `0 ${elementShadow}px 10px rgba(0, 0, 0, 0.25)`; // 10px shadow below the cell

  const shadow = `${redRing}, ${dropShadow}`; // Combine the shadows

  cell.style.boxShadow = shadow; // Apply the shadow
  cell.style.setProperty('box-shadow', shadow, 'important'); // enforce priority
};

// apply shake animation to the cell
// value can be 'scaled-shake', 'vertical-shake', 'horizontal-shake', 'strong-shake', 'diagonal-shake'
export const vibrateCell = async (cell: HTMLElement, value: string): Promise<void> => {
  if (!cell) return;

  if (!value) {
    value = 'horizontal-shake'; // Default animation type if none is provided
  }

  const animationType = value;

  // Create the class name
  const className = `lido-${animationType}`;
  // Add animation class
  cell.classList.add(className);
  // Duration should match our animation timing (500–600ms)

  await new Promise(resolve => setTimeout(resolve, 600)); // Wait for the animation to complete

  // Remove the class after the animation completes
  cell.classList.remove(className);
};

export function calculateScale() {
  const widths = [window.innerWidth];
  const heights = [window.innerHeight];

  if (window.screen?.width) {
    widths.push(window.screen.width);
    heights.push(window.screen.height);
  }

  const width = Math.min(...widths);
  const height = Math.min(...heights);
  const isPortrait = height > width;

  const scaleX = isPortrait ? width / 900 : width / 1600;
  const scaleY = isPortrait ? height / 1600 : height / 900;

  const scale = Math.min(scaleX, scaleY); // Ensure uniform scaling
  return scale;
}

// for handling multiple speak elements played once at a time
let cancelBtnPopupState = false;

export function setCancelBtnPopup(value: boolean) {
  cancelBtnPopupState = value;
}

export function getCancelBtnPopup(): boolean {
  return cancelBtnPopupState;
}

export function generateUUIDFallback() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export const revealImageValue = (imageEl: HTMLElement): void => {
  if (!imageEl) return;
  const value = imageEl.getAttribute('value');
  if (!value) return;
  let valueElement = imageEl.querySelector('.lido-display-hiddenvalue') as HTMLElement;
  if (!valueElement) {
    valueElement = document.createElement('div');
    valueElement.classList.add('lido-display-hiddenvalue');
    imageEl.style.position = 'relative';
    imageEl.appendChild(valueElement);
  }
  valueElement.innerText = value;
};

const setImageBackground = (el?: HTMLElement, color?: string) => {
    if (!el) return;
    el.classList.add('lido-image-colorize');

    const img = el.querySelector('img') as HTMLImageElement | null;
    if (img) {
      // use same image as mask
      el.style.setProperty('--mask-url', `url(${img.src})`);
    }

    if (color === 'red') {
      el.style.setProperty('--tint-color', '#ff0000');
    }
    else if (color === 'green') {
      el.style.setProperty('--tint-color', '#00c853')
    }
    else {
      el.style.removeProperty('--tint-color');
      el.style.removeProperty('--mask-url');
    }
};


export const HighlightStarsOneByOne = async (element: HTMLElement, value: string): Promise<void> => {
  if (!element) return;
  if (!value) return;

  // Dynamically find the parent row of stars
  const stars = Array.from(element.children) as HTMLElement[];
  console.log('starRow', stars);

  for (const star of stars) {
    // Highlight the star
    star.classList.add('lido-glow');

    // Play star sound
    await AudioPlayer.getI().play(star);

    // Fade out the star (disappear)
    star.style.opacity = '0';
    star.style.visibility = 'hidden';

    await new Promise(resolve => setTimeout(resolve, 300)); // Wait for fade-out to complete

    // Remove the highlight
    star.classList.remove('lido-glow');
  }
}

export const animateBoxCells = async (element: HTMLElement, value: string) : Promise<void> => {
  if (!element) return;
  if (!value) return;

  // Select all cells with the attribute type="box"
  const boxCells = Array.from(element.children) as HTMLElement[];
  console.log('boxCells', boxCells);
  if (!boxCells) return;

  boxCells.forEach(cell => {
    // Reset any previous styles
    cell.style.visibility = 'hidden';
  });

  // Animate each cell one by one
  for (const cell of boxCells) {

    cell.style.visibility = 'visible';
    cell.style.opacity = '1';
    // Apply the "come from top" animation
    cell.classList.add('lido-box-highlight');

    // Delay for each cell to come one after another
    await new Promise(resolve => setTimeout(resolve, 600)); // Adjust delay as needed

    cell.classList.remove('lido-box-highlight');
  }

  // checkout parent cell first then pick the first text child inside cell
  const parentCell = document.getElementById(LidoContainer) as HTMLElement | null;
  if (!parentCell) return;
  const firstTextChild = parentCell.querySelector('lido-text') as HTMLElement | null;
  if (firstTextChild) {
    // play the text child inside parent cell
    await AudioPlayer.getI().play(firstTextChild);
  }

  // Now select each box cell's text child and play them one by one
  for(const box of boxCells) {
    const text = box.querySelector<HTMLElement>('lido-text');
    console.log('box text', text);  
    if (!text) continue;

    await AudioPlayer.getI().play(text);
  }
};

export const questionBoxAnimation = async (element: HTMLElement, value: string) : Promise<void> => {
  if (!element) return;
  if (!value) return;

  // Select all drag elements and drop elements
  const dragElements = Array.from(element.querySelectorAll("[type='drag']")) as HTMLElement[];

  // Ensure all drag childrens which is dropped disappear
  dragElements.forEach(dragElement => {
    if(dragElement.hasAttribute('drop-to')){
      dragElement.style.transition = 'opacity 0.5s ease';
      dragElement.style.opacity = '0'; // Fade out

      setTimeout(() => {
        dragElement.remove() // Remove from view after fade-out
      }, 500); 
    }
  });

  // Reveal all drop childrens which is hidden
  const dropElements = Array.from(element.querySelectorAll("[type='drop']")) as HTMLElement[];
  let check = false;
  dropElements.forEach(dropEl => {
    const dropVal = dropEl.getAttribute("value");
    if (dropVal && dropEl.innerText.trim() === "?") {
      dropEl.innerText = dropVal;
    }
  });
}

export const SumTogetherAnimation = async (element : HTMLElement,value : string) => {
  if (!element) return;
  if (!value) return;

  // Expecting structure: [_, TopRow, questionRow, optionRow, ...]
  const TopRow = Array.from(element.children)[2] as HTMLElement | null;
  const questionRow = Array.from(element.children)[3] as HTMLElement | null;
  const optionRow = Array.from(element.children)[4] as HTMLElement | null;

  if (!TopRow || !questionRow || !optionRow) return;

  const topRowChildren = Array.from(TopRow.children) as HTMLElement[];
  const questionRowChildren = Array.from(questionRow.children) as HTMLElement[];
  const firstNumberEl = questionRowChildren[0] as HTMLElement | undefined;
  const signElement = questionRowChildren[1] as HTMLElement | undefined;
  const secondNumberEl = questionRowChildren[2] as HTMLElement | undefined;
  const equalElement = questionRowChildren[3] as HTMLElement | undefined;
  const answerElement = questionRowChildren[4] as HTMLElement | undefined;

  // helper functions
  const showElement = (el?: HTMLElement) => { 
    if (!el) return; 
    el.style.visibility = 'visible'; 
    el.style.display = ''; 
    el.style.opacity = '1';
  };
  const readNumber = (el?: HTMLElement) => {
    if (!el) return 0;
    const v = (el.getAttribute && (el.getAttribute('value') || el.getAttribute('string'))) || el.textContent || '';
    return parseInt(String(v).trim(), 10) || 0;
  };
  const elementAppearance = async (flag?: boolean) => {
    if(flag) {
      if (firstNumberEl) { 
        await new Promise(r => setTimeout(r, 200)); 
        showElement(firstNumberEl); 
      }
      if (signElement) { 
        await new Promise(r => setTimeout(r, 200)); 
        showElement(signElement); 
      }
    }
    else {
      if (secondNumberEl) { 
        await new Promise(r => setTimeout(r, 200)); 
        showElement(secondNumberEl); 
      }
      if (equalElement) { 
        await new Promise(r => setTimeout(r, 300)); 
        showElement(equalElement); 
      }
      if (optionRow) { 
        await new Promise(r => setTimeout(r, 300)); 
        showElement(optionRow);
      }
      if (answerElement) { 
        await new Promise(r => setTimeout(r, 200)); 
        showElement(answerElement); 
      }
    }
  }


  const number1 = readNumber(firstNumberEl);
  const number2 = readNumber(secondNumberEl);
  const sign = ((signElement && ((signElement.getAttribute('string') || signElement.textContent) || '')).toString().trim() === '+') ? '+' : '-';


  if (sign === '-') {
    // '-' flow: reveal one by one then change bgColor of last B to red
    for (let i = 0; i < Math.min(number1, topRowChildren.length); i++) {
      await new Promise(resolve => setTimeout(resolve, 75));
      showElement(topRowChildren[i]);
    }

    elementAppearance(true);

    await new Promise(r => setTimeout(r, 500));
    for (let k = 0; k < Math.min(number2, topRowChildren.length); k++) {
      const idx = Math.min(number1, topRowChildren.length) - 1 - k;
      setImageBackground(topRowChildren[idx], 'red');
      await new Promise(r => setTimeout(r, 200));
    }

    elementAppearance(false);
  } 
  else {
    // '+' flow: hide all, then showElement first A, then showElement next B in green
    
    for (let i = 0; i < Math.min(number1, topRowChildren.length); i++) {
      await new Promise(resolve => setTimeout(resolve, 120));
      showElement(topRowChildren[i]);
    }

    elementAppearance(true);

    await new Promise(r => setTimeout(r, 500));
    for (let j = 0; j < Math.min(number2, Math.max(0, topRowChildren.length - number1)); j++) {
      const idx = number1 + j;
      if (topRowChildren[idx]) {
        showElement(topRowChildren[idx]);
        setImageBackground(topRowChildren[idx], 'green');
      }
      await new Promise(r => setTimeout(r, 80));
    }
    
    elementAppearance(false);
  }
}
  function placeElementInDropZone(dropElement, dragElement, orientation, dropAttr) {
  const dropRect = dropElement.getBoundingClientRect();
  const dragRect = dragElement.getBoundingClientRect();

  const scale = typeof calculateScale === "function" ? calculateScale() : 1;

  if (!dropElement.dataset.dropCount) dropElement.dataset.dropCount = "0";
  let dropCount = parseInt(dropElement.dataset.dropCount, 10);

  // === READ DROP ZONE SIZE ===
  const dropWidth = dropRect.width;
  const dropHeight = dropRect.height;

  let targetX, targetY;

  // ---------------- LANDSCAPE WATERFALL ----------------
  if (orientation === "landscape" && dropAttr.toLowerCase() === "stackcascade") {
    console.log("🌄 Landscape waterfall");

    const shiftX = dropWidth * 0.02;  // proportional (5% of width)
    const shiftY = dropHeight * 0.02; // proportional (5% of height)

    const startX = dropRect.left + dropWidth * 0.36;  // 10% inside
    const startY = dropRect.top + dropHeight * -0.09; // slightly above

    targetX = startX + (dropCount * shiftX);
    targetY = startY + (dropCount * shiftY);
  }

  // ---------------- PORTRAIT VERTICAL ----------------
  else {
    console.log("📱 Portrait vertical stack");
    let startX
    const stepY = dropHeight * 0.05; // 8% vertical step
    if (dropElement.id === "unitsDrop") {
        startX = dropRect.left + dropWidth * 0.4;   // special spacing
    } else if (dropElement.id === "tensDrop"){
      startX = dropRect.left + dropWidth * 0.25;
    }
    else {
        startX = dropRect.left + dropWidth * 0.16;   // normal spacing
    }
    const startY = dropRect.top - dropHeight * 0.25; // above start

    targetX = startX;
    targetY = startY + (dropCount * stepY);
  }

  // ------------ APPLY TRANSFORM SMOOTHLY --------------
  const dx = (targetX - dragRect.left) / scale;
  const dy = (targetY - dragRect.top) / scale;

  dragElement.style.transition = "transform .2s ease-out";
  dragElement.style.transform = `translate(${dx}px, ${dy}px)`;

  dropElement.dataset.dropCount = String(dropCount + 1);

  // reset size
  dragElement.style.width = "auto";
  dragElement.style.height = "auto";
}

export const updateCalculatorAnswer= (el:HTMLElement): void => {
   const container = document.getElementById(LidoContainer) as HTMLElement | null;
   if (!container) return;
   
  const calci=document.querySelector('#lidoCalculator') as HTMLElement;
  if(!calci) return;
   const value=calci.getAttribute('value');
  el.setAttribute('string', value);
}