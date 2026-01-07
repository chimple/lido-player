import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { index } from 'mathjs';

type TextColors = {
  colors: string[];
};

const meta: Meta = {
  title: 'Templates/palEgra_OddOneOut',
  argTypes: {
    options: { control: 'object' },
    PracticeMode: { control: 'boolean' },
  },
};

export default meta;

export const palEgra_OddOneOut: StoryObj = {
  args: {
    question_text: 'विषम का चयन कीजिये',
    options: ['तन', '@नर', 'मन', 'जन'],
    PracticeMode: false,
  },
  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

function getContainerXml(args) {
 const option_cells = args.options.map((q, index) => {
  return `
      <lido-cell layout="row" id="text${1+index}"  template-id="mcq" visible="true" margin="" onEntry="this.border-radius='14px'; this.justify-content='center'; this.alignItems='center';" height="landscape.280px,portrait.244px" width="landscape.328px,portrait.244px" bg-color="orange"  type="click" value="${q.startsWith('@') ? q.slice(1) : q}">
        <lido-text visible="true" value="${q.startsWith('@') ? q.slice(1) : q}" tab-index="${13+index}" string="${q.startsWith('@') ? q.slice(1) : q}" disable-speak="true" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.79px, portrait.100px"  bg-color="orange" onEntry="this.fontWeight='700';">
        </lido-text>
      </lido-cell>
  `;
}).join('');

    // ---------------------- FINAL XML ----------------------
  return `
<main>
<lido-container disable-speak="true"  visible="true" id="lido-container" template-id="mcq" onInCorrect="lido-avatar.avatarAnimate='Fail';this.sleep='2000';" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2300';" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/PAL-EGRA/fb207af37ae5d938778718e0095fc36abef7c694.png" objective="${(args.options.find(q => q.startsWith('@')) || '').slice(1)}" is-continue-on-correct="${args.PracticeMode}" is-allow-only-correct="${args.PracticeMode}" custom-style= "#text {
        box-shadow: none !important;
        }" onEntry="questionText.speak='true';">
	 <!-- Chimple Avatar -->
      <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.330px,portrait.378px" width="landscape.292px,portrait.382px"
       x="landscape.40%, portrait.30%" y="landscape.26%, portrait.78%" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="">
        <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
        </lido-avatar>
      </lido-cell>

        <lido-cell layout="landscape.col, portrait.row" aria-hidden="true" visible="true" height="landscape.100%,portrait.150px" width="landscape.100%, portrait.80%" bg-Color="transparent" margin="landscape.46px 0px 0px 0px,portrait.20px 0px 0px 0px" onEntry="this.z-index='1'; this.justify-content='center'; this.alignItems='center'; this.gap='278px';">
            <!-- question cells -->
          <lido-cell layout="landscape.row, portrait.col" visible="true" margin="landscape.0px 0px 0px 0px,portrait.-168px 0px 0px 0px" onEntry="this.border-radius='26px'; this.border='2px solid #FFB612'; this.justify-content='center'; this.align-items='center';" height="landscape.auto,portrait.42%" width="landscape.auto,portrait.100%" bg-color="#FFF5BB" padding="8px 35px">				
            <lido-text visible="true" id="questionText" tab-index="11" value="" string="${args.question_text}" font-family="'Baloo Bhai 2'" font-color="#07004E" font-size="${args.question_text.length <= 17 ? '90px' : '70px'}" bg-color="" onEntry="this.fontWeight='700';">
            </lido-text>  
          </lido-cell>

          <!-- options cells -->
	      	<lido-cell layout="landscape.row, portrait.col" visible="true" margin="landscape.0px 38px 0px 0px,portrait.0" onEntry="this.border-radius='26px';" height="landscape.290px,portrait.35%" width="landscape.100%,portrait.100%" bg-color="transparent">
            ${option_cells}
          </lido-cell>
        </lido-cell>
                  

</lido-container>
</main>
`;
}
