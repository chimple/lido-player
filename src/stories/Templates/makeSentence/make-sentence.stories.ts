import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Templates/MakeSentence',
	argTypes: {
		options: {control: "object"}, 
		Answer: {control: "text"} 
	}
};
export default meta;

export const QuestionAndOptions: StoryObj = {
	args: {
    options: ["postponed","has","The","game","been","indefinitely"],
    Answer: 'The game has been indefinitely postponed',
	},
	
  render: args => {
		const xml = getContainerXml(args);
		return html`<lido-home .xmlData="${xml}"></lido-home>`
	},
};

function getContainerXml(args){
  const objective = args.Answer.split(' ').map(word => `${word}`).join(',');
	return `<main>
    	<lido-container id="lido-container" objective="${objective}" tabIndex="1" visible="true" bgColor="#B1BEFD" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" isContinueOnCorrect="false" showCheck="true">
      <!-- Chimple Avatar -->
      <lido-pos id="pos1" disableEdit="true" value="pos1" height="350px" width="350px" x="1170px" y="105px" ariaHidden="true" z="1" bgColor="transparent" type="" visible="true" audio="col1.mp3" onTouch="" onCorrect="" onEntry="">
        <lido-avatar id="lido-avatar" disableEdit="true" visible="true" height="350px" width="350px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" altText="{chimpleCharacterRive}">
        </lido-avatar>
        <lido-image id="image1" disableEdit="true" value="image1" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/Shadow.png" bgColor="transparent" width="186px" height="20px" x="77px" y="305px" altText="{shadowImage}">
        </lido-image>
      </lido-pos>

      <!-- Check Button -->
      <lido-pos id="pos1" disableEdit="true" value="pos1" height="70px" width="150px" x="1500px" y="105px" ariaHidden="true" z="1" bgColor="transparent" type="" visible="true" audio="col1.mp3" onTouch="" onCorrect="" onEntry="">
        <lido-text id="lido-checkButton" bgColor="#5b5bd3" width="150px" height="70px" string="Check" type="click" font="'Baloo 2', serif" font-size="30px" fontColor="white" onEntry="this.fontWeight='800'; this.addClass='lido-disable-check-button';"></lido-text>
      </lido-pos>

      <lido-text visible="true" string="${args.Answer}" value="${args.Answer}" onEntry="this.padding='10px 30px'; this.fontWeight='800'; this.boxShadow='unset';" bgColor="transparent" font="'Baloo 2', serif" font-size="40px"></lido-text>
      <lido-col visible="true" bgColor="white" height="750px" width="1300px" onEntry="this.gap='30px';">
        <lido-wrap visible="true" height="280px" width="800px" type="blank" bgColor="#efbbef" flex="true" onEntry="this.padding='30px'; this.borderRadius='20px';"	>
        </lido-wrap>
        <lido-wrap visible="true" height="280px" width="800px" type="blank" bgColor="grey" onEntry="this.padding='30px'; this.borderRadius='20px'; this.gridTemplateColumns='auto auto auto'; this.alignContent='space-around'; this.justifyItems='center';">
          ${args.options.map(option => `
            <lido-text visible="true" type="word" width="fit-content" height="fit-content" string="${option}" value="${option}" onEntry="this.padding='10px 30px'; this.fontWeight='800';" font="'Baloo 2', serif" font-size="30px"></lido-text>
            `).join('')}
        </lido-wrap>
        <!-- <lido-col visible="true" height="400px" width="1000px" bgColor="grey">
          <lido-row visible="true" width="800px" >
            
            
          </lido-row>
          <lido-row visible="true" width="800px">
            
          </lido-row>
        </lido-col> -->
      </lido-col>

    </lido-container>
  </main>`
}
