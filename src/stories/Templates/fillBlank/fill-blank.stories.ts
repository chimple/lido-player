import { Args, Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Templates/fillBlank',
  argTypes: {
    question: { control: "text" },
    option1: { control: "text" },
    option2: { control: "text" },
    option3: { control: "text" },
    option4: { control: "text" },
    correctAns: { control: "text" },
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
function getContainerXml(args: Args) {
  const [beforeBlank, afterBlank] = args.question.split('_');
  const boxHeight = "landscape.10vw, portrait.20vw";
  const fontSize = "landscape.48px, portrait.40px";

  let xml = `<main>
  <lido-container
    id="main-container"
    value="mainContainer1"
    objective="${args.correctAns}"
    x="0"
    y="0"
    z="0"
    height="100%"
    width="100%"
    bgColor="transparent"
    bgImage="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/grid-game//Sky.png"
    visible="true"
    showCheck="false"
    isContinueOnCorrect="true"
    isAllowOnlyCorrect="true"
    afterDrop="true"
    onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';"
    onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';"
  >

    <!-- Decorative Wood Row -->
    <lido-cell layout="row"
      id="row-wood"
      visible="true"
      direction="row"
      width="100%"
      height="landscape.10%, portrait.10%"
    >
      <lido-image
        id="wood-image-1"
        visible="true"
        src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/grid-game//word_kicker_wood.png"
        width="100%"
        height="100%"
        z="1"
        altText="ground"
      ></lido-image>
      <lido-image
        id="wood-image-2"
        visible="true"
        src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/grid-game//word_kicker_wood.png"
        width="100%"
        height="100%"
        z="1"
        altText="ground"
      ></lido-image>
    </lido-cell>

    <!-- Question Board Row -->
    <lido-cell layout="row"
      id="row-question"
      visible="true"
      direction="row"
      spacing="landscape.2vw, portrait.3vw"
      width="landscape.90%, portrait.95%"
      height="landscape.40%, portrait.10%"
      x="50%"
      y="5%"
    >
      <lido-image
        id="question-board-image"
        visible="true"
        src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/grid-game//board_question_wordkicker.png"
        width="landscape.100%, portrait.100%"
        height="landscape.100%, portrait.100%"
        z="0"
        isSlice="true"
        altText="Question background"
      >
        <lido-cell layout="row"
          id="row-question-inline"
          visible="true"
          direction="row"
          width="landscape.80%, portrait.95%"
          height="50%"
          spacing="landscape.20px, portrait.2vw"
          x="50%"
          y="50%"
        >
          <lido-text
            id="question-text-before"
            visible="true"
            string="${beforeBlank.trim()}"
            font="'Baloo 2', serif"
            fontColor="white"
            font-size="${fontSize}"
            fontWeight="800"
            bgColor="transparent"
            width="auto"
          ></lido-text>
          <lido-text
            id="question-drop-slot"
            visible="true"
            width="25%"
            height="${boxHeight}"
            value="${args.correctAns}"
            type="drop"
            isAllowOnlyOneDrop="true"
            bgColor="transparent"
            font="'Baloo 2', serif" 
            fontColor="#000"
            font-size="${fontSize}"
            fontWeight="800"
            borderRadius="1vw"
          ></lido-text>
          <lido-text
            id="question-text-after"
            visible="true"
            string="${afterBlank.trim()}"
            font="'Baloo 2', serif"
            fontColor="white"
            font-size="${fontSize}"
            bgColor="transparent"
            width="auto"
          ></lido-text>
        </lido-cell>
      </lido-image>
    </lido-cell>

    <!-- Top Spacer Row -->
    <lido-cell layout="row"
      id="row-spacer-top"
      visible="true"
      direction="row"
      spacing="20px"
      width="100%"
      height="landscape.30%, portrait.15%"
    ></lido-cell>

    <!-- Options Grid (2x2) -->
    <lido-cell layout="col"
      id="row-options-outer"
      visible="true"
      direction="column"
      bgColor = "transparent"
      spacing="landscape.1vw, portrait.2vw"
      width="landscape.60%, portrait.92%"
      height="landscape.70%, portrait.20%"
      x="50%"
      y="42%"
    >
      <lido-cell layout="row"
        id="row-options-1"
        visible="true"
        direction="row"
        spacing="20px"
        width="100%"
        height="landscape.40%, portrait.10%"
      >
        <lido-text
          id="option-1"
          value="${args.option1}"
          visible="true"
          type="drag"
          width="30%"
          height="${boxHeight}"
          string="${args.option1}"
          font="'Baloo 2', serif"
          fontColor="#FFFFFF"
          font-size="${fontSize}"
          fontWeight="800"
          bgColor="#A97345"
          borderRadius="1vw"
        ></lido-text>
        <lido-text
          id="option-2"
          value="${args.option2}"
          visible="true"
          type="drag"
          width="30%"
          height="${boxHeight}"
          string="${args.option2}"
          font="'Baloo 2', serif"
          fontColor="#FFFFFF"
          font-size="${fontSize}"
          fontWeight="800"
          bgColor="#A97345"
          borderRadius="1vw"
        ></lido-text>
      </lido-cell>
      <lido-cell layout="row"
        id="row-options-2"
        visible="true"
        direction="row"
        spacing="landscape.4vw, portrait.3vw"
        width="100%"
        height="landscape.40%, portrait.10%"
      >
        <lido-text
          id="option-3"
          value="${args.option3}"
          visible="true"
          type="drag"
          width="30%"
          height="${boxHeight}"
          string="${args.option3}"
          font="'Baloo 2', serif"
          fontColor="#FFFFFF"
          font-size="${fontSize}"
          fontWeight="800"
          bgColor="#A97345"
          borderRadius="1vw"
        ></lido-text>
        <lido-text
          id="option-4"
          value="${args.option4}"
          visible="true"
          type="drag"
          width="30%"
          height="${boxHeight}"
          string="${args.option4}"
          font="'Baloo 2', serif"
          fontColor="#FFFFFF"
          font-size="${fontSize}"
          fontWeight="800"
          bgColor="#A97345"
          borderRadius="1vw"
        ></lido-text>
      </lido-cell>
    </lido-cell>

    <!-- Bottom Spacer Row -->
    <lido-cell layout="row"
      id="row-spacer-bottom"
      visible="true"
      direction="row"
      spacing="20px"
      width="100%"
      height="landscape.30%, portrait.50%"
    ></lido-cell>

    <!-- Avatar and Shadow -->
    <lido-cell
      layout = "pos"
      id="pos-avatar"
      disableEdit="true"
      value="pos1"
      height="350px"
      width="350px"
      x="landscape.80%, portrait.60%"
      y="landscape.60%, portrait.60%"
      ariaHidden="true"
      z="2"
      bgColor="transparent"
      type=""
      visible="true"
      audio=""
      onTouch=""
      onCorrect=""
      onEntry="this.animation='leftToPlace 1.5s linear';"
    >
      <lido-avatar
        id="lido-avatar"
        disableEdit="true"
        visible="true"
        height="350px"
        width="350px"
        src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/chimplecharacter.riv"
        altText="chimpleCharacterRive"
        bgColor="transparent"
      ></lido-avatar>
      <lido-image
        id="shadow-image"
        disableEdit="true"
        value="image1"
        visible="true"
        src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/Shadow.png"
        bgColor="transparent"
        width="186px"
        height="40px"
        x="77px"
        y="302px"
        altText="shadowImage"
      ></lido-image>
    </lido-cell>
  </lido-container>
</main>`;

  return xml;
}
