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
    title: 'Templates/WriteCard',
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

            <lido-container id="lido-container"  tab-index="1"  value="mainContainer1" bg-image="${args.backgroundImage}" objective="" height="100%" width="100%" bg-color="transparent"  visible="true"   onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="this.justifyContent='space-around';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="true" after-drop="false">

                    <!-- Chimple Avatar -->
                    <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos1" height="landscape.393px, portrait.447px" width="landscape.292px, portrait.332px" x="landscape.-5px, portrait.600px" y="landscape.500px, portrait.1150px" aria-hidden="true" z="1" bg-color="transparent" visible="true"  onEntry="this.flex-shrink='0';">
                        <lido-avatar id="lido-avatar" disable-edit="true" visible="true"  height="inherit"  width="inherit" src="${args.avtarImgFile}" alt-text="{chimpleCharacterRive}" onEntry="">
                        </lido-avatar>
                        <lido-image id="image" disable-edit="true" value="image" visible="true" src="${args.shadowImage}" bg-color="transparent" width="inherit" height="20px" x="landscape.7px, portrait.5px" y="landscape.305px, portrait.365px" alt-text="{shadowImage}">
                        </lido-image>
                    </lido-cell>

                    <!-- parent cell -->
                    <lido-cell layout="landscape.row, portrait.col" visible="true" width="100%" height="100%" bg-color="transparent">

                        <lido-cell layout="col" visible="true" width="landscpae.27.5% , portrait.100%" height="landscpae.100% , portrait.27.5%" bg-color="transparent">
                        </lido-cell>

                        <lido-cell layout="col" visible="true" width="landscape.725px, portrait.725px"  height="landscape.725px, portrait.725px" bg-color="white"  onEntry="this.border-radius='6px'; this.flex-shrink='0';">
                            <lido-trace id="image2" tab-index="2" value="a" visible="true" svgSource='${traceSrc}' mode="${mode}" z="1" x="" y="" width="700px" height="700px" onEntry="" alt-text="{backgroundImage}">
                            </lido-trace>
                        </lido-cell>

                        <lido-cell layout="col" visible="true" width="landscpae.27.5% , portrait.100%" height="landscpae.100% , portrait.27.5%" bg-color="transparent">
                        </lido-cell>
                    </lido-cell>

            </lido-container>

            

            <lido-container id="lido-container" tab-index="1"  value="mainContainer1" bg-image="${args.backgroundImage}" objective="" height="1600px" width="900px" bg-color="transparent"  visible="true"   onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="this.justifyContent='space-around';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="true" after-drop="false">

                <!-- Chimple Avatar -->
                <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos1" height="landscape.393px, portrait.447px" width="landscape.292px, portrait.332px" x="landscape.-5px, portrait.575px" y="landscape.475px, portrait.1190px" aria-hidden="true" z="1" bg-color="transparent" visible="true"  onEntry="this.flex-shrink='0';">
                    <lido-avatar id="lido-avatar" disable-edit="true" visible="true"  height="inherit"  width="inherit" src="${args.avtarImgFile}" alt-text="{chimpleCharacterRive}" onEntry="">
                    </lido-avatar>
                    <lido-image id="image" disable-edit="true" value="image" visible="true" src="${args.shadowImage}" bg-color="transparent" width="inherit" height="20px" x="landscape.7px, portrait.5px" y="landscape.305px, portrait.365px" alt-text="{shadowImage}">
                    </lido-image>
                </lido-cell>

                <!-- flash-card element -->
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
                            </lido-text>
                        </lido-col>
                    </lido-flash-card>
                </lido-row>

            </lido-container>

        </main>
    `
}