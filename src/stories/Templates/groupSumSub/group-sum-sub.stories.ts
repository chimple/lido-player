import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';


const meta: Meta = {
  title: 'Templates/groupSumSub',
  argTypes: {
    firstNum: { control: 'text' },
    operator: { control: 'text' },
    secondNum: { control: 'text' },
    equator: { control: 'text' },
    answer: { control: 'text' },
    options: { control: 'object' },
  },
};

export default meta;

export const numberBoard: StoryObj = {
  args: {
    firstNum: '8', operator: '-', secondNum: '1', equator: '=', answer: '7',
    options: [
      "-",
      "1",
      "8",
      "3",
      "=",
      "7"
    ],
  },
  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

function getContainerXml(args) {

let snum = parseInt(args.secondNum) ;
let ones = '';
for (let i = 0; i < snum; i++) {
  ones += '1';
  if (i < snum - 1) ones += '|';
}
let ones2 = '';
for (let i = 0; i < snum; i++) {
  ones2 += '1';
  if (i < snum - 1) ones2 += ',';
}

const escape = str => String(str ?? '').replace(/"/g, '&quot;');

const onesPart = snum === 1 ? escape(ones) : `(${escape(ones)})`;

const objectiveParts = [
  onesPart,
  escape(args.firstNum),
  escape(args.operator),
  escape(args.secondNum),
  escape(args.equator),
  escape(args.answer),
];

const objectiveString = objectiveParts.join(',');


  let tabCounter = 1;
  const { options = [] } = args;

  let Marbles = '';
for (let i = 0; i < parseInt(args.firstNum) ; i++) {
  Marbles += `
<lido-image visible="true" id="marble${tabCounter}" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/GroupSum/ball_fishtank.png" value="1" height="landscape.50px,portrait.50px" width="landscape.50px,portrait.50px" tab-index="${tabCounter++}" borderRadius="22px" type="drag"></lido-image>
  `;
}
  const DragCells = options
    .map((option) => {
      return `
        <lido-text visible="true"  onTouch="this.speak='true';" type="drag" id="GSdrag${tabCounter++}" tab-index="${tabCounter++}" height="landscape.140px,portrait.120px" width="landscape.140px,portrait.120px" bg-Color="blue" font-family="'Baloo Bhai 2'" font-size="100px" font-weigth="500" value="${option}" string="${option}" onEntry="this.color='black';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white ">
		</lido-text>
      `;
    })
    .join('');

  return `<main>
<lido-container id="lido-container" show-drop-border="false" appendToDropOnCompletion="false"  tab-index="1" value="mainContainer1" isAllowOnlyCorrect="true" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/bg.png" objective="${objectiveString}" height="100%" width="100%" bg-color="transparent" visible="true" dropAttr="groupSum" onCorrect="this.sleep='1000';lido-avatar.avatarAnimate='Success';xx.animation='placeToLeft 2s linear';tyre.animation='placeToLeft 2s linear';this.sleep='2000'; " onEntry="this.justifyContent='space-around'; this.animation='rightToPlace 2.5 linear';this.overflow='hidden';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="true" after-drop="false">
	<!-- Chimple Avatar -->
		<lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.417px,portrait.363px" width="landscape.280px,portrait.340px" x="landscape.1360px, portrait.597px" y="landscape.637px, portrait.1370px" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="">
			<lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
			</lido-avatar>
		</lido-cell>
			<lido-cell visible="true" id="Equation" layout="row" height="landscape.30%,portrait.40%" width="landscape.50%,portrait.70%" bg-color="transparent" margin="landscape.0,portrait.254px 0px -270px 0px" onEntry="this.alignItems='center';this.justify-content='space-around';" >
				<lido-image id="GSdrop1" height="landscape.140px,portrait.500px" filter="blue" width="landscape.140px,portrait.1200px" value="${args.firstNum}" visible="true" tab-index="11" is-allow-only-one-drop="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/GroupSum/answerboard_quickfacts.png" bg-Color="transparent" onCorrect="lido-avatar.avatarAnimate='Success';" type="drop"  ></lido-image>
				<lido-image id="GSdrop2" height="landscape.140px,portrait.500px" filter="blue" width="landscape.140px,portrait.1200px" value="${args.operator}" visible="true" tab-index="12" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/GroupSum/answerboard_quickfacts.png" bg-Color="transparent" onCorrect="lido-avatar.avatarAnimate='Success';" type="drop"  ></lido-image>
				<lido-image id="GSdrop3" height="landscape.140px,portrait.500px" filter="blue" width="landscape.140px,portrait.1200px" value="${args.secondNum}" visible="true" tab-index="13" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/GroupSum/answerboard_quickfacts.png" bg-Color="transparent" onCorrect="lido-avatar.avatarAnimate='Success';"  type="drop"  ></lido-image>
				<lido-image id="GSdrop4" height="landscape.140px,portrait.500px" filter="blue" width="landscape.140px,portrait.1200px" value="${args.equator}" visible="true" tab-index="14" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/GroupSum/answerboard_quickfacts.png" bg-Color="transparent" onCorrect="lido-avatar.avatarAnimate='Success';" type="drop"  ></lido-image>
				<lido-image id="GSdrop5" height="landscape.140px,portrait.500px" filter="blue" width="landscape.140px,portrait.1200px" value="${args.answer}" visible="true" tab-index="15" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/GroupSum/answerboard_quickfacts.png" bg-Color="transparent" onCorrect="lido-avatar.avatarAnimate='Success';" type="drop"  ></lido-image>
			</lido-cell>
		
		     <lido-cell visible="true" id="dragEle" layout="row" height="landscape.20%,portrait.40%" width="landscape.60%,portrait.20%" gap="15px" bg-color="transparent" margin="landscape.-32px 0px 0px 0px,portrait.0px 590px 162px 0px" onEntry="this.pointer-events='none';this.alignItems='center';this.justify-content='space-around';" >
				${DragCells}
			</lido-cell>
		
		<lido-cell visible="true" layout="pos" height="landscape.50px,portrait.0" width="landscape.50px,portrait.0" bg-color="transparent" x="landscape.400px,portrait.0" y="landscape.492px,portrait.1215px">
			<lido-text visible="true"  onTouch="this.speak='true';" id="dispalyTotal" height="landscape.140px,portrait.120px" width="landscape.140px,portrait.120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="80px" font-weigth="500" value="${args.firstNum}" string="${args.firstNum}" onEntry="this.color='black';this.fontWeight='600';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white ">
			</lido-text>
		</lido-cell>
		<lido-cell visible="true" layout="pos" height="landscape.50px,portrait.0" width="landscape.50px,portrait.0" bg-color="transparent" x="landscape.398px,portrait.0" y="landscape.770px,portrait.1478px">
			<lido-text visible="true"  onTouch="this.speak='true';" id="displayOut" height="landscape.140px,portrait.120px" width="landscape.140px,portrait.120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="80px" font-weigth="500" value="${args.secondNum}" string="${args.secondNum}" onEntry="this.color='black';this.fontWeight='600';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white ">
			</lido-text>
		</lido-cell>
		<lido-cell visible="true" id="displayans" layout="pos" height="landscape.50px,portrait.0" width="landscape.50px,portrait.0" bg-color="transparent" x="landscape.920px,portrait.552px" y="landscape.600px,portrait.1215px" onEntry="this.opacity='0';">
			<lido-text visible="true"  onTouch="this.speak='true';" id="displayAns" height="landscape.140px,portrait.120px" width="landscape.140px,portrait.120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="80px" font-weigth="500" value="${args.answer}" string="${args.answer}" onEntry="this.color='black';this.fontWeight='600';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white ">
			</lido-text>
		</lido-cell>

		<lido-cell visible="true" id="fishTank" layout="row" height="40%" width="90%" bg-color="transparent" margin="landscape.-26px 0px 0px 0px,portrait.0" tab-index="1" value="${ones2}" type="drop" onCorrect="lido-avatar.avatarAnimate='Success';">
			<lido-cell visible="true" layout="pos" height="40%" width="90%" bg-color="transparent" margin="landscape.-26px 0px 0px 0px,portrait.0" x="landscape.532px,portrait.54px" y="landscape.463px,portrait.1157px"  >
			<lido-image visible="true" id="tub1" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/GroupSum/tub_fishtank.png" height="landscape.505px,portrait.348px" width="landscape.544px,portrait.757px"  ></lido-image>
		</lido-cell>
		</lido-cell>
		<lido-cell layout="pos" visible="true" id="marbles" height="20%" width="landscape.20%,portrait.50%" x="landscape.624px,portrait.156px" y="landscape.620px,portrait.1157px" bg-color="transparent">
			<lido-cell layout="random" visible="true" height="100%" width="100%" bg-color="transparent">
				${Marbles}
			</lido-cell> 
			</lido-cell>
</lido-container>
</main>`;
}