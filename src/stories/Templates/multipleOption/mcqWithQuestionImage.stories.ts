import { html } from 'lit-html';
import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'Templates/MCQWithQuestionImage',
  argTypes: {
    question: { control: 'text' },
    questionImg: { control: 'file' },
    option1: { control: 'text' },
    audio1: { control: 'text' },
    optionImg1: { control: 'file' },
    audio2: { control: 'text' },
    option2: { control: 'text' },
    optionImg2: { control: 'file' },
    option3: { control: 'text' },
    audio3: { control: 'text' },
    optionImg3: { control: 'file' },
    option4: { control: 'text' },
    audio4: { control: 'text' },
    optionImg4: { control: 'file' },
    correctAns: { control: 'text' },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {
    question: 'I have less than double of 3 marbles. I have more than half of 8 marbles. How many marbles do I have?',
    questionImg: "https://aeakbcdznktpsbrfsgys.storage.supabase.co/v1/object/public/template-assets/fill-in-the-blanks/image%201.png",
    option1: 'A square and a circle',
    audio1: '',
    optionImg1: '',
    option2: 'A square and a rectangle',
    audio2: '',
    optionImg2: '',
    option3: 'A triangle and a square',
    audio3: '',
    optionImg3: '',
    option4: 'A circle and a rectangle',
    audio4: '',
    optionImg4: '',
    correctAns: 'A square and a rectangle',
  },

  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}}"></lido-home>`;
  },
};



function getContainerXml(args) {  
  const questionImage = args.questionImg.length === 0 ? "" : `<lido-image visible="true" bg-color="white" height="landscape.80%, portrait.35%" src="${args.questionImg}" border-radius="6px" onEntry="this.border='5px solid white';"></lido-image>`;
  return `<main>
			<lido-container id="lido-container" value="maincontainer" objective="${args.correctAns}" aria-label="This is a multiple-option question. Select one option from the list." height="100vh" width="100vw" x="0" y="0" z="0" bg-color="transparent" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/Sky.png" visible="true" audio="background1.mp3" onTouch="" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="true" onEntry="">

		<!-- Chimple Avatar -->
		<lido-cell layout="pos" id="pos1" disable-edit="true" value="pos1" height="300px" width="300px" x="landscape.1330px, portrait.653px" y="landscape.590px, portrait.1280px" aria-hidden="true" z="2" bg-color="transparent" type="" visible="true" audio="" onTouch="" onCorrect="">
			<lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/chimplecharacter.riv" alt-text="{chimpleCharacterRive}" bg-color="transparent">
			</lido-avatar>
			<lido-image id="image1" disable-edit="true" value="image1" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/Shadow.png" bg-color="transparent" width="186px" height="40px" x="55px" y="248px" alt-text="{shadowImgae}">
			</lido-image>
		</lido-cell>

		<lido-cell visible="true" layout="col" width="100%" height="100%" bg-color="transparent">
			<lido-text visible="true" width="80%" height="10%" bg-color="transparent"></lido-text>
			<lido-text tab-index="1" visible="true" id="lido-question" width="landscape.65%, portrait.80%" height="10%" bg-color="#FFF5BB" string="${args.question}" border-radius="16px" onEntry="this.border='1px solid black'; this.fontWeight='500'; this.padding='50px';" font-size="36px"></lido-text>
			<lido-cell visible="true" width="68%" height="landscape.68%, portrait.90%" bg-color="transparent" layout="landscape.row, portrait.col"  margin="landscape.0, portrait.-108px 0 0 0">
					${questionImage}

					<lido-cell visible="true" layout="wrap" width="landscape.40%, portrait.80%" height="landscape.97%, portrait.auto" bg-color="transpernt" gap="40px" onEntry="" margin="landscape.0, portrait.-195px 0 0 0">

							<lido-cell tab-index="2" visible="true" show-speak-icon="true" layout="col" width="100%" type="click" audio="${args.audio1}" value="${args.option1}" height="landscape.250px, portrait.250px" onEntry="this.borderRadius='25px'; this.padding='0';" onCorrect="this.border='8px solid green';" onInCorrect="this.border='8px solid red';" >
								${args.optionImg1.length === 0 ? "" : `<lido-image visible="true" src="${args.optionImg1}" bg-color="transparent" width="90%" height="auto" border-radius="25px 25px 0 0" onEntry="this.marginTop='10px';"></lido-image>`}
								<lido-text visible="true" font-size="36px" font-color="black" string="${args.option1}" width="fit-content" bg-color="transparent" onEntry="this.fontWeight='500'; this.padding='0 20px';"></lido-text>
							</lido-cell>
							<lido-cell tab-index="3" visible="true" show-speak-icon="true" layout="col" width="100%" type="click" audio="${args.audio2}" value="${args.option2}" height="landscape.250px, portrait.250px" onEntry="this.borderRadius='25px'; this.padding='0'; " onCorrect="this.border='8px solid green';" onInCorrect="this.border='8px solid red';" >
								${args.optionImg2.length === 0 ? "" : `<lido-image visible="true" src="${args.optionImg2}" bg-color="transparent" width="90%" height="auto" border-radius="25px 25px 0 0" onEntry="this.marginTop='10px';"></lido-image>`}
								<lido-text visible="true" font-size="36px" font-color="black" string="${args.option2}"  width="fit-content" bg-color="transparent" onEntry="this.fontWeight='500'; this.padding='0 20px';"></lido-text>
							</lido-cell>
							<lido-cell tab-index="4" visible="true" show-speak-icon="true" layout="col" width="100%" type="click" audio="${args.audio3}" value="${args.option3}" height="landscape.250px, portrait.250px" onEntry="this.borderRadius='25px'; this.padding='0'; " margin="landscape.0, portrait.20px 0 0 0" onCorrect="this.border='8px solid green';" onInCorrect="this.border='8px solid red';">
								${args.optionImg3.length === 0 ? "" : `<lido-image visible="true" src="${args.optionImg3}" bg-color="transparent" width="90%" height="auto" border-radius="25px 25px 0 0" onEntry="this.marginTop='10px';"></lido-image>`}
								<lido-text visible="true" font-size="36px" font-color="black" string="${args.option3}" width="fit-content" bg-color="transparent" onEntry="this.fontWeight='500'; this.padding='0 20px';"></lido-text>
							</lido-cell>
							<lido-cell tab-index="5" visible="true"  show-speak-icon="true" layout="col" width="100%" type="click" audio="${args.audio4}" value="${args.option4}" height="landscape.250px, portrait.250px" onEntry="this.borderRadius='25px'; this.padding='0'; " margin="landscape.0, portrait.20px 0 0 0" onCorrect="this.border='8px solid green';" onInCorrect="this.border='8px solid red';" >
								${args.optionImg4.length === 0 ? "" : `<lido-image visible="true" src="${args.optionImg4}" bg-color="transparent" width="90%" height="auto" border-radius="25px 25px 0 0" onEntry="this.marginTop='10px';"></lido-image>`}
								<lido-text visible="true" font-size="36px" font-color="black" string="${args.option4}" bg-color="transparent" onEntry="this.fontWeight='500'; this.padding='0 20px';"></lido-text>
							</lido-cell>
							
					</lido-cell>
			</lido-cell>

		</lido-cell>

	</lido-container>
</main>`;
}
