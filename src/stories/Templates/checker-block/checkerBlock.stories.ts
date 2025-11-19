import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Templates/CheckerBlock',
  argTypes: {
    shapeNumber: { control: 'number' },
  },
};
export default meta;

export const Blocks: StoryObj = {
  args: {
    shapeNumber: 1
  },

  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

function getContainerXml(args) {
  const shape = generateSlots(args.shapeNumber);
  let tabIndex = 1;

  let objective = []

  // Generate <lido-math-matrix> elements for each slot
  const dropMatrices = Object.entries(shape)
    .map(([key, { width, height }], index) => {
      objective.push(`slot${index+1}`) 
      return `
        <lido-math-matrix id="drop-${index + 1}" visible="true" width="1600px" height="900px" rows="${width}" cols="${height}" top-index="false" left-index="false" bottom-index="false" active-only-visible="true" activeBgColor="#967ca6" defualtFill="${width * height}" tab-index="${tabIndex++}" type="drop" value="slot${index + 1}" clickable="false" border="2px solid black" font-color="white" onInCorrect="lido-avatar.avatarAnimate='Fail';"></lido-math-matrix>
        `;
    })
    .join("\n");

  const dragMatrices = Object.entries(shape)
    .map(([key, { width, height }], index) => {
      const colors = ['#a657fa','#fa7f98', '#dee60e', '#71f24e', '#55d9a4']
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      return `
        <lido-math-matrix id="drag-${index + 1}" visible="true" width="1600px" height="900px" rows="${width}" cols="${height}" top-index="false" left-index="false" bottom-index="false" active-only-visible="true" activeBgColor="${randomColor}" defualtFill="${width * height}" tab-index="${tabIndex++}" type="drag" value="slot${index + 1}" clickable="false" border="2px solid black" font-color="white" onCorrect="lido-avatar.avatarAnimate='Success';"></lido-math-matrix>`;
    })
    .join("\n");
  

  return `<main>
    <lido-container visible="true" show-next-button="true" dropAttr="math-matrix" objective="${objective}" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000'; all.animation='placeToLeft 1.5s linear'; this.sleep='1500';" is-continue-on-correct="true" is-allow-only-correct="true" bg-color="transparent" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/create%20sentence/Spring.png" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';">

    <!-- Chimple Avatar -->
	<lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.448px,portrait.270px" width="landscape.350px,portrait.270px" x="landscape.500px, portrait.-9%" y="landscape.522px, portrait.36%" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="">
			<lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
			</lido-avatar>
	</lido-cell>

	<lido-cell visible="true" id="all" layout="landscape.row, portrait.col" height="100%" width="100%" flex-direction="landscape.unset, portrait.column-reverse" onEntry="this.justifyContent='unset';" bg-color="transparent">
    <lido-cell visible="true" layout="col" width="landscape.30%, portrait.90%" height="landscape.90%, portrait.45%" bg-color="transparent" z="2">
			<lido-cell visible="true" layout="random" width="100%" height="100%" bg-color="transparent">
				${dragMatrices}
			</lido-cell>
		</lido-cell>
		<lido-cell id="truck" visible="true" layout="pos" x="0" y="0" z="1" onEntry="this.animation='rightToPlace 1.5s linear';">
			<lido-image visible="true" width="landscape.1500px, portrait.1234px" height="landscape.900px, portrait.850px" x="landscape.185px, portrait.-350px" y='landscape.20px, portrait.60px' src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/CheckerBlock/checkerBlockTruck.svg"></lido-image>
			<lido-math-matrix id="matrix" visible="true" width="landscape.1570px, portrait.700px" height="landscape.860px, portrait.400px" x="landscape.800px, portrait.135px" y="landscape.23px, portrait.75px" rows="10" cols="10" top-index="false" left-index="false" bottom-index="false" active-only-visible="false" defualtFill="100" text="1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100" border="2px solid #736e6cff" border-radius="0" active-bg-color="#d7d5d9" clickable="false" type="checkerBlock" font-color="#4f2e35"></lido-math-matrix>
			${dropMatrices}
			
		</lido-cell>
	</lido-cell>
	
</lido-container>
  </main>`;
}


function generateSlots(level: number) {
  switch(level) {
    case 1:
      return generateRandomSquare();
    case 2:
      return generateHorizontalStrips();
    case 3:
      return generateVerticalStrips();
    case 8:
      return generateHorizontalHalfStrips();  
    case 9:
      return generate2by2Squares();  
    case 10:
      return generateDoubleSquares();  
    case 11:
      return generateSingleSquares();  
    default:
      return generateRandomSquare();
  }
}

function generateRandomSquare() {
  const slots: Record<string, { width: number; height: number }> = {};
  let generated = 0;

  while (generated < 8) {
    const type = Math.floor(Math.random() * 3); 
    const width = type === 0 ? 2 : 3; 
    const height = type === 0 ? 3 : (type === 1 ? 2 : 3); 
    generated++
    slots[`slot-${generated}`] = {width, height}
  }
  return slots;
}

function generateHorizontalStrips() {
  const slots: Record<string, { width: number; height: number }> = {};
  let generated = 0;
  while (generated < 5) {
    const width = 10;
    const height = 1;
    generated++
    slots[`slot-${generated}`] = {width, height}
  }
  return slots;
}

function generateHorizontalHalfStrips() {
  const slots: Record<string, { width: number; height: number }> = {};
  let generated = 0;
  while (generated < 10) {
    const width = 5;
    const height = 1;
    generated++
    slots[`slot-${generated}`] = {width, height}
  }
  return slots;
}

function generateVerticalStrips() {
  const slots: Record<string, { width: number; height: number }> = {};
  let generated = 0;
  while (generated < 5) {
    const width = 1;
    const height = 10;
    generated++
    slots[`slot-${generated}`] = {width, height}
  }
  return slots;
}

function generate2by2Squares() {
  const slots: Record<string, { width: number; height: number }> = {};
  let generated = 0;
  while (generated < 10) {
    const width = 2;
    const height = 2;
    generated++
    slots[`slot-${generated}`] = {width, height}
  }
  return slots;
}
function generateDoubleSquares() {
  const slots: Record<string, { width: number; height: number }> = {};
  let generated = 0;
  while (generated < 10) {
    const width = 2;
    const height = 1;
    generated++
    slots[`slot-${generated}`] = {width, height}
  }
  return slots;
}
function generateSingleSquares() {
  const slots: Record<string, { width: number; height: number }> = {};
  let generated = 0;
  while (generated < 10) {
    const width = 1;
    const height = 1;
    generated++
    slots[`slot-${generated}`] = {width, height}
  }
  return slots;
}