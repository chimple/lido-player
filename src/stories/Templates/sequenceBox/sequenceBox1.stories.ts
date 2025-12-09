import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

type SequenceBoxArgs = {
  missingNumber: string;
  number1: string;
  number2: string;
  number4: string;
  options: string[];
  isAllowOnlyCorrect?: boolean;
};

const meta: Meta<SequenceBoxArgs> = {
  title: 'Templates/SequenceBox1',
  argTypes: {
    missingNumber: { control: 'text', name: 'missing number' },
    number1: { control: 'text', name: 'Number 1' },
    number2: { control: 'text', name: 'Number 2' },
    number4: { control: 'text', name: 'Number 4' },
    options: { control: 'object', name: 'digits' },
    isAllowOnlyCorrect: { control: 'boolean', name: 'isAllowOnlyCorrect' },
  },
  args: {
    missingNumber: '84',
    number1: '80',
    number2: '82',
    number4: '86',
    options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    isAllowOnlyCorrect: true,
  },
};

export default meta;

export const SequenceBox: StoryObj = {

  render: (args: SequenceBoxArgs) => {
    const xml = getContainerXml(args);
    return html`<lido-home xml-data="${xml}" xmlData="${xml}"></lido-home>`;
  },
};

function getContainerXml(args: SequenceBoxArgs) {
  const missingNumber = args.missingNumber;
  const number1 = args.number1;
  const number2 = args.number2;
  const number4 = args.number4;
  const options = args.options;
  const isAllowOnlyCorrect = args.isAllowOnlyCorrect ?? true;

  const objectiveString = `${missingNumber.split('').join(',')}`;

  const objectiveArray = missingNumber.split(''); 
  

  const dropCells = objectiveArray
    .map(
      (cell, i) => `
        <lido-text id="drop-${cell}" tab-index="${i}" disable-edit="true" height="landscape.165px, portrait.125px" width="125px" visible="true" value="${cell}" string="?" font-family="'Baloo Bhai 2'" font-color="#FFC805" type="drop" font-size="landscape.130px, portrait.100px"  bg-color="transparent"  onEntry="this.fontWeight='800'; this.borderRadius='10px'; this.margin-top='65px';" border-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/sequence-box/card-slot_empty.png">
        </lido-text>
      `
    )
    .join('\n');

  const dragCells = options
  .map(
    (digit, i) => `
      <lido-text id="drag-${i}" tab-index="${50+i}" height="landscape.170px, portrait.125px" width="landscape.125px, portrait.90px" visible="true" value="${digit}" string="${digit}" font-family="'Baloo Bhai 2'" font-color="black" type="drag" font-size="104px"  bg-color="#FFF4CD"  onEntry="this.fontWeight='800'; this.borderRadius='10px'; this.flex-shrink='0';" border-image="" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';">
      </lido-text>
    `
  )
  .join('\n');

  return `
    <main>
        <lido-container id="lido-container" objective="${objectiveString}" tab-index="1" show-drop-border="false" is-continue-on-correct="true"  is-allow-only-correct="${isAllowOnlyCorrect}" value="mainContainer1" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/Underwater.png" height="100%" width="100%" bg-color="transparent"  visible="true" onCorrect="this.questionBoxAnimate='true'; lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="this.justifyContent='space-around';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" drop-action="infinite-drop" show-check="false">

            <!-- Chimple Avatar -->
            <lido-cell layout="pos" id="pos1" disableEdit="true" value="pos1" height="landscape.600px, portrait.700px" width="landscape.393px, portrait.485px" x="landscape.600px, portrait.230px" y="landscape.45px, portrait.1010px" ariaHidden="true" z="1" bgColor="transparent" visible="true"  onEntry="this.flex-shrink='0';">
              <lido-avatar id="lido-avatar" disableEdit="true" visible="true"  height="inherit"  width="inherit" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" altText="{chimpleCharacterRive}" onEntry="">
              </lido-avatar>
              <lido-image id="image" disableEdit="true" value="image" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/Shadow.png" bgColor="transparent" width="inherit" height="27px" x="landscape.-7px, portrait.-7px" y="landscape.450px, portrait.535px" altText="{shadowImage}">
              </lido-image>
            </lido-cell>

            <!-- drop cells -->
            <lido-cell layout="row" aria-hidden="true" visible="true" height="landscape.45%,portrait.40%" width="landscape.85%, portrait.95%" bg-Color="transparent" margin="landscape.385px 0px -545px 0px,portrait.55px 0px -73px 0px" onEntry="this.z-index='1'; this.boxAnimationOneByOne='true';">

              <lido-cell layout="col" visible="true" type="box" height="landscape.90%,portrait.41%" width="20%" bg-Color="transparent" onEntry="this.z-index='1';">
                <lido-image is-slice="true" bg-color="transparent" id="drop-image0" disable-edit="true" tab-index="20" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/sequence-box/tressure_top1.png" height="landscape.150px, portrait.150px" width="landscape.315px, portrait.200px" margin="landscape.-180px 0px -525px 0px, portrait.-200px 0px -715px 0px">
                </lido-image>
                <lido-image is-slice="true" bg-color="transparent" id="drop-image0" disable-edit="true" tab-index="21" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/sequence-box/tressure_bottom1.png" height="landscape.250px, portrait.200px" width="landscape.315px, portrait.200px" margin="landscape.0px 0px -145px 0px, portrait.0px 0px -275px 0px" >
                  <lido-text id="drop-${number1}" tab-index="${number1}" disable-edit="true" height="landscape.130px portrait.100px" width="200px" visible="true" value="${number1}" string="${number1}" font-family="'Baloo Bhai 2'" font-color="#FFC805" font-size="landscape.130px, portrait.100px"  bg-color="transparent"  onEntry="this.fontWeight='800'; this.borderRadius='10px'; this.margin-top='65px'; this.margin-right='15px';">
                  </lido-text>
                </lido-image>
              </lido-cell>
              <lido-cell layout="col" visible="true" type="box" height="landscape.90%,portrait.41%" width="20%" bg-Color="transparent" onEntry="this.z-index='1';">
                <lido-image is-slice="true" bg-color="transparent" id="drop-image1" disable-edit="true" tab-index="23" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/sequence-box/tressure_top1.png" height="landscape.150px, portrait.150px" width="landscape.315px, portrait.200px" margin="landscape.-180px 0px -525px 0px, portrait.-200px 0px -715px 0px" >
                </lido-image>
                <lido-image is-slice="true" bg-color="transparent" id="drop-image1" disable-edit="true" tab-index="24" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/sequence-box/tressure_bottom1.png" height="landscape.250px, portrait.200px" width="landscape.315px, portrait.200px" margin="landscape.0px 0px -145px 0px, portrait.0px 0px -275px 0px" >
                  <lido-text id="drop-${number2}" tab-index="${number2}" disable-edit="true" height="landscape.130px portrait.100px" width="125px" visible="true" value="${number2}" string="${number2}" font-family="'Baloo Bhai 2'" font-color="#FFC805" font-size="landscape.130px, portrait.100px"  bg-color="transparent"  onEntry="this.fontWeight='800'; this.borderRadius='10px'; this.margin-top='65px'; this.margin-right='15px';">
                  </lido-text>
                </lido-image>
              </lido-cell>
              <lido-cell layout="col" visible="true" type="box" height="landscape.90%,portrait.41%" width="20%" bg-Color="transparent" onEntry="this.z-index='1';" onCorrect="this.boxAnimate='true';">
                <lido-image is-slice="true" bg-color="transparent" id="drop-image2" disable-edit="true" tab-index="26" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/sequence-box/tressure_top1.png" height="landscape.150px, portrait.150px" width="landscape.315px, portrait.200px" margin="landscape.-180px 0px -525px 0px, portrait.-200px 0px -715px 0px" >
                </lido-image>
                <lido-image is-slice="true" bg-color="transparent" id="drop-image2" disable-edit="true" tab-index="27" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/sequence-box/tressure_bottom1.png" height="landscape.250px, portrait.200px" width="landscape.315px, portrait.200px" margin="landscape.0px 0px -145px 0px, portrait.0px 0px -275px 0px" >
                  ${dropCells}
                </lido-image>
              </lido-cell>
              <lido-cell layout="col" visible="true" type="box" height="landscape.90%,portrait.41%" width="20%" bg-Color="transparent" onEntry="this.z-index='1';">
                <lido-image is-slice="true" bg-color="transparent" id="drop-image3" disable-edit="true" tab-index="30" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/sequence-box/tressure_top1.png" height="landscape.150px, portrait.150px" width="landscape.315px, portrait.200px" margin="landscape.-180px 0px -525px 0px, portrait.-200px 0px -715px 0px" >
                </lido-image>
                <lido-image is-slice="true" bg-color="transparent" id="drop-image3" disable-edit="true" tab-index="31" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/sequence-box/tressure_bottom1.png" height="landscape.250px, portrait.200px" width="landscape.315px, portrait.200px" margin="landscape.0px 0px -145px 0px, portrait.0px 0px -275px 0px" >
                  <lido-text id="drop-${number4}" tab-index="${number4}" disable-edit="true" height="landscape.130px portrait.100px" width="125px" visible="true" value="${number4}" string="${number4}" font-family="'Baloo Bhai 2'" font-color="#FFC805" font-size="landscape.130px, portrait.100px"  bg-color="transparent"  onEntry="this.fontWeight='800'; this.borderRadius='10px'; this.margin-top='65px'; this.margin-right='15px';">
                  </lido-text>
                </lido-image>
              </lido-cell>
            </lido-cell>

            <!-- answers drag cell -->
            <lido-cell layout="landscape.wrap, portrait.wrap" aria-hidden="true" visible="true" height="landscape.40%,portrait.40%" width="95%" bg-Color="transparent" margin="landscape.530px 0px 0px 0px,portrait.55px 0px 125px 0px" onEntry="this.z-index='1'; this.grid-template-columns='repeat(auto-fill, minmax(140px, auto))'; this.gridTemplateRows='repeat(auto-fit, 145px)'; this.flexWrap='wrap'; this.justify-content='center';" gap="5px">
              ${dragCells}
            </lido-cell>
          </lido-container>

    </main>
  `;
}
