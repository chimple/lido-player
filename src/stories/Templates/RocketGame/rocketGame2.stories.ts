import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

type RocketArgs = {
  correct1: string;
  correct2: string;
  correct3: string;
  TextBackgroundImage: string[];
  letterBoardText: string;
  dropImage1: string[];
  dropImage2: string[];
  dropImage3: string[];
  backgroundImage: string[];
};

const meta: Meta<RocketArgs> = {
  title: 'Templates/RocketGame2',
  argTypes: {
    correct1: {
      control: 'object',
      description: 'correct letter',
      defaultValue: 'h',
    },
    correct2: {
      control: 'object',
      description: 'correct letter',
      defaultValue: 'i',
    },
    correct3: {
      control: 'object',
      description: 'correct letter',
      defaultValue: 't',
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
    dropImage1: {
      control: 'file',
      description: 'Drop slot for first letter',
      defaultValue: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/dropImag.svg',
      multiple: true,
    },
    dropImage2: {
      control: 'file',
      description: 'Drop slot for second letter',
      defaultValue: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/dropImag.svg',
      multiple: true,
    },
    dropImage3: {
      control: 'file',
      description: 'Drop slot for third letter',
      defaultValue: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/dropImag.svg',  
      multiple: true,
    },
    backgroundImage: {
      control: 'file',
      description: 'Main background image',
      defaultValue: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/Background_Sky.png',
      multiple: true,
    },
  },
  args: {
    correct1: 'h',
    correct2: 'i',
    correct3: 't',
    TextBackgroundImage: ['https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/hit_img_1.png'],
    letterBoardText: 'HIT',
    dropImage1: ['https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/dropImag.svg'],
    dropImage2: ['https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/dropImag.svg'],
    dropImage3: ['https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/dropImag.svg'],
    backgroundImage: ['https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/Background_Sky.png'],
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
  
  return `
  <main> 
      <lido-container id="lido-container" objective="${args.correct1}, ${args.correct2}, ${args.correct3}" appendToDropOnCompletion="true" tab-index="1" is-continue-on-correct="true" onCorrect="fullRrocket.animation='placeToLeft 2.5s linear'; this.sleep='2000';" show-check="false" bg-image="${args.backgroundImage}" visible="true" onEntry="this.overflowY='hidden'; this.overflowX='hidden'; this.background-color='transparent';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" after-drop="false">
          <lido-cell layout="pos" id="pos1" disable-edit="true" tab-index="2" value="pos2" height="305px" width="227px" x="landscape.1274px, portrait.541px" y="landscape.-60px, portrait.250px" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="this.animation='rightToPlace 2.5s linear';">
              <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="462px" width="356px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
              </lido-avatar>
          </lido-cell>
          <lido-cell layout="pos" value="pos2" tab-index="3" id="pos2" visible="true" height="landscape.305px, portrait.auto " width="landscape.100%, portrait.100%;" y="landscape.-35%, portrait.-12%" x="landscape.23%, portrait.0%" onEntry="this.background-color='transparent'">
              <lido-image id="board_bg_wordnote" tab-index="4" disable-edit="true" visible="true" src="https://media.githubusercontent.com/media/chimple/bahama/refs/heads/master/assets/games/rocket/textures/board_bg_wordnote.png">
              </lido-image>
              <lido-image id="hit_img" tab-index="5" height="170px" width="100%" y="landscape.124%, portrait.360px" x="landscape.-42%, portrait.-36%" disable-edit="true" visible="true" src="${args.TextBackgroundImage}">
              </lido-image>
              <lido-text id="heading" tab-index="6" visible="true" string="${args.letterBoardText}" font-family="'Baloo Bhai 2'" font-color="#fafafa" font-size="landscape.9rem, portrait.10rem" bg-color="transparent" onEntry="this.fontWeight='700';" y="landscape.100%, portrait.18rem" x="landscape.23%, portrait.35%">
              </lido-text>
          </lido-cell>
          <lido-cell display="flex" grid-gap="10" onEntry="this.position='absolute'; this.display='flex';" y="landscape.33%, portrait.43%" x="landscape.28%, portrait.9%" tab-index="7" id="fullRrocket">
              <lido-image bg-color="transparent" height="landscape.200px, portrait.225px" id="rockethead_bg_wordnote" tab-index="8" width="landscape.25%, portrait.30%" disable-edit="true" visible="true" src="https://media.githubusercontent.com/media/chimple/bahama/refs/heads/master/assets/games/rocket/textures/rockethead_bg_wordnote.png" margin="landscape.0px 0px 0px 0px, portrait.0">
              </lido-image>
              <lido-image value="${args.correct1}" string="${args.correct1}" onEntry="this.padding='0px'; this.margin-left='-21px'; this.margin-top='24px';" bg-color="transparent" id="drop-image1" disable-edit="true" type="drop" tab-index="9" visible="true" src="${args.dropImage1}" height="landscape.158px, portrait.180px" width="landscape.9%, portrait.11%" margin="0">
              </lido-image>
              <lido-image value="${args.correct2}" string="${args.correct2}" onEntry="this.padding='0px'; this.margin-top='24px';" tab-index="10" bg-color="transparent" id="drop-image2" disable-edit="true" type="drop" visible="true" src="${args.dropImage2}" height="landscape.158px, portrait.180px" width="landscape.9%, portrait.11%">
              </lido-image>
              <lido-image value="${args.correct3}" string="${args.correct3}" onEntry="this.padding='0px'; this.margin-top='24px';" tab-index="11" bg-color="transparent" id="drop-image3" disable-edit="true" type="drop" visible="true" src="${args.dropImage3}" height="landscape.158px, portrait.180px" width="landscape.9%, portrait.11%">
              </lido-image>
              <lido-image onEntry="this.position='absolute'; this.padding='0px';" height="225px" width="27%" y="landscape.-48%, portrait.-39%" x="landscape.40%, portrait.48%" tab-index="12" bg-color="transparent" id="wings-image1" disable-edit="true" visible="true" src="https://media.githubusercontent.com/media/chimple/bahama/refs/heads/master/assets/games/rocket/textures/rockethandle_bg_wordnote.png" margin="0">
              </lido-image>
              <lido-image onEntry="this.position='absolute'; this.padding='0px';" y="landscape.40%, portrait.40%" x="landscape.40%, portrait.48%" height="225px" width="27%" tab-index="13" bg-color="transparent" id="wings-image2" disable-edit="true" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/rockethandle_bg_wordnote%201.png" margin="0">
              </lido-image>
              <lido-image height="landscape.210px, portrait.210px" width="landscape.10%, portrait.10%" onEntry="this.zIndex='9';" bg-color="transparent" id="rocket-end" disable-edit="true" tab-index="14" margin="landscape. 0px -5% 0px -28px, portrait.5px -5% 0px -15px " src="https://media.githubusercontent.com/media/chimple/bahama/refs/heads/master/assets/games/rocket/textures/rocketend_bg_wordnote.png">
              </lido-image>
              <lido-image onEntry="this.padding='0px';" height="220px" width="25%" tab-index="15" bg-color="transparent" disable-edit="true" id="fire_image1" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/Fire.png" margin="0">
              </lido-image>
          </lido-cell>
          <lido-cell disable-edit="true" layout="row" aria-hidden="true" visible="true" height="landscape.130px, portrait.0px" margin="landscape.35% 0px 0px 0px, portrait.130% 0px 0px 0px" onEntry="this.z-index='9px'; this.justify-content='center'; this.padding='10px';" bg-color="transparent" justifyContent="space-evenly" width="100%" tab-index="29" id="first_alphabetRow" gap="landscape.4px, portrait.0px">
              <lido-text bg-color="#F34D08" string="k" onTouch="this.speak='true';" onEntry="this.padding='0px'; this.boxShadow='none !important';" font-size="100px" font-color="white" font-family="Baloo Bhai 2" id="k" visible="true" value="k" tab-index="16" dropAttr="infinite-drop" type="drag" disable-edit="true" height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%">
              </lido-text>
              <lido-text bg-color="#81C127" string="q"  onTouch="this.speak='true';" onEntry="this.padding='0px'; this.boxShadow='none !important';" font-size="100px" font-color="white" font-family="Baloo Bhai 2" id="q" visible="true" value="q" tab-index="16" dropAttr="infinite-drop" type="drag" disable-edit="true" height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%">
              </lido-text>
              <lido-text bg-color="#FFC805" string="d"  onTouch="this.speak='true';" onEntry="this.padding='0px'; this.boxShadow='none !important';" font-size="100px" font-color="white" font-family="Baloo Bhai 2" id="d" visible="true" value="d" tab-index="16" dropAttr="infinite-drop" type="drag" disable-edit="true" height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%">
              </lido-text>
              <lido-text bg-color="#F55376" string="x"  onTouch="this.speak='true';" onEntry="this.padding='0px'; this.boxShadow='none !important';" font-size="100px" font-color="white" font-family="Baloo Bhai 2" id="x" visible="true" value="x" tab-index="16" dropAttr="infinite-drop" type="drag" disable-edit="true" height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%">
              </lido-text>
              <lido-text bg-color="#5D44BD" string="a"  onTouch="this.speak='true';" onEntry="this.padding='0px'; this.boxShadow='none !important';" font-size="100px" font-color="white" font-family="Baloo Bhai 2" id="a" visible="true" value="a" tab-index="16" dropAttr="infinite-drop" type="drag" disable-edit="true" height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%">
              </lido-text>
              <lido-text bg-color="#F34D08" string="p"  onTouch="this.speak='true';" onEntry="this.padding='0px'; this.boxShadow='none !important';" font-size="100px" font-color="white" font-family="Baloo Bhai 2" id="p" visible="true" value="p" tab-index="16" dropAttr="infinite-drop" type="drag" disable-edit="true" height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%">
              </lido-text>
              <lido-text bg-color="#81C127" string="g"  onTouch="this.speak='true';" onEntry="this.padding='0px'; this.boxShadow='none !important';" font-size="100px" font-color="white" font-family="Baloo Bhai 2" id="g" visible="true" value="g" tab-index="16" dropAttr="infinite-drop" type="drag" disable-edit="true" height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%">
              </lido-text>
              <lido-text bg-color="#FFC805" string="l"  onTouch="this.speak='true';" onEntry="this.padding='0px'; this.boxShadow='none !important';" font-size="100px" font-color="white" font-family="Baloo Bhai 2" id="l" visible="true" value="l" tab-index="16" dropAttr="infinite-drop" type="drag" disable-edit="true" height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%">
              </lido-text>
              <lido-text bg-color="#F55376" string="w"  onTouch="this.speak='true';" onEntry="this.padding='0px'; this.boxShadow='none !important';" font-size="100px" font-color="white" font-family="Baloo Bhai 2" id="w" visible="true" value="w" tab-index="16" dropAttr="infinite-drop" type="drag" disable-edit="true" height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%">
              </lido-text>
              <lido-text bg-color="#5D44BD" string="i"  onTouch="this.speak='true';" onEntry="this.padding='0px'; this.boxShadow='none !important';" font-size="100px" font-color="white" font-family="Baloo Bhai 2" id="i" visible="true" value="i" tab-index="16" dropAttr="infinite-drop" type="drag" disable-edit="true" height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%">
              </lido-text>
              <lido-text bg-color="#F34D08" string="f"  onTouch="this.speak='true';" onEntry="this.padding='0px'; this.boxShadow='none !important';" font-size="100px" font-color="white" font-family="Baloo Bhai 2" id="f" visible="true" value="f" tab-index="16" dropAttr="infinite-drop" type="drag" disable-edit="true" height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%">
              </lido-text>
              <lido-text bg-color="#81C127" string="m"  onTouch="this.speak='true';" onEntry="this.padding='0px'; this.boxShadow='none !important';" font-size="100px" font-color="white" font-family="Baloo Bhai 2" id="m" visible="true" value="m" tab-index="16" dropAttr="infinite-drop" type="drag" disable-edit="true" height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%">
              </lido-text>
              <lido-text bg-color="#FFC805" string="e"  onTouch="this.speak='true';" onEntry="this.padding='0px'; this.boxShadow='none !important';" font-size="100px" font-color="white" font-family="Baloo Bhai 2" id="e" visible="true" value="e" tab-index="16" dropAttr="infinite-drop" type="drag" disable-edit="true" height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%">
              </lido-text>
          </lido-cell>
          <lido-cell layout="row" aria-hidden="true" visible="true" onEntry="this.z-index='9px'; this.padding='10px'; this.justify-content='center';" bg-color="transparent" justifyContent="space-evenly" width="100%" tab-index="43" id="second_alphabetRow" gap="landscape.4px, portrait.0px" margin="landscape.0px 0px 0px 0px, portrait.90px 0px 0px 0px">
              <lido-text bg-color="#5D44BD" string="z"  onTouch="this.speak='true';" onEntry="this.padding='0px'; this.boxShadow='none !important';" font-size="100px" font-color="white" font-family="Baloo Bhai 2" id="z" visible="true" value="z" tab-index="16" dropAttr="infinite-drop" type="drag" disable-edit="true" height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%">
              </lido-text>
              <lido-text bg-color="#F55376" string="j"  onTouch="this.speak='true';" onEntry="this.padding='0px'; this.boxShadow='none !important';" font-size="100px" font-color="white" font-family="Baloo Bhai 2" id="j" visible="true" value="j" tab-index="16" dropAttr="infinite-drop" type="drag" disable-edit="true" height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%">
              </lido-text>
              <lido-text bg-color="#FFC805" string="o"  onTouch="this.speak='true';" onEntry="this.padding='0px'; this.boxShadow='none !important';" font-size="100px" font-color="white" font-family="Baloo Bhai 2" id="o" visible="true" value="o" tab-index="16" dropAttr="infinite-drop" type="drag" disable-edit="true" height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%">
              </lido-text>
              <lido-text bg-color="#81C127" string="b"  onTouch="this.speak='true';" onEntry="this.padding='0px'; this.boxShadow='none !important';" font-size="100px" font-color="white" font-family="Baloo Bhai 2" id="b" visible="true" value="b" tab-index="16" dropAttr="infinite-drop" type="drag" disable-edit="true" height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%">
              </lido-text>
              <lido-text bg-color="#F34D08" string="n"  onTouch="this.speak='true';" onEntry="this.padding='0px'; this.boxShadow='none !important';" font-size="100px" font-color="white" font-family="Baloo Bhai 2" id="n" visible="true" value="n" tab-index="16" dropAttr="infinite-drop" type="drag" disable-edit="true" height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%">
              </lido-text>
              <lido-text bg-color="#5D44BD" string="h"  onTouch="this.speak='true';" onEntry="this.padding='0px'; this.boxShadow='none !important';" font-size="100px" font-color="white" font-family="Baloo Bhai 2" id="h" visible="true" value="h" tab-index="16" dropAttr="infinite-drop" type="drag" disable-edit="true" height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%">
              </lido-text>
              <lido-text bg-color="#F55376" string="t"  onTouch="this.speak='true';" onEntry="this.padding='0px'; this.boxShadow='none !important';" font-size="100px" font-color="white" font-family="Baloo Bhai 2" id="t" visible="true" value="t" tab-index="16" dropAttr="infinite-drop" type="drag" disable-edit="true" height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%">
              </lido-text>
              <lido-text bg-color="#FFC805" string="s"  onTouch="this.speak='true';" onEntry="this.padding='0px'; this.boxShadow='none !important';" font-size="100px" font-color="white" font-family="Baloo Bhai 2" id="s" visible="true" value="s" tab-index="16" dropAttr="infinite-drop" type="drag" disable-edit="true" height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%">
              </lido-text>
              <lido-text bg-color="#81C127" string="v"  onTouch="this.speak='true';" onEntry="this.padding='0px'; this.boxShadow='none !important';" font-size="100px" font-color="white" font-family="Baloo Bhai 2" id="v" visible="true" value="v" tab-index="16" dropAttr="infinite-drop" type="drag" disable-edit="true" height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%">
              </lido-text>
              <lido-text bg-color="#F34D08" string="r"  onTouch="this.speak='true';" onEntry="this.padding='0px'; this.boxShadow='none !important';" font-size="100px" font-color="white" font-family="Baloo Bhai 2" id="r" visible="true" value="r" tab-index="16" dropAttr="infinite-drop" type="drag" disable-edit="true" height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%">
              </lido-text>
              <lido-text bg-color="#5D44BD" string="c"  onTouch="this.speak='true';" onEntry="this.padding='0px'; this.boxShadow='none !important';" font-size="100px" font-color="white" font-family="Baloo Bhai 2" id="c" visible="true" value="c" tab-index="16" dropAttr="infinite-drop" type="drag" disable-edit="true" height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%">
              </lido-text>
              <lido-text bg-color="#F55376" string="y"  onTouch="this.speak='true';" onEntry="this.padding='0px'; this.boxShadow='none !important';" font-size="100px" font-color="white" font-family="Baloo Bhai 2" id="y" visible="true" value="y" tab-index="16" dropAttr="infinite-drop" type="drag" disable-edit="true" height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%">
              </lido-text>
              <lido-text bg-color="#FFC805" string="u"  onTouch="this.speak='true';" onEntry="this.padding='0px'; this.boxShadow='none !important';" font-size="100px" font-color="white" font-family="Baloo Bhai 2" id="u" visible="true" value="u" tab-index="16" dropAttr="infinite-drop" type="drag" disable-edit="true" height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%">
              </lido-text>
          </lido-cell>
    </lido-container>
  </main>`;
}
