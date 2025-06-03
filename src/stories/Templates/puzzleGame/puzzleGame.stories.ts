import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

type PuzzleArgs = {
  x: number;
};

const meta: Meta<PuzzleArgs> = {
  title: 'Templates/PuzzleGame',
};
export default meta;

export const PuzzleGame: StoryObj<PuzzleArgs> = {
  render: () => {
    const randomX = Math.floor(Math.random() * 61); // for random position in X axis
    const xml = getContainerXml({ x: randomX });
    return html`<lido-home xml-data="${xml}" xmlData="${xml}"></lido-home>`;
  }
};

function getContainerXml(args: PuzzleArgs) {
  return `<main>
  <lido-container id="lido-container" tabIndex="1" isContinueOnCorrect="true" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" showCheck="false" visible="true">
    <lido-image id="mainImage" disableEdit="true" value="background-image" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/puzzles-asset/gaezzle_bg.jpg" z="0" onEntry="" altText="{backgroundImage}"></lido-image>

    <lido-cell layout="flex" visible="true" onEntry="this.display='flex'; this.position='absolute'" y="70%" x="${args.x}%">
      <lido-image id="image1" disableEdit="true" value="option1" visible="true" type="drag" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/puzzles-asset/gaezzle1.png" z="0" altText="{Image1}"></lido-image>
      <lido-image id="image2" disableEdit="true" value="option2" visible="true" type="drag" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/puzzles-asset/gaezzle2.png" z="0" altText="{Image2}"></lido-image>
    </lido-cell>

    <lido-cell id="drop1" value="option1" tabIndex="2" height="1%" width="1%" onEntry="this.position='absolute'" y="39.3%" x="49.4%" visible="true" type="drop"></lido-cell>
    <lido-cell id="drop2" value="option2" tabIndex="3" height="1%" width="1%" onEntry="this.position='absolute'" y="61.3%" x="47.2%" visible="true" type="drop"></lido-cell>
  </lido-container>
</main>`;
}