import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { row } from 'mathjs';
import { text } from 'stream/consumers';

const meta: Meta = {
  title: 'Templates/numberIdentificationimageTotext',
  argTypes: {
  option1: { control: 'text' },
  option2: { control: 'text' }, 
  option3: { control: 'text' },
  option4: { control: 'text' },
  question: { control: 'text' },
  answers: { control: 'text' },
  row: { control: 'text' },
  col: { control: 'text' },
  PracticeMode: { control: 'boolean' },
 
  },
};
export default meta;

export const numberIdentificationimageTotext: StoryObj = {
  args: {
	PracticeMode: false,
   option1:"3",
   option2:"2",
    option3:"7",
    option4:"8",
	row:"4",
	col:"2",
   question:"EIGHT",
   answer: "8",
    },

  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

function getContainerXml(args) {
    let tabCounter = 1;
  return `<main>
 <lido-container  visible="true" id="lido-container" template-id="mcq" onInCorrect="lido-avatar.avatarAnimate='Fail';this.sleep='2000';" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2300';" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/pal_number_identification/bgImage.png" objective="${args.answer}"  is-continue-on-correct="${args.PracticeMode}" is-allow-only-correct="${args.PracticeMode}" onEntry="inst.speak='true';question.speak='true';text1.speak='true';text2.speak='true';text3.speak='true';text4.speak='true';">
	 <!-- Chimple Avatar -->
	<lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.344px,portrait.402px" width="landscape.296px,portrait.398px" x="landscape.83%, portrait.28%" y="landscape.64%, portrait.77%" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="">
		<lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
		</lido-avatar>
	</lido-cell>
	<lido-text visible="false" id="inst" tab-index="1" string="choose the correct option" onEntry=""></lido-text>
<!-- question text -->
		<lido-cell layout="row" visible="true" margin="landscape.26px 0px 155px 0px, portrait.-170px 0px 0px 0px" height="290px" width="landscape.1355PX,portrait.100%" bg-color="#FFF5BB" onEntry="this.justifyContent='space-around';this.border='2px solid #FFA500'; this.borderRadius='16px';this.gap='0px';">
			<lido-text id="question" tab-index="2" visible="true" value="10" string="${args.question}" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.140px, portrait.84px"  bg-color="transparent" 
			onEntry="this.fontWeight='700';">
            </lido-text>
			<lido-cell visible="true" width="500px" bg-color="transparent" height="300px" onEntry="this.display='flex';this.align-items='center';"	>
				<lido-math-matrix id="mat1" rows="${args.row}" cols="${args.col}"  defualtFill="${args.answer}" leftIndex="false" topIndex="false" clickable="true" matrixImage="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/pal_number_identification/fruit.png" activeBgColor="transparent" inactiveBgColor="transparent" border="5px soild transparent" height="300px" width="500px" visible="true" margin="landscape.0,portrait.-26px 0px 0px 0px">
			</lido-math-matrix>
		  </lido-cell>
			
		</lido-cell>

		<lido-cell layout="landscape.row, portrait.col" visible="true" margin="landscape.-65px 0px -101px -94px,portrait.0" onEntry="this.border-radius='26px';" height="landscape.390px,portrait.46%" width="landscape.76%,portrait.100%" bg-color="transparent">

		
				<lido-cell layout="row" visible="true" margin="" onEntry="this.border-radius='24px';" height="228px" width="landscape.280px,portrait.300px" bg-color="orange"  type="click" value="${args.option1}">
					
					<lido-text id="text1" tab-index="3" disable-speak="true" visible="true"  string="${args.option1}" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.140px, portrait.100px"  bg-color="orange" 
					onEntry="this.fontWeight='700';">
					</lido-text>
				</lido-cell>

				<lido-cell layout="row" visible="true" margin="" onEntry="this.border-radius='24px';" height="228px" width="landscape.280px,portrait.300px" bg-color="orange"  type="click" value="${args.option2}">
					
					<lido-text id="text2" tab-index="4" disable-speak="true" visible="true"  string="${args.option2}" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.140px, portrait.100px"  bg-color="orange" 
					onEntry="this.fontWeight='700';">
					</lido-text>
				</lido-cell>
		
		
				<lido-cell layout="row" visible="true" margin="" onEntry="this.border-radius='24px';" height="228px" width="landscape.280px,portrait.300px" bg-color="orange"  type="click" value="${args.option3}">
					
					<lido-text id="text3" tab-index="5" disable-speak="true" visible="true" string="${args.option3}" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.140px, portrait.100px"  bg-color="orange" 
					onEntry="this.fontWeight='700';">
					</lido-text>
				</lido-cell>

				<lido-cell layout="row" visible="true" margin="" onEntry="this.border-radius='24px';" height="228px" width="landscape.280px,portrait.300px" bg-color="orange"  type="click" value="${args.option4}">
					
					<lido-text id="text4" tab-index="6" disable-speak="true" visible="true" string="${args.option4}" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.130px, portrait.100px"  bg-color="orange" 
					onEntry="this.fontWeight='800';">
					</lido-text>
				</lido-cell>	
		
 	
	</lido-cell>

</lido-container>
  </main>`;
}
