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
export const CalculatorOk='calculator-ok';

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
    arrangeLetters = 'arrangeLetters',
    balancing = 'balancing',
    balloonPop = 'balloonPop',
    blender = 'blender',
    bubbleType = 'bubbleType',
    calculator = 'calculator',
    categorize = 'categorize',
    checkerBlocks = 'checkerBlocks',
    createSentence = 'createSentence',
    fillAnswer = 'fillAnswer',
    fillBlank = 'fillBlank',
    fillUp = 'fillUp',
    flashcardtemplate = 'flashcard',
    foodJar = 'foodJar',
    grid = 'grid',
    imageMatchWithQuestionImageAndMultiOption = 'imageMatchWithQuestionImageAndMultiOption',
    inventedSpelling = 'inventedSpelling',
    jumpSentence = 'jumpSentence',
    letterBoard = 'letterBoard',
    letterIdentification = 'letterIdentification',
    letterPairing = 'letterPairing',
    makeSentence = 'makeSentence',
    matchingCard = 'matchingCard',
    multiplyBeeds = 'multiplyBeeds',
    nimbleTable = 'nimbleTable',
    numberBoardOneTwo = 'numberBoardOneTwo',
    numberPair = 'numberPair',
    openWindow = 'openWindow',
    orderTractor = 'orderTractor',
    phonicTractor = 'phonicTractor',
    pictureMeaningCocos = 'pictureMeaningCocos',
    pictureWordMatch1 = 'pictureWordMatch1',
    pictureWordMatch2 = 'pictureWordMatch2',
    puzzleGame = 'puzzleGame',
    questionBoard = 'questionBoard',
    quizLiteracySoundOnlyWord = 'quizLiteracySoundonlyWord',
    quizLiteracySoundOnlyImage = 'quizLiteracySoundOnlyImage',
    quizLiteracySoundOnlySentence = 'quizLiteracySoundOnlySentence',
    quizLiteracySentenceSentence = 'quizLiteracySentenceSentence',
    quizLiteracyAndShapes1 = 'quizLiteracyAndShapes1',
    quizLiteracyImageWithText = 'quizLiteracyImageWithText',
    quizliteracyImageWord = 'quizliteracyImageWord',
    quizMathBiggerAndSmaller = 'quizMathBiggerAndSmaller',
    quizMathBiggestAndSmallest = 'quizMathBiggestAndSmallest',
    quizmathCustomNumberMagnitude = 'quizmathCustomNumberMagnitude',
    quizMathHowMany = 'quizMathHowMany',
    quizmathMissingnumberDrag = 'quizmathMissingnumberDrag',
    quizMathNumberIdentification = 'quizMathNumberIdentification',
    quizMathOperationWithobjects = 'quizMathOperationWithobjects',
    quizMathoperationWithoutObjects = 'quizMathoperationWithoutObjects',
    quizMathRecognizeNumber = 'quizMathRecognizeNumber',
    quizMathShapes = 'quizMathShapes',
    reorder = 'reorder',
    rocketGame = 'rocketGame',
    rowBlock  = 'rowBlock',
    sequenceBox1 = 'sequenceBox1',
    shapeTractor = 'shapeTractor',
    spellDoor = 'spellDoor',
    storyMaking = 'storyMaking',
    storyTale = 'storyTale',
    sumTogether = 'sumTogether',
    tag = 'tag',
    total = 'total',
    writeCard = 'writeCard',
    writeLetter = 'writeLetter',
    writeNumber = 'writeNumber',
    writeSet  = 'writeSet',
    writeWord = 'writeWord',
    numberIdentification = 'numberIdentification',
    wordBuildingWithAndWithoutImage = 'wordBuildingWithAndWithoutImage',
    subsWithAndWithoutImage = 'subsWithAndWithoutImage',
    sentenceMatchTemplate = 'sentenceMatch',
    pictureClues = 'pictureClues',
    palEgmaCalculateSumAndSumTogether = 'palEgmaCalculateSumAndSumTogether',
    palEgmaWordProblem = "palEgmaWordProblem",
    palEgraMCQWithImage = 'palEgraMCQWithImage',
    palEgraOptionWithAudio = 'palEgraOptionWithAudio',
    palEgraWordMatch = 'palEgraWordMatch',
    substractionWithImage = 'substractionWithImageAudio',
    substractionWithoutImage='substractionWithoutImageAudio',
    numberIdentificationWithImage= 'numberIdentificationWithImageAudio',
    numberIdentificationWithoutImage= 'numberIdentificationWithoutImageAudio',
    wordBuildingWithImage= 'wordBuildingWithImageAudio',
    wordBuildingWithoutImage= 'wordBuildingWithoutImageAudio',
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
    palegramcqimages='palegramcqimagesAudio',
    drawShape = 'drawshape',
    drawshape = 'drawshape'
}

export type WordTimelineEntry = {
  word: string;
  startMs: number;
  endMs: number;
  index: number;
};

export const FAST_WORDS_BY_LANG = {
  'en': new Set([
    'a', 'an', 'the',
    'on', 'in', 'at',
    'to', 'of', 'for',
    'into', 'up', 'or',
    'is', 'are', 'were',
  ]),

  'hi': new Set([
    'का', 'की', 'के',
    'में', 'पर', 'से',
    'तो', 'को',
    'है', 'था', 'थे',
  ]),

  'ka': new Set([
    'ಅದು', 'ಇದು',
    'ನಲ್ಲಿ', 'ಮೇಲೆ',
    'ಮತ್ತು', 'ಇದೆ',
    'ಆಗಿತ್ತು',
  ]),
};

export const LANGUAGE_PROFILES = {
  'en': {
    expectedWPM: 135,
    minWordMs: 80,
    syllableWeight: 1.28,
    punctuationPauseWeight: 0.45,
    preemptiveOffsetMs: 55,
    smoothingMs: 25,
    fastWordMultiplier: 0.65,
    fastClusterMultiplier: 0.65,
  },

  'hi': {
    expectedWPM: 155,
    minWordMs: 40,
    syllableWeight: 1.30,
    punctuationPauseWeight: 0.30,
    preemptiveOffsetMs: 20,
    smoothingMs: 45,
    fastWordMultiplier: 0.9,     // much weaker compression
    fastClusterMultiplier: 0.9,
  },

  'ka': {
    expectedWPM: 85,
    minWordMs: 35,
    syllableWeight: 1.75,
    punctuationPauseWeight: 0.50,
    preemptiveOffsetMs: 15,
    smoothingMs: 50,
    fastWordMultiplier: 1.0,      // no compression
    fastClusterMultiplier: 1.0,
  }
};
