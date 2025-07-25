import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
const meta: Meta = {
  title: 'Templates/Phonic-tractor',
  argTypes: {
    text1: { control: 'text' },
    option1: { control: 'text' },
    option2: { control: 'text' },
    option3: { control: 'text' },
    answer1: { control: 'text' },
    answer2: { control: 'text' },
    answer3: { control: 'text' },
  },
};

export default meta;
export const PhonicTractor: StoryObj = {
  args: {
    text1: 'fox',
    option1: 'f',
    option2: 'o',
    option3: 'x',
    answer1: 'f',
    answer2: 'o',
    answer3: 'x',
  },

  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};
function getContainerXml(args) {
  return `
    <main>
	<lido-container id="lido-container" appendToDropOnCompletion="true" value="mainContainer1" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/phonic-tractor/bg-image.png"  bg-color="transparent" objective="${args.answer1},${args.answer2},${args.answer3}" height="100%" width="100%" visible="true" show-check="false" is-continue-on-correct="true" after-drop="false" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='1000';  b1.animation='placeToLeft 2s linear' ;  this.sleep='2000';" onEntry="this.justifyContent='space-around'; "  onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';"   > 
	    <!-- Chimple Avatar -->
		<lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="305px" width="227px" x="landscape.1274px, portrait.576px" y="landscape.591px, portrait.236px" aria-hidden="true" z="1" bg-color="transparent" visible="true"  onEntry="this.animation='rightToPlace 2.5s linear';">
			<lido-avatar id="lido-avatar" disable-edit="true" visible="true"  height="462px"  width="356px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
			</lido-avatar>
			<lido-image id="image" disable-edit="true" value="image" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/Shadow.png" bg-color="transparent" width="186px" height="20px" x="landscape.7px, portrait.77px" y="landscape.305px, portrait.365px" alt-text="{shadowImage}">
			</lido-image>
		</lido-cell>
		<!-- parent cell -->
		<lido-cell layout="col" visible="true" width="100%" height="100%"  bg-color="transparent" margin="landscape.-38px 0px -122px 0px, portrait.0px 0px 0px 0px">
			<!-- question -->
			<lido-image visible="true" id="img1" height="140px" width="361px"  disable-edit="true" is-slice="true" bg-color="transparent" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/phonic-tractor/board.png" margin="landscape.42px 0px -126px 0px, portrait.-58px 0px 60px 0px" >
				<lido-text id="heading"  tab-index="1" height="100px"  visible="true" string="${args.text1}" font-family="'Baloo Bhai 2'" font-color="white" font-size="landscape.96px, portrait.96px" bg-color="transparent" onEntry="  this.fontWeight='600';"   margin="landscape.0px 0px 0px 0px, portrait.0px 0px 0px 0px" >
				</lido-text>
			</lido-image>
			<!-- tractor -->
			<lido-cell layout="row" id="b1" visible="true" width="landscape.80%, portrait.849px" height="landscape.303px, portrait.30%" bg-color="transparent" onEntry=" alignItems='center';this.animation='rightToPlace 3s linear';" margin="landscape.200px 0px 60px 0px, portrait.192px -366px -318px -366px" >
				<!-- tractor head -->
				<lido-image id="img2" visible="true"  disable-edit="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/phonic-tractor/phonictractor_tractor_head.png" height="landscape.154px, portrait.154px" width="197px"  onEntry=""  margin="landscape.92px -17px 0px 73px, portrait.40px -157px 0px -62px">
				</lido-image>
				<!-- drop and 1st trolley -->
				<lido-cell height="237px" width="200px" visible="true" bg-color="transparent" layout="col" margin="landscape.68px 97px 0px -41px, portrait.0px -142px 0px 151px">
					<lido-text id="t1" type="drop" tab-index="2" bg-color="transparent" height="132px" width="132px" value="${args.answer1}" is-allow-only-one-drop="true" margin="-25px 0px 16px 0px" onEntry=" this.borderRadius='6px';"></lido-text>
					<lido-image id="img4" visible="true"  disable-edit="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/phonic-tractor/phonictractor_tractor_holder.png" height="97px" width="220px"  margin="landscape.0px 0px 0px 0px, portrait.0px 0px 0px 0px" >
					</lido-image>
					
				</lido-cell>
				
				<!-- 2nd trolley  -->
				
				<!-- drop and trolley -->
					<lido-cell height="237px" width="200px" visible="true" bg-color="transparent" layout="col" margin="landscape.68px 171px 0px -171px, portrait.0px 0px 0px 0px">
						<lido-text id="t2" type="drop" bg-color="transparent" tab-index="3" height="132px" width="132px" value="${args.answer2}" is-allow-only-one-drop="true"  margin="landscape.-25px 0px 16px 0px, portrait.-25px 0px 16px 180px"  onEntry=" this.borderRadius='6px';"></lido-text>
						<lido-image id="img6" visible="true"  disable-edit="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/phonic-tractor/phonictractor_tractor_holder.png" height="97px" width="220px"  margin="landscape.0px 0px 0px 0px, portrait.0px -89px 0px 0px" >
						</lido-image>
					</lido-cell>
				
				<!-- 3rd trolley -->
				<!-- drop and trolley -->
					<lido-cell height="237px" width="200px" visible="true" bg-color="transparent" layout="col" margin="landscape.68px 254px 0px -245px, portrait.0px -41px 0px 36px">
						<lido-text id="t3" type="drop" bg-color="transparent" tab-index="4" height="132px" width="132px" value="${args.answer3}" is-allow-only-one-drop="true"  margin="-25px 0px 16px 0px"  onEntry=" this.borderRadius='6px';"></lido-text>
						<lido-image id="img8" visible="true"  disable-edit="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/phonic-tractor/phonictractor_tractor_holder.png" height="97px" width="220px"  margin="landscape.0px 0px 0px 0px, portrait.0px 0px 0px 0px" >
						</lido-image>
					</lido-cell>
				
			</lido-cell>
			<!-- options -->
			<lido-cell layout="wrap" width="80%" height="150px" visible="true" bg-color="transparent" margin="landscape.-143px -701px 251px 0px, portrait.36px -102px -25px 0px">
				<lido-text id="option1" tab-index="5" width="132px"  height="132px" value="${args.option1}"  visible="true" string="${args.option1}" font-family="'Baloo Bhai 2'" font-color="white" type="drag" font-size="landscape.96px, portrait.96px" bg-color="transparent" onEntry="  this.fontWeight='600';this.borderRadius='10px';"  margin="landscape.150px 0px 112px 0px, portrait.0px 0px 0px 0px"  border-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/phonic-tractor/box.png" onTouch=""  >
				</lido-text>
				<lido-text id="option2" tab-index="6" height="132px" width="132px" visible="true" value="${args.option2}" string="${args.option2}" font-family="'Baloo Bhai 2'" font-color="white" type="drag" font-size="landscape.96px, portrait.96px" bg-color="transparent" onEntry="  this.fontWeight='600';this.borderRadius='10px';"   margin="landscape.150px 0px 112px 0px, portrait.0px 0px 0px 0px" border-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/phonic-tractor/box.png" onTouch="" >
				</lido-text>
				<lido-text id="option3" tab-index="7" height="132px" width="132px" visible="true" value="${args.option3}" string="${args.option3}" font-family="'Baloo Bhai 2'" font-color="white" type="drag" font-size="landscape.96px, portrait.96px" bg-color="transparent" onEntry="  this.fontWeight='600';this.borderRadius='10px';"   margin="landscape.150px 0px 112px 0px, portrait.0px 0px 0px 0px" border-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/phonic-tractor/box.png" onTouch="" >
				</lido-text>
				
			</lido-cell>	
		</lido-cell>		
	</lido-container>
    </main>
    
    `;
}
