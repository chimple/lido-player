import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Templates/letterboard',
  argTypes: {

  },
};

export default meta;

export const letterBoard: StoryObj = {
	args:{
    letter1: 'A',letter2: 'B',letter3: 'C',letter4: 'D',letter5: 'E',letter6: 'F',letter7: 'G',letter8: 'H',letter9: 'I',letter10: 'J',letter11 :'K',letter12: 'L',letter13: 'M',letter14: 'N',letter15: 'O',
	letter16: 'P',letter17: 'Q',letter18: 'R',letter19: 'S',letter20: 'T',letter21: 'U',letter22: 'V',letter23: 'W',letter24: 'X',letter25: 'Y',letter26: 'Z',answer1: 'A',answer2: 'B',answer3: 'C',
	answer4: 'D',answer5: 'E',answer6: 'F',answer7: 'G',answer8: 'H',answer9: 'I',answer10: 'J',answer11 :'K',answer12: 'L',answer13: 'M',answer14: 'N',answer15: 'O',answer16: 'P',answer17: 'Q',answer18: 'R',answer19: 'S',answer20: 'T',answer21: 'U',answer22: 'V',answer23: 'W',answer24: 'X',answer25: 'Y',answer26: 'Z',
	},
  render: args => {
	 const xml = getContainerXml(args);
	 return html`<lido-home .xmlData="${xml}"></lido-home>`;
   },
};



