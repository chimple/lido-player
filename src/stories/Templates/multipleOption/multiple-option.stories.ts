import { html } from 'lit-html';
import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'Templates/MultiOption',
  argTypes: {
    question: { control: 'text' },
    option1: { control: 'text' },
    optionImg1: { control: 'text' },
    option2: { control: 'text' },
    optionImg2: { control: 'text' },
    option3: { control: 'text' },
    optionImg3: { control: 'text' },
    option4: { control: 'text' },
    optionImg4: { control: 'text' },
    correctAns: { control: 'text' },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {
    question: 'Which animal is known as “the king of the jungle”?',
    option1: 'GIRAFFE',
    optionImg1: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/giraffe.png',
    option2: 'LEOPARD',
    optionImg2: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/leopard.png',
    option3: 'LION',
    optionImg3: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/lion.png',
    option4: 'TIGER',
    optionImg4: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/tiger.png',
    correctAns: 'LION',
  },

  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}}"></lido-home>`;
  },
};

function getContainerXml(args) {
  return `<main>
	<lido-container id="lido-container" customStyle=".redBg{background-color: red !important;} .greenBg{background-color: green !important; color: white !important;}" tabIndex="1" value="maincontainer" objective="${args.correctAns}" ariaLabel="This is a multiple-option question. Select one option from the list." height="100vh" width="100vw" x="0" y="0" z="0" bgColor="transparent" bgImage="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/MultipleOptionBg.png" visible="true" audio="background1.mp3" onTouch="" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" showCheck="false" isContinueOnCorrect="true">
		<!-- Audio Icon -->
		<lido-pos id="pos" disableEdit="true" value="pos" height="100px" width="100px" ariaHidden="true" x="0" y="0" z="2" bgColor="transparent" type="" visible="true" audio="" onTouch="" onCorrect="" onEntry="">
			<lido-image id="play" disableEdit="true" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets//Audio%20icon.png" width="100px" height="100px" bgColor="transparent" x="35px" y="50px" onTouch="this.visibilty='hidden'; pause.visibility='visible'; question.speak='true'; option1.speak='true'; option2.speak='true'; option3.speak='true'; option4.speak='true'; option5.speak='true'; option6.speak='true'; this.visibilty='visible'; pause.visibility='hidden';">
			</lido-image>
			<lido-image id="pause" disableEdit="true" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets//pause.png" width="100px" height="100px" bgColor="transparent" x="35px" y="50px" onTouch="this.stop='true'; this.visibility='hidden'; play.visibility='visible';" onEntry="this.visibility='hidden';">
			</lido-image>
		</lido-pos>

		<!-- Background -->
		<!-- <lido-pos id="pos" disableEdit="true" value="pos" height="1600px" width="1600px" ariaHidden="true" x="0" y="0" z="0" bgColor="transparent" type="" visible="true" audio="" onTouch="" onCorrect="" onEntry="">
			<lido-image id="image" value="image" disableEdit="true" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets//lake.jpg" z="0" width="1600px" height="1600px" onEntry="" altText="{backgroundImage}">
			</lido-image>
		</lido-pos> -->
		<!-- Chimple Avatar -->
		<lido-pos id="pos1" disableEdit="true" value="pos1" height="350px" width="350px" x="landscape.-10px, portrait.100px
		" y="507px" ariaHidden="true" z="2" bgColor="transparent" type="" visible="true" audio="" onTouch="" onCorrect="" onEntry="this.animation='leftToPlace 1.5s linear';">
			<lido-avatar id="lido-avatar" disableEdit="true" visible="true" height="350px" width="350px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/chimplecharacter.riv" altText="{chimpleCharacterRive}" bgColor="transparent">
			</lido-avatar>
			<lido-image id="image1" disableEdit="true" value="image1" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/Shadow.png" bgColor="transparent" width="186px" height="40px" x="77px" y="302px" altText="{shadowImgae}">
			</lido-image>
		</lido-pos>
		<!-- Question -->
		<lido-pos id="question" value="pos2" visible="true" height="150px" width="1050px" bgColor="transparent" z="0" x="260px" y="80px" onEntry="this.animation='topToPlace 0.5s linear';">
			<lido-image id="image2" disableEdit="true" value="image2" visible="true" height="150px" width="1050px" bgColor="transparent" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/questionBg.png" z="0" >
			</lido-image>
			<lido-text id="textA" tabIndex="2" value="{question.id}" visible="true" width="1000px" height="100px" onEntry="this.boxShadow='unset'; this.fontWeight='800'; this.marginBottom='50px';" string="${args.question}" font="'Baloo 2', serif" font-size="40px" fontColor="black" bgColor="transparent" z="0" x="25px" y="20px">
			</lido-text>
		</lido-pos>
		<!-- Options -->
		<lido-pos id="pos3" disableEdit="true" value="pos3" visible="true" height="0" width="" bgColor="transparent" x="" y="" z="1" onEntry="this.animation='bottomToPlace 1s linear'; this.display='grid'; this.placeItems='center';">
			<lido-image id="image3" disableEdit="true" value="image3" visible="true" height="515px" width="1300px" z='-1' y="300px" bgColor="transparent" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/optionsBg.png">
			</lido-image>
			<lido-row id="row" value="row" visible="true" width="auto" height="260px" bgColor="transparent" y="425px" onEntry="this.gap='20px';">
					<lido-col id="option1" value="${args.option1}" visible="true" width="auto" height="230px" type="click" onEntry="this.border='3px solid #F3A040'; this.borderRadius='24px'; " onInCorrect="this.border='8px solid red';" onCorrect=" this.border='8px solid #65BC46';" bgColor="#FFAC4C">
						<lido-image id="{options[0].id}" tabIndex="3" value="image4" visible="true" width="170px" height="170px" src="${args.optionImg1}" bgColor="transparent" onEntry="this.marginTop='5px';" altText="{option[0].image}">
						</lido-image>
						<lido-text id="{options[0].id}" tabIndex="4" value="{options[0].id}" visible="true" width="220px" flexibleWidth="false" font="'Baloo 2', serif"  font-size="36px" fontColor="black" string="${args.option1}" bgColor="white" onEntry="this.boxShadow='unset'; this.fontWeight='800'; this.borderRadius='20px'; this.marginTop='10px';">
						</lido-text>
					</lido-col>
					<lido-col id="option2" value="${args.option2}" visible="true" width="auto" height="230px" type="click" onEntry="this.border='3px solid #F3A040'; this.borderRadius='24px';" onInCorrect="this.border='8px solid red';" onCorrect="this.border='8px solid #65BC46';
					this.transform= 'scale(1.05)';" bgColor="#FFAC4C"> 
						<lido-image id="{options[1].id}" tabIndex="5" value="image5" visible="true" width="170px" height="170px" src="${args.optionImg2}" bgColor="transparent" onEntry="this.marginTop='5px';" altText="{options[1].image}">
						</lido-image>
						<lido-text id="{options[1].id}" tabIndex="6" value="{options[1].id}" visible="true" width="220px" flexibleWidth="false" font="'Baloo 2', serif" font-size="36px" fontColor="black" string="${args.option2}" bgColor="white" onEntry="this.boxShadow='unset'; this.fontWeight='800'; this.borderRadius='20px'; this.marginTop='10px';">
						</lido-text>
					</lido-col>
					<lido-col id="option3" value="${args.option3}" visible="true" width="auto" height="230px" type="click" onEntry="this.border='3px solid #F3A040'; this.borderRadius='24px';" onInCorrect="this.border='8px solid red';" onCorrect="this.border='8px solid #65BC46';" bgColor="#FFAC4C">
						<lido-image id="{options[2].id}" tabIndex="7" value="image6" visible="true" width="170px" height="170px" src="${args.optionImg3}" bgColor="transparent" onEntry="this.marginTop='5px';" altText="{option[2].image}">
						</lido-image>
						<lido-text id="{options[2].id}" tabIndex="8" value="{options[2].id}" visible="true" width="220px" flexibleWidth="false" font="'Baloo 2', serif" font-size="36px" fontColor="black" string="${args.option3}" bgColor="white" onEntry="this.boxShadow='unset'; this.fontWeight='800'; this.borderRadius='20px'; this.marginTop='10px';">
						</lido-text>
					</lido-col>
					<lido-col id="option4" value="${args.option4}" visible="true" width="auto" height="230px" type="click" onEntry="this.border='3px solid #F3A040'; this.borderRadius='24px';" onInCorrect="this.border='8px solid red';" onCorrect="this.border='8px solid #65BC46';" bgColor="#FFAC4C">
						<lido-image id="{options[3].id}" tabIndex="9" value="image7" visible="true" width="170px" height="170px" src="${args.optionImg4}" bgColor="transparent" onEntry="this.marginTop='5px';" altText="{options[3].image}">
						</lido-image>
						<lido-text id="{options[3].id}" tabIndex="10" value="{options[3].id}" visible="true" width="220px" flexibleWidth="false" font="'Baloo 2', serif" font-size="36px" fontColor="black" string="${args.option4}" bgColor="white" onEntry="this.boxShadow='unset'; this.fontWeight='800'; this.borderRadius='20px'; this.marginTop='10px';">
						</lido-text>
					</lido-col>
			</lido-row>
		</lido-pos>
	</lido-container>
</main>`;
}
