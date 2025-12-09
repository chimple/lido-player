import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { arg } from 'mathjs';

const meta: Meta = {
  title: 'Templates/numberPair',
  argTypes: {
	isAllowOnlyCorrect: { control: 'boolean' },
	isContinueOnCorrect: { control: 'boolean' },
	question: { control: 'text' },
	questionAudio: {control: {
        type: 'file',
        accept: '.mp3, .wav, .ogg, audio/*'
      }},
	
	dropimg1: { control: 'file' },
	droptext1:{control:'text'},
	
	dropimg2: { control: 'file' },
	droptext2:{control:'text'},
	
	dropimg3: { control: 'file' },
	droptext3:{control:'text'},
	
	dropimg4: { control: 'file' },
	droptext4:{control:'text'},
	
	dropimg5: { control: 'file' },
	droptext5:{control:'text'},
	

	dragimg1: { control: 'file' },
	dragtext1:{control:'text'},
	
	dragimg2: { control: 'file' },
	dragtext2:{control:'text'},
		
	dragimg3: { control: 'file' },
	dragtext3:{control:'text'},
		
	dragimg4: { control: 'file' },
	dragtext4:{control:'text'},
		
	dragimg5: { control: 'file' },
	dragtext5:{control:'text'},
		

	option1:{control:'text'},
	option2:{control:'text'},
	option3:{control:'text'},
	option4:{control:'text'},
	option5:{control:'text'},
	
	correct1:{control:'text'},
	correct2:{control:'text'},
	correct3:{control:'text'},
	correct4:{control:'text'},
	correct5:{control:'text'},

  },
};
export default meta;

