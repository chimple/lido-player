import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { string } from 'mathjs';

type SumTogetherArgs = {
  number1: string;
  number2: string;
  answer: string;
  sign: string,
  options: string[];
  isAllowOnlyCorrect?: boolean;
};

const meta: Meta<SumTogetherArgs> = {
  title: 'Templates/sumTogether',
  argTypes: {
    number1: { control: 'text', name: 'Number 1' },
    number2: { control: 'text', name: 'Number 2' },
    answer: { control: 'text', name: 'answer' },
    sign: { control: 'text', name: 'sign', multiple: true},
    options: { control: 'object', name: 'digits' },
    isAllowOnlyCorrect: { control: 'boolean', name: 'isAllowOnlyCorrect' },
  },
  args: {
    number1: '10',
    number2: '9',
    answer: '1',
    sign: '-',
    options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    isAllowOnlyCorrect: true,
  },
};

export default meta;

export const SumTogether: StoryObj<SumTogetherArgs> = {
  args: {
    number1: "10",
    number2: "9",
    answer: "1",
    sign: "-"
  },

  render: (args: SumTogetherArgs) => {
    const xml = getContainerXml(args);
    return html`<lido-home xml-data="${xml}" xmlData="${xml}"></lido-home>`;
  }
  
};

function getContainerXml(args: SumTogetherArgs) {
  const number1 = args.number1;
  const number2 = args.number2;
  const answer = args.answer;
  const sign = args.sign;
  const options = args.options;
  const objective = answer
  const isAllowOnlyCorrect = args.isAllowOnlyCorrect ?? true;

  const numberMap : Record<number,string> = {
    1 : "one",
    2 : "two",
    3 : "three",
    4 : "four",
    5 : "five",
    6 : "six",
    7 : "seven",
    8 : "eight",
    9 : "nine",
    10 : "ten",
  }
  const topImageCells = options
    .map((cell, i) => {
    const val = numberMap[i + 1];
    return `
      <lido-image id="image-${i}" visible="true" width="105px" height="200px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/SumTogether/sum_together_${val}.png" onEntry="this.opacity='0';">
      </lido-image>
    `;
    }).join('\n');

  let tabCounter = 8;
  const dragCells = options
    .map((digit, i) => {
        return `
        <lido-text id="option-${i}" tab-index="${tabCounter++}" type="drag" height="195px" width="120px" visible="true" onInCorrect="this.speak='true';" onCorrect="this.speak='true';" value="${digit}" string="${digit}" font-family="'Baloo Bhai 2'" font-color="black" font-size="150px"  bg-color="white" onEntry="this.font-weight='800'; this.borderRadius='10px'; this.flex-flow='column-reverse';" border-image="">
        </lido-text>
        `
    }).join('\n');

  return `
    <main>
        
        <lido-container id="lido-container" disable-speak="true" show-drop-border="false" objective="${objective}" tab-index="1"  value="sum-together" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/background-images/Sum%20together.png"  height="100%" width="100%" bg-color="transparent"  visible="true" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="this.justifyContent='space-around'; this.sumTogetherAnimation='true';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="true" is-allow-only-correct="${isAllowOnlyCorrect}">

            <!-- Chimple Avatar -->
            <lido-cell layout="pos" id="pos1" disableEdit="true" value="pos1" height="landscape.570px, portrait.700px" width="landscape.380px, portrait.485px" x="landscape.-80px, portrait.195px" y="landscape.175px, portrait.1085px" ariaHidden="true" bg-color="transparent" visible="true"  onEntry="this.flex-shrink='0'; this.z-index='0';">
                <lido-avatar id="lido-avatar" disableEdit="true" visible="true"  height="inherit"  width="inherit" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" altText="{chimpleCharacterRive}" onEntry="">
                </lido-avatar>
            </lido-cell>

            <!-- speaking element-->
            <lido-text id="speak-text" tab-index="2" height="100%" width="100%" visible="false" string="solve the problem by counting the teddys above and drag the correct answer" font-family="'Baloo Bhai 2'" font-color="red" font-size="75px"  bg-color="transparent" onInCorrect="" onEntry="this.opacity='0'; this.speak='true';" border-image="">
            </lido-text>

            <!-- top section -->
            <lido-cell layout="landscape.row,portrait.wrap" id="top-row" aria-hidden="true" visible="true" height="landscape.15%,portrait.5%" width="landscape.100%, portrait.106%" bg-Color="transparent" margin="landscape.100px 0px 0px 0px,portrait.-130px -65px 0px 0px" onEntry="this.z-index='1'; this.justify-content='center';" gap="landscape.35px,portrait.5px">
                ${topImageCells}
            </lido-cell>

            <!-- question row-->
            <lido-cell layout="row" id="question-row" aria-hidden="true" visible="true" height="landscape.15%,portrait.15%" width="landscape.65%, portrait.90%" bg-Color="transparent" margin="landscape.185px 0px 30px 0px,portrait.25px 0px -120px 0px" onEntry="this.z-index='1'; this.justify-content='center';" gap="landscape.90px,portrait.40px">
                <lido-text id="num-${number1}" tab-index="3" height="215px" width="120px" visible="true"  value="${number1}" string="${number1}" font-family="'Baloo Bhai 2'" font-color="black" font-size="150px"  bg-color="transparent" onInCorrect="" onEntry="this.font-weight='800'; this.borderRadius='10px'; this.flex-flow='column-reverse'; this.opacity='0';" border-image="">
                </lido-text>
                <lido-text id="operator-${sign}" tab-index="4" height="295px" width="120px" visible="true"  value="${sign}" string="${sign}" font-family="'Baloo Bhai 2'" font-color="black" font-size="195px"  bg-color="transparent" onInCorrect="" onEntry="this.font-weight='800'; this.borderRadius='10px'; this.flex-flow='column-reverse'; this.opacity='0';" border-image="">
                </lido-text>
                <lido-text id="num-${number2}" tab-index="5" height="215px" width="120px" visible="true"  value="${number2}" string="${number2}" font-family="'Baloo Bhai 2'" font-color="black" font-size="150px"  bg-color="transparent" onInCorrect="" onEntry="this.font-weight='800'; this.borderRadius='10px'; this.flex-flow='column-reverse'; this.opacity='0';" border-image="">
                </lido-text>
                <lido-text id="equal" tab-index="6" height="215px" width="120px" visible="true"  value="=" string="=" font-family="'Baloo Bhai 2'" font-color="black" font-size="150px"  bg-color="transparent" onInCorrect="" onEntry="this.font-weight='800'; this.borderRadius='10px'; this.flex-flow='column-reverse'; this.opacity='0';" border-image="">
                </lido-text>
                <lido-image is-slice="true" height="225px" width="175px" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/sequence-box/card-slot_empty.png" onEntry="this.opacity='0';">
                  <lido-text id="number-${answer}" height="225px" width="175px" visible="true" tab-index="7" value="${answer}" string="?" font-family="'Baloo Bhai 2'" font-color="black" font-size="150px" type="drop" bg-color="transparent" onEntry="this.font-weight='800'; this.borderRadius='10px'; this.flex-flow='column-reverse'; this.opacity='1';">
                  </lido-text>
                </lido-image>
            </lido-cell>


            <!-- option row-->
            <lido-cell layout="landscape.row, portrait.wrap" id="option-row" aria-hidden="true" visible="true" height="landscape.15%,portrait.5%" width="landscape.90%, portrait.106%" bg-Color="transparent" margin="landscape.65px 0px 65px 0px,portrait.-160px -65px 500px 0px" onEntry="this.z-index='1'; this.justify-content='center'; this.opacity='0';" gap="landscape.20px,portrait.5px">
                ${dragCells}
            </lido-cell>
            
        </lido-container>
    </main>
  `;
}
