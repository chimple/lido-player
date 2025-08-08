import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

type flashCardArgs = {
    
    flashCardImage: string[];
    frontSlot: 'front' | 'back';
    backSlot: 'front' | 'back';
    frontText: string;
    backText: string;
};

const meta: Meta<flashCardArgs> = {
    title: 'Templates/writeCard',
    argTypes: {
        
        flashCardImage: { control: 'file', name: 'Flash Card Image URL', multiple: true },
        frontSlot: { control: 'select', options: ['front', 'back'], name: 'Flash Card Front Slot' },
        backSlot: { control: 'select', options: ['front', 'back'], name: 'Flash Card Back Slot' },
        frontText: { control: 'text', name: 'Flash Card Front Text' },
        backText: { control: 'text', name: 'Flash Card Back Text' },
    },
    args: {
       
        flashCardImage: ['https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/flash-card/Unicorn.png'],
        frontSlot: 'front',
        backSlot: 'back',
        frontText: 'Unicorn is cute and shy',
        backText: 'I am a colour. I am mentioned in the poem along with Yellow and Blue. My name starts with the letter "R". Who am I?',
    },
};

export default meta;

export const flashCard: StoryObj = {
    args: {
        frontSlot: "front",
        backSlot: "back",
        frontText: "Unicorn is cute and shy",
        backText: "I am a colour. I am mentioned in the poem along with Yellow and Blue. My name starts with the letter 'R'. Who am I?",
    },

    render: (args : flashCardArgs) => {
        const xml = getContainerXml(args);
        return html`<lido-home xml-data="${xml}" xmlData="${xml}"></lido-home>`;
    }
}

function getContainerXml(args: flashCardArgs){
   
    const flashCardImage = args.flashCardImage[0];
    const frontSlot = args.frontSlot;
    const backSlot = args.backSlot;
    const frontText = args.frontText;
    const backText = args.backText;
   
    return `
        <main>

            <lido-container id="lido-container" objective="" tabIndex="1"  value="mainContainer1" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/Sky.png"  height="1600px" width="900px" bg-color="transparent"  visible="true"   onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="this.justifyContent='space-around';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="true" after-drop="false" show-next-button="true">

                <!-- Chimple Avatar -->
                <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos1" height="landscape.600px, portrait.700px" width="landscape.393px, portrait.485px" x="landscape.-24px, portrait.465px" y="landscape.385px, portrait.983px" aria-hidden="true" z="1" bg-color="transparent" visible="true"  onEntry="this.flex-shrink='0';">
                    <lido-avatar id="lido-avatar" disable-edit="true" visible="true"  height="inherit"  width="inherit" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}" onEntry="">
                    </lido-avatar>
                    <lido-image id="image" disable-edit="true" value="image" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/Shadow.png" bg-color="transparent" width="inherit" height="27px" x="landscape.-7px, portrait.-7px" y="landscape.450px, portrait.540px" alt-text="{shadowImage}">
                    </lido-image>
                </lido-cell>

                <!-- flash-card element -->
                <lido-cell layout="pos" id="pos2"  disable-edit="true" value="pos2" width="landscape.594px, portrait.754px" height="landscape.725px, portrait.925px" x="landscape.0px, portrait. -7px" y="landscape.35px, portrait.-170px" aria-hidden="true" z="1" bg-color="transparent" visible="true"  onEntry="this.flex-shrink='0';this.position='relative';">
                    <lido-flash-card x="50" y="100" width="landscape.594px, portrait.754px" height="landscape.725px, portrait.925px" bg-color="transparent" onEntry="this.border-radius='32px';" onTouch="">
                        <lido-cell layout="col" id="col1" show-speak-icon="true" audio="" slot="${frontSlot}" disable-edit="true" visible="true" width="landscape.594px, portrait.754px" height="landscape.725px, portrait.925px" bg-color="white" type="" tabIndex="2" dropAttr="diagonal" onEntry="this.border-radius=32px; this.padding='8px 8px 16px 8px';" y="landscape.5px,portrait.10px">
                            <lido-image visible="true" src="${flashCardImage}" z="1" width="landscape.578px, portrait.738px" height="landscape.578px, portrait.738px" onEntry="this.flex-shrink='0';" border-radius="24px 24px 6px 6px" alt-text="{image1}">
                            </lido-image>
                            <lido-text id="txt1" width="553px" height="80px" display="flex" onEntry="this.textAlign='center'; this.flexDirection='column'; this.justifyContent='center'; this.alignItems='center'; this.flexShrink='0';" font-family="'Baloo Bhai 2'" font-size="52px" z="1" font-color="black" font-weight="500" color="#303030" string="${frontText}" visible="true" y="landscape.15px, portrait.15px" bg-color="white" margin="landscape.45px 0px 45px 0px, portrait.45px 0px 45px 0px">
                            </lido-text>
                        </lido-cell>
                        <lido-cell layout="col" show-speak-icon="true" audio="" id="col2" slot="${backSlot}" disable-edit="true" visible="true"  width="landscape.594px, portrait.754px" height="landscape.725px, portrait.925px" bg-color="white" type="" tabIndex="2" dropAttr="diagonal" onEntry="this.border-radius=32px; this.padding='8px 8px 16px 8px';" y="landscape.,portrait.">
                            <lido-text id="txt2" height="480px" width="495px" display="flex" onEntry="this.textAlign='left'; this.lineHeight='1.5';" font-family="'Baloo Bhai 2'" font-size="52px" z="1" font-color="black" font-weight="500" color="#000000" string="${backText}" visible="true" y="landscape.35px, portrait.15px" bg-color="white" margin="landscape.45px 0px 45px 0px, portrait.45px 0px 45px 0px">
                            </lido-text>
                        </lido-cell>
                    </lido-flash-card>
                </lido-cell>

            </lido-container>
        </main>
    `
}