export const NumberPair: StoryObj = {
  args: {
	question: 'Match the number cards with the same number together.',
	isAllowOnlyCorrect: true,
	isContinueOnCorrect: true,

	dropimg1: '',
	droptext1: '1',

	dropimg2: '',
	droptext2: '2',

    dropimg3: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/NumberPair/dice3.png',
	droptext3: '',

    dropimg4: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/NumberPair/dice4.png',
	droptext4: '',

    dropimg5: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/NumberPair/dice5.png',
	droptext5:'',

    dragimg1: '',
	dragtext1: '1',	

    dragimg2: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/NumberPair/2sticks.png',
	dragtext2: '',

    dragimg3: '',
	dragtext3: '3',

	dragimg4:'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/NumberPair/4sticks.png',
	dragtext4: "",

	dragimg5:'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/NumberPair/dice5.png',
	dragtext5:'',
  
    correct1: '1',
    correct2: '2',
    correct3: '3',
    correct4: '4',
    correct5: '5',

	option1:'1',
	option2:'2',
	option3:'3',
	option4:'4',
	option5:'5',

  },

  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

function getContainerXml(args) {
  return `<main>
    <lido-container id="lido-container" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" is-allow-only-correct="${args.isAllowOnlyCorrect}" objective="${args.correct1},${args.correct2},${args.correct3},${args.correct4},${args.correct5}" visible="true" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/background-images/Number%20pair.png" dropAttr="EnableAnimation" custom-style="#heading,#drag1,#drag2,#drag3,#drag4,#drag5,#drag6,#drag7,#drop1,#drop2,#drop3,#drop4,#drop5,#drop6,#drop7{box-shadow: none !important;}" is-continue-on-correct="${args.isContinueOnCorrect}">
				<!-- Chimple Avatar -->
		<lido-cell layout="pos" id="pos1" disableEdit="true" value="pos2" height="landscape.205px,portrait.195px" width="landscape.209px,portrait.209px" x="landscape.2%,portrait.80%" y="landscape.85px,portrait.146px" ariaHidden="true" bgColor="transparent" visible="true"  onEntry="">
				<lido-avatar id="lido-avatar" disableEdit="true" visible="true"  height="100%"  width="100%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" altText="{chimpleCharacterRive}">
				</lido-avatar>
		</lido-cell>
			<!-- heading -->
			<lido-text id="heading" audio="" width="landscape.auto,portrait.70%" tabIndex="20" visible="true" string="${args.question}" font-family="'Baloo Bhai 2'" fontColor="#323232" font-size="landscape.36px,portrait.36px" bg-Color="transparent" onEntry="this.padding='0px 45px';this.fontWeight='600';this.speak='true'"  margin="landscape.120px 0px -25px 0px, portrait.160px 0px -39px 0px">
			</lido-text>
		<lido-cell visible="true" flex-direction="landscape., portrait.row-reverse" bg-color="transparent" layout="portrait.row,landscape.col" width="100%" height="100%" onEntry="">
			
			<lido-cell visible="true" margin="20px 0px 0px 0px" bg-color="transparent" layout="landscape.row,portrait.col" height="landscape.50%,portrait.96%" width="landscape.100%,portrait.100%" onEntry="this.gap='10px';">
				
				${(args.dropimg1.length=== 0 && args.droptext1.length === 0) ? '':`<lido-cell layout="row" visible="true" bg-color="transparent" height="landscape.100%,portrait.20%" width="landscape.20%,portrait.100%" onEntry="">
					<lido-cell layout="random" visible="true" width="100%" height="100%" bg-color="transparent" onEntry="">
						<lido-cell id="image1" audio="" value="${args.correct1}" tab-index="1" height="landscape.270px,portrait.240px" width="landscape.200px,portrait.180px" type="drop" layout="col" visible="true" bg-Color="white" onEntry="this.padding='0px'; this.borderRadius='8px';" 
						onCorrect="${args.dragtext1.length===0  ? "drop1.speak='true'": "drag1.speak='true'"}; lido-avatar.avatarAnimate='Success';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='1000';">
							${
								!args.dropimg1 || args.dropimg1.length===0?'':`<lido-image border-radius="8px 8px 0px 0px" margin="0px 0px 0px 0px"  visible="true" width="landscape.202px,portrait.180px" height="landscape.200px,portrait.180px" bg-color="transparent" src="${args.dropimg1}"></lido-image>`
							}

							${
								!args.droptext1 || args.droptext1 === "" ?'':`<lido-text id="drop1" visible="true" height="100%" font-family="'Baloo Bhai 2'" font-size="landscape.160px,portrait.160px" string="${args.droptext1}" bg-Color="transparent" onEntry="this.fontWeight='600';"></lido-text>`
							}
							
						</lido-cell>
					</lido-cell>
				</lido-cell>`}

				${(args.dropimg2.length=== 0 && args.droptext2.length === 0) ? '':`<lido-cell layout="row" visible="true" bg-color="transparent" height="landscape.100%,portrait.20%" width="landscape.20%,portrait.100%" onEntry="this.border-radius='6px';">
					<lido-cell layout="random" visible="true" width="100%" height="100%" bg-color="transparent" onEntry="">
						<lido-cell id="image2" class="boxShadow" audio="" value="${args.correct2}" tab-index="2" isAllowOnlyOneDrop="true" disable-edit="true" height="landscape.268px,portrait.240px" width="landscape.200px,portrait.178px" type="drop" layout="col" visible="true" bg-Color="white" onEntry="this.padding='0px';this.borderRadius='8px';" 
						onCorrect="${args.dragtext2.length===0 ? "drop2.speak='true';": "drag2.speak='true'"}; lido-avatar.avatarAnimate='Success';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='1000';">
							${
								!args.dropimg2 || args.dropimg2.length===0?'':`<lido-image border-radius="8px 8px 0px 0px" margin="0px 0px 0px 0px"  visible="true" width="landscape.202px,portrait.180px" height="landscape.200px,portrait.180px" bg-color="transparent" src="${args.dropimg2}"></lido-image>`
							}

							${
								!args.droptext2 || args.droptext2 === "" ?'':`<lido-text id="drop2" visible="true" height="100%" font-family="'Baloo Bhai 2'" font-size="landscape.160px,portrait.160px" string="${args.droptext2}" bg-Color="transparent" onEntry="this.fontWeight='600';"></lido-text>`
							}
						</lido-cell>
					</lido-cell>
				</lido-cell>`}

				${(args.dropimg3.length=== 0 && args.droptext3.length === 0) ? '':`<lido-cell layout="row" margin="landscape.50px 0px 0px 0px,portrait.0px 0px 0px 0px" visible="true" bg-color="transparent" height="landscape.100%,portrait.20%" width="landscape.20%,portrait.100%" onEntry="this.border-radius='5px';">
					<lido-cell layout="random" visible="true" width="100%" height="100%" bg-color="transparent" onEntry="">
						<lido-cell type="drop" audio="" id="image3" tab-index="3" isAllowOnlyOneDrop="true" disable-edit="true" value="${args.correct3}" height="landscape.268px,portrait.240px" width="landscape.200px,portrait.178px" layout="col" visible="true" bg-Color="white" 
						onEntry="this.padding='0px';this.borderRadius='8px';" onCorrect="${args.dragtext3.length===0 ?
							"drop3.speak='true'": "drag3.speak='true'"}; lido-avatar.avatarAnimate='Success';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='1000';">
							${
								!args.dropimg3 || args.dropimg3.length===0?'':`<lido-image border-radius="8px 8px 0px 0px" margin="0px 0px 0px 0px"  visible="true" width="landscape.202px,portrait.180px" height="landscape.200px,portrait.180px" bg-color="transparent" src="${args.dropimg3}"></lido-image>`
							}

							${
								!args.droptext3 || args.droptext3 === "" ?'':`<lido-text id="drop3" visible="true" height="100%" font-family="'Baloo Bhai 2'" font-size="landscape.160px,portrait.160px" string="${args.droptext3}" bg-Color="transparent" onEntry="this.fontWeight='600';" ></lido-text>`
							}
						</lido-cell>
					</lido-cell>
				</lido-cell>`}


				${(args.dropimg4.length=== 0 && args.droptext4.length === 0) ? '':`<lido-cell layout="row" margin="landscape.0px 0px 0px 0px,portrait.0px 0px 0px 0px" visible="true" bg-color="transparent" height="landscape.100%,portrait.20%" width="landscape.20%,portrait.100%" onEntry="this.border-radius='6px';">
					<lido-cell layout="random" visible="true" width="100%" height="100%" bg-color="transparent" onEntry="this.display='flex';">
						<lido-cell id="image4" audio="" value="${args.correct4}" isAllowOnlyOneDrop="true" disable-edit="true" tab-index="4" height="landscape.270px,portrait.240px" width="landscape.200px,portrait.178px" type="drop" layout="col" visible="true" bg-Color="white" onEntry="this.padding='0px';this.borderRadius='8px';"
						onCorrect="${args.dragtext4.length===0  ? "drop4.speak='true'": "drag4.speak='true'"}; lido-avatar.avatarAnimate='Success';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='1000';">
							${
								!args.dropimg4 || args.dropimg4.length===0?'':`<lido-image border-radius="8px 8px 0px 0px" margin="0px 0px 0px 0px"  visible="true" width="landscape.202px,portrait.180px" height="landscape.200px,portrait.180px" bg-color="transparent" src="${args.dropimg4}"></lido-image>`
							}

							${
								!args.droptext4 || args.droptext4 === "" ?'':`<lido-text id="drop4" visible="true" height="100%" font-family="'Baloo Bhai 2'" font-size="landscape.160px,portrait.160px" string="${args.droptext4}" bg-Color="transparent" onEntry="this.fontWeight='600';" ></lido-text>`
							}
						</lido-cell>
					</lido-cell>
				</lido-cell>`}

				${(args.dropimg5.length=== 0 && args.droptext5.length === 0) ? '':`<lido-cell layout="row" margin="landscape.0px 0px 0px 0px,portrait.0px 0px 0px 0px" visible="true" bg-color="transparent" height="landscape.100%,portrait.20%" width="landscape.20%,portrait.100%" onEntry="this.border-radius='6px';">
					<lido-cell layout="random" visible="true" width="100%" height="100%" bg-color="transparent" onEntry="this.display='flex';">
						<lido-cell type="drop" audio="" id="image5" value="${args.correct5}" tab-index="5" isAllowOnlyOneDrop="true" disable-edit="true" width="landscape.200px,portrait.178px" height="landscape.268px,portrait.240px" layout="col" visible="true" bg-Color="white" onEntry="this.padding='0px';this.borderRadius='8px';" onCorrect="${args.dragtext5.length===0  ? "drop5.speak='true'": "drag5.speak='true'"}; lido-avatar.avatarAnimate='Success';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='1000';">
							${
								!args.dropimg5 || args.dropimg5.length===0?'':`<lido-image border-radius="8px 8px 0px 0px" margin="0px 0px 0px 0px"  visible="true" width="landscape.202px,portrait.180px" height="landscape.200px,portrait.180px" bg-color="transparent" src="${args.dropimg5}"></lido-image>`
							}

							${
								!args.droptext5 || args.droptext5 === "" ?'':`<lido-text id="drop5" visible="true" height="100%" font-family="'Baloo Bhai 2'" font-size="landscape.160px,portrait.160px" string="${args.droptext5}" bg-Color="transparent" onEntry="this.fontWeight='600';" ></lido-text>`
							}
						</lido-cell>
					</lido-cell>
				</lido-cell>`}
			</lido-cell>




			<lido-cell visible="true" margin="landscape.0px 0px 0px 0px,portrait.0px 0px 0px 0px" bg-color="transparent" layout="landscape.row,portrait.col" height="landscape.40%,portrait.96%" width="100%" onEntry="">
				${(args.dragimg1.length=== 0 && args.dragtext1.length === 0) ? '':`<lido-cell layout="row" margin="landscape.0px 0px 0px 0px,portrait.0px 0px 0px 0px" visible="true" bg-color="transparent" height="landscape.100%,portrait.20%" width="landscape.20%,portrait.100%" onEntry="">
					<lido-cell layout="random" visible="true" width="100%" height="100%" bg-color="transparent">
						<lido-cell border-radius="8px" class="boxShadow" audio="" id="option1" value="${args.option1}" tab-index="6" height="landscape.268px,portrait.240px" width="landscape.200px,portrait.178px" type="drag" layout="col" visible="true" bg-Color="white" onEntry="this.padding='0px';">
							${
								!args.dragimg1 || args.dragimg1.length===0?'':`<lido-image border-radius="8px 8px 0px 0px" margin="0px 0px 0px 0px"  visible="true" width="landscape.202px,portrait.180px" height="landscape.200px,portrait.180px" bg-color="transparent" src="${args.dragimg1}"></lido-image>`
							}

							${
								!args.dragtext1 || args.dragtext1 === "" ?'':`<lido-text id="drag1" class="boxShadow" visible="true" height="100%" font-family="'Baloo Bhai 2'" font-size="landscape.160px,portrait.160px" string="${args.dragtext1}" bg-Color="transparent" onEntry="this.fontWeight='600';"></lido-text>`
							}
						</lido-cell>
					</lido-cell>
				</lido-cell>`}

				${(args.dragimg2.length=== 0 && args.dragtext2.length === 0) ? '':`<lido-cell layout="row" visible="true" bg-color="transparent" height="landscape.100%,portrait.20%" width="landscape.20%,portrait.100%" onEntry="this.border-radius='2px';">
					<lido-cell layout="random" visible="true" width="100%" height="100%" bg-color="transparent" onEntry="">
						<lido-cell border-radius="8px" audio="" id="option2" value="${args.option2}" tab-index="7" height="landscape.268px,portrait.240px" width="landscape.200px,portrait.178px" type="drag" layout="col" visible="true" bg-Color="white" onEntry="this.padding='0px';this.justifyContent='center'; ">
							${
								!args.dragimg2 || args.dragimg2.length===0?'':`<lido-image border-radius="8px 8px 0px 0px" margin="0px 0px 0px 0px"  visible="true" width="landscape.202px,portrait.180px" height="landscape.200px,portrait.180px" bg-color="transparent" src="${args.dragimg2}"></lido-image>`
							}

							${
								!args.dragtext2 || args.dragtext2 === "" ?'':`<lido-text id="drag2" visible="true" height="100%" font-family="'Baloo Bhai 2'" font-size="landscape.160px,portrait.160px" string="${args.dragtext2}" bg-Color="transparent" onEntry="this.fontWeight='600';"></lido-text>`
							}
						</lido-cell>
					</lido-cell>
				</lido-cell>`}

				${(args.dragimg3.length=== 0 && args.dragtext3.length === 0) ? '':`<lido-cell layout="row" margin="landscape.0px 0px 0px 0px,portrait.0px 0px 0px 0px" visible="true" bg-color="transparent" height="landscape.100%,portrait.20%" width="landscape.20%,portrait.100%" onEntry="this.border-radius='2px';">
					<lido-cell layout="random" visible="true" width="100%" height="100%" bg-color="transparent" onEntry="this.display='flex';">
						<lido-cell border-radius="8px" id="option3" audio="" value="${args.option3}" tab-index="8" height="landscape.268px,portrait.240px" width="landscape.200px,portrait.178px" type="drag" layout="col" visible="true" bg-Color="white" onEntry="this.padding='0px'; ">
							${
								!args.dragimg3 || args.dragimg3.length===0?'':`<lido-image border-radius="8px 8px 0px 0px" margin="0px 0px 0px 0px"  visible="true" width="landscape.202px,portrait.180px" height="landscape.200px,portrait.180px" bg-color="transparent" src="${args.dragimg3}"></lido-image>`
							}

							${
								!args.dragtext3 || args.dragtext3 === "" ?'':`<lido-text id="drag3" visible="true" height="100%" font-family="'Baloo Bhai 2'" font-size="landscape.160px,portrait.160px" string="${args.dragtext3}" bg-Color="transparent" onEntry="this.fontWeight='600';" ></lido-text>`
							}
						</lido-cell>
					</lido-cell>
				</lido-cell>`}

				${(args.dragimg4.length=== 0 && args.dragtext4.length === 0) ? '':`<lido-cell layout="row" margin="landscape.0px 0px 0px 0px,portrait.0px 0px 0px 0px" visible="true" bg-color="transparent" height="landscape.100%,portrait.20%" width="landscape.20%,portrait.100%" onEntry="this.border-radius='2px';">
					<lido-cell layout="random" visible="true" width="100%" height="100%" bg-color="transparent" onEntry="this.display='flex';">
						<lido-cell border-radius="8px" id="option4" audio="" value="${args.option4}" tab-index="9" height="landscape.268px,portrait.240px" width="landscape.200px,portrait.178px" type="drag" layout="col" visible="true" bg-Color="white" onEntry="this.padding='0px';">
							${
								!args.dragimg4 || args.dragimg4.length===0?'':`<lido-image border-radius="8px 8px 0px 0px" margin="0px 0px 0px 0px"  visible="true" width="landscape.202px,portrait.180px" height="landscape.200px,portrait.180px" bg-color="transparent" src="${args.dragimg4}"></lido-image>`
							}

							${
								!args.dragtext4 || args.dragtext4 === "" ?'':`<lido-text id="drag4" visible="true" height="100%" font-family="'Baloo Bhai 2'" font-size="landscape.160px,portrait.160px" string="${args.dragtext4}" bg-Color="transparent" onEntry="this.fontWeight='600';"></lido-text>`
							}
						</lido-cell>
					</lido-cell>
				</lido-cell>`}

				${(args.dragimg5.length=== 0 && args.dragtext5.length === 0) ? '':`<lido-cell layout="row" margin="landscape.0px 0px 0px 0px,portrait.0px 0px 0px 0px" visible="true" bg-color="transparent" height="landscape.100%,portrait.20%" width="landscape.20%,portrait.100%" onEntry="this.border-radius='2px';">
					<lido-cell layout="random" visible="true" width="100%" height="100%" bg-color="transparent" onEntry="">
						<lido-cell border-radius="8px"  id="option5" audio="" value="${args.option5}" tab-index="10" height="landscape.268px,portrait.240px" width="landscape.200px,portrait.178px" type="drag" layout="col" visible="true" bg-Color="white" onEntry="this.padding='0px'; ">
							${
								!args.dragimg5 || args.dragimg5.length===0?'':`<lido-image border-radius="8px 8px 0px 0px" margin="0px 0px 0px 0px"  visible="true" width="landscape.202px,portrait.180px" height="landscape.200px,portrait.180px" bg-color="transparent" src="${args.dragimg5}"></lido-image>`
							}

							${
								!args.dragtext5 || args.dragtext5 === "" ?'':`<lido-text id="drag5" visible="true" height="100%" font-family="'Baloo Bhai 2'" font-size="landscape.160px,portrait.160px" string="${args.dragtext5}" bg-Color="transparent" onEntry="this.fontWeight='600';"></lido-text>`
							}
						</lido-cell>
					</lido-cell>
				</lido-cell>`}
			</lido-cell>
		</lido-cell>
	</lido-container>
	</main>`;
}
