import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { number, arg } from 'mathjs';
import { text } from 'stream/consumers';
import { Options } from '../grid/grid.stories';

const meta: Meta = {
  title: 'Templates/quizMaths',
  argTypes: {
    questions: { control: 'object' },
    answers: { control: 'object' },
    images: { control: 'object' },
    isAllowOnlyCorrect: { control: 'boolean' },
    isContinueOnCorrect: { control: 'boolean' },
  },
};

export default meta;

export const operationsWithObjects: StoryObj = {
  args: {
    questions: ['1', '+', '9', '+', '10', '=', '?'],
    answers: ['20'],
    images: [
      'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/GroupSum/ball_fishtank.png',
      'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/total/stone_04.png',
      'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/total/stone_05.png',
    ],
    isAllowOnlyCorrect: true,
    isContinueOnCorrect: true,
  },
  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

export const operationsWithoutObjects: StoryObj = {
  args: {
    questions: ['31', '+', '20', '=', '?'],
    answers: ['51'],
    isAllowOnlyCorrect: true,
    isContinueOnCorrect: true,
  },
  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

function getContainerXml(args) {
  const { questions = [], images = [], isAllowOnlyCorrect = true, isContinueOnCorrect = true } = args;

  // Number of images = first & third question elements
  const count1 = Number(questions[0]); // e.g., 11
  const count2 = Number(questions[2]); // e.g., 9
  const count3 = Number(questions[4]);

  // Helper: repeat images dynamically
  const repeatImages = (count, src) =>
    Array.from({ length: count })
      .map(
        () => `
        <lido-image type="text" margin="" id=""
          visible="true" src="${src}" height="80px" width="80px">
        </lido-image>`,
      )
      .join('');

  // FULL continuous image sequence
  // FULL continuous image sequence with visibility condition
  const FinalImageRows =
    images.length > 0
      ? `
        ${repeatImages(count1, images[0])}
        ${repeatImages(count2, images[1])}
        ${repeatImages(count3, images[2])}
      `
      : '';

  // Generate question labels ("11 + 9 = ?")
  const QuestionCells = questions
    .map(question => {
      return `
      <lido-text id="" tab-index="2" width="114px" visible="true"
        value="${question}" string="${question}"
        font-family="'Baloo Bhai 2'" font-color="black"
        font-size="landscape.130px, portrait.100px"
        bg-color="transparent" onEntry="this.fontWeight='800';">
      </lido-text>`;
    })
    .join('');

  return `
<main>
  <lido-container visible="true" id="lido-container" onInCorrect="lido-avatar.avatarAnimate='Fail';this.sleep='2000';" is-allow-only-correct="${isAllowOnlyCorrect}" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2300';" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/Sky.png" objective="${args.answers[0]}" is-continue-on-correct="${isContinueOnCorrect}" show-Check="true">

    <!--Chimple Avatar -->
    <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.370px,portrait.332px" width="landscape.342px,portrait.320px" x="landscape.27%, portrait.-4%" y="landscape.34%, portrait.77%" aria-hidden="true" z="1" bg-color="transparent" visible="true">
      <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
      </lido-avatar>
    </lido-cell>

    <lido-cell layout="landscape.row,portrait.col" visible="true" width="90%" height="90%" bg-color="transparent">

      <lido-cell layout="col" visible="true" margin="landscape.72px 0px 0px 32px,portrait.0px" height="700px" width="900px" bg-color="transparent">

        <!-- WRAPPED IMAGE GRID -->
        <lido-cell layout="col" visible="true"
          margin="landscape.-150px 0px 0px 0px,portrait.0px"
          height="200px" width="97%" bg-color="transparent"
          onEntry="this.justifyContent='flex-start'; this.alignItems='center';">

          <lido-cell layout="row" visible="true" margin="landscape.0px, portrait.58px -36px 0px 0px"
            height="auto" width="100%" bg-color="transparent"
            onEntry="
              this.justifyContent='flex-start';
              this.alignItems='flex-start';
              this.flexWrap='wrap';"
            gap="4px">
            ${FinalImageRows}
          </lido-cell>

        </lido-cell>

        <!-- Question text row -->
        <lido-cell layout="row" visible="true"
          margin="landscape.107px 0px -82px 0px, portrait.0px"
          height="126px" width="96%" bg-color="transparent"
          onEntry="this.justifyContent='center';">
          ${QuestionCells}
        </lido-cell>

      </lido-cell>

      <!-- Calculator -->
      <lido-cell layout="col" visible="true"
        margin="landscape.0px,portrait.0px -100px 0px 0px"
        height="751px" width="500px" bg-color="transparent">
        <lido-text visible="true" bg-color="#60DADA"
          height="100px" width="456px" string="How many??"
          onEntry="this.border='5px solid #029A9A';this.border-radius='10px';this.font-size='40px';this.font-weight='600';">
        </lido-text>

        <lido-calculator visible="true" height="650px"
          y="26px" width="456px" onEntry="this.position='relative';">
        </lido-calculator>
      </lido-cell>

    </lido-cell>

  </lido-container>
</main>`;
}

export const biggerAndSmaller: StoryObj = {
  args: {
    questions: 'Which group is bigger?',
    numbers: ['10', '5'],
    answer1: ['10'],
    images: [
      'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/total/stone_01.png',
      'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/total/stone_04.png',
    ],
    isAllowOnlyCorrect: true,
    isContinueOnCorrect: true,
  },
  render: args => {
    const xml = getContainerXml1(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

export const biggestAndSmallest: StoryObj = {
  args: {
    questions: 'Which is the biggest?',
    numbers: ['40', '50'],
    answer2: ['50'],
    isAllowOnlyCorrect: true,
    isContinueOnCorrect: true,
  },
  render: args => {
    const xml = getContainerXml1(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

function getContainerXml1(args) {
  const QuestionCells = args.numbers
    .map(number => {
      return `
      <lido-text id="text1" tab-index="2" width="300px" height="300px" visible="true" value="${number}" string="${number}" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.130px, portrait.100px"  bg-color="orange" 
				onEntry="this.fontWeight='800'; this.border-radius='15px'" type="click">
				</lido-text>	`;
    })
    .join('');

  const [count1, count2] = args.numbers.map(n => Number(n));

  // Helper: repeat images inside a lido-cell
  const makeImageBlock = (count, src) =>
    `
  <lido-cell layout="row" visible="true"
    margin="landscape.0px, portrait.64px 0px 0px 0px"
    height="74%" width="landscape.40%,portrait.46%"
    bg-color="orange"
    onEntry="this.justifyContent='flex-start'; this.align-items='flex-start'; this.border-radius='15px'; this.padding='14px'"
    type="click" value="${count}">

      ${Array.from({ length: count })
        .map(
          () => `
          <lido-image type="text" margin="" id=""
            visible="true" src="${src}"
            height="80px" width="80px">
          </lido-image>`,
        )
        .join('')}

  </lido-cell>
  `;

  // Make sure images exist and at least 2 sources are provided
  const hasImages = Array.isArray(args.images) && args.images.length >= 2;

  let ImageCells = '';

  if (hasImages) {
    // Images exist → build image cells safely
    ImageCells = `
    ${makeImageBlock(count1, args.images[0])}
    ${makeImageBlock(count2, args.images[1])}
  `;
  }

  return `
<main>

<lido-container  visible="true" id="lido-container" onInCorrect="lido-avatar.avatarAnimate='Fail';this.sleep='2000';" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2300';" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/Sky.png" objective="${
    hasImages ? args.answer1 : args.answer2
  }" is-continue-on-correct="${args.isContinueOnCorrect}" is-allow-only-correct="${args.isAllowOnlyCorrect}" custom-style="#question{box-shadow: none !important;}">

	<!-- Chimple Avatar -->
	<lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.344px,portrait.402px" width="landscape.310px,portrait.398px" x="landscape.86%, portrait.28%" y="landscape.66%, portrait.72%" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="">
		<lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
		</lido-avatar>
	</lido-cell>

	<lido-cell layout="landscape.col,portrait.col" visible="true"  width="landscape.94%, portrait.100%" height="landscape.90%,portrait.50%" bg-color="transparent" onEntry="this.justifyContent='space-between';" margin="landscape.82px 0px 0px -138px,portrait.-230px 0px 0px 0px">

		<lido-cell layout="row" visible="true" margin="landscape.0px, portrait.64px 0px 0px 0px" height="126px" width="landscape.96%,portrait.100%" bg-color="transparent" onEntry="this.justifyContent='center';">
			<lido-text id="question" tab-index="2" visible="true" value="10" string="${
        args.questions
      }" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.100px, portrait.84px"  bg-color="transparent" 
			onEntry="this.fontWeight='800'; this.speak='true';">
      </lido-text>
		</lido-cell>

		<lido-cell layout="row" visible="true" margin="" onEntry="this.border-radius='26px';" height="80%" width="landscape.100%,portrait.100%" bg-color="transparent">
			
      ${hasImages ? ImageCells : QuestionCells}
 	
		</lido-cell>
	</lido-cell>
</lido-container>
  
</main>`;
}

export const Shapes: StoryObj = {
  args: {
    question1: 'Which is circle?',
    answer: ['circle'],
    options: ["cube", "rectangle", "circle", "cylinder"],
    isAllowOnlyCorrect: true,
    isContinueOnCorrect: true,
  },
  render: args => {
    const xml = getContainerXml2(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

export const how_many: StoryObj = {
  args: {
    question2: ['100', '9', '8', '7'],
    answer: ['100'],
    images: ['https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/total/stone_01.png'],
    isAllowOnlyCorrect: true,
    isContinueOnCorrect: true,
    templateName: 'how_many',
  },
  render: args => {
    const xml = getContainerXml2(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

export const number_identification: StoryObj = {
  args: {
    question2: ['10', '9', '8', '7'],
    answer: ['10'],
    isAllowOnlyCorrect: true,
    isContinueOnCorrect: true,
  },
  render: args => {
    const xml = getContainerXml2(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

function getContainerXml2(args) {
  // FIXED: works for Shapes + Single Digit + Two Digit
  const hasImages = Array.isArray(args.images) && args.images.length > 0; 

  // ---------------------- QUESTION CELLS ----------------------

  const QuestionCellForShapes = `
  <lido-text visible="true" margin="landscape.-242px 0px 0px 0px,portrait.-46px 0px 0px 0px" id="text11"
      onEntry="this.border-radius='14px';" bg-color="" onTouch="this.speak='true';" string="${args.question1}" font-color="white"
      font-size="1px">
        <lido-image visible="true"
          src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Navbar-buttons/Audio%20icon.svg"
          width="96px">
        </lido-image>
    </lido-text>
    <lido-text id="question" tab-index="2" visible="true"
      value="${args.question1 || ''}"
      string="${args.question1 || ''}"
      font-family="'Baloo Bhai 2'"
      font-color="black"
      font-size="landscape.100px, portrait.84px"
      bg-color="transparent"
      onEntry="this.fontWeight='800';">
    </lido-text>
  `;

  const QuestionCellForHowMany = `
  <lido-text visible="true" margin="landscape.-242px 0px 0px 0px,portrait.-46px 0px 0px 0px" id="text11"
      onEntry="this.border-radius='14px';" bg-color="" onTouch="this.speak='true';" string="${args.answer}" font-color="white"
      font-size="1px">
        <lido-image visible="true"
          src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Navbar-buttons/Audio%20icon.svg"
          width="96px">
        </lido-image>
    </lido-text>
    <lido-cell visible="true" margin=""
      onEntry="this.border-radius='14px';this.display='flex';this.speak='true';this.justifyContent='flex-start'; this.flexWrap='wrap';"
      padding="0px 0px 0px 12px" height="auto" width="landscape.100%,portrait.100%" bg-color="white" string="${args.answer}"
      font-size="1px" gap="2px">
      ${Array.from({ length: Number(args.answer?.[0] || 0) })
        .map(
          () => `
          <lido-image type="text" visible="true" src="${args.images?.[0]}" width="landscape.67px,portrait.50px"></lido-image>
        `,
        )
        .join('')}

    </lido-cell>
  `;

  const QuestionCellForNumberIdentification = `
    <lido-text visible="true" margin="landscape.0px,portrait.0px"
      onEntry="this.border-radius='14px';"
      height="177px"
      width="landscape.236px,portrait.34%"
      bg-color=""
      onTouch="this.speak='true';"
      string="${args.answer}"
      font-color="white"
      font-size="1px">
        <lido-image visible="true"
          src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Navbar-buttons/Audio%20icon.svg"
          width="100%">
        </lido-image>
    </lido-text>
  `;

  // ---------------------- SHAPES OPTIONS ----------------------

  const ImageCellsForShapes =
    args.options && args.options.length > 0
      ? `
    <!-- Render Shape Options -->
        <lido-cell layout="landscape.row, portrait.col" visible="true" 
            margin="landscape.-46px 0px 0px -94px,portrait.0"
            onEntry="this.border-radius='26px';"
            height="landscape.390px,portrait.46%"
            width="landscape.92%,portrait.100%"
            bg-color="transparent">

            <lido-cell layout="row" visible="true" onEntry="this.border-radius='26px';"
                height="landcape.100%,portrait.50%" width="landscape.50%,portrait.100%" bg-color="transparent">

                <lido-shape class="shape" id="${args.options[0]}1" shapeType="lido-${args.options[0]}"
                    x="landscape.7%, portrait.10%" y="${args.options[0] === 'cube' ? 'landscape.58%, portrait.30%' : args.options[0] === 'cylinder' ? 'landscape.52%, portrait.30%' : 'landscape.30%, portrait.30%'}"
                    width="${args.options[0] === 'cube'
                          ? 'landscape.200px,portrait.200px'
                          : args.options[0] === 'rectangle'
                            ? 'landscape.232px,portrait.312px'
                            : 'landscape.268px,portrait.300px'
                      }"

                      height="${
                        args.options[0] === 'cube'
                          ? 'landscape.200px,portrait.200px'
                          : args.options[0] === 'rectangle'
                            ? 'landscape.144px,portrait.224px'
                            : 'landscape.268px,portrait.300px'
                      }"
                    bgColor="blue" value="${args.options[0]}" type="click" visible="true"></lido-shape>

                <lido-shape class="shape" id="${args.options[1]}" shapeType="lido-${args.options[1]}"
                    x="landscape.30%,portrait.55%" y="${args.options[1] === 'cube' ? 'landscape.58%, portrait.30%' : args.options[1] === 'cylinder' ? 'landscape.52%, portrait.30%' : 'landscape.51%, portrait.30%'}"
                    width="${
                          args.options[1] === 'cube'
                            ? 'landscape.200px,portrait.200px'
                            : args.options[1] === 'rectangle'
                              ? 'landscape.232px,portrait.312px'
                              : 'landscape.268px,portrait.300px'
                        }"

                        height="${
                          args.options[1] === 'cube'
                            ? 'landscape.200px,portrait.200px'
                            : args.options[1] === 'rectangle'
                              ? 'landscape.144px,portrait.224px'
                              : 'landscape.268px,portrait.300px'
                        }"
                    bgColor="blue" value="${args.options[1]}" type="click" visible="true"></lido-shape>
            </lido-cell>

            <lido-cell layout="row" visible="true" onEntry="this.border-radius='26px';"
                height="landcape.100%,portrait.50%" width="landscape.50%,portrait.100%" bg-color="transparent">

                <lido-shape class="shape" id="${args.options[2]}" shapeType="lido-${args.options[2]}"
                    x="landscape.53%, portrait.8%" y="${args.options[2] === 'cube' ? 'landscape.58%, portrait.60%' : args.options[2] === 'cylinder' ? 'landscape.52%, portrait.60%' : 'landscape.51%, portrait.60%'}"
                    width="${
                          args.options[2] === 'cube'
                            ? 'landscape.200px,portrait.300px'
                            : args.options[2] === 'rectangle'
                              ? 'landscape.232px,portrait.312px'
                              : 'landscape.268px,portrait.300px'
                        }"

                        height="${
                          args.options[2] === 'cube'
                            ? 'landscape.200px,portrait.300px'
                            : args.options[2] === 'rectangle'
                              ? 'landscape.144px,portrait.224px'
                              : 'landscape.268px,portrait.300px'
                        }"
                    bgColor="blue" value="${args.options[2]}" type="click" visible="true"></lido-shape>

                <lido-shape class="shape" id="${args.options[3]}" shapeType="lido-${args.options[3]}"
                    x="landscape.75%,portrait.56%" y="${args.options[3] === 'cube' ? 'landscape.58%, portrait.60%' : args.options[3] === 'cylinder' ? 'landscape.52%, portrait.60%' : 'landscape.51%, portrait.60%'}"
                    width="${
                        args.options[2] === 'cube'
                          ? 'landscape.200px,portrait.300px'
                          : args.options[2] === 'rectangle'
                            ? 'landscape.232px,portrait.312px'
                            : 'landscape.268px,portrait.300px'
                      }"

                      height="${
                        args.options[2] === 'cube'
                          ? 'landscape.100px,portrait.300px'
                          : args.options[2] === 'rectangle'
                            ? 'landscape.144px,portrait.224px'
                            : 'landscape.268px,portrait.300px'
                      }"
                    bgColor="blue" value="${args.options[3]}" type="click" visible="true"></lido-shape>
            </lido-cell>

        </lido-cell>
  `
      : '';

  // ---------------------- OPTIONS FOR NUMBERS ----------------------

  const OptionCellsForHowManySingleAndTwoDigit = (() => {
    if (!Array.isArray(args.question2)) return '';

    const q = args.question2;
    const left = q.slice(0, 2);
    const right = q.slice(2, 4);

    const renderOption = v => `
      <lido-cell layout="row" visible="true" margin=""
        onEntry="this.border-radius='14px';"
        height="228px"
        width="266px"
        bg-color="orange"
        type="click"
        value="${v}">
          <lido-text visible="true" value="${v}" string="${v}"
            font-family="'Baloo Bhai 2'"
            font-color="black"
            font-size="landscape.130px, portrait.100px"
            bg-color="orange"
            onEntry="this.fontWeight='800';">
          </lido-text>
      </lido-cell>
    `;

    return `
      <lido-cell layout="landscape.row, portrait.col" visible="true" margin="landscape.0px 90px 0px 0px,portrait.0px"
        onEntry="this.border-radius='26px';"
        height="landscape.390px,portrait.46%"
        width="landscape.92%,portrait.100%"
        bg-color="transparent">

        <lido-cell layout="row" visible="true" margin="" onEntry="this.border-radius='26px';" height="landcape.100%,portrait.50%" width="landscape.50%,portrait.100%" bg-color="transparent">
            ${left.map(renderOption).join('')}
        </lido-cell>

        <lido-cell layout="row" visible="true" margin=""
          onEntry="this.border-radius='26px';"
          height="landcape.100%,portrait.50%"
          width="landscape.50%,portrait.100%"
          bg-color="transparent">
            ${right.map(renderOption).join('')}
        </lido-cell>

      </lido-cell>
    `;
  })();

  // ---------------------- FINAL RENDER LOGIC ----------------------

  const SelectedQuestionCell = args.question1 ? QuestionCellForShapes : hasImages ? QuestionCellForHowMany: QuestionCellForNumberIdentification ;

  const SelectedOptions = OptionCellsForHowManySingleAndTwoDigit;

  // ---------------------- FINAL XML ----------------------

  return `
<main>
<lido-container visible="true" id="lido-container"
  onInCorrect="lido-avatar.avatarAnimate='Fail';this.sleep='2000';" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2300';"
  bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/Sky.png" objective="${args.answer}" is-continue-on-correct="${
    args.isContinueOnCorrect
  }" is-allow-only-correct="${args.isAllowOnlyCorrect}" custom-style= "#text11, .shape {box-shadow: none !important;}">

  <!-- Chimple Avatar -->
	<lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.344px,portrait.402px" width="landscape.296px,portrait.398px" x="landscape.87%, portrait.28%" y="landscape.67%, portrait.77%" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="">
		<lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
		</lido-avatar>
	</lido-cell>

  <!-- Question -->
  <lido-cell layout="row" visible="true" margin="landscape.0px 0px 0px -64px, portrait.-170px 0px 0px 0px" height="348px" width="landscape.95%,portrait.100%" bg-color="transparent" onEntry="this.justifyContent='center';">
      ${SelectedQuestionCell}
  </lido-cell>

  <!-- Options -->
  
      ${
        args.options && args.options.length > 0
          ? `
       ${ImageCellsForShapes} 
    `
          : `${SelectedOptions}`
      }


</lido-container>
</main>
`;
}

export const word_problem: StoryObj = {
  args: {
    question2:
      'George went to a store and bought some t-shirts. He went to another store and bought 2 more t-shirts. He bought a total of 15 t-shirts. How many t-shirts did he buy at the first store?',
    answer: '13',
    options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    images: ['https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Navbar-buttons/Audio%20icon.svg'],
    isAllowOnlyCorrect: true,
    isContinueOnCorrect: true,
  },
  render: args => {
    const xml = getContainerXml3(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

export const operations_drag: StoryObj = {
  args: {
    questions: ['100', '+', '30', '='],
    answer: '130',
    options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    isAllowOnlyCorrect: true,
    isContinueOnCorrect: true,
  },
  render: args => {
    const xml = getContainerXml3(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

export const recognize_number: StoryObj = {
  args: {
    questions: [],
    answer: '100',
    options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    isAllowOnlyCorrect: true,
    isContinueOnCorrect: true,
  },
  render: args => {
    const xml = getContainerXml3(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

function getContainerXml3(args) {
  const dragCells = args.options
    .map(
      (digit, i) => `
      <lido-text id="drag${i}" tab-index="${i}" height="landscape.170px, portrait.125px" width="landscape.125px, portrait.90px" visible="true" value="${digit}" string="${digit}" font-family="'Baloo Bhai 2'" font-color="black" type="drag" font-size="104px"  bg-color="#FFF4CD"  onEntry="this.fontWeight='800'; this.borderRadius='10px'; this.flex-shrink='0';" border-image="">
      </lido-text>
    `,
    )
    .join('\n');

  const questionBlock =
    args.images && args.images.length > 0
      ? `
    <lido-cell id="question11" layout="row" visible="true" margin="" height="landscape.330px,portrait.70%" 
    width="landscape.95%,portrait.96%" bg-color="transparent" onEntry="this.justifyContent='center';" onTouch="this.speak='true'">
      <lido-image type="text" margin="landscape.-170px 0px 0px 0px,portrait.-405px 0px 0px 0px" id="speaker" visible="true" src="${args.images}" width="338px" height="230px" onTouch="this.speak='true'">
      </lido-image>

      <lido-text id="question" tab-index="text1" visible="true" value="${args.answer}" string="${args.question2}" font-family="'Baloo Bhai 2'" font-color="black" font-size="50px" bg-color="transparent" onEntry="this.fontWeight='600';">
      </lido-text>
    </lido-cell>
  `
      : `
    <lido-cell layout="row" visible="true" margin="" height="landscape.170px,portrait.125px" width="450px" bg-color="transparent" onEntry="this.justifyContent='center';">
      ${args.questions
        .map(
          (q, index) => `
          <lido-text id="question_${index}" tab-index="text_${index}" visible="true" value="${q}" string="${q}" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.100px, portrait.84px" bg-color="transparent" onEntry="this.fontWeight='800';this.padding='10px'">
          </lido-text>`,
        )
        .join('')}
    </lido-cell>
  `;

  const objectiveArray = args.answer.split('');
  const dropCells = objectiveArray
    .map(
      (cell, i) => `
       <lido-text id="drop${i}" tab-index="${i}" disable-edit="true" height="landscape.170px, portrait.auto" width="125px" visible="true" value="${cell}" string="?" font-family="'Baloo Bhai 2'" font-color="#FFC805" type="drop" font-size="landscape.130px, portrait.100px"  bg-color="transparent"  onEntry="this.fontWeight='800'; this.borderRadius='10px';" border-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/sequence-box/card-slot_empty.png">
      </lido-text>
      `,
    )
    .join('\n');

  // ---------------------- FINAL XML ----------------------

  return `
<main>

  <lido-container id="lido-container" objective="${args.answer
    .split('')
    .join(
      ',',
    )}" tab-index="" show-drop-border="false" is-continue-on-correct="true"  is-allow-only-correct="true" value="mainContainer1" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/Sky.png" height="100%" width="100%" bg-color="transparent"  visible="true" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" drop-action="infinite-drop" show-check="false" custom-style= "#question11, #text12  {
        box-shadow: none !important;
        }">

            <!-- Chimple Avatar -->
        <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.344px,portrait.402px" width="landscape.296px,portrait.398px" x="landscape.82%, portrait.28%" y="landscape.36%, portrait.77%" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="">
          <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
          </lido-avatar>
        </lido-cell>

            <!-- question cell -->  
       ${
         (Array.isArray(args.questions) && args.questions.length > 0) || args.question2
           ? `
          <lido-cell layout="${
            args.images && args.images.length > 0 ? 'col' : 'row'
          }" visible="true" margin="landscape.-50px 0px 0px 0px, portrait.-170px 0px 0px 0px" height="landscape.70%,portrait.${
               args.images && args.images.length > 0 ? '45%' : '30%'
             }"
            width="landscape.96%,portrait.100%" bg-color="transparent" onEntry="this.justifyContent='center';"
            gap="${args.images && args.images.length > 0 ? 'landscape.0px, portrait.20px' : '0px'}">

              ${questionBlock}

              <lido-cell layout="row" visible="true" margin="" height="landscape.170px,portrait.125px"
                width="380px" bg-color="transparent" onEntry="this.justifyContent='center';">
                ${dropCells}
              </lido-cell>

          </lido-cell>
              `
           : `
          <lido-cell  layout="col" visible="true" margin="landscape.22px 0px 0px 0px, portrait.-110px 0px 0px 0px" height="landscape.62%,portrait.40%" width="landscape.96%,portrait.100%" bg-color="transparent" onEntry="this.justifyContent='center';" gap="82px">
              <lido-text id="text12" visible="true" margin="landscape.0px,portrait.0px" onEntry="this.border-radius='14px';" height="177px" width="landscape.236px,portrait.34%" bg-color="" onTouch="this.speak='true';" string="${args.answer}" font-color="white" font-size="1px">
                <lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Navbar-buttons/Audio%20icon.svg"
                width="100%">
                </lido-image>
                </lido-text>
              
              <lido-cell layout="row" id="question11" visible="true" margin="" height="landscape.192px,portrait.40%" width="landscape.84%,portrait.96%" bg-color="transparent" onEntry="this.justifyContent='center';" onTouch="this.speak='true'">
                ${dropCells}
              </lido-cell>
            </lido-cell>
              `
       }

            <!-- answers drag cell -->
            <lido-cell layout="landscape.wrap, portrait.wrap" aria-hidden="true" visible="true" height="landscape.20%,portrait.18%" width="95%" bg-Color="transparent" margin="landscape.0px,portrait.55px 0px 125px 0px" onEntry="this.z-index='1'; this.grid-template-columns='repeat(auto-fill, minmax(140px, auto))'; this.gridTemplateRows='repeat(auto-fit, 145px)'; this.flexWrap='wrap'; this.justify-content='center';" gap="5px">
              ${dragCells}
            </lido-cell>
  </lido-container>

</main>
`;
}

export const missing_number_drag: StoryObj = {
  args: {
    questions: ['991', '992', '993', '?'],
    answer: '994',
    options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    isAllowOnlyCorrect: true,
    isContinueOnCorrect: true,
  },

  render: args => {
    const xml = getContainerXml4(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

function getContainerXml4(args) {
  const dragCells = args.options
    .map(
      (digit, i) => `
      <lido-text id="drag${i}" tab-index="${i}" height="landscape.170px, portrait.125px" width="landscape.125px, portrait.90px" visible="true" value="${digit}" string="${digit}" font-family="'Baloo Bhai 2'" font-color="black" type="drag" font-size="104px"  bg-color="#FFF4CD"  onEntry="this.fontWeight='800'; this.borderRadius='10px'; this.flex-shrink='0';" border-image="">
      </lido-text>
    `,
    )
    .join('\n');

  const dropCells = `
     <lido-cell layout="row" visible="true" margin="" height="landscape.54%,portrait.72%" width="landscape.45%,portrait.34%" bg-color="orange" onEntry="this.justifyContent='center'; this.borderRadius='10px';" padding="0px 10px">
        ${[...args.answer]
          .map(
            (digit, i) => `
        <lido-text id="drop${i + 1}" tab-index="${i + 3}" disable-edit="true" height="landscape.170px, portrait.125px"
          width="125px"
          visible="true"
          value="${digit}"
          string="?"
          font-family="'Baloo Bhai 2'"
          font-color="black"
          type="drop"
          font-size="landscape.110px, portrait.100px"
          bg-color="transparent"
          onEntry="this.fontWeight='800'; this.borderRadius='10px';"
          border-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/sequence-box/card-slot_empty.png">
        </lido-text>
    `,
          )
          .join('\n')}
     </lido-cell>
    `;

  // ---------------------- FINAL XML ----------------------

  return `
<main>
   <lido-container id="lido-container" objective="${args.answer
     .split('')
     .join(
       ',',
     )}" tab-index="1" show-drop-border="false" is-continue-on-correct="true"  is-allow-only-correct="true" value="mainContainer1" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/Sky.png" height="100%" width="100%" bg-color="transparent"  visible="true" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" drop-action="infinite-drop" show-check="false">
	 <!-- Chimple Avatar -->
	 <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.344px,portrait.402px" width="landscape.296px,portrait.398px" x="landscape.41%, portrait.28%" y="landscape.44%, portrait.77%" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="">
		<lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
		</lido-avatar>
	</lido-cell> 

	<lido-cell layout="landscape.row,portrait.col" visible="true" margin="landscape.100px 0px 30px 0px, portrait.-155px 0px 0px 0px" height="landscape.62%,portrait.50%" width="landscape.100%,portrait.100%" bg-color="transparent" onEntry="this.justifyContent='center';" gap="10px">

			<lido-cell layout="row" visible="true" margin="" onEntry="this.border-radius='26px'; this.align-items='flex-start';" height="landscape.90%,portrait.44%" width="landscape.50%,portrait.100%" bg-color="transparent">
          
          ${
            args.questions[0] === '?'
              ? dropCells
              : `
              <lido-cell layout="row" visible="true" margin="" height="landscape.54%,portrait.72%" width="landscape.47%,portrait.34%" bg-color="orange" onEntry="this.justifyContent='center'; this.borderRadius='10px';">
                <lido-text id="drop${args.questions[0]}" tab-index="${
                  args.questions[0] + 2
                }" disable-edit="true" height="landscape.170px, portrait.125px" width="125px" visible="true" value="${args.questions[0]}" string="${args.questions[0]}"
                  font-family="'Baloo Bhai 2'" font-color="black" type="drop" font-size="landscape.110px, portrait.100px" 
                  bg-color="transparent" onEntry="this.fontWeight='800'; this.borderRadius='10px';">
                  </lido-text>
              </lido-cell>
            `
          }

            ${
              args.questions[1] === '?'
                ? dropCells
                : `
              <lido-cell layout="row" visible="true" margin="" height="landscape.54%,portrait.72%" width="landscape.47%,portrait.34%" bg-color="orange" onEntry="this.justifyContent='center'; this.borderRadius='10px';">
                <lido-text id="drop${args.questions[1]}" tab-index="${
                    args.questions[1] + 2
                  }" disable-edit="true" height="landscape.170px, portrait.125px" width="125px" visible="true" value="${args.questions[1]}" string="${args.questions[1]}"
                  font-family="'Baloo Bhai 2'" font-color="black" type="drop" font-size="landscape.110px, portrait.100px" 
                  bg-color="transparent" onEntry="this.fontWeight='800'; this.borderRadius='10px';">
                  </lido-text>
              </lido-cell>
            `
            }

        </lido-cell>


			
			<lido-cell layout="row" visible="true" margin="" onEntry="this.border-radius='26px'; this.align-items='flex-start';" height="landscape.90%,portrait.44%" width="landscape.50%,portrait.100%" bg-color="transparent">

            ${
              args.questions[2] === '?'
                ? dropCells
                : `
              <lido-cell layout="row" visible="true" margin="" height="landscape.54%,portrait.72%" width="landscape.47%,portrait.34%" bg-color="orange" onEntry="this.justifyContent='center'; this.borderRadius='10px';">
                <lido-text id="drop${args.questions[2]}" tab-index="${
                    args.questions[2] + 2
                  }" disable-edit="true" height="landscape.170px, portrait.125px" width="125px" visible="true" value="${args.questions[2]}" string="${args.questions[2]}"
                  font-family="'Baloo Bhai 2'" font-color="black" type="drop" font-size="landscape.110px, portrait.100px" 
                  bg-color="transparent" onEntry="this.fontWeight='800'; this.borderRadius='10px';">
                  </lido-text>
              </lido-cell>
            `
            }

            ${
              args.questions[3] === '?'
                ? dropCells
                : `
              <lido-cell layout="row" visible="true" margin="" height="landscape.100%,portrait.96%" width="landscape.47%,portrait.34%" bg-color="orange" onEntry="this.justifyContent='center'; this.borderRadius='10px';">
                <lido-text id="drop${args.questions[3]}" tab-index="${
                    args.questions[3] + 2
                  }" disable-edit="true" height="landscape.170px, portrait.125px" width="125px" visible="true" value="${args.questions[3]}" string="${args.questions[3]}"
                  font-family="'Baloo Bhai 2'" font-color="black" type="drop" font-size="landscape.110px, portrait.100px" 
                  bg-color="transparent" onEntry="this.fontWeight='800'; this.borderRadius='10px';">
                  </lido-text>
              </lido-cell>
            `
            }
           

          </lido-cell>
	
	</lido-cell>

  <!-- answers drag cell -->
            <lido-cell layout="landscape.wrap, portrait.wrap" aria-hidden="true" visible="true" height="landscape.20%,portrait.18%" width="95%" bg-Color="transparent" margin="landscape.0px,portrait.-48px 0px 125px 42px" onEntry="this.z-index='1'; this.grid-template-columns='repeat(auto-fill, minmax(140px, auto))'; this.gridTemplateRows='repeat(auto-fit, 145px)'; this.flexWrap='wrap'; this.justify-content='center';" gap="5px">
              ${dragCells}
            </lido-cell>
</lido-container>
</main>
`;
}

export const custom_number_magnitudes: StoryObj = {
  args: {
    question: 'Order the numbers from smallest to largest.',
    drags: ['200', '100', '300', '900'],
    answers: ['100', '200', '300', '900'],
    isAllowOnlyCorrect: true,
    isContinueOnCorrect: true,
  },
  render: args => {
    const xml = getContainerXml5(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

function getContainerXml5(args) {
  // ---------------------- FINAL XML ----------------------

  return `
<main>
<lido-container  visible="true" id="lido-container" onInCorrect="lido-avatar.avatarAnimate='Fail';this.sleep='2000';" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2300';" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/Sky.png" objective="${args.answers.join(
    ',',
  )}"  is-continue-on-correct="${args.isContinueOnCorrect}" is-allow-only-correct="${args.isAllowOnlyCorrect}" custom-style= "#t11 {
        box-shadow: none !important;
        }">
	 <!-- Chimple Avatar -->
      <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.328px,portrait.378px" width="landscape.284px,portrait.382px" x="landscape.85%, portrait.30%" y="landscape.68%, portrait.78%" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="">
        <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
        </lido-avatar>
      </lido-cell>


		<!-- drop cells -->
		<lido-cell layout="landscape.row, portrait.col" visible="true" margin="landscape.156px 0px 0px -154px,portrait.-168px 0px 0px 0px" onEntry="this.border-radius='26px';" height="landscape.390px,portrait.42%" width="landscape.86%,portrait.100%" bg-color="transparent">

			<lido-text visible="true" margin="" id="t11" onEntry="this.border-radius='14px';" bg-color="" onTouch="this.speak='true';" string="Order the numbers from smallest to largest." font-color="white" font-size="1px">
				<lido-image type="text" margin="landscape.-244px 0px 0px 0px,portrait.0px 0px 0px 0px" id="" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Navbar-buttons/Audio%20icon.svg" width="100px" height="127px" onTouch="this.speak='true'">
				</lido-image>
			</lido-text>
				

			<lido-cell layout="row" visible="true" margin="" onEntry="this.border-radius='26px';" height="landcape.100%,portrait.50%" width="landscape.50%,portrait.100%" bg-color="transparent">
				<lido-cell layout="row" id="text2" tab-index="2" visible="true" margin="" onEntry="this.border-radius='14px';" height="landscape.270px,portrait.244px" width="landscape.270px,portrait.244px" bg-color="#6D8C87"  type="drop" value="${
          args.answers[0]
        }" onInCorrect="lido-avatar.avatarAnimate='Fail';" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2300';">
					<lido-text  visible="true" value="${args.answers[0]}" string="" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.130px, portrait.100px"  bg-color="" 
					onEntry="this.fontWeight='800';">
					</lido-text>
				</lido-cell>

				<lido-cell layout="row" id="text3" tab-index="3" visible="true" margin="" onEntry="this.border-radius='14px';" height="landscape.270px,portrait.244px" width="landscape.270px,portrait.244px" bg-color="#6D8C87"  type="drop" value="${
          args.answers[1]
        }" onInCorrect="lido-avatar.avatarAnimate='Fail';" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2300';">
					<lido-text  visible="true" value="${args.answers[1]}" string="" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.130px, portrait.100px"  bg-color="" 
					onEntry="this.fontWeight='800';">
					</lido-text>
				</lido-cell>
		
			</lido-cell>

			<lido-cell layout="row" visible="true" margin="" onEntry="this.border-radius='26px';" height="landcape.100%,portrait.50%" width="landscape.50%,portrait.100%" bg-color="transparent">
				<lido-cell layout="row" id="text4" tab-index="4" visible="true" margin="" onEntry="this.border-radius='14px';" height="landscape.270px,portrait.244px" width="landscape.270px,portrait.244px" bg-color="#6D8C87"  type="drop" value="${
          args.answers[2]
        }" onInCorrect="lido-avatar.avatarAnimate='Fail';" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2300';">
					<lido-text  visible="true" value="${args.answers[2]}" string="" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.130px, portrait.100px"  bg-color="" 
					onEntry="this.fontWeight='800';">
					</lido-text>
				</lido-cell>

				<lido-cell layout="row" id="text5" tab-index="5" visible="true" margin="" onEntry="this.border-radius='14px';" height="landscape.270px,portrait.244px" width="landscape.270px,portrait.244px" bg-color="#6D8C87"  type="drop" value="${
          args.answers[3]
        }" onInCorrect="lido-avatar.avatarAnimate='Fail';" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2300';">
					<lido-text  visible="true" value="${args.answers[3]}" string="" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.130px, portrait.100px"  bg-color="" 
					onEntry="this.fontWeight='800';">
					</lido-text>
				</lido-cell>	
			</lido-cell>				
 	
	</lido-cell>


<!-- drag cells -->
		<lido-cell layout="landscape.row, portrait.col" visible="true" margin="landscape.-46px 0px 0px -124px,portrait.0" onEntry="this.border-radius='26px';" height="landscape.390px,portrait.35%" width="landscape.86%,portrait.100%" bg-color="transparent">

			<lido-cell layout="row" visible="true" margin="" onEntry="this.border-radius='26px';" height="landcape.100%,portrait.50%" width="landscape.50%,portrait.100%" bg-color="transparent">
				<lido-cell layout="row" id="text6" tab-index="6" visible="true" margin="" onEntry="this.border-radius='14px';" height="landscape.270px,portrait.244px" width="landscape.270px,portrait.244px" bg-color="orange"  type="drag" value="${
          args.drags[0]
        }">
					<lido-text visible="true" value="${args.drags[0]}" string="${
    args.drags[0]
  }" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.130px, portrait.100px"  bg-color="orange" 
					onEntry="this.fontWeight='800';">
					</lido-text>
				</lido-cell>

				<lido-cell layout="row" id="text7" tab-index="7" visible="true" margin="" onEntry="this.border-radius='14px';" height="landscape.270px,portrait.244px" width="landscape.270px,portrait.244px" bg-color="orange"  type="drag" value="${
          args.drags[1]
        }">
					<lido-text visible="true" value="${args.drags[1]}" string="${
    args.drags[1]
  }" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.130px, portrait.100px"  bg-color="orange" 
					onEntry="this.fontWeight='800';">
					</lido-text>
				</lido-cell>
		
			</lido-cell>

			<lido-cell layout="row" visible="true" margin="" onEntry="this.border-radius='26px';" height="landcape.100%,portrait.50%" width="landscape.50%,portrait.100%" bg-color="transparent">
				<lido-cell layout="row" id="text8" tab-index="8" visible="true" margin="" onEntry="this.border-radius='14px';" height="landscape.270px,portrait.244px" width="landscape.270px,portrait.244px" bg-color="orange"  type="drag" value="${
          args.drags[2]
        }">
					<lido-text  visible="true" value="${args.drags[2]}" string="${
    args.drags[2]
  }" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.130px, portrait.100px"  bg-color="orange" 
					onEntry="this.fontWeight='800';">
					</lido-text>
				</lido-cell>

				<lido-cell layout="row" id="text9" tab-index="9" visible="true" margin="" onEntry="this.border-radius='14px';" height="landscape.270px,portrait.244px" width="landscape.270px,portrait.244px" bg-color="orange"  type="drag" value="${
          args.drags[3]
        }">
					<lido-text visible="true" value="${args.drags[3]}" string="${
    args.drags[3]
  }" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.130px, portrait.100px"  bg-color="orange" 
					onEntry="this.fontWeight='800';">
					</lido-text>
				</lido-cell>	
			</lido-cell>				
 	
	</lido-cell>

</lido-container>
</main>
`;
}

export const Shapes1: StoryObj = {
  args: {
    question1: 'What is this shape?',
    options: ['circle', 'cube', 'cylinder', 'pentagon'],
    answer: ["cube"],
    isAllowOnlyCorrect: true,
    isContinueOnCorrect: true,
  },
  render: args => {
    const xml = getContainerXml6(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

function getContainerXml6(args) {
  // FIXED: works for Shapes + Single Digit + Two Digit
  const hasImages = Array.isArray(args.images) && args.images.length > 0;

  // ---------------------- QUESTION CELLS ----------------------
  const answerValue = args.answer?.[0] || '';
  const QuestionCell = `
  <lido-cell layout="col" visible="true" margin="landscape.0, portrait.-26px 0px 0px -126px" height="492px" width="landscape.66%,portrait.82%" bg-color="transparent" onEntry="this.justifyContent='flex-start';">
    <lido-text id="question" tab-index="2" visible="true" value="${answerValue}" string="${args.question1}" font-family="'Baloo Bhai 2'"
        font-color="black" font-size="landscape.90px, portrait.84px" bg-color="transparent" margin="landscape.0px 0px -103px 0px,portrait.0px"
        onEntry="this.fontWeight='800';">
      </lido-text>

      <lido-shape class="shape" id="${args.answer}" shapeType="lido-${args.answer}" x="landscape.40%,portrait.55%" y="${args.answer === 'cube' ? 'landscape.58%, portrait.30%' : args.answer === 'cylinder' ? 'landscape.52%, portrait.30%' : 'landscape.30%, portrait.30%'}" 
      width="${args.answer === 'cube' ? 'landscape.150px,portrait.300px' : 'landscape.268px,portrait.300px'}"
      height="${args.answer === 'cube' ? 'landscape.1500px,portrait.300px' : 'landscape.268px,portrait.300px'}"
      bgColor="blue" value="${args.answer}" type="click" visible="true"></lido-shape>
  </lido-cell>
  `;

  // ---------------------- SHAPES OPTIONS ----------------------

  const OptionCells =
    args.options && args.options.length > 0
      ? `
    <!-- Landscape layout: single horizontal row -->
    <lido-cell 
      layout="landscape.row, portrait.col" 
      visible="landscape.true, portrait.false"
      margin="0px 90px 0px 0px"
      onEntry="this.border-radius='26px';"
      height="landscape.390px,portrait.46%" 
      width="landscape.92%,portrait.100%" 
      bg-color="transparent"
    >

      ${args.options
        .map(
          opt => `
          <lido-text 
            id="option-${opt}"
            tab-index="2" 
            visible="true" 
            value="${opt}" 
            string="${opt}" 
            font-family="'Baloo Bhai 2'" 
            font-color="black" 
            font-size="landscape.58px, portrait.84px" 
            onEntry="this.fontWeight='800'; this.border-radius='10px'"
            height="200px" 
            width="landscape.270px,portrait.300px" 
            bg-color="orange" 
            type="click">
          </lido-text>
        `,
        )
        .join('')}
    </lido-cell>

    <!-- Portrait layout: 2 items per row -->
    <lido-cell 
      layout="landscape.row, portrait.col" 
      visible="landscape.false, portrait.true" 
      onEntry="this.border-radius='26px';"
      height="landscape.390px,portrait.42%" 
      width="landscape.92%,portrait.100%" 
      bg-color="transparent"
    >

      ${args.options
        .map(
          (opt, index) => `
            ${index % 2 === 0 ? `<lido-cell layout="row" visible="true" height="landcape.100%,portrait.50%" width="landscape.50%,portrait.100%" bg-color="transparent">` : ''}

              <lido-text 
                id="option-${opt}"
                tab-index="2" 
                visible="true" 
                value="${opt}" 
                string="${opt}" 
                font-family="'Baloo Bhai 2'" 
                font-color="black" 
                font-size="landscape.50px, portrait.70px" 
                height="200px" 
                width="landscape.270px,portrait.326px" 
                bg-color="orange" 
                type="click" 
                onEntry="this.fontWeight='800'; this.border-radius='10px'">
              </lido-text>

            ${index % 2 === 1 || index === args.options.length - 1 ? `</lido-cell>` : ''}
        `,
        )
        .join('')}

    </lido-cell>
  `
      : '';

  // ---------------------- FINAL XML ----------------------

  return `
<main>
<lido-container visible="true" id="lido-container"
  onInCorrect="lido-avatar.avatarAnimate='Fail';this.sleep='2000';" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2300';"
  bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/Sky.png" objective="${args.answer}" is-continue-on-correct="${args.isContinueOnCorrect}" is-allow-only-correct="${args.isAllowOnlyCorrect}" custom-style= "#text11, .shape {box-shadow: none !important;}">

  <!-- Chimple Avatar -->
	<lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.344px,portrait.360px" width="landscape.296px,portrait.368px" x="landscape.87%, portrait.30%" y="landscape.67%, portrait.77%" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="">
		<lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
		</lido-avatar>
	</lido-cell>

  <!-- Question -->
  <lido-cell layout="row" visible="true" margin="landscape.166px 0px 0px -64px, portrait.-92px 0px 0px 0px" height="348px" width="landscape.95%,portrait.100%" bg-color="transparent" onEntry="this.justifyContent='center';">
  <lido-text visible="true" margin="landscape.-304px 70px 0px -98px,portrait.-46px 0px 0px 0px" id="text11"
      onEntry="this.border-radius='14px';" bg-color="" onTouch="this.speak='true';" string="${args.question1}" font-color="white"
      font-size="1px">
        <lido-image visible="true"
          src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Navbar-buttons/Audio%20icon.svg"
          width="96px">
        </lido-image>
    </lido-text>
      ${QuestionCell}
  </lido-cell>

  <!-- Options -->
  
      ${OptionCells}

</lido-container>
</main>
`;
}
