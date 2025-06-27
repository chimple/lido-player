import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Templates/StoryTale',
};
export default meta;

export const AmazingStories: StoryObj = {
  args: {
    content:
      'One night, he was really, really sad. He felt so upset because he could never finish counting all the stars. He even started to cry! "Ooohh... Ooohh... Ooohh … Ooohh … What is this? I am never able to complete my counting!"',
    storyimage: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/lidoPlayerButton/colorfull.png',
  },

  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

function getContainerXml(args) {
  return `<main>
    <lido-container show-prev-button="false" show-next-button="true" id="lido-container" tab-index="1" bg-image="" height="1600px" width="900px" value="mainContainer4" objective="" aria-label="" x="0" y="0" z="0" visible="true" audio="" onTouch="" onCorrect="" onEntry="" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="true">
		<lido-cell id="cell1" margin="landscape.140px 0px 0px 0px,portrait.170px 0px 0px 0px" visible="true" layout="landscape.row,portrait.col" disable-edit="true" value="cell1" width="landscape.100%,portrait.86%" height="landscape.100%,portrait.80%" x="50px" y="50px" bg-color="white" type="" tab-index="1" onEntry="this.justifyContent='space-evenly'; this.borderRadius='6px'" onTouch="" onCorrect="" onInCorrect="">
			<lido-image id="image1" disable-edit="true" margin="landscape.0px 0px 0px 0px,portrait.-20px 0px 0px 0px" value="image1" visible="true" src="${args.storyimage}" width="landscape.704px,portrait.744px" height="landscape.704px,portrait.707px" bg-color="transparent" alt-text="{catimage}" onEntry="">
			</lido-image>	
			<lido-text id="text1" disable-edit="true" margin="landscape.0px 0px 0px 27px,portrait.0px 0px 60px 0px" value="text1" visible="true" width="landscape.47%,portrait.90%" height="100%" bg-color="transparent" font-family="'Baloo 2', serif" font-size="44px" font-color="#000" string='${args.content}' onEntry="this.fontWeight='500'; this.boxShadow='unset'; this.textAlign='start';">
			</lido-text>
		</lido-cell>
			
		<!-- below is the code for avatar -->

		<lido-pos id="pos1" disable-edit="true" value="pos1" height="350px" width="350px" x="landscape.1300px, portrait.580px" y="landscape.670px, portrait.1350px" aria-hidden="true" z="1" bg-color="transparent" type="" visible="true" audio="col1.mp3" onTouch="" onCorrect="">
			<lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="350px" width="350px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
			</lido-avatar>
				<lido-image id="image1" disable-edit="true" value="image1" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/Shadow.png" bg-color="transparent" width="186px" height="20px" x="77px" y="305px" alt-text="{shadowImage}">
				</lido-image>
		</lido-pos>
	</lido-container>

	<!-- Inverted image -->

	<lido-container show-prev-button="true" show-next-button="true" id="lido-container" tab-index="1" bg-image="" height="1600px" width="900px" value="mainContainer4" objective="" aria-label="" x="0" y="0" z="0" visible="true" audio="" onTouch="" onCorrect="" onEntry="" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="true">
		<lido-cell id="cell1" margin="landscape.90px 0px 0px 0px,portrait.70px 0px 0px 0px" visible="true" layout="landscape.row,portrait.col" disable-edit="true" value="cell1" width="landscape.100%,portrait.86%" height="landscape.100%,portrait.80%" x="50px" y="50px" bg-color="white" type="" tab-index="1" onEntry="this.justifyContent='space-evenly'; this.borderRadius='6px'" onTouch="" onCorrect="" onInCorrect="">
			<lido-text id="text1" disable-edit="true" margin="landscape.0px 0px 0px 27px,portrait.0px 0px 52px 0px" value="text1" visible="true" width="landscape.47%,portrait.90%" height="100%" bg-color="transparent" font-family="'Baloo 2', serif" font-size="44px" font-color="#000" string='${args.content}' onEntry="this.fontWeight='500'; this.boxShadow='unset'; this.textAlign='start';">
			</lido-text>
			<lido-image id="image1" disable-edit="true" margin="landscape.0px 0px 0px 0px,portrait.0px 0px 80px 0px" value="image1" visible="true" src="${args.storyimage}" width="landscape.704px,portrait.744px" height="landscape.704px,portrait.707px" bg-color="transparent" alt-text="{catimage}" onEntry="">
			</lido-image>	
		</lido-cell>
			
		<!-- below is the code for avatar -->

		<lido-pos id="pos1" disable-edit="true" value="pos1" height="350px" width="350px" x="landscape.0px, portrait.580px" y="landscape.670px, portrait.1380px" aria-hidden="true" z="1" bg-color="transparent" type="" visible="true" audio="col1.mp3" onTouch="" onCorrect="">
			<lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="350px" width="350px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
			</lido-avatar>
				<lido-image id="image1" disable-edit="true" value="image1" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/Shadow.png" bg-color="transparent" width="186px" height="20px" x="77px" y="305px" alt-text="{shadowImage}">
				</lido-image>
		</lido-pos>
	</lido-container>

	</main>`
}
