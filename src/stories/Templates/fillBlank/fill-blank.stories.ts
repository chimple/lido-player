import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Templates/fillBlank',
  argTypes: {
    question: { control: "text" },
    option1: { control: "text" },
    option2: { control: "text" },
    option3: { control: "text" },
    option4: { control: "text" },
    correct1: { control: "text" },
    correct2: { control: "text" },
    correct3: { control: "text" },
    correct4: { control: "text" },
  }
};
export default meta;

export const QuestionAndOptions: StoryObj = {
  args: {
    question: 'Many Books are _ the desk”?',
    option1: 'next to',
    option2: 'on',
    option3: 'in',
    option4: 'under',
    correctAns: 'on',
  },

  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`
  },
};

function getContainerXml(args) {
  const [beforeBlank, afterBlank] = args.question.split('_');

  return `<main>
    <lido-container
      id="lido-container"
      tabIndex="1"
      value="mainContainer1"
      objective="${args.correctAns}"
      ariaLabel=""
      height="100vh"
      width="100vw"
      x="0"
      y="0"
      z="0"
      bgColor="#74aadd"
      visible="true"
      audio="background1.mp3"
      showCheck="false"
      isContinueOnCorrect="true"
      afterDrop="true"
      onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';"
      onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';"
      onEntry="this.animation='fadeIn 1s ease-in';"
    >

      <!-- Avatar and Background -->
      <!-- Avatar and Background -->

<!-- Background should come first to render behind -->
<lido-pos
  id="background"
  value="pos2"
  width="1600px"
  height="100%"
  x="0"
  y="0"
  z="0"
  visible="true"
  bgColor="transparent"

>
  <lido-image
    id="bgImage"
    visible="true"
    width="100%"
    height="100%"
    src="/src/assets/images/background_Sky_Landscape.png"
  ></lido-image>
</lido-pos>

<!-- Avatar Layer (on top of background) -->
<lido-pos
  id="pos1"
  value="pos1"
  height="350px"
  width="350px"
  x="0px"
  y="400px"
  z="1"
  visible="true"
  bgColor="transparent"
  onEntry="this.animation='rightToPlace 1s ease-out';"
>
  <lido-avatar
    id="lido-avatar"
    visible="true"
    height="350px"
    width="350px"
    src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv"
  ></lido-avatar>

  <lido-image
    id="shadow"
    visible="true"
    src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/Shadow.png"
    width="186px"
    height="20px"
    x="77px"
    y="305px"
    bgColor="transparent"
  ></lido-image>
</lido-pos>

      <!-- Question with Drop Slot -->
    <lido-pos
  id="question"
  value="pos3"
  visible="true"
  width="1000px"
  height="150px"
  x="50%"
  y="100px"
  bgColor="transparent"
  onEntry="this.transform='translate(-50%, 0)';"
  
>
  <!-- Question Background Board -->
<lido-pos
  id="question"
  value="pos3"
  visible="true"
  width="1600px"
  height="200px"
  x="50%"
  y="20%"
  bgColor="transparent"
  onEntry="this.transform='translate(-50%, 0)';"
>
  <!-- Board Background -->
  <lido-image
    id="image3"
    visible="true"
    src="src/assets/images/board_question_wordkicker.png"
    width="1600px"
    height="200px"
    z="0"
    altText="Question background"
  ></lido-image>

  <!-- Centered Inline Text + Drop -->
  <lido-row
    id="questionRow"
    visible="true"
    direction="row"
    spacing="20px"
    width="auto"
    height="auto"
    x="50%"
    y="50%"
    z="1"
    onEntry="this.transform='translate(-50%, -50%)';"
  >
    <lido-text
      id="textBefore"
      visible="true"
      string="${beforeBlank.trim()}"
      font="'Baloo 2', serif"
      fontColor="white"
      font-size="48px"
      fontWeight="800"
      bgColor="transparent"
      width="auto"
      flexibleWidth="true"
    ></lido-text>

    <lido-text
      id="dropSlot"
      isSlice="true"
      visible="true"
      width="200px"
      height="100px"
      imageSlice="30 fill"
      value="${args.correctAns}"
      type="drop"
      isAllowOnlyOneDrop="true"
      bgColor="#FFFFFF"
       borderRadius="12px"
      onEntry="this.boxShadow='0px 4px 6px rgba(0,0,0,0.1)'; this.marginLeft='20px'; this.marginRight='30px';"
    ></lido-text>

    <lido-text
      id="textAfter"
      visible="true"
      string="${afterBlank.trim()}"
      font="'Baloo 2', serif"
      fontColor="white"
      font-size="48px"
      bgColor="transparent"
      width="auto"
      flexibleWidth="true"
    ></lido-text>
  </lido-row>
</lido-pos>

<!-- Drag Options -->
<lido-pos
  id="dragZone"
  value="dragZone"
  visible="true"
  width="1400px"
  height="150px"
  x="15%"
  y="500px"
  z="1"
  bgColor="transparent"
>
  <lido-row
    id="optionsRow"
    value="optionsRow"
    visible="true"
    direction="row"
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    spacing="30px"
    width="60%"
    height="100%"
    x="25%"
    y="0%"
    onEntry="this.transform='translate(-50%, -50%)';"
  >
    ${[1, 2, 3, 4].map(i => `
      <lido-text
        id="option${i}"
        value="${args[`option${i}`]}"
        visible="true"
        type="drag"
        width="200px"
        height="100px"
        string="${args[`option${i}`]}"
        font="'Baloo 2', serif"
        fontColor="#FFFFFF"
        font-size="48px"
        fontWeight="800"
        bgColor="#A97345"
        borderRadius="12px"
        onEntry="this.boxShadow='0px 4px 8px rgba(0, 0, 0, 0.2)';"
      ></lido-text>
    `).join('')}
  </lido-row>
</lido-pos>

    </lido-container>
  </main>`;
}