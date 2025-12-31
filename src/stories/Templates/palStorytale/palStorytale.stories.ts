import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Templates/palStorytale',
};
export default meta;

export const AmazingStories: StoryObj = {
  args: {
    content:
      'One hot day, a crow was very thirsty.It flew here and there looking for water. At last, it found a pitcher with a little water at the bottom. The crow tried to drink but could not reach the water. Then the crow had an idea. It dropped small stones into the pitcher. Slowly, the water rose up. The crow drank the water and flew away happily.',
     },

  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

function getContainerXml(args) {
  return `<main>
    <lido-container show-prev-button="false" show-next-button="true" id="lido-container" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/palStory/bgImage.png" height="1600px" width="900px" value="mainContainer4" objective="" aria-label="" x="0" y="0" z="0" visible="true" audio="" onTouch="" onCorrect="" onEntry="" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="true">
		<lido-cell layout="row" id="cell1" visible="true" margin="82px 203px 0px 0px"  value="cell1" width="landscape.100%,portrait.86%" height="landscape.82%,portrait.80%" x="50px" y="50px" bg-color="transparent"  onEntry="" >
				
			<lido-text id="text1" tab-index="1"   value="text1" visible="true" width="landscape.100%,portrait.90%" height="100%" bg-color="#FFF5BB" font-family="Baloo Bhai 2" font-size="60px" font-color="#000" string='${args.content}' onEntry="this.border='2px solid #FFB612'; this.fontWeight='600';this.padding='0px 40px 0px 40px'; this.boxShadow='unset'; this.border-radius='16px'; this.textAlign='start'; this.speak='true';">
			</lido-text>
		</lido-cell>
			
		<!-- below is the code for avatar -->

		<lido-pos id="pos1" disable-edit="true" value="pos1" height="350px" width="350px" x="landscape.91%, portrait.580px" y="landscape.56%, portrait.1350px" aria-hidden="true" z="1" bg-color="transparent" type="" visible="true" audio="col1.mp3" onTouch="" onCorrect="">
			<lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="350px" width="350px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
			</lido-avatar>
				<lido-image id="image1" disable-edit="true" value="image1" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/Shadow.png" bg-color="transparent" width="186px" height="20px" x="77px" y="305px" alt-text="{shadowImage}">
				</lido-image>
		</lido-pos>
	</lido-container>

	</main>`
}
