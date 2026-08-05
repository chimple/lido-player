import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

type PalEgma1Args = {
  missingNumber: string;
  number1: string;
  number2: string;
  options: string[];
  sign?: string;
  isAllowOnlyCorrect?: boolean;
};

const meta: Meta<PalEgma1Args> = {
  title: 'Templates/palEgmaCalculateSum',
  argTypes: {
    missingNumber: { control: 'text', name: 'missing number' },
    number1: { control: 'text', name: 'Number 1' },
    number2: { control: 'text', name: 'Number 2' },
    options: { control: 'object', name: 'digits' },
    sign: { control: 'text', name: 'sign', defaultValue: '+' },
    isAllowOnlyCorrect: { control: 'boolean', name: 'isAllowOnlyCorrect' },
  },
  args: {
    missingNumber: '60',
    number1: '36',
    number2: '24',
    sign: '+',
    options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    isAllowOnlyCorrect: true,
  },
};

export default meta;

export const PalEgmaSumTogether : StoryObj = {

  render: (args: PalEgma1Args) => {
    const xml = getContainerXml(args);
    return html`<lido-home xml-data="${xml}" xmlData="${xml}"></lido-home>`;
  },
};

function getContainerXml(args: PalEgma1Args) {
  const missingNumber = args.missingNumber;
  const number1 = args.number1;
  const number2 = args.number2;
  const options = args.options;
  const sign = args.sign ?? '+';
  const isAllowOnlyCorrect = args.isAllowOnlyCorrect ?? true;

  const objectiveString = `${missingNumber.split('').join(',')}`;

  const objectiveArray = missingNumber.split(''); 
  

  const dropCells = objectiveArray
    .map(
      (cell, i) => `
      <lido-text visible="true" id="drop-${i}" type="drop" tab-index="${25+i}" height="212px" width="130px" string="?" font-family="'Baloo Bhai 2'" font-color="black" font-size="140px"  bg-color="#FFF5BBB2" value="${cell}" onEntry="this.fontWeight='700';this.border='2px solid #FFB612';this.border-radius='16px';" >
      </lido-text>	
      `
    )
    .join('\n');

  const dragCells = options
  .map(
    (digit, i) => `
      <lido-text id="drag-${digit}" disable-speak="true" tab-index="${50+i}" height="landscape.212px, portrait.125px" width="landscape.140px, portrait.90px" visible="true" value="${digit}" string="${digit}" font-family="'Baloo Bhai 2'" font-color="black" type="drag" font-size="104px"  bg-color="#FFAC4C"  onEntry="this.fontWeight='800'; this.borderRadius='16px'; this.flex-shrink='0';" border-image="" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';">
      </lido-text>
    `
  )
  .join('\n');

  return `
    <main>
        <lido-container id="lido-container" disable-speak="true" objective="${objectiveString}" tab-index="1" template-id="dragAndDrop" show-drop-border="false" is-continue-on-correct="${isAllowOnlyCorrect}"  is-allow-only-correct="${isAllowOnlyCorrect}" value="mainContainer1" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/PAL-EGMA/pal_egma_temp_3.png" height="100%" width="100%" bg-color="transparent"  visible="true" onCorrect="this.questionBoxAnimate='true'; lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="this.justifyContent='space-around'; invisibleText.speak='true';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" drop-action="infinite-drop" show-check="false">

        
            <!-- Chimple Avatar -->
            <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos1" height="landscape.600px, portrait.700px" width="landscape.393px, portrait.485px" x="landscape.1310px, portrait.450px" y="landscape.100px, portrait.1020px" aria-hidden="true" z="1" bg-color="transparent" visible="true"  onEntry="this.flex-shrink='0';">
                <lido-avatar id="lido-avatar" disable-edit="true" visible="true"  height="inherit"  width="inherit" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" altText="{chimpleCharacterRive}" onEntry="">
                </lido-avatar>
                <lido-image id="image" disable-edit="true" value="image" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/Shadow.png" bg-color="transparent" width="inherit" height="27px" x="landscape.-7px, portrait.-7px" y="landscape.450px, portrait.540px" altText="{shadowImage}">
                </lido-image>
            </lido-cell>

            <lido-text id="invisibleText" tab-index="2" audio="" width="297px" height="80px" display="flex" font-size="12px" z="1" font-color="black" value="solve the equation and drag the correct answer" string="solve the equation and drag the correct answer" visible="false" bg-color="transparent" onEntry="">
            </lido-text> 

            <!-- question row-->
            <lido-cell layout="row" id="question-row" aria-hidden="true" visible="true" height="landscape.15%,portrait.15%" width="landscape.65%, portrait.90%" bg-Color="transparent" margin="landscape.215px 0px 30px 0px,portrait.25px 0px -120px 0px" onEntry="this.z-index='1'; this.justify-content='center';" gap="landscape.60px,portrait.40px">
                <lido-text id="num-1" height="215px" width="120px" visible="true"  value="${number1}" string="${number1}" font-family="'Baloo Bhai 2'" font-color="black" font-size="140px"  bg-color="transparent" onInCorrect="" onEntry="this.font-weight='700'; this.borderRadius='10px'; this.flex-flow='column-reverse'; this.opacity='1';" border-image="">
                </lido-text>
                <lido-text id="operator"  height="295px" width="120px" visible="true"  value="${sign}" string="${sign}" font-family="'Baloo Bhai 2'" font-color="black" font-size="140px"  bg-color="transparent" onInCorrect="" onEntry="this.font-weight='700'; this.borderRadius='10px'; this.flex-flow='column-reverse'; this.opacity='1';" border-image="">
                </lido-text>
                <lido-text id="num-2"  height="215px" width="120px" visible="true"  value="${number2}" string="${number2}" font-family="'Baloo Bhai 2'" font-color="black" font-size="140px"  bg-color="transparent" onInCorrect="" onEntry="this.font-weight='700'; this.borderRadius='10px'; this.flex-flow='column-reverse'; this.opacity='1';" border-image="">
                </lido-text>
                <lido-text id="equal" height="215px" width="120px" visible="true"  value="=" string="=" font-family="'Baloo Bhai 2'" font-color="black" font-size="140px"  bg-color="transparent" onInCorrect="" onEntry="this.font-weight='700'; this.borderRadius='10px'; this.flex-flow='column-reverse'; this.opacity='1';" border-image="">
                </lido-text>
                <lido-cell layout="row" is-slice="true" visible="true" height="landscape.20%,portrait.41%" width="auto" bg-Color="transparent" onEntry="this.z-index='1';" onCorrect="" gap="landscape.10px,portrait.5px">
                  ${dropCells}
                </lido-cell>
            </lido-cell>


            <!-- answers drag cell -->
            <!-- option row-->
            <lido-cell layout="landscape.row, portrait.wrap" id="option-row" aria-hidden="true" visible="true" height="landscape.15%,portrait.5%" width="landscape.90%, portrait.106%" bg-Color="transparent" margin="landscape.65px 0px 65px 0px,portrait.-160px -65px 500px 0px" onEntry="this.z-index='1'; this.justify-content='center'; this.opacity='1';" gap="landscape.20px,portrait.5px">
                ${dragCells}
            </lido-cell>
        </lido-container>
    </main>
  `;
}
