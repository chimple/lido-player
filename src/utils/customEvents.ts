import { ActivityChangeKey, ActivityEndKey, ElementClickKey, ElementDropKey, GameCompletedKey, GameExitKey, LessonEndKey, NextContainerKey,PrevContainerKey } from './constants';

function dispatchCustomEvent(eventName: string, detail: any) {
  const event = new CustomEvent(eventName, { detail });
  window.dispatchEvent(event);
}

export function dispatchActivityEndEvent(index: number, totalIndex: number, score: number) {
  dispatchCustomEvent(ActivityEndKey, { index, totalIndex, score });
}

export function dispatchLessonEndEvent(score: number) {
  dispatchCustomEvent(LessonEndKey, { score });
}

export function dispatchNextContainerEvent() {
  dispatchCustomEvent(NextContainerKey, {});
}

//below I added
export function dispatchPrevContainerEvent(){
  dispatchCustomEvent(PrevContainerKey,{});
}

export function dispatchGameCompletedEvent() {
  dispatchCustomEvent(GameCompletedKey, {});
}

export function dispatchGameExitEvent() {
  dispatchCustomEvent(GameExitKey, {});
}

export function dispatchActivityChangeEvent(index: number) {
  dispatchCustomEvent(ActivityChangeKey, { index });
}

export function dispatchElementDropEvent(dragElement: HTMLElement, dropElement: HTMLElement, isCorrect: boolean) {
  dispatchCustomEvent(ElementDropKey, { dragElement, dropElement, isCorrect: isCorrect, createdAt: new Date().toISOString() });
}

export function dispatchClickEvent(element: HTMLElement, isCorrect: boolean) {
  dispatchCustomEvent(ElementClickKey, { element, isCorrect: isCorrect, createdAt: new Date().toISOString() });
}
