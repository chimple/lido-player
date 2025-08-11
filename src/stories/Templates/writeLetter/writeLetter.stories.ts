import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

type WriteLetterArgs = {
    traceImage: string[];
    traceMode: 'noFlow' | 'showFlow' | 'freeTrace' | 'blindTracing' | 'blindFreeTrace';
    flashCardImage: string[];
    frontSlot: 'front' | 'back';
    backSlot: 'front' | 'back';
    frontText: string;
    backText: string;
};

const meta: Meta<WriteLetterArgs> = {
    title: 'Templates/writeLetter',
    argTypes: {
        traceImage: { control: 'file', name: 'Trace Image URL', multiple: true },
        traceMode: { control: 'select', options: ['noFlow', 'showFlow', 'freeTrace', 'blindTracing', 'blindFreeTrace'], name: 'Trace Mode' },
        flashCardImage: { control: 'file', name: 'Flash Card Image URL', multiple: true },
        frontSlot: { control: 'select', options: ['front', 'back'], name: 'Flash Card Front Slot' },
        backSlot: { control: 'select', options: ['front', 'back'], name: 'Flash Card Back Slot' },
        frontText: { control: 'text', name: 'Flash Card Front Text' },
        backText: { control: 'text', name: 'Flash Card Back Text' },
    },
    args: {
        traceImage: ['https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/hindi_aa.svg'],
        traceMode: 'showFlow',
        flashCardImage: ['https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/flash-card/Unicorn.png'],
        frontSlot: 'front',
        backSlot: 'back',
        frontText: 'Unicorn is cute and shy',
        backText: 'I am a colour. I am mentioned in the poem along with Yellow and Blue. My name starts with the letter "R". Who am I?',
    },
};

export default meta;

export const WriteCard: StoryObj = {
    args: {
        frontSlot: "front",
        backSlot: "back",
        frontText: "Unicorn is cute and shy",
        backText: "I am a colour. I am mentioned in the poem along with Yellow and Blue. My name starts with the letter 'R'. Who am I?",
    },

    render: (args : WriteLetterArgs) => {
        const xml = getContainerXml(args);
        return html`<lido-home xml-data="${xml}" xmlData="${xml}"></lido-home>`;
    }
}

