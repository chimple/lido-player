import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
const meta: Meta = {
    title: 'Templates/calculator',
    argTypes: {
   number1: { control: 'text' },
   number2: { control: 'text' },
   symbol: { control: 'text' },
  },
    };
export default meta;
export const calculator: StoryObj = {
  args: {
     number1: '10',
     number2: '5',
     symbol: '+',
    },
    
      render: args => {
        const xml = getContainerXml(args);
        return html`<lido-home .xmlData="${xml}"></lido-home>`;
      },
    };



function getContainerXml(args) {


  return `
   <main>
    <lido-container visible="true" id="lido-container" objective="" equationCheck="$#numb1,$#symbol,$#numb2" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/Sky.png" onInCorrect="lido-avatar.avatarAnimate='Fail';" onCorrect="lido-avatar.avatarAnimate='Success';answer.updatedAnswer='true';this.sleep='2500';" is-continue-on-correct="true" >
		<lido-text visible="true" z="1" height="100px" width="400px" y="8%" x="-21%" font-size="56px" font-color="white" onEntry="this.position='relative';this.font-weight='600';"  string="WRITE HERE"></lido-text>
		<lido-cell layout="col" visible="true" height="10px" width="254px" bg-color="transparent" z="1" y="18%" x="-12%" onEntry="this.align-items='center'; this.jsutifyContent='space-around'; this.position='relative';">
			<lido-text visible="true" height="100px" width="400px" id="numb1" tab-index="1" font-size="106px" font-color="black" value="${args.number1}" string="${args.number1}" y="" z="1" x="" onEntry="this.position='relative';this.font-weight='900';"></lido-text>
			<lido-cell layout="row" visible="true" height="100px" width="243px" bg-color="transparent" onEntry="this.position='relative';" x="-61px">
				<lido-text visible="true" height="100px" width="400px" id="symbol" tab-index="2" font-size="106px" font-color="black" value="${args.symbol}" string="${args.symbol}" y="" z="1" x=""  onEntry="this.position='relative';this.font-weight='900';"></lido-text>
				<lido-text visible="true" height="100px" width="400px"  id="numb2" tab-index="3"  font-size="106px" font-color="black" value="${args.number2}" string="${args.number2}" y="" z="1" x="" onEntry="this.position='relative';this.font-weight='900';"></lido-text>
			</lido-cell>
			<lido-text visible="true" height="40px" width="295px" font-size="106px" font-color="black" string="- - - - -"   z="1" ></lido-text>
			<lido-text  id="answer" visible="true" tab-index="4" height="84px" width="279px"  font-size="106px" font-color="black" string=" " value="5"   z="1"  onEntry="this.font-weight='900';"></lido-text>
		</lido-cell>
		<lido-canvas visible="true" width="700px" heigth="800px" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/calculator/s1.png" y="10%" x="3%"  ></lido-canvas>
		<lido-calculator visible="true" height="700px" width="470px" y="-2%" onEntry="this.position='relative';" x="456px" ></lido-calculator>
		<!-- Chimple Avatar -->
		<lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.396px,portrait.400px" width="landscape.298px,portrait.369px" x="landscape.48%, portrait.32%" y="landscape.60%, portrait.78%" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="">
				<lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
				</lido-avatar>
		</lido-cell>
	</lido-container>
   </main>
  `;
}