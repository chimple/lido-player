import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
const meta: Meta = {
  title: 'Templates/matchingCard',
  argTypes: {
    answer: { control: 'text' },
    option1: { control: 'text' },
    option2: { control: 'text' },
    option3: { control: 'text' },
    isAllowOnlyCorrect: { control: 'boolean' },
  },
};

export default meta;
export const OrderTractor: StoryObj = {
  args: {
    answer: 'correct',
    option1: 'incorrect', option2: 'correct', option3: 'incorrect',
    isAllowOnlyCorrect: 'true',
  },

  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};
function getContainerXml(args) {
  return `
    <main>
     <lido-container id="lido-container" is-allow-only-correct="${args.isAllowOnlyCorrect}"  value="mainContainer1" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/MatchingCard/Spring.png" objective="${args.answer}" width="100%" bg-color="transparent" visible="true" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000'; truck.animation='placeToLeft 2.5s linear'; imgs.animation='placeToLeft 2.5s linear'; dragEle.animation='placeToLeft 2.5s linear'; this.sleep='2000';  " onEntry="this.justifyContent='space-around';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="true" after-drop="false" custom-style="#dropEle{border: none !important} #drag1,#drag2,#drag3{box-shadow: none !important}">
	<!-- Chimple Avatar -->
	<lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.448px,portrait.402px" width="landscape.350px,portrait.398px" x="landscape.1px, portrait.20px" y="landscape.5px, portrait.318px" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="">
			<lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
			</lido-avatar>
	</lido-cell>

	<lido-text id="trainAudio" visible="false" audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/MatchingCard/train1%20(1).m4a" onEntry="this.speak='true';"></lido-text>
    <lido-image id="truck"  height="60%" width="landscape.100%,portrait.200%" visible="true"  bg-Color="transparent" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/MatchingCard/train.svg" margin="landscape.14px 0px 0px 0px,portrait.452px 0px 0px 0px" onEntry="this.animation='rightToPlace 2.5s linear';" onCorrect="this.animation='placeToLeft 2.5s linear';"></lido-image>
		<lido-cell id="imgs" visible="true" x="landscape.-158px,portrait.0" y="landscape.-495px,portrait.-652px" layout="row" height="80%" width="landscape.35%,portrait.70%" bg-color="transparent" margin="landscape.-115px 0px 0px 345px,portrait.0px 0px 0px 95px" onEntry="this.position='relative';this.animation='rightToPlace 2.5s linear';" onCorrect="this.animation='placeToLeft 2.5s linear';">
		   	<lido-image id="qn" height="landscape.320px,portrait.320px" value="${args.answer}" width="landscape.320px,portrait.320px" tab-index="2" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/MatchingCard/Group%2047094.png"></lido-image>
		   	<lido-image id="dropEle" height="landscape.320px,portrait.320px" value="${args.answer}" width="landscape.320px,portrait.320px" tab-index="1" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/MatchingCard/card_shadow.png" type="drop"></lido-image>
		</lido-cell>
	<lido-cell id="dragEle" visible="true" layout="row" width="100%" height="40%" bg-color="transparent" margin="landscape.-580px 0px 50px 0px,portrait.-532px 0px 162px 0px" onEntry="this.animation='rightToPlace 2.5s linear';" onCorrect="this.animation='placeToLeft 2.5s linear';">
	   	<lido-image id="drag1" height="landscape.320px,portrait.320px" width="landscape.320px,portrait.320px" tab-index="1" value="${args.option1}" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/MatchingCard/Group%2047093.png" type="drag"></lido-image>
		<lido-image id="drag2" height="landscape.320px,portrait.320px" width="landscape.320px,portrait.320px" tab-index="2" value="${args.option2}" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/MatchingCard/Group%2047094.png" type="drag"></lido-image>
		<lido-image id="drag3" height="landscape.320px,portrait.320px" width="landscape.320px,portrait.320px" tab-index="3" value="${args.option3}" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/MatchingCard/Group%2047095.png" type="drag"></lido-image>
	</lido-cell>

    </lido-container>
    </main>
  `;
}
