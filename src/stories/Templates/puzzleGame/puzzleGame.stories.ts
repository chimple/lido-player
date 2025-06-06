import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

type DraggableImage = {
  id: string;
  value: string;
  src: string;
  width?: string;
};

type DropCell = {
  id: string;
  value: string;
  x: string;
  y: string;
};

type PuzzleArgs = {
  backgroundImage: string;
  draggables: DraggableImage[];
  dropCells: DropCell[];
};

const defaultBackground = "https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/puzzles-asset/gaezzle_bg.jpg";

const meta: Meta<PuzzleArgs> = {
  title: 'Templates/PuzzleGame',
  argTypes: {
    backgroundImage: { control: 'text', name: 'Background Image URL' },
    draggables: { control: 'object', name: 'Draggable Images' },
    dropCells: { control: 'object', name: 'Drop Cells' },
  },
  args: {
    backgroundImage: defaultBackground,
    draggables: [
      {
        id: 'image1',
        value: 'option1',
        src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/puzzles-asset/gaezzle1.png',
        width: '313px',
      },
      {
        id: 'image2',
        value: 'option2',
        src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/puzzles-asset/gaezzle2.png',
        width: '269px',
      },
    ],
    dropCells: [
      { id: 'drop1', value: 'option1', y: '35.3%', x: '44.8%' },
      { id: 'drop2', value: 'option2', y: '57.2%', x: '42.7%' },
    ],
  },
};

export default meta;

export const PuzzleGame: StoryObj<PuzzleArgs> = {
  render: (args) => {
    const xml = getContainerXml(args);
    return html`<lido-home xml-data="${xml}" xmlData="${xml}"></lido-home>`;
  },
};

function getContainerXml(args: PuzzleArgs) {
  const draggableImagesXml = args.draggables
    .map((img) => {
      return `<lido-image id="${img.id}" width="${img.width || '250px'}" disableEdit="true" value="${img.value}" visible="true" type="drag" src="${img.src}" z="0" altText="{${img.id}}"></lido-image>`;
    })
    .join('\n');

  const dropCellsXml = args.dropCells
    .map((cell, index) => {
      return `<lido-cell id="${cell.id}" value="${cell.value}" tabIndex="${index + 2}" height="10%" width="10%" layout="pos" y="${cell.y}" x="${cell.x}" visible="true" type="drop" bgColor="transparent"></lido-cell>`;
    })
    .join('\n');

  return `<main>
  <lido-container id="lido-container" tabIndex="1" isContinueOnCorrect="true" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" showCheck="false" visible="true">
    <lido-image id="mainImage" disableEdit="true" value="background-image" visible="true" src="${args.backgroundImage}" z="0" onEntry="" altText="{backgroundImage}"></lido-image>
    <lido-cell layout="random" visible="true" width="1200px" height="100px" y="65%">
      ${draggableImagesXml}
    </lido-cell>

    ${dropCellsXml}
  </lido-container>
</main>`;
}