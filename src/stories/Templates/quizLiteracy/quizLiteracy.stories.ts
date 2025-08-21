import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Templates/quizLiteracy',
  argTypes: {
  options: { control: 'object' },
  answers: { control: 'object' },
  image: { control: 'file' },
  },
};
export default meta;

export const quizLiteracy: StoryObj = {
  args: {
   options: ['n','a','f','b'],
   answers: ['n'],
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
   <lido-container id="lido-container" value="maincontainer" visible="true" objective="${(args.answers || []).join(',')}"  bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/Underwater.png"  onEntry="" is-Continue-On-Correct="true" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';">
	<lido-cell layout="pos" id="pos1" disable-edit="true" value="pos1" height="landscape.290px,portrait.476px" width="landscape.278px,portrait.467px" x="landscape.64%, portrait.24%" y="landscape.228px, portrait.66%" aria-hidden="true" z="2" bg-color="transparent" type="" visible="true" audio="" onTouch="" onCorrect="">
		<lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/chimplecharacter.riv" alt-text="{chimpleCharacterRive}" bg-color="transparent">
		</lido-avatar>
		<lido-image id="image1" disable-edit="true" value="image1" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/Shadow.png" bg-color="transparent" width="165px" height="30px" x="landscape.54px,portrait.125px" y="landscape.239px,portrait.400px" alt-text="{shadowImgae}">
		</lido-image>
	</lido-cell>
	<lido-cell layout="col" visible="true" bg-Color="transparent" width="90%" height="68%">
		<lido-cell layout="flex" visible="true" width="100%" height="300px" bg-Color="transparent"
  onEntry="this.align-items='center'; this.justify-content='center';">

  ${(args.answers || [])
    .map((answer) => {
    if (!answer) return ""; // skip empty answers

    const isImage = answer.startsWith("http") || /\.(png|jpg|jpeg|gif|webp|svg)$/i.test(answer);

    if (!isImage) {
      // Render text
      return `
        <lido-text visible="true" id="answer${tabCounter}"  
          tab-index="${tabCounter++}" font-size="140px"
          bg-color="#FFF5BB" border-radius="12px"
          font-color="black" height="200px" width="auto"
          string="${answer}" margin="landscape.0px,portrait.-131px 0px 0px 0px" value="${answer}" type="text"
          onEntry="this.border='6px solid #FFB612';this.font-weight='500';this.padding='0px 64px';">
        </lido-text>`;
    } else {
      // Render image
      return `
        <lido-cell visible="true" height="400px" width="400px" border-radius="7px"
          bg-color="white" margin="landscape.-70px 0px 0px 0px, portrait.0px 0px 0px 0px"
          onEntry="this.display='flex'; this.align-items='center'; this.justifyContent='center';">
          <lido-image visible="true"
            width="landscape.400px,portrait.400px"
            height="landscape.400px,portrait.400px"
            border-radius="7px" bg-color="white"
            src="${answer}">
          </lido-image>
        </lido-cell>`;
    }
  })
  .join("")
}

</lido-cell>


		<lido-cell layout="flex" visible="true" margin="landscape.0px,portrait.-424px 0px 407px 0px" width="landscape.100%,portrait.77%" height="216px" bg-Color="transparent" onEntry="this.align-items='center'; this.justify-content='center'; this.gap='40px';">
             ${args.options
          .map(
            (option) => `
            <lido-text visible="true" id="drag${tabCounter}" tab-index="${tabCounter++}" font-size="140px" border-radius="12px" font-color="black" height="205px" width="auto" string="${option}" value="${option}" type="click" onEntry="this.font-weight='500';this.padding='0px 64px 0px 64px';">
            </lido-text>
            `
          ,
          )
          .join('')}
			
		</lido-cell>

	</lido-cell>
</lido-container>
  </main>`;
}
