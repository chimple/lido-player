import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

type TextColors = {
  colors: string[];
};

const meta: Meta = {
  title: 'Templates/palEgraBuildWord',
  argTypes: {
    options: { control: 'object' },
    PracticeMode: { control: 'boolean' },
  },
};

export default meta;

export const palEgraBuildWord: StoryObj = {
  args: {
    question_text: 'Listen to the word and build it with the letters below',
    question_word: ['dance'],
    PracticeMode: true,
  },
  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

function getContainerXml(args) {
const word = args.question_word[0]; // "dance"
const letters = [...word];          // ["d", "a", "n", "c", "e"]

const drop_cells = letters.map((q, index) => {
  return `
    <lido-text visible="true" id="drop${index+1}" tab-index="${12+index}" value="${q}" string="?" font-family="'Baloo Bhai 2'" width="172px" height="189px" font-color="#030028" font-size="landscape.140px, portrait.100px"  bg-color="#FFFFFF"  type="drop" onEntry="this.fontWeight='700'; this.border-radius='16px';">
	</lido-text>
  `;
}).join('');

const shuffledOptions = [...letters].sort(() => Math.random() - 0.5);
const drag_cells = shuffledOptions.map((q, index) => {
  return `
    <lido-text visible="true" id="drag${index+1}" tab-index="${16+index}" value="${q}" string="${q}" font-family="'Baloo Bhai 2'" width="173px" height="189px" font-color="#FFFFFF" font-size="landscape.140px, portrait.100px"  bg-color="#A05730"  type="drag" onEntry="this.fontWeight='700'; this.border-radius='16px'; this.justifyContent='center'; this.alignItems='center';">
	</lido-text>
  `;
}).join('');

    // ---------------------- FINAL XML ----------------------
  return `
<main>
<lido-container  visible="true" id="lido-container" onEntry="lido-question.speak='true';" onInCorrect="lido-avatar.avatarAnimate='Fail';this.sleep='2000';" template-id="dragAndDrop" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2300';" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/PAL-EGRA/palEgraTemp6_bg.png" objective="${args.question_word.join(',')}" is-continue-on-correct="${args.PracticeMode}" is-allow-only-correct="${args.PracticeMode}" custom-style= "#drop1, #drop2, #drop3, #drop4, #drop5 {
        border: 2px solid #FFB612 !important;
        }">
	   <!-- Chimple Avatar -->
      <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.330px,portrait.378px" width="landscape.300px,portrait.382px"
       x="landscape.82%, portrait.30%" y="landscape.32%, portrait.78%" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="">
        <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
        </lido-avatar>
		<lido-image id="image" disableEdit="true" value="image" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/Shadow.png" bgColor="transparent" width="inherit" height="20px" x="landscape.-1px, portrait.-7px" y="landscape.280px, portrait.535px" altText="{shadowImage}"></lido-image>
      </lido-cell>

        <lido-cell layout="landscape.col, portrait.row" aria-hidden="true" visible="true" height="landscape.82%,portrait.150px" width="landscape.98%, portrait.80%" bg-Color="transparent" margin="landscape.94px 0px 0px 0px,portrait.20px 0px 0px 0px" onEntry="this.z-index='1'; this.justify-content='center'; this.alignItems='center'; this.gap='73px';">
            <!-- question cell -->				
            <lido-text tab-index="111" visible="true" id="lido-question" width="landscape.93%, portrait.80%" height="60px" bg-color="#FFF5BB" string="${args.question_text}" border-radius="16px" onEntry="this.border='2px solid #FFB612'; this.fontWeight='700'; this.padding='50px';" font-size="60px" font-color="#07004E" font-family="'Baloo Bhai 2'">
      		</lido-text>
          

          <!-- options cells -->
	      	<lido-cell layout="landscape.row, portrait.col" visible="true" margin="landscape.-18px 91px 31px -100px,portrait.0" onEntry="this.border-radius='26px';" height="landscape.auto,portrait.35%" width="landscape.auto,portrait.100%" bg-color="transparent" gap="60px">
				<lido-text layout="landscape.row, portrait.col" visible="true" margin="landscape.0px,portrait.0" onEntry="this.border-radius='100%'; this.border='2px solid #FFB612';" height="landscape.190px,portrait.35%" width="landscape.184px,portrait.100%" bg-color="white" font-size="1px" onTouch="this.speak='true';" string="${word}">
					<lido-image visible="true" bg-color="transparent" width="100px" height="100px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Icons/palAudioIcon.png"></lido-image>
				</lido-text>
				
				<!-- drop cells -->
				<lido-cell layout="landscape.row, portrait.col" visible="true" margin="landscape.0px,portrait.0" onEntry="this.border-radius='16px';" height="landscape.239px,portrait.35%" width="landscape.auto,portrait.100%" bg-color="#FFFFFF99" padding="0px 13px 0px 17px" gap="12px">
					${drop_cells}
				</lido-cell>
			</lido-cell>


			<lido-cell layout="landscape.row, portrait.col" visible="true" margin="landscape.-46px 0px 0px 0px,portrait.0" onEntry="this.border-radius='16px';" height="landscape.239px,portrait.35%" width="landscape.auto,portrait.100%" bg-color="transparent" gap="23px">
                ${drag_cells}
			</lido-cell>        
             
        </lido-cell>
</lido-container>
</main>
`;
}
