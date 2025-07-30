import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Templates/create-sentence',
  argTypes: {
		heading: { control: 'text'},
		headingAudio: {control: {
        type: 'file',
        accept: '.mp3, .wav, .ogg, audio/*'
      }},
    questionImg: { control: 'file' },
		option1: {control: 'text'},
		option1Audio: {control: {
        type: 'file',
        accept: '.mp3, .wav, .ogg, audio/*'
      }},
    option2: {control: 'text'},
		option2Audio: {control: {
        type: 'file',
        accept: '.mp3, .wav, .ogg, audio/*'
      }},
    option3: {control: 'text'},
		option3Audio: {control: {
        type: 'file',
        accept: '.mp3, .wav, .ogg, audio/*'
      }},
    option4: {control: 'text'},
		option4Audio: {control: {
        type: 'file',
        accept: '.mp3, .wav, .ogg, audio/*'
      }},
    option5: {control: 'text'},
		option5Audio: {control: {
        type: 'file',
        accept: '.mp3, .wav, .ogg, audio/*'
      }},
    option6: {control: 'text'},
		option6Audio: {control: {
        type: 'file',
        accept: '.mp3, .wav, .ogg, audio/*'
      }},
    option7: {control: 'text'},
		option7Audio: {control: {
        type: 'file',
        accept: '.mp3, .wav, .ogg, audio/*'
      }},
    option8: {control: 'text'},
		option8Audio: {control: {
        type: 'file',
        accept: '.mp3, .wav, .ogg, audio/*'
      }},
    correct1: {control: 'text'},
    correct2: {control: 'text'},
    correct3: {control: 'text'},
    correct4: {control: 'text'},
    correct5: {control: 'text'},
    correct6: {control: 'text'},
    correct7: {control: 'text'},
    correct8: {control: 'text'},
  },
};
export default meta;

