import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

type RocketArgs = {
  objective: string;
  correct: string[];
  options: string[];
  TextBackgroundImage: string;
  letterBoardText: string;
  dropImage1: string;
  dropImage2: string;
  dropImage3: string;
  backgroundImage: string;
};

const meta: Meta<RocketArgs> = {
  title: 'Templates/Rocket',
  argTypes: {
    objective: {
      control: 'text',
      description: 'Comma-separated letters to match (e.g. "h,i,t")',
      defaultValue: 'h,i,t'
    },
    correct: {
      control: 'object',
      description: 'Array of correct letters',
      defaultValue: ['h', 'i', 't']
    },
    options: {
      control: 'object',
      description: 'Array of option letters',
      defaultValue: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    },
    TextBackgroundImage: {
      control: 'text',
      description: 'Background image for HIT text',
      defaultValue: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/hit_img_1.png'
    },
    letterBoardText: {
      control: 'text',
      description: 'The word to display (e.g. "HIT")',
      defaultValue: 'HIT'
    },
    dropImage1: {
      control: 'text',
      description: 'Drop slot for first letter',
      defaultValue: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/dropImag.svg'
    },
    dropImage2: {
      control: 'text',
      description: 'Drop slot for second letter',
      defaultValue: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/dropImag.svg'
    },
    dropImage3: {
      control: 'text',
      description: 'Drop slot for third letter',
      defaultValue: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/dropImag.svg'
    },
    backgroundImage: {
      control: 'text',
      description: 'Main background image',
      defaultValue: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/Background_Sky.png'
    }
  },
  args: {
    objective: 'h,i,t',
    correct: ['h', 'i', 't'],
    options: ['k', 'q', 'd', 'x', 'a', 'p', 'g', 'l', 'w', 'i', 'f', 'm', 'e', 'z', 'j', 'o', 'b', 'n', 'h', 't', 's', 'v', 'r', 'c', 'y', 'u'],
    TextBackgroundImage: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/hit_img_1.png',
    letterBoardText: 'HIT',
    dropImage1: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/dropImag.svg',
    dropImage2: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/dropImag.svg',
    dropImage3: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/dropImag.svg',
    backgroundImage: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/Background_Sky.png'
  }
};

export default meta;

export const Rocket: StoryObj<RocketArgs> = {
  render: (args) => {
    const xml = getContainerXml(args);
    return html`<lido-home xml-data="${xml}" xmlData="${xml}"></lido-home>`;
  }
};

