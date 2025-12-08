import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
const meta: Meta = {
  title: 'Templates/fillAnswer',
  argTypes: {
    firstNum: { control: 'text' },
    operator: { control: 'text' },
    secontNum: { control: 'text' },
    equator: { control: 'text' },
    answer: { control: 'text' },
    option1: { control: 'text' },
    option2: { control: 'text' },
    option3: { control: 'text' },
    option4: { control: 'text' },
	isAllowOnlyCorrect: { control: 'boolean' },
  },
};

export default meta;
export const OrderTractor: StoryObj = {
  args: {
    firstNum: '3', operator: '+', secontNum: '4', equator: '=', answer: '7',
    option1: '5', option2: '7', option3: '3', option4: '2', isAllowOnlyCorrect: 'true',
  },

  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};
function getContainerXml(args) {
  return `
    <main>
	<lido-container id="lido-container" is-allow-only-correct="${args.isAllowOnlyCorrect}"  value="mainContainer1" bg-image="https://drive.google.com/file/d/1DxXo6mjV4R4h4xz_Ro3mPEaL_wfoUqJm/view" objective="${args.answer}" width="100%" bg-color="transparent" visible="true" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2000';  " onEntry="this.justifyContent='space-around';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="true" after-drop="false">
		<!-- Chimple Avatar -->
		<lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.448px,portrait.402px" width="landscape.350px,portrait.398px" x="landscape.1267px, portrait.541px" y="landscape.587px, portrait.1304px" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="this.animation='rightToPlace 2.5s linear';">
			<lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
			</lido-avatar>
		</lido-cell>

		<!--Parent cell  -->
		<lido-cell layout="col" visible="true" width="100%" height="100%" bg-color="transparent">
			<!-- heading -->
			<lido-cell audio="" layout="row" visible="true" width="landscape.45%, portrait.69%" height="landscape.15%, portrait.auto" bg-color="white"  onEntry="this.borderRadius='10px'; this.padding='8px';this.animation='topToPlace 2.5s linear';" margin="landscape.110px 0px 0px 0px , portrait.400px 0px 0px 0px">
			<lido-text id="question" visible="false" string="solve the problem and select the correct answer from below" value="solve the problem and select the correct answer from below" onEntry="this.sleep='2000';this.speak='true';"></lido-text>
			
					<lido-text tab-index="1" font-family="'Baloo Bhai 2'" visible="true" font-size="88px" y="-10px" string="${args.firstNum}" bg-color="transparent" onEntry="this.position='relative'; this.fontWeight='600';this.display='inline'; this.padding='0px 20px 0px 0px'; "></lido-text>
					<lido-text tab-index="2" font-family="'Baloo Bhai 2'" visible="true" font-size="88px" y="-10px" string="${args.operator}" bg-color="transparent" onEntry="this.position='relative';this.fontWeight='600';this.display='inline';this.boxShadow='0 0 0'; this.padding='0px 21px 0px 0px';"></lido-text>
					<lido-text tab-index="3" font-family="'Baloo Bhai 2'" visible="true" font-size="88px" y="-10px" string="${args.secontNum}" bg-color="transparent" onEntry="this.position='relative';this.fontWeight='600';this.display='inline';this.boxShadow='0 0 0'; this.padding='0px 21px 0px 0px';"></lido-text>
					<lido-text tab-index="4" font-family="'Baloo Bhai 2'" visible="true" font-size="88px" y="-10px" string="${args.equator}" bg-color="transparent" onEntry="this.position='relative';this.fontWeight='600';this.display='inline';this.boxShadow='0 0 0'; this.padding='0px 21px 0px 0px';"></lido-text>
					<lido-text tab-index="5" id="drop1" disable-edit="true" visible="true" width="164px" height="landscape.73px,portrait.77px" value="${args.answer}"  type="drop" is-allow-only-one-drop="true" drop-Attr="stretch" onEntry="this.border-radius='10px';this.box-shoadow=''; this.margin-right='35px';" ></lido-text>
					
				
			</lido-cell>
			<lido-cell layout="row" childElementsLength="4" onEntry="this.gap='28px'; this.animation='rightToPlace 2.5s linear';   this.gridTemplateColumns = 'repeat(2, 1fr)';  this.gridTemplateRows = 'repeat(2, 1fr)';" visible="true" margin="landscape.6px 25px 74px 0px, portrait.-170px 128px 0px 117px">
				<lido-text  font-family="'Baloo Bhai 2'" audio="" id="option1" value="${args.option1}" tab-index="14" visible="true" bg-color="#fcf3b1" onEntry="this.padding='0px 48px'; this.borderRadius='24px';  this.fontWeight='600';" width="auto" height="landscape.87px, portrait.91px" string="${args.option1}" fontColor="black" font-size="88px"   type="drag">
				</lido-text>
				<lido-text  font-family="'Baloo Bhai 2'" audio="" id="option2" value="${args.option2}" tab-index="15" visible="true" bg-color="#fcf3b1" onEntry="this.padding='0px 48px'; this.borderRadius='24px';  this.fontWeight='600'; " width="auto" height="landscape.87px, portrait.91px" string="${args.option2}" fontColor="black" font-size="88px"  type="drag">
				</lido-text>
				<lido-text  font-family="'Baloo Bhai 2'" audio="" id="option3" value="${args.option3}" tab-index="16" visible="true" bg-color="#fcf3b1" onEntry="this.padding='0px 48px'; this.borderRadius='24px'; this.fontWeight='600'; " width="auto" height="landscape.87px, portrait.91px" string="${args.option3}" fontColor="black" font-size="88px" type="drag">
				</lido-text>
				<lido-text  font-family="'Baloo Bhai 2'" audio="" id="option4" value="${args.option4}" tab-index="17" visible="true" bg-color="#fcf3b1" onEntry="this.padding='0px 48px'; this.borderRadius='24px';  this.fontWeight='600';" width="auto" height="landscape.87px, portrait.91px" string="${args.option4}" fontColor="black" font-size="88px"   type="drag">
				</lido-text>
			</lido-cell>
			
		</lido-cell>
	</lido-container>
    </main>
  `;
}
