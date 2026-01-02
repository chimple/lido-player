import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Templates/palEgraArrangePictures',
  argTypes: {
    options: { control: 'object' },
    PracticeMode: { control: 'boolean' },
  },
};

export default meta;

export const palEgraArrangePictures: StoryObj = {
  args: {
    question_text: 'एक बिल्ली मेज के ऊपर बैठी थी।  मेज के ऊपर एक गिलास में शरबत था। बिल्ली मेज के ऊपर शरबत पीने चढ़ी। उसने शरबत मेज पर गिरा दिया।',
    images: [{id: '1', src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/PAL-EGRA/cat_playing_outside.webp'},
             {id: '2', src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/PAL-EGRA/glass_on_table.webp'},
             {id: '3', src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/PAL-EGRA/cat_on_table.jpg'},
             {id: '4', src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/PAL-EGRA/juice_on_table_spilled.webp'}],
    PracticeMode: false,
  },
  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

function getContainerXml(args) {
const drop_cells = args.images.map((img, index) => {
  return `
    <lido-cell layout="landscape.col, portrait.col" visible="true" margin="landscape.0px,portrait.0" onEntry="this.border-radius='16px';" height="landscape.auto,portrait.35%" width="landscape.auto,portrait.100%" bg-color="transparent" padding="0px 13px 0px 17px" gap="12px">
		<lido-text visible="true" id="label${index + 1}" tab-index="" value="" string="${img.id}" font-family="'Baloo Bhai 2'" width="72px" height="72px" font-color="#030028" font-size="landscape.60px, portrait.100px"  bg-color="#FFF5BB" onEntry="this.fontWeight='600'; this.border-radius='100%';">
		</lido-text>
		<lido-text visible="true" id="drop${index + 1}" tab-index="${11 + index}" value="${img.id}" string="" font-family="'Baloo Bhai 2'" width="215px" height="215px" font-color="#030028" font-size="landscape.140px, portrait.100px"  bg-color="#FFFFFF"  type="drop" onEntry="this.fontWeight='700'; this.border-radius='16px';">
		</lido-text>
	</lido-cell>
  `;
}).join('');

const shuffledOptions = [...args.images].sort(() => Math.random() - 0.5);
const drag_cells = shuffledOptions.map((img, index) => {
  return `
      <lido-image visible="true" id="drag${index + 1}" value="${img.id}" bg-color="transparent" width="215px" height="215px" src="${img.src}" type="drag"></lido-image>
  `;
}).join('');

    // ---------------------- FINAL XML ----------------------
  return `
<main>
<lido-container  visible="true" id="lido-container" onEntry="lido-question.speak='true';" onInCorrect="lido-avatar.avatarAnimate='Fail';this.sleep='2000';" template-id="dragAndDrop"  is-allow-only-one-drop = "true" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2300';" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/PAL-EGRA/palEgraTemp6_bg.png" objective="${args.images.map(img => img.id).join(',')}" is-continue-on-correct="${args.PracticeMode}" is-allow-only-correct="${args.PracticeMode}" custom-style= "#drop1, #drop2, #drop3, #drop4, #drop5 {
        border: none !important;
		box-shadow:
			inset -10px 10px 10px 0 rgba(0, 0, 0, 0.25);
        }">
	 <!-- Chimple Avatar -->
      <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.330px,portrait.378px" width="landscape.300px,portrait.382px"
       x="landscape.86%, portrait.30%" y="landscape.34%, portrait.78%" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="">
        <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
        </lido-avatar>
		<lido-image id="image" disableEdit="true" value="image" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/Shadow.png" bgColor="transparent" width="inherit" height="20px" x="landscape.-1px, portrait.-7px" y="landscape.280px, portrait.535px" altText="{shadowImage}"></lido-image>
      </lido-cell>

        <lido-cell layout="landscape.col, portrait.row" aria-hidden="true" visible="true" height="landscape.95%,portrait.150px" width="landscape.98%, portrait.80%" bg-Color="transparent" margin="landscape.102px 0px 0px 0px,portrait.20px 0px 0px 0px" onEntry="this.z-index='1'; this.justify-content='center'; this.alignItems='center'; this.gap='12px';">
            <!-- question cell -->				
            <lido-text tab-index="111" visible="true" id="lido-question" width="landscape.103%, portrait.80%" height="auto" bg-color="#FFF5BB" string="${args.question_text}" border-radius="16px" onEntry="this.border='2px solid #FFB612'; this.fontWeight='700';" font-size="48px" font-color="#07004E" font-family="'Baloo Bhai 2'" padding="7px 0px 0px 0px">
      		</lido-text>
          

          <!--drop cells -->
	      	<lido-cell layout="landscape.row, portrait.col" visible="true" margin="landscape.0px 84px 0px 0px,portrait.0" onEntry="this.border-radius='26px';" height="landscape.auto,portrait.35%" width="landscape.auto,portrait.100%" bg-color="transparent">		
				${drop_cells}
			</lido-cell>


			<lido-cell layout="landscape.row, portrait.col" visible="true" margin="landscape.0px 50px 0px 0px,portrait.0" onEntry="this.border-radius='16px'; this.justify-content='space-evenly';" height="landscape.auto,portrait.35%" width="landscape.100%,portrait.100%" bg-color="transparent">
                ${drag_cells}
			</lido-cell>        
             
        </lido-cell>                  

</lido-container>
</main>
`;
}
