import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'Templates/BalloonGame',
  tags: ['autodocs'],
  render: (args) => html`
    <lido-balloon
      id="${args.id}"
      .letters=${JSON.stringify(args.letters)}
      correctAnswer="${args.correctAnswer}"
      width="${args.width}"
      height="${args.height}"
      x="${args.x}"
      y="${args.y}"
      visible="${args.visible}"
      svgPath="${args.svgPath}"
      balloonsCount="${args.balloonsCount}"
    ></lido-balloon>
  `,
  args: {
    id: 'balloon-test',
    letters: ['A', 'B', 'C'],
    correctAnswer: 'B',
    width: '400px',
    height: '400px',
    x: '0px',
    y: '100vh',
    visible: true,
    svgPath: './assets/images/balloon.svg',
    balloonsCount: '3',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
