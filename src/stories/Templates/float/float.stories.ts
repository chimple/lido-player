import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Templates/FloatingBalloons',
  argTypes: {
    letter: { control: 'text' },
    direction: {
        control: { type: 'select' },
        options: ['left-right', 'right-left', 'top-bottom', 'bottom-top']
      }
  }
};
export default meta;

export const BalloonsFloat: StoryObj = {
  args: {
    letter: 'A',
    direction: "right-left"
  },
  render: args => {
    const xml = getFloatingBalloonsXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  }
};

function getFloatingBalloonsXml(args) {
  const { letter, direction } = args;
  return `<main>
    <lido-container id="lido-container" tabIndex="1" visible="true"
      onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';"
      onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';"
      isContinueOnCorrect="true" showCheck="true">
      
      <lido-float duration="8" delay="1" width="400px" height="400px" direction="${direction}">
        
        ${[100, 500, 900].map(x => `
        <lido-cell visible="true" bgColor="transparent" x="${x}px" layout="col" onEntry="this.position='absolute';">
          <lido-image
            src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/float/balloon.svg"
            width="400px" height="400px" visible="true">
          </lido-image>
          <lido-text
            slot="front"
            width="400px"
            height="200px"
            display="flex"
            onEntry="this.position='absolute'; this.background='transparent'; this.boxShadow='none';"
            font=""
            fontSize="110px"
            z="1"
            fontColor="black"
            fontWeight="bold"
            color="#000000"
            string="${letter}"
            visible="true"
            y="landscape.35px, portrait.15px"
            x="landscape.15px, portrait.15px">
          </lido-text>
        </lido-cell>
        `).join('')}
        
      </lido-float>
    </lido-container>
  </main>`;
}
