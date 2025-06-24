import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

type Choice = {
  id: string;
  value: string;
  src: string;
};

type OpenWindowArgs = {
  objective: string;
  heading: string;
  choices: Choice[];
};

const meta: Meta<OpenWindowArgs> = {
  title: 'Templates/OpenWindowUI',
  argTypes: {
    objective: { control: 'text' },
    heading: { control: 'text' },
    choices: { control: 'object' },
  },
  args: {
    objective: 'city',
    heading: 'CITY',
    choices: [
      {
        id: 'choice1',
        value: 'city',
        src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/open_window/city.png',
      },
      {
        id: 'choice2',
        value: 'sun',
        src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/open_window/sun.png',
      },
    ],
  },
};

export default meta;

export const OpenWindow: StoryObj<OpenWindowArgs> = {
  render: args => {
    const xml = getOpenWindowXml(args);
    return html`<lido-home xml-data="${xml}" .xmlData="${xml}"></lido-home>`;
  },
};

function getOpenWindowXml(args: OpenWindowArgs): string {
  const headingLettersXml = args.heading
    .split('')
    .map(
      (char, i) => `
    <lido-text id="heading${i + 1}" tabIndex="${i + 2}" flexibleWidth="false" visible="true"
      borderImage="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/open_window/letter_bg.png"
      bgColor="transparent" width="180px" height="210px"
      string="${char}" fontColor="black" font="'Baloo 2', serif"
      font-size="146px" z="0"
      onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';">
    </lido-text>
  `,
    )
    .join('\n');

  const choicesXml = args.choices
    .map(
      choice => `
    <lido-cell visible="true" layout="col" width="250px" height="180px" value="${choice.value}" type="click" onEntry="this.background='white'; this.background-color='white !important'; this.box-shadow='white !important';">
      <lido-image id="${choice.id}" visible="true" src="${choice.src}"></lido-image>
    </lido-cell>
  `,
    )
    .join('\n');

  const speakLettersSequence = args.heading
    .split('')
    .map((_, i) => `heading${i + 1}.speak='true'; this.sleep='500';`)
    .join(' ');
  const speakSequence = `heading0.speak='true'; this.sleep='800'; ${speakLettersSequence}`;

  return `<main>
    <lido-container id="lido-container" tabIndex="1" 
      bgImage="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/open_window/Spring.png" 
      height="100%" width="100%" visible="true"
	    isContinueOnCorrect="true"
      onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" 
      onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" 
      onEntry="${speakSequence}"
      objective="${args.objective}" >
       	<lido-cell layout="row" visible="true" width="landscape.auto, portrait.80%" height="landscape.30%, portrait.10%" bgColor="transparent" margin="5%" onEntry="this.gap='45px';">
        	<lido-cell layout="row" visible="false">
            <lido-text id="heading0" string="${args.objective}"></lido-text>
          </lido-cell>
			${headingLettersXml}
		</lido-cell>
		<lido-cell layout="row" visible="true" width="75%" height="25%" bgColor="transparent" margin="5%">
			<lido-cell layout="pos" id="pos1" disableEdit="true" value="pos2" height="305px" width="227px" x="landscape.620px, portrait.270px" y="landscape.440px, portrait.1200px" ariaHidden="true" z="1" bgColor="transparent" visible="true" onEntry="this.padding-right=100px">
				<lido-image id="image" disableEdit="true" value="image" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/open_window/door.png" bgColor="transparent" width="195px" height="285px" x="landscape.80px, portrait.80px" y="landscape.90px, portrait.90px" altText="{shadowImage}"></lido-image>
				<lido-avatar id="lido-avatar" disableEdit="true" visible="true" height="480px" width="220px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" altText="{chimpleCharacterRive}" x="65px" y="-25px"></lido-avatar>
			</lido-cell>
        	${choicesXml}
      	</lido-cell>
    </lido-container>
  </main>`;
}
