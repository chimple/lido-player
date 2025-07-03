import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';


type WriteCardArgs = {
    backgroundImage: string;
    shadowImage: string;
    traceImgFile: string[];
    mode: 'noFlow' | 'showFlow' | 'freeTrace' | 'blindTracing' | 'blindFreeTrace';
    avtarImgFile: string;
    flashCardImage: string[];
    frontSlot: 'front' | 'back';
    backSlot: 'front' | 'back';
};

const defaultBackground = "https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/Sky.png";
const defaultShadowImg = "https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/Shadow.png";
const defaultAvatarImg = "https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv";

const meta: Meta<WriteCardArgs> = {
    title: 'Templates/writeCard',
    argTypes: {
        backgroundImage: { control: 'file', name: 'Background Image URL', multiple: false },
        avtarImgFile: { control: 'file',name: 'Avatar Image URL', multiple: false },
        shadowImage: {control:'file', name: 'Shadow Image URL', multiple: false},
        traceImgFile: { control: 'file', name: 'Trace Image URL', multiple: true },
        mode: { control: 'select', options: ['noFlow', 'showFlow', 'freeTrace', 'blindTracing', 'blindFreeTrace'], name: 'Trace Mode' },
        flashCardImage: { control: 'file', name: 'Flash Card Image URL', multiple: true },
        frontSlot: { control: 'select', options: ['front', 'back'], name: 'Flash Card Front Slot' },
        backSlot: { control: 'select', options: ['front', 'back'], name: 'Flash Card Back Slot' },
    },
    args: {
        backgroundImage: defaultBackground,
        avtarImgFile: defaultAvatarImg,
        shadowImage: defaultShadowImg,
        traceImgFile: ['https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/hindi_aa.svg'],
        mode: 'showFlow',
        flashCardImage: ['https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/flash-card/Unicorn.png'],
        frontSlot: 'front',
        backSlot: 'back',
    },
};

export default meta;

export const WriteCard: StoryObj = {
    args: {
        frontSlot: "front",
        backSlot: "back"
    },

    render: (args : WriteCardArgs) => {
        const xml = getContainerXml(args);
        return html`<lido-home xml-data="${xml}" xmlData="${xml}"></lido-home>`;
    }
}

