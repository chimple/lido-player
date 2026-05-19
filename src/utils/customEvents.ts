import { ActivityChangeKey, ActivityEndKey, ElementClickKey, ElementDropKey, GameCompletedKey, GameExitKey, LessonEndKey, NextContainerKey,PrevContainerKey } from './constants';
import { getLessonTrackingParams } from './utils';
import { Timer } from './utilsHandlers/timer';

function dispatchCustomEvent(eventName: string, detail: any) {
  console.log("👍Event Name : " ,eventName, "Detail : ", detail.toString());
  const event = new CustomEvent(eventName, { detail });
  window.dispatchEvent(event);
  window.parent?.postMessage(
    {
      eventName,
      detail,
      ...detail,
    },
    "*"
  );
}

export interface LessonTrackingParams {
  studentId: string;
  studentName: string;
  classId: string;
  schoolId: string;
  courseId: string;
  courseName: string;
  chapterId: string;
  chapterName: string;
  lessonId: string;
  lessonName: string;
  lang: string;
  end: string;
}

export function dispatchActivityEndEvent(
  totalIndex: number,
  currentIndex: number,
  score: number,
  rightMoves?: number,
  wrongMoves?: number,
  timeSpentForActivity?: number,
  lessonTrackingParams?: LessonTrackingParams,
  gameCompleted?: boolean,
) {   
  dispatchCustomEvent(ActivityEndKey, { currentIndex, totalIndex, score, rightMoves, wrongMoves, timeSpentForActivity, ...lessonTrackingParams, gameCompleted,});
}

export function dispatchLessonEndEvent(
  totalIndex: number,
  rightMoves: number,
  wrongMoves: number,
  finalScore: number,
  timeSpendForLesson: number,
  lessonTrackingParams?: LessonTrackingParams,
) {  
  if(getLessonTrackingParams().end === "blank" || getLessonTrackingParams().end === "complete" || getLessonTrackingParams().end === "completed"){
    console.log("Lesson end event skipped. Reason: Lesson end type is set to 'blank' in lesson tracking parameters.");
    return;
  }
  dispatchCustomEvent(LessonEndKey, { totalIndex, rightMoves, wrongMoves, finalScore, score:finalScore, timeSpendForLesson, ...lessonTrackingParams });
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


// for nipun - to dispatch custom event


