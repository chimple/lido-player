import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

type PuzzleArgs = {
  image1: string;
  image2: string;
  backgroundImage: string;
};

const defaultImage1 = "https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/puzzles-asset/gaezzle1.png";
const defaultImage2 = "https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/puzzles-asset/gaezzle2.png";
const defaultBackground = "https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/puzzles-asset/gaezzle_bg.jpg";

const meta: Meta<PuzzleArgs> = {
  title: 'Templates/PuzzleGame',
  argTypes: {
    image1: { control: 'text', name: 'Image 1 URL' },
    image2: { control: 'text', name: 'Image 2 URL' },
    backgroundImage: { control: 'text', name: 'Background Image URL' },
  },
  args: {
    image1: defaultImage1,
    image2: defaultImage2,
    backgroundImage: defaultBackground,
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
  return `<main>
  <lido-container id="lido-container" tabIndex="1" isContinueOnCorrect="true" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" showCheck="false" visible="true">
    <lido-image id="mainImage" disableEdit="true" value="background-image" visible="true" src="${args.backgroundImage}" z="0" onEntry="" altText="{backgroundImage}"></lido-image>
    <lido-cell layout="random" visible="true" width="1200px" height="100px" y="65%">
      <lido-image id="image1" width="313px" disableEdit="true" value="option1" visible="true" type="drag" src="${args.image1}" z="0" altText="{Image1}"></lido-image>
      <lido-image id="image2" width="269px" disableEdit="true" value="option2" visible="true" type="drag" src="${args.image2}" z="0" altText="{Image2}"></lido-image>
    </lido-cell>

    <lido-cell id="drop1" value="option1" tabIndex="2" height="10%" width="10%" onEntry="this.position='absolute'" y="35.2%" x="44.9%" visible="true" type="drop"></lido-cell>
    <lido-cell id="drop2" value="option2" tabIndex="3" height="10%" width="10%" onEntry="this.position='absolute'" y="57%" x="42.75%" visible="true" type="drop"></lido-cell>
  </lido-container>
</main>`;
}
