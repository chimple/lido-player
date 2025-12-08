import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Templates/quizLiteracyImageWord',
  argTypes: {
 
  image: { control: 'file' },
  },
};
export default meta;

export const quizLiteracyImageWord: StoryObj = {
  args: {
   option1: "Hippopotamus",
   option2: "Elephant",
   option3: "Grandmother",
   option4: "Sunflower",
   answers:"Elephant",
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
   <lido-container id="lido-container" value="maincontainer" visible="true" objective="${args.answers}"  bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/background-images/Quiz%20literacy.png"  onEntry="" is-Continue-On-Correct="true" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';">
	<lido-cell layout="pos" id="pos1" disable-edit="true" value="pos1" height="landscape.290px,portrait.434px" width="landscape.278px,portrait.437px" x="landscape.78%, portrait.24%" y="landscape.228px, portrait.75%" aria-hidden="true" z="2" bg-color="transparent" type="" visible="true" audio="" onTouch="" onCorrect="">
		<lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/chimplecharacter.riv" alt-text="{chimpleCharacterRive}" bg-color="transparent">
		</lido-avatar>
		<lido-image id="image1" disable-edit="true" value="image1" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/Shadow.png" bg-color="transparent" width="landscape.165px,portrait.200px" height="landscape.30px,portrait.48px" x="landscape.54px,portrait.108px" y="landscape.239px,portrait.361px" alt-text="{shadowImgae}">
		</lido-image>
	</lido-cell>
	<lido-cell layout="col" visible="true" bg-Color="transparent" width="90%" height="68%">
		<lido-cell layout="flex" margin="landscape.0px,portrait.-215px 0px 0px 0px" visible="true" width="100%" height="300px" bg-Color="transparent"
  onEntry="this.align-items='center'; this.justify-content='center';">

        <lido-cell visible="true" height="400px" width="400px" value="${args.answers}" border-radius="7px"
          bg-color="white" margin="landscape.-70px 0px 0px 0px, portrait.0px 0px 0px 0px"
          onEntry="this.display='flex'; this.align-items='center'; this.justifyContent='center';">
          <lido-image visible="true"
            width="landscape.400px,portrait.400px"
            height="landscape.400px,portrait.400px"
            border-radius="7px" bg-color="white"
            src="${args.image}">
          </lido-image>
        </lido-cell>
   

</lido-cell>


		<lido-cell layout="landscape.wrap,portrait.col" visible="true" margin="landscape.0px,portrait.214px 0px 271px" width="landscape.67%,portrait.100%" height="216px" bg-Color="transparent" onEntry=" this.gridTemplateColumns = 'repeat(2, 1fr)';  this.gridTemplateRows = 'repeat(2, 1fr)';this.align-items='center'; this.justify-content='center'; this.gap='40px';">
            
            <lido-text visible="true" audio=""  id="drag${tabCounter}" tab-index="${tabCounter++}" onCorrect="this.border='5px solid green';this.cellBorderAnimate='#65BC46';" onInCorrect="this.vibrate='horizontal-shake';" font-size="80px" border-radius="12px" font-color="black" height="148px" width="auto" string="${args.option1}" value="${args.option1}" type="click" onEntry="this.font-weight='500';this.padding='0px 64px 0px 64px';">
            </lido-text>
             <lido-text visible="true" audio=""  id="drag${tabCounter}" tab-index="${tabCounter++}" font-size="80px" border-radius="12px" font-color="black" onCorrect="this.border='5px solid green';this.cellBorderAnimate='#65BC46';" onInCorrect="this.vibrate='horizontal-shake';" height="148px" width="auto" string="${args.option2}" value="${args.option2}" type="click" onEntry="this.font-weight='500';this.padding='0px 64px 0px 64px';">
            </lido-text>
             <lido-text visible="true" audio=""  id="drag${tabCounter}" tab-index="${tabCounter++}" font-size="80px" border-radius="12px" font-color="black" height="148px" onCorrect="this.border='5px solid green';this.cellBorderAnimate='#65BC46';" onInCorrect="this.vibrate='horizontal-shake';" width="auto" string="${args.option3}" value="${args.option3}" type="click" onEntry="this.font-weight='500';this.padding='0px 64px 0px 64px';">
            </lido-text>
             <lido-text visible="true" audio=""  id="drag${tabCounter}" tab-index="${tabCounter++}" font-size="80px" border-radius="12px" font-color="black" height="148px" width="auto" onCorrect="this.border='5px solid green';this.cellBorderAnimate='#65BC46';" onInCorrect="this.vibrate='horizontal-shake';" string="${args.option4}" value="${args.option4}" type="click" onEntry="this.font-weight='500';this.padding='0px 64px 0px 64px';">
            </lido-text>
            
			
		</lido-cell>

	</lido-cell>
</lido-container>
  </main>`;
}
