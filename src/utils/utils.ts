import { ActivityScoreKey, DragSelectedMapKey, LessonEndKey, SelectedValuesKey } from './constants';
import { dispatchActivityEndEvent, dispatchClickEvent, dispatchElementDropEvent, dispatchLessonEndEvent, dispatchNextContainerEvent } from './customEvents';
import GameScore from './constants';
const gameScore = new GameScore();

export function format(first?: string, middle?: string, last?: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

// Function to get the scale of an element
const getElementScale = (el: HTMLElement): number => {
  const transform = window.getComputedStyle(el).transform;
  if (transform === 'none') {
    return 1; // No scaling
  } else {
    const matrix = transform.match(/matrix\(([^)]+)\)/);
    if (matrix) {
      const matrixValues = matrix[1].split(', ');
      const scaleX = parseFloat(matrixValues[0]);
      return scaleX; // Assuming uniform scaling (same scale in X and Y)
    }
  }
  return 1; // Fallback to no scaling
};

function slidingWithScaling(element: HTMLElement): void {
  let overlapElement = false;
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let initialX = 0;
  let initialY = 0;

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
    const allElements = document.querySelectorAll<HTMLElement>("[type='slide']");
    let mostOverlappedElement: HTMLElement | null = null;
    let maxOverlapArea = 0;

    allElements.forEach(otherElement => {
      if (otherElement === element) return;

      const otherRect = otherElement.getBoundingClientRect();
      const elementArea = elementRect.width * elementRect.height; // Area of the dragged element
      const otherArea = otherRect.width * otherRect.height; // Area of the other element

      const overlapWidth = Math.max(0, Math.min(elementRect.right, otherRect.right) - Math.max(elementRect.left, otherRect.left));
      const overlapHeight = Math.max(0, Math.min(elementRect.bottom, otherRect.bottom) - Math.max(elementRect.top, otherRect.top));
      const overlapArea = overlapWidth * overlapHeight;

      // Determine the threshold for overlap (at least 80% of the smaller element's area)
      const overlapThreshold = Math.min(elementArea, otherArea) * 0.8;

      // Check if the overlap area exceeds the threshold
      if (overlapArea >= overlapThreshold && overlapArea > maxOverlapArea) {
        maxOverlapArea = overlapArea;
        mostOverlappedElement = otherElement;
      }
    });

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

  const objectiveString = document.getElementById('lido-container')['objective'];
  const objectiveArray = objectiveString.split(',');
  const elementIndex = slideArr.indexOf(slideElement['value']);
  const isCorrect = matchStringPattern(slideElement['value'], [objectiveArray[elementIndex].trim()]);
  storingEachActivityScore(isCorrect);
  handleShowCheck();
};

