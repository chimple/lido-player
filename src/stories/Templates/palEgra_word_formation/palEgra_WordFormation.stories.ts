import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

type TextColors = {
  colors: string[];
};

const meta: Meta = {
  title: 'Templates/palEgraWordFormation',
  argTypes: {
    options: { control: 'object' },
    PracticeMode: { control: 'boolean' },
  },
};

export default meta;

export const palEgraWordFormation: StoryObj = {
  args: {
    image: ['https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/PAL-EGRA/madari.jpg'],
    options: ['म', 'दा', 'री'],
    PracticeMode: false,
  },
  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

function getContainerXml(args) {
const drop_cells = args.options.map((q, index) => {
  return `
    <lido-text visible="true" id="drop${index+1}" tab-index="${12+index}" value="${q}" string="?" font-family="'Baloo Bhai 2'" width="173px" height="189px" is-allow-only-one-drop="true" font-color="#030028" font-size="landscape.140px, portrait.100px"  bg-color="#FFFFFF"  type="drop" onEntry="this.fontWeight='700'; this.border-radius='16px';">
	</lido-text>
  `;
}).join('');

const shuffledOptions = [...args.options].sort(() => Math.random() - 0.5);
const drag_cells = shuffledOptions.map((q, index) => {
  return `
      <lido-text visible="true" id="drag${index+1}" tab-index="${16+index}" value="${q}" string="${q}" font-family="'Baloo Bhai 2'" width="173px" height="189px" font-color="#030028" font-size="landscape.140px, portrait.100px"  bg-color="#A05730"  type="drag" onEntry="this.fontWeight='700'; this.border-radius='16px'; this.justifyContent='center'; this.alignItems='baseline';">
	  </lido-text>
  `;
}).join('');

    // ---------------------- FINAL XML ----------------------
  return `
<main>
<lido-container  visible="true" id="lido-container" template-id="dragAndDrop" onInCorrect="lido-avatar.avatarAnimate='Fail';this.sleep='2000';" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2300';" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/PAL-EGRA/palEgraTemp6_bg.png" objective="${args.options.join(',')}" is-continue-on-correct="${args.PracticeMode}" is-allow-only-correct="${args.PracticeMode}" custom-style= "#drop1, #drop2, #drop3, #drop4 {
        border: 2px solid #FFB612 !important;
        }">
	  <!-- Chimple Avatar -->
      <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.330px,portrait.378px" width="landscape.300px,portrait.382px"
       x="landscape.62%, portrait.30%" y="landscape.35%, portrait.78%" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="">
        <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
        </lido-avatar>
      </lido-cell>

        <lido-cell layout="landscape.row, portrait.row" aria-hidden="true" visible="true" height="landscape.100%,portrait.150px" width="landscape.98%, portrait.80%" bg-Color="transparent" margin="landscape.46px 0px 0px 0px,portrait.20px 0px 0px 0px" onEntry="this.z-index='1'; this.justify-content='center'; this.alignItems='center'; this.gap='73px';">
            <!-- image cell -->
          <lido-cell layout="landscape.row, portrait.col" tab-index="11" visible="true" margin="landscape.0px 0px 0px 0px,portrait.-168px 0px 0px 0px" onEntry="this.border='11px solid #FFFFFF'; this.justify-content='center'; this.align-items='center';" height="landscape.600px,portrait.42%" width="landscape.600px,portrait.100%" bg-color="#FFF5BB">				
            <lido-image type="text" margin="landscape.0px,portrait.0px 0px 0px 0px" id="" visible="true" src="${args.image}" width="100%" height="100%" onTouch="this.speak='true'">
			</lido-image>  
          </lido-cell>

          
	      	<lido-cell layout="landscape.col, portrait.col" visible="true" margin="landscape.0px,portrait.0" onEntry="this.border-radius='26px';" height="landscape.84%,portrait.35%" width="landscape.51%,portrait.100%" bg-color="transparent" gap="240px">
                <!-- drop cells -->
				<lido-cell layout="landscape.row, portrait.col" visible="true" margin="landscape.0px,portrait.0" onEntry="this.border-radius='16px';" height="landscape.239px,portrait.35%" width="landscape.auto,portrait.100%" bg-color="#FFFFFF99" padding="0px 13px 0px 17px" gap="23px">
					${drop_cells}
				</lido-cell>

                <!-- drag cells -->
				<lido-cell layout="landscape.row, portrait.col" visible="true" margin="landscape.0px,portrait.0" onEntry="this.border-radius='16px';" height="landscape.239px,portrait.35%" width="landscape.auto,portrait.100%" bg-color="transparent" padding="0px 13px 0px 17px" gap="23px">
					${drag_cells}
				</lido-cell>          
            </lido-cell>
        </lido-cell>
                  

</lido-container>
</main>
`;
}
