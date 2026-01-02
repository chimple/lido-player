import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Templates/pictureClues',
  argTypes: {
  option1: { control: 'text' },
  option2: { control: 'text' },
  option3: { control: 'text' },
  option4: { control: 'text' },
  option5: { control: 'text' },
  
  img1: { control: 'file' },
 
  sentenceParts: { control: 'object' },
  answer: { control: 'text' },
 
 PracticeMode: { control: 'boolean' },
  },
};
export default meta;

export const pictureClues: StoryObj = {
  args: {
  option1:"विद्यालय",
  option2:"पानी",
  option3:"पाठ",
  option4:"बस",
  option5:"बाजा", 
   sentenceParts: [
  'ज़ोर ज़ोर से',
  '#बाजा',
  'बजा।।'
],
 PracticeMode: false,
  
   img1:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/picture_Clues/f1.png",
   
   answer: "बाजा",
   
  
  },

  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

 
function renderSentencePart(text: string, id: string) {
  // DROP case
  if (text.startsWith('#')) {
    const value = text.replace('#', '').trim();

    return `
      <lido-text type="drop" drop-attr="stretch" value="${value}" id="${id}" visible="true" height="136px" width="200px" y="19px" onEntry="this.position='relative';this.margin-right='40px';this.border='4px solid #A8B53A';this.border-radius='16px';"></lido-text>
    `;
  }

  // NORMAL TEXT case
  return `
    <lido-text visible="true" height="100px" width="auto" id="${id}" string="${text}" font-family="'Baloo Bhai 2'" font-color="black" font-size="80px" bg-color="transparent" onEntry="  this.font-weight='700';  this.border-radius='16px';  this.margin-right='40px'; " ></lido-text>
  `;
}

function getContainerXml(args) {
    let tabCounter = 1;
    const {  isAllowOnlyCorrect = true } = args;
   
  const { sentenceParts = [] } = args;
  return `<main>
    <lido-container show-drop-border="false" visible="true" template-id="dragAndDrop" id="lido-container" objective="बाजा" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/palEgra-pictureWordMatch/bgImg.png" onInCorrect="lido-avatar.avatarAnimate='Fail';this.sleep='2000';" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2300';" is-continue-on-correct="true" is-allow-only-correct="${isAllowOnlyCorrect}" onEntry="inst.speak='true';">

    <!-- Chimple Avatar -->
    <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.344px,portrait.402px" width="landscape.296px,portrait.398px" x="landscape.85%, portrait.28%" y="landscape.21%, portrait.77%" aria-hidden="true" z="1" bg-color="transparent" visible="true">
        <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="">
        </lido-avatar>
    </lido-cell>

    <lido-text visible="false" id="inst" tab-index="1" string="drag and drop the correct option to form a sentence"></lido-text>

    <lido-cell visible="true" layout="col" height="85%" width="98%" bg-color="transparent" margin="61px 0px -58px 0px">
        <lido-cell layout="row" visible="true" height="330px" width="330px" bg-color="transparent">
            <lido-image   tab-index="8"  visible="true" height="auto" width="auto" src="${args.img1}"></lido-image>
    
            </lido-cell>
        <lido-cell layout="flex" visible="true" height="270px" width="auto" onEntry="this.display='ruby';" bg-color="transparent">
          ${sentenceParts
      .map((part, index) =>
        renderSentencePart(part, `sentence-${index}`)
      )
      .join('')}
        </lido-cell>
        <lido-cell layout="row" visible="true" height="270px" width="90%" bg-color="transparent" onEntry="this.align-items='center';this.justify-content='space-around';">
            <lido-text visible="true" height="136px" width="auto" disable-speak="true" type="drag" id="drag1" tab-index="2" string="${args.option1}" value="${args.option1}" font-family="'Baloo Bhai 2'" font-color="black" font-size="80px"  bg-color="#FFAC4C" onEntry="this.font-weight='700';this.padding='10px 45px 10px 45px'; this.border-radius='16px';" ></lido-text>
            <lido-text visible="true" height="136px" width="auto" disable-speak="true" type="drag" id="drag2" tab-index="3" string="${args.option2}" value="${args.option2}" font-family="'Baloo Bhai 2'" font-color="black" font-size="80px"  bg-color="#FFAC4C" onEntry="this.font-weight='700';this.padding='10px 45px 10px 45px';this.border-radius='16px';" ></lido-text>
            <lido-text visible="true" height="136px" width="auto" disable-speak="true" type="drag" id="drag3" tab-index="4" string="${args.option3}" value="${args.option3}" font-family="'Baloo Bhai 2'" font-color="black" font-size="80px"  bg-color="#FFAC4C" onEntry="this.font-weight='700';this.padding='10px 45px 10px 45px';this.border-radius='16px';" ></lido-text>
            <lido-text visible="true" height="136px" width="auto" disable-speak="true" type="drag" id="drag4" tab-index="5" string="${args.option4}" value="${args.option4}" font-family="'Baloo Bhai 2'" font-color="black" font-size="80px"  bg-color="#FFAC4C" onEntry="this.font-weight='700';this.padding='10px 45px 10px 45px';this.border-radius='16px';" ></lido-text>
            <lido-text visible="true" height="136px" width="auto" disable-speak="true" type="drag" id="drag5" tab-index="6" string="${args.option5}" value="${args.option5}" font-family="'Baloo Bhai 2'" font-color="black" font-size="80px"  bg-color="#FFAC4C" onEntry="this.font-weight='700';this.padding='10px 45px 10px 45px';this.border-radius='16px';" ></lido-text>
        
        </lido-cell>
    </lido-cell>

</lido-container>
  </main>`;
}
