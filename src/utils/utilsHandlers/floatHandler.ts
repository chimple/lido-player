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
      if(!container.getAttribute('game-completed') || container.getAttribute('game-completed') === 'false' || container.getAttribute('game-completed') === null || container.getAttribute('game-completed') === undefined || container.getAttribute('game-completed') === '') {
        container.setAttribute('game-completed', 'true');
        triggerNextContainer();
        calculateScore();
      }

    } else {
      fillCompleted = false;
    }
  } else {
    const onInCorrect = container['onInCorrect'];
    await executeActions(onInCorrect, container);
  }
}

let floatDelay: number = 0
const laneNextStartAtMs: number[] = [];
const BUBBLE_VERTICAL_GAP = 12;
const BUBBLE_TIME_GAP_SECONDS = 0.5;

function getEarliestLaneIndex(laneCount: number): number {
  let laneIndex = 0;
  let earliestTime = Number.POSITIVE_INFINITY;

  // Find the lane that becomes available the earliest.
  for (let i = 0; i < laneCount; i++) {
    const laneTime = laneNextStartAtMs[i] || 0;
    if (laneTime < earliestTime) {
      earliestTime = laneTime;
      laneIndex = i;
    }
  }

  return laneIndex;
}

export function resetFloatState() {
  // Reset all module-level float state so a fresh screen starts from initial behavior.
  fillCompleted = false;
  floatDelay = 0;
  laneNextStartAtMs.length = 0;
}
export function handleFloatElementPosition(element: HTMLElement) {
  // Step 1: Resolve the main game container.
  const container = document.getElementById(LidoContainer) as HTMLElement;
  if (!container) {
    console.error(`No container found with id: lido-container`);
    return;
  }
  // Step 2: Stop speaking highlight before repositioning.
  stopHighlightForSpeakingElement(element);

  // Step 3: Resolve the float area that owns moving elements.
  const floatContainer = container.querySelector('.lido-float') as HTMLElement;
  if (!floatContainer) return;

  // Step 4: Read movement direction from the container.
  const direction = floatContainer.getAttribute('float-direction') || 'bottomToTop';

  // Step 5: Generate a random delay used by the vertical float mode.
  const delay = Math.random() * 5;

  // const isFirstEntry = element.getAttribute('data-entry') !== 'true';
  // if (isFirstEntry) {
  //   element.setAttribute('data-entry', 'true');
  //   entryValue += 10;
  // }

  // Step 6: Ensure element is absolutely positioned for animation.
  element.style.position = 'absolute';

  if (direction === 'leftToRight') {
    // Step 7: Prepare horizontal floating setup.
    const containerHeight = floatContainer.offsetHeight;
    // Add class for bubble elements to identify them later for input matching and scoring
    element.classList.add("bubble-element")
    element.style.left = `unset`;
    element.style.right = `${(1600 - window.innerWidth) + window.innerWidth + element.offsetWidth}px`;    

    // Step 8: Split available height into lanes with a vertical gap.
    const laneHeight = Math.max(1, element.clientHeight + BUBBLE_VERTICAL_GAP);
    const laneCount = Math.max(1, Math.floor(containerHeight / laneHeight));
    // Keep lane timer array length in sync with current lane count.
    if (laneNextStartAtMs.length > laneCount) {
      laneNextStartAtMs.length = laneCount;
    }

    // Step 9: Find all lanes that are currently free.
    const now = performance.now();
    const availableLaneIndexes: number[] = [];
    for (let i = 0; i < laneCount; i++) {
      const laneReadyAt = laneNextStartAtMs[i] || 0;
      if (laneReadyAt <= now) {
        availableLaneIndexes.push(i);
      }
    }

    // Step 10: Choose a random free lane, else fallback to earliest available lane.
    let laneIndex = 0;
    if (availableLaneIndexes.length > 0) {
      const randomAvailableIndex = Math.floor(Math.random() * availableLaneIndexes.length);
      laneIndex = availableLaneIndexes[randomAvailableIndex];
    } else {
      laneIndex = getEarliestLaneIndex(laneCount);
    }

    // Step 11: Convert lane index to top position.
    const resolvedLaneIndex = laneIndex ?? 0;
    const maxTop = Math.max(0, containerHeight - element.clientHeight);
    const laneStep = laneCount > 1 ? maxTop / (laneCount - 1) : 0;
    element.style.top = `${Math.round(resolvedLaneIndex * laneStep)}px`;

    // Step 12: Set animation start position and compute spacing delay.
    element.style.setProperty('--el-left', element.style.right);
    const timePerElement =  element.offsetWidth / (container.offsetWidth / 60);
    const laneReadyAt = laneNextStartAtMs[resolvedLaneIndex] || 0;
    const laneDelaySeconds = Math.max(0, (laneReadyAt - now) / 1000);
    const appliedDelay = Math.max(floatDelay, laneDelaySeconds);

    // Step 13: Start horizontal animation and reserve lane time to avoid overlap.
    element.style.animation = `float-lr 40s linear ${appliedDelay}s`;
    laneNextStartAtMs[resolvedLaneIndex] = now + (appliedDelay + timePerElement + BUBBLE_TIME_GAP_SECONDS) * 1000;
    // Step 14: Reset legacy delay after applying once.
    floatDelay = 0;
  } else {
    // Step 7 (vertical mode): pick a random x-position in container.
    const containerWidth = floatContainer.offsetWidth; 

    element.style.left = `${Math.floor(Math.random() * (containerWidth - element.clientWidth))}px`;

    // Step 8 (vertical mode): place below viewport and animate upward.
    const startTop = document.body.offsetHeight + element.offsetHeight * (1/calculateScale());
    element.style.top = `${startTop}px`;
    const duration = 5 + Math.random() * 5;
    element.style.setProperty('--el-top', `${startTop}px`);
    element.style.animation = `float-up ${duration}s linear ${delay}s`;
    element.id = 'removeShadow';
  }

  // Step 15: Requeue the same element once current animation finishes.
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
