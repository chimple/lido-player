import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { index } from 'mathjs';

type TextColors = {
  colors: string[];
};

const meta: Meta = {
  title: 'Templates/palEgmaPatternMatching',
  argTypes: {
    options: { control: 'object' },
    answers: { control: 'object' },
    isAllowOnlyCorrect: { control: 'boolean' },
    isContinueOnCorrect: { control: 'boolean' },
  },
};

export default meta;

export const palEgmaPatternMatching: StoryObj = {
  args: {
    question_text: 'Complete the pattern',
    questions: ['975', '976', '@977', '978', '979'],
    options: ['977', '980', '957', '947'],
    isAllowOnlyCorrect: true,
    isContinueOnCorrect: true,
  },
  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

function getContainerXml(args) {
  // ---------------------- FINAL XML ----------------------

  return `
<main>
<lido-container  visible="true" id="lido-container" onInCorrect="lido-avatar.avatarAnimate='Fail';this.sleep='2000';" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2300';" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/Sky.png" objective="${(args.questions.find(q => q.startsWith('@')) || '').slice(1)}" is-continue-on-correct="${args.isContinueOnCorrect}" is-allow-only-correct="${args.isAllowOnlyCorrect}" custom-style= "#text {
        box-shadow: none !important;
        }">
	 <!-- Chimple Avatar -->
      <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.328px,portrait.378px" width="landscape.284px,portrait.382px" x="landscape.87%, portrait.30%" y="landscape.68%, portrait.78%" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="">
        <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
        </lido-avatar>
      </lido-cell>


    <lido-cell layout="landscape.col, portrait.col" visible="true" margin="landscape.30px 0px 0px 0px,portrait.-168px 0px 0px 0px" onEntry="this.border-radius='26px';" height="landscape.90%,portrait.42%" width="landscape.96%,portrait.100%" bg-color="transparent">
        <lido-cell layout="landscape.row, portrait.col" visible="true" margin="landscape.0px 0px 0px 0px,portrait.-168px 0px 0px 0px" onEntry="this.border-radius='26px';" height="landscape.140px,portrait.42%" width="landscape.80%,portrait.100%" bg-color=" transparent">
            <lido-text id="text" visible="true" tab-index="112" value="${args.questions[0]}" string="${args.question_text}" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.80px, portrait.100px"  bg-color="" onEntry="this.fontWeight='800'; this.fontWeight='800'; this.speak='true';">
			      </lido-text>
        </lido-cell>

        <!-- question cells -->
		<lido-cell layout="landscape.row, portrait.col" visible="true" margin="landscape.0px 0px 0px 0px,portrait.-168px 0px 0px 0px" onEntry="this.border-radius='26px';" height="landscape.290px,portrait.42%" width="landscape.100%,portrait.100%" bg-color="transparent">				

			<lido-cell layout="row" id="text2" tab-index="2" visible="true" margin="" onEntry="this.border-radius='14px'; this.border='7px solid #F34D08';" height="landscape.214px,portrait.244px" width="landscape.270px,portrait.244px" bg-color="white"  type="" value="${args.questions[0]?.startsWith('@') ? args.questions[0].slice(1) : args.questions[0]}" onInCorrect="lido-avatar.avatarAnimate='Fail';" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2300';">
				<lido-text  visible="true" value="${args.questions[0]?.startsWith('@') ? args.questions[0].slice(1) : args.questions[0]}" string="${args.questions[0]?.startsWith('@') ? '?'.repeat(args.questions[2].slice(1).length) : args.questions[0]}" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.130px, portrait.100px"  bg-color="" onEntry="this.fontWeight='800';">
				</lido-text>
			</lido-cell>

            <lido-cell layout="row" id="text2" tab-index="2" visible="true" margin="" onEntry="this.border-radius='14px'; this.border='7px solid #F34D08';" height="landscape.214px,portrait.244px" width="landscape.270px,portrait.244px" bg-color="white"  type="" value="${args.questions[1]?.startsWith('@') ? args.questions[1].slice(1) : args.questions[2]}" onInCorrect="lido-avatar.avatarAnimate='Fail';" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2300';">
				<lido-text  visible="true" value="${args.questions[1]?.startsWith('@') ? args.questions[1].slice(1) : args.questions[2]}" string="${args.questions[1]?.startsWith('@') ? '?'.repeat(args.questions[2].slice(1).length) : args.questions[1]}" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.130px, portrait.100px"  bg-color="" onEntry="this.fontWeight='800';">
				</lido-text>
			</lido-cell>

            <lido-cell layout="row" id="text2" tab-index="2" visible="true" margin="" onEntry="this.border-radius='14px'; this.border='7px solid #F34D08';" height="landscape.214px,portrait.244px" width="landscape.270px,portrait.244px" bg-color="white"  type="" value="${args.questions[2]?.startsWith('@') ? args.questions[2].slice(1) : args.questions[2]}" onInCorrect="lido-avatar.avatarAnimate='Fail';" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2300';">
				<lido-text  visible="true" value="${args.questions[2]?.startsWith('@') ? args.questions[2].slice(1) : args.questions[2]}" string="${args.questions[2]?.startsWith('@') ? '?'.repeat(args.questions[2].slice(1).length) : args.questions[2]}" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.130px, portrait.100px"  bg-color="" onEntry="this.fontWeight='800';">
				</lido-text>
			</lido-cell>

            <lido-cell layout="row" id="text2" tab-index="2" visible="true" margin="" onEntry="this.border-radius='14px'; this.border='7px solid #F34D08';" height="landscape.214px,portrait.244px" width="landscape.270px,portrait.244px" bg-color="white"  type="" value="${args.questions[3]?.startsWith('@') ? args.questions[3].slice(1) : args.questions[3]}" onInCorrect="lido-avatar.avatarAnimate='Fail';" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2300';">
				<lido-text  visible="true" value="${args.questions[3]?.startsWith('@') ? args.questions[3].slice(1) : args.questions[3]}" string="${args.questions[3]?.startsWith('@') ? '?'.repeat(args.questions[2].slice(1).length) : args.questions[3]}" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.130px, portrait.100px"  bg-color="" onEntry="this.fontWeight='800';">
				</lido-text>
			</lido-cell>

            <lido-cell layout="row" id="text2" tab-index="2" visible="true" margin="" onEntry="this.border-radius='14px'; this.border='7px solid #F34D08';" height="landscape.214px,portrait.244px" width="landscape.270px,portrait.244px" bg-color="white"  type="" value="${args.questions[4]}" onInCorrect="lido-avatar.avatarAnimate='Fail';" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2300';">
				<lido-text  visible="true" value="${args.questions[4]}" string="${args.questions[4]?.startsWith('@') ? '?'.repeat(args.questions[4].slice(1).length) : args.questions[4]}" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.130px, portrait.100px"  bg-color="" onEntry="this.fontWeight='800';">
				</lido-text>
			</lido-cell>
 	    </lido-cell>

        <!-- options cells -->
		<lido-cell layout="landscape.row, portrait.col" visible="true" margin="landscape.0px 38px 0px 0px,portrait.0" onEntry="this.border-radius='26px';" height="landscape.290px,portrait.35%" width="landscape.86%,portrait.100%" bg-color="transparent">


                    <lido-cell layout="row" id="text6" tab-index="6" visible="true" margin="" onEntry="this.border-radius='14px';" height="landscape.270px,portrait.244px" width="landscape.270px,portrait.244px" bg-color="orange"  type="click" value="${args.options[0]}">
                        <lido-text visible="true" value="${args.options[0]}" string="${args.options[0]}" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.130px, portrait.100px"  bg-color="orange" 
                        onEntry="this.fontWeight='800';">
                        </lido-text>
                    </lido-cell>

                    <lido-cell layout="row" id="text7" tab-index="7" visible="true" margin="" onEntry="this.border-radius='14px';" height="landscape.270px,portrait.244px" width="landscape.270px,portrait.244px" bg-color="orange"  type="click" value="${args.options[1]}">
                        <lido-text visible="true" value="${args.options[1]}" string="${args.options[1]}" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.130px, portrait.100px"  bg-color="orange" 
                        onEntry="this.fontWeight='800';">
                        </lido-text>
                    </lido-cell>
            
                    <lido-cell layout="row" id="text8" tab-index="8" visible="true" margin="" onEntry="this.border-radius='14px';" height="landscape.270px,portrait.244px" width="landscape.270px,portrait.244px" bg-color="orange"  type="click" value="${args.options[2]}">
                        <lido-text  visible="true" value="${args.options[2]}" string="${args.options[2]}" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.130px, portrait.100px"  bg-color="orange" 
                        onEntry="this.fontWeight='800';">
                        </lido-text>
                    </lido-cell>

                    <lido-cell layout="row" id="text9" tab-index="9" visible="true" margin="" onEntry="this.border-radius='14px';" height="landscape.270px,portrait.244px" width="landscape.270px,portrait.244px" bg-color="orange"  type="click" value="${args.options[3]}">
                        <lido-text visible="true" value="${args.options[3]}" string="${args.options[3]}" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.130px, portrait.100px"  bg-color="orange" 
                        onEntry="this.fontWeight='800';">
                        </lido-text>
                    </lido-cell>	        
        </lido-cell>

          
    </lido-cell>

</lido-container>
</main>
`;
}
