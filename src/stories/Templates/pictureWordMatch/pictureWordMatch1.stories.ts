import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Templates/pictureWordMatch1',
  argTypes: {
  option1: { control: 'text' },
  option2: { control: 'text' },
  option3: { control: 'text' },
  option4: { control: 'text' },
  option5: { control: 'text' },
  
  img1: { control: 'file' },
  img2: { control: 'file' },
  img3: { control: 'file' },
  img4: { control: 'file' },
  img5: { control: 'file' },
    
  answer1: { control: 'text' },
  answer2: { control: 'text' },
  answer3: { control: 'text' },
  answer4: { control: 'text' },
  answer5: { control: 'text' },
PracticeMode: { control: 'boolean' },
  },
};
export default meta;

export const pictureWordMatch1: StoryObj = {
  args: {
  option1:"boy",
  option2:"cat",
  option3:"bag",
  option4:"sun",
  option5:"dog", 
  
PracticeMode: true,
  
   img1:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/palEgra-pictureWordMatch/CAT.png",
   img2:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/palEgra-pictureWordMatch/SUN.png ",
   img3:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/palEgra-pictureWordMatch/BAG.png",
   img4:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/palEgra-pictureWordMatch/BOY.png",
   img5:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/palEgra-pictureWordMatch/DOG.png",
   answer1: "cat",
   answer2: "sun",
   answer3: "bag",
   answer4: "boy",
   answer5: "dog",
  
  },

  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

 

function getContainerXml(args) {
    let tabCounter = 1;
    const {  isAllowOnlyCorrect = true } = args;
   

  return `<main>
   <lido-container show-drop-border="false"  visible="true" template-id="dragAndDrop" id="lido-container" objective="${args.answer1},${args.answer2},${args.answer3},${args.answer4},${args.answer5}" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/palEgra-pictureWordMatch/bgImg.png" onInCorrect="lido-avatar.avatarAnimate='Fail';this.sleep='2000';" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2300';" is-continue-on-correct="true" is-allow-only-correct="${isAllowOnlyCorrect}" onEntry="inst.speak='true';">

		<!-- Chimple Avatar -->
		<lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.344px,portrait.402px" width="landscape.296px,portrait.398px" x="landscape.94%, portrait.28%" y="landscape.61%, portrait.77%" aria-hidden="true" z="1" bg-color="transparent" visible="true" >
			<lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
			</lido-avatar>
		</lido-cell>
		<lido-text visible="false" id="inst" tab-index="1" string="drag and drop the correct option to match the picture given"></lido-text>
<lido-cell visible="true" layout="col" height="85%" width="98%" bg-color="transparent" margin="61px 0px -58px 0px">

  <lido-cell layout="row" visible="true" height="270px" width="90%" bg-color="transparent">
    <lido-image visible="true" height="261px" width="260px" src="${args.img1}"></lido-image>
    <lido-image visible="true" height="261px" width="260px" src="${args.img2}"></lido-image>
    <lido-image visible="true" height="261px" width="260px" src="${args.img3}"></lido-image>
    <lido-image visible="true" height="261px" width="260px" src="${args.img4}"></lido-image>
    <lido-image visible="true" height="261px" width="260px" src="${args.img5}"></lido-image>
  </lido-cell>
  <lido-cell visible="true" layout="row" height="270px" width="90%" bg-color="transparent">
    <lido-text type="drop" value="${args.answer1}" tab-index="8" id="drop1" visible="true" height="122px" width="225px" onEntry="this.border-radius='16px';" ></lido-text>
    <lido-text type="drop" value="${args.answer2}" id="drop2" tab-index="9" visible="true" height="122px" width="225px" onEntry="this.border-radius='16px';"></lido-text>
    <lido-text type="drop" value="${args.answer3}" id="drop3" tab-index="10" visible="true" height="122px" width="225px" onEntry="this.border-radius='16px';"></lido-text>
    <lido-text type="drop" value="${args.answer4}" id="drop4" tab-index="11" visible="true" height="122px" width="225px" onEntry="this.border-radius='16px';"></lido-text>
    <lido-text type="drop" value="${args.answer5}" id="drop5" tab-index="12" visible="true" height="122px" width="225px" onEntry="this.border-radius='16px';"></lido-text>
  </lido-cell>
  <lido-cell visible="true" layout="row"  height="270px" width="90%" bg-color="transparent" onEntry="this.align-items='center';this.justify-content='space-around';">
    <lido-text visible="true" height="122px" disable-speak="true" width="225px" type="drag" id="drag1" tab-index="2" string="${args.option1}" value="${args.option1}" font-family="'Baloo Bhai 2'" font-color="black" font-size="80px"  bg-color="#FFAC4C" onEntry="this.font-weight='700';this.border-radius='16px';" ></lido-text>
    <lido-text visible="true" height="122px" disable-speak="true" width="225px" type="drag" id="drag2" tab-index="3" string="${args.option2}" value="${args.option2}" font-family="'Baloo Bhai 2'" font-color="black" font-size="80px"  bg-color="#FFAC4C" onEntry="this.font-weight='700';this.border-radius='16px';" ></lido-text>
    <lido-text visible="true" height="122px" disable-speak="true" width="225px" type="drag" id="drag3" tab-index="4" string="${args.option3}" value="${args.option3}" font-family="'Baloo Bhai 2'" font-color="black" font-size="80px"  bg-color="#FFAC4C" onEntry="this.font-weight='700';this.border-radius='16px';" ></lido-text>
    <lido-text visible="true" height="122px" disable-speak="true" width="225px" type="drag" id="drag4" tab-index="5" string="${args.option4}" value="${args.option4}" font-family="'Baloo Bhai 2'" font-color="black" font-size="80px"  bg-color="#FFAC4C" onEntry="this.font-weight='700';this.border-radius='16px';" ></lido-text>
    <lido-text visible="true" height="122px" disable-speak="true" width="225px" type="drag" id="drag5" tab-index="6" string="${args.option5}" value="${args.option5}" font-family="'Baloo Bhai 2'" font-color="black" font-size="80px"  bg-color="#FFAC4C" onEntry="this.font-weight='700';this.border-radius='16px';" ></lido-text>
  </lido-cell>

</lido-cell>

	</lido-container>
  </main>`;
}
