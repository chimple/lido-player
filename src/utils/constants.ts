export const DragSelectedMapKey = 'lidoDragSelectedMap';
export const SelectedValuesKey = 'lidoSelectedValues';
export const ActivityScoreKey = 'lidoActivityScore';
export const ActivityEndKey = 'lidoActivityEnd';
export const LessonEndKey = 'lidoLessonEnd';
export const NextContainerKey = 'lidoNextContainer';
export const ActivityChangeKey = 'lidoActivityChange';
export const GameCompletedKey = 'lidoGameCompleted';
export const GameExitKey = 'lidoGameExit';
export const ElementDropKey = 'lidoElementDrop';
export const ElementClickKey = 'lidoElementClick';

export enum TraceMode {
  NoFlow = 'lido-noFlow',
  ShowFlow = 'lido-showFlow',
  FreeTrace = 'lido-freeTrace',
  BlindTracing = 'lido-blindTracing',
  BlindFreeTrace = 'lido-blindFreeTrace',
}

export default class GameScore{
  rightMoves: number = 0;
  wrongMoves: number = 0;
  finalScore: number = 0;
}
