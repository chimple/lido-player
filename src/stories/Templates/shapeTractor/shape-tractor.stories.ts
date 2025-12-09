import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

// Define type for Storybook args
type ShapeTractorArgs = {
  blocks: any[];
  options: any[];
};

const meta: Meta<ShapeTractorArgs> = {
  title: 'Templates/shapeTractor',
  argTypes: {
    options: { control: 'object' },
    blocks: { control: 'object' },
  },
};

export default meta;

export const ShapeTractor: StoryObj<ShapeTractorArgs> = {
  args: {
    blocks: [
      [
        { id: 'img1', type: '', value: 'rectangle', src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Shape%20Tractor/Group%2047093.png' },
        { id: 'img2', type: '', value: 'rhombus', src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Shape%20Tractor/Group%2047094.png' }
      ],
      [
        { id: 'img3', type: '', value: 'rectangle', src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Shape%20Tractor/Group%2047093.png' },
        { id: 'img4', type: '', value: 'rhombus', src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Shape%20Tractor/Group%2047094.png' }
      ],
      [
        { id: 'drop1', type: 'drop', value: 'rectangle' },
        { id: 'drop2', type: 'drop', value: 'rhombus' }
      ]
    ],
    options: [
      { id: 'drg1', type: 'drag', value: 'rectangle', src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Shape%20Tractor/Group%2047093.png' },
      { id: 'drg2', type: 'drag', value: 'rhombus', src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Shape%20Tractor/Group%2047094.png' },
      { id: 'drg3', type: 'drag', value: 'rectangle', src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Shape%20Tractor/Group%2047093.png' }
    ]
  },

  render: (args: ShapeTractorArgs) => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

export const ShapeTractorOne: StoryObj<ShapeTractorArgs> = {
  args: {
    blocks: [
      [
        { id: 'drop1', type: 'drop', value: 'rectangle' },
        { id: 'drop2', type: 'drop', value: 'rhombus' }
      ],
      [
        { id: 'img1', type: '', value: 'rectangle', src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Shape%20Tractor/Group%2047093.png' },
        { id: 'img2', type: '', value: 'rhombus', src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Shape%20Tractor/Group%2047094.png' }
      ],
      [
        { id: 'img3', type: '', value: 'rectangle', src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Shape%20Tractor/Group%2047093.png' },
        { id: 'img4', type: '', value: 'rhombus', src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Shape%20Tractor/Group%2047094.png' }
      ]
    ],
    options: [
      { id: 'drg1', type: 'drag', value: 'rectangle', src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Shape%20Tractor/Group%2047093.png' },
      { id: 'drg2', type: 'drag', value: 'rhombus', src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Shape%20Tractor/Group%2047094.png' },
      { id: 'drg3', type: 'drag', value: 'rectangle', src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Shape%20Tractor/Group%2047093.png' }
    ]
  },

  render: (args: ShapeTractorArgs) => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

export const ShapeTractorTwo: StoryObj<ShapeTractorArgs> = {
  args: {
    blocks: [
      [
        { id: 'img1', type: '', value: 'rectangle', src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Shape%20Tractor/Group%2047093.png' },
        { id: 'img2', type: '', value: 'rhombus', src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Shape%20Tractor/Group%2047094.png' }
      ],
      [
        { id: 'drop1', type: 'drop', value: 'rectangle' },
        { id: 'drop2', type: 'drop', value: 'rhombus' }
      ],
      [
        { id: 'img3', type: '', value: 'rectangle', src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Shape%20Tractor/Group%2047093.png' },
        { id: 'img4', type: '', value: 'rhombus', src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Shape%20Tractor/Group%2047094.png' }
      ]
    ],
    options: [
      { id: 'drg1', type: 'drag', value: 'rectangle', src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Shape%20Tractor/Group%2047093.png' },
      { id: 'drg2', type: 'drag', value: 'rhombus', src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Shape%20Tractor/Group%2047094.png' },
      { id: 'drg3', type: 'drag', value: 'rectangle', src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Shape%20Tractor/Group%2047093.png' }
    ]
  },

  render: (args: ShapeTractorArgs) => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

export const ShapeTractorThree: StoryObj<ShapeTractorArgs> = {
  args: {
    blocks: [
      [
        { id: 'img1', type: '', value: 'rectangle', src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Shape%20Tractor/Group%2047093.png' },
        { id: 'drop2', type: 'drop', value: 'rhombus' }
      ],
      [
        { id: 'drop1', type: 'drop', value: 'rectangle' },
        { id: 'img2', type: '', value: 'rhombus', src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Shape%20Tractor/Group%2047094.png' }
      ],
      [
        { id: 'img3', type: '', value: 'rectangle', src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Shape%20Tractor/Group%2047093.png' },
        { id: 'img4', type: '', value: 'rhombus', src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Shape%20Tractor/Group%2047094.png' }
      ]
    ],
    options: [
      { id: 'drg1', type: 'drag', value: 'rectangle', src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Shape%20Tractor/Group%2047093.png' },
      { id: 'drg2', type: 'drag', value: 'rhombus', src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Shape%20Tractor/Group%2047094.png' },
      { id: 'drg3', type: 'drag', value: 'rectangle', src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Shape%20Tractor/Group%2047093.png' }
    ]
  },

  render: (args: ShapeTractorArgs) => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

export const ShapeTractorFour: StoryObj<ShapeTractorArgs> = {
  args: {
    blocks: [
      [
        { id: 'drop1', type: 'drop', value: 'rectangle' },
        { id: 'img2', type: '', value: 'rhombus', src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Shape%20Tractor/Group%2047094.png' }
      ],
      [
        { id: 'img1', type: '', value: 'rectangle', src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Shape%20Tractor/Group%2047093.png' },
        { id: 'drop2', type: 'drop', value: 'rhombus' }
      ],
      [
        { id: 'img3', type: '', value: 'rectangle', src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Shape%20Tractor/Group%2047093.png' },
        { id: 'img4', type: '', value: 'rhombus', src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Shape%20Tractor/Group%2047094.png' }
      ]
    ],
    options: [
      { id: 'drg1', type: 'drag', value: 'rectangle', src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Shape%20Tractor/Group%2047093.png' },
      { id: 'drg2', type: 'drag', value: 'rhombus', src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Shape%20Tractor/Group%2047094.png' },
      { id: 'drg3', type: 'drag', value: 'rectangle', src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Shape%20Tractor/Group%2047093.png' }
    ]
  },

  render: (args: ShapeTractorArgs) => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

function createLidoImage({ id, type, value, src, tabIndex }: any) {
  const dropSrc = "https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Shape%20Tractor/box_answer_soundtrain_trans.png";
  const finalSrc = type === "drop" ? dropSrc : src || "";

  return `
    <lido-image
      id="${id}"
      ${tabIndex ? `tab-index="${tabIndex}"` : ""}
      value="${value || ""}"
      src="${finalSrc}"
      visible="true"
      type="${type || ""}"
      width="landscape.140px,portrait.120px"
      ${type === "drop" ? `onCorrect="lido-avatar.avatarAnimate='Success'" onInCorrect="lido-avatar.avatarAnimate='Fail'"` : ""}
    ></lido-image>
  `;
}

function getContainerXml({ blocks, options }: ShapeTractorArgs) {
  let tabCounter = 1;

  const dropValues = blocks
    .flat()
    .filter(b => b.type === 'drop')
    .map(b => b.value)
    .join(',');

  const truckBlocks = blocks
    .map((block, i) => {
      const images = block.map(img => createLidoImage({ ...img, tabIndex: tabCounter++ })).join("");
      return `
        <lido-cell id="block${i + 1}" visible="true" width="landscape.400px,portrait.250px" layout="col" bg-color="transparent" margin="landscape.0px 0px 0px -65px,portrait.97px 0px 0px 0px"  >
				<lido-cell visible="true" layout="row" bg-color="transparent" margin="landscape.180px 0px -130px 0px,portrait.95px 0px 0px 0px" gap="15px">
				  ${images}
          </lido-cell>
          <lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Shape%20Tractor/trolly_drop_soundtrain_2block.png" width="landscape.350px,portrait.350"></lido-image>
        </lido-cell>
      `;
    })
    .join("");

  const optionCells = options
    .map(option => createLidoImage({ ...option, tabIndex: tabCounter++ }))
    .join("");

  return `
    <main>
      <lido-container id="lido-container" is-allow-only-correct="true" show-Check="false" is-Continue-On-Correct="true" after-Drop="false" objective="${dropValues}" visible="true" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/background-images/Shape%20tractor.png" custom-style="#drop1, #drop2{border: none !important;}"  onCorrect="drg1.disableType='true'; drg2.disableType='true'; drg3.disableType='true'; lido-avatar.avatarAnimate='Success'; this.sleep='2000'; answer.visible='false'; lido-avatar.animation='placeToLeft 2.5s linear'; answer.animation='placeToLeft 2.5s linear'; truck.animation='placeToLeft 2.5s linear'; trainAudio.speak='true'" onInCorrect="lido-avatar.avatarAnimate='Fail';" > 

          <!-- Chimple Avatar -->
          <lido-cell layout="pos" id="pos1" disableEdit="true" value="pos2" height="300px" width="300px" x="landscape.110px,portrait.10px" y="landscape.80px,portrait.230px" ariaHidden="true" bgColor="transparent" visible="true"  onEntry=" this.animation='rightToPlace 2.5s linear';">
              <lido-avatar id="lido-avatar" disableEdit="true" visible="true"  height="100%"  width="100%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" altText="{chimpleCharacterRive}">
              </lido-avatar>
          </lido-cell>

          <lido-cell visible="true" id="truck" layout="row" height="landscape.60%, portrait.60%" width="landscape.100%, portrait.100%" bg-color="transparent"  onEntry=" this.animation='rightToPlace 2.5s linear';" onCorrect="" >

            <lido-text id="question" visible="false" string="complete the pattern using the blocks given below" value="complete the pattern using the blocks given below" onEntry="this.sleep='2000';this.speak='true';">
            </lido-text>
            <lido-text id="trainAudio" visible="false" audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/train1.m4a" onEntry="this.speak='true';">
            </lido-text>
            
            <lido-cell visible="true" layout="row" bg-color="transparent" gap="0px"   margin="landscape.220px 0px 0px 0px,portrait.977px 0px 0px -200px">
            
              <lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Shape%20Tractor/truck_bg_soundtrain.png" width="landscape.220px,portrait.250px" padding="0px" margin="72px 0px 0px 0px">
              </lido-image>

              ${truckBlocks}
                
            </lido-cell>
          </lido-cell>

          <lido-cell visible="true" id="answer" delay-visible="2650" layout="row" height="landscape.40%,portrait.40%" width="landscape.50%,portrait.50%" bg-color="transparent" onEntry="this.alignItems='center';this.justify-content='space-around';this.animation='rightToPlace 2.5s linear'">
            ${optionCells}
          </lido-cell>
        </lido-container>     
    </main>
  `;
}
