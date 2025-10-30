import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Templates/matchBox2',
  argTypes:{
   dragimg1:{control:'file'},
   dragimg2:{control:'file'},
   dragimg3:{control:'file'},
   dragimg4:{control:'file'},
  },
};
export default meta;
export const Blanks: StoryObj = {
  args: {
    drag1:'lion',
    dragimg1:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/picturemeaning/lion.jpg",
    drag2:'zebra',
    dragimg2:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/picturemeaning/zebra.jpg",
    drag3:'tiger',
    dragimg3:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/picturemeaning/tiger.jpg",
    drag4:'hygine',
    dragimg4:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/picturemeaning/hygiene%201.png",
    drop1:'hygine',
    dropimg1:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/picturemeaning/hygiene%201.png",
    drop2:'lion',
    dropimg2:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/picturemeaning/lion.jpg",
    drop3:'tiger',
    dropimg3:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/picturemeaning/tiger.jpg",
    drop4:'zebra',
    dropimg4:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/picturemeaning/zebra.jpg",
 },

  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};
function getContainerXml(args) {
  return `
  <main>

	<lido-container visible="true" dropAttr="EnableAnimation" is-allow-only-correct="true" objective="${args.drop1},${args.drop2},${args.drop3},${args.drop4}" id="ldo-container" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2000';" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/Sky.png" is-continue-on-correct="true">
		<lido-cell visible="true"  onEntry="this.position='relative';" y="landscape.57%,portrait.77%">	
				<lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="360px" width="485px"  y="landscape.200px,portrait.0px" onEntry="this.position='relative';" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
				</lido-avatar>
			</lido-cell>
		<lido-cell layout="row" visible="true" margin="landscape.-336px 0px -49px,portrait.-103px 0px 333px 0px" bg-color="transparent" height="90%" width="landscape.84%,portrait.100%">
			<lido-image layout="col" is-slice="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/matchBox/linematching_building1.png" visible="true" height="100%" width="landscape.30%,portrait.40%"  onEntry="this.display='grid';  this.align-items='center';this.justify-content='center';this.gap='26px';">
				<lido-cell layout="col" visible="true" margin="0px 18px 0px -18px" bg-color="transparent" height="89%" width="100%" onEntry="this.display='flex'; align-items='center'; justify-content='space-around';">
				<lido-image z="10" visible="true" is-slice="true" src="https://wallpapers.com/images/featured/blank-white-7sn5o1woonmklx1h.jpg" tab-index="1" type="drag" id="drag1" value="${args.drag1}" height="auto" width="auto" onEntry="this.display='flex'; this.align-items='center'; this.justify-content='center';" bg-color="white">
					<lido-image visible="true" height="150px" width="150px" src="${args.dragimg1}"></lido-image>
				</lido-image>
			
				
			
				<lido-image z="10" visible="true" is-slice="true" src="https://wallpapers.com/images/featured/blank-white-7sn5o1woonmklx1h.jpg" tab-index="3" type="drag" id="drag3" value="${args.drag2}" height="auto" width="auto" onEntry="this.display='flex'; this.align-items='center'; this.justify-content='center';" bg-color="white">
					<lido-image visible="true" height="150px" width="150px" src="${args.dragimg2}"></lido-image>
				
				</lido-image>
				<lido-image z="10" visible="true" is-slice="true" src="https://wallpapers.com/images/featured/blank-white-7sn5o1woonmklx1h.jpg" tab-index="2" type="drag" id="drag2" value="${args.drag3}" height="auto" width="auto" onEntry="this.display='flex'; this.align-items='center'; this.justify-content='center';" bg-color="white">
					<lido-image visible="true" height="150px" width="150px" src="${args.dragimg3}"></lido-image>
				</lido-image>
				<lido-image z="10" visible="true" is-slice="true" src="https://wallpapers.com/images/featured/blank-white-7sn5o1woonmklx1h.jpg" tab-index="4" type="drag" id="drag4" value="${args.drag4}" height="auto" width="auto" onEntry="this.display='flex'; this.align-items='center'; this.justify-content='center';" bg-color="white">
					<lido-image visible="true" height="150px" width="150px" src="${args.dragimg4}"></lido-image>
				</lido-image>
		
				</lido-cell>
			</lido-image>
			
			<lido-image layout="col" is-slice="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/matchBox/linematching_building2.png" visible="true" height="100%" width="landscape.30%,portrait.40%"  onEntry="this.display='grid';  this.align-items='center';this.justify-content='center';this.gap='26px';">
				<lido-cell layout="col" visible="true" margin="0px 18px 0px -18px" bg-color="transparent" height="89%" width="100%" onEntry="this.display='flex'; align-items='center'; justify-content='space-around';">
				<lido-image z="10" visible="true" is-slice="true" src="https://wallpapers.com/images/featured/blank-white-7sn5o1woonmklx1h.jpg" tab-index="11" type="drop" id="drop1" value="hygine" height="auto" width="auto" onEntry="this.display='flex'; this.align-items='center'; this.justify-content='center';" bg-color="white">
					<lido-image visible="true" height="150px" width="150px" src="${args.dropimg1}"></lido-image>
				</lido-image>
			
				<lido-image z="10" visible="true" is-slice="true" src="https://wallpapers.com/images/featured/blank-white-7sn5o1woonmklx1h.jpg" tab-index="12" type="drop" id="drop2" value="lion" height="auto" width="auto" onEntry="this.display='flex'; this.align-items='center'; this.justify-content='center';" bg-color="white">
					<lido-image visible="true" height="150px" width="150px" src="${args.dropimg2}"></lido-image>
				</lido-image>
			
				
				<lido-image z="10" visible="true" is-slice="true" src="https://wallpapers.com/images/featured/blank-white-7sn5o1woonmklx1h.jpg" tab-index="14" type="drop" id="drop4" value="tiger" height="auto" width="auto" onEntry="this.display='flex'; this.align-items='center'; this.justify-content='center';" bg-color="white">
					<lido-image visible="true" height="150px" width="150px" src="${args.dropimg3}"></lido-image>
				</lido-image>
			
				<lido-image z="10" visible="true" is-slice="true" src="https://wallpapers.com/images/featured/blank-white-7sn5o1woonmklx1h.jpg" tab-index="15" type="drop" id="drop5" value="zebra" height="auto" width="auto" onEntry="this.display='flex'; this.align-items='center'; this.justify-content='center';" bg-color="white">
					<lido-image visible="true" height="150px" width="150px" src="${args.dropimg4}"></lido-image>
				</lido-image>
				</lido-cell>
			</lido-image>
		</lido-cell>
    </lido-container>
    </main>
   `;
}
