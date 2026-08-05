import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Templates/palStorytale',
};
export default meta;

export const AmazingStories: StoryObj = {
  args: {
    content:
      'A small caterpillar was floating in a river and could not reach the shore. It tried many times but the water was too strong. A bird sitting on a tree saw the caterpillar in trouble. The bird dropped a leaf into the river and the caterpillar climbed on it to reach the shore. The caterpillar thanked the bird for helping it.',
	highlightWord: true,
	audioURL: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/palAudio/palStoyTaleAudio.mp3',
     },

  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

function getContainerXml(args) {
  return `<main>
    <lido-container disable-speak="true" highlight-word-by-word="${args.highlightWord}"  show-prev-button="false" show-next-button="true" id="lido-container" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/palStory/bgImage.png" height="1600px" width="900px" value="mainContainer4" objective="" aria-label="" x="0" y="0" z="0" visible="true" audio="" onTouch="" onCorrect="" onEntry="" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="true">
		<lido-cell layout="row" id="cell1" visible="true" margin="99px 164px 0px 0px"  value="cell1" width="landscape.87%,portrait.86%" height="landscape.76%,portrait.80%" x="50px" y="50px" bg-color="transparent"  onEntry="" >
				
			<lido-text id="text1" tab-index="1" audio="${args.audioURL}"  value="text1" visible="true" width="landscape.100%,portrait.90%" height="100%" bg-color="#FFF5BB" font-family="Baloo Bhai 2" font-size="60px" font-color="#000" string='${args.content}' onEntry="this.border='2px solid #FFB612'; this.fontWeight='600';this.padding='20px 28px'; this.boxShadow='unset'; this.border-radius='16px'; this.textAlign='start'; this.speak='true';">
			</lido-text>
		</lido-cell>
			
		<!-- below is the code for avatar -->

		<lido-cell layout="pos" id="pos1" disable-edit="true" value="pos1" height="landscape.373px,portrait.401px" width="landscape.344px,portrait.401px" x="landscape.82%, portrait.24%" y="landscape.59%, portrait.83%" aria-hidden="true" z="2" bg-color="transparent" type="" visible="true" audio="" onTouch="" onCorrect="">
		<lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/chimplecharacter.riv" alt-text="{chimpleCharacterRive}" bg-color="transparent">
		</lido-avatar>
		<lido-image id="image1" disable-edit="true" value="image1" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/Shadow.png" bg-color="transparent" width="203px" height="32px" x="landscape.73px,portrait.111px" y="landscape.302px,portrait.344px" alt-text="{shadowImgae}">
		</lido-image>
	</lido-cell>
	</lido-container> 

	</main>`
}
