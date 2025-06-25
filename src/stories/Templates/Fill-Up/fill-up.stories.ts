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
	<lido-container id="lido-container" tabIndex="1"  value="mainContainer1" bgImage="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/fill-in-the-blanks/Sky.png" objective="${args.answer1},${args.answer2},${args.answer3},${args.answer4}"   height="100%" width="100%"  bgColor="#74AADD" visible="true"   onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="this.justifyContent='space-around';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" showCheck="false" isContinueOnCorrect="true" afterDrop="false">
	<!-- Chimple Avatar -->
		<lido-pos id="pos1" disableEdit="true" value="pos2" height="305px" width="227px" x="landscape.1274px, portrait.541px" y="landscape.591px, portrait.1274px" ariaHidden="true" z="1" bgColor="transparent" visible="true"  onEntry="this.animation='rightToPlace 2.5s linear';">
			<lido-avatar id="lido-avatar" disableEdit="true" visible="true"  height="462px"  width="356px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" altText="{chimpleCharacterRive}">
			</lido-avatar>
		</lido-pos>
	<!--Parent cell  -->
		<lido-cell layout="col" visible="true" width="100%" height="100%" bgColor="transparent" >
		<!-- heading -->
			<lido-cell visible="true"  margin="landscape.12px 0px -17px 0px, portrait.-24px 0px 37px 0px">
				<lido-text id="heading"  tabIndex="2"  visible="true" string="Fill  in  the  blanks" font="'Baloo Bhai 2'" fontColor="black" font-size="landscape.36px, portrait.40px" bgColor="transparent" onEntry="  this.fontWeight='700';"    >
				</lido-text>
			</lido-cell>	
		<!-- fill up based on image -->
			<lido-cell layout="landscape.row, portrait.col"  visible="true"  width="landscape.1222px, portrait.680px"  height="landscape.496px, portrait.1118px"   bgColor="white"  onEntry="this.borderRadius='10px'; this.padding='8px';"  margin="landscape.0 , portrait. -135px 0px -203px 0px">
				<!-- image -->
				<lido-image id="image1" disableEdit="true" visible="true"  src="${args.img}" width="landscape.496px, portrait.680px" height="landscape.496px, portrait.680px" margin="landscape.0px 21px 0px 0px , portrait. 0"  >
				</lido-image>
				<!-- text -->
				<lido-cell layout="flex" visible="true" height="landscape.100%,portrait.50%" width="landscape.50%, portrait.90%" onEntry="this.align-content='center'; this.gap='32px';" margin="landscape.0px 40px 0px 0px, portrait.0">
					<lido-text  font="'Baloo Bhai 2'" visible="true"  font-size="40px" string="${args.text1}"  bgColor="transparent" onEntry=" this.fontWeight='400'; "></lido-text>
        			<lido-image id="drop1" isSlice="true" disableEdit="true" tabIndex="3" visible="true" width="164px"  height="60px" value="${args.answer1}"  type="drop" isAllowOnlyOneDrop="true"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/dropCard.png"></lido-image>
        			<lido-text font="'Baloo Bhai 2'" visible="true" font-size="40px" string="  ${args.text2}" bgColor="transparent" onEntry="this.display='inline';this.boxShadow='0 0 0';"></lido-text>
					<lido-text font="'Baloo Bhai 2'" visible="true" font-size="40px"  string="  ${args.text3}  " bgColor="transparent" onEntry=" this.fontWeight='400';"></lido-text>
					<lido-image id="drop2" isSlice="true" disableEdit="true" tabIndex="4" visible="true" width="164px"  height="60px" value="${args.answer2}"  type="drop" isAllowOnlyOneDrop="true"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/dropCard.png"></lido-image>
					<lido-text  font="'Baloo Bhai 2'" visible="true"  font-size="40px" string="${args.text4} "  bgColor="transparent" onEntry=" this.fontWeight='400'; "></lido-text>
					<lido-text  font="'Baloo Bhai 2'" visible="true"  font-size="40px" string="${args.text5}"  bgColor="transparent" onEntry=" this.fontWeight='400'; "></lido-text>
    				<lido-image id="drop3" isSlice="true" disableEdit="true" tabIndex="5" visible="true" width="164px" height="60px" value="${args.answer3}"  type="drop" isAllowOnlyOneDrop="true"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/dropCard.png"></lido-image>
    				<lido-text  font="'Baloo Bhai 2'" visible="true"  font-size="40px" string="${args.text6}  "  bgColor="transparent" onEntry=" this.fontWeight='400'; "></lido-text>
        			<lido-text  font="'Baloo Bhai 2'" visible="true"  font-size="40px" string="${args.text7} "  bgColor="transparent" onEntry=" this.fontWeight='400'; "></lido-text>
					<lido-image id="drop4" isSlice="true" disableEdit="true" tabIndex="6" visible="true" width="164px" height="60px" value="${args.answer4}"  type="drop" isAllowOnlyOneDrop="true"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/dropCard.png"></lido-image>
        			<lido-text  font="'Baloo Bhai 2'" visible="true"  font-size="40px" string="${args.text8}"  bgColor="transparent" onEntry=" this.fontWeight='400'; "></lido-text>
				</lido-cell>		
			</lido-cell>
			<lido-cell layout="landscape.row, portrait.wrap" childElementsLength="4"    onEntry="this.gap='28px';    this.gridTemplateColumns = 'repeat(2, 1fr)';  this.gridTemplateRows = 'repeat(2, 1fr)';" visible="true"  margin="landscape.0px 386px 91px 0px, portrait.130px 304px 0px 0px">
				<lido-text font="'Baloo Bhai 2'" id="option1"   value="${args.option1}" tabIndex="7"  visible="true"  bgColor="#fcf3b1"  onEntry="  this.borderRadius='24px'; this.boxShadow='0 5px 3px'; this.fontWeight='400';" width="landscape.174px, portrait.164px" height="landscape.92px, portrait.102px"  string="${args.option1}" fontColor="black" font-size="40px"  dropAttr="stretch" type="drag">
				</lido-text>
				<lido-text font="'Baloo Bhai 2'" id="option2"   value="${args.option2}" tabIndex="8"  visible="true"  bgColor="#fcf3b1"  onEntry="  this.borderRadius='24px'; this.boxShadow='0 5px 3px'; this.fontWeight='400';" width="landscape.174px, portrait.164px" height="landscape.92px, portrait.102px"  string="${args.option2}" fontColor="black" font-size="40px"  dropAttr="stretch" type="drag">
				</lido-text>
				<lido-text font="'Baloo Bhai 2'" id="option3"   value="${args.option3}" tabIndex="9"  visible="true"  bgColor="#fcf3b1"  onEntry="  this.borderRadius='24px'; this.boxShadow='0 5px 3px'; this.fontWeight='400';" width="landscape.174px, portrait.164px" height="landscape.92px, portrait.102px"  string="${args.option3}" fontColor="black" font-size="40px"  dropAttr="stretch" type="drag">
				</lido-text>
				<lido-text font="'Baloo Bhai 2'" id="option4"   value="${args.option4}" tabIndex="10"  visible="true"  bgColor="#fcf3b1"  onEntry="  this.borderRadius='24px'; this.boxShadow='0 5px 3px'; this.fontWeight='400';" width="landscape.174px, portrait.164px" height="landscape.92px, portrait.102px"  string="${args.option4}" fontColor="black" font-size="40px"  dropAttr="stretch" type="drag">
				</lido-text>
			</lido-cell>
		</lido-cell>
	</lido-container>
    </main>

    `
}