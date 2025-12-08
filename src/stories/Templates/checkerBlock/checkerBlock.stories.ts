import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Templates/CheckerBlock',
  argTypes: {
    shapeNumber: { control: 'number' },
  },
};
export default meta;

export const CheckerBlock: StoryObj = {
  args: {
    shapeNumber: 1
  },

  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

function getContainerXml(args) {
  const shape = generateSlots();
  console.log("shape : ", shape);
  

  return `<main>
    <lido-container visible="true" show-next-button="true" dropAttr="math-matrix" objective="nammadha" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/background-images/Checker%20blocks.png" onCorrect="this.sleep='120000';">
	<lido-math-matrix id="matrix3" visible="true" rows="10" cols="10" top-index="false" left-index="false" bottom-index="false" active-only-visible="false" defualtFill="100" active-bg-color="#deb3f2" clickable="false" type="checkerBlock"></lido-math-matrix>

	<lido-cell visible="true" layout="pos" x="0" y="0">
		<lido-math-matrix id="matrix1" visible="true" width="1600px" height="900px" rows="1" cols="10" top-index="false" left-index="false" bottom-index="false" active-only-visible="true" text="false" activeBgColor="#9a3dc5ff" defualtFill="10" tab-index="1" type="drop" value="nammadha" clickable="false"></lido-math-matrix>
	</lido-cell>

	<lido-cell visible="true" layout="pos" x="0" y="0">
		<lido-math-matrix id="matrix4" visible="true" width="1600px" height="900px" rows="2" cols="3" top-index="false" left-index="false" bottom-index="false" active-only-visible="true" text="false" activeBgColor="#9a3dc5ff" defualtFill="9" tab-index="3" type="drag" value="nammadha" clickable="false"></lido-math-matrix>
	</lido-cell>

</lido-container>
  </main>`;
}

function generateSlots() {
  const gridSize = 10;
  const slots: Record<string, {}> = {};
  let generated = 0;

  const getCell = (row: number, col: number) => row * 10 + col + 1;

  while (generated < 8) {
    const type = Math.floor(Math.random() * 3); 
    const width = type === 0 ? 2 : 3; 
    const height = type === 0 ? 3 : (type === 1 ? 2 : 3); 
    generated++
    slots[`slot-${generated}`] = {width, height}
    return slots;
  }
}