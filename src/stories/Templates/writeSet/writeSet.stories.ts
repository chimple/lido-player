import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Templates/writeSet',
  argTypes: {
    questions: { control: 'object' },
  },
};

export default meta;

export const writeSet: StoryObj = {
  args: {
    questions: ["26"]
  },
  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

function getContainerXml(args) {
  let tabCounter = 1;
  const { questions = []} = args;
  

  const QuestionCells = questions.map(question => {
    return `
		<!-- Questions --> 	
		<lido-cell visible="true" id="question"  layout="" height="93px" width="368px" bg-Color="transparent" onEntry="" justify-content="space-evenly" margin="landscape.0px 0px 0px -78px,portrait.44px">
			<lido-text visible="true" id="number" audio="" value="${question}" onTouch="" tab-index="${tabCounter++}" height="100%" width="100%" bg-Color="#FFE99B" margin="" onEntry="this.border='5px solid #FFC805'" string="${question}" font-size="76px" font-weight="500" font-family="'Baloo Bhai 2'" onCorrect="this.speak='true'">
			</lido-text>
		</lido-cell>
      `;
  }).join('');

  return `<main>
 <lido-container visible="true" show-next-button="true" dropAttr="math-matrix" appendToDropOnCompletion="true" equationCheck="$#mat1,==,$#number" objective="" is-continue-on-correct="true" is-allow-only-correct="true" bg-color="transparent" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/Sky.png" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" onCorrect="lido-avatar.avatarAnimate='Success'; number.speak='true';  this.sleep='2000';">

    <!-- Audio -->
    <lido-text visible="false" id="audio123" onEntry="this.display='none'; this.speak='true';" string="Fill the matrix according to the number given in the box."></lido-text>
		
    <!-- Chimple Avatar -->
	<lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.346px,portrait.310px" width="landscape.263px,portrait.276px" x="landscape.82%, portrait.72%" y="landscape.68%, portrait.82%" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="">
			<lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
			</lido-avatar>
	</lido-cell>
		
		
	<lido-cell visible="true" id="question"  layout="landscape.row,portrait.col" height="100%" width="100%" bg-Color="transparent" margin="landscape.78px 0px -16px 0px,portrait.0px" onEntry="this.justifyContent='center'">

		<lido-cell visible="true" id="question"  layout="" height="landscape.92%,portrait.72%" width="landscape.80%,portrait.96%" bg-Color="transparent" margin="landscape.-16px 0px 0px -56px,portrait.0px 50px 0px 0px" onEntry="this.justifyContent='center'">
			<lido-math-matrix id="mat1" visible="true" width="landscape.100%,portrait.1000px" height="landscape.860px,portrait.1700px" x="800px" y="23px" rows="landscape.12,portrait.10" cols="landscape.10,portrait.12" top-index="true" left-index="true" bottom-index="true" active-only-visible="false" defualtFill="0" border="1px solid black" border-radius="0" active-bg-color="#5D44BD" clickable="true" type="checkerBlock" font-color="#182A4F" deactive-bg-color="aliceblue" font-family="'Baloo Bhai 2'">
			</lido-math-matrix>	
		</lido-cell>

		${QuestionCells}
	
	</lido-cell>		
</lido-container>
</main>`;
}
