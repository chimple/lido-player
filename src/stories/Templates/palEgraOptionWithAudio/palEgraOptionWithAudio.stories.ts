import { html } from 'lit-html';
import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'Templates/palEgraOptionWithAudio',
  argTypes: {
    option1: { control: 'text' },
    audio1: { control: 'text' },
    audio2: { control: 'text' },
    option2: { control: 'text' },
    option3: { control: 'text' },
    audio3: { control: 'text' },
    option4: { control: 'text' },
    audio4: { control: 'text' },
    audioImage: { control: 'text' },
    isAllowOnlyCorrect: { control: 'boolean' },
  },
};
export default meta;

export const PalEgraOptionWithAudio: StoryObj = {
  args: {
    option1: 'अम्मा',
    audio1: '',
    option2: 'क्या',
    audio2: '',
    option3: 'ख्याल',
    audio3: '',
    option4: 'मख्खी',
    audio4: '',
    audioImage: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Navbar-buttons/audio.png',
    isAllowOnlyCorrect: true,
  },

  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

function getContainerXml(args) {

  const objective = `${args.option1.trim()},${args.option2.trim()},${args.option3.trim()},${args.option4.trim()}`;
  return `<main>
		<lido-container disable-speak="true" id="lido-container" tab-index="1" template-id="dragAndDrop" value="maincontainer" objective="${objective}" aria-label="This is a multiple-option question. Select one option from the list." height="100vh" width="100vw" x="0" y="0" z="0" bg-color="transparent" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/PAL-EGRA/palEgraTemplate9.png" visible="true" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="invisibleText.speak='true';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="${args.isAllowOnlyCorrect}" is-allow-only-correct="${args.isAllowOnlyCorrect}">

		<!-- Chimple Avatar -->
		<lido-cell layout="pos" id="pos1" disable-edit="true" value="pos1" height="350px" width="350px" x="landscape.625px, portrait.273px" y="landscape.40px, portrait.1200px" aria-hidden="true" z="0" bg-color="transparent" type="" visible="true" audio="" onCorrect="" onEntry="this.animation='leftToPlace 1.5s linear';">
			<lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="350px" width="350px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/chimplecharacter.riv" alt-text="{chimpleCharacterRive}" bg-color="transparent">
			</lido-avatar>
			<lido-image id="image1" disable-edit="true" value="image1" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/Shadow.png" bg-color="transparent" width="186px" height="40px" x="77px" y="302px" alt-text="{shadowImgae}">
			</lido-image>
		</lido-cell>

    <lido-text tab-index="2" id="invisibleText" value="play the audio first then drag the correct option into correct drop place" visible="false" width="1000px" height="100px" onEntry="this.boxShadow='unset'; this.fontWeight='700';" string="play the audio first then drag the correct option into correct drop place" font-family="'Baloo 2', serif" font-size="90px" font-color="black" bg-color="transparent" z="0" x="25px" y="20px" >
    </lido-text>

		<lido-cell visible="true" layout="col" width="100%" height="100%" bg-color="transparent">

      <!-- Question -->
			<lido-cell layout="row" visible="true" width="100%" height="landscape.150px, portrait.25%" bg-color="transparent" onEntry="this.justifyContent='center'; this.borderRadius='16px'; this.alignContent='center'; this.animation='topToPlace 0.5s linear';" margin="landscape.125px 0px 60px 0px, portrait.0px 0px 0px 0px" gap="190px">
        <lido-image id="icon1" type="click" is-slice="true" disable-edit="true" value="image1" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/PAL-EGRA/PalEgraTempAudioIcon.png" bg-color="transparent" width="225px" height="240px" x="77px" y="302px" alt-text="" onTouch="text1.speak='true';">
          <lido-text id="text1" disable-speak="true" tab-index="3" value="${args.option1}" visible="false" width="1000px" height="100px" onEntry="this.boxShadow='unset'; this.fontWeight='700';" string="${args.option1}" font-family="'Baloo 2', serif" font-size="90px" font-color="black" bg-color="transparent" z="0" x="25px" y="20px">
          </lido-text>
			  </lido-image>
        <lido-image id="icon2" type="click" is-slice="true" disable-edit="true" value="image2" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/PAL-EGRA/PalEgraTempAudioIcon.png" bg-color="transparent" width="225px" height="240px" x="77px" y="302px" alt-text="" onTouch="text2.speak='true';">
          <lido-text id="text2" tab-index="4" disable-speak="true" value="${args.option2}" visible="false" width="1000px" height="100px" onEntry="this.boxShadow='unset'; this.fontWeight='700';" string="${args.option2}" font-family="'Baloo 2', serif" font-size="90px" font-color="black" bg-color="transparent" z="0" x="25px" y="20px">
          </lido-text>
			  </lido-image>
        <lido-image id="icon3" type="click" is-slice="true" disable-edit="true" value="image3" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/PAL-EGRA/PalEgraTempAudioIcon.png" bg-color="transparent" width="225px" height="240px" x="77px" y="302px" alt-text="" onTouch="text3.speak='true';">
          <lido-text id="text3" disable-speak="true" tab-index="5" value="${args.option3}" visible="false" width="1000px" height="100px" onEntry="this.boxShadow='unset'; this.fontWeight='700';" string="${args.option3}" font-family="'Baloo 2', serif" font-size="90px" font-color="black" bg-color="transparent" z="0" x="25px" y="20px">
          </lido-text>
			  </lido-image>
        <lido-image id="icon4" type="click" is-slice="true" disable-edit="true" value="image4" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/PAL-EGRA/PalEgraTempAudioIcon.png" bg-color="transparent" width="225px" height="240px" x="77px" y="302px" alt-text="" onTouch="text4.speak='true';">
          <lido-text disable-speak="true" id="text4" tab-index="6" value="${args.option4}" visible="false" width="1000px" height="100px" onEntry="this.boxShadow='unset'; this.fontWeight='700';" string="${args.option4}" font-family="'Baloo 2', serif" font-size="90px" font-color="black" bg-color="transparent" z="0" x="25px" y="20px">
          </lido-text>
			  </lido-image>
			</lido-cell>


      <!-- drop boxes -->
				<lido-cell visible="true" layout="landscape.row, portrait.wrap" width="landscape.100%, portrait.90%" height="landscape.100%, portrait.auto" bg-color="transparent" gap="landscape.25px, portrait.55px" onEntry="">
					<lido-text id="drop1" tab-index="7" type="drop" visible="true" bg-color="#FFFFFF;" width="landscape.320px, portrait.100%"  value="${args.option1}" height="212px" onEntry="this.borderRadius='25px'; this.padding='0';" onCorrect="lido-avatar.avatarAnimate='Success';" onInCorrect="lido-avatar.avatarAnimate='Fail';">
					</lido-text>
          <lido-text id="drop2" tab-index="8" type="drop" visible="true" bg-color="#FFFFFF;" width="landscape.320px, portrait.100%"  value="${args.option2}" height="212px" onEntry="this.borderRadius='25px'; this.padding='0';" onCorrect="lido-avatar.avatarAnimate='Success';" onInCorrect="lido-avatar.avatarAnimate='Fail';">
					</lido-text>
          <lido-text id="drop3" tab-index="9" type="drop" visible="true" bg-color="#FFFFFF;" width="landscape.320px, portrait.100%"  value="${args.option3}" height="212px" onEntry="this.borderRadius='25px'; this.padding='0';" onCorrect="lido-avatar.avatarAnimate='Success';" onInCorrect="lido-avatar.avatarAnimate='Fail';">
					</lido-text>
          <lido-text id="drop4" tab-index="10" type="drop" visible="true" bg-color="#FFFFFF;" width="landscape.320px, portrait.100%"  value="${args.option4}" height="212px" onEntry="this.borderRadius='25px'; this.padding='0';" onCorrect="lido-avatar.avatarAnimate='Success';" onInCorrect="lido-avatar.avatarAnimate='Fail';">
					</lido-text>					
				</lido-cell>
			
			<!-- drag Options -->
				<lido-cell visible="true" layout="landscape.row, portrait.wrap" width="landscape.100%, portrait.90%" height="landscape.100%, portrait.auto" bg-color="transparent" gap="landscape.70px, portrait.55px" onEntry="">
					<lido-text id="drag1" tab-index="11" type="drag" visible="true" bg-color="#FFAC4C" width="landscape.320px, portrait.100%" string="${args.option1}" value="${args.option1}" font-size="110px" height="212px" onEntry="this.borderRadius='25px'; this.padding='0'; this.fontWeight='700';">
					</lido-text>
          <lido-text id="drag2" tab-index="12" type="drag" visible="true" bg-color="#FFAC4C" width="landscape.320px, portrait.100%" string="${args.option2}" value="${args.option2}" font-size="110px" height="212px" onEntry="this.borderRadius='25px'; this.padding='0'; this.fontWeight='700';">
					</lido-text>
          <lido-text id="drag3" tab-index="13" type="drag" visible="true" bg-color="#FFAC4C" width="landscape.320px, portrait.100%" string="${args.option3}" value="${args.option3}" font-size="110px" height="212px" onEntry="this.borderRadius='25px'; this.padding='0'; this.fontWeight='700';">
					</lido-text>
          <lido-text id="drag4" tab-index="14" type="drag" visible="true" bg-color="#FFAC4C" width="landscape.320px, portrait.100%" string="${args.option4}" value="${args.option4}" font-size="110px" height="212px" onEntry="this.borderRadius='25px'; this.padding='0'; this.fontWeight='700';">
					</lido-text>					
				</lido-cell>

		</lido-cell>
	</lido-container>
</main>`;
}
