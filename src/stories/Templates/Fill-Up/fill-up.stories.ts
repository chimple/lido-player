import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
const meta: Meta = {
  title: 'Templates/FillUp',
  argTypes: {
    heading: { control: 'text' },
    headingAudio: {control: {
        type: 'file',
        accept: '.mp3, .wav, .ogg, audio/*'
      }},
    img: { control: 'file' },
    option1: { control: 'text' },
		option1Audio: {control: {
        type: 'file',
        accept: '.mp3, .wav, .ogg, audio/*'
      }},
    option2: { control: 'text' },
		option2Audio: {control: {
        type: 'file',
        accept: '.mp3, .wav, .ogg, audio/*'
      }},
    option3: { control: 'text' },
		option3Audio: {control: {
        type: 'file',
        accept: '.mp3, .wav, .ogg, audio/*'
      }},
    option4: { control: 'text' },
		option4Audio: {control: {
        type: 'file',
        accept: '.mp3, .wav, .ogg, audio/*'
      }},
    answer1: { control: 'text' },
    answer2: { control: 'text' },
    answer3: { control: 'text' },
    answer4: { control: 'text' },
    text1: { control: 'text' },
    text2: { control: 'text' },
    text3: { control: 'text' },
    text4: { control: 'text' },
    text5: { control: 'text' },
    text6: { control: 'text' },
    text7: { control: 'text' },
    text8: { control: 'text' },
		sentenceAudio: {control: {
        type: 'file',
        accept: '.mp3, .wav, .ogg, audio/*'
      }},
  },
};
export default meta;
export const Blanks: StoryObj = {
  args: {
    heading: 'Fill  in  the  blanks',
    headingAudio: '',
    img: ['https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/fill-in-the-blanks/image%201.png'],
    option1: 'quick',
    option1Audio: '',
    option2: 'lazy',
    option2Audio: '',
    option3: 'quick1',
    option3Audio: '',
    option4: 'lazy1',
    option4Audio: '',
    answer1: 'quick',
    answer2: 'lazy',
    answer3: 'quick1',
    answer4: 'lazy1',
    text1: 'The',
    text2: 'brown fox',
    text3: 'jumped over a',
    text4: 'dog.',
    text5: 'The',
    text6: 'brown fox',
    text7: 'jumped over a',
    text8: 'dog.',
    sentenceAudio: '',
  },

  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};