function getContainerXml(args: WriteCardArgs){
    const traceSrc = args.traceImgFile[0];
    const mode = args.mode;
    const flashCardImage = args.flashCardImage[0];
    const frontSlot = args.frontSlot;
    const backSlot = args.backSlot;
    if (!traceSrc || !flashCardImage) {
        console.error('Trace image or flash card image is missing');
        return '';
    }
    return `
        <main>

<<<<<<< Updated upstream:src/stories/Templates/writeCard/write-card.stories.ts
            <lido-container id="lido-container"  tab-index="1"  value="mainContainer1" bg-image="${args.backgroundImage}" objective="" height="100%" width="100%" bg-color="transparent"  visible="true"   onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="this.justifyContent='space-around';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="true" after-drop="false">

                    <!-- Chimple Avatar -->
                    <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos1" height="landscape.393px, portrait.447px" width="landscape.292px, portrait.332px" x="landscape.-5px, portrait.600px" y="landscape.500px, portrait.1150px" aria-hidden="true" z="1" bg-color="transparent" visible="true"  onEntry="this.flex-shrink='0';">
                        <lido-avatar id="lido-avatar" disable-edit="true" visible="true"  height="inherit"  width="inherit" src="${args.avtarImgFile}" alt-text="{chimpleCharacterRive}" onEntry="">
                        </lido-avatar>
                        <lido-image id="image" disable-edit="true" value="image" visible="true" src="${args.shadowImage}" bg-color="transparent" width="inherit" height="20px" x="landscape.7px, portrait.5px" y="landscape.305px, portrait.365px" alt-text="{shadowImage}">
=======
            <lido-container id="lido-container" showPrevButton="false" showNextButton="false" objective="writeLetter" tabIndex="1"  value="mainContainer1" bgImage="${args.backgroundImage}" height="100%" width="100%" bgColor="transparent"  visible="true"   onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="this.justifyContent='space-around';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" showCheck="false" isContinueOnCorrect="true" afterDrop="false">

                    <!-- Chimple Avatar -->
                    <lido-cell layout="pos" id="pos1" disableEdit="true" value="pos1" height="landscape.600px, portrait.700px" width="landscape.393px, portrait.485px" x="landscape.-24px, portrait.465px" y="landscape.360px, portrait.1010px" ariaHidden="true" z="1" bgColor="transparent" visible="true"  onEntry="this.flex-shrink='0';">
                        <lido-avatar id="lido-avatar" disableEdit="true" visible="true"  height="inherit"  width="inherit" src="${args.avtarImgFile}" altText="{chimpleCharacterRive}" onEntry="">
                        </lido-avatar>
                        <lido-image id="image" disableEdit="true" value="image" visible="true" src="${args.shadowImage}" bgColor="transparent" width="inherit" height="27px" x="landscape.-7px, portrait.-7px" y="landscape.450px, portrait.535px" altText="{shadowImage}">
>>>>>>> Stashed changes:src/stories/Templates/writeCard/writeCard.stories.ts
                        </lido-image>
                    </lido-cell>

                    <!-- parent cell -->
<<<<<<< Updated upstream:src/stories/Templates/writeCard/write-card.stories.ts
                    <lido-cell layout="landscape.row, portrait.col" visible="true" width="100%" height="100%" bg-color="transparent">

                        <lido-cell layout="col" visible="true" width="landscpae.27.5% , portrait.100%" height="landscpae.100% , portrait.27.5%" bg-color="transparent">
                        </lido-cell>

                        <lido-cell layout="col" visible="true" width="landscape.725px, portrait.725px"  height="landscape.725px, portrait.725px" bg-color="white"  onEntry="this.border-radius='6px'; this.flex-shrink='0';">
                            <lido-trace id="image2" tab-index="2" value="a" visible="true" svgSource='${traceSrc}' mode="${mode}" z="1" x="" y="" width="700px" height="700px" onEntry="" alt-text="{backgroundImage}">
=======
                    <lido-cell layout="landscape.row, portrait.col" visible="true" width="100%" height="100%" bgColor="transparent">
                        <lido-cell layout="col" visible="true" width="landscpae.27.5% , portrait.100%" height="landscpae.100% , portrait.27.5%" bgColor="transparent">
                        </lido-cell>

                        <lido-cell layout="col" visible="true" width="landscape.725px, portrait.725px"  height="landscape.725px, portrait.725px" bgColor="white"  onEntry="this.border-radius='6px'; this.flex-shrink='0';" margin="landscape.0px 0px 0px 0px, portrait.0px 0px 250px 0px">
                            <lido-trace id="image2" tabIndex="2" value="a" visible="true" svgSource="${traceSrc}" onCorrect=""  mode="${mode}" z="1" x="" y="" width="700px" height="700px" onEntry="" altText="{backgroundImage}">
>>>>>>> Stashed changes:src/stories/Templates/writeCard/writeCard.stories.ts
                            </lido-trace>
                        </lido-cell>

                        <lido-cell layout="col" visible="true" width="landscpae.27.5% , portrait.100%" height="landscpae.100% , portrait.27.5%" bg-color="transparent">
                        </lido-cell>
                    </lido-cell>
            </lido-container>


<<<<<<< Updated upstream:src/stories/Templates/writeCard/write-card.stories.ts
            <lido-container id="lido-container" tab-index="1"  value="mainContainer1" bg-image="${args.backgroundImage}" objective="" height="1600px" width="900px" bg-color="transparent"  visible="true"   onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="this.justifyContent='space-around';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="true" after-drop="false">

                <!-- Chimple Avatar -->
                <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos1" height="landscape.393px, portrait.447px" width="landscape.292px, portrait.332px" x="landscape.-5px, portrait.575px" y="landscape.475px, portrait.1190px" aria-hidden="true" z="1" bg-color="transparent" visible="true"  onEntry="this.flex-shrink='0';">
                    <lido-avatar id="lido-avatar" disable-edit="true" visible="true"  height="inherit"  width="inherit" src="${args.avtarImgFile}" alt-text="{chimpleCharacterRive}" onEntry="">
                    </lido-avatar>
                    <lido-image id="image" disable-edit="true" value="image" visible="true" src="${args.shadowImage}" bg-color="transparent" width="inherit" height="20px" x="landscape.7px, portrait.5px" y="landscape.305px, portrait.365px" alt-text="{shadowImage}">
=======
            <lido-container id="lido-container" objective="writeCard" tabIndex="1"  value="mainContainer1" bgImage="${args.backgroundImage}"  height="1600px" width="900px" bgColor="transparent"  visible="true"   onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="this.justifyContent='space-around';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" showCheck="false" isContinueOnCorrect="true" afterDrop="false">

                <!-- Chimple Avatar -->
                <lido-cell layout="pos" id="pos1" disableEdit="true" value="pos1" height="landscape.600px, portrait.700px" width="landscape.393px, portrait.485px" x="landscape.-24px, portrait.465px" y="landscape.385px, portrait.983px" ariaHidden="true" z="1" bgColor="transparent" visible="true"  onEntry="this.flex-shrink='0';">
                    <lido-avatar id="lido-avatar" disableEdit="true" visible="true"  height="inherit"  width="inherit" src="${args.avtarImgFile}" altText="{chimpleCharacterRive}" onEntry="">
                    </lido-avatar>
                    <lido-image id="image" disableEdit="true" value="image" visible="true" src="${args.shadowImage}" bgColor="transparent" width="inherit" height="27px" x="landscape.-7px, portrait.-7px" y="landscape.450px, portrait.540px" altText="{shadowImage}">
>>>>>>> Stashed changes:src/stories/Templates/writeCard/writeCard.stories.ts
                    </lido-image>
                </lido-cell>

                <!-- flash-card element -->
<<<<<<< Updated upstream:src/stories/Templates/writeCard/write-card.stories.ts
                <lido-row visible="true" width="landscape.594px, portrait.754px" onEntry="" height="landscape.725px, portrait.925px" y="landscape.340px, portrait.300px" x="landscape.,portrait.520px" direction="landscape.row, portrait.column" bg-color="transparent">
                    <lido-flash-card x="50" y="100" width="landscape.594px, portrait.754px" height="landscape.725px, portrait.925px" bg-color="transparent" onEntry="this.border-radius='32px';">
                        <lido-col id="col1" slot="${frontSlot}" disable-edit="true" visible="true" width="landscape.594px, portrait.754px" height="landscape.695px, portrait.895px" bg-color="white" type="" tab-index="2" dropAttr="diagonal"  onEntry="this.border-radius=32px; this.padding='2px 8px 16px 8px';" y="landscape.,portrait." >
                            <lido-image visible="true" src="${flashCardImage}" z="1" width="landscape.578px, portrait.738px" height="landscape.578px, portrait.738px" onEntry="this.flex-shrink='0';" borderRadius="24px 24px 6px 6px" alt-text="{image1}">
                            </lido-image>
                            <lido-text width="371px" height="80px" display="flex" onEntry="this.text-align='center'; this.flex-direction='cloumn'; this.justify-content='center'; this.flex-shrink='0';" font="'Baloo Bhai 2'" font-size="64px" z="1" fontColor="black" fontWeight="500" color="#303030" string="Unicorn" visible="true" y="landscape.15px, portrait.15px" bg-color="white">
                            </lido-text>
                        </lido-col>
                        <lido-col id="col2" slot="${backSlot}" disable-edit="true" visible="true"  width="landscape.594px, portrait.754px" height="landscape.695px, portrait.895px" bg-color="white" type="" tab-index="2" dropAttr="diagonal" onEntry="this.border-radius=32px; this.padding='2px 8px 16px 8px';" y="landscape.,portrait.">
                            <lido-text id="col2" height="80px" width="371px" display="flex" onEntry="this.text-align='center'; this.flex-direction='cloumn'; this.justify-content='center'; this.flex-shrink='0';" font="'Baloo Bhai 2'" font-size="84px" z="1" fontColor="black" fontWeight="500" color="#000000" string="Unicorn" visible="true" y="landscape.35px, portrait.15px" bg-color="white">
=======
                <lido-cell layout="pos" id="pos2" disableEdit="true" value="pos2" width="landscape.594px, portrait.754px" height="landscape.725px, portrait.925px" x="landscape.519px, portrait.73px" y="landscape.127px, portrait.172px" ariaHidden="true" z="1" bgColor="transparent" visible="true"  onEntry="this.flex-shrink='0';">
                    <lido-flash-card x="50" y="100" width="landscape.594px, portrait.754px" height="landscape.725px, portrait.925px" bgColor="transparent" onEntry="this.border-radius='32px';" onTouch="">
                        <lido-cell layout="col" id="col1" slot="${frontSlot}" disableEdit="true" visible="true" width="landscape.594px, portrait.754px" height="landscape.725px, portrait.925px" bgColor="white" type="" tabIndex="2" dropAttr="diagonal" onEntry="this.border-radius=32px; this.padding='8px 8px 16px 8px';" y="landscape.5px,portrait.10px">
                            <lido-image visible="true" src="${flashCardImage}" z="1" width="landscape.578px, portrait.738px" height="landscape.578px, portrait.738px" onEntry="this.flex-shrink='0';" borderRadius="24px 24px 6px 6px" altText="{image1}">
                            </lido-image>
                            <lido-text width="371px" height="80px" display="flex" onEntry="this.text-align='center'; this.flex-direction='cloumn'; this.justify-content='center'; this.flex-shrink='0';" font="'Baloo Bhai 2'" fontSize="64px" z="1" fontColor="black" fontWeight="500" color="#303030" string="Unicorn" visible="true" y="landscape.15px, portrait.15px" bgColor="white" margin="landscape.45px 0px 45px 0px, portrait.45px 0px 45px 0px">
                            </lido-text>
                        </lido-cell>
                        <lido-cell layout="col" id="col2" slot="${backSlot}" disableEdit="true" visible="true"  width="landscape.594px, portrait.754px" height="landscape.725px, portrait.925px" bgColor="white" type="" tabIndex="2" dropAttr="diagonal" onEntry="this.border-radius=32px; this.padding='8px 8px 16px 8px';" y="landscape.,portrait.">
                            <lido-text id="col2" height="80px" width="371px" display="flex" onEntry="this.text-align='center'; this.flex-direction='cloumn'; this.justify-content='center'; this.flex-shrink='0';" font="'Baloo Bhai 2'" fontSize="84px" z="1" fontColor="black" fontWeight="500" color="#000000" string="Unicorn" visible="true" y="landscape.35px, portrait.15px" bgColor="white" margin="landscape.45px 0px 45px 0px, portrait.45px 0px 45px 0px">
>>>>>>> Stashed changes:src/stories/Templates/writeCard/writeCard.stories.ts
                            </lido-text>
                        </lido-cell>
                    </lido-flash-card>
                </lido-cell>

            </lido-container>
        </main>
    `
}