import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { letterBoard } from '../letterboard/letterboard.stories';

type RocketArgs = {
  correct: string[];
  options: string[];
  TextBackgroundImage: string[];
  letterBoardText: string;
  dropImage: string[];
  backgroundImage: string[];
  colors: string[];
};

const meta: Meta<RocketArgs> = {
  title: 'Templates/RocketGame',
  argTypes: {
    correct: {
      control: 'object',
      description: 'Array of correct letter',
      defaultValue: ['h', 'i', 't'],
    },
    options: {
      control: 'object',
      description: 'Array of option letters',
      defaultValue: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    },
    TextBackgroundImage: {
      control: 'file',
      description: 'Background image for HIT text',
      defaultValue: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/hit_img_1.png',
      multiple: true,
    },
    letterBoardText: {
      control: 'text',
      description: 'The word to display (e.g. "HIT")',
      defaultValue: 'HIT',
    },
    dropImage: {
      control: 'file',
      description: 'Drop slot for letter',
      defaultValue: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/dropImag.svg',
      multiple: true,
    },
    backgroundImage: {
      control: 'file',
      description: 'Main background image',
      defaultValue: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/Sky.png',
      multiple: true,
    },
    colors: {
      control: 'object',
      description: 'Array of colors for the letters',
      defaultValue: ['#F34D08','#81C127','#FFC805','#F55376','#5D44BD'],
    },
  },
  args: {
    correct: ['h', 'i', 't'],
    options: ['k', 'q', 'd', 'x', 'a', 'p', 'g', 'l', 'w', 'i', 'f', 'm', 'e', 'z', 'j', 'o', 'b', 'n', 'h', 't', 's', 'v', 'r', 'c', 'y', 'u'],
    TextBackgroundImage: ['https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/hit_img_1.png'],
    letterBoardText: 'HIT',
    dropImage: ['https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/dropImag.svg'],
    backgroundImage: ['https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/Background_Sky.png'],
    colors: ['#F34D08', '#81C127', '#FFC805', '#F55376', '#5D44BD'],
  },
};

export default meta;

