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
export const DropLength = 'dropLength';
export const DropHasDrag = 'dropHasDrag';

export enum TraceMode {
  NoFlow = 'noFlow',
  ShowFlow = 'showFlow',
  FreeTrace = 'freeTrace',
  BlindTracing = 'blindTracing',
  BlindFreeTrace = 'blindFreeTrace',
}

export default class GameScore {
  rightMoves: number = 0;
  wrongMoves: number = 0;
  finalScore: number = 0;
}

export enum DropMode {
  Diagonal = 'diagonal',
  Stretch = 'stretch',
  Puzzle = 'puzzle',
  InfiniteDrop = 'infinite-drop'
}
