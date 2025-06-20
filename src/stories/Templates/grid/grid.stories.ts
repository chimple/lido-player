import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Templates/Grid',
};
export default meta;

export const Options: StoryObj = {
	args: {
		option1: "chop",
		option2: "chug",
		option3: "chad",
		option4: "dop",
		option5: "dug",
		option6: "dad",
		option7: "mop",
		option8: "mug",
		option9: "mad",
		correct1: "chop",
		correct2: "chug",
		correct3: "chad",
		correct4: "dop",
		correct5: "dug",
		correct6: "dad",
		correct7: "mop",
		correct8: "mug",
		correct9: "mad",
	},
	
  render: args => {
		const xml = getContainerXml(args);
		return html`<lido-home .xmlData="${xml}"></lido-home>`
	},
};

function getContainerXml(args){
	return `<main>
				<lido-container id="lido-container" value="mainContainer1" objective="${args.correct1},${args.correct2},${args.correct3},${args.correct4},${args.correct5},${args.correct6},${args.correct7},${args.correct8},${args.correct9}" height="100%" width="100%" bgColor="transparent" bgImage="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/Underwater.png" visible="true" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="this.justifyContent='space-around';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" showCheck="false" isContinueOnCorrect="true" afterDrop="false" isAllowOnlyCorrect="true">
		<!-- Chimple Avatar -->
		<lido-cell layout="pos" id="pos1" disableEdit="true" value="pos2" height="305px" width="227px" x="landscape.1274px, portrait.541px" y="landscape.591px, portrait.1274px" ariaHidden="true" z="1" bgColor="transparent" visible="true" onEntry="this.animation='rightToPlace 2.5s linear';">
			<lido-avatar id="lido-avatar" disableEdit="true" visible="true" height="462px" width="356px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" altText="{chimpleCharacterRive}">
			</lido-avatar>
		</lido-cell>

		<!-- drop container -->
		<lido-cell layout="col" visible="true" width="landscape.63%, portrait.96%" height="landscape.100%, portrait.57%" bgColor='transparent'>
			<lido-image src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/ground.png" isSlice="true" disableEdit="true" tabIndex="1" visible="true" width="90%" height="90%" imageSlice="30 fill" flexibleWidth="false" value="dropContainer" z="0">
				<lido-cell layout="landscape.row, portrait.col" bgColor="transparent" visible="true" width="100%" height="100%">
					<!-- child drops -->
					<lido-cell layout="col" bgColor="transparent" visible="true" width="100%" height="100%">
						<lido-cell layout="row" visible="true" width="75%" height="100%" bgColor="transparent" position="absolute" x="0px" y="0px" margin="landscape.0px 0px 0px 25%, portrait.0px 0px 0px 25%" z="1">

							<lido-image isSlice="true" id="option1" value="op" tabIndex="1" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/grass_question_wordmatrix.png" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.25%, portrait.22%" height="landscape.70%, portrait.75%" font-size="36px" z="0">
								<lido-text visible="true" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="100px" height="100px" string="op" fontColor="black" font="'Baloo 2', serif" font-size="36px" z="0">
								</lido-text>
							</lido-image>
							<lido-image isSlice="true" id="option2" value="ug" tabIndex="2" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/grass_question_wordmatrix.png" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.25%, portrait.22%" height="landscape.70%, portrait.75%" font-size="36px" z="0">
								<lido-text visible="true" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="100px" height="100px" string="ug" fontColor="black" font="'Baloo 2', serif" font-size="36px" z="0">
								</lido-text>
							</lido-image>
							<lido-image isSlice="true" id="option3" value="ad" tabIndex="3" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/grass_question_wordmatrix.png" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.25%, portrait.22%" height="landscape.70%, portrait.75%" font-size="36px" z="0">
								<lido-text visible="true" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="100px" height="100px" string="ad" fontColor="black" font="'Baloo 2', serif" font-size="36px" z="0">
								</lido-text>
							</lido-image>


						</lido-cell>
						<lido-cell layout="row" visible="true" width="100%" height="100%" bgColor="transparent">
							<lido-image isSlice="true" id="option4" value="basket" tabIndex="4" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/grass_question_wordmatrix.png" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.20%, portrait.18%" height="landscape.70%, portrait.75%" font-size="36px" z="0">
								<lido-text visible="true" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="100px" height="100px" string="ch" fontColor="black" font="'Baloo 2', serif" font-size="36px" z="0">
								</lido-text>
							</lido-image>
							<lido-image id="option5" isSlice="true" value="${args.correct1}" tabIndex="5" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/mud_drop_wordmatrix.png" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.18%, portrait.15%" height="landscape.60%, portrait.70%" font-size="36px" z="0" type="drop">
							</lido-image>
							<lido-image id="option6" isSlice="true" value="${args.correct2}" tabIndex="6" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/mud_drop_wordmatrix.png" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.18%, portrait.15%" height="landscape.60%, portrait.70%" font-size="36px" z="0" type="drop">
							</lido-image>
							<lido-image id="option7" isSlice="true" value="${args.correct3}" tabIndex="7" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/mud_drop_wordmatrix.png" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.18%, portrait.15%" height="landscape.60%, portrait.70%" font-size="36px" z="0" type="drop">
							</lido-image>


						</lido-cell>
						<lido-cell layout="row" visible="true" width="100%" height="100%" bgColor="transparent">
							<lido-image isSlice="true" id="option8" value="basket" tabIndex="8" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/grass_question_wordmatrix.png" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.20%, portrait.18%" height="landscape.70%, portrait.75%" font-size="36px" z="0">
								<lido-text visible="true" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="100px" height="100px" string="d" fontColor="black" font="'Baloo 2', serif" font-size="36px" z="0">
								</lido-text>
							</lido-image>
							<lido-image id="option9" isSlice="true" value="${args.correct4}" tabIndex="9" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/mud_drop_wordmatrix.png" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.18%, portrait.15%" height="landscape.60%, portrait.70%" font-size="36px" z="0" type="drop">
							</lido-image>
							<lido-image id="option10" isSlice="true" value="${args.correct5}" tabIndex="10" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/mud_drop_wordmatrix.png" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.18%, portrait.15%" height="landscape.60%, portrait.70%" font-size="36px" z="0" type="drop">
							</lido-image>
							<lido-image id="option11" isSlice="true" value="${args.correct6}" tabIndex="11" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/mud_drop_wordmatrix.png" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.18%, portrait.15%" height="landscape.60%, portrait.70%" font-size="36px" z="0" type="drop">
							</lido-image>
						</lido-cell>
						<lido-cell layout="row" visible="true" width="100%" height="100%" bgColor="transparent">
							<lido-image isSlice="true" id="option12" value="basket" tabIndex="12" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/grass_question_wordmatrix.png" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.20%, portrait.18%" height="landscape.70%, portrait.75%" font-size="36px" z="0">
								<lido-text visible="true" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="100px" height="100px" string="m" fontColor="black" font="'Baloo 2', serif" font-size="36px" z="0">
								</lido-text>
							</lido-image>
							<lido-image id="option13" isSlice="true" value="${args.correct7}" tabIndex="13" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/mud_drop_wordmatrix.png" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.18%, portrait.15%" height="landscape.60%, portrait.70%" font-size="36px" z="0" type="drop">
							</lido-image>
							<lido-image id="option14" isSlice="true" value="${args.correct8}" tabIndex="14" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/mud_drop_wordmatrix.png" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.18%, portrait.15%" height="landscape.60%, portrait.70%" font-size="36px" z="0" type="drop">
							</lido-image>
							<lido-image id="option15" isSlice="true" value="${args.correct9}" tabIndex="15" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/mud_drop_wordmatrix.png" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.18%, portrait.15%" height="landscape.60%, portrait.70%" font-size="36px" z="0" type="drop">
							</lido-image>
						</lido-cell>

					</lido-cell>
					<!-- drag container -->
					<lido-cell layout="landscape.col, portrait.row" visible="true" onEntry="this.gap = '90px';" width="landscape.25%, portrait.75%"  height="landscape.73%, portrait.30%" bgColor="transparent" position="absolute" x="0px" y="0px" margin="landscape.30% 0px 0px 0px, portrait.0px 0px 0px 35%" z="1">
						<lido-image isSlice="true" type="drag" id="option16" value='${args.option1}' tabIndex="16" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/blue_alphabet_wordmatrix.png" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.70%, portrait.30%" height="landscape.20%, portrait.65%" font-size="36px" z="0">
							<lido-text visible="true"  bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="landscape.100px, portrait.115px" height="landscape.115px, portrait.100px" string='${args.option1}' fontColor="black" font="'Baloo 2', serif" font-size="36px" z="0">
							</lido-text>
						</lido-image>
						<lido-image isSlice="true" type="drag" id="option17" value='${args.option2}' tabIndex="17" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/blue_alphabet_wordmatrix.png" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.70%, portrait.22%" height="landscape.20%, portrait.65%"  font-size="36px" z="0">
							<lido-text visible="true" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="landscape.100px, portrait.115px" height="landscape.115px, portrait.100px" string='${args.option2}' fontColor="black" font="'Baloo 2', serif" font-size="36px" z="0">
							</lido-text>
						</lido-image>
						<lido-image isSlice="true" type="drag" id="option18" value='${args.option3}' tabIndex="18" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/blue_alphabet_wordmatrix.png" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.70% ,portrait.22%" height="landscape.20%, portrait.65%"  font-size="36px" z="0">
							<lido-text visible="true" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="landscape.100px, portrait.115px" height="landscape.115px, portrait.100px" string='${args.option3}' fontColor="black" font="'Baloo 2', serif" font-size="36px" z="0">
							</lido-text>
						</lido-image>

						<!--hidden drags -->
						<lido-image isSlice="true" type="drag" id="option19" value='${args.option4}' tabIndex="19" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/blue_alphabet_wordmatrix.png" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.70%, portrait.22%" height="landscape.20%, portrait.65%" font-size="36px" z="0">
							<lido-text visible="true" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="landscape.100px, portrait.115px" height="landscape.115px, portrait.100px" string='${args.option4}' fontColor="black" font="'Baloo 2', serif" font-size="36px" z="0">
							</lido-text>
						</lido-image>
						<lido-image isSlice="true" type="drag" id="option20" value='${args.option5}' tabIndex="20" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/blue_alphabet_wordmatrix.png" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.70%, portrait.22%" height="landscape.20%, portrait.65%"  font-size="36px" z="0">
							<lido-text visible="true" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="landscape.100px, portrait.115px" height="landscape.115px, portrait.100px" string='${args.option5}' fontColor="black" font="'Baloo 2', serif" font-size="36px" z="0">
							</lido-text>
						</lido-image>
						<lido-image isSlice="true" type="drag" id="option21" value='${args.option6}' tabIndex="21" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/blue_alphabet_wordmatrix.png" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.70% ,portrait.22%" height="landscape.20%, portrait.65%"  font-size="36px" z="0">
							<lido-text visible="true" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="landscape.100px, portrait.115px" height="landscape.115px, portrait.100px" string='${args.option6}' fontColor="black" font="'Baloo 2', serif" font-size="36px" z="0">
							</lido-text>
						</lido-image>

						<lido-image isSlice="true" type="drag" id="option22" value='${args.option7}' tabIndex="22" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/blue_alphabet_wordmatrix.png" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.70%, portrait.22%" height="landscape.20%, portrait.65%" font-size="36px" z="0">
							<lido-text visible="true" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="landscape.100px, portrait.115px" height="landscape.115px, portrait.100px" string='${args.option7}' fontColor="black" font="'Baloo 2', serif" font-size="36px" z="0">
							</lido-text>
						</lido-image>
						<lido-image isSlice="true" type="drag" id="option23" value='${args.option8}' tabIndex="23" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/blue_alphabet_wordmatrix.png" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.70%, portrait.22%" height="landscape.20%, portrait.65%"  font-size="36px" z="0">
							<lido-text visible="true" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="landscape.100px, portrait.115px" height="landscape.115px, portrait.100px" string='${args.option8}' fontColor="black" font="'Baloo 2', serif" font-size="36px" z="0">
							</lido-text>
						</lido-image>
						<lido-image isSlice="true" type="drag" id="option24" value='${args.option9}' tabIndex="24" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/blue_alphabet_wordmatrix.png" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.70% ,portrait.22%" height="landscape.20%, portrait.65%"  font-size="36px" z="0">
							<lido-text visible="true" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="landscape.100px, portrait.115px" height="landscape.115px, portrait.100px" string='${args.option9}' fontColor="black" font="'Baloo 2', serif" font-size="36px" z="0">
							</lido-text>
						</lido-image>

					</lido-cell>
				</lido-cell>
			</lido-image>

		</lido-cell>
	</lido-container>
	</main>`;
}
