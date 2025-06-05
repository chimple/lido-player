import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Templates/FillUp',
	argTypes: {
		img: { control: 'file' },
		option1: { control: "text" },
		option2: { control: "text" },
		option3: { control: "text" },
		option4: { control: "text" },
		answer1: { control: "text" },
		answer2: { control: "text" },
		answer3: { control: "text" },
		answer4: { control: "text" },
		text1:{ control: "text"},
        text2:{ control: "text"},
        text3:{ control: "text"},
        text4:{ control: "text"},
        text5:{ control: "text"},
        text6:{ control: "text"},
        text7:{ control: "text"},
        text8:{ control: "text"},
        
       
	}
};
export default meta;
export const Blanks: StoryObj = {
    args: {
       img: ["https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/fill-in-the-blanks/image%201.png"],
        option1: "quick",
        option2: "lazy",
        option3: "quick",
        option4: "lazy",
        answer1: "quick",
        answer2: "lazy",
        answer3: "quick",
        answer4: "lazy",
        text1: "The",
        text2:"brown fox",
        text3:"jumped over a",
        text4:"dog",
        text5:"The",
        text6:"brown fox",
        text7:"jumped over a",
        text8:"dog",
        
    },
    
  render: args => {
        const xml = getContainerXml(args);
        return html`<lido-home .xmlData="${xml}"></lido-home>`
    },
};
function getContainerXml(args){
	return `
<main>
    <lido-container id="lido-container" tabIndex="1" value="mainContainer1" objective="quick,lazy,quick,lazy"   height="100vh" width="100vw" x="0" y="0" z="0" bgColor="#74AADD" visible="true" audio="background1.mp3" onTouch="" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="this.backgroundColor='30px';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" showCheck="false" isContinueOnCorrect="true" afterDrop="true">
<!-- Background -->
	<lido-pos id="pos1" disableEdit="true" value="pos1"  width="landscape.100%, portrait.100%" height="landscape.1208px, portrait.100%" ariaHidden="true" x="landscape.-49px, portrait.-597px"  y="landscape.-750px, portrait.-41px"  z="0" bgColor="transparent" type="" visible="true" audio="col1.mp3" >
		<lido-image id="image2" disableEdit="true" value="image2" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/fill-in-the-blanks/Sky.png"  width="landscape.106%, portrait.2097px" height="landscape.1676px, portrait.1669px"  altText="{backgroundImage}">
		</lido-image>
	</lido-pos>

<!-- Chimple Avatar -->
	<lido-pos id="pos2" disableEdit="true" value="pos2" height="305px" width="227px" x="landscape.1274px, portrait.541px" y="landscape.591px, portrait.1274px" ariaHidden="true" z="1" bgColor="transparent" visible="true" audio="col1.mp3" onTouch="" onCorrect="" onEntry="this.animation='rightToPlace 2.5s linear';">
		<lido-avatar id="lido-avatar" disableEdit="true" visible="true"  height="462px"  width="356px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" altText="{chimpleCharacterRive}">
		</lido-avatar>
	</lido-pos>

<!-- heading -->
	<lido-pos id="question" value="question" visible="true" width="landscape.100%, portrait.100%" height="landscape.10%, portrait.10%"  x="landscape.32px, portrait.0" y="landscape.35px, portrait.10px"  bgColor="transparent" onEntry="this.animation='topToPlace 0.5s linear'; this.display='flex'; this.align-item='center';">
		<lido-row width="landscape.100%, portrait.100%" height="landscape.100%, portrait.100%"  visible="true" x="landscape.0, portrait.0" y="landscape.24px, portrait.0">
		<lido-text id="textA" width="landscape.50%, portrait.62%" height="53px" tabIndex="2"  visible="true" string="Fill  in  the  blanks" font="'Baloo Bhai 2'" fontColor="black" font-size="landscape.36px, portrait.40px" bgColor="transparent" onEntry=" this.boxShadow='unset'; this.fontWeight='700';" y="70px" x="100px">
		</lido-text>
		</lido-row>
	</lido-pos>	

<!-- Drop Elements -->
	<!-- image -->

 	<lido-wrap flex="true" bgColor="white" width="landscape.1162px, portrait.680px" height="landscape.512px, portrait.69%" x="landscape.219px, portrait.116px" y="landscape.155px, portrait.150px" visible="true" onEntry="this.border-radius='10px'; this.position='absolute';this.box-shadow='0'; this.display='flex'; this.alignContent='center'; this.justifyContent='space-evenly';">
    	<lido-image id="image1" disableEdit="true" visible="true"  src="${args.img}" width="landscape.496px, portrait.657px" height="landscape.496px, portrait.680px" x="landscape.-19px, portrait.9px" y="landscape.0px, portrait.-205px"  onEntry="this.marginRight='20px';this.position='relative'">
		</lido-image>
		
    <!-- Text Content -->
    	<lido-wrap  visible="true" width="landscape.550px, portrait.540px" height="landscape.480px, portrait.6px"  flex="true" x="landscape.-24px, portrait.-18px" y="landscape.9px, portrait.-23px" onEntry="this.bgColor='white'; this.position='relative'; this.alignContent='center'; this.justifyItems='center'; this.gap='24px'">
			
        <lido-text  font="'Baloo Bhai 2'" visible="true"  font-size="40px" string="${args.text1}" y="10px" bgColor="transparent" onEntry="this.display='inline'; this.fontWeight='400';this.position='relative';this.boxShadow='0 0 0'; "></lido-text>
        		<lido-image id="drop1" isSlice="true" disableEdit="true" tabIndex="3" visible="true" width="164px" imageSlice="30 fill" height="60px" value="${args.answer1}" z="1" type="drop" isAllowOnlyOneDrop="true" onEntry="this.display='inline-block'; this.verticalAlign='middle'; this.minWidth='80px'; this.marginRight='4px';" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/dropCard.png"></lido-image>
        		<lido-text font="'Baloo Bhai 2'" visible="true" font-size="40px" string="${args.text2}" bgColor="transparent" onEntry="this.display='inline';this.boxShadow='0 0 0';"></lido-text>
				<lido-text font="'Baloo Bhai 2'" visible="true" font-size="40px"  string="${args.text3} " bgColor="transparent" onEntry="this.display='inline'; this.fontWeight='400';this.boxShadow='0 0 0';"></lido-text>
        		<lido-image id="drop2" isSlice="true" disableEdit="true" tabIndex="4" visible="true" width="164px" imageSlice="30 fill" height="60px" value="${args.answer2}" z="1" type="drop" isAllowOnlyOneDrop="true" onEntry="this.display='inline-block'; this.verticalAlign='middle'; this.minWidth='80px'; this.marginRight='4px';" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/dropCard.png"></lido-image>
        		<lido-text font="'Baloo Bhai 2'" visible="true" font-size="40px" string="${args.text4}" bgColor="transparent" onEntry="this.display='inline';this.boxShadow='0 0 0';"></lido-text>
				<lido-text font="'Baloo Bhai 2'" visible="true"  font-size="40px" string="${args.text5} " bgColor="transparent" onEntry="this.display='inline'; this.fontWeight='400'; this.boxShadow='0 0 0';"></lido-text>
        		<lido-image id="drop3" isSlice="true" disableEdit="true" tabIndex="5" visible="true" width="164px" imageSlice="30 fill" height="60px" value="${args.answer3}" z="1" type="drop" isAllowOnlyOneDrop="true" onEntry="this.display='inline-block'; this.verticalAlign='middle'; this.minWidth='80px'; this.marginRight='4px';" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/dropCard.png"></lido-image>
        		<lido-text font="'Baloo Bhai 2'" visible="true" font-size="40px" string="${args.text6}" bgColor="transparent" onEntry="this.display='inline';this.boxShadow='0 0 0';"></lido-text>
				<lido-text font="'Baloo Bhai 2'" visible="true" font-size="40px" string="${args.text7}" bgColor="transparent" onEntry="this.display='inline'; this.fontWeight='400';this.boxShadow='0 0 0'"></lido-text>
        		<lido-image id="drop4" isSlice="true" disableEdit="true" tabIndex="6" visible="true" width="164px" imageSlice="30 fill" height="60px" value="${args.answer4}" z="1" type="drop" isAllowOnlyOneDrop="true" onEntry="this.display='inline-block'; this.verticalAlign='middle'; this.minWidth='80px'; this.marginRight='4px';" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/dropCard.png"></lido-image>
        		<lido-text font="'Baloo Bhai 2'" visible="true"  font-size="40px" string="${args.text8}" bgColor="transparent" onEntry="this.display='inline';this.boxShadow='0 0 0';"></lido-text>
        
        	
			
			
    	 </lido-wrap>
	</lido-wrap>
		
<!-- Drag Elements -->		
		
	<lido-pos id="pos6" value="pos6" visible="true" width="landscape.1600px, portrait.900px" height="250px" bgColor="transparent"  y="landscape.600px, portrait.1260px" x="landscape.0px, portrait.0px" z="1" onEntry="this.animation='bottomToPlace 1s linear';">
		<lido-row id="row2" value="row2" display="landscape.flex, portrait.grid" visible="true" height="landscape.92px, portrait.236px" width="landscape.772px, portrait.359px" minLength="2" maxLength="6" childElementsLength="4"   y="landscape.58%, portrait.57%" x="landscape.38%, portrait.33%" onEntry="this.gap='30px'; this.transform='translate(-50%, -50%)'; this.gridTemplateColumns='1fr 1fr'; this.gridTemplateRows='1fr 1fr';">
			<lido-text font="'Baloo Bhai 2'" id="option1" flex="true"  value="${args.option1}" tabIndex="7"  visible="true" borderImage="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/fill-in-the-blanks/Rectangle%207.png" bgColor="transparent"  onEntry="  this.borderRadius='20px'; this.boxShadow='unset'; this.fontWeight='400';" width="landscape.174px, portrait.164px" height="landscape.92px, portrait.102px"  string="${args.option1}" fontColor="black" font-size="40px"  dropAttr="stretch" type="drag">
			</lido-text>
			<lido-text font="'Baloo Bhai 2'" id="option2" flex="true"  value="${args.option2}" tabIndex="8"  visible="true" borderImage="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/fill-in-the-blanks/Rectangle%207.png" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='400'; " width="landscape.164px, portrait.162px" height="landscape.92px, portrait.102px"  string="${args.option2}" fontColor="black"  font-size="40px"  dropAttr="stretch" type="drag">
			</lido-text>
			<lido-text font="'Baloo Bhai 2'" id="option3" flex="true"  value="${args.option3}" tabIndex="9"  visible="true" borderImage="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/fill-in-the-blanks/Rectangle%207.png" bgColor="transparent" onEntry=" this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='400';" width="landscape.174px, portrait.164px" height="landscape.92px, portrait.102px"  string="${args.option3}" fontColor="black"  font-size="40px"  dropAttr="stretch" type="drag">
			</lido-text>
			<lido-text font="'Baloo Bhai 2'" id="option4" flex="true"  value="${args.option4}" tabIndex="10"  visible="true" borderImage="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/fill-in-the-blanks/Rectangle%207.png" bgColor="transparent" onEntry=" this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='400';" width="landscape.164px, portrait.162px" height="landscape.92px, portrait.102px"    string="${args.option4}" fontColor="black" font-size="40px"  dropAttr="stretch" type="drag">
			</lido-text>
		</lido-row>
	</lido-pos>
    </lido-container>
<main>  `
}