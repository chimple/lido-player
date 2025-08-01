import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Templates/Categorize',
  argTypes: {
    options: { control: 'object' },
    category1: { control: 'text' },
    category2: { control: 'text' },
    category3: { control: 'text' },
    correct1: { control: 'text' },
    correct2: { control: 'text' },
    correct3: { control: 'text' },
  },
};
export default meta;

export const QuestionAndOptions: StoryObj = {
  args: {
    options: ['Apple', 'Lion', 'Tiger', '3', 'Strawberry', '7', 'Mango', '10'],
    category1: 'Fruits',
    category2: 'Numbers',
    category3: 'Animals',
    correct1: 'Apple,Strawberry,Mango',
    correct2: '3,7,10',
    correct3: 'Lion,Tiger',
  },

  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

function getContainerXml(args) {
  const objective = `(${args.correct1.split(',').join('|')}),(${args.correct2.split(',').join('|')}),(${args.correct3.split(',').join('|')})`;
  return `
  <main>
    <lido-container id="lido-container" value="mainContainer1" objective="${objective}" aria-label="" height="100vh" width="100vw" x="0" y="0" z="0" bg-color="#FFB742" visible="true" audio="background1.mp3" onTouch="" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="true" is-continue-on-correct="true" is-allow-only-correct="false">
		<!-- Chimple Avatar -->
      <lido-pos id="pos1" disable-edit="true" value="pos1" height="350px" width="350px" x="1430px" y="500px" aria-hidden="true" z="1" bg-color="transparent" type="" visible="true" audio="col1.mp3" onTouch="" onCorrect="" onEntry="">
        <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="350px" width="350px" src="/assets/images/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
        </lido-avatar>
        <lido-image id="image1" disable-edit="true" value="image1" visible="true" src="/assets/images/Shadow.png" bg-color="transparent" width="186px" height="20px" x="77px" y="305px" alt-text="{shadowImage}">
        </lido-image>
      </lido-pos>
      <!-- Check Button -->
      <lido-pos id="pos1" disable-edit="true" value="pos1" height="70px" width="150px" x="1500px" y="105px" aria-hidden="true" z="1" bg-color="transparent" type="" visible="true" audio="col1.mp3" onTouch="" onCorrect="" onEntry="">
        <lido-text id="lido-checkButton" bg-color="#5b5bd3" width="150px" height="70px" string="Check" type="click" font-family="'Baloo 2', serif" font-size="30px" font-color="white" onEntry="this.fontWeight='800'; this.addClass='lido-disable-check-button';"></lido-text>
      </lido-pos>
      <lido-row visible="true" bg-color="transparent" width="1500px" height="850px">
        <lido-col visible="true" type="optionArea" bg-color="transparent" width="300px" height="840px">
        ${args.options
          .map(
            (option, index) => `
          <lido-text visible="true" tab-index="${index+1}" bg-color="white" value="${option}" string="${option}" width="200px" height="80px" font-family="'Baloo 2', serif" font-size="30px" onEntry="this.fontWeight='800'; this.marginBottom='10px';" type="option"></lido-text>`,
          )
          .join('')}
        
        </lido-col>
        <lido-row visible="true" bg-color="transparent" width="1150px" height="840px">
          <lido-col id="cate1" visible="true" width="200px" height="700px" onEntry="this.border='2px solid';" bg-color="#0000005e" onTouch="this.addClass='highlight-element'; cate2.removeClass='highlight-element'; cate3.removeClass='highlight-element';">
            <lido-text tab-index="9" visible="true" width="200px" bg-color="black" font-color="white" string="${
              args.category1
            }" font-size="30px" font-family="'Baloo 2', serif" onEntry="this.fontWeight='800';"></lido-text>
            <lido-col visible="true" id="category1" tab-index="1" width="200px" height="100%" onEntry="this.display='block'; this.overflow='auto'; this.scrollbarWidth='none';" value="${
              args.correct1
            }" bg-color="transparent" type="category">
            </lido-col>
          </lido-col>
          <lido-col id="cate2" visible="true" width="200px" height="700px" onEntry="this.border='2px solid';" bg-color="#0000005e" onTouch="this.addClass='highlight-element'; cate1.removeClass='highlight-element'; cate3.removeClass='highlight-element';">
            <lido-text tab-index="10" visible="true" width="200px" bg-color="black" font-color="white" string="${
              args.category2
            }" font-size="30px" font-family="'Baloo 2', serif" onEntry="this.fontWeight='800';"></lido-text>
            <lido-col visible="true" id="category2" tab-index="2" width="200px" height="100%" onEntry="this.display='block'; this.overflow='auto'; this.scrollbarWidth='none';" value="${
              args.correct2
            }" bg-color="transparent" type="category"></lido-col>
          </lido-col>
          <lido-col id="cate3" visible="true" width="200px" height="700px" onEntry="this.border='2px solid';" bg-color="#0000005e" onTouch="this.addClass='highlight-element'; cate2.removeClass='highlight-element'; cate1.removeClass='highlight-element';">
            <lido-text tab-index="11" visible="true" width="200px" bg-color="black" font-color="white" string="${
              args.category3
            }" font-size="30px" font-family="'Baloo 2', serif" onEntry="this.fontWeight='800';"></lido-text>
            <lido-col visible="true" id="category3" tab-index="3" width="200px" height="100%" onEntry="this.display='block'; this.overflow='auto'; this.scrollbarWidth='none';" value="${
              args.correct3
            }" bg-color="transparent" type="category"></lido-col>
          </lido-col>
        </lido-row>
      </lido-row>
    </lido-container>
  </main>`;
}