function enableDraggingWithScaling(element: HTMLElement): void {
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let initialX = 0;
  let initialY = 0;

  // Fetch the container element
  const container = document.getElementById('lido-container');
  if (!container) {
    console.error(`Container with ID "container" not found.`);
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

    const rect1 = container.getBoundingClientRect();
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
        const rect1 = container.getBoundingClientRect();
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
  observer.observe(container, observerConfig);

  const onMove = (event: MouseEvent | TouchEvent): void => {
    if (!isDragging) return;

    const containerScale = getElementScale(container);

    let dx = 0;
    let dy = 0;

    if (event instanceof MouseEvent) {
      dx = (event.clientX - startX) / containerScale;
      dy = (event.clientY - startY) / containerScale;
    } else {
      dx = (event.touches[0].clientX - startX) / containerScale;
      dy = (event.touches[0].clientY - startY) / containerScale;
    }

    // Calculate the new position considering scaling
    const newLeft = initialX + dx;
    const newTop = initialY + dy;

    // Get the dimensions and scale-corrected position of the container and element
    const containerRect = container.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();

    const numbers = element.style.transform.match(/-?\d+(\.\d+)?/g);
    const result = numbers.map(Number);
    const initialElementLeftPx = elementRect.left / containerScale - result[0];
    const initialElementTopPx = elementRect.top - result[1];

    const maxRight = containerRect.width / containerScale - Math.abs(horizontalDistance / containerScale) - elementRect.width / containerScale;
    const maxLeft = containerRect.left - initialElementLeftPx;
    const maxTop = containerRect.top - initialElementTopPx;
    const maxBottom = containerRect.height / containerScale - Math.abs(verticalDistance / containerScale) - elementRect.height / containerScale;

    const newLeftClamp = newLeft + initialElementLeftPx <= containerRect.left ? maxLeft : Math.min(newLeft, maxRight);
    const newTopClamp = newTop + initialElementTopPx <= containerRect.top ? maxTop : Math.min(newTop, maxBottom);

    // Apply transform with translation within boundaries
    element.style.transform = `translate(${newLeftClamp}px, ${newTopClamp}px)`;

    // Check for overlaps and highlight only the most overlapping element
    const allElements = document.querySelectorAll<HTMLElement>("[type='drop']");
    let mostOverlappedElement: HTMLElement | null = null;
    let maxOverlapArea = 0;

    allElements.forEach(otherElement => {
      const otherRect = otherElement.getBoundingClientRect();

      // Check if there is overlap
      const overlapWidth = Math.max(0, Math.min(elementRect.right, otherRect.right) - Math.max(elementRect.left, otherRect.left));
      const overlapHeight = Math.max(0, Math.min(elementRect.bottom, otherRect.bottom) - Math.max(elementRect.top, otherRect.top));
      const overlapArea = overlapWidth * overlapHeight;

      // Update the most overlapped element if this one has a larger overlap area
      if (overlapArea > maxOverlapArea) {
        maxOverlapArea = overlapArea;
        mostOverlappedElement = otherElement;
      }
    });

    // Reset styles for all elements
    allElements.forEach(otherElement => {
      otherElement.style.border = ''; // Reset border
      otherElement.style.backgroundColor = ''; // Reset background color
    });

    // Apply styles only to the most overlapped element
    if (mostOverlappedElement) {
      mostOverlappedElement.style.border = '2px dashed #ff0000'; // Red dashed border
      mostOverlappedElement.style.backgroundColor = 'rgba(255, 0, 0, 0.1)'; // Light red background
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

    // Reset overlapping styles from all elements
    const allElements = document.querySelectorAll<HTMLElement>("[type='drop']");
    allElements.forEach(otherElement => {
      otherElement.style.border = ''; // Reset border
      otherElement.style.backgroundColor = ''; // Reset background color
    });

    // Check for overlaps and log the most overlapping element
    const elementRect = element.getBoundingClientRect();
    let mostOverlappedElement: HTMLElement | null = null;
    let maxOverlapArea = 0;

    allElements.forEach(otherElement => {
      const otherRect = otherElement.getBoundingClientRect();

      // Calculate overlap
      const overlapWidth = Math.max(0, Math.min(elementRect.right, otherRect.right) - Math.max(elementRect.left, otherRect.left));
      const overlapHeight = Math.max(0, Math.min(elementRect.bottom, otherRect.bottom) - Math.max(elementRect.top, otherRect.top));
      const overlapArea = overlapWidth * overlapHeight;

      // Update the most overlapped element if this one has a larger overlap area
      if (overlapArea > maxOverlapArea) {
        maxOverlapArea = overlapArea;
        mostOverlappedElement = otherElement;
      }
    });

    onElementDropComplete(element, mostOverlappedElement);
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

async function onElementDropComplete(dragElement: HTMLElement, dropElement: HTMLElement): Promise<void> {
  if (!dropElement) {
    const selectedValueData = localStorage.getItem(SelectedValuesKey);
    const dragSelectedData = localStorage.getItem(DragSelectedMapKey);
    if (selectedValueData) {
      let selectedValue = JSON.parse(selectedValueData);
      selectedValue = selectedValue.filter(value => value != dragElement['value']);
      localStorage.setItem(SelectedValuesKey, JSON.stringify(selectedValue));
    }
    if (dragSelectedData) {
      let dragSelected = JSON.parse(dragSelectedData);
      const dropIndex = dragElement.parentElement.getAttribute('tabIndex');
      if (dropIndex && dragSelected.hasOwnProperty(dropIndex)) {
        delete dragSelected[dropIndex];
      }
      localStorage.setItem(DragSelectedMapKey, JSON.stringify(dragSelected));
    }
    handleShowCheck();
    return;
  }

  // Add pulse and highlight effect for a successful match
  const isCorrect = matchStringPattern(dropElement['value'], [dragElement['value']]);
  dispatchElementDropEvent(dragElement, dropElement, isCorrect);
  if (isCorrect) {
    // Perform actions if onMatch is defined
    const onCorrect = dropElement.getAttribute('onCorrect');
    if (onCorrect) {
      await executeActions(onCorrect, dropElement, dragElement);
    }
  } else {
    const onInCorrect = dropElement.getAttribute('onInCorrect');

    await executeActions(onInCorrect, dropElement, dragElement);

    // showWrongAnswerAnimation([dropElement, dragElement]);
  }
  storingEachActivityScore(isCorrect);
  await onActivityComplete(dragElement, dropElement);
}

// Function to execute actions parsed from the onMatch string
const executeActions = async (actionsString: string, thisElement: HTMLElement, element?: HTMLElement): Promise<void> => {
  const actions = parseActions(actionsString);

  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];
    const targetElement = action.actor === 'this' ? thisElement : action.actor === 'element' ? element : document.getElementById(action.actor);

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

          const container = document.getElementById('lido-container');
          const containerScale = getElementScale(container);
          const containerRect = container.getBoundingClientRect();
          const dropRect = dropElement.getBoundingClientRect();

          const scaledLeft = (dropRect.left - containerRect.left) / containerScale;
          const scaledTop = (dropRect.top - containerRect.top) / containerScale;

          dragElement.style.position = 'fixed';
          dragElement.style.left = `${scaledLeft}px`;
          dragElement.style.top = `${scaledTop}px`;
          dragElement.style.transform = `translate(0px, 0px)`;
          break;
        }
        case 'addClass': {
          targetElement.classList.add(action.value);
          break;
        }
        case 'speak': {
          {
            let audioUrl = targetElement.getAttribute('audio');
            if (audioUrl) {
              audioUrl = convertUrlToRelative(audioUrl);
              let audioElement = document.getElementById('audio') as HTMLAudioElement;
              if (!audioElement) {
                const newAudio = document.createElement('audio');
                newAudio.id = 'audio';
                document.body.appendChild(newAudio);
                audioElement = newAudio;
              }

              audioElement.pause();
              audioElement.currentTime = 0;
              audioElement.src = audioUrl;
              console.log('🚀 ~ executeActions ~ audioElement.src:', audioElement.src);

              try {
                await audioElement.play();
                highlightSpeakingElement(targetElement);
                while (!audioElement.ended || audioElement.error) {
                  await new Promise(resolve => setTimeout(resolve, 100));
                }
                stopHighlightForSpeakingElement(targetElement);
              } catch (error) {
                console.log('🚀 ~ executeActions ~ audioElement.src: error', error);
              }
            }
            break;
          }
        }

        case 'sleep': {
          const isNumber = !isNaN(Number(action.value));
          if (isNumber) {
            await new Promise(resolve => setTimeout(resolve, Number(action.value)));
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

const matchStringPattern = (pattern: string, arr: string[]): boolean => {
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

      if (arrIndex >= arr.length) return false;

      if (!choices.includes(arr[arrIndex])) return false;

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

const countPatternWords = (pattern: string): number => {
  const patternGroups = pattern.split(',').map(group => group.trim());

  let wordCount = 0;

  for (const group of patternGroups) {
    if (group.startsWith('(') && group.endsWith(')')) {
      wordCount += 1;
    } else {
      wordCount += group.split('|').length;
    }
  }

  return wordCount;
};

async function onActivityComplete(dragElement?: HTMLElement, dropElement?: HTMLElement) {
  const container = document.getElementById('lido-container');
  if (!container) return;

  const isAllowOnlyCorrect = container.getAttribute('isAllowOnlyCorrect') === 'true';
  if (isAllowOnlyCorrect) {
    const isCorrect = matchStringPattern(dropElement['value'], [dragElement['value']]);
    if (!isCorrect) {
      dragElement.style.transform = 'translate(0,0)';
      return;
    }
  }

  await executeActions("this.alignMatch='true'", dropElement, dragElement);

  let dragScore = JSON.parse(localStorage.getItem(DragSelectedMapKey) ?? '{}');
  if (!dragScore[dropElement.getAttribute('tabindex')]) {
    dragScore[dropElement.getAttribute('tabindex')] = [];
  }

  // dragScore[mostOverlappedElement.getAttribute('tabindex')].push(element['value']);
  dragScore[dropElement.getAttribute('tabindex')] = [dragElement['value']];

  localStorage.setItem(DragSelectedMapKey, JSON.stringify(dragScore));
  const sortedKeys = Object.keys(dragScore).sort((a, b) => parseInt(a) - parseInt(b));
  const sortedValues = sortedKeys.reduce((acc, key) => acc.concat(dragScore[key]), []);
  localStorage.setItem(SelectedValuesKey, JSON.stringify(sortedValues));

  handleShowCheck();
}

const storingEachActivityScore = (flag: boolean) => {
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

const handleShowCheck = () => {
  const container = document.getElementById('lido-container');
  const objectiveString = container['objective'];
  const selectValues = JSON.parse(localStorage.getItem(SelectedValuesKey) ?? '[]');

  const checkButton = document.getElementById('lido-checkButton');

  if (!selectValues || selectValues.length !== countPatternWords(objectiveString)) {
    executeActions("this.addClass='disable-check-button'", checkButton);
    return;
  }

  const showCheck = container.getAttribute('showCheck') == 'true';

  if (showCheck) {
    checkButton.classList.remove('lido-disable-check-button');
  } else {
    validateObjectiveStatus();
  }
};

const validateObjectiveStatus = async () => {
  const container = document.getElementById('lido-container');
  if (!container) return;
  const objectiveString = container['objective'];
  const objectiveArray = JSON.parse(localStorage.getItem(SelectedValuesKey) ?? '[]');
  const res = matchStringPattern(objectiveString, objectiveArray);

  if (res) {
    appendingDragElementsInDrop();
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

const appendingDragElementsInDrop = () => {
  const dragItems = document.querySelectorAll("[type='drag']");
  const dropItems = document.querySelectorAll("[type='drop']");
  if (!dragItems || !dropItems) return;
  dropItems.forEach(drop => {
    dragItems.forEach(dragElement => {
      const drag = dragElement as HTMLElement;
      if (drag['value'] === drop['value']) {
        drag.style.position = 'unset';
        drop.appendChild(drag);
      }
    });
  });
};

export const triggerNextContainer = () => {
  // const event = new CustomEvent('nextContainer');
  console.log('🚀 ~ triggerNextContainer ~ event:', event);
  // window.dispatchEvent(event);
  dispatchNextContainerEvent();
};

export const initEventsForElement = async (element: HTMLElement, type: string) => {
  const container = document.getElementById('lido-container');
  if (!container) return;
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
    default:
      break;
  }
  const onEntry = element.getAttribute('onEntry');
  await executeActions(onEntry, element);

  onTouchListenerForOnTouch(element);
};

function onTouchListenerForOnTouch(element: HTMLElement) {
  if (!element) return;
  const onTouch = element.getAttribute('onTouch');
  if (!onTouch) return;
  element.onclick = async () => {
    console.log('🚀 ~ element.onclick= ~ onTouch:', onTouch);
    if (!onTouch) return;
    await executeActions(onTouch, element);
  };
}

function addClickListenerForClickType(element: HTMLElement): void {
  element.style.cursor = 'pointer';
  if (!element) {
    console.error('No element provided.');
    return;
  }

  const onClick = async () => {
    const container = document.getElementById('lido-container');
    if (element.getAttribute('id') == 'lido-checkButton') {
      validateObjectiveStatus();
      return;
    }

    localStorage.setItem(SelectedValuesKey, JSON.stringify([element['value']]));
    element.style.border = '2px solid yellow';
    element.style.boxShadow = '0px 0px 10px rgba(255, 255, 0, 0.7)';

    element.style.transition = 'transform 0.2s ease, border 0.5s ease';
    element.style.transform = 'scale(1.1)';

    element.style.transform = 'scale(1)';
    element.style.border = '';
    element.style.boxShadow = '';

    const objective = container['objective'];

    const isCorrect = matchStringPattern(objective, [element['value']]);
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
    handleShowCheck();
  };
  element.addEventListener('click', onClick);
}

export function showWrongAnswerAnimation(elements: HTMLElement[]): void {
  const styleId = 'wrong-answer-animation-style';

  executeActions("tryAgain.speak='true'", document.getElementById('tryAgain'));

  // Check if the style is already added, if not, add it
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.innerHTML = `
          @keyframes enhanced-shake {
              0% { left: 0; }
              10% { left: -8px; }
              20% { left: 8px; }
              30% { left: -8px; }
              40% { left: 8px; }
              50% { left: -6px; }
              60% { left: 6px; }
              70% { left: -4px; }
              80% { left: 4px; }
              90% { left: -2px; }
              100% { left: 0; }
          }

          
          .wrong-answer {
              position: relative; /* Enable relative positioning to move the element */
              animation: enhanced-shake 0.6s cubic-bezier(0.36, 0.07, 0.19, 0.97);
              background-color: #ffdddd; /* Flash red background to indicate wrong answer */
              box-shadow: 0 0 10px rgba(255, 0, 0, 0.5); /* Subtle red shadow */

              border: 4px solid red;
          }

          
      `;

    document.head.appendChild(style);
  }

  elements.forEach(element => {
    // Add the class to trigger the animation
    element.classList.add('wrong-answer');

    // Remove the class after the animation ends to reset the element
    element.addEventListener(
      'animationend',
      () => {
        element.classList.remove('wrong-answer');
      },
      { once: true },
    );
  });
}

function handleDropElement(element: HTMLElement): void {
  element.onclick = () => {
    onClickDropOrDragElement(element, 'drop');
  };
}

async function onClickDropOrDragElement(element: HTMLElement, type: 'drop' | 'drag'): Promise<void> {
  // Remove the highlight class from elements matching the selector
  const highlightedElements = document.querySelectorAll(`[type='${type}']`);

  highlightedElements.forEach(el => {
    removeHighlight(el as HTMLElement);
  });

  // Dynamically create the highlight class if it doesn't exist
  if (!document.getElementById('dynamic-highlight-style')) {
    const style = document.createElement('style');
    style.id = 'dynamic-highlight-style';
    style.innerHTML = `
      .highlight {
        border: 4px solid #e74c3c; /* Thicker red border for more visibility */
        border-radius: 12px; /* Larger rounded corners */
        background-color: rgba(231, 76, 60, 0.3); /* Stronger, more noticeable background */
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2), 0 12px 40px rgba(0, 0, 0, 0.2); /* Stronger shadow */
        outline: 4px solid rgba(231, 76, 60, 0.6); /* Glow effect */
      }
    `;

    document.head.appendChild(style);
  }

  element?.classList.add('highlight');
  element.ariaPressed = 'true';

  const selectedDropElement: HTMLElement = type === 'drop' ? element : document.querySelector("[type='drop'].highlight");
  const selectedDragElement: HTMLElement = type === 'drag' ? element : document.querySelector("[type='drag'].highlight");

  if (selectedDropElement && selectedDragElement) {
    // Add a transition for a smooth, slower movement
    (selectedDragElement as HTMLElement).style.transition = 'transform 0.5s ease'; // 0.5s for a slower move

    // Reset the transform of the drag element before calculating the new position
    (selectedDragElement as HTMLElement).style.transform = '';
    const container = document.getElementById('lido-container');

    const containerScale = getElementScale(container);
    console.log('🚀 ~ onClickDropOrDragElement ~ containerScale:', containerScale);

    // Get the positions of the drop and drag elements
    const dropRect = selectedDropElement.getBoundingClientRect();
    const dragRect = selectedDragElement.getBoundingClientRect();

    // Calculate the difference in positions
    const translateX = (dropRect.left - dragRect.left) / containerScale;
    const translateY = (dropRect.top - dragRect.top) / containerScale;

    // Move the drag element to the drop position
    selectedDragElement.style.transform = `translate(${translateX}px, ${translateY}px)`;

    // Remove highlights after moving the element
    const allElements = document.querySelectorAll(`*`);
    allElements.forEach(el => {
      removeHighlight(el as HTMLElement);
    });

    await new Promise(resolve => setTimeout(resolve, 500));
    await onElementDropComplete(selectedDragElement, selectedDropElement);
    await new Promise(resolve => setTimeout(resolve, 500));
    selectedDragElement.style.transform = 'translate(0px, 0px)';
  }
}

function removeHighlight(element: HTMLElement): void {
  element.classList.remove('highlight');
  element.ariaPressed = 'false';
}

// Function to highlight the speaking element
function highlightSpeakingElement(element: HTMLElement): void {
  if (!element) return;

  // Add a custom class for highlighting
  element.classList.add('speaking-highlight');

  // Inject keyframe animation and class styles into the document's head if it doesn't already exist
  const styleId = 'speaking-highlight-style';
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.innerHTML = `
      .speaking-highlight {
        box-shadow: 0 0 20px 10px rgba(255, 165, 0, 0.9); /* Stronger orange glow effect */
        border: 3px solid orange;
        transition: box-shadow 0.5s ease-in-out, transform 0.5s ease-in-out;
        transform: scale(1.05); /* Subtle scale effect to pop the element */
        animation: pulseEffect 1.5s infinite; /* Pulsing animation */
      }

      @keyframes pulseEffect {
        0% {
          box-shadow: 0 0 20px 10px rgba(255, 165, 0, 0.9);
          transform: scale(1.05);
        }
        50% {
          box-shadow: 0 0 30px 15px rgba(255, 165, 0, 1);
          transform: scale(1.1);
        }
        100% {
          box-shadow: 0 0 20px 10px rgba(255, 165, 0, 0.9);
          transform: scale(1.05);
        }
      }
    `;
    document.head.appendChild(style);
  }
}

// Function to stop highlighting
function stopHighlightForSpeakingElement(element: HTMLElement): void {
  if (!element) return;

  // Remove the custom class for highlighting
  element.classList.remove('speaking-highlight');

  // Remove inline styles
  element.style.boxShadow = '';
  element.style.border = '';
}

export function convertUrlToRelative(url: string): string {
  //check if url is web
  if (url.startsWith('http')) {
    return url;
  }
  const container = document.getElementById('lido-container');
  if (!container) return url;
  const baseUrl = container.getAttribute('baseUrl');
  if (!baseUrl) return url;
  return baseUrl + url;
}
