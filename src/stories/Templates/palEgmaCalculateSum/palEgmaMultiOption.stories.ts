import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

type PalEgma2Args = {
  number1: string;
  number2: string;
  options: string[];
  sign?: string;
  isAllowOnlyCorrect?: boolean;
};

const meta: Meta<PalEgma2Args> = {
  title: 'Templates/palEgmaCalculateSum',
  argTypes: {
    number1: { control: 'text', name: 'Number 1' },
    number2: { control: 'text', name: 'Number 2' },
    options: { control: 'object', name: 'options' },
    sign: { control: 'text', name: 'sign', defaultValue: '+' },
    isAllowOnlyCorrect: { control: 'boolean', name: 'isAllowOnlyCorrect' },
  },
  args: {
    number1: '3',
    number2: '2',
    sign: '+',
    options: ['1', '7', '5', '9'],
    isAllowOnlyCorrect: true,
  },
};
 
export default meta;

export const PalEgmaMultiOption : StoryObj = {

  render: (args: PalEgma2Args) => {
    const xml = getContainerXml(args);
    return html`<lido-home xml-data="${xml}" xmlData="${xml}"></lido-home>`;
  },
};

function getContainerXml(args: PalEgma2Args) {
  const number1 = args.number1;
  const number2 = args.number2;
  const options = args.options;
  const sign = args.sign ?? '+';
  const isAllowOnlyCorrect = args.isAllowOnlyCorrect ?? true;

  const objective = String(Number(number1) + Number(number2));


  const imageCells1 = Array.from({ length: Number(number1) }, (_, i) => i + 1)
  .map(
      (digit, i) => `
        <lido-image id="image1-${digit}" height="landscape.140px, portrait.125px" width="60px" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/PAL-EGMA/Kulfi.png" bg-color="transparent" border-image="">
        </lido-image>
      `
    )
    .join('\n');

  const imageCells2 = Array.from({ length: Number(number2) }, (_, i) => i + 1)
  .map(
      (digit, i) => `
        <lido-image id="image2-${digit}" height="landscape.140px, portrait.125px" width="60px" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/PAL-EGMA/Kulfi.png" bg-color="transparent" border-image="">
        </lido-image>
      `
    )
    .join('\n');

  const clickCells = options
  .map(
    (digit, i) => `
      <lido-text id="click-${digit}" tab-index="${50+i}" height="landscape.212px, portrait.125px" width="landscape.270px, portrait.90px" visible="true" value="${digit}" string="${digit}" font-family="'Baloo Bhai 2'" font-color="black" type="click" font-size="104px"  bg-color="#FFAC4C"  onEntry="this.fontWeight='800'; this.borderRadius='24px'; this.flex-shrink='0';" border-image="" onCorrect="this.cellBorderAnimate='#65BC46';" onInCorrect="this.vibrate='horizontal-shake';" >
      </lido-text>
    `
  )
  .join('\n');

  return `
    <main>
        <lido-container id="lido-container" objective="${objective}" tab-index="1" template-id="mcq" show-drop-border="false" is-continue-on-correct="true"  is-allow-only-correct="${isAllowOnlyCorrect}" value="mainContainer1" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/PAL-EGMA/pal_egma_temp_3.png" height="100%" width="100%" bg-color="transparent"  visible="true" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="this.justifyContent='space-around'; invisibleText.speak='true';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" drop-action="infinite-drop" show-check="false">

            <!-- Chimple Avatar -->
            <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos1" height="landscape.600px, portrait.700px" width="landscape.393px, portrait.485px" x="landscape.1310px, portrait.450px" y="landscape.418px, portrait.1020px" aria-hidden="true" z="1" bg-color="transparent" visible="true"  onEntry="this.flex-shrink='0';">
                <lido-avatar id="lido-avatar" disable-edit="true" visible="true"  height="inherit"  width="inherit" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" altText="{chimpleCharacterRive}" onEntry="">
                </lido-avatar>
                <lido-image id="image" disable-edit="true" value="image" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/Shadow.png" bg-color="transparent" width="inherit" height="27px" x="landscape.-7px, portrait.-7px" y="landscape.450px, portrait.540px" altText="{shadowImage}">
                </lido-image>
            </lido-cell>

            <lido-text id="invisibleText" tab-index="2" audio="" width="297px" height="80px" display="flex" font-size="12px" z="1" font-color="black" value="solve the equation and click the correct answer" string="solve the equation and click the correct answer" visible="false" bg-color="transparent" onEntry="">
            </lido-text> 


            <!-- question row-->
            <lido-cell layout="row" id="question-row" aria-hidden="true" visible="true" height="landscape.15%,portrait.15%" width="landscape.65%, portrait.90%" bg-Color="transparent" margin="landscape.215px 0px 30px 0px,portrait.25px 0px -120px 0px" onEntry="this.z-index='1'; this.justify-content='center';" gap="landscape.35px,portrait.40px">
                <lido-cell layout="col" is-slice="true" visible="true" height="landscape.245px,portrait.41%" width="auto" bg-Color="#FFF5BB" onEntry="this.z-index='1'; this.borderRadius='16px';" onCorrect="">
                  <lido-cell layout="row" is-slice="true" visible="true" height="landscape.15%,portrait.41%" width="auto" bg-Color="transparent" onEntry="this.z-index='1';" onCorrect="">
                    ${imageCells1}
                  </lido-cell>
                  <lido-cell layout="row" is-slice="true" visible="true" height="landscape.5%,portrait.41%" width="inherit" bg-Color="transparent" onEntry="this.z-index='1';" onCorrect="">
                    <lido-text id="num-1" is-slice="true"  disable-edit="true" height="landscape.156px, portrait.125px" width="inherit" visible="true" value="${number1}" string="${number1}" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.90px, portrait.100px"  bg-color="transparent"  onEntry="this.fontWeight='700'; this.borderRadius='16px';" border-image="">
                    </lido-text>
                  </lido-cell>
                </lido-cell>
                <lido-text id="operator"  height="295px" width="120px" visible="true"  value="${sign}" string="${sign}" font-family="'Baloo Bhai 2'" font-color="black" font-size="140px"  bg-color="transparent" onInCorrect="" onEntry="this.font-weight='700'; this.borderRadius='10px'; this.flex-flow='column-reverse'; this.opacity='1';" border-image="">
                </lido-text>
                <lido-cell layout="col" is-slice="true" visible="true" height="landscape.245px,portrait.41%" width="auto" bg-Color="#FFF5BB" onEntry="this.z-index='1'; this.borderRadius='16px';" onCorrect="">
                  <lido-cell layout="row" is-slice="true" visible="true" height="landscape.15%,portrait.41%" width="auto" bg-Color="transparent" onEntry="this.z-index='1';" onCorrect="">
                    ${imageCells2}
                  </lido-cell>
                  <lido-cell layout="row" is-slice="true" visible="true" height="landscape.5%,portrait.41%" width="inherit" bg-Color="transparent" onEntry="this.z-index='1';" onCorrect="">
                    <lido-text id="num-2" is-slice="true"  disable-edit="true" height="landscape.156px, portrait.125px" width="inherit" visible="true" value="${number2}" string="${number2}" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.90px, portrait.100px"  bg-color="transparent"  onEntry="this.fontWeight='700'; this.borderRadius='16px';" border-image="">
                    </lido-text>
                  </lido-cell>
                </lido-cell>
                <lido-text id="equal"  height="215px" width="120px" visible="true"  value="=" string="=" font-family="'Baloo Bhai 2'" font-color="black" font-size="140px"  bg-color="transparent" onInCorrect="" onEntry="this.font-weight='700'; this.borderRadius='10px'; this.flex-flow='column-reverse'; this.opacity='1';" border-image="">
                </lido-text>
                <lido-text id="drop-answer" disable-edit="true" height="landscape.287px, portrait.125px" width="208px" visible="true" value="5" string="?" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.140px, portrait.100px"  bg-color="transparent"  onEntry="this.fontWeight='700'; this.borderRadius='16px';" border-image="">
                </lido-text>
            </lido-cell>


            <!-- answers drag cell -->
            <!-- option row-->
            <lido-cell layout="landscape.row, portrait.wrap" id="option-row" aria-hidden="true" visible="true" height="landscape.15%,portrait.5%" width="landscape.90%, portrait.106%" bg-Color="transparent" margin="landscape.65px 0px 65px 0px,portrait.-160px -65px 500px 0px" onEntry="this.z-index='1'; this.justify-content='center'; this.opacity='1';" gap="landscape.20px,portrait.5px">
                ${clickCells}
            </lido-cell>
        </lido-container>

    </main>
  `;
}
