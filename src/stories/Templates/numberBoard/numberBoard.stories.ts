import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Templates/numberBoard',
  argTypes: {

  },
};

export default meta;

export const numberBoard: StoryObj = {
	args:{
    number1: '1',number2: '2',number3: '3',number4: '4',number5: '5',number6: '6',number7: '7',number8: '8',number9: '9',number10: '10',number11 :'11',number12: '12',number13: '13',number14: '14',number15: '15',
	number16: '16',number17: '17',number18: '18',number19: '19',number20: '20',
    answer1: '1',answer2: '2',answer3: '3',
	answer4: '4',answer5: '5',answer6: '6',answer7: '7',answer8: '8',answer9: '9',answer10: '10',answer11 :'11',answer12: '12',answer13: '13',answer14: '14',answer15: '15',answer16: '16',answer17: '17',answer18: '18',answer19: '19',answer20: '20',
    audio: 'Drag the number from the right and complete the number puzzle.',
	},
  render: args => {
	 const xml = getContainerXml(args);
	 return html`<lido-home .xmlData="${xml}"></lido-home>`;
   },
};



function getContainerXml(args) {
  return `<main>
 <lido-container id="lido-container" show-drop-border="false" is-allow-only-correct="true" drop-action="move" tab-index="1" value="mainContainer1"  bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/bg.png" objective="1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20" height="100%" width="100%" bg-color="transparent" visible="true" onCorrect="this.sleep='1000';lido-avatar.avatarAnimate='Success';xx.animation='placeToLeft 2s linear';tyre.animation='placeToLeft 2s linear';this.sleep='2000'; " onEntry="this.justifyContent='space-around'; this.animation='rightToPlace 2.5 linear'; audio.speak='true';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="true" after-drop="false">

	<!-- Audio -->
	<lido-text visible="false" id="audio" onEntry="this.display='none';" string="${args.audio}"></lido-text>
		<!-- Chimple Avatar -->
		<lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.417px,portrait.363px" width="landscape.280px,portrait.340px" x="landscape.1370px, portrait.597px" y="landscape.637px, portrait.1370px" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="this.animation='rightToPlace 2.5s linear';">
			
			<lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
			</lido-avatar>
			
		</lido-cell>
		<lido-image visible="true" id="tyre"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/wheel.png" height="119px" width="131px" onEntry=" this.position='relative'; this.animation='rightToPlace 2.5s linear';" x="landscape.310px, portrait.293px" y="landscape.768px, portrait.1092px" margin="">
			</lido-image>
		
		<lido-cell visible="true" id="xx"  layout="landscape.row,portrait.col" height="90%" width="90%" bg-Color="transparent" margin="landscape.56px 0px 0px 0px,portrait.0px" onEntry="">
			<lido-cell visible="true" id="truck" layout="row" height="90%" width="1377px" bg-Color="transparent" margin="landscape.-169px 114px 39px -245px,portrait.-115px 0px 0px 0px" onEntry="this.animation='rightToPlace 2.5s linear';">
			<lido-image visible="true"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/truck.png" height="583px" width="502px" onEntry=" " margin="landscape.345px -40px 0px 55px,portrait.408px 67px -179px -107px">
			</lido-image>

			<!--drop elements-->
			<lido-cell visible="true" height="landscape.100%,portrait.858px" width="landscape.964px,portrait.62%" bg-color="#F78315" margin="landscape.0px 0px 0px -18px,portrait.-124px 252px -238px -114px" onEntry=" this.place-items='center'; this.padding='0px 7px'; this.gridTemplateColumns='repeat(auto-fill, minmax(143px, auto))';   this.gridTemplateRows='repeat(auto-fit, 146px)';  this.flexWrap='wrap';" gap="21px">
				<lido-cell layout="row" visible="true"    height="120px" width="120px" bg-Color="transparent"     onEntry="this.position='relative';this.align-items='center';this.justify-content='center';this.borderRadius='10px';">
					<lido-text visible="true" type="drop"  id="drop1" tab-index="2" height="100%" width="100%" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" is-allow-only-one-drop="true" value="${args.answer1}" string="${args.answer1}" onEntry="this.color='#AB7552'; this.fontWeight='800';this.borderRadius='10px';  this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';" margin-right="10px">
					</lido-text>
				</lido-cell>
				<lido-cell layout="row" visible="true" height="120px" width="120px" bg-Color="transparent"     onEntry="this.position='relative';this.align-items='center';this.justify-content='center';this.borderRadius='10px';">
					<lido-text visible="true" type="drop" id="drop2" tab-index="3" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${args.answer2}" string="${args.answer2}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552'; this.fontWeight='800';this.borderRadius='10px';this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
					</lido-text>
				</lido-cell>
				<lido-cell layout="row" visible="true" height="120px" width="120px" bg-Color="transparent"     onEntry="this.position='relative';this.align-items='center';this.justify-content='center';this.borderRadius='10px';">
					<lido-text visible="true" type="drop" id="drop3" tab-index="4" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.answer3}" string="${args.answer3}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px'; this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
					</lido-text>
				</lido-cell>
				<lido-cell layout="row" visible="true" height="120px" width="120px" bg-Color="transparent"     onEntry="this.position='relative';this.align-items='center';this.justify-content='center';this.borderRadius='10px';">
					<lido-text visible="true" type="drop" id="drop4" tab-index="5" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.answer4}" string="${args.answer4}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px'; this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
					</lido-text>
				</lido-cell>
				<lido-cell layout="row" visible="true" height="120px" width="120px" bg-Color="transparent"     onEntry="this.position='relative';this.align-items='center';this.justify-content='center';this.borderRadius='10px';">
					<lido-text visible="true" type="drop" id="drop5" tab-index="6" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${args.answer5}" string="${args.answer5}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px'; this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
					</lido-text>
				</lido-cell>	
				<lido-cell layout="row" visible="true" height="120px" width="120px" bg-Color="transparent"     onEntry="this.position='relative';this.align-items='center';this.justify-content='center';this.borderRadius='10px';">
					<lido-text visible="true" type="drop" id="drop6" tab-index="7" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${args.answer6}" string="${args.answer6}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px'; this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
					</lido-text>
				</lido-cell>	
				<lido-cell layout="row" visible="true"    height="120px" width="120px" bg-Color="transparent"     onEntry="this.position='relative';this.align-items='center';this.justify-content='center';this.borderRadius='10px';">
					<lido-text visible="true" type="drop" id="drop7" tab-index="8" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${args.answer7}" string="${args.answer7}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px'; this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
					</lido-text>
				</lido-cell>	
				<lido-cell layout="row" visible="true" height="120px" width="120px" bg-Color="transparent"     onEntry="this.position='relative';this.align-items='center';this.justify-content='center';this.borderRadius='10px';">
					<lido-text visible="true" type="drop" id="drop8" tab-index="9" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${args.answer8}" string="${args.answer8}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px';this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
					</lido-text>
				</lido-cell>	
				<lido-cell layout="row" visible="true" height="120px" width="120px" bg-Color="transparent"     onEntry="this.position='relative';this.align-items='center';this.justify-content='center';this.borderRadius='10px';">	
					<lido-text visible="true" type="drop" id="drop9" tab-index="10" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${args.answer9}" string="${args.answer9}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px';this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
					</lido-text>
				</lido-cell>	
				<lido-cell layout="row" visible="true" height="120px" width="120px" bg-Color="transparent"     onEntry="this.position='relative';this.align-items='center';this.justify-content='center';this.borderRadius='10px';">
					<lido-text visible="true" type="drop" id="drop10" tab-index="11" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${args.answer10}" string="${args.answer10}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px';this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
					</lido-text>
				</lido-cell>
                <lido-cell layout="row" visible="true" height="120px" width="120px" bg-Color="transparent"     onEntry="this.position='relative';this.align-items='center';this.justify-content='center';this.borderRadius='10px';">
					<lido-text visible="true" type="drop" id="drop11" tab-index="12" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${args.answer11}" string="${args.answer11}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px';this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
					</lido-text>
				</lido-cell>	
				<lido-cell layout="row" visible="true" height="120px" width="120px" bg-Color="transparent"     onEntry="this.position='relative';this.align-items='center';this.justify-content='center';this.borderRadius='10px';">	
					<lido-text visible="true" type="drop" id="drop12" tab-index="13" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${args.answer12}" string="${args.answer12}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px';this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
					</lido-text>
				</lido-cell>
				<lido-cell layout="row" visible="true" height="120px" width="120px" bg-Color="transparent"     onEntry="this.position='relative';this.align-items='center';this.justify-content='center';this.borderRadius='10px';">
					<lido-text visible="true" type="drop" id="drop13" tab-index="14" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${args.answer13}" string="${args.answer13}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px';this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
					</lido-text>
				</lido-cell>	
				<lido-cell layout="row" visible="true" height="120px" width="120px" bg-Color="transparent"     onEntry="this.position='relative';this.align-items='center';this.justify-content='center';this.borderRadius='10px';">	
					<lido-text visible="true" type="drop" id="drop14" tab-index="15" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${args.answer14}" string="${args.answer14}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px';this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
					</lido-text>
				</lido-cell>
				<lido-cell layout="row" visible="true" height="120px" width="120px" bg-Color="transparent"     onEntry="this.position='relative';this.align-items='center';this.justify-content='center';this.borderRadius='10px';">	
					<lido-text visible="true" type="drop" id="drop15" tab-index="16" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${args.answer15}" string="${args.answer15}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px';this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
					</lido-text>
				</lido-cell>	
				<lido-cell layout="row" visible="true" height="120px" width="120px" bg-Color="transparent"     onEntry="this.position='relative';this.align-items='center';this.justify-content='center';this.borderRadius='10px';">	
					<lido-text visible="true" type="drop" id="drop16" tab-index="17" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${args.answer16}" string="${args.answer16}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px';this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
					</lido-text>
				</lido-cell>	
				<lido-cell layout="row" visible="true" height="120px" width="120px" bg-Color="transparent"     onEntry="this.position='relative';this.align-items='center';this.justify-content='center';this.borderRadius='10px';">	
					<lido-text visible="true" type="drop" id="drop17" tab-index="18" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${args.answer17}" string="${args.answer17}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px';this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
					</lido-text>
				</lido-cell>	
				<lido-cell layout="row" visible="true" height="120px" width="120px" bg-Color="transparent"     onEntry="this.position='relative';this.align-items='center';this.justify-content='center';this.borderRadius='10px';">
					<lido-text visible="true" type="drop" id="drop18" tab-index="19" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${args.answer18}" string="${args.answer18}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px';this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
					</lido-text>
				</lido-cell>	
				<lido-cell layout="row" visible="true" height="120px" width="120px" bg-Color="transparent"     onEntry="this.position='relative';this.align-items='center';this.justify-content='center';this.borderRadius='10px';">	
					<lido-text visible="true" type="drop" id="drop19" tab-index="20" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${args.answer19}" string="${args.answer19}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px';this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
					</lido-text>
				</lido-cell>	
                <lido-cell layout="row" visible="true" height="120px" width="120px" bg-Color="transparent"     onEntry="this.position='relative';this.align-items='center';this.justify-content='center';this.borderRadius='10px';">
					<lido-text visible="true" type="drop" id="drop20" tab-index="21" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.answer20}" string="${args.answer20}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px';this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
					</lido-text>
				</lido-cell>	
			</lido-cell>
			</lido-cell>

			<!--drag elements-->			
			<lido-cell layout="landscape.col,portrait.row" visible="true" height="landscape.71%,portrait.185px" width="landscape.12%,portrait.71%" bg-color="transparent" onEntry="  this.animation='rightToPlace 2.5s linear';" margin="landscape.-270px 102px 0px -73px,portrait.-108px 0px 151px -50px">
				<lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag1" tab-index="29" height="140px" width="160px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.number1}" string="${args.number1}" margin="landscape.0 0 105px 0,portrait.0 130px 0 0 " onEntry="this.color='#CF1565';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white" onCorrect="this.speak='true'; drop1.speak='true';">
				</lido-text>
				<lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag2" tab-index="30" height="140px" width="160px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.number2}" string="${args.number2}" margin="landscape.0 0 105px 0,portrait.0 130px 0 0" onEntry="this.color='#409F5C';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white';">
				</lido-text>
				<lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag3" tab-index="31" height="140px" width="160px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.number3}" string="${args.number3}" margin="landscape.0 0 105px 0,portrait.0 130px 0 0" onEntry="this.color='#02C1C1';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white';">
				</lido-text>
				<lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag4" tab-index="32" height="140px" width="160px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.number4}" string="${args.number4}" margin="landscape.0 0 105px 0,portrait.0 130px 0 0" onEntry="this.color='#AD3184';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white';">
				</lido-text>
				<lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag5" tab-index="33" height="140px" width="160px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.number5}" string="${args.number5}" margin="landscape.0 0 105px 0,portrait.0 130px 0 0" onEntry="this.color='#F55376';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white'; ">
				</lido-text>
				<lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag6" tab-index="34" height="140px" width="160px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.number6}" string="${args.number6}" margin="landscape.0 0 105px 0,portrait.0 130px 0 0" onEntry="this.color='#81C127';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white'; ">
				</lido-text>
				<lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag7" tab-index="35" height="140px" width="160px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.number7}" string="${args.number7}" margin="landscape.0 0 105px 0,portrait.0 130px 0 0" onEntry="this.color='#5D44BD';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white'; ">
				</lido-text>
				<lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag8" tab-index="36" height="140px" width="160px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.number8}" string="${args.number8}" margin="landscape.0 0 105px 0,portrait.0 130px 0 0" onEntry="this.color='#CF1565';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white';">
				</lido-text>
				<lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag9" tab-index="37" height="140px" width="160px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.number9}" string="${args.number9}" margin="landscape.0 0 105px 0,portrait.0 130px 0 0" onEntry="this.color='#409F5C';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white';">
				</lido-text>
				<lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag10" tab-index="38" height="140px" width="160px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.number10}" string="${args.number10}" margin="landscape.0 0 105px 0,portrait.0 130px 0 0" onEntry="this.color='#02C1C1';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0'; this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white'; ">
				</lido-text>
				<lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag11" tab-index="39" height="140px" width="160px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.number11}" string="${args.number11}" margin="landscape.0 0 127px 0,portrait.0 130px 0 0" onEntry="this.color='#AD3184';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white';">
				</lido-text>
				<lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag12" tab-index="40" height="140px" width="160px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.number12}" string="${args.number12}" margin="landscape.0 0 127px 0,portrait.0 130px 0 0" onEntry="this.color='#F55376';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white';">
				</lido-text>
				<lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag13" tab-index="41" height="140px" width="160px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.number13}" string="${args.number13}" margin="landscape.0 0 127px 0,portrait.0 130px 0 0" onEntry="this.color='#81C127';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white';">
				</lido-text>
				<lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag14" tab-index="42" height="140px" width="160px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.number14}" string="${args.number14}" margin="landscape.0 0 127px 0,portrait.0 130px 0 0" onEntry="this.color='#5D44BD';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white';">
				</lido-text>
				<lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag15" tab-index="43" height="140px" width="160px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.number15}" string="${args.number15}" margin="landscape.0 0 127px 0,portrait.0 130px 0 0" onEntry="this.color='#CF1565';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white'; ">
				</lido-text>
				<lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag16" tab-index="44" height="140px" width="160px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.number16}" string="${args.number16}" margin="landscape.0 0 127px 0,portrait.0 130px 0 0" onEntry="this.color='#409F5C';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white'; ">
				</lido-text>
				<lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag17" tab-index="45" height="140px" width="160px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.number17}" string="${args.number17}" margin="landscape.0 0 127px 0,portrait.0 130px 0 0" onEntry="this.color='#CF1565';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white'; ">
				</lido-text>
				<lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag18" tab-index="46" height="140px" width="160px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.number18}" string="${args.number18}" margin="landscape.0 0 127px 0,portrait.0 130px 0 0" onEntry="this.color='#409F5C';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white'; ">
				</lido-text>
				<lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag19" tab-index="47" height="140px" width="160px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.number19}" string="${args.number19}" margin="landscape.0 0 127px 0,portrait.0 130px 0 0" onEntry="this.color='#02C1C1';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white'; ">
				</lido-text>
				<lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag20" tab-index="48" height="140px" width="160px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${args.number20}" string="${args.number20}" margin="landscape.0 0 127px 0,portrait.0 130px 0 0" onEntry="this.color='#AD3184';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white'; ">
				</lido-text>
				
			</lido-cell>
		</lido-cell>
			
		
</lido-container>
</main>`;
}
