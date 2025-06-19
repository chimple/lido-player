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
  <lido-container id="lido-container" customStyle="" tabIndex="11" value="maincontainer" objective="${args.correct1},${args.correct2},${args.correct3},${args.correct4}" ariaLabel="This is a multiple-option question. Select one option from the list." 	 x="0" y="0" z="0" bgColor="transparent" bgImage="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/tag/Background_Spring.png" visible="true" audio="background1.mp3" onTouch="" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2000;pos5.animation='placeToLeft 2.5s linear';pos3.animation='placeToLeft 2.5s linear';pos2.animation='placeToLeft 2.5s linear'; this.sleep='2000';" onEntry="" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" showCheck="false" isContinueOnCorrect="true" isAllowOnlyCorrect="true">
 <lido-cell layout="pos" id="pos5" disableEdit="true" value="pos5" height="landscape.44%, portrait.95%" width="landscape.19%, portrait.52%" x="landscape.-11%, portrait.-5%" y="landscape.-6%, portrait.-39%" ariaHidden="true" z="5" bgColor="transparent" visible="true"  onEntry="this.animation='leftToPlace 2.5s linear';">
			<lido-avatar id="lido-avatar" disableEdit="true" visible="true"  height="100%"  width="100%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" altText="{chimpleCharacterRive}">
			</lido-avatar>
		</lido-cell>
	<lido-cell id="pos1" tabIndex="12" layout="pos" disableEdit="true" value="pos" ariaHidden="true" x="0" y="0" z="0" bgColor="transparent" type="" visible="true" audio="" onTouch="" onCorrect="" width="100%" height="100%" onEntry="">
		<lido-cell id="pos2" tabIndex="13" layout="pos" disableEdit="true" value="pos" ariaHidden="true" x="0" y="0" z="0" bgColor="transparent" type="" visible="true" audio="" onTouch="" width="100%" height="100%" onEntry="this.animation='rightToPlace 2.5s linear'; this.sleep='2000'">
			<lido-image tabIndex="14" width="landscape.87%, portrait.138%" height="landscape.137%, portrait.51%" y="landscape.-16%, portrait.32%" x="landscape.0%, portrait.-23%" customStyle=".redBg{background-color: red !important;} .greenBg{background-color: green !important; color: white !important;}" id="image1" disableEdit="true" visible="true"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/tag/truck.png" onEntry="">
	   		</lido-image>
	    	<lido-image  tabIndex="15" width="landscape.42%, portrait.51%" height="landscape.45%, portrait.23%"  y="landscape.23%, portrait.43%" x="landscape.30%, portrait.34%" z="2" id="image2" disableEdit="true" visible="true"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/tag/face.png" onEntry="">
	    	</lido-image>
		    <lido-text id="text1" tabIndex="1" visible="true"  width="landscape.16%, portrait.25%" height="landscape.9%, portrait.6%"  z="3" x="landscape.43%, portrait.46%" y="landscape.23%, portrait.41%" type="drop" value="${args.option1}" isAllowOnlyOneDrop="true" onEntry="this.border='5px dashed black'" bgColor="#fbfbfbcf"></lido-text>
		    <lido-text id="text2" tabIndex="2" visible="true"  width="landscape.16%, portrait.25%" height="landscape.9%, portrait.6%"  z="3" x="landscape.59%, portrait.71%" y="landscape.33%, portrait.48%" type="drop" value="${args.option2}" isAllowOnlyOneDrop="true" onEntry="this.border='5px dashed black'" bgColor="#fbfbfbcf"></lido-text>
			<lido-text id="text3" tabIndex="3" visible="true" width="landscape.16%, portrait.25%" height="landscape.9%, portrait.6%" z="3" x="landscape.57%, portrait.68%" y="landscape.56%, portrait.59%" type="drop" value="${args.option3}" isAllowOnlyOneDrop="true" onEntry="this.border='5px dashed black'" bgColor="#fbfbfbcf"></lido-text>
			<lido-text id="text4" tabIndex="4" visible="true"  width="landscape.16%, portrait.25%" height="landscape.9%, portrait.6%" z="3" x="landscape.28%, portrait.24%" y="landscape.54%, portrait.58%" type="drop" value="${args.option4}" isAllowOnlyOneDrop="true" onEntry="this.border='5px dashed black'" bgColor="#fbfbfbcf"></lido-text>
	   	</lido-cell>	 
		<lido-cell id="pos3" tabIndex="16" layout="pos" disableEdit="true" value="pos" ariaHidden="true" x="0%" y="0" z="3" bgColor="transparent" type="" visible="true" audio="" onTouch=""  width="100%" height="100%" onCorrect="" onEntry="this.visibility='hidden'; this.sleep='2500';this.visibility='visible'">
			<lido-cell id="pos4" tabIndex="5" layout="landscape.col,portrait.row" disableEdit="true" value="pos" ariaHidden="true" x="landscape.85%, portrait.0%" y="landscape.23%, portrait.87%" z="2" bgColor="transparent" type="" visible="true" audio="" onTouch=""  width="landscape.23%, portrait.102%" height="landscape.59%, portrait.6%"  onCorrect=""  onEntry="this.align-content='center'; this.gap='2%'">
	        <lido-text id="text5" tabIndex="6" height="landscape.16%, portrait.98%" width="landscape.76%, portrait.27%" type="drag" font="'Baloo Bhai 2'" visible="true"  font-size="50px" value="${args.option1}" string="${args.option1}" onTouch="this.speak='true'"  bgColor="#0064fff5" onEntry=" this.fontWeight='400'; this.boaderRadius='2px'; this.color='white'"></lido-text>
	        <lido-text id="text6" tabIndex="7" height="landscape.16%, portrait.98%" width="landscape.76%, portrait.27%" type="drag" font="'Baloo Bhai 2'" visible="true"  font-size="50px" value="${args.option2}" string="${args.option2}" onTouch="this.speak='true'"  bgColor="#a65bcdf5" onEntry=" this.fontWeight='400'; this.boaderRadius='2px'; this.color='white'"></lido-text>
	        <lido-text id="text7" tabIndex="8" height="landscape.16%, portrait.98%" width="landscape.76%, portrait.27%" type="drag" font="'Baloo Bhai 2'" visible="true"  font-size="50px" value="${args.option3}" string="${args.option3}" onTouch="this.speak='true'" bgColor="#c8c819c2" onEntry=" this.fontWeight='400'; this.boaderRadius='2px'; this.color='white'"></lido-text>
			<lido-text id="text8" tabIndex="9" height="landscape.16%, portrait.98%" width="landscape.76%, portrait.27%" type="drag" font="'Baloo Bhai 2'" visible="true"  font-size="50px" value="${args.option4}" string="${args.option4}" onTouch="this.speak='true'"  bgColor="#2abe2ac2" onEntry=" this.fontWeight='400'; this.boaderRadius='2px'; this.color='white'"></lido-text>
 		</lido-cell>
		</lido-cell>	
	</lido-cell>
 </lido-container>
</main>`;
}