function getContainerXml(args: WriteLetterArgs){
    const traceImage = args.traceImage[0];
    const traceMode = args.traceMode;
    const flashCardImage = args.flashCardImage[0];
    const frontSlot = args.frontSlot;
    const backSlot = args.backSlot;
    const frontText = args.frontText;
    const backText = args.backText;
    if (!traceImage || !flashCardImage) {
        console.error('Trace image or flash card image is missing');
        return '';
    }
    return `
        <main>

            <lido-container tab-index="1" id="lido-container" objective="writeLetter" tabIndex="1"  value="mainContainer1" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/Sky.png" height="100%" width="100%" bg-Color="transparent"  visible="true"   onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="this.justifyContent='space-around';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="true" after-drop="false">

                <!-- Chimple Avatar -->
                <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos1" height="landscape.600px, portrait.700px" width="landscape.393px, portrait.485px" x="landscape.-24px, portrait.465px" y="landscape.360px, portrait.1025px" aria-hidden="true" z="1" bg-Color="transparent" visible="true"  onEntry="this.flex-shrink='0';">
                    <lido-avatar id="lido-avatar" disable-edit="true" visible="true"  height="inherit"  width="inherit" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}" onEntry="">
                    </lido-avatar>
                    <lido-image id="image" disable-edit="true" value="image" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/Shadow.png" bg-color="transparent" width="inherit" height="27px" x="landscape.-7px, portrait.-7px" y="landscape.450px, portrait.535px" alt-text="{shadowImage}">
                    </lido-image>
                </lido-cell>

                <!-- parent cell -->
                <lido-cell  layout="landscape.row, portrait.col" visible="true" width="100%" height="100%" bg-color="transparent">
                    <lido-cell  layout="col" visible="true" width="landscpae.27.5% , portrait.100%" height="landscpae.100% , portrait.27.5%" bg-color="transparent">
                    </lido-cell>

                    <lido-cell tab-index="2" layout="col" show-speak-icon="true" audio="" visible="true" width="landscape.725px, portrait.725px"  height="landscape.725px, portrait.725px" bg-color="white"  onEntry="this.border-radius='6px'; this.flex-shrink='0';">
                        <lido-trace id="image2" tab-index="3" value="a" visible="true" svg-source="${traceImage}" onCorrect=""  mode="${traceMode}" z="1" x="25px" y="25px" width="landscape.700px,portrait.700px" height="landscape.700px,portrait.700px" onEntry="" alt-text="{backgroundImage}">
                        </lido-trace>
                    </lido-cell>

                    <lido-cell  layout="col" visible="true" width="landscpae.27.5% , portrait.100%" height="landscpae.100% , portrait.27.5%" bg-color="transparent">
                    </lido-cell>
                </lido-cell>
            </lido-container>
            


            <lido-container id="lido-container" objective="writeCard" tab-index="1"  value="mainContainer1" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/Sky.png"  height="1600px" width="900px" bg-color="transparent"  visible="true"   onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="this.justifyContent='space-around';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="true" after-drop="false">

                <!-- Chimple Avatar -->
                <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos1" height="landscape.600px, portrait.700px" width="landscape.393px, portrait.485px" x="landscape.-24px, portrait.465px" y="landscape.385px, portrait.983px" aria-hidden="true" z="1" bg-color="transparent" visible="true"  onEntry="this.flex-shrink='0';">
                    <lido-avatar id="lido-avatar" disable-edit="true" visible="true"  height="inherit"  width="inherit" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}" onEntry="">
                    </lido-avatar>
                    <lido-image id="image" disable-edit="true" value="image" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/Shadow.png" bg-color="transparent" width="inherit" height="27px" x="landscape.-7px, portrait.-7px" y="landscape.450px, portrait.540px" alt-text="{shadowImage}">
                    </lido-image>
                </lido-cell>

                <!-- flash-card element -->
                <lido-cell layout="pos" id="pos2" disable-edit="true" value="pos2" width="landscape.594px, portrait.754px" height="landscape.725px, portrait.925px" x="landscape.519px, portrait.73px" y="landscape.127px, portrait.172px" aria-hidden="true" z="1" bg-color="transparent" visible="true"  onEntry="this.flex-shrink='0';">
                    <lido-flash-card x="50" y="100" width="landscape.594px, portrait.754px" height="landscape.725px, portrait.925px" bg-color="transparent" onEntry="this.border-radius='32px';" onTouch="">
                        <lido-cell layout="col" show-speak-icon="true" audio="" id="col1" slot="${frontSlot}" disable-edit="true" visible="true" width="landscape.594px, portrait.754px" height="landscape.725px, portrait.925px" bg-color="white" type="" tab-index="2" dropAttr="diagonal" onEntry="this.border-radius=32px; this.padding='8px 8px 16px 8px';" y="landscape.5px,portrait.10px">
                            <lido-image visible="true" src="${flashCardImage}" z="1" width="landscape.578px, portrait.738px" height="landscape.578px, portrait.738px" onEntry="this.flex-shrink='0';" border-radius="24px 24px 6px 6px" alt-text="{image1}">
                            </lido-image>
                            <lido-text id="txt1" width="553px" height="80px" display="flex" onEntry="this.textAlign='center'; this.flexDirection='column'; this.justifyContent='center'; this.alignItems='center'; this.flexShrink='0';" font-family="'Baloo Bhai 2'" font-size="52px" z="1" font-color="black" font-weight="500" color="#303030" string="${frontText}" visible="true" y="landscape.15px, portrait.15px" bg-color="white" margin="landscape.45px 0px 45px 0px, portrait.45px 0px 45px 0px">
                            </lido-text>
                        </lido-cell>
                        <lido-cell layout="col" id="col2" show-speak-icon="true" audio="" slot="${backSlot}" disable-edit="true" visible="true"  width="landscape.594px, portrait.754px" height="landscape.725px, portrait.925px" bg-color="white" type="" tab-index="3" dropAttr="diagonal" onEntry="this.border-radius=32px; this.padding='8px 8px 16px 8px';" y="landscape.,portrait.">
                            <lido-text id="txt2" height="480px" width="495px" display="flex" onEntry="this.textAlign='left'; this.lineHeight='1.5';" font-family="'Baloo Bhai 2'" font-size="52px" z="1" font-color="black" font-weight="500" color="#000000" string="${backText}" visible="true" y="landscape.35px, portrait.15px" bg-color="white" margin="landscape.45px 0px 45px 0px, portrait.45px 0px 45px 0px">
                            </lido-text>
                        </lido-cell>
                    </lido-flash-card>
                </lido-cell>

            </lido-container>
        </main>
    `
}
