import { html } from 'lit-html';
import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'Templates/LetterIdentification',
  argTypes: {
    PracticeMode: { control: 'boolean' },
    template: { control: 'select' , options: ['Template1', 'Template2'] },
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
    template: ['Template1'],
    option1: 'A',

    option2: 'D',

    option3: 'E',

    option4: 'B',

    option5: 'C',

    correctAns: 'A',
  },

  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

function getContainerXml(args) {

  return `<main>
    <lido-container objective="${(args.correctAns)}" is-continue-on-correct="${args.PracticeMode}" show-next-button="true" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/background-images/Write%20Set.png" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onInCorrect="lido-avatar.avatarAnimate='Fail';">
	<lido-col visible="true" width="100%" height="80%" bg-color="transparent">
		
        <!-- Chimple Avatar -->
        <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.400px,portrait.402px" width="landscape.350px,portrait.398px" x="landscape.60%, portrait.28%" y="landscape.50px, portrait.77%" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="">
          <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv">
          </lido-avatar>
		  <lido-image id="image" disableEdit="true" value="image" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/Shadow.png" bgColor="transparent" width="inherit" height="27px" x="0" y="330px">
		  </lido-image>
        </lido-cell>

		<lido-text visible="${args.template === 'Template1'}" width="300px" height="300px" tab-index="1"  bg-color="#fff5bb" string="${(args.correctAns).toLowerCase()}" font-size="150px" border-radius="20px" font-color="black" onEntry="this.fontWeight='700'; this.border='#ffac4c 2px solid'; this.speak='true';"></lido-text>
		
		<lido-cell visible="${args.template !== 'Template1'}" layout="row" width="300px" height="300px" bg-color="white" border-radius="130px" onEntry="this.border='#ffac4c 2px solid';">
			<lido-image visible="true" bg-color="transparent" width="200px" height="200px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Icons/palAudioIcon.png"></lido-image>
		</lido-cell>

		<lido-row visible="true" width="80%" height="50%" bg-color="transparent">
			<lido-text visible="true" width="220px" height="220px" type="click" value="${args.option1}" string="${args.option1}" font-size="120px" border-radius="20px" font-color="black" onEntry="this.fontWeight='700';"></lido-text>
			<lido-text visible="true" width="220px" height="220px" type="click" value="${args.option2}" string="${args.option2}" font-size="120px" border-radius="20px" font-color="black" onEntry="this.fontWeight='700';"></lido-text>
			<lido-text visible="true" width="220px" height="220px" type="click" value="${args.option3}" string="${args.option3}" font-size="120px" border-radius="20px" font-color="black" onEntry="this.fontWeight='700';"></lido-text>
			<lido-text visible="true" width="220px" height="220px" type="click" value="${args.option4}" string="${args.option4}" font-size="120px" border-radius="20px" font-color="black" onEntry="this.fontWeight='700';"></lido-text>
			<lido-text visible="true" width="220px" height="220px" type="click" value="${args.option5}" string="${args.option5}" font-size="120px" border-radius="20px" font-color="black" onEntry="this.fontWeight='700';"></lido-text>
		</lido-row>
	</lido-col>
</lido-container>
</main>`;
}