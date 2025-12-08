import {Meta, StoryObj} from '@storybook/web-components';
import {html} from 'lit';

type QuestionBoardArgs = {
    questionBoardImage: string[];
    questionBoardText: string;
    backgroundImagePlusSign1: string[];
    backgroundImagePlusSign2: string[];
    backgroundImageMultiplicationSign: string[];
    expressionText: string;
    options: object;
    optionText: string;
    objective: string;
    isAllowOnlyCorrect?: boolean;
}

const meta: Meta<QuestionBoardArgs> = {
    title: 'Templates/questionBoard',
    argTypes: {
        questionBoardImage: { control: 'file', name: 'Question Board Image URL', multiple: true },
        questionBoardText: { control: 'text', name: 'Question Board Text' },
        backgroundImagePlusSign1: { control: 'file', name: 'Background Image 1 URL for (+,- sign)', multiple: true },
        backgroundImagePlusSign2: { control: 'file', name: 'Background Image 2 URL for (+,- sign)', multiple: true },
        backgroundImageMultiplicationSign: { control: 'file', name: 'Background Image URL for (x sign)', multiple: true },
        expressionText: { control: 'text', name: 'Expression Text' },
        options: { control: 'object', name: 'Options' },
        optionText: { control: 'text', name: 'Option Text' },
        objective: { control: 'text', name: 'Objective', description: 'Objective to achieve the task. (E.g. 5)' },
        isAllowOnlyCorrect: { control: 'boolean', name: 'isAllowOnlyCorrect' },
    },
    args: {
        questionBoardImage: ['https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/question-board/wordwindow_frame_question.png'],
        questionBoardText: 'The library has 5 more tables than the school office. The school office has 2 tables. How many tables does the library have?',
        backgroundImagePlusSign1: ['https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Categorize/insect3.png'],
        backgroundImagePlusSign2: ['https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Categorize/insect3.png'],
        backgroundImageMultiplicationSign: ['https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Categorize/insect3.png'],
        expressionText: '5 + 2 = 7',
        options: [5, 7, 12, 18],
        optionText: 'tables',
        objective: '7',
        isAllowOnlyCorrect: true,
    }
}

export default meta;

export const QuestionBoard: StoryObj = {
    args: {
        questionBoardText: "The library has 5 more tables than the school office. The school office has 2 tables. How many tables does the library have?",
        optionText: "tables",
        options: [5, 7, 12, 18]
    },

    render: (args: QuestionBoardArgs) => {
        const xml = getContainerXml(args);
        return html`<lido-home xml-data="${xml}" xmlData="${xml}"></lido-home>`;
    },
}

const parseExpression = (expressionText: string): { num1: string; num2: string; operator: string; result: string } => {
    // Clean up input
    const text = expressionText.trim();
    console.log('Expression Text:', text);

    const [left, right] = text.split('=').map(part => part.trim());
    console.log('Left:', left);
    console.log('Right:', right);

    // Determine which side contains the result
    const isLeftResult = right.trim().includes('+') || right.trim().includes('-') || right.trim().includes('x') || right.trim().includes('X') || right.trim().includes('*');
    const isRightResult = left.trim().includes('+') || left.trim().includes('-') || left.trim().includes('x') || left.trim().includes('X') || left.trim().includes('*');

    console.log('isLeftResult:', isLeftResult);
    console.log('isRightResult:', isRightResult);

    const result = isLeftResult ? left.trim().replace(/[<>]/g, '') : isRightResult ? right.trim().replace(/[<>]/g, '') : '';
    console.log('Result:', result);

    if(isLeftResult) {

        const operatorMatch = right.match(/(\+|-|x|X|\*)/);
        const operator = operatorMatch ? operatorMatch[1] : '';
        console.log('Operator:', operator);

        const [rawNum1, rawNum2] = right.split(/(\+|-|x|X|\*)/).filter(v => !['+', '-', 'x', 'X', '*'].includes(v)).map(v => v.trim());

        const num1 = rawNum1 ? rawNum1.replace(/[<>]/g, '').trim() : '';
        const num2 = rawNum2 ? rawNum2.replace(/[<>]/g, '').trim() : '';
        console.log('Num1:', num1);
        console.log('Num2:', num2);

        return { num1, num2, operator, result };
    }

    if(isRightResult) {

        const operatorMatch = left.match(/(\+|-|x|X|\*)/);
        const operator = operatorMatch ? operatorMatch[1] : '';
        console.log('Operator:', operator);

        const [rawNum1, rawNum2] = left.split(/(\+|-|x|X|\*)/).filter(v => !['+', '-', 'x', 'X', '*'].includes(v)).map(v => v.trim());
        
        const num1 = rawNum1 ? rawNum1.replace(/[<>]/g, '').trim() : '';
        const num2 = rawNum2 ? rawNum2.replace(/[<>]/g, '').trim() : '';
        console.log('Num1:', num1);
        console.log('Num2:', num2);

        return { num1, num2, operator, result };
    }
};

