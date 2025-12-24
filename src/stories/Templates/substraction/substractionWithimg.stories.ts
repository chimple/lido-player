import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Templates/substractionWithimg',
  argTypes: {
  option1: { control: 'text' },
  option2: { control: 'text' },
  option3: { control: 'text' },
  option4: { control: 'text' },
  num1Row: { control: 'text' },
  
  num2Row: { control: 'text' },
  
  text1: { control: 'text' },
   text2: { control: 'text' },
    
  answer: { control: 'text' },
 
  },
};
export default meta;

export const substractionWithimg: StoryObj = {
  args: {
  option1:"2",
  option2:"3",
  option3:"8",
  option4:"4",
num1Row:"3",
  
  num2Row:"2",
  
   text1:"5",
   text2:"2",
   answer: "3",
  
  },

  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

function getContainerXml(args) {
    let tabCounter = 1;
  return `<main>
   <lido-container  visible="true" id="lido-container" objective="${args.answer}" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/pal-Subtraction/Frame.png" onInCorrect="lido-avatar.avatarAnimate='Fail';this.sleep='2000';" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2300';" is-continue-on-correct="true" is-allow-only-correct="true" onEntry="">

		<!-- Chimple Avatar -->
		<lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.344px,portrait.402px" width="landscape.296px,portrait.398px" x="landscape.83%, portrait.28%" y="landscape.40%, portrait.77%" aria-hidden="true" z="1" bg-color="transparent" visible="true" >
			<lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
			</lido-avatar>
		</lido-cell>
		<lido-text visible="false" id="inst" tab-index="1" string="choose the correct option"></lido-text>
<lido-cell visible="true" layout="row" height="280px" width="auto" onEntry="this.position='relative';this.align-items='center';this.justify-content='space-around';" y="6%" x="0%">
			
<lido-cell visible="true" layout="row" width="auto" bg-color="#FFF5BB" onEntry="this.padding='10px 18px 10px 18px';this.justifyContent='space-around';this.border='2px solid #FFA500'; this.borderRadius='16px';this.gap='0px';">
<lido-math-matrix id="mat1" rows="${args.num1Row}" cols="1"  defualtFill="${args.text1}" leftIndex="false" topIndex="false" clickable="true" matrixImage="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/pal-Subtraction/image5.png" activeBgColor="transparent" inactiveBgColor="transparent" border="5px soild transparent" height="180px" width="400px" visible="true" margin="landscape.0,portrait.-26px 0px 0px 0px">
			</lido-math-matrix>
			<lido-math-matrix id="mat1" rows="${args.num2Row}" cols="1"  defualtFill="${args.text2}" leftIndex="false" topIndex="false" clickable="true" matrixImage="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Tenbox/aplle%20outlinee.png
" activeBgColor="transparent" inactiveBgColor="transparent" border="5px soild transparent" height="180px" width="300px" visible="true" margin="landscape.0,portrait.-26px 0px 0px 0px">
			</lido-math-matrix>
			</lido-cell>
			</lido-cell>
			
		<lido-cell visible="true" layout="col" height="58%" width="90%" bg-color="transparent" y="0%" onEntry="this.align-items='center';this.justify-content='space-around';this.position='relative';" >
			
			<lido-cell layout="row" visible="true" height="400px" width="825px" onEntry="this.align-items='center'; this.justify-content='space-around';">
				<lido-text visible="true" id="text1" tab-index="2" string="${args.text1}" font-family="'Baloo Bhai 2'" font-color="black" font-size="140px"  bg-color="transparent" 
					onEntry="this.fontWeight='700';"></lido-text>
				<lido-text visible="true" id="text2" tab-index="3" string="-"  font-family="'Baloo Bhai 2'" font-color="black" font-size="140px"  bg-color="transparent" 
					onEntry="this.fontWeight='700';"></lido-text>
				<lido-text visible="true" id="text3" tab-index="4" string="${args.text2}"  font-family="'Baloo Bhai 2'" font-color="black" font-size="140px"  bg-color="transparent" 
					onEntry="this.fontWeight='700';"></lido-text>
				<lido-text visible="true" id="text3" tab-index="5" string="="  font-family="'Baloo Bhai 2'" font-color="black" font-size="140px"  bg-color="transparent" 
					onEntry="this.fontWeight='700';"></lido-text>
				<lido-text visible="true" id="answer"  tab-index="6" height="184px" width="130px" string="?" font-family="'Baloo Bhai 2'" font-color="black" font-size="140px"  bg-color="#FFF5BBB2" value="2"
					onEntry="this.fontWeight='700';this.border='2px solid #FFB612';this.border-radius='16px';" ></lido-text>	
						
			</lido-cell>
			<lido-cell layout="row" visible="true" width="84%" height="300px">
				<lido-text visible="true" value="${args.option1}" type="click" id="option1" tab-index="8" bg-color="#FFAC4C" height="212.4px" width="280px" string="${args.option1}"  font-family="'Baloo Bhai 2'" font-color="black" font-size="140px" onEntry="this.fontWeight='700';this.border-radius='16px';"></lido-text>
				<lido-text visible="true" value="${args.option2}" type="click" id="option2" tab-index="9" bg-color="#FFAC4C" height="212.4px" width="280px" string="${args.option2}"  font-family="'Baloo Bhai 2'" font-color="black" font-size="140px" onEntry="this.fontWeight='700';this.border-radius='16px';"></lido-text>
				<lido-text visible="true" value="${args.option3}" type="click" id="option3" tab-index="10" bg-color="#FFAC4C" height="212.4px" width="280px" string="${args.option3}"  font-family="'Baloo Bhai 2'" font-color="black" font-size="140px" onEntry="this.fontWeight='700';this.border-radius='16px';"></lido-text>
				<lido-text visible="true" type="click" value="${args.option4}" id="option4" tab-index="11" bg-color="#FFAC4C" height="212.4px" width="280px" string="${args.option4}"  font-family="'Baloo Bhai 2'" font-color="black" font-size="140px" onEntry="this.fontWeight='700';this.border-radius='16px';"></lido-text>
				


			</lido-cell>
		</lido-cell>

	</lido-container>
  </main>`;
}
