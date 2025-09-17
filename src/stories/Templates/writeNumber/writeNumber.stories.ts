import {Meta, StoryObj} from '@storybook/web-components';
import {html} from 'lit';

type WriteNumberArgs = {
    traceImage1: string[];
    traceImage2: string[];
    traceMode: 'noFlow' | 'showFlow' | 'freeTrace' | 'blindTracing' | 'blindFreeTrace';
    highlightedText: string;
    textDisplayImage: string[];
    spanType: 'letters' | 'words';
    stars: number;
}

const meta: Meta<WriteNumberArgs> = {
    title: 'Templates/writeNumber',
    argTypes: {
        traceImage1: { control: 'file', name: 'Trace Image 1 URL', multiple: true },
        traceImage2: { control: 'file', name: 'Trace Image 2 URL', multiple: true },
        traceMode: { control: 'select', options: ['noFlow', 'showFlow', 'freeTrace', 'blindTracing', 'blindFreeTrace'], name: 'Trace Mode' },
        highlightedText: { control: 'text', name: 'Highlighted Text' },
        textDisplayImage: { control: 'file', name: 'Top Display Image URL', multiple: true },
        spanType: { control: 'select', options: ['letters', 'words'], name: 'Text Highlight Type' },
        stars: { control: 'number', name: 'Number of Stars', min: 0, max:10, step: 1 },
    },
    args: {
        traceImage1: ['https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/svgs/Numbers/1.svg'],
        traceImage2: ['https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/svgs/Numbers/0.svg'],
        traceMode: 'showFlow',
        highlightedText: 'bug',
        textDisplayImage: ['https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/top_display_image.svg'],
        spanType: 'letters',
        stars: 10,
    }
}

export default meta;

export const WriteNumber: StoryObj = {
    args: {
        highlightedText: "10",
        spanType: "letters",
        stars: 10,
    },

    render: (args: WriteNumberArgs) => {
        const xml = getContainerXml(args);
        return html`<lido-home xml-data="${xml}" xmlData="${xml}"></lido-home>`;
    },
}

function getContainerXml(args : WriteNumberArgs) {    
    const traceImage1 = args.traceImage1[0];
    const traceImage2 = args.traceImage2[0];
    const traceMode = args.traceMode;
    const text = args.highlightedText;
    const textDisplayImage = args.textDisplayImage[0];
    const spanType = args.spanType;
    const stars = args.stars;

    if (!traceImage1 || !traceImage2) {
        console.error('Trace image is missing');
        return '';
    }

    let tabCounter = 4;
    // Make a list [1,2,3,...,stars]
    const starList = Array.from({ length: stars }, (_, i) => i + 1);

    const starCells = starList
    .map((index) => {
      return `
		<lido-image id="star${index}" tab-index=${tabCounter++} audio="" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/fly1%201.png" width="landscape.100px, portrait.140px" visible="true" height="landscape.75px, portrait.92px">
        </lido-image>
      `;
    })
    .join('');
    
    return `
        <main>
            <lido-container id="lido-container" objective="writeNumber" tab-index="1"  value="mainContainer1" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/Underwater.png" height="100%" width="100%" bg-color="transparent"  visible="true" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="this.justifyContent='space-around';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" is-continue-on-correct="true">

                <!-- Chimple Avatar -->
                <lido-cell layout="pos" id="pos1" disable-edit="true" height="landscape.600px, portrait.700px" width="landscape.393px, portrait.485px" x="landscape.1279px, portrait.230px" y="landscape.375px, portrait.1010px" ariaHidden="true" z="1" bg-color="transparent" visible="true"  onEntry="this.flex-shrink='0';">
                    <lido-avatar id="lido-avatar" disable-edit="true" visible="true"  height="inherit"  width="inherit" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}" onEntry="">
                    </lido-avatar>
                    <lido-image id="image" disable-edit="true" value="image" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/Shadow.png" bg-color="transparent" width="inherit" height="27px" x="landscape.-7px, portrait.-7px" y="landscape.450px, portrait.535px" alt-text="{shadowImage}">
                    </lido-image>
                </lido-cell>

                <!-- text-element -->
                <lido-cell layout="pos" id="pos2" disable-edit="true" height="landscape.80px, portrait.80px" width="landscape.297px, portrait.297px" x="landscape.645px, portrait.300px" y="landscape.90px, portrait.105px" aria-hidden="true" z="1" bg-color="transparent" visible="true"  onEntry="this.font-weight='600';">
                    <lido-text id="txt1" tab-index="2" span-type="${spanType}"  audio="" width="297px" height="80px" display="flex" onEntry="this.text-align='center'; this.justify-content='center'; this.flex-shrink='0';" font="'Baloo Bhai 2'" font-size="96px" z="1" font-color="black" font-weight="600" color=" #000000" string="${text}" visible="true" y="landscape., portrait." bg-color="transparent">
                    </lido-text>                        
                </lido-cell>

                <!-- text-image -->
                <lido-cell layout="pos" id="pos2" visible="true" bg-color="transparent" onEntry="this.padding='4px 0px 16px 0px';" x="landscape.595px, portrait.255px" y="landscape.30px, portrait.45px">
                    <lido-image visible="true" src="${textDisplayImage}" z="1" width="landscape.375px, portrait.375px" height="landscape.175px, portrait.175px" onEntry="this.flex-shrink='0';" alt-text="image1">
                    </lido-image>
                </lido-cell>

                <!-- trace cell -->
                <lido-cell layout="pos" id="pos3" visible="true" width="landscape.740px, portrait.740px"  height="landscape.477px, portrait.477px" bg-color="transparent"  onEntry="this.border-radius='6px'; this.flex-shrink='0';" x="landscape.430px, portrait.75px" y="landscape.205px, portrait.315px">
                    <lido-trace id="image2" tab-index="3" value="a" visible="true" highlight-text-id="txt1" svgSource="${traceImage1}; ${traceImage2}" onCorrect="star-row.HighlightStarsOneByOne='true';"  mode="${traceMode}" z="1" x="" y="" width="740px" height="477px" alt-text="{backgroundImage}">
                    </lido-trace>
                </lido-cell>


                <lido-cell layout="wrap" id="star-row" width="landscape.50%, portrait.80%" height="landscape.160px, portrait.200px" visible="true" bg-color="transparent" y="landscape.500px, portrait.485px" margin="landscape.560px 0px -100px 0px, portrait.225px 0px -100px 0px" onEntry="this.grid-template-columns='repeat(auto-fill, minmax(135px, auto))'; this.justify-content='center'; this.align-items='center';">
                    ${starCells}
                </lido-cell>

            </lido-container>
        </main>
    `
}