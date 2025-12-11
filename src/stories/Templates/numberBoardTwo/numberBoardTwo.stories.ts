import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { string } from 'mathjs';

type TextColors = {
  colors: string[];
};

const meta: Meta = {
  title: 'Templates/numberBoardTwo',
  argTypes: {
    options: { control: 'object' },
    answers: { control: 'object' },
    colors: {
      control: 'object',
      description: 'Array of colors for the letters',
      defaultValue: ['#F34D08','#81C127','#FFC805','#F55376','#5D44BD'],
      isAllowOnlyCorrect: { control: 'boolean' },
    },
  },
};

export default meta;

export const numberBoard: StoryObj = {
  args: {
    options: [
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20"
    ],
    answers: [
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20"
    ],
    
	colors: ['#CF1565', '#409F5C', '#02C1C1', '#AD3184', '#F55376', '#81C127', '#5D44BD'],
  isAllowOnlyCorrect: true,
  },
  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

function getContainerXml(args) {
  let tabCounter = 1;
  const { options = [], answers = [], isAllowOnlyCorrect = true} = args;
  const pickedColors = args.colors;

  const DropCells = answers.map(answer => {
    const rows = string(Number(answer)<=10 ? 2 : 4);
    return `
		    <!-- drop --> 	
        <lido-cell layout="col" visible="true" margin="landscape.0,portrait.72px 0px -95px 0px" height="landscape.345px,portrait.350px" width="150px" bg-Color="#DFF2F2" onEntry="this.position='relative';this.align-items='center';this.justify-content='center';this.borderRadius='10px';">
					<lido-math-matrix id="mat1" rows="${rows}" cols="5"  defualtFill="${answer}" leftIndex="false" topIndex="false" clickable="true" matrixImage="" activeBgColor="#922E05" inactiveBgColor="transparent" border="5px soild transparent" height="70%" width="130%" visible="true" margin="landscape.0,portrait.-26px 0px 0px 0px">
          </lido-math-matrix>
					<lido-cell id="drop${tabCounter}" visible="true" height="landscape.110px,portrait.110px" width="landscape.110px,portrait.110px" bg-color="white" tab-index="${tabCounter++}" value="${answer}" string="${answer}" type="drop" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';">
          </lido-cell>
		    </lido-cell>
        `;
  }).join('');

  const DragCells = options
    .map((option) => {
        
	const color = pickedColors[Math.floor(Math.random() * pickedColors.length)];
      return `
        <lido-text visible="true"  onTouch="this.speak='true';" type="drag" id="drag${tabCounter}" tab-index="${tabCounter++}" height="landscape.110px,portrait.110px" width="landscape.110px,portrait.110px" bg-Color="white" font-family="'Baloo Bhai 2'" font-size="100px" font-weigth="500" value="${option}" string="${option}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0 " onEntry="this.color='${color}';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white ">
        </lido-text>
        `;
    })
    .join('');

  return `
      <main>
        <lido-container id="lido-container" show-drop-border="false" appendToDropOnCompletion="false" is-allow-only-correct="${isAllowOnlyCorrect}" drop-action="move" tab-index="1" value="mainContainer1"  bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/background-images/Number%20board.png" objective="${answers.join(',')}" height="100%" width="100%" bg-color="transparent" visible="true" onCorrect="this.sleep='1000';lido-avatar.avatarAnimate='Success';xx.animation='placeToLeft 2s linear';tyre.animation='placeToLeft 2s linear';trainAudio.speak='true';" onEntry="this.justifyContent='space-around'; this.animation='rightToPlace 2.5 linear';this.overflow='hidden';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="true" after-drop="false">

            <!-- Chimple Avatar -->
            <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.417px,portrait.363px" width="landscape.280px,portrait.340px" x="landscape.1360px, portrait.597px" y="landscape.637px, portrait.1370px" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="this.animation='rightToPlace 2.5s linear';">
              
              <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
              </lido-avatar>
            </lido-cell>

            <lido-image visible="true" id="tyre" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/wheel.png" height="119px" width="131px" onEntry=" this.position='relative'; this.animation='rightToPlace 2.5s linear';" x="landscape.299px, portrait.293px" y="landscape.768px, portrait.1092px" margin="">
            </lido-image>

            <lido-text id="trainAudio" visible="false" audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/train1.m4a" onEntry="this.speak='true'; question-text.speak='true';">
            </lido-text>
            <lido-text id="question-text" visible="false" audio="" string="drag the number to its correct place and complete the number puzzle" value="drag the number to its correct place and complete the number puzzle" onEntry="">
            </lido-text>
              
            <lido-cell visible="true" id="xx"  layout="landscape.row,portrait.col" height="90%" width="90%" bg-Color="transparent" margin="landscape.56px 0px 0px 0px,portrait.0px" onEntry="">
              <lido-cell visible="true" id="truck" layout="row" height="90%" width="1377px" bg-Color="transparent" margin="landscape.-169px 114px 39px -195px,portrait.-115px 0px 0px 0px" onEntry="this.animation='rightToPlace 2.5s linear';">
                <lido-image visible="true"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/truck.png" height="583px" width="502px" onEntry=" " margin="landscape.345px -40px 0px 55px,portrait.408px 67px -179px -107px">
                </lido-image>
                <lido-cell visible="true" height="landscape.100%,portrait.858px" width="landscape.858px,portrait.62%" bg-color="#F78315" margin="landscape.0px 0px 0px -18px,portrait.-124px 252px -238px -114px" onEntry=" this.place-items='center';this.gap='1px'; this.padding='0px'; this.gridTemplateColumns='repeat(auto-fill, minmax(143px, auto))';   this.gridTemplateRows='repeat(auto-fit, 362px)';  this.flexWrap='wrap';">
                  ${DropCells}
                </lido-cell>
              </lido-cell>
              
              <lido-cell layout="landscape.col,portrait.row" visible="true" height="landscape.71%,portrait.185px" width="landscape.12%,portrait.71%" bg-color="transparent" onEntry="  this.animation='rightToPlace 2.7s linear';" margin="landscape.-280px 102px 0px -73px,portrait.-108px 0px 151px -50px">
                ${DragCells}
              </lido-cell>
            </lido-cell>
        </lido-container>
      </main>
`;
}