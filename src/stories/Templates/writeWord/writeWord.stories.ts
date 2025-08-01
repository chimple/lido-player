import {Meta, StoryObj} from '@storybook/web-components';
import {html} from 'lit';


type WriteWordArgs = {
    traceImage1: string;
    traceImage2: string;
    traceImage3: string;
    traceMode: 'noFlow' | 'showFlow' | 'freeTrace' | 'blindTracing' | 'blindFreeTrace';
    highlightedText: string;
    topDisplayImage: string;
    bottomDisplayImage: string;
    spanType: 'letters' | 'words';
}

const meta: Meta<WriteWordArgs> = {
    title: 'Templates/writeWord',
    argTypes: {
        traceImage1: { control: 'text', name: 'Trace1 Image URL', multiple: true },
        traceImage2: { control: 'text', name: 'Trace2 Image URL', multiple: true },
        traceImage3: { control: 'text', name: 'Trace3 Image URL', multiple: true },
        traceMode: { control: 'select', options: ['noFlow', 'showFlow', 'freeTrace', 'blindTracing', 'blindFreeTrace'], name: 'Trace Mode' },
        highlightedText: { control: 'text', name: 'Highlighted Text' },
        topDisplayImage: { control: 'text', name: 'Top Display Image URL', multiple: true },
        bottomDisplayImage: { control: 'text', name: 'Bottom Display Image URL', multiple: true },
        spanType: { control: 'select', options: ['letters', 'words'], name: 'Text Highlight Type' },
    },
    args: {
        traceImage1: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/hindi_aa.svg',
        traceImage2: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/hindi_aa.svg',
        traceImage3: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/hindi_aa.svg',
        traceMode: 'showFlow',
        highlightedText: 'bug',
        topDisplayImage: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/questionBg.png',
        bottomDisplayImage: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/traceBackground.png',
        spanType: 'letters',
    }
}

export default meta;

export const WriteWord: StoryObj = {
    args: {
        highlightedText: 'bug',
        spanType: "letters"
    },

    render: (args: WriteWordArgs) => {
        const xml = getContainerXml(args);
        return html`<lido-home xml-data="${xml}" xmlData="${xml}"></lido-home>`;
    },

    parameters: {
        controls: {
            exclude: ['height', 'width', 'x', 'y', 'z', 'bg-Color', 'visible', 'onEntry'],
        },
        actions: { argTypesRegex: '^on[A-Z].*' },
    },

}

function getContainerXml(args : WriteWordArgs) {    
    const traceImage1 = args.traceImage1;
    const traceImage2 = args.traceImage2;
    const traceImage3 = args.traceImage3;
    const traceMode = args.traceMode;
    const text = args.highlightedText;
    const topDisplayImage = args.topDisplayImage;
    const bottomDisplayImage = args.bottomDisplayImage;
    const spanType = args.spanType;

    if (!traceImage1 || !traceImage2 || !traceImage3) {
        console.error('Trace image is missing');
        return '';
    }
    
    return `
        <main>
            <lido-container id="lido-container" objective="writeWord" value="mainContainer1" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/Underwater.png" height="100%" width="100%" bg-color="transparent"  visible="true"   onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="this.justifyContent='space-around';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="true" after-drop="false">

                    <!-- Chimple Avatar -->
                    <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos1" height="landscape.600px, portrait.700px" width="landscape.393px, portrait.485px" x="landscape.1200px, portrait.450px" y="landscape.390px, portrait.1020px" aria-hidden="true" z="1" bg-color="transparent" visible="true"  onEntry="this.flex-shrink='0';">
                        <lido-avatar id="lido-avatar" disable-edit="true" visible="true"  height="inherit"  width="inherit" src="/assets/images/chimplecharacter.riv" altText="{chimpleCharacterRive}" onEntry="">
                        </lido-avatar>
                        <lido-image id="image" disable-edit="true" value="image" visible="true" src="/assets/images/Shadow.png" bg-color="transparent" width="inherit" height="27px" x="landscape.-7px, portrait.-7px" y="landscape.450px, portrait.540px" altText="{shadowImage}">
                        </lido-image>
                    </lido-cell>

                    <!-- text-element -->
                    <lido-cell tab-index="1" layout="pos" id="pos1" disable-edit="true" value="pos1" height="landscape.80px, portrait.80px" width="landscape.297px, portrait.297px" x="landscape.650px, portrait.300px" y="landscape.125px, portrait.190px" aria-hidden="true" z="1" bg-color="transparent" visible="true"  onEntry="">
                        <lido-text id="txt1" span-type="${spanType}" width="inherit" height="inherit" display="flex" onEntry="this.text-align='center'; this.justify-content='center'; this.flex-shrink='0';" font="'Baloo Bhai 2'" font-size="96px" z="1" font-color="black" font-weight="600" color=" #000000" string="${text}" visible="true" y="landscape., portrait." bg-color="transparent">
                        </lido-text>
                    </lido-cell>

                    <lido-cell layout="col" visible="true" width="landscape.70%, portrait.70%" height="landscape.84%, portrait.60%" bg-color="transparent" margin="landscape.-35px 0px -35px 0px, portrait.-400px 0px -40px 0px" onEntry="this.padding='4px 0px 16px 0px';">
                        <lido-image visible="true" src="${topDisplayImage}" z="1" width="landscape.570px, portrait.570px" height="landscape.225px, portrait.225px" onEntry="this.flex-shrink='0';" altText="{image1}">
                        </lido-image>

                        <lido-image visible="true" src="${bottomDisplayImage}" z="1" width="landscape.574px, portrait.760px" height="landscape.574px, portrait.760px" onEntry="this.flex-shrink='0';" altText="{image1}">
                        </lido-image>
                    </lido-cell>

                    <!-- trace element -->
                    <lido-cell layout="pos" id="pos2" disable-edit="true" value="pos2" height="landscape.500px, portrait.500px" width="landscape.550px, portrait.600px" x="landscape.530px, portrait.175px" y="landscape.330px, portrait.475px" aria-hidden="true" z="1" bg-color="transparent" visible="true"  onEntry="trace1.visibility='visible'; this.flex-shrink='0';">
                        <lido-trace id="trace1" animationTrace="true" highlightTextId="txt1" tabIndex="2" value="a" visible="true" svg-source="${traceImage1}; ${traceImage2}; ${traceImage3}" onCorrect="" mode="${traceMode}" z="1" x="25px" y="25px" width="495px" height="495px" altText="{backgroundImage}">
                        </lido-trace>
                    </lido-cell>
            </lido-container>
        </main>
    `
}