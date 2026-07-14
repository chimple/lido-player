import { ActivityChangeKey, ActivityEndKey, ElementClickKey, ElementDropKey, GameCompletedKey, GameExitKey, LessonEndKey, MicroGameEndKey, MicroGameExitKey, MicroLessonEndKey, MicroProblemEndKey, NextContainerKey,PrevContainerKey } from './constants';
import { getLessonTrackingParams } from './utils';
import { logAnalyticsEvent } from './firebaseAnalytics';


function dispatchCustomEvent(eventName: string, detail: any) {

  const serializableDetail = toSerializableDetail(detail);

  logAnalyticsEvent(eventName, serializableDetail);

  const event = new CustomEvent(eventName, { detail });
  window.dispatchEvent(event);

  if (eventName === ActivityEndKey || eventName === LessonEndKey || eventName === GameCompletedKey || eventName === GameExitKey || eventName === MicroGameEndKey || eventName === MicroGameExitKey || eventName === MicroLessonEndKey || eventName === MicroProblemEndKey) {    
    window.parent?.postMessage(
      {
        eventName,
        detail: serializableDetail,
      },
      "*"
    );
  }
}

function toSerializableDetail(detail: any) {
  if (!detail || typeof detail !== 'object') return detail;

  return Object.fromEntries(
    Object.entries(detail).filter(([, value]) => {
      return (
        value === null ||
        ['string', 'number', 'boolean', 'undefined'].includes(typeof value) ||
        Array.isArray(value) ||
        (typeof value === 'object' && value.constructor === Object)
      );
    }),
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
  dispatchCustomEvent(MicroProblemEndKey, { currentIndex, totalIndex, score, rightMoves, wrongMoves, timeSpentForActivity, ...lessonTrackingParams, gameCompleted,});
  console.log(`[Activity End]Activity ${currentIndex + 1}/${totalIndex} - Time Spent: ${timeSpentForActivity}`)
}

export function dispatchLessonEndEvent(
  totalIndex: number,
  rightMoves: number,
  wrongMoves: number,
  finalScore: number,
  timeSpendForLesson: number,
  lessonTrackingParams?: LessonTrackingParams,
) {    
  dispatchCustomEvent(MicroLessonEndKey, { totalIndex, rightMoves, wrongMoves, finalScore, score:finalScore, timeSpendForLesson, ...lessonTrackingParams });
  if(getLessonTrackingParams().end === "blank" || getLessonTrackingParams().end === "complete" || getLessonTrackingParams().end === "completed"){
    return;
  }
  dispatchCustomEvent(LessonEndKey, { totalIndex, rightMoves, wrongMoves, finalScore, score:finalScore, timeSpendForLesson, ...lessonTrackingParams });
  console.log( `[Lesson End]  Lesson: ${lessonTrackingParams?.lessonName} (${lessonTrackingParams?.lessonId}) - Total Time Spent: ${timeSpendForLesson}`);
}

export function dispatchNextContainerEvent() {
  dispatchCustomEvent(NextContainerKey, {});
}

export function dispatchPrevContainerEvent(){
  dispatchCustomEvent(PrevContainerKey,{});
}

export function dispatchGameCompletedEvent() {
  dispatchCustomEvent(MicroGameEndKey, {});
  if(getLessonTrackingParams().end === "blank" || getLessonTrackingParams().end === "complete" || getLessonTrackingParams().end === "completed"){
    return;
  }
  dispatchCustomEvent(GameCompletedKey, {});
}

export function dispatchGameExitEvent() {
  dispatchCustomEvent(MicroGameExitKey, {});
  if(getLessonTrackingParams().end === "blank" || getLessonTrackingParams().end === "complete" || getLessonTrackingParams().end === "completed"){
    return;
  }
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

