import { ActivityChangeKey, ActivityEndKey, ElementClickKey, ElementDropKey, GameCompletedKey, GameExitKey, LessonEndKey, NextContainerKey,PrevContainerKey } from './constants';
import { Timer } from './utilsHandlers/timer';

function dispatchCustomEvent(eventName: string, detail: any) {
  console.log("👍Event Name : " ,eventName, "Detail : ", detail.toString());
  const event = new CustomEvent(eventName, { detail });
  window.dispatchEvent(event);
}

export function dispatchActivityEndEvent(totalIndex: number, currentIndex: number, score: number, rightMoves?: number, wrongMoves?: number) {
  dispatchCustomEvent(ActivityEndKey, { currentIndex, totalIndex, score, rightMoves, wrongMoves });
}

export function dispatchLessonEndEvent(totalIndex: number, rightMoves: number, wrongMoves: number, finalScore: number) {
  dispatchCustomEvent(LessonEndKey, { totalIndex, rightMoves, wrongMoves, finalScore, timeSpent: Math.floor(Timer.getI().getElapsed() / 1000) });
}

export function dispatchNextContainerEvent() {
  dispatchCustomEvent(NextContainerKey, {});
}

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