function getContainerXml(args: RocketArgs) {
	
  // Extract letters from correct array
  const [letter1, letter2, letter3] = args.correct;
  const firstRowLetters = args.options.slice(0, 13);
  const secondRowLetters = args.options.slice(13);
  const firstRowStart = 16;
  const secondRowStart = firstRowStart + firstRowLetters.length + 1;
  
  // Create drag elements for first row
  const firstRowElements = firstRowLetters.map((letter, index) => {
    return `
      <lido-image 
        bgColor="transparent" 
        audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/sounds/${letter}.mp3" 
        onTouch="this.speak='true';" 
        onEntry="this.padding='0px'; this.boxShadow='none !important';" 
        id="${letter}" 
        visible='true' 
        value="${letter}" 
        tabIndex="${firstRowStart + index}"
        dropAttr="infinite-drop" 
        type="drag" 
        disableEdit="true" 
        src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/${letter.toUpperCase()}.svg" 
        height="landscape.160px, portrait.200px" 
        width="landscape.6%, portrait.10%">
      </lido-image>
    `;
  }).join('');

  // Create drag elements for second row
  const secondRowElements = secondRowLetters.map((letter, index) => {
    return `
      <lido-image 
        bgColor="transparent" 
        audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/sounds/${letter}.mp3" 
        onTouch="this.speak='true';" 
        onEntry="this.padding='0px'; this.boxShadow='none !important';" 
        id="${letter}" 
        visible='true' 
        value="${letter}" 
        tabIndex="${secondRowStart + index}" 
        dropAttr="infinite-drop" 
        type="drag" 
        disableEdit="true" 
        src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/${letter.toUpperCase()}.svg" 
        height="landscape.160px, portrait.200px" 
        width="landscape.6%, portrait.10%">
      </lido-image>
    `;
  }).join('');

  return `<main> 
    <lido-container id="lido-container" objective="${args.objective}" tabIndex="1" isContinueOnCorrect="true" onCorrect="fullRrocket.animation='placeToLeft 2.5s linear'; this.sleep='2000';" showCheck="false" bgImage="${args.backgroundImage}" visible="true" onEntry="this.overflowY='hidden'; this.overflowX='hidden'; this.background-color='transparent';">
    
      <!-- Chimple Avatar -->
      <lido-cell layout="pos" id="pos1" disableEdit="true" tabIndex="2" value="pos2" height="305px" width="227px" x="landscape.1274px, portrait.541px" y="landscape.-60px, portrait.250px" ariaHidden="true" z="1" bgColor="transparent" visible="true" onEntry="this.animation='rightToPlace 2.5s linear';">
        <lido-avatar id="lido-avatar" disableEdit="true" visible="true" height="462px" width="356px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" altText="{chimpleCharacterRive}">
        </lido-avatar>
      </lido-cell>

      <lido-cell layout="pos" value="pos2" tabIndex="3" id="pos2" visible="true" height="landscape.305px, portrait.auto " width="landscape.100%, portrait.100%;" y='landscape.-35%, portrait.-12%' x='landscape.23%, portrait.0%' onEntry="this.background-color='transparent'">
        <lido-image id="board_bg_wordnote" tabIndex="4" disableEdit="true" visible="true"  src="https://media.githubusercontent.com/media/chimple/bahama/refs/heads/master/assets/games/rocket/textures/board_bg_wordnote.png">
        </lido-image>

        <!-- Hit image -->
        <lido-image id="hit_img" tabIndex="5" height="170px" width="100%" y='landscape.124%, portrait.360px' x='landscape.-42%, portrait.-36%' disableEdit="true" visible="true"  src="${args.TextBackgroundImage}">
        </lido-image>

        <lido-text id="heading" tabIndex="6" visible="true" string="${args.letterBoardText}" font="'Baloo Bhai 2'" fontColor="#fafafa" font-size="landscape.9rem, portrait.10rem" bgColor="transparent" onEntry="this.fontWeight='700';" y='landscape.100%, portrait.18rem' x='landscape.23%, portrait.35%'  >
        </lido-text>
      </lido-cell>

      <lido-cell display='flex' grid-gap='10' onEntry="this.position='absolute'; this.display='flex';"  y='landscape.33%, portrait.43%' x='landscape.28%, portrait.9%'  tabIndex="7" id="fullRrocket">

        <lido-image bgColor="transparent" height='landscape.200px, portrait.225px' id="rockethead_bg_wordnote" tabIndex="8" width='landscape.25%, portrait.30%' disableEdit="true" visible="true"  
            src="https://media.githubusercontent.com/media/chimple/bahama/refs/heads/master/assets/games/rocket/textures/rockethead_bg_wordnote.png" 
            margin="landscape.0px 0px 0px 0px, portrait.0" 
            >
          </lido-image>
          
        <lido-image value="${letter1}" string="${letter1}" onEntry="this.padding='0px'; this.margin-left='-21px'; this.margin-top='24px';" bgColor="transparent" id="drop-image1" disableEdit="true" type='drop' tabIndex='9' visible="true"  
            src="${args.dropImage1}" height="landscape.158px, portrait.180px" width="landscape.9%, portrait.11%" 
            margin="0">
          </lido-image>

        <lido-image value="${letter2}" string="${letter2}" onEntry="this.padding='0px'; this.margin-top='24px';" tabIndex='10' bgColor="transparent" id="drop-image2" disableEdit="true" type='drop' visible="true"  
            src="${args.dropImage2}" height="landscape.158px, portrait.180px" width="landscape.9%, portrait.11%"
            >
          </lido-image>

        <lido-image value="${letter3}" string="${letter3}" onEntry="this.padding='0px'; this.margin-top='24px';" tabIndex='11' bgColor="transparent" id="drop-image3" disableEdit="true" type='drop' visible="true"  
            src="${args.dropImage3}" height="landscape.158px, portrait.180px" width="landscape.9%, portrait.11%"
            >
          </lido-image>

        <!-- wings -->
        <lido-image onEntry="this.position='absolute'; this.padding='0px';" height="225px" width="27%" y='landscape.-48%, portrait.-39%' x='landscape.40%, portrait.48%' tabIndex='12' bgColor="transparent" id="wings-image1" disableEdit="true" visible="true"  
            src="https://media.githubusercontent.com/media/chimple/bahama/refs/heads/master/assets/games/rocket/textures/rockethandle_bg_wordnote.png" margin="0">
        </lido-image>

        <lido-image onEntry="this.position='absolute'; this.padding='0px';" y='landscape.40%, portrait.40%' x='landscape.40%, portrait.48%' height="225px" width="27%" tabIndex='13' bgColor="transparent" id="wings-image2" disableEdit="true" visible="true"  
            src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/rockethandle_bg_wordnote%201.png" margin="0">
        </lido-image>

        <!-- Rocket end image -->
        <lido-image height="landscape.210px, portrait.210px" width="landscape.10%, portrait.10%" onEntry="this.zIndex='9';" bgColor="transparent" id="rocket-end" 
            disableEdit="true" tabIndex='14' margin="landscape. 0px -5% 0px -28px, portrait.5px -5% 0px -15px "
            src="https://media.githubusercontent.com/media/chimple/bahama/refs/heads/master/assets/games/rocket/textures/rocketend_bg_wordnote.png"
            >
        </lido-image>
        
        <!-- Word note background -->
        <lido-image onEntry="this.padding='0px';" height='220px' width='25%' tabIndex='15' bgColor="transparent" disableEdit="true" id="fire_image1"
            src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/Fire.png"
            margin="0">
        </lido-image>		
      </lido-cell>

      <!-- First Row (Letters 1-13) -->
      <lido-cell disableEdit="true" layout="row" ariaHidden="true" visible="true" height='landscape.130px, portrait.0px' margin="landscape.35% 0px 0px 0px, portrait.145% 0px 0px 0px" onEntry="this.z-index='9px'; this.justify-content='center'; this.padding='10px';" bgColor="transparent"  justifyContent="space-evenly" width="100%" tabIndex="29" id="first_alphabetRow">
        ${firstRowElements}
      </lido-cell>

      <!-- Second Row (Letters 14-26) -->
      <lido-cell layout="row" ariaHidden="true" visible="true" onEntry="this.z-index='9px'; this.padding='10px'; this.justify-content='center';" bgColor="transparent"  justifyContent="space-evenly" width="100%" tabIndex="43" id="second_alphabetRow">
        ${secondRowElements}
      </lido-cell>

    </lido-container>
  </main>`;
}