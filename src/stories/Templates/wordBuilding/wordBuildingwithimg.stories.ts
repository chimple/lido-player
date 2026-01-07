import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Templates/wordBuildingwithimg',
  argTypes: {
  option1: { control: 'text' },
  option2: { control: 'text' },
  option3: { control: 'text' },
  option4: { control: 'text' },
  option5: { control: 'text' },
  
  
  letter1: { control: 'text' },
   letter2: { control: 'text' },
    img:{control:'file'},
    word:{control:'text'},
  answer: { control: 'text' },
  PracticeMode: { control: 'boolean' },
 
  },
};
export default meta;

export const wordBuildingwithimg: StoryObj = {
  args: {
  option1:"C",
  option2:"W",
  option3:"S",
  option4:"P",
  option5:"M",
  img:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/WordBuilding/image.png",
PracticeMode: true,
  word:"CAT",
   letter1:"A",
   letter2:"T",
   answer: "C",
  
  },

  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

 function getContainerXml(args) {
const {  isAllowOnlyCorrect = true } = args;

  return `<main>
   <lido-container disable-speak="true" visible="true" id="lido-container" template-id="mcq"  objective="${args.answer}" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/WordBuilding/bgImage.png"  onInCorrect="lido-avatar.avatarAnimate='Fail';this.sleep='2000';" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='1200';data.z-index='100'; data.boxShadow='0 0 40px #FFC107';this.sleep='300'; this.sleep='400'; data.boxShadow='none';this.sleep='2000';" is-continue-on-correct="${args.PracticeMode}" is-allow-only-correct="${args.PracticeMode}" onEntry="blank.z-index='12';">
<!-- Chimple Avatar -->
		<lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape. 373px,portrait.402px" width="landscape.304px,portrait.398px" x="landscape.0%, portrait.28%" y="landscape.51%, portrait.77%" aria-hidden="true" z="1" bg-color="transparent" visible="true" >
			<lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
			</lido-avatar>
			
	
		</lido-cell>
    <lido-text visible="false" z-index="0" tab-index="19"  audio="" id="inst" string="Choose the correct letter to form a word" ></lido-text>
	<!--	<lido-text visible="true" z-index="1" height="114px" id="data" string="${args.word}" font-family="'Baloo Bhai 2'" font-color="black" font-size="144px"  bg-color="transparent" y="23%" x="-203px"	onEntry="this.fontWeight='700';this.position='relative';" ></lido-text>-->
	<lido-cell visible="true" layout="col" height="84%" width="95%" bg-color="transparent" margin="5px -126px -107px 0px">
		<lido-cell visible="true" id="xx" layout="row" height="auto" width="907px" bg-color="#FFF5BB" onEntry="this.align-items='center';this.justify-content='space-evenly';this.border='2px solid #FFB612';this.border-radius='16px';">
			<lido-cell layout="row" id="blank" visible="true" z-index="2" height="200px" width="200px" onEntry="this.align-items='center';this.justify-content='center';">
		
			<lido-text visible="true" string="_" font-family="'Baloo Bhai 2'" font-color="black" font-size="140px"  bg-color="transparent" 	onEntry="this.fontWeight='700';" ></lido-text>
			<lido-text visible="true" string="${args.letter1}" font-family="'Baloo Bhai 2'" font-color="black" font-size="140px"  bg-color="transparent" 	onEntry="this.fontWeight='700';" ></lido-text>
			<lido-text visible="true" string="${args.letter2}" font-family="'Baloo Bhai 2'" font-color="black" font-size="140px"  bg-color="transparent" 	onEntry="this.fontWeight='700';" ></lido-text>
			</lido-cell>
			<lido-cell visible="true" height="330px" width="330px">
			<lido-image visible="true" heigth="auto"  width="auto" src="${args.img}"></lido-image>		
		</lido-cell>
	</lido-cell>
	<lido-cell visible="true" height="40%" width="79%"  layout="row" >
		<lido-text visible="true" type="click" value="${args.option1}" id="option1" tab-index="8" bg-color="#FFAC4C" height="212.4px" width="210px" string="${args.option1}"  font-family="'Baloo Bhai 2'" font-color="black" font-size="140px" onEntry="this.fontWeight='700';this.border-radius='16px';"></lido-text>
				<lido-text visible="true" disable-speak="true" value="${args.option2}" type="click" id="option2" tab-index="9" bg-color="#FFAC4C" height="212.4px" width="210px" string="${args.option2}"  font-family="'Baloo Bhai 2'" font-color="black" font-size="140px" onEntry="this.fontWeight='700';this.border-radius='16px';"></lido-text>
				<lido-text visible="true" disable-speak="true" value="${args.option3}" type="click" id="option3" tab-index="10" bg-color="#FFAC4C" height="212.4px" width="210px" string="${args.option3}"  font-family="'Baloo Bhai 2'" font-color="black" font-size="140px" onEntry="this.fontWeight='700';this.border-radius='16px';"></lido-text>
				<lido-text visible="true" disable-speak="true" value="${args.option4}" type="click" id="option3" tab-index="10" bg-color="#FFAC4C" height="212.4px" width="210px" string="${args.option4}"  font-family="'Baloo Bhai 2'" font-color="black" font-size="140px" onEntry="this.fontWeight='700';this.border-radius='16px';"></lido-text>
				<lido-text visible="true" disable-speak="true" value="${args.option5}" type="click" id="option3" tab-index="10" bg-color="#FFAC4C" height="212.4px" width="210px" string="${args.option5}"  font-family="'Baloo Bhai 2'" font-color="black" font-size="140px" onEntry="this.fontWeight='700';this.border-radius='16px';"></lido-text>
				
				
	</lido-cell>
	
	</lido-cell>
</lido-container>
  </main>`;
}