export const Rocket: StoryObj<RocketArgs> = {
  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home xml-data="${xml}" xmlData="${xml}"></lido-home>`;
  },
};

function getContainerXml(args: RocketArgs) {

  // Extract letters from correct array
  const drags = args.options.slice(0);
  const indexStart = 16;
  const pickedColors = args.colors;

  // ✅ Dynamic objective
  const objective = args.correct.join(",");

  // ✅ Wing positioning based on DROP elements
  const dropCount = args.correct.length;

  // wing dynamic positions
  const wingXLandscape = 46 + dropCount * 4;
  const wingXPortrait  =  (dropCount<=3 ? 52 + dropCount * 4 : 56 + dropCount * 4);

  // const textWidth = this.letterBoardText.length * parseFloat(this.fontSize);
  // const parentWidth = this.parentElement.querySelector('#board_bg_wordnote').offsetWidth;
  // const centerX = (parentWidth - textWidth) / 2;

  // create drop elements
  const dropElements = args.correct.map((letter, index) => {
    const marginleft = index === 0 ? -60 : 0;
    return `
      <lido-image value="${letter}" string="${letter}" is-slice="true" onEntry="this.padding='0px'; this.margin-left='${marginleft}px'; this.margin-top='8px';" bg-color="transparent" id="drop-image${index + 1}" disable-edit="true" type="drop" tab-index="${9 + index}" visible="true" src="${args.dropImage}" height="landscape.150px, portrait.150px" width="landscape.150px, portrait.125px">
      </lido-image>
    `;
  }).join('');

  // Create drag elements for first row
  const dragElements = drags
    .map((letter, index) => {
      //const pickedColorIndex = Math.floor(Math.random(0,100) * pickedColors.length);
      const color = pickedColors[Math.floor(Math.random() * pickedColors.length)];
      return `
      <lido-text bg-color="${color}" string="${letter}" audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/sounds/${letter}.mp3" onTouch="this.speak='true';" onEntry="this.padding='0px'; this.boxShadow='none !important';" font-size="75px" font-color="white" font-family="Baloo Bhai 2" id="${letter}" visible="true" value="${letter}" tab-index="${indexStart + index}" type="drag" disable-edit="true" height="landscape.125px, portrait.150px" width="landscape.100%, portrait.95%">
      </lido-text>
    `;
    })
    .join('');
  
  return `
  <main> 
       
      <lido-container id="lido-container" objective="${objective}" show-drop-border="false" tab-index="1" is-allow-only-correct="true" is-continue-on-correct="true" onCorrect="fullRrocket.animation='placeToLeft 2.5s 1s linear'; this.sleep='4000';" show-check="false" bg-image="${args.backgroundImage}" visible="true" onEntry="this.overflowY='hidden'; this.overflowX='hidden'; this.background-color='transparent';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" after-drop="false" drop-action="infinite-drop">
          <lido-cell layout="pos" id="pos1" disable-edit="true" tab-index="2" value="pos2" height="305px" width="227px" x="landscape.1270px, portrait.541px" y="landscape.-60px, portrait.250px" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="this.animation='rightToPlace 2.5s linear';">
              <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="462px" width="356px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
              </lido-avatar>
          </lido-cell>

          
          
          <lido-cell layout="pos" value="pos2" tab-index="3" id="pos2" visible="true" height="landscape.305px, portrait.auto " width="landscape.100%, portrait.100%;" y="landscape.-35%, portrait.-12%" x="landscape.23%, portrait.0%" onEntry="this.background-color='transparent'">
              <lido-image id="board_bg_wordnote" tab-index="4" disable-edit="true" visible="true" src="https://media.githubusercontent.com/media/chimple/bahama/refs/heads/master/assets/games/rocket/textures/board_bg_wordnote.png">
              </lido-image>
              <lido-image id="hit_img" tab-index="5" height="170px" width="100%" y="landscape.124%, portrait.360px" x="landscape.-42%, portrait.-36%" disable-edit="true" visible="true" src="${args.TextBackgroundImage}">
                <lido-cell layout="pos" display="flex" value="pos3" tab-index="3" id="pos3" visible="true" height="landscape.265px, portrait.auto " bg-color="transparent" width="landscape.100%, portrait.100%;" onEntry="this.z-index='1'; this.align-items='center'; this.justify-content='center'; this.display='flex';" y="landscape.0%, portrait.14%" x="landscape.9%, portrait.4%">
                  <lido-text id="heading" tab-index="6" visible="true" string="${args.letterBoardText}" font-family="'Baloo Bhai 2'" font-color="#fafafa" font-size="landscape.9rem, portrait.10rem" bg-color="transparent" onEntry="this.fontWeight='700'; this.justify-content='center'; this.align-item='center';" x="unset" y="unset">
                  </lido-text>
                </lido-cell>
              </lido-image>              
          </lido-cell>

          <lido-cell layout="row" onEntry="this.position='absolute'; this.justify-content='center'; this.align-items='center';" y="landscape.20%, portrait.40%" tab-index="7" id="fullRrocket" bg-color="transparent" height="landscape.445px, portrait.275px" width="100%" visible="true">
              <lido-image bg-color="transparent" height="landscape.160px, portrait.160px" id="rockethead_bg_wordnote" tab-index="8" width="landscape.350px, portrait.350px" disable-edit="true" visible="true" src="https://media.githubusercontent.com/media/chimple/bahama/refs/heads/master/assets/games/rocket/textures/rockethead_bg_wordnote.png" margin="landscape.0px 0px 0px 0px, portrait.0">
              </lido-image>
			  
              ${dropElements}

              <lido-image onEntry="this.position='absolute'; this.padding='0px';" height="225px" width="27%"  x="landscape.${wingXLandscape}%, portrait.${wingXPortrait}%" y="landscape.0%, portrait.-24%" tab-index="12" bg-color="transparent" id="wings-image1" disable-edit="true" visible="true" src="https://media.githubusercontent.com/media/chimple/bahama/refs/heads/master/assets/games/rocket/textures/rockethandle_bg_wordnote.png" margin="0">
              </lido-image>
              <lido-image onEntry="this.position='absolute'; this.padding='0px';" height="225px" width="27%" x="landscape.${wingXLandscape}%, portrait.${wingXPortrait}%" y="landscape.51%, portrait.45%" tab-index="13" bg-color="transparent" id="wings-image2" disable-edit="true" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/rockethandle_bg_wordnote%201.png" margin="0">
              </lido-image>

              <lido-image height="landscape.200px, portrait.200px" width="landscape.6%, portrait.6%" onEntry="this.zIndex='9';" bg-color="transparent" id="rocket-end" disable-edit="true" tab-index="14" margin="landscape.0px -2% 0px -35px, portrait.0px -2% 0px -35px" src="https://media.githubusercontent.com/media/chimple/bahama/refs/heads/master/assets/games/rocket/textures/rocketend_bg_wordnote.png">
              </lido-image>
              <lido-image onEntry="this.padding='0px';" height="220px" width="15%" tab-index="15" bg-color="transparent" disable-edit="true" id="fire_image1" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/Fire.png">
              </lido-image>
          </lido-cell>


          
          <lido-cell disable-edit="true" layout="wrap" aria-hidden="true" visible="true" width="100%" height="landscape.50px, portrait.0px" margin="landscape.20% 0px 0px 0px, portrait.35% 0px 0px 0px" onEntry="this.place-items='center'; this.padding='0px'; this.gridTemplateColumns='repeat(auto-fill, minmax(111px, auto))';   this.gridTemplateRows='repeat(auto-fit, 146px)';  this.flexWrap='wrap';" bg-color="transparent"  tab-index="29" id="drag-wrap" gap="landscape.4px, portrait.5px">
              ${dragElements}
          </lido-cell>
    </lido-container>
  </main>`;
}
