import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Templates/CreateSentence',
	argTypes: {
		question: { control: "text" },
		option1: { control: "text" },
		option2: { control: "text" },
		option3: { control: "text" },
		option4: { control: "text" },
		correct1: { control: "text" },
		correct2: { control: "text" },
		correct3: { control: "text" },
		correct4: { control: "text" },
	}
};
export default meta;

export const QuestionAndOptions: StoryObj = {
	args: {
		option1: "streetlight",
		option2: "Girl",
		option3: "sits",
		option4: "under",
		correct1: "Girl",
		correct2: "sits",
		correct3: "under",
		correct4: "streetlight",
	},
	
  render: args => {
		const xml = getContainerXml(args);
		return html`<lido-home .xmlData="${xml}"></lido-home>`
	},
};

function getContainerXml(args){
	return `<main>
	<lido-container id="lido-container" objective="Girl,sits,under,streetlight" isAllowOnlyCorrect="true" height="100vh" width="100vw" x="0" y="0" z="0" bgColor="transparent" visible="true" audio="background1.mp3" onTouch="" onCorrect="text.speak='true'; col1.animation='placeToLeft 2.5s linear'; this.sleep='2000';" onEntry="" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" showCheck="false" isContinueOnCorrect="false" afterDrop="true" bgImage="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/create%20sentence/Background_Spring.png">

		<lido-cell layout="col" id="col1" disableEdit="true" ariaHidden="true" x="0" y="0" z="2" margin="0 0 15% 0" bgColor="transparent" type="" visible="true" audio="" onTouch="" onEntry="this.animation='rightToPlace 1s linear';">

			<lido-cell layout="pos" visible="true" height="100%" width="100%" bgColor="transparent">
				<lido-image width="landscape.80%, portrait.160%" height="landscape.121%, portrait.185%" visible="true" x="landscape.0%, portrait.-56%" y="landscape.-24%, portrait.-30%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/create%20sentence/blueTruck.png" onEntry="this.borderRadius='2px';this.visibility='hidden';this.visibility='visible'; "></lido-image>
			</lido-cell>
			<lido-image width="landscape.15%, portrait.35%" height="portrait.70%" y="landscape.3vh, portrait.43vh" x="landscape.2vw, portrait.0" type="drop" visible="true" z="2" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/create%20sentence/question%20image.png" onEntry="this.boaderRadius='2px';this.visibility='hidden';this.visibility='visible'; this.position='relative' "></lido-image>

			<lido-cell layout="row" visible="true" width="landscape.40%, portrait.80%" minLength="2" maxLength="6" height="landscape.0%, portrait.20%" x="landscape.22%, portrait.37%" y="landscape.20%, portrait.95%" bgColor="transparent" onEntry="this.transform='translate(-50%, -50%)'; this.gap='60px'; this.position='relative';">

				<lido-text visible="true" width="150px" height="80px" value="Girl" z="1" y="149px" type="drop" tabIndex="1" isAllowOnlyOneDrop="true" onEntry="this.border='2px dashed black'; this.background='transparent'; this.borderRadius='15px'; this.display='flex'; this.alignItems='center'; this.justifyContent='center'; this.fontWeight='bold';"></lido-text>
				<lido-text visible="true" width="150px" height="80px" value="sits" z="1" y="149px" type="drop" tabIndex="2" isAllowOnlyOneDrop="true" onEntry="this.border='2px dashed black'; this.background='transparent'; this.borderRadius='15px'; this.display='flex'; this.alignItems='center'; this.justifyContent='center'; this.fontWeight='bold';"></lido-text>
				<lido-text visible="true" width="150px" height="80px" value="under" z="1" y="149px" type="drop" tabIndex="3" isAllowOnlyOneDrop="true" onEntry="this.border='2px dashed black'; this.background='transparent'; this.borderRadius='15px'; this.display='flex'; this.alignItems='center'; this.justifyContent='center'; this.fontWeight='bold';"></lido-text>
				<lido-text visible="true" width="150px" height="80px" value="streetlight" z="1" y="149px" type="drop" tabIndex="4" isAllowOnlyOneDrop="true" onEntry="this.border='2px dashed black'; this.background='transparent'; this.borderRadius='15px'; this.display='flex'; this.alignItems='center'; this.justifyContent='center'; this.fontWeight='bold';"></lido-text>

			</lido-cell>
			<lido-cell layout="pos" id="pos1" disableEdit="true" value="pos2" height="305px" width="landscape.227px, portrait.30%" x="landscape.77%, portrait.30%" y="landscape.40%, portrait.10%" ariaHidden="true" z="1" bgColor="transparent" visible="true" onEntry="">
				<lido-avatar id="lido-avatar" disableEdit="true" visible="true" height="462px" width="356px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" altText="{chimpleCharacterRive}">
				</lido-avatar>
			</lido-cell>
		</lido-cell>
		<lido-cell layout="row" visible="true" width="landscape.50%, portrait.80%" y="landscape.5%, portrait.27%" x="0%" z="2" onEntry="this.position='relative';">
			<lido-text id="option1" value="streetlight" tabIndex="5" flexibleWidth="false" visible="true" bgColor="#6DC1ED" onEntry="this.borderRadius='25px'; this.boxShadow='unset'; this.fontWeight='800'; this.animation='bottomToPlace 1.5s linear'; this.color='white';" width="150px" height="90px" string="streetlight" font="'Baloo 2', serif" font-size="24px" z="2" type="drag"></lido-text>
			<lido-text id="option2" value="Girl" tabIndex="6" flexibleWidth="false" visible="true" bgColor="#6DC1ED" onEntry="this.borderRadius='25px'; this.boxShadow='unset'; this.fontWeight='800'; this.animation='bottomToPlace 1.5s linear'; this.color='white';" width="150px" height="90px" string="Girl" font="'Baloo 2', serif" font-size="24px" z="2" type="drag"></lido-text>
			<lido-text id="option3" value="under" tabIndex="7" flexibleWidth="false" visible="true" bgColor="#6DC1ED" onEntry="this.borderRadius='25px'; this.boxShadow='unset'; this.fontWeight='800'; this.animation='bottomToPlace 1.5s linear'; this.color='white';" width="150px" height="90px" string="under" font="'Baloo 2', serif" font-size="24px" z="2" type="drag"></lido-text>
			<lido-text id="option4" value="sits" tabIndex="8" flexibleWidth="false" visible="true" bgColor="#6DC1ED" onEntry="this.borderRadius='25px'; this.boxShadow='unset'; this.fontWeight='800'; this.animation='bottomToPlace 1.5s linear'; this.color='white';" width="150px" height="90px" string="sits" font="'Baloo 2', serif" font-size="24px" z="2" type="drag"></lido-text>
		</lido-cell>
	</lido-container>
	</main>`
}
