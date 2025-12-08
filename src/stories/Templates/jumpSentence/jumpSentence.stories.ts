import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Templates/JumpSentence',
  argTypes: {
    cells: {
      control: { type: 'object' },
    },
    buttons: { control: { type: 'text' } },
  },
};
export default meta;

export const QuestionAndOptions: StoryObj = {
  args: {
    cells: [
      { value: 'Y', type: 'drop' },
      { value: 'o', type: 'drop' },
      { value: 'u', type: 'drop' },
      { value: 'ARE TALL.', type: '' },
    ],
    buttons: 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z',
  },

  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

function getContainerXml(args) {
  const dropCellsXml = args.cells
    .map(
      (cell, index) =>
        cell.type === 'drop'
          ? `
      <lido-text visible="true" tab-index="${index}" id="drop${index}" 
        width="120px" height="120px" type="drop" value="${cell.value.toLowerCase()}" 
        bg-color="rgb(83 44 50 / 40%)" border-radius="10px">
      </lido-text>
      `
          : `<lido-text visible="true" width="auto" height="120px" 
        value="${cell.value}" string="${cell.value}" font-size="80px" bg-color="#5F1A29" 
        font-color="white" padding="0 20px" border-radius="10px" 
        onEntry="this.fontWeight='600';"
        >
      </lido-text>`
    )
    .join('');

  const objective = args.cells
    .filter(cell => cell.type === 'drop')
    .map(cell => cell.value.toLowerCase())
    .join(',');

  return `<main>
    <lido-container id="lido-container" visible="true" objective="${objective}" 
      onCorrect="lido-avatar.avatarAnimate='Success'; sentenceText.speak='true'; this.sleep='2000';" 
      onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" onEntry="sentenceText.speak='true';"
      is-continue-on-correct="true" bg-color="transparent" 
      bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/background-images/Jump%20sentence.png" 
      drop-action="infinite-drop" is-allow-only-correct="true">

      <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" 
        height="landscape.500px, portrait.600px" width="landscape.350px, portrait.450px" 
        x="landscape.1275px,portrait.230px" y="landscape.90px, portrait.0px" 
        aria-hidden="true" z="9999" bg-color="transparent" visible="true">
          <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%" 
            src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" 
            alt-text="{chimpleCharacterRive}">
          </lido-avatar>
      </lido-cell>

      <lido-cell visible="true" layout="col" width="100%" height="100%" bg-color="transparent">
        <lido-text visible="true" width="100%" height="landscape.20%,portrait.30%"></lido-text>
        <lido-cell visible="true" layout="row" width="landscape.80%, portrait.90%" height="landscape.50%, portrait.30%" bg-color="transparent" onEntry="this.alignItems='flex-start';">
          <lido-cell visible="true" id="sentenceText" tab-index="1" audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/fill-in-the-blanks/fill-upAudio.mp3" layout="flex" width="auto" height="auto" gap="20px">
            ${dropCellsXml}
          </lido-cell>
        </lido-cell>
        <lido-keyboard visible="true" bg-color="#5F1A29" font-color="white" font-size="80px" 
          keys="${args.buttons}" width="90%" height="landscape.45%,portrait.35%" 
          type="drag" border-radius="10px" columns="landscape.10, portrait.7">
        </lido-keyboard>
      </lido-cell>
    </lido-container>
  </main>`;
}
