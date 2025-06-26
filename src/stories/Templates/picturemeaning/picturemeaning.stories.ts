import { html } from 'lit-html';
import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'Templates/picturemeaning',
};
export default meta;

export const Default: StoryObj = {
  args: {
    objective1: 'They want to buy bananas.',
    option1: 'He wants to buy mangoes',
    option2: 'She wants to buy bananas',
    option3: 'They want to buy bananas.',
    objective2: 'Tiger',
    option4: 'Zebra',
    option5: 'Lion',
    option6: 'Tiger',
    objective3: 'a',
    option7: 'b',
    option8: 'a',
    option9: 'c',
    objective4: "2",
    option10: "2",
    option11: "3",
    option12: "1",
  },

  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}}"></lido-home>`;
  },
};

function getContainerXml(args) {
  return `<main>
	<lido-container id="lido-container" tab-index="1" value="mainContainer" bg-color="transparent" objective="${args.objective1}" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/picturemeaning/Underwater.png" height="100%" width="100%" onCorrect="option1.speak='true'; lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="true">
        <!-- Chimple Avatar -->
        <lido-cell layout="pos" id="avatar-cell" disable-edit="true" height="305px" width="227px" x="landscape.1274px, portrait.541px" y="landscape.591px, portrait.1274px" z="1" bg-color="transparent" visible="true" onEntry="this.animation='rightToPlace 2.5s linear';">
            <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="462px" width="356px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="Chimple Character">
            </lido-avatar>
        </lido-cell>

        <!-- Main Content -->
        <lido-cell layout="col" visible="true" width="100%" height="100%" bg-color="transparent">
            <!-- Heading -->
            <lido-cell visible="true" margin="landscape.12px 0px -17px 0px, portrait.-24px 0px 37px 0px">
                <lido-image id="bg-image1" disable-edit="true" visible="true" bg-color='transparent' src="https://media.githubusercontent.com/media/chimple/bahama/master/assets/games/picturemeaning/textures/picture_card.png" width="100%" height="100%">
                </lido-image>
            </lido-cell>
            <!-- Options -->
            <lido-cell layout="landscape.col, portrait.row" visible="true" width="60%" height="auto" bg-color="transparent" onEntry="this.justifyContent='center'; this.gap='20px';">
                <lido-image id="option1" is-slice="true" font-family="'Baloo Bhai 2'" src="https://media.githubusercontent.com/media/chimple/bahama/master/assets/games/picturemeaning/textures/answer_card.png" value="${args.option3}" tab-index="1" visible="true" type="click" bg-color="transparent" onEntry="this.boxShadow='solid #4c131b 0 5px 3px'; this.borderRadius='10px'; this.color='white'; this.fontSize='80px'; this.fontWeight='600';" width="landscape.100%, portrait.100%" height="landscape.100%, portrait.62%" margin="landscape.0px 21px 0px 0px , portrait. 0">
                    <lido-text string="${args.option3}" font-family="'Baloo Bhai 2'" fontSize='80px' bg-color='transparent' onEntry='this.color="white"'></lido-text>
                </lido-image>

                <lido-image id="option2" is-slice="true" font-family="'Baloo Bhai 2'" src="https://media.githubusercontent.com/media/chimple/bahama/master/assets/games/picturemeaning/textures/answer_card.png" value="${args.option1}" tab-index="2" visible="true" type="click" bg-color="transparent" onEntry="this.boxShadow='solid #4c131b 0 5px 3px'; this.color='white'; this.fontSize='80px'; this.fontWeight='600';" width="landscape.100%, portrait.100%" height="landscape.100%, portrait.62%" margin="landscape.0px 21px 0px 0px , portrait. 0">
                    <lido-text string="${args.option1}" font-family="'Baloo Bhai 2'" fontSize='80px' bg-color='transparent' onEntry='this.color="white"'></lido-text>
                </lido-image>
                
                <lido-image id="option3" is-slice="true" font-family="'Baloo Bhai 2'" src="https://media.githubusercontent.com/media/chimple/bahama/master/assets/games/picturemeaning/textures/answer_card.png" value="${args.option2}" tab-index="3" visible="true" type="click" bg-color="transparent" onEntry="this.boxShadow='solid #4c131b 0 5px 3px'; this.color='white'; this.fontSize='80px'; this.fontWeight='600';" width="landscape.100%, portrait.100%" height="landscape.100%, portrait.62%" margin="landscape.0px 21px 0px 0px , portrait. 0">
                    <lido-text string="${args.option2}" font-family="'Baloo Bhai 2'" fontSize='80px' bg-color='transparent' onEntry='this.color="white"'></lido-text>
                </lido-image>
            </lido-cell>
        </lido-cell>
    </lido-container>

    <lido-container id="lido-container" tab-index="1" value="mainContainer" bg-color="transparent" objective="${args.objective2}" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/picturemeaning/Underwater.png" height="100%" width="100%" onCorrect="tiger.speak='true'; lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="true">
        <!-- Chimple Avatar -->
        <lido-cell layout="pos" id="avatar-cell" disable-edit="true" height="305px" width="227px" x="landscape.1274px, portrait.541px" y="landscape.591px, portrait.1274px" z="1" bg-color="transparent" visible="true" onEntry="this.animation='rightToPlace 2.5s linear';">
            <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="462px" width="356px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="Chimple Character">
            </lido-avatar>
        </lido-cell>

        <!-- Main Content -->
        <lido-cell layout="col" visible="true" width="100%" height="100%" bg-color="transparent">
            <!-- Heading -->
            <lido-image is-slice="true" id="bg-image5" disable-edit="true" visible="true" bg-color='transparent' src="https://media.githubusercontent.com/media/chimple/bahama/master/assets/games/picturemeaning/textures/answer_card.png" value="National Animal of India" width="40%" height="50%">
            <lido-text string='National Animal of India' font-family="'Baloo Bhai 2'" fontSize='80px' bg-color='transparent' onEntry='this.color="yellow"; this.padding="15px";this.fontWeight="600"'></lido-text>
            </lido-image>

            <!-- Options -->
            <lido-cell layout="landscape.row, portrait.row" visible="true" width="60%" height="auto" bg-color="transparent" onEntry="this.justifyContent='center'; this.gap='20px';">
                <lido-image id="option4" font-family="'Baloo Bhai 2'" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/picturemeaning/zebra.jpg" value="${args.option4}" tab-index="1" visible="true" type="click" bg-color="transparent" onEntry="this.fontWeight='600';" width="landscape.100%, portrait.40%" height="landscape.100%, portrait.22%" margin="landscape.0 , portrait. 0">
                    <!-- <lido-text string='Zebra' font-family="'Baloo Bhai 2'" fontSize='80px' bg-color='transparent' onEntry='this.color="white"'></lido-text> -->
                </lido-image>

                <lido-image id="option5" font-family="'Baloo Bhai 2'" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/picturemeaning/lion.jpg" value="${args.option5}" tab-index="2" visible="true" type="click" bg-color="transparent" onEntry="this.color='white'; this.fontSize='80px'; this.fontWeight='600';" width="landscape.100%, portrait.100%" height="landscape.100%, portrait.62%" margin="landscape.0 , portrait. 0">
                    <!-- <lido-text string='Lion' font-family="'Baloo Bhai 2'" fontSize='80px' bg-color='transparent' onEntry='this.color="white"'></lido-text> -->
                </lido-image>
                
                <lido-image id="option6" font-family="'Baloo Bhai 2'" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/picturemeaning/tiger.jpg" value="${args.option6}" tab-index="3" visible="true" type="click" bg-color="transparent" onEntry="this.color='white'; this.fontSize='80px'; this.fontWeight='600';" width="landscape.100%, portrait.100%" height="landscape.100%, portrait.62%" margin="landscape.0 , portrait.0">
                </lido-image>
            </lido-cell>

            <lido-cell>
            <lido-text id='tiger' string='Tiger' font-family="'Baloo Bhai 2'" fontSize='80px' bg-color='transparent' onEntry='this.color="white"'></lido-text>
            </lido-cell>
        </lido-cell>
    </lido-container>

    <lido-container id="lido-container" tab-index="1" value="mainContainer" bg-color="transparent" objective="${args.objective3}" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/picturemeaning/Underwater.png" height="100%" width="100%" onCorrect="option8.speak='true'; lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="true">
        <!-- Chimple Avatar -->
        <lido-cell layout="pos" id="avatar-cell" disable-edit="true" height="305px" width="227px" x="landscape.1274px, portrait.541px" y="landscape.591px, portrait.1274px" z="1" bg-color="transparent" visible="true" onEntry="this.animation='rightToPlace 2.5s linear';">
            <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="462px" width="356px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="Chimple Character">
            </lido-avatar>
        </lido-cell>

        <!-- Main Content -->
        <lido-cell layout="col" visible="true" width="100%" height="100%" bg-color="transparent">
            <!-- Heading -->
            <lido-image is-slice="true" id="bg-image5" disable-edit="true" visible="true" bg-color='transparent' src="https://media.githubusercontent.com/media/chimple/bahama/master/assets/games/picturemeaning/textures/answer_card.png" value='Find the Alphabet - "a"' width="40%" height="50%">
            <lido-text string='Find the Alphabet - "a"' font-family="'Baloo Bhai 2'" fontSize='80px' bg-color='transparent' onEntry='this.color="yellow"; this.padding="15px";this.fontWeight="600"'></lido-text>
            </lido-image>

            <!-- Options -->
            <lido-cell layout="landscape.row, portrait.row" visible="true" width="60%" height="auto" bg-color="transparent" onEntry="this.justifyContent='center'; this.gap='20px';">
                <lido-image id="option7" is-slice="true" font-family="'Baloo Bhai 2'" src="https://media.githubusercontent.com/media/chimple/bahama/master/assets/games/picturemeaning/textures/picture_card.png" value="${args.option9}" tab-index="1" visible="true" type="click" bg-color="transparent" onEntry="this.boxShadow='solid #4c131b 0 5px 3px'; this.borderRadius='10px'; this.color='white'; this.fontSize='80px'; this.fontWeight='600';" width="landscape.100%, portrait.100%" height="landscape.100%, portrait.62%" margin="landscape.0px 21px 0px 0px , portrait. 0">
                    <lido-text string='${args.option9}' font-family="'Baloo Bhai 2'" fontSize='80px' bg-color='transparent' onEntry='this.color="white"'></lido-text>
                </lido-image>

                <lido-image id="option8" is-slice="true" font-family="'Baloo Bhai 2'" src="https://media.githubusercontent.com/media/chimple/bahama/master/assets/games/picturemeaning/textures/picture_card.png" value="${args.option8}" tab-index="2" visible="true" type="click" bg-color="transparent" onEntry="this.boxShadow='solid #4c131b 0 5px 3px'; this.color='white'; this.fontSize='80px'; this.fontWeight='600';" width="landscape.100%, portrait.100%" height="landscape.100%, portrait.62%" margin="landscape.0px 21px 0px 0px , portrait. 0">
                    <lido-text string='${args.option8}' font-family="'Baloo Bhai 2'" fontSize='80px' bg-color='transparent' onEntry='this.color="white"'></lido-text>
                </lido-image>
                
                <lido-image id="option9" is-slice="true" font-family="'Baloo Bhai 2'" src="https://media.githubusercontent.com/media/chimple/bahama/master/assets/games/picturemeaning/textures/picture_card.png" value="${args.option7}" tab-index="3" visible="true" type="click" bg-color="transparent" onEntry="this.boxShadow='solid #4c131b 0 5px 3px'; this.color='white'; this.fontSize='80px'; this.fontWeight='600';" width="landscape.100%, portrait.100%" height="landscape.100%, portrait.62%" margin="landscape.0px 21px 0px 0px , portrait. 0">
                    <lido-text string='${args.option7}' font-family="'Baloo Bhai 2'" fontSize='80px' bg-color='transparent' onEntry='this.color="white"'></lido-text>
                </lido-image>
            </lido-cell>
        </lido-cell>
    </lido-container>

    <lido-container id="lido-container" tab-index="1" value="mainContainer" bg-color="transparent" objective="${args.objective4}" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/picturemeaning/Underwater.png" height="100%" width="100%" onCorrect="option7.speak='true'; lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="true">
        <!-- Chimple Avatar -->
        <lido-cell layout="pos" id="avatar-cell" disable-edit="true" height="305px" width="227px" x="landscape.1274px, portrait.541px" y="landscape.591px, portrait.1274px" z="1" bg-color="transparent" visible="true" onEntry="this.animation='rightToPlace 2.5s linear';">
            <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="462px" width="356px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="Chimple Character">
            </lido-avatar>
        </lido-cell>

        <!-- Main Content -->
        <lido-cell layout="col" visible="true" width="100%" height="100%" bg-color="transparent">
            <!-- Heading -->
            <lido-image is-slice="true" id="bg-image5" disable-edit="true" visible="true" bg-color='transparent' src="https://media.githubusercontent.com/media/chimple/bahama/master/assets/games/picturemeaning/textures/answer_card.png" value='Find the number - "2"' width="40%" height="50%">
            <lido-text string='Find the number - 2' font-family="'Baloo Bhai 2'" fontSize='80px' bg-color='transparent' onEntry='this.color="yellow"; this.padding="15px";this.fontWeight="600"'></lido-text>
            </lido-image>

            <!-- Options -->
            <lido-cell layout="landscape.row, portrait.row" visible="true" width="60%" height="auto" bg-color="transparent" onEntry="this.justifyContent='center'; this.gap='20px';">
                <lido-image id="option7" is-slice="true" font-family="'Baloo Bhai 2'" src="https://media.githubusercontent.com/media/chimple/bahama/master/assets/games/picturemeaning/textures/picture_card.png" value="${args.option10}" tab-index="1" visible="true" type="click" bg-color="transparent" onEntry="this.boxShadow='solid #4c131b 0 5px 3px'; this.borderRadius='10px'; this.color='white'; this.fontSize='80px'; this.fontWeight='600';" width="landscape.100%, portrait.100%" height="landscape.100%, portrait.62%" margin="landscape.0px 21px 0px 0px , portrait. 0">
                    <lido-text string='${args.option10}' font-family="'Baloo Bhai 2'" fontSize='80px' bg-color='transparent' onEntry='this.color="white"'></lido-text>
                </lido-image>

                <lido-image id="option8" is-slice="true" font-family="'Baloo Bhai 2'" src="https://media.githubusercontent.com/media/chimple/bahama/master/assets/games/picturemeaning/textures/picture_card.png" value="${args.option11}" tab-index="2" visible="true" type="click" bg-color="transparent" onEntry="this.boxShadow='solid #4c131b 0 5px 3px'; this.color='white'; this.fontSize='80px'; this.fontWeight='600';" width="landscape.100%, portrait.100%" height="landscape.100%, portrait.62%" margin="landscape.0px 21px 0px 0px , portrait. 0">
                    <lido-text string='${args.option11}' font-family="'Baloo Bhai 2'" fontSize='80px' bg-color='transparent' onEntry='this.color="white"'></lido-text>
                </lido-image>
                
                <lido-image id="option9" is-slice="true" font-family="'Baloo Bhai 2'" src="https://media.githubusercontent.com/media/chimple/bahama/master/assets/games/picturemeaning/textures/picture_card.png" value="${args.option12}" tab-index="3" visible="true" type="click" bg-color="transparent" onEntry="this.boxShadow='solid #4c131b 0 5px 3px'; this.color='white'; this.fontSize='80px'; this.fontWeight='600';" width="landscape.100%, portrait.100%" height="landscape.100%, portrait.62%" margin="landscape.0px 21px 0px 0px , portrait. 0">
                    <lido-text string="${args.option12}" font-family="'Baloo Bhai 2'" fontSize='80px' bg-color='transparent' onEntry='this.color="white"'></lido-text>
                </lido-image>
            </lido-cell>
        </lido-cell>
    </lido-container>
</main>`;
}
