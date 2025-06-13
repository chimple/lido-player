import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
const meta: Meta = {
  title: 'Templates/Phonic-tractor',
	argTypes: {
        text1: { control: "text" },
		option1: { control: "text" },
		option2: { control: "text" },
		option3: { control: "text" },
		answer1: { control: "text" },
		answer2: { control: "text" },
		answer3: { control: "text" },
        
       
}
};

export default meta;
export const PhonicTractor: StoryObj = {
    args: {
        text1: "fox", 
        option1: "f",
        option2: "o",
        option3: "x",
        answer1: "f",
        answer2: "o",
        answer3: "x",
        
        
    },
    
  render: args => {
        const xml = getContainerXml(args);
        return html`<lido-home .xmlData="${xml}"></lido-home>`
    },
};
function getContainerXml(args){
	return `
    <main>
	<lido-container id="lido-container" tabIndex="1" value="mainContainer1" bgImage="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/phonic-tractor/bg.png" bgColor="#fcf9d0" objective="${args.answer1},${args.answer2},${args.answer3}" height="100%" width="100%" visible="true" showCheck="false" isContinueOnCorrect="true" afterDrop="false" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='1000'; img1.speak='true'; b1.animation='placeToLeft 2s linear' ;  this.sleep='2000';" onEntry="this.justifyContent='space-around'; "  onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';"   > 
	    <!-- Chimple Avatar -->
		<lido-cell layout="pos" id="pos1" disableEdit="true" value="pos2" height="305px" width="227px" x="landscape.1274px, portrait.541px" y="landscape.591px, portrait.1274px" ariaHidden="true" z="1" bgColor="transparent" visible="true"  onEntry="this.animation='rightToPlace 2.5s linear';">
			<lido-avatar id="lido-avatar" disableEdit="true" visible="true"  height="462px"  width="356px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" altText="{chimpleCharacterRive}">
			</lido-avatar>
		</lido-cell>
		<!-- parent cell -->
		<lido-cell layout="col" visible="true" width="100%" height="100%"  bgColor="transparent" margin="landscape.-38px 0px -122px 0px, portrait.0px 0px 0px 0px">
			<!-- question -->
			<lido-image visible="true" id="img1" height="120px" width="400px"  disableEdit="true" isSlice="true" bgColor="transparent" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/phonic-tractor/board.png" margin="landscape.10px 0px -11px 0px, portrait.0px 0px 0px 0px" >
				<lido-text id="heading"  tabIndex="2" height="100px"  visible="true" string="${args.text1}" font="'Baloo Bhai 2'" fontColor="white" font-size="landscape.56px, portrait.40px" bgColor="transparent" onEntry="  this.fontWeight='700';"   margin="landscape.0px 0px 0px 0px, portrait.0px 0px 0px 0px" >
				</lido-text>
			</lido-image>
			<!-- tractor -->
			<lido-cell layout="landscape.row, portrait.col" id="b1" visible="true" width="landscape.80%, portrait.500px" height="landscape.265px, portrait.80%" bgColor="transparent" onEntry="this.alignItem='start';this.animation='rightToPlace 3s linear';" onCorrect="body.animation='placeToLeft 2s linear'; " margin="landscape.200px 0px 60px 0px, portrait.0px 0px 0px 0px" >
				<!-- tractor head -->
				<lido-image id="img2" visible="true"  disableEdit="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/phonic-tractor/phonictractor_tractor_head.png" height="270px" width="400px" onEntry=""  margin="landscape.0px -20px 0px 0px, portrait.0px 0px 0px 0px">
				</lido-image>
				<!-- connector and trolly -->
				<lido-cell visible="true" layout="row" bgColor="red"  height="0px" width="280px" onEntry="" margin="landscape.174px 128px 0px 0px, portrait.0px 0px 0px 0px">
					<lido-image id="img3" visible="true"  disableEdit="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/phonic-tractor/phonictractor_tractor_connect.png" height="30px" width="121px"  margin="landscape.-30px -8px 0px -10px, portrait.0px 0px 0px 0px">
					</lido-image>
					<!-- drop and trolley -->
					<lido-cell height="200px" width="200px" visible="true" bgColor="transparent" layout="col" margin="landscape.-79px -34px 0px -16px, portrait.0px 0px 0px 0px">
						<lido-text id="t1" type="drop" tabIndex="1" bgColor="white" height="80px" width="150px" value="${args.answer1}" isAllowOnlyOneDrop="true"></lido-text>
						<lido-image id="img4" visible="true"  disableEdit="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/phonic-tractor/phonictractor_tractor_holder.png" height="114px" width="200px"  margin="landscape.0px 0px 0px 0px, portrait.0px 0px 0px 0px" >
						</lido-image>
					
					</lido-cell>
				</lido-cell>
				<!-- 2nd trolley n connector -->
				<lido-cell visible="true" layout="row" bgColor="red"  height="0px" width="280px" onEntry="" margin="landscape.174px 119px 0px -147px, portrait.0px 0px 0px 0px">
					<lido-image id="img5" visible="true"  disableEdit="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/phonic-tractor/phonictractor_tractor_connect.png" height="30px" width="121px"  margin="landscape.-30px -50px 0px -19px, portrait.0px 0px 0px 0px">
					</lido-image>
					<!-- drop and trolley -->
					<lido-cell height="200px" width="200px" visible="true" bgColor="transparent" layout="col" margin="landscape.-80px -109px 0px -13px, portrait.0px 0px 0px 0px">
						<lido-text id="t2" type="drop" bgColor="white" tabIndex="2" height="80px" width="150px" value="${args.answer2}" isAllowOnlyOneDrop="true"></lido-text>
						<lido-image id="img6" visible="true"  disableEdit="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/phonic-tractor/phonictractor_tractor_holder.png" height="114px" width="200px"  margin="landscape.0px 0px 0px 0px, portrait.0px 0px 0px 0px" >
						</lido-image>
					</lido-cell>
				</lido-cell>
				<!-- 3rd trolley n connector -->
				<lido-cell visible="true" layout="row" bgColor="red"  height="0px" width="280px" onEntry="" margin="landscape.174px 119px 0px -140px, portrait.0px 0px 0px 0px">
					<lido-image id="img7" visible="true"  disableEdit="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/phonic-tractor/phonictractor_tractor_connect.png" height="30px" width="121px"  margin="landscape.-30px -134px 0px -17px, portrait.0px 0px 0px 0px">
					</lido-image>
					<!-- drop and trolley -->
					<lido-cell height="200px" width="200px" visible="true" bgColor="transparent" layout="col" margin="landscape.-80px -161px 0px 94px, portrait.0px 0px 0px 0px">
						<lido-text id="t3" type="drop" bgColor="white" tabIndex="3" height="80px" width="150px" value="${args.answer3}" isAllowOnlyOneDrop="true"></lido-text>
						<lido-image id="img8" visible="true"  disableEdit="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/phonic-tractor/phonictractor_tractor_holder.png" height="114px" width="200px"  margin="landscape.0px 0px 0px 0px, portrait.0px 0px 0px 0px" >
						</lido-image>
					</lido-cell>
				</lido-cell>
			</lido-cell>
			<!-- options -->
			<lido-cell layout="wrap" width="80%" height="150px" visible="true" bgColor="transparent" margin="landscape.-126px -701px 206px 0px, portrait.0px 0px 0px 0px">
				<lido-text id="option1" width="150px"  height="100px"  visible="true" value="${args.option1}"  string="${args.option1}" font="'Baloo Bhai 2'" fontColor="white" type="drag" font-size="landscape.56px, portrait.40px" bgColor="transparent" onEntry="  this.fontWeight='700';"  margin="landscape.150px 0px 112px 0px, portrait.0px 0px 0px 0px"  borderImage="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/phonic-tractor/box.png" onTouch="this.speak='true';"  >
				</lido-text>
				<lido-text id="option2"   height="100px" width="150px" visible="true" value="${args.option2}" string="${args.option2}" font="'Baloo Bhai 2'" fontColor="white" type="drag" font-size="landscape.56px, portrait.40px" bgColor="transparent" onEntry="  this.fontWeight='700';"   margin="landscape.150px 0px 112px 0px, portrait.0px 0px 0px 0px" borderImage="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/phonic-tractor/box.png" onTouch="this.speak='true';" >
				</lido-text>
				<lido-text id="option3"  height="100px" width="150px" visible="true" value="${args.option3}" string="${args.option3}" font="'Baloo Bhai 2'" fontColor="white" type="drag" font-size="landscape.56px, portrait.40px" bgColor="transparent" onEntry="  this.fontWeight='700';"   margin="landscape.150px 0px 112px 0px, portrait.0px 0px 0px 0px" borderImage="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/phonic-tractor/box.png" onTouch="this.speak='true'; this.sleep='100';" >
				</lido-text>
				
			</lido-cell>	
		</lido-cell>		
	</lido-container>
    </main>
    
    `
}