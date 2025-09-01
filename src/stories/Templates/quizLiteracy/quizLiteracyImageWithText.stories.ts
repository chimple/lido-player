import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Templates/quizLiteracyImageWithText',
  argTypes: {
  
  image: { control: 'file' },
  },
};
export default meta;

export const quizLiteracyImageWithText: StoryObj = {
  args: {
   option1:"A black bear A black bear1.",
   option2:"A black bear A black bear2.",
   option3:"A black bear A black bear3.",
   option4:"A black bear A black bear4.",
   answer: "A black bear A black bear1.",
   image:['https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/LetterPair/Cat.png'],
  },

  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

function getContainerXml(args) {
    let tabCounter = 1;
  return `<main>
  <lido-container id="lido-container" value="maincontainer" visible="true" objective="${args.answer}"  bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/Underwater.png"  onEntry="" is-Continue-On-Correct="true" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';">
	<lido-cell layout="pos" id="pos1" disable-edit="true" value="pos1" height="landscape.306px,portrait.401px" width="landscape.307px,portrait.401px" x="landscape.82%, portrait.24%" y="landscape.77%, portrait.83%" aria-hidden="true" z="2" bg-color="transparent" type="" visible="true" audio="" onTouch="" onCorrect="">
		<lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/chimplecharacter.riv" alt-text="{chimpleCharacterRive}" bg-color="transparent">
		</lido-avatar>
		<lido-image id="image1" disable-edit="true" value="image1" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/Shadow.png" bg-color="transparent" width="165px" height="30px" x="landscape.54px,portrait.111px" y="landscape.239px,portrait.344px" alt-text="{shadowImgae}">
		</lido-image>
	</lido-cell>
	<lido-cell layout="landscape.row,portrait.col" visible="true" bg-Color="transparent" width="landscape.100%,portrait.90%" height="68%" margin="landscape.0px,portrait.-107px 0px 0px 0px">
		
			<lido-cell visible="true" height="landscape.98%,portrait.62%" width="landscape.600px,portrait.681px" border-radius="7px"
          bg-color="white" margin="landscape.0px 0px 0px 0px, portrait.-149px 0px 25px 0px"
          onEntry="this.display='flex'; this.align-items='center'; this.justifyContent='center';">
			<lido-image visible="true"
            width="landscape.100%,portrait.100%"
            height="landscape.100%,portrait.100%"
            border-radius="7px" bg-color="white"
            src="${args.image}">
          </lido-image>
		  </lido-cell>
		
		<lido-cell layout="col" visible="true"  width="landscape.53%,portrait.108%" height="216px" bg-Color="transparent" margin="landscape.0px 0px 0px 0px,portrait.0px 0px 0px 0px" onEntry="this.align-items='center'; this.justify-content='center'; this.gap='40px';">
            <lido-text visible="true" audio="" onCorrect="this.border='5px solid green';this.cellBorderAnimate='#65BC46';" onInCorrect="this.vibrate='horizontal-shake';"  id="option1" font-family="'Baloo Bhai 2'" tab-index="2" font-size="62px" border-radius="12px" font-color="black" height="120px" width="auto" string="${args.option1}" value="${args.option1}" type="click" onEntry="this.font-weight='500';this.padding='0px 64px 0px 64px';">
            </lido-text>
			<lido-text visible="true" audio=""  id="option2" onCorrect="this.border='5px solid green';this.cellBorderAnimate='#65BC46';" onInCorrect="this.vibrate='horizontal-shake';" font-family="'Baloo Bhai 2'" tab-index="3" font-size="62px" border-radius="12px" font-color="black" height="120px" width="auto" string="${args.option2}" value="${args.option2}" type="click" onEntry="this.font-weight='500';this.padding='0px 64px 0px 64px';">
            </lido-text>
			<lido-text visible="true" audio=""  id="option3" font-family="'Baloo Bhai 2'" tab-index="4" font-size="62px" onCorrect="this.border='5px solid green';this.cellBorderAnimate='#65BC46';" onInCorrect="this.vibrate='horizontal-shake';" border-radius="12px" font-color="black" height="120px" width="auto" string="${args.option3}" value="${args.option3}" type="click" onEntry="this.font-weight='500';this.padding='0px 64px 0px 64px';">
            </lido-text>
			<lido-text visible="true" audio=""  id="option4" font-family="'Baloo Bhai 2'" tab-index="5" font-size="62px" border-radius="12px" font-color="black" height="120px" onCorrect="this.border='5px solid green';this.cellBorderAnimate='#65BC46';" onInCorrect="this.vibrate='horizontal-shake';" width="auto" string="${args.option4}" value="${args.option4}" type="click" onEntry="this.font-weight='500';this.padding='0px 64px 0px 64px';">
            </lido-text>
		</lido-cell>

	</lido-cell>
</lido-container>


  </main>`;
}
