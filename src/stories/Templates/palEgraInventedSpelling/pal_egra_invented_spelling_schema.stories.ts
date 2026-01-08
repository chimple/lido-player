import { html } from 'lit-html';
import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'Templates/InventedSpelling',
  argTypes: {
    PracticeMode: { control: 'boolean' },
    option1: { control: 'text' },
    option2: { control: 'text' },
    option3: { control: 'text' },
    option4: { control: 'text' },
    option5: { control: 'text' },
    correctAns: { control: 'text' },
  },
};
export default meta;

export const Default: StoryObj = {
  args: {
    PracticeMode: false,
    option1: 'kot',

    option2: 'loy',

    option3: 'fen',

    option4: 'dob',

    option5: 'vil',

    correctAns: 'toy',
  },

  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

function getContainerXml(args) {

  return `<main>
        <lido-container disable-speak="true" id="lido-container" objective="${(args.correctAns).toLowerCase()}" is-continue-on-correct="${args.PracticeMode}" template-id="mcq" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/background-images/Picture%20meaning.png" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onInCorrect="lido-avatar.avatarAnimate='Fail';" onEntry="inventedAudio.speak='true';" custom-style = "#audioCell:active {
  box-shadow: 0px 0px 0px !important;
  transform: translateY(7px);
}" >
	<lido-cell visible="true" layout="col" width="80%" height="90%" bg-color="transparent">
    <!-- Chimple Avatar -->
    <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.300px,portrait.402px" width="landscape.250px,portrait.398px" x="landscape.56%, portrait.28%" y="landscape.200px, portrait.77%" aria-hidden="true" z="1" bg-color="transparent" visible="true">
        <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv">
        </lido-avatar>
        <lido-image id="image" disableEdit="true" value="image" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/Shadow.png" bgColor="transparent" width="inherit" height="27px" x="0" y="235px">
        </lido-image>
    </lido-cell>

		<lido-text visible="true" string="Choose the rhyming word" tab-index="1" font-size="80px" font-color="#07004E" border-radius="16px" bg-color="#FFF5BB" onEntry="this.fontWeight='700'; this.border='#FFB612 2px solid'; this.padding='25px 50px';"></lido-text>
		<lido-text visible="false" id="inventedAudio" string="${args.correctAns}" tab-index="2" font-size="80px" font-color="#07004E" border-radius="16px" bg-color="#FFF5BB" onEntry="this.fontWeight='700'; this.border='#FFB612 2px solid'; this.padding='25px 50px';"></lido-text>
		<lido-cell visible="true" id="audioCell" layout="row" width="160px" height="160px" onTouch="inventedAudio.speak='true';" bg-color="white" border-radius="70px" onEntry="this.border='#ffac4c 2px solid'; this.boxShadow='0px 8px 0px #f34d08;'">
			<lido-image visible="true" bg-color="transparent" width="100px" height="100px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Icons/palAudioIcon.png"></lido-image>
		</lido-cell>
		<lido-cell layout="col" visible="true" width="100%" height="50%" bg-color="transparent" padding="0">
			<lido-cell layout="row" visible="true" width="70%" height="50%" bg-color="transparent">
				<lido-text visible="true" disable-speak="true" width="400px" height="136px" type="click" value="${(args.option1).toLowerCase()}" string="${args.option1}" font-size="110px" border-radius="20px" font-color="black" onEntry="this.fontWeight='700';"></lido-text>
				<lido-text visible="true" disable-speak="true" width="400px" height="136px" type="click" value="${(args.option2).toLowerCase()}" string="${args.option2}" font-size="110px" border-radius="20px" font-color="black" onEntry="this.fontWeight='700';"></lido-text>
			</lido-cell>
			<lido-cell layout="row" visible="true" width="100%" height="50%" bg-color="transparent">
				<lido-text visible="true" disable-speak="true" width="400px" height="136px" type="click" value="${(args.option3).toLowerCase()}" string="${args.option3}" font-size="110px" border-radius="20px" font-color="black" onEntry="this.fontWeight='700';"></lido-text>
				<lido-text visible="true" disable-speak="true" width="400px" height="136px" type="click" value="${(args.option4).toLowerCase()}" string="${args.option4}" font-size="110px" border-radius="20px" font-color="black" onEntry="this.fontWeight='700';"></lido-text>
				<lido-text visible="true" disable-speak="true" width="400px" height="136px" type="click" value="${(args.option5).toLowerCase()}" string="${args.option5}" font-size="110px" border-radius="20px" font-color="black" onEntry="this.fontWeight='700';"></lido-text>
			</lido-cell>
		</lido-cell>
	</lido-cell>
</lido-player>
</main>`;
}