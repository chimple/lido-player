import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Templates/BalloonGame',
  argTypes: {
    alphabets: {
      control: 'object',
      description: 'List of letters to display on balloons',
    },
    correctAnswer: {
      control: 'text',
      description: 'The correct balloon letter to score',
    },
  },
};

export default meta;

export const BalloonGame: StoryObj = {
  args: {
    alphabets: ['A', 'B', 'C', 'D', 'A'],
    correctAnswer: "B",
  },
  render: ({ alphabets, correctAnswer }) => {
    const alphaAttr = JSON.stringify(alphabets).replace(/"/g, "'");
    
    // Lit Template HTML for the component
    const template = html`
      <lido-container
        id="lido-container"
        tabIndex="1"
        visible="true"
        game="balloon"
        isContinueOnCorrect="true"
        showCheck="true"
        onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';"
        onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';"
        alphabets="${alphaAttr}"
        correctAnswer="${correctAnswer}"
      ></lido-container>
    `;

    // Defer JS logic until after render
    setTimeout(() => {
      import('../../../utils/utils').then(({ initBalloonsWithClass }) => {
        initBalloonsWithClass();
      });
    }, 0);

    return template;
  },
};
