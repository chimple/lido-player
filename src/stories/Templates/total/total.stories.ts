import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Templates/total',
  argTypes: {
    questionText: { control: 'text' },
    images: { control: 'object' },
    answer:{control:'text'},
  },
};

export default meta;

export const total: StoryObj = {
  args: {
    questionText: 'How many??',
    images: [
      'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/total/stone_01.png',
      'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/total/stone_02.png',
      'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/total/stone_03.png',
      'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/total/stone_04.png',
      'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/total/stone_05.png',
    ],
    answer:'5',
  },

  render: (args) => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

function getContainerXml(args) {
    const margins = ['0px 100px 0px 0px', '0px 80px 0px 0px','-80px -214px 0px 0px','-66px 367px 0px 0px','0px -180px 0px 0px',];
  return `
  <main>
    <lido-container  visible="true"  id="lido-container"  onInCorrect="lido-avatar.avatarAnimate='Fail';"  onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='1000'; ${args.images .map((_, i) => `i${i + 1}.revealImageValue='true'; this.sleep='1000';`) .join('')} this.sleep='2000';"
    bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/Sky.png" objective="${args.answer}" is-continue-on-correct="true" show-Check="false" >
      <!-- Avatar -->
      <lido-cell layout="pos" id="pos1" disable-edit="true" height="landscape.448px,portrait.402px" width="landscape.350px,portrait.398px" x="landscape.37%, portrait.20px" y="landscape.48%, portrait.318px" z="1" bg-color="transparent">
        <lido-avatar id="lido-avatar" visible="true" height="100%" width="100%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv"></lido-avatar>
      </lido-cell>

      <!-- Main Layout -->
      <lido-cell layout="row" visible="true" width="90%" height="90%" bg-color="transparent">
        <!-- Left column: images -->
        <lido-cell layout="col" visible="true" margin="0px 117px 0px -117px" onEntry="this.animation='topToPlace 1.5s linear';" height="751px" width="500px" bg-color="transparent">
          ${args.images
            .map(
              (img, i) => `
              <lido-image id="i${i + 1}" value="${i + 1}" type="text" visible="true" src="${img}" height="120px" width="120px"  margin="${margins[i % margins.length]}" ></lido-image>`
            )
            .join('')}
        </lido-cell>

        <!-- Right column: text + calculator -->
        <lido-cell layout="col" visible="true" margin="0px" height="751px" width="500px" bg-color="transparent">
          <lido-text visible="true" bg-color="#60DADA" height="100px" width="456px" margin="0px" string="${args.questionText}" onEntry="this.border='5px solid #029A9A'; this.border-radius='10px'; this.font-size='40px'; this.font-weight='600';"></lido-text>
          <lido-calculator visible="true" height="650px" y="26px" width="456px" onEntry="this.position='relative';"></lido-calculator>
        </lido-cell>
      </lido-cell>
    </lido-container>
  </main>
  `;
}
