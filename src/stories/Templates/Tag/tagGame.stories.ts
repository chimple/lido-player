import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Templates/tagGame',
  argTypes: {
    question: { control: 'text' },
    option1: { control: 'text' },
    option2: { control: 'text' },
    option3: { control: 'text' },
    option4: { control: 'text' },
    correct1: { control: 'text' },
    correct2: { control: 'text' },
    correct3: { control: 'text' },
    correct4: { control: 'text' },
  },
};
export default meta;

export const QuestionAndOptions: StoryObj = {
  args: {
    question: 'Make it Alphabetical Order',
    option1: 'Face',
    option2: 'Forehead',
    option3: 'chin',
    option4: 'cheek',
    correct1: 'Face',
    correct2: 'Forehead',
    correct3: 'chin',
    correct4: 'cheek',
  },

  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

function getContainerXml(args) {
  return `<main>
<lido-container id="lido-container" customStyle="" tab-index="1" value="maincontainer" objective="${args.correct1},${args.correct2},${args.correct3},${args.correct4}" aria-label="This is a multiple-option question. Select one option from the list." 	 x="0" y="0" z="0" bg-color="transparent" bgImage="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/tag/Spring.png" visible="true" audio="background1.mp3" onTouch="" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2000;pos1.animation='placeToLeft 2.5s linear';this.sleep='2000';" onEntry="" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="true" is-allow-only-correct="true">
	<lido-cell id="pos1" tab-index="2" layout="landscape.row, portrait.col" height="100%" width="100%" visible="true" bg-color="transparent">
 		<lido-cell layout="landscape.col, portrait.row" id="pos2"  tab-index="3" disable-edit="true" value="pos2" margin="landscape.0% 4% 41% -3%, portrait.2% 69% 0% 0%" height="landscape.56%, portrait.28%" width="landscape.28%, portrait.38%" x="landscape.-11%, portrait.-5%" y="landscape.-6%, portrait.-39%" aria-hidden="true" z="5" bg-color="transparent" visible="true"  onEntry="this.animation='leftToPlace 2.5s linear';">
			<lido-avatar id="lido-avatar" tab-index="4" disable-edit="true" visible="true"  height="100%"  width="100%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
			</lido-avatar>
		</lido-cell>
		<lido-cell id="pos3" tab-index="5" layout="landscape.col, portrait.row" disable-edit="true" value="pos" aria-hidden="true" x="0" y="0" z="0" bg-color="transparent" type="" visible="true" audio="" onTouch="" onCorrect="" width="100%" height="100%" onEntry="">
			<lido-cell id="pos4" tab-index="6" layout="pos" disable-edit="true" value="pos" aria-hidden="true" x="0" y="0" z="0" bg-color="transparent" type="" visible="true" audio="" onTouch="" width="100%" height="100%" onEntry="this.animation='rightToPlace 2.5s linear'; this.sleep='2000'">
				<lido-image tab-index="7" width="landscape.87%, portrait.138%" height="landscape.137%, portrait.51%" y="landscape.-16%, portrait.32%" x="landscape.0%, portrait.-23%" customStyle=".redBg{background-color: red !important;} .greenBg{background-color: green !important; color: white !important;}" id="image1" disable-edit="true" visible="true"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/tag/truck.png" onEntry="">
	   			</lido-image>
	    		<lido-image  tab-index="8" width="landscape.42%, portrait.51%" height="landscape.45%, portrait.23%"  y="landscape.23%, portrait.43%" x="landscape.30%, portrait.34%" z="2" id="image2" disable-edit="true" visible="true"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/tag/face.png" onEntry="">
	    		</lido-image>
		    	<lido-text id="text1" tab-index="9" visible="true"  width="landscape.16%, portrait.25%" height="landscape.9%, portrait.6%"  z="3" x="landscape.43%, portrait.46%" y="landscape.23%, portrait.41%" type="drop" value="${args.option1}" is-allow-only-one-drop="true" onEntry="this.border='5px dashed black'" bg-color="#fbfbfbcf"></lido-text>
		    	<lido-text id="text2" tab-index="10" visible="true"  width="landscape.16%, portrait.25%" height="landscape.9%, portrait.6%"  z="3" x="landscape.59%, portrait.71%" y="landscape.33%, portrait.48%" type="drop" value="${args.option2}" is-allow-only-one-drop="true" onEntry="this.border='5px dashed black'" bg-color="#fbfbfbcf"></lido-text>
				<lido-text id="text3" tab-index="11" visible="true" width="landscape.16%, portrait.25%" height="landscape.9%, portrait.6%" z="3" x="landscape.57%, portrait.68%" y="landscape.56%, portrait.59%" type="drop" value="${args.option3}" is-allow-only-one-drop="true" onEntry="this.border='5px dashed black'" bg-color="#fbfbfbcf"></lido-text>
				<lido-text id="text4" tab-index="12" visible="true"  width="landscape.16%, portrait.25%" height="landscape.9%, portrait.6%" z="3" x="landscape.28%, portrait.24%" y="landscape.54%, portrait.58%" type="drop" value="${args.option4}" is-allow-only-one-drop="true" onEntry="this.border='5px dashed black'" bg-color="#fbfbfbcf"></lido-text>
	   		</lido-cell>	
		</lido-cell> 
		<lido-cell id="pos5" tab-index="13" layout="landscape.col, portrait.row" disable-edit="true" value="pos" aria-hidden="true" x="0%" y="0" z="3" bg-color="transparent" type="" visible="true" audio="" onTouch=""  width="landscape.27%, portrait.100%" height="landscape.100%, portrait.27%" onCorrect="" onEntry="this.visibility='hidden'; this.sleep='2500';this.visibility='visible'">
			<lido-cell id="pos6" tab-index="14" layout="landscape.col,portrait.row" disable-edit="true" value="pos" aria-hidden="true" x="landscape.85%, portrait.0%" y="landscape.23%, portrait.87%" z="2" bg-color="transparent" type="" visible="true" audio="" onTouch=""  width="landscape.130%, portrait.102%" height="landscape.59%, portrait.42%"  onCorrect=""  onEntry="this.align-content='center'; this.gap='2%'">
	        <lido-text id="text5" tab-index="15" height="landscape.16%, portrait.98%" width="landscape.76%, portrait.27%" type="drag" font-family="'Baloo Bhai 2'" visible="true"  font-color="black" font-size="50px" value="${args.option1}" string="${args.option1}" onTouch="this.speak='true'"  bg-color="#DFF2F2" onEntry=" this.fontWeight='400'; this.boaderRadius='2px"></lido-text>
	        <lido-text id="text6" tab-index="16" height="landscape.16%, portrait.98%" width="landscape.76%, portrait.27%" type="drag" font-family="'Baloo Bhai 2'" visible="true"  font-size="50px" value="${args.option2}" string="${args.option2}" onTouch="this.speak='true'"  bg-color="#DFF2F2" onEntry=" this.fontWeight='400'; this.boaderRadius='2px'"></lido-text>
	        <lido-text id="text7" tab-index="17" height="landscape.16%, portrait.98%" width="landscape.76%, portrait.27%" type="drag" font-family="'Baloo Bhai 2'" visible="true"  font-size="50px" value="${args.option3}" string="${args.option3}" onTouch="this.speak='true'" bg-color="#DFF2F2" onEntry=" this.fontWeight='400'; this.boaderRadius='2px'"></lido-text>
			<lido-text id="text8" tab-index="18" height="landscape.16%, portrait.98%" width="landscape.76%, portrait.27%" type="drag" font-family="'Baloo Bhai 2'" visible="true"  font-size="50px" value="${args.option4}" string="${args.option4}cheek" onTouch="this.speak='true'"  bg-color="#DFF2F2" onEntry=" this.fontWeight='400'; this.boaderRadius='2px'"></lido-text>
 		</lido-cell>
	</lido-cell>
</lido-cell>	
	
 </lido-container>
</main>`;
}
