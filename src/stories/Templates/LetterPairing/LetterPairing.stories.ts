import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { arg } from 'mathjs';

const meta: Meta = {
  title: 'Templates/letterPairing',
};
export default meta;

export const LetterPairing: StoryObj = {
  args: {
    dragimg1: 'https://aeakbcdznktpsbrfsgys.storage.supabase.co/v1/object/public/template-assets/LetterPair/Cat.png',
    dragimg2: 'https://aeakbcdznktpsbrfsgys.storage.supabase.co/v1/object/public/template-assets/LetterPair/Mouse_withbg.png',
    dragimg3: 'https://aeakbcdznktpsbrfsgys.storage.supabase.co/v1/object/public/template-assets/LetterPair/Mouse_nobg.png',

	dropimg1: 'https://aeakbcdznktpsbrfsgys.storage.supabase.co/v1/object/public/template-assets/LetterPair/Cat.png',
    dropimg2: 'https://aeakbcdznktpsbrfsgys.storage.supabase.co/v1/object/public/template-assets/LetterPair/Mouse_withbg.png',
    dropimg3: 'https://aeakbcdznktpsbrfsgys.storage.supabase.co/v1/object/public/template-assets/LetterPair/Mouse_nobg.png',
  

    dragtext1: 'Cat',
    dragtext2: '34 Books + 45 Books',
    dragtext3: 'Camel',
    dragtext4: 'Mouse',

	droptext1: 'Cat',
    droptext2: '34 Books + 45 Books',
    droptext3: 'Camel',
    droptext4: 'Mouse',

    correct1: 'Cat',
    correct2: 'Books',
    correct3: 'Kitten',
    correct4: 'Smallmouse',
    correct5: 'Bigmouse',

	option1:'Cat',
	option2:'Books',
	option3:'Kitten',
	option4:'Smallmouse',
	option5:'Bigmouse',
  },

  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

function getContainerXml(args) {
  return `<main>
    <lido-container id="lido-container" is-allow-only-correct="true" objective="${args.correct1},${args.correct2},${args.correct3},${args.correct4},${args.correct5}" visible="true" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/phonic-tractor/bg-image.png" dropAttr="EnableAnimation">
				<!-- Chimple Avatar -->
		<lido-cell layout="pos" id="pos1" disableEdit="true" value="pos2" height="landscape.205px,portrait.195px" width="landscape.209px,portrait.209px" x="landscape.12px,portrait.-17px" y="landscape.68px,portrait.146px" ariaHidden="true" bgColor="transparent" visible="true"  onEntry="">
				<lido-avatar id="lido-avatar" disableEdit="true" visible="true"  height="100%"  width="100%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" altText="{chimpleCharacterRive}">
				</lido-avatar>
		</lido-cell>
			<!-- heading -->
			<lido-text id="heading" width="landscape.100%,portrait.70%" tabIndex="20" visible="true" string="Match the jump number to the number reached when skip jumping by 3." font-family="'Baloo Bhai 2'" fontColor="#323232" font-size="landscape.36px,portrait.36px" bg-Color="transparent" onEntry="this.fontWeight='600';"  margin="landscape.120px 0px -25px 0px, portrait.160px 0px -39px 0px" >
			</lido-text>
		<lido-cell visible="true" flex-direction="landscape., portrait.row-reverse" bg-color="transparent" layout="portrait.row,landscape.col" width="100%" height="100%" onEntry="">
			
			<lido-cell visible="true" margin="20px 0px 0px 0px" bg-color="transparent" layout="landscape.row,portrait.col" height="landscape.50%,portrait.96%" width="landscape.100%,portrait.100%" onEntry="this.gap='10px';">
				
				<lido-cell layout="row" visible="true" bg-color="transparent" height="landscape.100%,portrait.20%" width="landscape.20%,portrait.100%" onEntry="">
					<lido-cell layout="random" visible="true" width="100%" height="100%" bg-color="transparent" onEntry="">
						<lido-cell id="image1" value="${args.correct1}" tab-index="1" height="landscape.270px,portrait.240px" width="landscape.200px,portrait.180px" type="drop" layout="col" visible="true" bg-Color="white" onEntry="this.padding='0px'; this.justifyContent='flex-start';this.borderRadius='15px';">
							<lido-image border-radius="4px" margin="0px 0px 0px 0px"  visible="true" width="landscape.202px,portrait.180px" height="landscape.200px,portrait.180px" bg-color="transparent" src="${args.dragimg1}"></lido-image>
							<lido-text visible="true" height="100%" font-family="'Baloo Bhai 2'" font-size="landscape.36px,portrait.36px" string="${args.dragtext1}" bg-Color="transparent" onEntry="this.fontWeight='600';" ></lido-text>
						</lido-cell>
					</lido-cell>
				</lido-cell>

				<lido-cell layout="row" visible="true" bg-color="transparent" height="landscape.100%,portrait.20%" width="landscape.20%,portrait.100%" onEntry="this.border-radius='6px';">
					<lido-cell layout="random" visible="true" width="100%" height="100%" bg-color="transparent" onEntry="">
						<lido-cell id="image2" value="${args.correct2}" tab-index="2" isAllowOnlyOneDrop="true" disable-edit="true" height="landscape.268px,portrait.240px" width="landscape.200px,portrait.178px" type="drop" layout="col" visible="true" bg-Color="white" onEntry="this.padding='0px';this.justifyContent='center';this.borderRadius='15px';">
							<lido-text height="100%" visible="true" font-family="'Baloo Bhai 2'" font-size="landscape.36px,portrait.36px" string="${args.dragtext2}" bg-Color="transparent" onEntry="this.fontWeight='600';"></lido-text>
						</lido-cell>
					</lido-cell>
				</lido-cell>

				<lido-cell layout="row" margin="landscape.50px 0px 0px 0px,portrait.0px 0px 0px 0px" visible="true" bg-color="transparent" height="landscape.100%,portrait.20%" width="landscape.20%,portrait.100%" onEntry="this.border-radius='5px';">
					<lido-cell layout="random" visible="true" width="100%" height="100%" bg-color="transparent" onEntry="">
						<lido-cell type="drop" id="image3" tab-index="3" isAllowOnlyOneDrop="true" disable-edit="true" value="${args.correct3}" height="landscape.268px,portrait.240px" width="landscape.200px,portrait.178px" layout="col" visible="true" bg-Color="white" onEntry="this.padding='0px';this.borderRadius='15px';">
							<lido-image margin="0px 0px 0px 0px" visible="true" width="landscape.200px,portrait.178px" height="landscape.200px,portrait.178px" bg-color="transparent" src="${args.dragimg1}"></lido-image>
						</lido-cell>
					</lido-cell>
				</lido-cell>


				<lido-cell layout="row" margin="landscape.0px 0px 0px 0px,portrait.0px 0px 0px 0px" visible="true" bg-color="transparent" height="landscape.100%,portrait.20%" width="landscape.20%,portrait.100%" onEntry="this.border-radius='6px';">
					<lido-cell layout="random" visible="true" width="100%" height="100%" bg-color="transparent" onEntry="this.display='flex';">
						<lido-cell id="image4" value="${args.correct4}" isAllowOnlyOneDrop="true" disable-edit="true" tab-index="4" height="landscape.270px,portrait.240px" width="landscape.200px,portrait.178px" type="drop" layout="col" visible="true" bg-Color="white" onEntry="this.padding='0px';this.borderRadius='15px';">
							<lido-image margin="0px 0px 0px 0px" visible="true" width="landscape.200px,portrait.178px" height="landscape.200px,portrait.133px" bg-color="transparent" src="${args.dragimg2}"></lido-image>
						</lido-cell>
					</lido-cell>
				</lido-cell>

				<lido-cell layout="row" margin="landscape.0px 0px 0px 0px,portrait.0px 0px 0px 0px" visible="true" bg-color="transparent" height="landscape.100%,portrait.20%" width="landscape.20%,portrait.100%" onEntry="this.border-radius='6px';">
					<lido-cell layout="random" visible="true" width="100%" height="100%" bg-color="transparent" onEntry="this.display='flex';">
						<lido-cell type="drop" id="image5" value="${args.correct5}" tab-index="5" isAllowOnlyOneDrop="true" disable-edit="true" width="landscape.200px,portrait.178px" height="landscape.268px,portrait.240px" layout="col" visible="true" bg-Color="white" onEntry="this.padding='0px';this.borderRadius='15px';">
							<lido-image border-radius="2px" visible="true" width="landscape.200px,portrait.178px" height="landscape.200px,portrait.178px" bg-color="transparent" src="${args.dragimg3}"></lido-image>
							<lido-text visible="true" font-family="'Baloo Bhai 2'" font-size="landscape.36px,portrait.36px" string="${args.dragtext4}" bg-Color="transparent" onEntry="this.fontWeight='600';" ></lido-text>
						</lido-cell>
					</lido-cell>
				</lido-cell>
			</lido-cell>




			<lido-cell visible="true" margin="landscape.0px 0px 0px 0px,portrait.0px 0px 0px 0px" bg-color="transparent" layout="landscape.row,portrait.col" height="landscape.40%,portrait.96%" width="100%" onEntry="">
				<lido-cell layout="row" margin="landscape.0px 0px 0px 0px,portrait.0px 0px 0px 0px" visible="true" bg-color="transparent" height="landscape.100%,portrait.20%" width="landscape.20%,portrait.100%" onEntry="">
					<lido-cell layout="random" visible="true" width="100%" height="100%" bg-color="transparent">
						<lido-cell id="option1" value="${args.option1}" tab-index="6" height="landscape.268px,portrait.240px" width="landscape.200px,portrait.178px" type="drag" layout="col" visible="true" bg-Color="white" onEntry="this.padding='0px';">
							<lido-text visible="true" font-family="'Baloo Bhai 2'" font-size="landscape.36px,portrait.36px" string="${args.droptext1}" bg-Color="transparent" onEntry="this.fontWeight='600';" ></lido-text>
						</lido-cell>
					</lido-cell>
				</lido-cell>

				<lido-cell layout="row" visible="true" bg-color="transparent" height="landscape.100%,portrait.20%" width="landscape.20%,portrait.100%" onEntry="this.border-radius='2px';">
					<lido-cell layout="random" visible="true" width="100%" height="100%" bg-color="transparent" onEntry="">
						<lido-cell id="option2" value="${args.option2}" tab-index="7" height="landscape.268px,portrait.240px" width="landscape.200px,portrait.178px" type="drag" layout="col" visible="true" bg-Color="white" onEntry="this.padding='0px';this.justifyContent='center';">
							<lido-text visible="true" font-family="'Baloo Bhai 2'" font-size="landscape.36px,portrait.36px" string="${args.droptext2}" bg-Color="transparent" onEntry="this.fontWeight='600';" ></lido-text>
						</lido-cell>
					</lido-cell>
				</lido-cell>

					<lido-cell layout="row" margin="landscape.0px 0px 0px 0px,portrait.0px 0px 0px 0px" visible="true" bg-color="transparent" height="landscape.100%,portrait.20%" width="landscape.20%,portrait.100%" onEntry="this.border-radius='2px';">
					<lido-cell layout="random" visible="true" width="100%" height="100%" bg-color="transparent" onEntry="this.display='flex';">
						<lido-cell id="option3" value="${args.option3}" tab-index="8" height="landscape.268px,portrait.240px" width="landscape.200px,portrait.178px" type="drag" layout="col" visible="true" bg-Color="white" onEntry="this.padding='0px';">
							<lido-image margin="0px 0px 0px 0px" disable-edit="true" visible="true" width="landscape.200px,portrait.178px" height="landscape.200px,portrait.133px" bg-color="transparent" src="${args.dropimg2}"></lido-image>
							<lido-text visible="true" font-family="'Baloo Bhai 2'" font-size="landscape.36px,portrait.36px" string="${args.droptext3}" bg-Color="transparent" onEntry="this.fontWeight='600';"></lido-text>
						</lido-cell>
					</lido-cell>
				</lido-cell>

				<lido-cell layout="row" margin="landscape.0px 0px 0px 0px,portrait.0px 0px 0px 0px" visible="true" bg-color="transparent" height="landscape.100%,portrait.20%" width="landscape.20%,portrait.100%" onEntry="this.border-radius='2px';">
					<lido-cell layout="random" visible="true" width="100%" height="100%" bg-color="transparent" onEntry="this.display='flex';">
						<lido-cell id="option4" value="${args.option4}" tab-index="9" height="landscape.270px,portrait.240px" width="landscape.200px,portrait.178px" type="drag" layout="col" visible="true" bg-Color="white" onEntry="this.padding='0px'; this.justifyContent='flex-start';">
							<lido-image border-radius="4px" margin="0px 0px 0px 0px" disable-edit="true" visible="true" width="landscape.202px,portrait.178px" height="landscape.200px,portrait.178px" bg-color="transparent" src="${args.dropimg1}"></lido-image>
							<lido-text visible="true" height="100%" font-family="'Baloo Bhai 2'" font-size="landscape.36px,portrait.36px" string="${args.droptext3}" bg-Color="transparent" onEntry="this.fontWeight='600';" ></lido-text>
						</lido-cell>
					</lido-cell>
				</lido-cell>

					<lido-cell layout="row" margin="landscape.0px 0px 0px 0px,portrait.0px 0px 0px 0px" visible="true" bg-color="transparent" height="landscape.100%,portrait.20%" width="landscape.20%,portrait.100%" onEntry="this.border-radius='2px';">
					<lido-cell layout="random" visible="true" width="100%" height="100%" bg-color="transparent" onEntry="">
						<lido-cell id="option5" value="${args.option5}" tab-index="10" height="landscape.268px,portrait.240px" width="landscape.200px,portrait.178px" type="drag" layout="col" visible="true" bg-Color="white" onEntry="this.padding='0px';">
							<lido-image margin="0px 0px 0px 0px" disable-edit="true" visible="true" width="landscape.200px,portrait.178px" height="landscape.200px,portrait.178px" bg-color="transparent" src="${args.dropimg3}"></lido-image>
						</lido-cell>
					</lido-cell>
				</lido-cell>
			</lido-cell>
		</lido-cell>
	</lido-container>
	</main>`;
}
