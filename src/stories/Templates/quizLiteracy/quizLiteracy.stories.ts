import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { text } from 'stream/consumers';

const meta: Meta = {
  title: 'Templates/quizLiteracy',
  argTypes: {
  option1: { control: 'text' },
  option2: { control: 'text' }, 
  option3: { control: 'text' },
  option4: { control: 'text' },
  text: { control: 'text' },
  answers: { control: 'text' },
 
  },
};
export default meta;

export const quizLiteracy: StoryObj = {
  args: {
   option1:"n",
   option2:"a",
    option3:"f",
    option4:"b",

   text:"n",
   answers: "n",
   image:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/template/audioIcon.png",
  },

  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

function getContainerXml(args) {
    let tabCounter = 1;
  return `<main>
   <lido-container id="lido-container" value="maincontainer" visible="true" objective="${args.answers}"  bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/Underwater.png"  onEntry="" is-Continue-On-Correct="true" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';">
	<lido-cell layout="pos" id="pos1" disable-edit="true" value="pos1" height="landscape.290px,portrait.476px" width="landscape.278px,portrait.467px" x="landscape.64%, portrait.24%" y="landscape.228px, portrait.66%" aria-hidden="true" z="2" bg-color="transparent" type="" visible="true" audio="" onTouch="" onCorrect="">
		<lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/chimplecharacter.riv" alt-text="{chimpleCharacterRive}" bg-color="transparent">
		</lido-avatar>
		<lido-image id="image1" disable-edit="true" value="image1" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/Shadow.png" bg-color="transparent" width="165px" height="30px" x="landscape.54px,portrait.125px" y="landscape.239px,portrait.400px" alt-text="{shadowImgae}">
		</lido-image>
	</lido-cell>
	<lido-cell layout="col" visible="true" bg-Color="transparent" width="90%" height="68%">
		<lido-cell layout="flex" visible="true" width="100%" height="300px" bg-Color="transparent"
  onEntry="this.align-items='center'; this.justify-content='center';">

  ${args.text && args.text.length > 0
  ? `<lido-text visible="true" id="answer${tabCounter}"  
        tab-index="${tabCounter++}" font-size="140px"
        bg-color="#FFF5BB" audio="" border-radius="12px"
        font-color="black" height="200px" width="auto"
        string="${args.text}" margin="landscape.0px,portrait.-131px 0px 0px 0px" 
        value="${args.text}" type="text"
        onEntry="this.border='6px solid #FFB612';this.font-weight='500';this.padding='0px 64px';">
     </lido-text>`
  : args.image && args.image.length > 0
  ? `<lido-cell visible="true" height="200px" value="${args.answers}" width="200px" border-radius="7px"
        bg-color="white" margin="landscape.12px 0px 0px 0px, portrait.0px 0px 0px 0px"
        onEntry="this.display='flex'; this.align-items='center'; this.justifyContent='center';this.border='4px solid #FFB612';">
        <lido-image audio="" visible="true"
          width="landscape.200px,portrait.200px"
          height="landscape.200px,portrait.200px"
          border-radius="7px" bg-color="white"
          src="${Array.isArray(args.image) ? args.image[0] : args.image}">
        </lido-image>
     </lido-cell>`
  : ''}
   

</lido-cell>


		<lido-cell layout="flex" visible="true"  margin="landscape.0px,portrait.-424px 0px 407px 0px" width="landscape.100%,portrait.77%" height="216px" bg-Color="transparent" onEntry="this.align-items='center'; this.justify-content='center'; this.gap='40px';">
             
            <lido-text visible="true" audio=""  show-speak-icon="true" id="drag${tabCounter}" tab-index="${tabCounter++}" font-size="140px" border-radius="12px" font-color="black" height="205px" width="auto" string="${args.option1}" value="${args.option1}" type="click" onEntry="this.font-weight='500';this.padding='0px 64px 0px 64px';">
            </lido-text>
              <lido-text visible="true" audio=""  show-speak-icon="true" id="drag${tabCounter}" tab-index="${tabCounter++}" font-size="140px" border-radius="12px" font-color="black" height="205px" width="auto" string="${args.option2}" value="${args.option2}" type="click" onEntry="this.font-weight='500';this.padding='0px 64px 0px 64px';">
            </lido-text>
              <lido-text visible="true" audio=""  show-speak-icon="true" id="drag${tabCounter}" tab-index="${tabCounter++}" font-size="140px" border-radius="12px" font-color="black" height="205px" width="auto" string="${args.option3}" value="${args.option3}" type="click" onEntry="this.font-weight='500';this.padding='0px 64px 0px 64px';">
            </lido-text>
              <lido-text visible="true" audio=""  show-speak-icon="true" id="drag${tabCounter}" tab-index="${tabCounter++}" font-size="140px" border-radius="12px" font-color="black" height="205px" width="auto" string="${args.option4}" value="${args.option4}" type="click" onEntry="this.font-weight='500';this.padding='0px 64px 0px 64px';">
            </lido-text>
            
			
		</lido-cell>

	</lido-cell>
</lido-container>
  </main>`;
}
