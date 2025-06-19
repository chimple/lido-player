import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

interface SceneArgs {
  objective: string;
  heading: string;
}

const meta: Meta = {
  title: 'Templates/OpenWindowUI',
  argTypes: {
    objective: { control: 'text' },
    heading: { control: 'text' },
  },
};
export default meta;

export const OpenWindow: StoryObj<SceneArgs> = {
  args: {
    objective: "mom",
    heading: "MOM",
  },
  render: (args: SceneArgs) => {
    const xml = getOpenWindowXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

function getOpenWindowXml(args: SceneArgs): string {
  const letters = args.heading.split('').map((char, i) => `
    <lido-text id="heading${i + 1}" tabIndex="${i + 2}" flexibleWidth="false" visible="true"
      borderImage="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/open_window/letter_bg.png"
      bgColor="transparent" width="180px" height="210px"
      string="${char}" fontColor="black" font="'Baloo 2', serif"
      font-size="146px" z="0"
      onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';">
    </lido-text>
  `).join('');

  return `<main>
    <lido-container id="lido-container" tabIndex="1" bgImage="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/open_window/Spring.png" objective="mom" height="100%" width="100%"  visible="true" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" onEntry="heading1.speak='true'; this.sleep='500'; heading2.speak='true'; this.sleep='500'; heading3.speak='true'; this.sleep='800'; heading0.speak='true';">
       	<lido-cell layout="row" visible="true" width="landscape.50%, portrait.80%" height="landscape.30%, portrait.10%" bgColor="transparent" margin="5%">
	   		<lido-text id="heading0" string="MOM" x="-100px" y="-100px" onEntry="this.position='absolute';">
            </lido-text>
			<lido-text id="heading1"  tabIndex="2" flexibleWidth="false" visible="true" borderImage="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/open_window/letter_bg.png" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="150px" height="210px" string="M" fontColor="black" font="'Baloo 2', serif" font-size="146px" z="0">
			</lido-text>
			<lido-text id="heading2"  tabIndex="3" flexibleWidth="false" visible="true" borderImage="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/open_window/letter_bg.png" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="150px" height="210px" string="O" fontColor="black" font="'Baloo 2', serif" font-size="146px" z="0">
			</lido-text>
			<lido-text id="heading3"  tabIndex="4" flexibleWidth="false" visible="true" borderImage="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/open_window/letter_bg.png" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="150px" height="210px" string="M" fontColor="black" font="'Baloo 2', serif" font-size="146px" z="0">
			</lido-text>
        </lido-cell>
		<lido-cell layout="row" visible="true" width="75%" height="25%" bgColor="transparent" margin="5%">
			<lido-cell layout="pos" id="pos1" disableEdit="true" value="pos2" height="305px" width="227px" x="landscape.620px, portrait.270px" y="landscape.440px, portrait.1200px" ariaHidden="true" z="1" bgColor="transparent" visible="true" onEntry="this.padding-right=100px">
				<lido-image id="image" disableEdit="true" value="image" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/open_window/door.png" bgColor="transparent" width="195px" height="285px" x="landscape.80px, portrait.80px" y="landscape.90px, portrait.90px" altText="{shadowImage}">
				</lido-image>
				<lido-avatar id="lido-avatar" disableEdit="true" visible="true" height="480px" width="220px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" altText="{chimpleCharacterRive}" x="65px" y="-25px">
				</lido-avatar>
			</lido-cell>
			<lido-cell visible="true" layout="col" width="250px"  height="180px" value="sun" type="click" onEntry="this.background='white'; this.background-color='white !important'; this.box-shadow='white !important';">
				<lido-image id="image1" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/open_window/sun.png"></lido-image>
			</lido-cell>
			<lido-cell visible="true" layout="col" width="250px"  height="180px" value="mom" type="click" onEntry="this.background='white'; this.background-color='white !important'; this.box-shadow='white !important'; this.border-right='51px'">
				<lido-image id="image2" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/open_window/mom.png"></lido-image>
			</lido-cell>
        </lido-cell>
    </lido-container>
	
	<lido-container id="lido-container" tabIndex="1" bgImage="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/open_window/Spring.png" objective="city" height="100%" width="100%"  visible="true" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" onEntry="heading1.speak='true'; this.sleep='500'; heading2.speak='true'; this.sleep='500'; heading3.speak='true'; this.sleep='500'; heading4.speak='true'; this.sleep='800'; heading0.speak='true';">
       	<lido-cell layout="row" visible="true" width="landscape.60%, portrait.80%" height="landscape.30%, portrait.10%" bgColor="transparent" margin="5%">
	   		<lido-text id="heading0" string="CITY" x="-100px" y="-100px" onEntry="this.position='absolute';">
            </lido-text>
			<lido-text id="heading1"  tabIndex="2" flexibleWidth="false" visible="true" borderImage="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/open_window/letter_bg.png" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="150px" height="210px" string="C" fontColor="black" font="'Baloo 2', serif" font-size="146px" z="0">
			</lido-text>
			<lido-text id="heading2"  tabIndex="3" flexibleWidth="false" visible="true" borderImage="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/open_window/letter_bg.png" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="150px" height="210px" string="I" fontColor="black" font="'Baloo 2', serif" font-size="146px" z="0">
			</lido-text>
			<lido-text id="heading3"  tabIndex="4" flexibleWidth="false" visible="true" borderImage="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/open_window/letter_bg.png" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="150px" height="210px" string="T" fontColor="black" font="'Baloo 2', serif" font-size="146px" z="0">
			</lido-text>
			<lido-text id="heading4"  tabIndex="5" flexibleWidth="false" visible="true" borderImage="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/open_window/letter_bg.png" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="150px" height="210px" string="Y" fontColor="black" font="'Baloo 2', serif" font-size="146px" z="0">
			</lido-text>
        </lido-cell>
		<lido-cell layout="row" visible="true" width="75%" height="25%" bgColor="transparent" margin="5%">
			<lido-cell layout="pos" id="pos1" disableEdit="true" value="pos2" height="305px" width="227px" x="landscape.620px, portrait.270px" y="landscape.440px, portrait.1200px" ariaHidden="true" z="1" bgColor="transparent" visible="true" onEntry="this.padding-right=100px">
				<lido-image id="image" disableEdit="true" value="image" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/open_window/door.png" bgColor="transparent" width="195px" height="285px" x="landscape.80px, portrait.80px" y="landscape.90px, portrait.90px" altText="{shadowImage}">
				</lido-image>
				<lido-avatar id="lido-avatar" disableEdit="true" visible="true" height="480px" width="220px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" altText="{chimpleCharacterRive}" x="65px" y="-25px">
				</lido-avatar>
			</lido-cell>
			<lido-cell visible="true" layout="col" width="250px"  height="180px" value="city" type="click" onEntry="this.background='white'; this.background-color='white !important'; this.box-shadow='white !important';">
				<lido-image id="image1" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/open_window/city.png"></lido-image>
			</lido-cell>
			<lido-cell visible="true" layout="col" width="250px"  height="180px" value="ball" type="click" onEntry="this.background='white'; this.background-color='white !important'; this.box-shadow='white !important'; this.border-right='51px'">
				<lido-image id="image2" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/open_window/ball.png"></lido-image>
			</lido-cell>
        </lido-cell>
    </lido-container>
  </main>`;
}
