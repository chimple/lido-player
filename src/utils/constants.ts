export const DragSelectedMapKey = 'lidoDragSelectedMap';
export const DragMapKey = 'lidoDragMap';
export const SelectedValuesKey = 'lidoSelectedValues';
export const ActivityScoreKey = 'lidoActivityScore';
export const ActivityEndKey = 'lidoActivityEnd';
export const LessonEndKey = 'lidoLessonEnd';
export const NextContainerKey = 'lidoNextContainer';
export const PrevContainerKey = 'lidoPrevContainer';
export const ActivityChangeKey = 'lidoActivityChange';
export const GameCompletedKey = 'lidoGameCompleted';
export const GameExitKey = 'lidoGameExit';
export const ElementDropKey = 'lidoElementDrop';
export const ElementClickKey = 'lidoElementClick';
export const DropLength = 'dropLength';
export const DropHasDrag = 'dropHasDrag';
export const DropToAttr = 'drop-to';
export const DropTimeAttr = 'drop-time';
export const LidoContainer = 'lido-container';
export const LangChangeEvent = 'languageChanged';
export const LIDO_COMMON_AUDIO_PATH = '__LIDO_COMMON_AUDIO_PATH__';
export const LIDO_COMMON_AUDIO_READY_EVENT = 'lidoCommonAudioPathReady';
export const TemplateID = 'template-id';

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
  InfiniteDrop = 'infinite-drop',
  EnableAnimation = "enableanimation",
}

export enum DropAction {
  InfiniteDrop = 'infinite-drop',
  Move = 'move',
  Hide = 'hide',
}


export const exitUrl = 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Navbar-buttons/Close.png';
export const prevUrl = 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Navbar-buttons/Previous.png';
export const nextUrl = 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Navbar-buttons/Next.png';
export const speakUrl = 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Navbar-buttons/NavAudio.png';
export const fingerUrl = 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/Tracing-hand.png';


export const enum templateAudio {
 dragAndDrop = 'instruction.dragAndDrop',
  mcq = 'instruction.mcq',
  tracing = 'instruction.tracing',
  flashcards = 'instruction.flashcards',
  substractionWithImage = 'substractionWithImageAudio',
    substractionWithoutImage='substractionWithoutImageAudio',
    numberIdentificationWithImage= 'numberIdentificationWithImageAudio',
    numberIdentificationWithoutImage= 'numberIdentificationWithoutImageAudio',
    wordBuildingWithImage= 'wordBuildingWithImageAudio',
    wordBuildingWithoutImage= 'wordBuildingWithoutImageAudio',
    pictureClues='pictureCluesAudio',
    pictureWordMatchMultipleImages='pictureWordMatchMultipleImagesAudio',
    pictureWordMatchSingleImage='pictureWordMatchSingleImageAudio',
    sentenceMatch='sentenceMatchAudio',
    imageMatch='imageMatchAudio',
    palStoryTale='palStoryTaleAudio',
    palEgmaPatternMatching='palEgmaPatternMatchingAudio',
    palEgmaWordProblemDragnDrop='palEgmaWordProblemDragnDropAudio',
    palEgmaWordProblemClick='palEgmaWordProblemClickAudio',
    palEgraOddOneOut='palEgraOddOneOutAudio',
    palEgraArrangePictures='palEgraArrangePicturesAudio',
    palEgraBuildWord='palEgraBuildWordAudio',
    palEgraWordFormation='palEgraWordFormationAudio',
    palInventedSpelling='palInventedSpellingAudio',
    palLetterIdentification='palLetterIdentificationAudio',
    palStoryMaking='palStoryMakingAudio',
    palegmasumtogether='palegmasumtogetherAudio',
    palegmamultioption='palegmamultioptionAudio',
    palegraoptionaudio='palegraoptionAudio',
    palegrawordmatch='palegrawordmatchAudio',
    palegramcqimages='palegramcqimagesAudio'
}