function getContainerXml(args : QuestionBoardArgs) {    
    const questionBoardImage = args.questionBoardImage[0];
    const questionBoardText = args.questionBoardText;
    const backgroundImagePlusSign1 = args.backgroundImagePlusSign1[0];
    const backgroundImagePlusSign2 = args.backgroundImagePlusSign2[0];
    const backgroundImageMultiplicationSign = args.backgroundImageMultiplicationSign[0];
    const expressionText = args.expressionText;
    const optionText = args.optionText;
    const objective = args.objective;
    const isAllowOnlyCorrect = args.isAllowOnlyCorrect ?? true;

    const options = args.options as string[];

    const optionsCell = options.map((option: any) => {
        return `
        <lido-text id="${option}" tab-index="${option}" height="215px" width="auto" visible="true" value="${option}" string="${option}" font-family="'Baloo Bhai 2'" font-color="black" type="click" font-size="104px"  bg-color="#FFB366" onCorrect="" onInCorrect="this.vibrate='horizontal-shake';" onEntry="this.font-weight='800'; this.borderRadius='10px'; this.flex-flow='column-reverse';" border-image="">
            <lido-text visible="true" id="option-text" audio="" height="0px" width="auto" font-family="'Baloo 2', serif" font-size="landscape.44px, portrait.52px" font-color="black" string="${optionText}" bg-Color="transparent" onEntry="this.font-weight='700';" padding="0px 10px 0px 10px">
            </lido-text>
        </lido-text>
        `
    }).join('');

    const plus_minus_animation = expressionText.includes('+') || expressionText.includes('-');
    const multiplication_animation = expressionText.includes('X') || expressionText.includes('x') || expressionText.includes('*');

    const expressionAnimation = plus_minus_animation ? `
        background-animation-plus-minus-1.opacity='1'; background-animation-plus-minus-2.opacity='1';
    ` : multiplication_animation ? `
        background-animation-multiplication.opacity='1';
    ` : ``;
    console.log('Expression Animation: ',expressionAnimation);

    const { num1, num2, operator, result } = parseExpression(expressionText);

    // Escape angular brackets for invisible text
    const escapedExpressionText = expressionText.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    let val1 = parseInt(num1) <= 10 ? '1' : '2';
    let val2 = parseInt(num2) <= 10 ? '1' : '2';

    console.log('Expression Text: ',escapedExpressionText);
    
    return `
        <main>
            	<lido-container id="question-board-container" disable-speak="true" objective="${objective}" tab-index="1"  value="questionBoard" bg-image="https://drive.google.com/file/d/1_D86tW9PBA46QHW2k1vWSsQ2jyMGLBkM/view"  height="100%" width="100%" bg-color="transparent"  visible="true" onCorrect="question-board-image.transition='transform 1s ease'; question-board-image.transform='rotateY(180deg)'; question-board-text.transition='opacity 0.5s ease'; question-board-text.opacity='0'; option-row.opacity='0'; invisible-text.transition='opacity 0.5s ease'; invisible-text.opacity='1'; invisible-text.visibility='visible'; ${expressionAnimation} this.sleep='4000';" onEntry="this.justifyContent='space-around';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="true" is-allow-only-correct="${isAllowOnlyCorrect}" >

                    <!-- Chimple Avatar -->
                    <lido-cell layout="pos" id="pos1" disableEdit="true" value="pos1" height="landscape.570px, portrait.700px" width="landscape.380px, portrait.485px" x="landscape.110px, portrait.195px" y="landscape.160px, portrait.1050px" ariaHidden="true" bg-color="transparent" visible="true"  onEntry="this.flex-shrink='0'; this.z-index='2';">
                        <lido-avatar id="lido-avatar" disableEdit="true" visible="true"  height="inherit"  width="inherit" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" altText="{chimpleCharacterRive}" onEntry="">
                        </lido-avatar>
                    </lido-cell>

                    <!-- Question Section -->
                    <lido-cell layout="pos" id="pos2" disableEdit="true" value="pos2" height="landscape.850px, portrait.710px" width="landscape.1225px, portrait.900px" x="landscape.155px, portrait.0px" y="landscape.60px, portrait.85px" ariaHidden="true" z="1" bg-color="transparent" visible="true"  onEntry="this.flex-shrink='0';">
                        <lido-image visible="true" id="question-board-image" width="100%" height="67%" bg-color="transparent" src="${questionBoardImage}" altText="{questionBoardImage}"  onEntry="">
                        </lido-image>
                    </lido-cell>

                    <lido-text visible="false" id="txt1" audio="" font-family="'Baloo 2', serif" font-size="52px" font-color="black" string="Solve the problem shown in the board and select the correct answer" bg-Color="transparent" onEntry="this.speak='true'; question-board-text.speak='true';" >
                    </lido-text>

                    <lido-cell layout="pos" id="pos3" value="pos3" x="landscape.445px, portrait.45px" y="landscape.115px, portrait.145px" visible="true" height="landscape.60%,portrait.10%" width="landscape.55%,portrait.92%" border-radius="7px" bg-color="transparent" onEntry="this.z-index='1';">
                        <lido-text visible="true" id="question-board-text" audio="" font-family="'Baloo 2', serif" font-size="landscape.60px, portrait.52px" font-color="black" string="${questionBoardText}" bg-Color="transparent" onEntry="this.font-weight='700'; this.textAlign='left'; this.lineHeight='1.25';" >
                        </lido-text>
                    </lido-cell>

                    <!-- Options Section -->
                    <lido-cell layout="landscape.row, portrait.wrap" id="option-row" aria-hidden="true" visible="true" height="landscape.40%,portrait.20%" width="landscape.95%, portrait.75%" bg-Color="transparent" margin="landscape.625px 0px 0px -70px,portrait.50px 0px 130px 0px" onEntry="this.z-index='1'; this.justify-content='center';" gap="landscape.175px,portrait.65px">
                        ${optionsCell}
                    </lido-cell>
                    
                    <!-- Invisible Text for Animation -->
                    <lido-cell layout="pos" id="invisible-text" disableEdit="true" value="pos3" height="landscape.10%, portrait.710px" width="landscape.75%, portrait.875px" x="landscape.325px, portrait.10px" y="landscape.740px, portrait.475px" ariaHidden="true" z="1" bg-color="transparent" visible="true"  onEntry="this.flex-shrink='0'; this.opacity='0'; this.z-index='0';">
                        <lido-text id="txt2" audio="" tab-index="6" height="inherit" width="inherit" visible="true" value="${escapedExpressionText}" string="${escapedExpressionText}" font-family="'Baloo Bhai 2'" font-color="white" font-size="104px"  bg-color="transparent" onCorrect="" onInCorrect="this.vibrate='horizontal-shake';" onEntry="this.font-weight='800'; this.borderRadius='10px'; this.flex-shrink='0';">
                        </lido-text>
                    </lido-cell>

                    <!-- Background animation -->
                    <lido-cell layout="pos" id="background-animation-plus-minus-1" value="pos5" height="600px" width="600px" x="landscape.475px, portrait.85px" y="landscape.-110px,portrait.-80px" ariaHidden="true" z="1" bg-color="transparent" visible="true" onEntry="this.opacity='0';">
                        <lido-math-matrix visible="true" rows="10" cols="${val1}" top-index="false" left-index="false" bottom-index="false" clickable="false" active-only-visible="true" active-bg-color="yellow" inactive-bg-color="black" defualt-fill="${num1}" matrix-image="${backgroundImagePlusSign1}"></lido-math-matrix>
                    </lido-cell>
                    <lido-cell layout="pos" id="background-animation-plus-minus-2" value="pos5" height="600px" width="600px" x="landscape.475px, portrait.85px" y="landscape.130px, portrait.75px" ariaHidden="true" z="1" bg-color="transparent" visible="true" onEntry="this.opacity='0';">
                        <lido-math-matrix visible="true" rows="10" cols="${val2}" top-index="false" left-index="false" bottom-index="false" clickable="false" active-only-visible="true" active-bg-color="yellow" inactive-bg-color="black" defualt-fill="${num2}" matrix-image="${backgroundImagePlusSign2}"></lido-math-matrix>
                    </lido-cell>

                    <lido-cell layout="pos" id="background-animation-multiplication" value="pos5" height="600px" width="600px" x="landscape.530px, portrait.125px" y="landscape.50px, portrait.15px" ariaHidden="true" z="1" bg-color="transparent" visible="true" onEntry="this.opacity='0';">
                        <lido-math-matrix visible="true" rows="${num1}" cols="${num2}" top-index="false" left-index="false" bottom-index="false" clickable="false" active-only-visible="true" active-bg-color="yellow" inactive-bg-color="black" defualt-fill="${result}" matrix-image="${backgroundImageMultiplicationSign}"></lido-math-matrix>
                    </lido-cell>

                </lido-container>
        </main>
    `
}