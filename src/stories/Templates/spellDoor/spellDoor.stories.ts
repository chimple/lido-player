import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Templates/SpellDoor',
};
export default meta;

export const Options: StoryObj = {
	args: {
		option1: "f",
		option2: "s",
		option3: "a",
		option4: "m",
		option5: "e",
		correct1: "s",
		correct2: "e",
		correct3: "a",
	},
	
  render: args => {
		const xml = getContainerXml(args);
		return html`<lido-home .xmlData="${xml}"></lido-home>`
	},
};

function getContainerXml(args){
	return `<main>
    	<lido-container id="lido-container" bgImage="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/spelldoor/Background_Spring.png" objective="s,e,a" height="100%" width="100%" bgColor="transparent" visible="true" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="this.justifyContent='space-around';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" showCheck="false" isContinueOnCorrect="true" afterDrop="false">
		<!-- Chimple Avatar -->
		<lido-cell layout="pos" id="pos1" value="pos2" height="305px" width="227px" x="landscape.1400px, portrait.575px" y="landscape.591px, portrait.0px" ariaHidden="true" z="1" bgColor="transparent" visible="true" onEntry="this.animation='rightToPlace 2.5s linear';">
			<lido-avatar id="lido-avatar" visible="true" height="462px" width="356px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" altText="{chimpleCharacterRive}">
			</lido-avatar>
		</lido-cell>
		<lido-cell layout="landscape.row, portrait.col" visible="true" width="landscape.75%, portrait.76%" margin="landscape.0%, portrait.71% 0 0 0" height="landscape.57%, portrait.60%" onEntry="this.borderRadius='10px'; this.padding='8px'; this.backgroundColor='transparent';">
			<!-- image -->
			<lido-image id="image0" visible="true" z="100" src="https://media.githubusercontent.com/media/chimple/bahama/master/assets/games/spelldoor/textures/hut1_image_spelling.png" width="landscape.80%, portrait.100%" height="landscape.80%, portrait.62%" >
			</lido-image>
			<lido-cell layout="pos" id="pos3" visible="true" width="landscape.60%, portrait.76%" x="landscape.31%, portrait.31%" y="landscape.0%, portrait.35%" height="landscape.54%, portrait.60%" onEntry="this.borderRadius='10px'; this.padding='8px'; this.backgroundColor='transparent'" >
				<!-- image -->
				<lido-image id="image01" visible="true"  x="landscape.6%, portrait.-3%" y="landscape.25%, portrait.29%" src="https://media.githubusercontent.com/media/chimple/bahama/master/assets/games/spelldoor/textures/shutter1_image_spelling.png" width="landscape.50%, portrait.56%" height="landscape.69%, portrait.36%" >
				</lido-image>
				<lido-image id="image02" visible="true" x="landscape.12%, portrait.-5%" y="landscape.2%, portrait.20%" src="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg" width="landscape.39%, portrait.60%" height="landscape.100%, portrait.50%" >
				</lido-image>
			</lido-cell>
		</lido-cell>

		<lido-cell bgColor="transparent" layout="landscape.col, portrait.col" width="landscape.75%, portrait.100%" height="landscape.43%, portrait.40%" onEntry="this.animation='bottomToPlace 1.5s linear';" marginTop="potrait.-10%" visible="true" alignItems="center" justifyContent="center">
			<lido-cell layout="landscape.row, portrait.row" width="landscape.75%, portrait.95%" height="landscape.43%, portrait.23%" childElementsLength="5" onEntry="this.gap='28px';    this.gridTemplateColumns = 'repeat(2, 1fr)';  this.gridTemplateRows = 'repeat(2, 1fr)';" visible="true">
				<lido-image id="image1" visible="true" type="drop" tabIndex='1' value="s" src="https://media.githubusercontent.com/media/chimple/bahama/master/assets/games/spelldoor/textures/hole_dropbox_spelling.png" width="landscape.20%, portrait.100%" height="landscape.100%, portrait.62%" margin="landscape.0px 21px 0px 0px , portrait. 0">
				</lido-image>
				<lido-image id="image2" visible="true" type="drop" tabIndex='2' value="e" src="https://media.githubusercontent.com/media/chimple/bahama/master/assets/games/spelldoor/textures/hole_dropbox_spelling.png" width="landscape.20%, portrait.100%" height="landscape.100%, portrait.62%" margin="landscape.0px 21px 0px 0px , portrait. 0">
				</lido-image>
				<lido-image id="image3" visible="true" type="drop" tabIndex='3' value="a" src="https://media.githubusercontent.com/media/chimple/bahama/master/assets/games/spelldoor/textures/hole_dropbox_spelling.png" width="landscape.20%, portrait.100%" height="landscape.100%, portrait.62%" margin="landscape.0px 21px 0px 0px , portrait. 0">
				</lido-image>
			</lido-cell>
			<lido-cell layout="landscape.row, portrait.row" width="landscape.95%, portrait.95%" height="landscape.43%, portrait.22%" childElementsLength="7" onEntry="this.gap='28px ';    this.gridTemplateColumns = 'repeat(2, 1fr)';  this.gridTemplateRows = 'repeat(2, 1fr)';" visible="true">
				<lido-image id="option1" isSlice="true" font="'Baloo Bhai 2'" src="https://media.githubusercontent.com/media/chimple/bahama/master/assets/games/spelldoor/textures/box_alphabet_spelling.png" value="f"  tabIndex="4" visible="true" type="drag" onEntry="this.boxShadow='0 5px 3px'; this.color='white'; this.fontSize='80px'; this.fontWeight='600';" width="landscape.100%, portrait.100%" height="landscape.100%, portrait.150%" margin="landscape.0px 21px 0px 0px , portrait. 0">
					<lido-text  string='f' font="'Baloo Bhai 2'" fontSize='80px' onTouch="this.speak='true';" bgColor='transparent' onEntry='this.color="white"'></lido-text>
				</lido-image>
				<lido-image id="option2" isSlice="true" font="'Baloo Bhai 2'" src="https://media.githubusercontent.com/media/chimple/bahama/master/assets/games/spelldoor/textures/box_alphabet_spelling.png" value="s" tabIndex="5" visible="true" type="drag" onEntry="this.boxShadow='0 5px 3px'; this.color='white'; this.fontSize='80px'; this.fontWeight='600';" width="landscape.100%, portrait.100%" height="landscape.100%, portrait.150%" margin="landscape.0px 21px 0px 0px , portrait. 0">
					<lido-text  string='s' font="'Baloo Bhai 2'" fontSize='80px' onTouch="this.speak='true';" bgColor='transparent' onEntry='this.color="white"'></lido-text>
				</lido-image>
				<lido-image id="option3" isSlice="true" font="'Baloo Bhai 2'" src="https://media.githubusercontent.com/media/chimple/bahama/master/assets/games/spelldoor/textures/box_alphabet_spelling.png" value="a"  tabIndex="6" visible="true" type="drag" onEntry="this.boxShadow='0 5px 3px'; this.color='white'; this.fontSize='80px'; this.fontWeight='600';" width="landscape.100%, portrait.100%" height="landscape.100%, portrait.150%" margin="landscape.0px 21px 0px 0px , portrait. 0">
					<lido-text string='a' font="'Baloo Bhai 2'" fontSize='80px' onTouch="this.speak='true';" bgColor='transparent' onEntry='this.color="white"'></lido-text>
				</lido-image>
				<lido-image id="option4" isSlice="true" font="'Baloo Bhai 2'" src="https://media.githubusercontent.com/media/chimple/bahama/master/assets/games/spelldoor/textures/box_alphabet_spelling.png" value="m" tabIndex="7" visible="true" type="drag" onEntry="this.boxShadow='0 5px 3px'; this.color='white'; this.fontSize='80px'; this.fontWeight='600';" width="landscape.100%, portrait.100%" height="landscape.100%, portrait.150%" margin="landscape.0px 21px 0px 0px , portrait. 0">
					<lido-text  string='m' font="'Baloo Bhai 2'" fontSize='80px' onTouch="this.speak='true';" bgColor='transparent' onEntry='this.color="white"'></lido-text>
				</lido-image>
				<lido-image id="option5" isSlice="true" font="'Baloo Bhai 2'" src="https://media.githubusercontent.com/media/chimple/bahama/master/assets/games/spelldoor/textures/box_alphabet_spelling.png" value="e" tabIndex="8	" visible="true" type="drag" onEntry="this.boxShadow='0 5px 3px'; this.color='white'; this.fontSize='80px'; this.fontWeight='600';" width="landscape.100%, portrait.100%" height="landscape.100%, portrait.150%" margin="landscape.0px 21px 0px 0px , portrait. 0">
					<lido-text string='e' font="'Baloo Bhai 2'" fontSize='80px' onTouch="this.speak='true';" bgColor='transparent' onEntry='this.color="white"'></lido-text>
				</lido-image>
			</lido-cell>
		</lido-cell>
	</lido-container>
	</main>`
}
