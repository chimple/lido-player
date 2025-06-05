import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Templates/PuzzleGame',
};
export default meta;

export const PuzzleGame: StoryObj = {
  render: () => {
    const xml = getContainerXml();
    return html`<lido-home xml-data="${xml}" xmlData="${xml}"></lido-home>`;
  }
};

function getContainerXml() {
  return `<main>
  <lido-container id="lido-container" tabIndex="1" isContinueOnCorrect="true" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" showCheck="false" visible="true">
    <lido-image id="mainImage" disableEdit="true" value="background-image" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/puzzles-asset/gaezzle_bg.jpg" z="0" onEntry="" altText="{backgroundImage}"></lido-image>
    <lido-cell layout="random" visible="true" width="1200px" height="100px" y="65%">
      <lido-image id="image1" width="313px" disableEdit="true" value="option1" visible="true" type="drag" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/puzzles-asset/gaezzle1.png" z="0" altText="{Image1}"></lido-image>
      <lido-image id="image2" width="269px" disableEdit="true" value="option2" visible="true" type="drag" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/puzzles-asset/gaezzle2.png" z="0" altText="{Image2}"></lido-image>
    </lido-cell>

    <lido-cell id="drop1" value="option1" tabIndex="2" height="10%" width="10%" onEntry="this.position='absolute'" y="35.2%" x="44.9%" visible="true" type="drop"></lido-cell>
    <lido-cell id="drop2" value="option2" tabIndex="3" height="10%" width="10%" onEntry="this.position='absolute'" y="57%" x="42.75%" visible="true" type="drop"></lido-cell>
  </lido-container>
</main>`;
}