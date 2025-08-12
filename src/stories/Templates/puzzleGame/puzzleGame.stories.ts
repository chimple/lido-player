import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';



const meta: Meta = {
  title: 'Templates/PuzzleGame',
  argTypes: {
    dropimg: { control: 'file' },
    dragimg1: { control: 'file' },
    dragimg2: { control: 'file' },
  },
 
};

export default meta;

export const PuzzleGame: StoryObj = {
   args: {
    dropimg:['https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/puzzles-asset/gaezzle_bg.jpg'],
    dragimg1:['https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/puzzles-asset/gaezzle1.png'],
    dragimg2:['https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/puzzles-asset/gaezzle2.png'],
  },
  render: (args) => {
    const xml = getContainerXml(args);
    return html`<lido-home xml-data="${xml}" xmlData="${xml}"></lido-home>`;
  },
};

function getContainerXml(args) {

  return `<main>
 <lido-container  id="lido-container" show-drop-border="false" tab-index="1" is-continue-on-correct="true" objective="i1,i2" bgImage="" bgColor="grey" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" showCheck="false" visible="true">
    	<lido-image  id="img1" disableEdit="true"  visible="true" width="landscape.68%,portrait.134%" margin="landscape.-5px 0px 188px,portrait.-5px 0px 188px -133px" height="landscape.59%,portrait.53%" src="${args.dropimg}" z="0"  onEntry="this.backgroundImage='none';" > 
			 <!-- drop elements -->
			  <lido-text id="t1" tab-index="2" type="drop" tabIndex="2" value="i1" border-image="transparent"  bgColor="transparent" z="5" height="132px" width="132px" is-allow-only-one-drop="true" x="landscape.583px,portrait.643px" y="-97px"  onEntry=" this.position='relative';"></lido-text>
			<lido-text id="t2" tab-index="3" type="drop" bgColor="transparent" value="i2" border-image="none" tabIndex="3" z="10" height="132px" width="132px"  is-allow-only-one-drop="true" x="landscape.449px,portrait.498px" y="119px"   onEntry=" this.border='none';this.position='relative';"></lido-text>
		</lido-image>  
		
		<!-- draggabel images -->
		 <lido-cell layout="row" width="80%" height="34%" bgColor="transparent" visible="true" margin="-158px 0px -31px 0px" > 
			<lido-image id="img2" tab-index="4" width="374px" height="279px" disableEdit="true" value="i1"  bgColor="transparent" visible="true"  type="drag"  margin="0px 0px 0px 0px"  src="${args.dragimg1}" z="1"  onEntry="this.boxShadow='unset';" >
			</lido-image>
			
			<lido-image id="img3" tab-index="5" disableEdit="true" value="i2" bgColor="transparent" visible="true" width="landscape.304px,portrait.310px" height="310px" type="drag"  margin="0px 0px 0px 0px"  src="${args.dragimg2}" z="1" onEntry="this.boxShadow='unset';" >
			</lido-image>
		</lido-cell>
	</lido-container>
</main>`;
}