function getContainerXml(args) {
  return `
   <main>
		<lido-container id="lido-container" is-allow-only-correct="true"  value="mainContainer1" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/fill-in-the-blanks/cloud.png" objective="${args.answer1},${args.answer2},${args.answer3},${args.answer4}" width="100%" bg-color="transparent" visible="true" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2000';  " onEntry="this.justifyContent='space-around';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="true" after-drop="false">
		 <lido-text id="fullSentence" visible="false" onEntry="this.display='none';" string="{full_sentence}" audio="{full_sentence_audio}"></lido-text>
           <!-- Chimple Avatar -->
		<lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.448px,portrait.402px" width="landscape.350px,portrait.398px" x="landscape.1267px, portrait.541px" y="landscape.587px, portrait.1304px" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="this.animation='rightToPlace 2.5s linear';">
			<lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
			</lido-avatar>
		</lido-cell>

		<!--Parent cell  -->
		<lido-cell layout="col" visible="true" width="100%" height="100%" bg-color="transparent" margin="landscape.0,portrait.-90px 0px 0px 0px">
			<!-- heading -->
			<lido-cell   visible="true" margin="landscape.12px 0px -17px 0px, portrait.0px 0px 0px;">
				<lido-text show-speak-icon="true" id="heading" tab-index="1" width="landscape.354px,portrait.433px" visible="true" audio="${args.headingAudio}" string="${args.heading}" font-family="'Baloo Bhai 2'" fontColor="black" font-size="landscape.45px, portrait.56px" bg-color="transparent" onEntry=" this.fontWeight='700';" margin="landscape.32px 0px 4px 0px,portrait.18px 0px 0px 0px">
				</lido-text>
			</lido-cell>
			<!-- fill up based on image -->

			<lido-cell show-speak-icon="true" audio="${args.sentenceAudio}" layout="landscape.row, portrait.col" visible="true" width="landscape.auto, portrait.69%" height="landscape.64%, portrait.auto" bg-color="white" onEntry="this.borderRadius='10px'; this.padding='8px';" margin="landscape.0 , portrait.18px 0px 0px 0px">

				<!-- image -->
				${args.img.length === 0 ? '' : `<lido-image id="image1" disable-edit="true" visible="true" src="${args.img}" width="landscape.542px, portrait.100%" height="landscape.100%, portrait.62%" margin="landscape.0px 0px 0px 0px , portrait. 0">
				</lido-image>`}
				<!-- text -->

				

				<lido-cell layout="flex" bg-Color="transparent"  visible="true" height="landscape.100%,portrait.auto" width="landscape.645px, portrait.97%" onEntry="this.align-content='center'; this.gap='32px';this.display='ruby';" margin="landscape.21px 0px 0px 61px, portrait.50px 6px 0px 64px">

					<lido-text tab-index="2" font-family="'Baloo Bhai 2'" visible="true" font-size="landscape.46px,portrait.54px" y="-10px" string="${args.text1}" bg-color="transparent" onEntry="this.position='relative'; this.fontWeight='600';this.display='inline'; this.padding='0px 20px 0px 0px'; "></lido-text>
					<lido-text tab-index="3" drop-attr="stretch" id="drop1" disable-edit="true" visible="true" width="164px" height="landscape.73px,portrait.77px" value="${args.answer1}"  type="drop" is-allow-only-one-drop="true" drop-Attr="stretch" onEntry="this.border-radius='10px';this.box-shoadow='';this.fontWeight='600'; this.margin-right='35px';" ></lido-text>
					<lido-text tab-index="4" font-family="'Baloo Bhai 2'" visible="true" font-size="landscape.46px,portrait.54px" y="-10px" string="${args.text2}" bg-color="transparent" onEntry="this.position='relative';this.fontWeight='600';this.display='inline';this.boxShadow='0 0 0'; this.padding='0px 21px 0px 0px';"></lido-text>
					<lido-text tab-index="5" font-family="'Baloo Bhai 2'" visible="true" font-size="landscape.46px,portrait.54px" y="-10px" string="${args.text3}" bg-color="transparent" onEntry="this.position='relative'; this.fontWeight='600';this.display='inline'; this.padding='0px 18px 0px 0px';"></lido-text>
					<lido-text tab-index="6" drop-attr="stretch" id="drop2" disable-edit="true" visible="true" width="164px" height="landscape.73px,portrait.77px" value="${args.answer2}" drop-Attr="stretch" type="drop" is-allow-only-one-drop="true" onEntry="this.border-radius='10px'; this.margin-right='35px';this.margin-top='17px'; this.fontWeight='600';" ></lido-text>
					<lido-text tab-index="7" font-family="'Baloo Bhai 2'" visible="true" font-size="landscape.46px,portrait.54px" y="-10px" string="${args.text4}" bg-color="transparent"  onEntry="this.position='relative'; this.fontWeight='600';this.display='inline'; this.padding='0px 20px 0px 0px'; "></lido-text>
					<lido-text tab-index="8" font-family="'Baloo Bhai 2'" visible="true" font-size="landscape.46px,portrait.54px" y="-10px" string="${args.text5}" bg-color="transparent" onEntry="this.position='relative'; this.fontWeight='600';this.display='inline'; this.padding='0px 20px 0px 0px'; "></lido-text>
					<lido-text tab-index="9" drop-attr="stretch" id="drop3" disable-edit="true"  visible="true" width="164px" height="landscape.73px,portrait.77px" value="${args.answer3}" drop-Attr="stretch" type="drop" is-allow-only-one-drop="true" onEntry="this.border-radius='10px'; this.margin-right='35px';this.margin-top='17px'; this.fontWeight='600'; "></lido-text>
					<lido-text tab-index="10" font-family="'Baloo Bhai 2'" visible="true" font-size="landscape.46px,portrait.54px" y="-10px" string="${args.text6}" bg-color="transparent" onEntry="this.position='relative'; this.fontWeight='600';this.display='inline'; this.padding='0px 20px 0px 0px';"></lido-text>
					<lido-text tab-index="11" font-family="'Baloo Bhai 2'" visible="true" font-size="landscape.46px,portrait.54px" y="-10px" string="${args.text7} " bg-color="transparent" onEntry="this.position='relative'; this.fontWeight='600';this.display='inline'; this.padding='0px 20px 0px 0px'; "></lido-text>
					<lido-text tab-index="12" id="drop4" disable-edit="true"  visible="true" width="164px" height="landscape.73px,portrait.77px" value="${args.answer4}" drop-Attr="stretch" type="drop" is-allow-only-one-drop="true" onEntry="this.border-radius='10px'; this.margin-right='35px'; this.fontWeight='600'; this.margin-top='17px';" ></lido-text>
					<lido-text tab-index="13" font-family="'Baloo Bhai 2'" visible="true" font-size="landscape.46px,portrait.54px" y="-10px" string="${args.text8}" bg-color="transparent" onEntry="this.position='relative'; this.fontWeight='600';this.display='inline'; this.padding='0px 20px 0px 0px'; "></lido-text>

				</lido-cell>
				
			</lido-cell>
			<lido-cell layout="landscape.row, portrait.wrap" childElementsLength="4" onEntry="this.gap='28px';    this.gridTemplateColumns = 'repeat(2, 1fr)';  this.gridTemplateRows = 'repeat(2, 1fr)';" visible="true" margin="landscape.6px 383px 74px 0px, portrait.34px 128px 0px -113px">
				<lido-text  font-family="'Baloo Bhai 2'" audio="${args.option1Audio}" id="option1" value="${args.option1}" tab-index="14" visible="true" bg-color="#fcf3b1" onEntry="this.padding='0px 48px'; this.borderRadius='24px';  this.fontWeight='600';" width="auto" height="landscape.87px, portrait.91px" string="${args.option1}" fontColor="black" font-size="landscape.46px,portrait.54px"   type="drag">
				</lido-text>
				<lido-text  font-family="'Baloo Bhai 2'" audio="${args.option2Audio}" id="option2" value="${args.option2}" tab-index="15" visible="true" bg-color="#fcf3b1" onEntry="this.padding='0px 48px'; this.borderRadius='24px';  this.fontWeight='600'; " width="auto" height="landscape.87px, portrait.91px" string="${args.option2}" fontColor="black" font-size="landscape.46px,portrait.54px"  type="drag">
				</lido-text>
				<lido-text  font-family="'Baloo Bhai 2'" audio="${args.option3Audio}" id="option3" value="${args.option3}" tab-index="16" visible="true" bg-color="#fcf3b1" onEntry="this.padding='0px 48px'; this.borderRadius='24px'; this.fontWeight='600'; " width="auto" height="landscape.87px, portrait.91px" string="${args.option3}" fontColor="black" font-size="landscape.46px,portrait.54px" type="drag">
				</lido-text>
				<lido-text  font-family="'Baloo Bhai 2'" audio="${args.option4Audio}" id="option4" value="${args.option4}" tab-index="17" visible="true" bg-color="#fcf3b1" onEntry="this.padding='0px 48px'; this.borderRadius='24px';  this.fontWeight='600';" width="auto" height="landscape.87px, portrait.91px" string="${args.option4}" fontColor="black" font-size="landscape.46px,portrait.54px"   type="drag">
				</lido-text>
			</lido-cell>
			
		</lido-cell>
	</lido-container>
    </main>

    `;
}
