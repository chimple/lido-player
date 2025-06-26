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
	<lido-container id="lido-container" customStyle=".redBg{background-color: red !important;} .greenBg{background-color: green !important; color: white !important;}" tab-index="1" value="maincontainer" objective="${args.correctAns}" aria-label="This is a multiple-option question. Select one option from the list." height="100vh" width="100vw" x="0" y="0" z="0" bg-color="transparent" bgImage="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/MultipleOptionBg.png" visible="true" audio="background1.mp3" onTouch="" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="true">
		<!-- Audio Icon -->
		<lido-pos id="pos" disable-edit="true" value="pos" height="100px" width="100px" aria-hidden="true" x="0" y="0" z="2" bg-color="transparent" type="" visible="true" audio="" onTouch="" onCorrect="" onEntry="">
			<lido-image id="play" disable-edit="true" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets//Audio%20icon.png" width="100px" height="100px" bg-color="transparent" x="35px" y="50px" onTouch="this.visibilty='hidden'; pause.visibility='visible'; question.speak='true'; option1.speak='true'; option2.speak='true'; option3.speak='true'; option4.speak='true'; option5.speak='true'; option6.speak='true'; this.visibilty='visible'; pause.visibility='hidden';">
			</lido-image>
			<lido-image id="pause" disable-edit="true" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets//pause.png" width="100px" height="100px" bg-color="transparent" x="35px" y="50px" onTouch="this.stop='true'; this.visibility='hidden'; play.visibility='visible';" onEntry="this.visibility='hidden';">
			</lido-image>
		</lido-pos>

		<!-- Background -->
		<!-- <lido-pos id="pos" disable-edit="true" value="pos" height="1600px" width="1600px" aria-hidden="true" x="0" y="0" z="0" bg-color="transparent" type="" visible="true" audio="" onTouch="" onCorrect="" onEntry="">
			<lido-image id="image" value="image" disable-edit="true" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets//lake.jpg" z="0" width="1600px" height="1600px" onEntry="" alt-text="{backgroundImage}">
			</lido-image>
		</lido-pos> -->
		<!-- Chimple Avatar -->
		<lido-pos id="pos1" disable-edit="true" value="pos1" height="350px" width="350px" x="landscape.-10px, portrait.100px
		" y="507px" aria-hidden="true" z="2" bg-color="transparent" type="" visible="true" audio="" onTouch="" onCorrect="" onEntry="this.animation='leftToPlace 1.5s linear';">
			<lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="350px" width="350px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/chimplecharacter.riv" alt-text="{chimpleCharacterRive}" bg-color="transparent">
			</lido-avatar>
			<lido-image id="image1" disable-edit="true" value="image1" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/Shadow.png" bg-color="transparent" width="186px" height="40px" x="77px" y="302px" alt-text="{shadowImgae}">
			</lido-image>
		</lido-pos>
		<!-- Question -->
		<lido-pos id="question" value="pos2" visible="true" height="150px" width="1050px" bg-color="transparent" z="0" x="260px" y="80px" onEntry="this.animation='topToPlace 0.5s linear';">
			<lido-image id="image2" disable-edit="true" value="image2" visible="true" height="150px" width="1050px" bg-color="transparent" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/questionBg.png" z="0" >
			</lido-image>
			<lido-text id="textA" tab-index="2" value="{question.id}" visible="true" width="1000px" height="100px" onEntry="this.boxShadow='unset'; this.fontWeight='800'; this.marginBottom='50px';" string="${args.question}" font-family="'Baloo 2', serif" font-size="40px" font-color="black" bg-color="transparent" z="0" x="25px" y="20px">
			</lido-text>
		</lido-pos>
		<!-- Options -->
		<lido-pos id="pos3" disable-edit="true" value="pos3" visible="true" height="0" width="" bg-color="transparent" x="" y="" z="1" onEntry="this.animation='bottomToPlace 1s linear'; this.display='grid'; this.placeItems='center';">
			<lido-image id="image3" disable-edit="true" value="image3" visible="true" height="515px" width="1300px" z='-1' y="300px" bg-color="transparent" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/optionsBg.png">
			</lido-image>
			<lido-row id="row" value="row" visible="true" width="auto" height="260px" bg-color="transparent" y="425px" onEntry="this.gap='20px';">
					<lido-col id="option1" value="${args.option1}" visible="true" width="auto" height="230px" type="click" onEntry="this.border='3px solid #F3A040'; this.borderRadius='24px'; " onInCorrect="this.border='8px solid red';" onCorrect=" this.border='8px solid #65BC46';" bg-color="#FFAC4C">
						<lido-image id="{options[0].id}" tab-index="3" value="image4" visible="true" width="170px" height="170px" src="${args.optionImg1}" bg-color="transparent" onEntry="this.marginTop='5px';" alt-text="{option[0].image}">
						</lido-image>
						<lido-text id="{options[0].id}" tab-index="4" value="{options[0].id}" visible="true" width="220px" flexible-width="false" font-family="'Baloo 2', serif"  font-size="36px" font-color="black" string="${args.option1}" bg-color="white" onEntry="this.boxShadow='unset'; this.fontWeight='800'; this.borderRadius='20px'; this.marginTop='10px';">
						</lido-text>
					</lido-col>
					<lido-col id="option2" value="${args.option2}" visible="true" width="auto" height="230px" type="click" onEntry="this.border='3px solid #F3A040'; this.borderRadius='24px';" onInCorrect="this.border='8px solid red';" onCorrect="this.border='8px solid #65BC46';
					this.transform= 'scale(1.05)';" bg-color="#FFAC4C"> 
						<lido-image id="{options[1].id}" tab-index="5" value="image5" visible="true" width="170px" height="170px" src="${args.optionImg2}" bg-color="transparent" onEntry="this.marginTop='5px';" alt-text="{options[1].image}">
						</lido-image>
						<lido-text id="{options[1].id}" tab-index="6" value="{options[1].id}" visible="true" width="220px" flexible-width="false" font-family="'Baloo 2', serif" font-size="36px" font-color="black" string="${args.option2}" bg-color="white" onEntry="this.boxShadow='unset'; this.fontWeight='800'; this.borderRadius='20px'; this.marginTop='10px';">
						</lido-text>
					</lido-col>
					<lido-col id="option3" value="${args.option3}" visible="true" width="auto" height="230px" type="click" onEntry="this.border='3px solid #F3A040'; this.borderRadius='24px';" onInCorrect="this.border='8px solid red';" onCorrect="this.border='8px solid #65BC46';" bg-color="#FFAC4C">
						<lido-image id="{options[2].id}" tab-index="7" value="image6" visible="true" width="170px" height="170px" src="${args.optionImg3}" bg-color="transparent" onEntry="this.marginTop='5px';" alt-text="{option[2].image}">
						</lido-image>
						<lido-text id="{options[2].id}" tab-index="8" value="{options[2].id}" visible="true" width="220px" flexible-width="false" font-family="'Baloo 2', serif" font-size="36px" font-color="black" string="${args.option3}" bg-color="white" onEntry="this.boxShadow='unset'; this.fontWeight='800'; this.borderRadius='20px'; this.marginTop='10px';">
						</lido-text>
					</lido-col>
					<lido-col id="option4" value="${args.option4}" visible="true" width="auto" height="230px" type="click" onEntry="this.border='3px solid #F3A040'; this.borderRadius='24px';" onInCorrect="this.border='8px solid red';" onCorrect="this.border='8px solid #65BC46';" bg-color="#FFAC4C">
						<lido-image id="{options[3].id}" tab-index="9" value="image7" visible="true" width="170px" height="170px" src="${args.optionImg4}" bg-color="transparent" onEntry="this.marginTop='5px';" alt-text="{options[3].image}">
						</lido-image>
						<lido-text id="{options[3].id}" tab-index="10" value="{options[3].id}" visible="true" width="220px" flexible-width="false" font-family="'Baloo 2', serif" font-size="36px" font-color="black" string="${args.option4}" bg-color="white" onEntry="this.boxShadow='unset'; this.fontWeight='800'; this.borderRadius='20px'; this.marginTop='10px';">
						</lido-text>
					</lido-col>
			</lido-row>
		</lido-pos>
	</lido-container>
</main>`;
}
