import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

interface SceneArgs {
  objective: string;
  heading: string;
}

const meta: Meta = {
  title: 'Templates/OpenWindow',
  argTypes: {
    objective: { control: 'text' },
    heading: { control: 'text' },
  },
};
export default meta;

export const OpenWindow: StoryObj<SceneArgs> = {
  args: {
    objective: "mom",
    heading: "MOM",
  },
  render: (args: SceneArgs) => {
    const xml = getOpenWindowXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

function getOpenWindowXml(args: SceneArgs): string {
  const letters = args.heading.split('').map((char, i) => `
    <lido-text id="heading${i + 1}" tabIndex="${i + 2}" flexibleWidth="false" visible="true"
      borderImage="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/open_window/letter_bg.png"
      bgColor="transparent" width="180px" height="210px"
      string="${char}" fontColor="black" font="'Baloo 2', serif"
      font-size="146px" z="0"
      onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';">
    </lido-text>
  `).join('');

  return `<main>
    <lido-container id="lido-container" tabIndex="1"
      bgImage="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/open_window/Background_Spring.png"
      objective="${args.objective}" height="100%" width="100%" visible="true"
      onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';"
      onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';"
      onEntry="heading1.speak='true'; this.sleep='500'; heading2.speak='true'; this.sleep='500'; heading3.speak='true'; this.sleep='500'; heading4.speak='true'; this.sleep='800'; heading0.speak='true';">

      <lido-cell layout="row" visible="true" width="landscape.60%, portrait.80%" height="30%" bgColor="transparent" margin="5%">
        <lido-text id="heading0" string="${args.heading}" x="-100px" y="-100px" onEntry="this.position='absolute';"></lido-text>
        ${letters}
      </lido-cell>

      <lido-cell layout="row" visible="true" width="75%" height="30%" bgColor="transparent" margin="5%">
        <lido-cell visible="true" layout="col" width="250px" height="180px" value="${args.objective}" type="click"
          onEntry="this.background='white'; this.background-color='white !important'; this.box-shadow='white !important';">
          <lido-image id="image1" visible="true"
            src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/open_window/${args.objective}.png"></lido-image>
        </lido-cell>

        <lido-pos id="pos1" disableEdit="true" value="pos1" height="350px" width="250px"
          x="landscape.640px, portrait.290px" y="landscape.520px, portrait.1235px"
          ariaHidden="true" z="1" bgColor="transparent" visible="true">
          <lido-image id="image1" disableEdit="true" value="image1" visible="true"
            src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/open_window/door.png"
            bgColor="transparent" width="186px" height="250px" x="70px" y="35px">
          </lido-image>
          <lido-avatar id="lido-avatar" disableEdit="true" visible="true" height="370px" width="230px"
            src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv"
            x="50px" y="-25px">
          </lido-avatar>
        </lido-pos>

        <lido-cell visible="true" layout="col" width="250px" height="180px" value="alternate" type="click"
          onEntry="this.background='white'; this.background-color='white !important'; this.box-shadow='white !important';">
          <lido-image id="image2" visible="true"
            src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/open_window/${args.objective === 'mom' ? 'sun' : 'ball'}.png">
          </lido-image>
        </lido-cell>
      </lido-cell>
    </lido-container>
  </main>`;
}
