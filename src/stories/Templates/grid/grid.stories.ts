import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Templates/Grid',
};
export default meta;

export const Options: StoryObj = {
  args: {
    option1: 'chop',
    option2: 'chug',
    option3: 'chad',
    option4: 'dop',
    option5: 'dug',
    option6: 'dad',
    option7: 'mop',
    option8: 'mug',
    option9: 'mad',
    correct1: 'chop',
    correct2: 'chug',
    correct3: 'chad',
    correct4: 'dop',
    correct5: 'dug',
    correct6: 'dad',
    correct7: 'mop',
    correct8: 'mug',
    correct9: 'mad',
  },

  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

function getContainerXml(args) {
  return `<main>
	<lido-container id="lido-container" value="mainContainer1" drop-action="move"  objective="${args.correct1},${args.correct2},${args.correct3},${args.correct4},${args.correct5},${args.correct6},${args.correct7},${args.correct8},${args.correct9}" height="100%" width="100%" bg-color="transparent" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/Underwater.png" visible="true" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="this.justifyContent='space-around';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="true" after-drop="false" is-allow-only-correct="true">
		<!-- Chimple Avatar -->
		<lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="305px" width="227px" x="landscape.1274px, portrait.541px" y="landscape.591px, portrait.1274px" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="this.animation='rightToPlace 2.5s linear';">
			<lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="462px" width="356px" src="/assets/images/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
			</lido-avatar>
		</lido-cell>

		<!-- drop container -->
		<lido-cell layout="col" visible="true" width="landscape.63%, portrait.96%" height="landscape.100%, portrait.57%" bg-color='transparent'>
			<lido-image src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/ground.png" is-slice="true" disable-edit="true" visible="true" width="90%" height="90%" imageSlice="30 fill" flexible-width="false" value="dropContainer" z="0">
				<lido-cell layout="landscape.row, portrait.col" bg-color="transparent" visible="true" width="100%" height="100%">
					<!-- child drops -->
					<lido-cell layout="col" bg-color="transparent" visible="true" width="100%" height="100%">
						<lido-cell layout="row" visible="true" width="75%" height="100%" bg-color="transparent" x="0px" y="0px" margin="landscape.0px 0px 0px 25%, portrait.0px 0px 0px 25%" z="1">

							<lido-image is-slice="true" id="option1" value="op" tab-index="1" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/grass_question_wordmatrix.png" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.25%, portrait.22%" height="landscape.70%, portrait.75%" font-size="36px" z="0">
								<lido-text visible="true" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="100px" height="100px" string="op" font-color="black" font-family="'Baloo 2', serif" font-size="36px" z="0">
								</lido-text>
							</lido-image>
							<lido-image is-slice="true" id="option2" value="ug" tab-index="2" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/grass_question_wordmatrix.png" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.25%, portrait.22%" height="landscape.70%, portrait.75%" font-size="36px" z="0">
								<lido-text visible="true" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="100px" height="100px" string="ug" font-color="black" font-family="'Baloo 2', serif" font-size="36px" z="0">
								</lido-text>
							</lido-image>
							<lido-image is-slice="true" id="option3" value="ad" tab-index="3" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/grass_question_wordmatrix.png" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.25%, portrait.22%" height="landscape.70%, portrait.75%" font-size="36px" z="0">
								<lido-text visible="true" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="100px" height="100px" string="ad" font-color="black" font-family="'Baloo 2', serif" font-size="36px" z="0">
								</lido-text>
							</lido-image>


						</lido-cell>
						<lido-cell layout="row" visible="true" width="100%" height="100%" bg-color="transparent">
							<lido-image is-slice="true" tab-index="4" id="option4" value="basket"  visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/grass_question_wordmatrix.png" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.20%, portrait.18%" height="landscape.70%, portrait.75%" font-size="36px" z="0">
								<lido-text visible="true" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="100px" height="100px" string="ch" font-color="black" font-family="'Baloo 2', serif" font-size="36px" z="0">
								</lido-text>
							</lido-image>
							<lido-image id="option5" is-slice="true" value="${args.correct1}"  visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/mud_drop_wordmatrix.png" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.18%, portrait.15%" height="landscape.60%, portrait.70%" font-size="36px" z="0" type="drop">
							</lido-image>
							<lido-image id="option6" is-slice="true" value="${args.correct2}"  visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/mud_drop_wordmatrix.png" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.18%, portrait.15%" height="landscape.60%, portrait.70%" font-size="36px" z="0" type="drop">
							</lido-image>
							<lido-image id="option7" is-slice="true" value="${args.correct3}"  visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/mud_drop_wordmatrix.png" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.18%, portrait.15%" height="landscape.60%, portrait.70%" font-size="36px" z="0" type="drop">
							</lido-image>


						</lido-cell>
						<lido-cell layout="row" visible="true" width="100%" height="100%" bg-color="transparent">
							<lido-image is-slice="true" tab-index="5" id="option8" value="basket" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/grass_question_wordmatrix.png" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.20%, portrait.18%" height="landscape.70%, portrait.75%" font-size="36px" z="0">
								<lido-text visible="true" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="100px" height="100px" string="d" font-color="black" font-family="'Baloo 2', serif" font-size="36px" z="0">
								</lido-text>
							</lido-image>
							<lido-image id="option9" is-slice="true" value="${args.correct4}"  visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/mud_drop_wordmatrix.png" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.18%, portrait.15%" height="landscape.60%, portrait.70%" font-size="36px" z="0" type="drop">
							</lido-image>
							<lido-image id="option10" is-slice="true" value="${args.correct5}" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/mud_drop_wordmatrix.png" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.18%, portrait.15%" height="landscape.60%, portrait.70%" font-size="36px" z="0" type="drop">
							</lido-image>
							<lido-image id="option11" is-slice="true" value="${args.correct6}" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/mud_drop_wordmatrix.png" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.18%, portrait.15%" height="landscape.60%, portrait.70%" font-size="36px" z="0" type="drop">
							</lido-image>
						</lido-cell>
						<lido-cell layout="row" visible="true" width="100%" height="100%" bg-color="transparent">
							<lido-image is-slice="true" tab-index="6" id="option12" value="basket" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/grass_question_wordmatrix.png" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.20%, portrait.18%" height="landscape.70%, portrait.75%" font-size="36px" z="0">
								<lido-text visible="true" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="100px" height="100px" string="m" font-color="black" font-family="'Baloo 2', serif" font-size="36px" z="0">
								</lido-text>
							</lido-image>
							<lido-image id="option13" is-slice="true" value="${args.correct7}"  visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/mud_drop_wordmatrix.png" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.18%, portrait.15%" height="landscape.60%, portrait.70%" font-size="36px" z="0" type="drop">
							</lido-image>
							<lido-image id="option14" is-slice="true" value="${args.correct8}"  visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/mud_drop_wordmatrix.png" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.18%, portrait.15%" height="landscape.60%, portrait.70%" font-size="36px" z="0" type="drop">
							</lido-image>
							<lido-image id="option15" is-slice="true" value="${args.correct9}"  visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/mud_drop_wordmatrix.png" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.18%, portrait.15%" height="landscape.60%, portrait.70%" font-size="36px" z="0" type="drop">
							</lido-image>
						</lido-cell>

					</lido-cell>
					<!-- drag container -->
					<lido-cell layout="landscape.col, portrait.row" visible="true" width="landscape.25%, portrait.75%"  height="landscape.73%, portrait.30%" bg-color="transparent" x="0px" y="0px" margin="landscape.30% 0px 0px 0px, portrait.0px 0px 0px 35%" z="1">
						<lido-image tab-index="7" is-slice="true" type="drag" id="option16" value='${args.option1}' visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/blue_alphabet_wordmatrix.png" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.120px, portrait.120px" height="landscape.120px, portrait.120px" font-size="36px" z="0" margin="landscape.0px 0px 80px 0px, portrait.0px 80px 0px 0px">
							<lido-text visible="true"  bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="landscape.100px, portrait.120px" height="landscape.120px, portrait.100px" string='${args.option1}' font-color="black" font-family="'Baloo 2', serif" font-size="36px" z="0" onTouch="this.speak='true';">
							</lido-text>
						</lido-image>
						<lido-image tab-index="8" is-slice="true" type="drag" id="option17" value='${args.option2}' visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/blue_alphabet_wordmatrix.png" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.120px, portrait.120px" height="landscape.120px, portrait.120px"  font-size="36px" z="0" margin="landscape.0px 0px 80px 0px, portrait.0px 80px 0px 0px">
							<lido-text visible="true" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="landscape.100px, portrait.120px" height="landscape.120px, portrait.100px" string='${args.option2}' font-color="black" font-family="'Baloo 2', serif" font-size="36px" z="0" onTouch="this.speak='true';">
							</lido-text>
						</lido-image>
						<lido-image tab-index="9" is-slice="true" type="drag" id="option18" value='${args.option3}' visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/blue_alphabet_wordmatrix.png" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.120px, portrait.120px" height="landscape.120px, portrait.120px"  font-size="36px" z="0" margin="landscape.0px 0px 80px 0px, portrait.0px 80px 0px 0px">
							<lido-text visible="true" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="landscape.100px, portrait.120px" height="landscape.120px, portrait.100px" string='${args.option3}' font-color="black" font-family="'Baloo 2', serif" font-size="36px" z="0" onTouch="this.speak='true';">
							</lido-text>
						</lido-image>

						<!--hidden drags -->
						<lido-image is-slice="true" type="drag" id="option19" value='${args.option4}' visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/blue_alphabet_wordmatrix.png" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.120px, portrait.120px" height="landscape.120px, portrait.120px" font-size="36px" z="0" margin="landscape.0px 0px 80px 0px, portrait.0px 80px 0px 0px">
							<lido-text visible="true" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="landscape.100px, portrait.120px" height="landscape.120px, portrait.100px" string='${args.option4}' font-color="black" font-family="'Baloo 2', serif" font-size="36px" z="0" onTouch="this.speak='true';">
							</lido-text>
						</lido-image>
						<lido-image is-slice="true" type="drag" id="option20" value='${args.option5}' visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/blue_alphabet_wordmatrix.png" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.120px, portrait.120px" height="landscape.120px, portrait.120px"  font-size="36px" z="0" margin="landscape.0px 0px 80px 0px, portrait.0px 80px 0px 0px">
							<lido-text visible="true" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="landscape.100px, portrait.120px" height="landscape.120px, portrait.100px" string='${args.option5}' font-color="black" font-family="'Baloo 2', serif" font-size="36px" z="0" onTouch="this.speak='true';">
							</lido-text>
						</lido-image>
						<lido-image is-slice="true" type="drag" id="option21" value='${args.option6}' visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/blue_alphabet_wordmatrix.png" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.120px, portrait.120px" height="landscape.120px, portrait.120px"  font-size="36px" z="0" margin="landscape.0px 0px 80px 0px, portrait.0px 80px 0px 0px">
							<lido-text visible="true" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="landscape.100px, portrait.120px" height="landscape.120px, portrait.100px" string='${args.option6}' font-color="black" font-family="'Baloo 2', serif" font-size="36px" z="0" onTouch="this.speak='true';">
							</lido-text>
						</lido-image>

						<lido-image is-slice="true" type="drag" id="option22" value='${args.option7}' visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/blue_alphabet_wordmatrix.png" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.120px, portrait.120px" height="landscape.120px, portrait.120px" font-size="36px" z="0" margin="landscape.0px 0px 80px 0px, portrait.0px 80px 0px 0px">
							<lido-text visible="true" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="landscape.100px, portrait.120px" height="landscape.120px, portrait.100px" string='${args.option7}' font-color="black" font-family="'Baloo 2', serif" font-size="36px" z="0" onTouch="this.speak='true';">
							</lido-text>
						</lido-image>
						<lido-image is-slice="true" type="drag" id="option23" value='${args.option8}' visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/blue_alphabet_wordmatrix.png" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.120px, portrait.120px" height="landscape.120px, portrait.120px"  font-size="36px" z="0" margin="landscape.0px 0px 80px 0px, portrait.0px 80px 0px 0px">
							<lido-text visible="true" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="landscape.100px, portrait.120px" height="landscape.120px, portrait.100px" string='${args.option8}' font-color="black" font-family="'Baloo 2', serif" font-size="36px" z="0" onTouch="this.speak='true';">
							</lido-text>
						</lido-image>
						<lido-image is-slice="true" type="drag" id="option24" value='${args.option9}' visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/blue_alphabet_wordmatrix.png" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.120px, portrait.120px" height="landscape.120px, portrait.120px"  font-size="36px" z="0" margin="landscape.0px 0px 80px 0px, portrait.0px 80px 0px 0px">
							<lido-text visible="true" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="landscape.100px, portrait.120px" height="landscape.120px, portrait.100px" string='${args.option9}' font-color="black" font-family="'Baloo 2', serif" font-size="36px" z="0" onTouch="this.speak='true';">
							</lido-text>
						</lido-image>

					</lido-cell>
				</lido-cell>
			</lido-image>

		</lido-cell>
	</lido-container>
	</main>`;
}
