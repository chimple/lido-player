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
  backgroundImage: string[];
  choice1Text: string;
  choice1ImageUrl: string[];
  choice2Text: string;
  choice2ImageUrl: string[];
};

const meta: Meta<OpenWindowArgs> = {
  title: 'Templates/OpenWindowUI2',
  argTypes: {
    objective: { control: 'text' },
    heading: { control: 'text' },
    backgroundImage: { control: 'file', name: 'Background Image URL', multiple: true },
    choice1Text: { control: 'text', name: 'Choice 1 Text' },
    choice1ImageUrl: { control: 'file', name: 'Choice 1 Image URL', multiple: true },
    choice2Text: { control: 'text', name: 'Choice 2 Text' },
    choice2ImageUrl: { control: 'file', name: 'Choice 2 Image URL', multiple: true },
  },
  args: {
    objective: 'city',
    heading: 'CITY',
    backgroundImage: ['https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/open_window/Spring.png'],
    choice1Text: 'city',
    choice1ImageUrl: ['https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/open_window/city.png'],
    choice2Text: 'sun',
    choice2ImageUrl: ['https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/open_window/sun.png'],
  },
};

export default meta;

export const OpenWindow: StoryObj<OpenWindowArgs> = {
  args: {
    objective: "mom",
    heading: "MOM",
    choice2Text: "mom",
    choice2ImageUrl: ["https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/open_window/mom.png"]
  },

  render: args => {
    const xml = getOpenWindowXml(args);
    return html`<lido-home xml-data="${xml}" .xmlData="${xml}"></lido-home>`;
  }
};

function getOpenWindowXml(args: OpenWindowArgs): string {
  const choices: Choice[] = [
    {
      id: 'choice1',
      value: args.choice1Text,
      src: args.choice1ImageUrl[0],
    },
    {
      id: 'choice2',
      value: args.choice2Text,
      src: args.choice2ImageUrl[0],
    },
  ];

  const choicesXml = choices
    .map(
      choice => `
        <lido-cell visible="true" layout="col" width="250px" height="180px" value="${choice.value}" type="click" onEntry="this.background='white'; this.background-color='white !important'; this.box-shadow='white !important'; this.borderRadius='8px';" onInCorrect="this.vibrate='horizontal-shake';" onCorrect="this.cellBorderAnimate='#65BC46';">
          <lido-image id="${choice.id}" visible="true" src="${choice.src}">
          </lido-image>
        </lido-cell>
      `,
    )
    .join('\n');

  const speakSequence = `heading.speak='true'; this.sleep='800';`;

  return `
  <main>
    <lido-container id="lido-container" tab-index="1" bg-image="${args.backgroundImage}" height="100%" width="100%" visible="true" is-continue-on-correct="true" onCorrect="${speakSequence} lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" onEntry="${speakSequence}" objective="${args.objective}" >
      <lido-cell layout="row" visible="true" width="landscape.auto, portrait.80%" height="landscape.30%, portrait.10%" bg-color="transparent" margin="5%" onEntry="">
        <lido-text id="heading" tab-index="2" visible="true" border-image="" bg-color="transparent" width="350px" height="210px" string="${args.heading}" font-color="black" font-family="'Baloo 2', serif" font-size="146px" z="0"
        onEntry="this.borderRadius='6px'; this.boxShadow='unset'; this.fontWeight='800';"  audio="">
        </lido-text>
		  </lido-cell>
      <lido-cell layout="row" visible="true" width="75%" height="25%" bg-color="transparent" margin="5%">
        <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="305px" width="227px" x="landscape.620px, portrait.270px" y="landscape.440px, portrait.1200px" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="this.padding-right=100px">
          <lido-image id="image" disable-edit="true" value="image" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/open_window/door.png" bg-color="transparent" width="195px" height="285px" x="landscape.80px, portrait.80px" y="landscape.90px, portrait.90px" alt-text="{shadowImage}">
          </lido-image>
          <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="480px" width="220px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}" x="65px" y="-25px">
          </lido-avatar>
        </lido-cell>
        ${choicesXml}
      	</lido-cell>
    </lido-container>

    <lido-container id="lido-container" tab-index="1" bg-image="${args.backgroundImage}" height="100%" width="100%" visible="true" is-continue-on-correct="true" onCorrect="${speakSequence} lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" onEntry="${speakSequence}" objective="${args.objective}" >
      <lido-cell layout="row" visible="true" width="landscape.auto, portrait.80%" height="landscape.30%, portrait.10%" bg-color="transparent" margin="5%" onEntry="">
        <lido-text id="heading" tab-index="2" visible="true" border-image="" bg-color="transparent" width="350px" height="210px" string="${args.heading}" font-color="black" font-family="'Baloo 2', serif" font-size="146px" z="0"
        onEntry="this.borderRadius='6px'; this.boxShadow='unset'; this.fontWeight='800';"  audio="">
        </lido-text>
		  </lido-cell>
      <lido-cell layout="row" visible="true" width="75%" height="25%" bg-color="transparent" margin="5%">
        <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="305px" width="227px" x="landscape.620px, portrait.270px" y="landscape.440px, portrait.1200px" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="this.padding-right=100px">
          <lido-image id="image" disable-edit="true" value="image" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/open_window/door.png" bg-color="transparent" width="195px" height="285px" x="landscape.80px, portrait.80px" y="landscape.90px, portrait.90px" alt-text="{shadowImage}">
          </lido-image>
          <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="480px" width="220px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}" x="65px" y="-25px">
          </lido-avatar>
        </lido-cell>
        ${choicesXml}
      	</lido-cell>
    </lido-container>
  </main>`;
}