function getContainerXml(args) {
  return `<main>
 <lido-container id="lido-container" is-allow-only-correct="true" drop-action="move" tab-index="1" value="mainContainer1"  bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/bg.png" objective="A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z" height="100%" width="100%" bg-color="transparent" visible="true" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2000'; " onEntry="this.justifyContent='space-around'; this.animation='rightToPlace 2.5 linear';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="true" after-drop="false">
		<!-- Chimple Avatar -->
		<lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.417px,portrait.363px" width="landscape.280px,portrait.340px" x="landscape.1360px, portrait.597px" y="landscape.637px, portrait.1370px" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="this.animation='rightToPlace 2.5s linear';">
			
			<lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
			</lido-avatar>
			
		</lido-cell>
		<lido-image visible="true"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/wheel.png" height="119px" width="131px" onEntry=" this.position='relative'; this.animation='rightToPlace 2.5s linear';" x="landscape.299px, portrait.293px" y="landscape.768px, portrait.1092px" margin="">
			</lido-image>
		
		<lido-cell visible="true"  layout="landscape.row,portrait.col" height="90%" width="90%" bg-Color="transparent" margin="landscape.56px 0px 0px 0px,portrait.0px" onEntry="">
			<lido-cell visible="true" id="truck" layout="row" height="90%" width="1377px" bg-Color="transparent" margin="landscape.-169px 114px 39px -195px,portrait.-115px 0px 0px 0px" onEntry="this.animation='rightToPlace 2.5s linear';">
			<lido-image visible="true"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/truck.png" height="583px" width="502px" onEntry=" " margin="landscape.345px -40px 0px 55px,portrait.408px 67px -179px -107px">
			</lido-image>
			<lido-cell visible="true" height="landscape.100%,portrait.858px" width="landscape.858px,portrait.62%" bg-color="#F78315" margin="landscape.0px 0px 0px -18px,portrait.-124px 252px -238px -114px" onEntry=" this.place-items='center'; this.padding='0px'; this.gridTemplateColumns='repeat(auto-fill, minmax(143px, auto))';   this.gridTemplateRows='repeat(auto-fit, 146px)';  this.flexWrap='wrap';">
				<lido-text visible="true"  type="drop" id="drop1" tab-index="2" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.answer1}" string="${args.answer1}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552'; this.fontWeight='800';this.borderRadius='10px';  this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
				</lido-text>
				<lido-text visible="true" type="drop" id="drop2" tab-index="3" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${args.answer2}" string="${args.answer2}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552'; this.fontWeight='800';this.borderRadius='10px';this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
				</lido-text>
				<lido-text visible="true" type="drop" id="drop3" tab-index="4" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.answer3}" string="${args.answer3}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px'; this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
				</lido-text>
				<lido-text visible="true" type="drop" id="drop4" tab-index="5" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.answer4}" string="${args.answer4}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px'; this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
				</lido-text>
				<lido-text visible="true" type="drop" id="drop5" tab-index="6" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${args.answer5}" string="${args.answer5}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px'; this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
				</lido-text>
				<lido-text visible="true" type="drop" id="drop6" tab-index="7" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${args.answer6}" string="${args.answer6}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px'; this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
				</lido-text>
				<lido-text visible="true" type="drop" id="drop7" tab-index="8" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${args.answer7}" strin${args.answer7}="G" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px'; this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
				</lido-text>
				<lido-text visible="true" type="drop" id="drop8" tab-index="9" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${args.answer8}" string="${args.answer8}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px';this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
				</lido-text>
				<lido-text visible="true" type="drop" id="drop9" tab-index="10" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${args.answer9}" str${args.answer9}ng="I" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px';this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
				</lido-text>
				<lido-text visible="true" type="drop" id="drop10" tab-index="11" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${args.answer10}" string="${args.answer10}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px';this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
				</lido-text>
				<lido-text visible="true" type="drop" id="drop11" tab-index="12" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${args.answer11}" string="${args.answer11}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px';this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
				</lido-text>
				<lido-text visible="true" type="drop" id="drop12" tab-index="13" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${args.answer12}" string="${args.answer12}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px';this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
				</lido-text>
				<lido-text visible="true" type="drop" id="drop13" tab-index="14" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${args.answer13}" string="${args.answer13}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px';this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
				</lido-text>
				<lido-text visible="true" type="drop" id="drop14" tab-index="15" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${args.answer14}" stri${args.answer14}g="N" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px';this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
				</lido-text>
				<lido-text visible="true" type="drop" id="drop15" tab-index="16" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${args.answer15}" string="${args.answer15}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px';this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
				</lido-text>
				<lido-text visible="true" type="drop" id="drop16" tab-index="17" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${args.answer16}" string="${args.answer16}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px';this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
				</lido-text>
				<lido-text visible="true" type="drop" id="drop17" tab-index="18" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${args.answer17}" string="${args.answer17}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px';this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
				</lido-text>
				<lido-text visible="true" type="drop" id="drop18" tab-index="19" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${args.answer18}" string="${args.answer18}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px';this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
				</lido-text>
				<lido-text visible="true" type="drop" id="drop19" tab-index="20" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${args.answer19}" string="${args.answer19}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px';this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
				</lido-text>
				<lido-text visible="true" type="drop" id="drop20" tab-index="21" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${args.answer20}" string="${args.answer20}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px';this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
				</lido-text>
				<lido-text visible="true" type="drop" id="drop21" tab-index="22" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${args.answer21}" string="${args.answer21}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px';this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
				</lido-text>
				<lido-text visible="true" type="drop" id="drop22" tab-index="23" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${args.answer22}" string="${args.answer22}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px';this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
				</lido-text>
				<lido-text visible="true" type="drop" id="drop23" tab-index="24" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${args.answer23}" string="${args.answer23}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px';this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
				</lido-text>
				<lido-text visible="true" type="drop" id="drop24" tab-index="25" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${args.answer24}" string="${args.answer24}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px'; this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
				</lido-text>
				<lido-text visible="true" type="drop" id="drop25" tab-index="26" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${args.answer25}" string="${args.answer25}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px'; this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
				</lido-text>
				<lido-text visible="true" type="drop" id="drop26" tab-index="27" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${args.answer26}" string="${args.answer26}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px'; this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
				</lido-text>
				
			</lido-cell>
			</lido-cell>
			
			<lido-cell layout="landscape.col,portrait.row" visible="true" height="landscape.71%,portrait.185px" width="landscape.12%,portrait.71%" bg-color="transparent" onEntry="  this.animation='rightToPlace 2.5s linear';" margin="landscape.-270px 102px 0px -73px,portrait.-108px 0px 151px -50px">
				<lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag1" tab-index="29" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.letter1}" string="${args.letter1}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0 " onEntry="this.color='#CF1565';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white ">
				</lido-text>
				<lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag2" tab-index="30" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.letter2}" string="${args.letter2}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#409F5C';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white';">
				</lido-text>
				<lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag3" tab-index="31" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.letter3}" string="${args.letter3}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#02C1C1';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white';">
				</lido-text>
				<lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag4" tab-index="32" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.letter4}" string="${args.letter4}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#AD3184';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white';">
				</lido-text>
				<lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag5" tab-index="33" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.letter5}" string="${args.letter5}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#F55376';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white'; ">
				</lido-text>
				<lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag6" tab-index="34" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.letter6}" string="${args.letter6}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#81C127';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white'; ">
				</lido-text>
				<lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag7" tab-index="35" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.letter7}" string="${args.letter7}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#5D44BD';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white'; ">
				</lido-text>
				<lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag8" tab-index="36" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.letter8}" string="${args.letter8}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#CF1565';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white';">
				</lido-text>
				<lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag9" tab-index="37" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.letter9}" string="${args.letter9}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#409F5C';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white';">
				</lido-text>
				<lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag10" tab-index="38" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.letter10}" string="${args.letter10}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#02C1C1';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0'; this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white'; ">
				</lido-text>
				<lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag11" tab-index="39" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.letter11}" string="${args.letter11}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#AD3184';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white';">
				</lido-text>
				<lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag12" tab-index="40" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.letter12}" string="${args.letter12}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#F55376';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white';">
				</lido-text>
				<lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag13" tab-index="41" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.letter13}" string="${args.letter13}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#81C127';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white';">
				</lido-text>
				<lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag14" tab-index="42" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.letter14}" string="${args.letter14}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#5D44BD';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white';">
				</lido-text>
				<lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag15" tab-index="43" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.letter15}" string="${args.letter15}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#CF1565';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white'; ">
				</lido-text>
				<lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag16" tab-index="44" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.letter16}" string="${args.letter16}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#409F5C';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white'; ">
				</lido-text>
				<lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag17" tab-index="45" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.letter17}" string="${args.letter17}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#CF1565';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white'; ">
				</lido-text>
				<lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag18" tab-index="46" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.letter18}" string="${args.letter18}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#409F5C';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white'; ">
				</lido-text>
				<lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag19" tab-index="47" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.letter19}" string="${args.letter19}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#02C1C1';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white'; ">
				</lido-text>
				<lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag20" tab-index="48" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.letter20}" string="${args.letter20}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#AD3184';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white'; ">
				</lido-text>
				<lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag21" tab-index="49" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.letter21}" string="${args.letter21}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#F55376';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white'; ">
				</lido-text>
				<lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag22" tab-index="50" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.letter22}" string="${args.letter22}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#81C127';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white'; ">
				</lido-text>
				<lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag23" tab-index="51" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.letter23}" string="${args.letter23}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#5D44BD';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white'; ">
				</lido-text>
				<lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag24" tab-index="52" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.letter24}" string="${args.letter24}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#CF1565';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0'; this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white';">
				</lido-text>
				<lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag25" tab-index="53" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.letter25}" string="${args.letter25}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#409F5C';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white'; ">
				</lido-text>
				<lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag26" tab-index="54" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.letter26}" string="${args.letter26}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#02C1C1';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white'; ">
				</lido-text>
				
			</lido-cell>
			</lido-cell>
			
		
</lido-container>
</main>`;
}