export const CreateSentence: StoryObj = {
  args: {
    heading: 'Who is the father of the nation?',
		headingAudio: '',
    questionImg: ['https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/create%20sentence/Mahatma-Gandhi.jpg'],
    option1: 'called',
		option1Audio: '',
    option2: 'the',
		option2Audio: '',
    option3: 'Mahatma',
		option3Audio: '',
    option4: 'is',
		option4Audio: '',
    option5: 'of',
		option5Audio: '',
    option6: 'Father',
		option6Audio: '',
    option7: 'India',
		option7Audio: '',
    option8: 'Gandhi',
		option8Audio: '',
    correct1: 'Mahatma',
		correct2: 'Gandhi',
		correct3: 'is',
		correct4: 'called',
		correct5: 'the',
		correct6: 'Father',
		correct7: 'of',
		correct8: 'India',
  },

  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

function getContainerXml(args) {
  return `<main>
	<lido-container id="lido-container" is-allow-only-correct="true" value="maincontainer" objective="${args.correct1},${args.correct2},${args.correct3},${args.correct4},${args.correct5},${args.correct6},${args.correct7},${args.correct8}" x="0" y="0" z="0" bg-color="transparent" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/create%20sentence/Spring.png" visible="true" audio="" onCorrect="this.sleep='1000';speak-con.speak='true';lido-avatar.avatarAnimate='Success'; pos5.animation='placeToLeft 2.5s linear';pos2.animation='placeToLeft 2.5s linear'; this.sleep='2000';" onEntry="" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="false"  appendToDropOnCompletion="true">
		<lido-cell visible="false" id="speak-con">
			<lido-text id="sentenceText" string="${args.correct}"/>
		</lido-cell>
		<lido-cell id="row1" layout="col" height="100%" width="100%" visible="true" bg-Color="transparent">
			
			<lido-text  show-speak-icon="true"  margin="60px 0px -139px 0px"  visible="true" bg-color="transparent" y="landscape.30px, portrait.79px" onEntry="this.padding='0px 45px'; this.fontWeight='600';  " audio="${args.headingAudio}" width="auto" height="5%" string="${args.heading}" font-family="'Baloo 2', serif" font-size="36px" z="2" >
					</lido-text>
			<!-- Truck -->
			<lido-cell id="col" layout="col" disable-edit="true" value="pos" aria-hidden="true" x="0" y="0" z="0" bg-color="transparent" type="" visible="true" audio="" onTouch="" onCorrect="" width="100%" height="100%" onEntry="">
				<lido-cell id="pos2" layout="pos" disable-edit="true" value="pos" aria-hidden="true" x="0" y="landscape.29px,portrait.0px" z="0" bg-color="transparent" type="" visible="true" audio="" onTouch="" width="100%" height="100%" onEntry="this.animation='rightToPlace 2.5s linear'; this.sleep='2000'">
					<lido-image width="landscape.1477px, portrait.200%" height="landscape.139%, portrait.100%" y="landscape.-28%, portrait.-7%" x="landscape.0%, portrait.-73%" id="image1" disable-edit="true" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/create%20sentence/blueTruck.png" onEntry="">
					</lido-image>
					<lido-image width="landscape.16%, portrait.32%" y="landscape.17%, portrait.26%" x="landscape.51%, portrait.35%" z="2" id="image2" disable-edit="true" visible="true" src="${args.questionImg}" onEntry="">
					</lido-image>
					<lido-cell layout="wrap" visible="true" width="landscape.50%, portrait.88%" y="landscape.48%, portrait.48%" x="landscape.35%,portrait.7%" z="2" onEntry="this.gridTemplateColumns = 'repeat(4, 1fr)';  this.gridTemplateRows = 'repeat(2, 1fr)';this.position='relative';this.gap='45px';" bg-color="transparent">
					<lido-text id="drop1" drop-attr="stretch"  value="${args.correct1}" tab-index="2" is-allow-only-one-drop="true" visible="true"  onEntry="this.background='transparent';  this.borderRadius='15px'; " width="150px" height="80px"   type="drop">
					</lido-text>
					<lido-text id="drop2"  drop-attr="stretch" value="${args.correct2}" tab-index="3" is-allow-only-one-drop="true"  visible="true" onEntry=" this.background='transparent'; this.borderRadius='15px'; " width="150px" height="80px"   z="2" type="drop">
					</lido-text>
					<lido-text id="drop3"  drop-attr="stretch" value="${args.correct3}" tab-index="4" is-allow-only-one-drop="true"  visible="true"  onEntry=" this.background='transparent'; this.borderRadius='15px'; " width="150px" height="80px"   z="2" type="drop">
					</lido-text>
					<lido-text id="drop4"  drop-attr="stretch"  value="${args.correct4}" tab-index="5" is-allow-only-one-drop="true" visible="true"  onEntry=" this.background='transparent'; this.borderRadius='15px'; " width="150px" height="80px"   z="2" type="drop">
					</lido-text>
					<lido-text id="drop5"  drop-attr="stretch" value="${args.correct5}" tab-index="6" is-allow-only-one-drop="true" visible="true"  onEntry=" this.background='transparent'; this.borderRadius='15px'; " width="150px" height="80px"   z="2" type="drop">
					</lido-text>
					<lido-text id="drop6"  drop-attr="stretch" value="${args.correct6}" tab-index="7" is-allow-only-one-drop="true" visible="true"  onEntry=" this.background='transparent'; this.borderRadius='15px'; " width="150px" height="80px"   z="2" type="drop">
					</lido-text>
					<lido-text id="drop7"  drop-attr="stretch" value="${args.correct7}" tab-index="8" is-allow-only-one-drop="true" visible="true"  onEntry=" this.background='transparent'; this.borderRadius='15px'; " width="150px" height="80px"   z="2" type="drop">
					</lido-text>
					<lido-text id="drop8"  drop-attr="stretch"  value="${args.correct8}" tab-index="9" is-allow-only-one-drop="true" visible="true"  onEntry=" this.background='transparent'; this.borderRadius='15px'; " width="150px" height="80px"   z="2" type="drop">
					</lido-text>
				</lido-cell>

				</lido-cell>
				<lido-cell delay-visible="2650" layout="landscape.flex,portrait.wrap" visible="true" width="landscape.86%, portrait.88%" y="landscape.65%, portrait.62%" x="landscape.4%,portrait.0px" z="2" onEntry="this.gridTemplateColumns = 'repeat(4, 1fr)';  this.gridTemplateRows = 'repeat(2, 1fr)';this.position='relative';this.gap='40px';">

					<lido-text id="option1" show-speak-icon="true" audio="${args.option1Audio}" value="${args.option1}" tab-index="9"  visible="true" bg-color="#FCF3B1" onEntry="this.padding='0px 40px';this.borderRadius='25px'; this.boxShadow='unset'; this.fontWeight='800';  " width="auto" height="84px" string="${args.option1}" font-family="'Baloo 2', serif" font-size="24px" z="2" type="drag">
					</lido-text>
					<lido-text id="option2" show-speak-icon="true" audio="${args.option2Audio}" value="${args.option2}" tab-index="10"  visible="true" bg-color="#FCF3B1" onEntry="this.padding='0px 40px';this.borderRadius='25px'; this.boxShadow='unset'; this.fontWeight='800'; " width="auto" height="84px" string="${args.option2}" font-family="'Baloo 2', serif" font-size="24px" z="2" type="drag">

					</lido-text>
					<lido-text id="option3" show-speak-icon="true" audio="${args.option3Audio}" value="${args.option3}" tab-index="11"  visible="true" bg-color="#FCF3B1" onEntry="this.padding='0px 40px';this.borderRadius='25px'; this.boxShadow='unset'; this.fontWeight='800'; " width="auto" height="84px" string="${args.option3}" font-family="'Baloo 2', serif" font-size="24px" z="2" type="drag">
					</lido-text>
					<lido-text id="option4" show-speak-icon="true" audio="${args.option4Audio}" value="${args.option4}" tab-index="12"  visible="true" bg-color="#FCF3B1" onEntry="this.padding='0px 40px';this.borderRadius='25px'; this.boxShadow='unset'; this.fontWeight='800'; " width="auto" height="84px" string="${args.option4}" font-family="'Baloo 2', serif" font-size="24px" z="2" type="drag">
					</lido-text>
					<lido-text id="option5" show-speak-icon="true" audio="${args.option5Audio}" value="${args.option5}" tab-index="13"  visible="true" bg-color="#FCF3B1" onEntry="this.padding='0px 40px';this.borderRadius='25px'; this.boxShadow='unset'; this.fontWeight='800'; " width="auto" height="84px" string="${args.option5}" font-family="'Baloo 2', serif" font-size="24px" z="2" type="drag">
					</lido-text>
					<lido-text id="option6" show-speak-icon="true" audio="${args.option6Audio}" value="${args.option6}" tab-index="14"  visible="true" bg-color="#FCF3B1" onEntry="this.padding='0px 40px';this.borderRadius='25px'; this.boxShadow='unset'; this.fontWeight='800';" width="auto" height="84px" string="${args.option6}" font-family="'Baloo 2', serif" font-size="24px" z="2" type="drag">
					</lido-text>
					<lido-text id="option7" show-speak-icon="true" audio="${args.option7Audio}" value="${args.option7}" tab-index="15"  visible="true" bg-color="#FCF3B1" onEntry="this.padding='0px 40px';this.borderRadius='25px'; this.boxShadow='unset'; this.fontWeight='800'; " width="auto" height="84px" string="${args.option7}" font-family="'Baloo 2', serif" font-size="24px" z="2" type="drag">
					</lido-text>
					<lido-text id="option8" show-speak-icon="true" audio="${args.option8Audio}" value="${args.option8}" tab-index="16"  visible="true" bg-color="#FCF3B1" onEntry="this.padding='0px 40px';this.borderRadius='25px'; this.boxShadow='unset'; this.fontWeight='800'; " width="auto" height="84px" string="${args.option8}" font-family="'Baloo 2', serif" font-size="24px" z="2" type="drag">
					</lido-text>
				</lido-cell>
				<lido-cell layout="row" visible="true" width="landscape.70%, portrait.88%" y="landscape.21%, portrait.42%" x="0%" z="2" onEntry="this.position='relative'">
					
				</lido-cell>
			</lido-cell>
				<!-- avatar -->
			<lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.408px,portrait.327px" width="landscape.311px,portrait.294px" x="landscape.85%, portrait.640px" y="landscape.43%, portrait.172px" aria-hidden="true" z="-13" bg-color="transparent" visible="true" onEntry="this.animation='rightToPlace 2.5s linear';">
				<lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"   src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
				</lido-avatar>
				<lido-image id="image1" disable-edit="true" value="image1" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/Shadow.png" bg-color="transparent" width="186px" height="20px" x="landscape.61px,portrait.103px" y="landscape.315px,portrait.353px" alt-text="{shadowImage}">
				</lido-image>
			
			</lido-cell>
		</lido-cell>
	</lido-container>	
	</main>`;
}
