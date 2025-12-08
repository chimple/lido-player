import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';


const meta: Meta = {
  title: 'Templates/nimbleTable',
  argTypes: {
    equations: { control: 'object' },
    values: { control: 'object' },
    isContinueOnCorrect: { control: 'boolean' },
    isAllowOnlyCorrect: { control: 'boolean' },
  },
};

export default meta;

export const nimbletable: StoryObj = {
  args: {
    equations: [
      "1 + 1 = ?",
      "2 + 2 = ?",
      "3 + 3 = ?",
      "4 + 4 = ?",
      "5 + 5 = ?",
      "6 + 6 = ?",
      "3 + 2 = ?"
    ],
    answers: ["2", "4", "6", "8", "10", "12", "5"],
    isContinueOnCorrect: true,
    isAllowOnlyCorrect: true,
  },
  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};


function getContainerXml(args) {
  let tabCounter = 1;
  const { equations = [], answers = [], isContinueOnCorrect = true, isAllowOnlyCorrect = true } = args;
  

    const SlidingEquationCells = equations
  .map((equation, index) => {
    const answer = answers[index]; // one-to-one mapping
    return `
      <lido-text visible="true" audio="" onTouch="" type="calculate"
        id="equation${index + 1}" tab-index="${tabCounter++}"
        height="landscape.140px, portrait.126px" width="landscape.100%, portrait.96%"
        bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="84px"
        value="${answer}" string="${equation}"
        margin="landscape.-4px 10px 22px -116px,portrait.6px 0 20px 0 "
        onEntry="this.color='white';this.fontWeight='500';this.borderRadius='10px';
                 this.flex-shrink='0';this.textShadow='3px 0 white, -3px 0 white, 0 3px white, 0 -3px white';
                 this.justifyContent='center'; this.alignItems='center'"
        onCorrect="">
      </lido-text>
    `;
  })
  .join('');



  return `<main>
 <lido-container id="lido-container" is-allow-only-correct="${isAllowOnlyCorrect}" tab-index="1" value="mainContainer1"  bg-image="https://drive.google.com/file/d/1-_jw2jrAGgJKPuf4_uQriCsLGSII-1HH/view" objective="${answers.join(',')}" height="100%" width="100%" bg-color="transparent" visible="true" onCorrect="this.scrollCellAfterEquationSolved='true'; this.sleep='1000';lido-avatar.avatarAnimate='Success';this.sleep='2000'; " onEntry="this.justifyContent='space-around'; audio.speak='true';" onInCorrect="this.scrollCellAfterEquationSolved='true'; lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" 
 is-continue-on-correct="${isContinueOnCorrect}">

   <!-- Audio -->
  <lido-text visible="false" id="audio" onEntry="this.display='none';" string="Solve the question at the third board and select the correct answer from the calculator."></lido-text>

<!-- Chimple Avatar -->
	<lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.448px,portrait.402px" width="landscape.350px,portrait.398px" x="landscape.718px, portrait.-8%" y="landscape.502px, portrait.73%" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="">
			<lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{{chimpleCharacterRive}}">
			</lido-avatar>
	</lido-cell>


		<lido-cell visible="true" id="xx"  layout="landscape.row,portrait.col" height="90%" width="102%" bg-Color="transparent" margin="landscape.56px -56px 0px 110px,portrait.0px" onEntry="" justify-content="space-evenly">
			  <lido-cell layout="landscape.col,portrait.col" visible="true" height="landscape.96%,portrait.51%" width="landscape.614px,portrait.68%" bg-color="rgb(158 82 15 / 97%)" onEntry="" margin="landscape.27px 0px 0px -906px,portrait.-660px 0px 18px 0px" border-radius="10px">
            <lido-text visible="true" id="" audio="" onTouch="" tab-index="${tabCounter++}" height="landscape.140px, portrait.126px" width="landscape.100%, portrait.96%" bg-Color="#b27641" margin="landscape.0px 0px 10px 0px,portrait.0 " onEntry="this.borderRadius='18px 18px 0px 0px'; this.flex-shrink='0';">
            </lido-text>	
            <lido-text visible="true" audio="" onTouch="" tab-index="${tabCounter++}" height="landscape.140px, portrait.126px" width="landscape.100%, portrait.96%" bg-Color="#b27641" margin="landscape.0px 0px 10px 0px,portrait.0 " onEntry="this.flex-shrink='0';">
            </lido-text>
            <lido-text visible="true" audio="" onTouch="" tab-index="${tabCounter++}" height="landscape.140px,portrait.124px" width="landscape.90%, portrait.86%" bg-Color="#9e5310" margin="landscape.0px 0px 10px 0px,portrait.0 " onEntry="this.flex-shrink='0'; this.border = 16px solid #82420a">
            </lido-text>
            <lido-text visible="true" audio="" onTouch="" tab-index="${tabCounter++}" height="landscape.140px, portrait.126px" width="landscape.100%, portrait.96%" bg-Color="#b27641" margin="landscape.0px 0px 10px 0px,portrait.0 " onEntry="this.flex-shrink='0';">
            </lido-text>
            <lido-text visible="true" audio="" onTouch="" tab-index="${tabCounter++}" height="landscape.140px, portrait.126px" width="landscape.100%, portrait.96%" bg-Color="#b27641" margin="landscape.0px 0px 10px 0px,portrait.0 " onEntry="this.borderRadius='0px 0px 18px 18px'; this.flex-shrink='0';">
            </lido-text>				
			   </lido-cell>

			<lido-cell id="cellParent" layout="landscape.col,portrait.col" visible="true" height="landscape.94%,portrait.92%" width="landscape.40%,portrait.71%" bg-color="transparent" onEntry="this.position= 'fixed'; this.justifyContent='flex-start'" margin="landscape.101px 0px 0px 166px,portrait.80px 0px 0px 124px" border-radius="10px" display="flex">
        <lido-text visible="true" audio="" onTouch="" id="dummy111" class="dummy-1" tab-index="" height="landscape.140px, portrait.126px" width="landscape.100%, portrait.96%" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="88px" string="" margin="landscape.-4px 10px 22px -116px,portrait.6px 0 20px 0 " onEntry="this.color='white';this.fontWeight='500';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white'; this.justifyContent='center'" onCorrect="">
				</lido-text>
				<lido-text visible="true" audio="" onTouch="" id="dummy112" class="dummy-2" tab-index="" height="landscape.140px, portrait.126px" width="landscape.100%, portrait.96%" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="88px" string="" margin="landscape.-4px 10px 22px -116px,portrait.6px 0 20px 0 " onEntry="this.color='white';this.fontWeight='500';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white'; this.justifyContent='center'" onCorrect="">
				</lido-text>
        ${SlidingEquationCells}

       <lido-cell visible="true" height="landscape.84%,portrait.732px" width="landscape.530px,portrait.62%" bg-color="transparent"  onEntry="this.display='flex'; this.position='fixed'" margin="landscape.98px 0px 106px 1027px, portrait.860px 0px 0px 280px">
				<lido-calculator visible="true" height="100%"></lido-calculator>
			</lido-cell>				
			</lido-cell>
    </lido-cell>
</lido-container>
</main>`;
}
