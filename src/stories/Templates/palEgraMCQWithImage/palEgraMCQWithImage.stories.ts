import { html } from 'lit-html';
import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'Templates/palEgraMCQWithImage',
  argTypes: {
    question: { control: 'text' },
    option1: { control: 'text' },
    audio1: { control: 'text' },
    optionImg1: { control: 'text' },
    audio2: { control: 'text' },
    option2: { control: 'text' },
    optionImg2: { control: 'text' },
    option3: { control: 'text' },
    audio3: { control: 'text' },
    optionImg3: { control: 'text' },
    option4: { control: 'text' },
    audio4: { control: 'text' },
    optionImg4: { control: 'text' },
    correctAns: { control: 'text' },
    isAllowOnlyCorrect: {control: 'boolean'},
  },
};
export default meta;

export const PalEgraMCQWithImage: StoryObj = {
  args: {
    question: 'हाथी',
    option1: 'ELEPHANT',
    audio1: '',
    optionImg1: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/PAL-EGRA/elephant.png',
    option2: 'TORTOISE',
    audio2: '',
    optionImg2: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/PAL-EGRA/tortoise.png',
    option3: 'RAT',
    audio3: '',
    optionImg3: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/PAL-EGRA/rat.png',
    option4: 'RAT',
    audio4: '',
    optionImg4: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/PAL-EGRA/rat.png',
    correctAns: 'ELEPHANT',
    isAllowOnlyCorrect: true,
  },

  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

function getContainerXml(args) {
  return `<main>
		<lido-container id="lido-container" tab-index="1" value="maincontainer" objective="${args.correctAns}" aria-label="This is a multiple-option question. Select one option from the list." height="100vh" width="100vw" x="0" y="0" z="0" bg-color="transparent" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/PAL-EGRA/palEgraTemplate3.png" visible="true" audio="background1.mp3" onTouch="" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="invisibleText.speak='true';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="${args.isAllowOnlyCorrect}" is-allow-only-correct="${args.isAllowOnlyCorrect}">

		<!-- Chimple Avatar -->
		<lido-cell layout="pos" id="pos1" disable-edit="true" value="pos1" height="350px" width="350px" x="landscape.1228px, portrait.273px" y="landscape.125px, portrait.1200px" aria-hidden="true" z="2" bg-color="transparent" type="" visible="true" audio="" onTouch="" onCorrect="" onEntry="this.animation='leftToPlace 1.5s linear';">
			<lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="350px" width="350px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/chimplecharacter.riv" alt-text="{chimpleCharacterRive}" bg-color="transparent">
			</lido-avatar>
			<lido-image id="image1" disable-edit="true" value="image1" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/Shadow.png" bg-color="transparent" width="186px" height="40px" x="77px" y="302px" alt-text="{shadowImgae}">
			</lido-image>
		</lido-cell>

    <lido-text tab-index="2" id="invisibleText" value="click the correct option that describes the image shown in text." visible="false" width="1000px" height="100px" onEntry="this.boxShadow='unset'; this.fontWeight='700';" string="click the correct option that describes the image shown in text." font-family="'Baloo 2', serif" font-size="90px" font-color="black" bg-color="transparent" z="0" x="25px" y="20px" ></lido-text>

		<lido-cell visible="true" layout="col" width="100%" height="100%" bg-color="transparent">
			<!-- Question -->
			<lido-cell layout="flex" visible="true" width="518px" height="landscape.198px, portrait.25%" bg-color="#FFF5BB" onEntry="this.justifyContent='center'; this.borderRadius='16px'; this.alignContent='center'; this.animation='topToPlace 0.5s linear';" margin="landscape.75px 0px 0px 0px, portrait.0px 0px 0px 0px">
					<lido-text id="textA" tab-index="3" value="${args.question}" visible="true" width="1000px" height="100px" onEntry="this.boxShadow='unset'; this.fontWeight='700';" string="${args.question}" font-family="'Baloo 2', serif" font-size="90px" font-color="black" bg-color="transparent" z="0" x="25px" y="20px" onTouch="this.speak='true';"></lido-text>
			</lido-cell>
			
			<!-- Options -->
			<lido-cell layout="flex" visible="true" width="100%" height="90%" bg-color="transparent" onEntry="this.justifyContent='center'; this.alignContent='center'; this.animation='bottomToPlace 1s linear';" margin="landscape.-60px 0px -210px 0px, portrait.0px 0px 0px 0px">
				<lido-cell visible="true" layout="landscape.row, portrait.wrap" width="landscape.85%, portrait.73%" height="landscape.100%, portrait.auto" bg-color="transparent" gap="landscape.0px, portrait.55px" onEntry="">
					<lido-cell tab-index="4" type="click" visible="true" layout="col" bg-color="transparent" width="landscape.25%, portrait.100%"  value="${args.option1}" height="50%" onEntry="this.borderRadius='25px'; this.padding='0';" onCorrect="" onInCorrect="" audio='${args.audio1}' onTouch="this.speak='true';">
						<lido-image visible="true" src="${args.optionImg1}" bg-color="transparent" width="90%" height="auto" border-radius="25px 25px 0 0" onEntry="this.marginTop='10px';"></lido-image>
					</lido-cell>
					<lido-cell tab-index="5" type="click" visible="true" layout="col" bg-color="transparent" width="landscape.25%, portrait.100%"  value="${args.option2}" height="50%" onEntry="this.borderRadius='25px'; this.padding='0';" onCorrect="" onInCorrect="" audio='${args.audio2}' onTouch="this.speak='true';">
						<lido-image visible="true" src="${args.optionImg2}" bg-color="transparent" width="90%" height="auto" border-radius="25px 25px 0 0" onEntry="this.marginTop='10px';"></lido-image>
					</lido-cell>
					<lido-cell tab-index="6" type="click" visible="true" layout="col" bg-color="transparent" width="landscape.25%, portrait.100%"  value="${args.option3}" height="50%" onEntry="this.borderRadius='25px'; this.padding='0';" margin="landscape.0, portrait.20px 0 0 0" onCorrect="" onInCorrect="" audio='${args.audio3}' onTouch="this.speak='true';">
						<lido-image visible="true" src="${args.optionImg3}" bg-color="transparent" width="90%" height="auto" border-radius="25px 25px 0 0" onEntry="this.marginTop='10px';"></lido-image>
					</lido-cell>
					<lido-cell tab-index="7" type="click" visible="true" layout="col" bg-color="transparent" width="landscape.25%, portrait.100%"  value="${args.option4}" height="50%" onEntry="this.borderRadius='25px'; this.padding='0';" margin="landscape.0, portrait.20px 0 0 0" onCorrect="" onInCorrect="" audio='${args.audio4}' onTouch="this.speak='true';">
						<lido-image visible="true" src="${args.optionImg4}" bg-color="transparent" width="90%" height="auto" border-radius="25px 25px 0 0" onEntry="this.marginTop='10px';"></lido-image>
					</lido-cell>
				</lido-cell>
			</lido-cell>
			
			<lido-cell layout="flex" height="30%" width="100%" x="landscape.-50px, portrait.100px" y="507px" z="2" bg-color="transparent" type="" visible="landscape.false, portrait.true" audio="" onTouch="" onCorrect="" onEntry="this.justifyContent='center'; this.alignContent='center'; this.animation='leftToPlace 1.5s linear'; ">
				
			</lido-cell>

		</lido-cell>
	</lido-container>
</main>`;
}
