import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Templates/BalloonPop',
  argTypes: {
    Increment: { control: 'text' },
    Decrement: { control: 'text' },
    cells: {
      control: {type: "object"},
      description: 'Array of balloon cells with value and filter',
    },
  },
};
export default meta;

export const QuestionAndOptions: StoryObj = {
  args: {
    Increment: '+10',
    Decrement: '-10',
    cells: [
      { value: 'A', filter: 'violet' },
      { value: 'B', filter: 'red' },
      { value: 'A', filter: 'blue' },
      { value: 'B', filter: 'blue' },
      { value: 'B', filter: 'yellow' },
      { value: 'A', filter: 'grey' },
      { value: 'A', filter: 'white' },
    ],
  },

  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

function getContainerXml(args) {
  const floatCellsXml = args.cells.map(cell => `
    <lido-cell visible="true" layout="col" width="10%" height="10%" bg-color="transparent" value="${cell.value}">
      <lido-image visible="true"
        src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/float/balloon.png"
        width="200px" filter="${cell.filter}">
      </lido-image>
      <lido-text visible="true"
        string="${cell.value}" bg-color="transparent" font-family="'Baloo Bhai 2'" font-size="40px"
        x="80px" y="50px" onEntry="this.position='absolute';">
      </lido-text>
    </lido-cell>
  `).join('');

  return `<main>
    <lido-container id="lido-container" tab-index="1" visible="true" objective="A"
      onCorrect="lido-slide-fill.fill-slide='${args.Increment}'; lido-avatar.avatarAnimate='Success'; this.sleep='2000';"
      onInCorrect="lido-slide-fill.fill-slide='${args.Decrement}'; lido-avatar.avatarAnimate='Fail'; this.sleep='2000';"
      is-continue-on-correct="true" show-check="true" bg-color="black">

      <!-- Chimple Avatar -->
      <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="305px" width="227px" x="-50px" y="500px" aria-hidden="true" z="1" bg-color="transparent" visible="true">
        <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="462px" width="356px"
          src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv"
          alt-text="{chimpleCharacterRive}">
        </lido-avatar>
      </lido-cell>

      <!-- Beeker -->
      <lido-cell visible="true" layout="pos" width="150px" z="1" x="50px" y="70px">
        <lido-slide-fill id="lido-slide-fill" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/float/balloonBeeker.svg"
          width="100%" fill="0" fillDirection="vertical">
        </lido-slide-fill>
      </lido-cell>

      <!-- Float Area -->
      <lido-float visible="true" width="100%" height="100%" bg-color="transparent">
        ${floatCellsXml}
      </lido-float>

    </lido-container>
  </main>`;
}
