import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Templates/substractionWithoutImg',
  argTypes: {
  
  
  text1: { control: 'text' },
   text2: { control: 'text' },
    
  answers: { control: 'text' },
   PracticeMode: { control: 'boolean' },
 
  },
};
export default meta;

export const substractionWithoutImg: StoryObj = {
  args: {
  

   text1:"36",
   text2:"12",
   answers: "2,4",
  PracticeMode: true,
  },

  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

function getContainerXml(args) {
	const {  isAllowOnlyCorrect = true } = args;
    let tabCounter = 1;
  return `<main>
   <lido-container  drop-action="infinite-drop" visible="true" template-id="dragAnDrop" id="lido-container" objective="${args.answers}" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/pal-Subtraction/Frame.png" onInCorrect="lido-avatar.avatarAnimate='Fail';this.sleep='2000';" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2300';" is-continue-on-correct="true" is-allow-only-correct="${isAllowOnlyCorrect}" onEntry="inst.speak='true';text1.speak='true';text2.speak='true';text3.speak='true';text4.speak='true';">

		<!-- Chimple Avatar -->
		<lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.344px,portrait.402px" width="landscape.296px,portrait.398px" x="landscape.83%, portrait.28%" y="landscape.40%, portrait.77%" aria-hidden="true" z="1" bg-color="transparent" visible="true" >
			<lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
			</lido-avatar>
		</lido-cell>
		<lido-text visible="false" id="inst" tab-index="1" string="drag and drop the correct option"></lido-text>

		<lido-cell visible="true" layout="col" height="95%" width="90%" bg-color="transparent" y="9%" onEntry="this.align-items='center';this.justify-content='space-around';this.position='relative';" >
			<lido-cell layout="row" visible="true" height="400px" width="825px" onEntry="this.align-items='center'; this.justify-content='space-around';">
				<lido-text visible="true" id="text1" tab-index="2" string="${args.text1}" font-family="'Baloo Bhai 2'" font-color="black" font-size="140px"  bg-color="transparent" 
					onEntry="this.fontWeight='700';"></lido-text>
				<lido-text visible="true" id="text2" tab-index="3" string="-"  font-family="'Baloo Bhai 2'" font-color="black" font-size="140px"  bg-color="transparent" 
					onEntry="this.fontWeight='700';"></lido-text>
				<lido-text visible="true" id="text3" tab-index="4" string="${args.text2}"  font-family="'Baloo Bhai 2'" font-color="black" font-size="140px"  bg-color="transparent" 
					onEntry="this.fontWeight='700';"></lido-text>
				<lido-text visible="true" id="text4" tab-index="5" string="="  font-family="'Baloo Bhai 2'" font-color="black" font-size="140px"  bg-color="transparent" 
					onEntry="this.fontWeight='700';"></lido-text>
				<lido-text visible="true" id="drop1" type="drop" tab-index="6" height="212px" width="130px" string="?" font-family="'Baloo Bhai 2'" font-color="black" font-size="140px"  bg-color="#FFF5BBB2" value="2"
					onEntry="this.fontWeight='700';this.border='2px solid #FFB612';this.border-radius='16px';" ></lido-text>	
					<lido-text visible="true" type="drop" value="4" id="drop2" tab-index="7" height="212px" width="130px" string="?" font-family="'Baloo Bhai 2'" font-color="black" font-size="140px"  bg-color="#FFF5BBB2" 
					onEntry="this.fontWeight='700';this.border='2px solid #FFB612';this.border-radius='16px';" ></lido-text>	
			</lido-cell>
			<lido-cell layout="row" visible="true" width="108%" height="300px">
				<lido-text visible="true" disable-speak="true" type="drag" id="option1" tab-index="8" bg-color="#FFAC4C" height="212px" width="130px" string="0"  font-family="'Baloo Bhai 2'" font-color="black" font-size="140px" onEntry="this.fontWeight='700';this.border-radius='16px';"></lido-text>
				<lido-text visible="true" disable-speak="true" value="1" type="drag" id="option2" tab-index="9" bg-color="#FFAC4C" height="212px" width="130px" string="1"  font-family="'Baloo Bhai 2'" font-color="black" font-size="140px" onEntry="this.fontWeight='700';this.border-radius='16px';"></lido-text>
				<lido-text visible="true" disable-speak="true" value="2" type="drag" id="option3" tab-index="10" bg-color="#FFAC4C" height="212px" width="130px" string="2"  font-family="'Baloo Bhai 2'" font-color="black" font-size="140px" onEntry="this.fontWeight='700';this.border-radius='16px';"></lido-text>
				<lido-text visible="true" disable-speak="true" type="drag" value="3" id="option4" tab-index="11" bg-color="#FFAC4C" height="212px" width="130px" string="3"  font-family="'Baloo Bhai 2'" font-color="black" font-size="140px" onEntry="this.fontWeight='700';this.border-radius='16px';"></lido-text>
				<lido-text visible="true" disable-speak="true" type="drag" value="4" id="option5" tab-index="12" bg-color="#FFAC4C" height="212px" width="130px" string="4"  font-family="'Baloo Bhai 2'" font-color="black" font-size="140px" onEntry="this.fontWeight='700';this.border-radius='16px';"></lido-text>
				<lido-text visible="true" disable-speak="true" type="drag" value="5" id="option6" tab-index="13" bg-color="#FFAC4C" height="212px" width="130px" string="5"  font-family="'Baloo Bhai 2'" font-color="black" font-size="140px" onEntry="this.fontWeight='700';this.border-radius='16px';"></lido-text>
				<lido-text visible="true" disable-speak="true" type="drag" id="option7" value="6" tab-index="14" bg-color="#FFAC4C" height="212px" width="130px" string="6"  font-family="'Baloo Bhai 2'" font-color="black" font-size="140px" onEntry="this.fontWeight='700';this.border-radius='16px';"></lido-text>
				<lido-text visible="true" disable-speak="true" type="drag" value="7" id="option8" tab-index="15" bg-color="#FFAC4C" height="212px" width="130px" string="7"  font-family="'Baloo Bhai 2'" font-color="black" font-size="140px" onEntry="this.fontWeight='700';this.border-radius='16px';"></lido-text>
				<lido-text visible="true" disable-speak="true" value="8" type="drag" id="option9" tab-index="16" bg-color="#FFAC4C" height="212px" width="130px" string="8"  font-family="'Baloo Bhai 2'" font-color="black" font-size="140px" onEntry="this.fontWeight='700';this.border-radius='16px';"></lido-text>
				<lido-text visible="true" disable-speak="true" value="9" type="drag" id="option10" tab-index="17" bg-color="#FFAC4C" height="212px" width="130px" string="9"  font-family="'Baloo Bhai 2'" font-color="black" font-size="140px" onEntry="this.fontWeight='700';this.border-radius='16px';"></lido-text>


			</lido-cell>
		</lido-cell>

	</lido-container>
  </main>`;
}
