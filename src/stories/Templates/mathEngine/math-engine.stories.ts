import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Templates/MathEngine',
  argTypes: {
    option1: { control: 'text' },
    option2: { control: 'text' },
    option3: { control: 'text' },
    option4: { control: 'text' },
    option5: { control: 'text' },
    option6: { control: 'text' },
    option7: { control: 'text' },
    option8: { control: 'text' },
    option9: { control: 'text' },
  },
};
export default meta;

export const FillInTheBlanksStoryDrop: StoryObj = {
  args: {
    option1: '5',
    option2: '6',
    option3: '9',
    option4: '10',
    option5: '1',
    option6: '4',
    option7: '+',
    option8: '-',
    option9: '*',
  },
  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

function getContainerXml(args) {
  return `
  <main>
	<lido-container id="lido-container" objective="e,e,e,e" tabIndex="1" isContinueOnCorrect="true" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" equationCheck="$#pos12,$#pos13,$#pos14,$#pos15,$#pos16" showCheck="false" visible="true" bgColor="black">
		<!-- Background -->
		<lido-cell id="pos2" disableEdit="true" layout="pos" height="100%" width="100%" ariaHidden="true" x="0" y="0" z="0" bgColor="transparent" type="" visible="true" audio="col1.mp3" onTouch="" onCorrect="" onEntry="">
			<lido-image id="image2" disableEdit="true" value="image2" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/backgroundImage.png" z="0" width="1600px" height="900px" onEntry="" altText="{backgroundImage}">
			</lido-image>
		</lido-cell>
		<!-- Chimple Avatar -->
		<lido-pos id="pos1" disableEdit="true" value="pos1" height="350px" width="350px" x="landscape.1260px, portrait.265px" y="landscape.530px, portrait.835px" ariaHidden="true" z="1" bgColor="transparent" type="" visible="true" audio="col1.mp3" onTouch="" onCorrect="" onEntry="this.animation='rightToPlace 2.5s linear';">
			<lido-avatar id="lido-avatar" disableEdit="true" visible="true" height="350px" width="350px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" altText="{chimpleCharacterRive}">
			</lido-avatar>
			<lido-image id="image1" disableEdit="true" value="image1" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/Shadow.png" bgColor="transparent" width="186px" height="20px" x="77px" y="305px" altText="{shadowImage}">
			</lido-image>
		</lido-pos>
		<lido-cell visible="true" layout="col" bgColor="transparent" height="100%" width="100%" onEntry="">
			<lido-cell visible="true" width="60%" height="10%" layout="wrap" onEntry="this.justify-self=center;">
				<lido-cell id="pos12" tabIndex="2" type="drop" minDrops="1" maxDrops="1" height="80%" width="70%" bgColor="red">
				</lido-cell>
				<lido-cell id="pos13" tabIndex="3" type="drop" minDrops="1" maxDrops="1" height="80%" width="70%" bgColor="red">
				</lido-cell>
				<lido-cell id="pos14" tabIndex="4" type="drop" minDrops="1" maxDrops="1" height="80%" width="70%" bgColor="red">
				</lido-cell>
				<lido-text id="pos15" value="==" height="80%" width="70%" string="  =  ">
				</lido-text>
				<lido-cell id="pos16" tabIndex="5" type="drop" minDrops="1" maxDrops="1" height="80%" width="70%" bgColor="red">
				</lido-cell>
			</lido-cell>
			<lido-cell visible="true" bgColor="transparent" x="20%" y="40%" width="60%" height="20%" layout="pos" onEntry="">
				<lido-cell visible="true" width="100%" height="100%" layout="wrap" onEntry="">
					<lido-text id="text5" type="drag" value="${args.option1}" height="80%" width="30%" string="${args.option1}">
					</lido-text>
					<lido-text id="text6" type="drag" value="${args.option2}" height="80%" width="30%" string="${args.option2}">
					</lido-text>
					<lido-text id="text9" type="drag" value="${args.option3}" height="80%" width="30%" string="${args.option3}">
					</lido-text>
					<lido-text id="text10" type="drag" value="${args.option4}" height="80%" width="30%" string="${args.option4}">
					</lido-text>
					<lido-text id="text1" type="drag" value="${args.option5}" height="80%" width="30%" string="${args.option5}">
					</lido-text>
					<lido-text id="text4" type="drag" value="${args.option6}" height="80%" width="30%" string="${args.option6}">
					</lido-text>
					<lido-text id="text11" type="drag" value="${args.option7}" height="80%" width="30%" string="${args.option7}">
					</lido-text>
					<lido-text id="text12" type="drag" value="${args.option8}" height="80%" width="30%" string="${args.option8}">
					</lido-text>
					<lido-text id="text13" type="drag" value="${args.option9}" height="80%" width="30%" string="${args.option9}">
					</lido-text>
				</lido-cell>
			</lido-cell>
		</lido-cell>
	</lido-container>    
    </main>
    `;
}
