import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { mod } from 'mathjs';


type WriteCardArgs = {
    traceImgFile: string[];
    mode: 'noFlow' | 'showFlow' | 'freeTrace' | 'blindTracing' | 'blindFreeTrace';
    avtarImgFile: string;
    backgroundImage: string;
    flashCardImage: string[];
};

const defaultBackground = "https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets//SkyBg.png";

const meta: Meta<WriteCardArgs> = {
    title: 'Templates/WriteCard',
    argTypes: {
        backgroundImage: { control: 'text', name: 'Background Image URL'},
        avtarImgFile: { control: 'file' },
        traceImgFile: { control: 'file' },
        mode: { control: 'select', options: ['noFlow', 'showFlow', 'freeTrace', 'blindTracing', 'blindFreeTrace'] },
        flashCardImage: { control: 'file'},
    },
    args: {
        backgroundImage: defaultBackground,
        avtarImgFile: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv',
        traceImgFile: ['https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/hindi_aa.svg'],
        mode: 'showFlow',
        flashCardImage: ['https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/flash-card/unicorn.png'],
    },
};

export default meta;

export const WriteCard: StoryObj = {

    render: (args : WriteCardArgs) => {
        const xml = getContainerXml(args);
        return html`<lido-home xml-data="${xml}" xmlData="${xml}"></lido-home>`;
    },
}

function getContainerXml(args: WriteCardArgs){
    const traceSrc = args.traceImgFile[0];
    const mode = args.mode;
    const avatarSrc = args.avtarImgFile;
    const flashCardImage = args.flashCardImage[0];
    return `
        <main>

            <lido-container id="lido-container" tabIndex="1"  value="mainContainer1" bgImage="${args.backgroundImage}" objective="" height="1600px" width="900px" bgColor="transparent"  visible="true"   onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="this.justifyContent='space-around';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" showCheck="false" isContinueOnCorrect="true" afterDrop="false">

                    <!-- Chimple Avatar -->
                    <lido-cell layout="pos" id="pos1" disableEdit="true" value="pos1" height="landscape.393px, portrait.447px" width="landscape.292px, portrait.332px" x="landscape.-150px, portrait.550px" y="landscape.475px, portrait.1200px" ariaHidden="true" z="1" bgColor="transparent" visible="true"  onEntry="this.flex-shrink='0';">
                        <lido-avatar id="lido-avatar" disableEdit="true" visible="true"  height="inherit"  width="inherit" src="${avatarSrc}" altText="" onEntry="">
                        </lido-avatar>
                    </lido-cell>

                    <!-- parent cell -->
                    <lido-cell layout="landscape.row, portrait.col"  visible="true"  width="landscape.725px, portrait.725px"  height="landscape.725px, portrait.725px"   bgColor="white"  onEntry="this.border-radius='6px'; this.flex-shrink='0';">
                        <lido-cell layout="pos"  x="landscape.450px, portrait.100px" y="landscape.250px, portrait.600px" visible="true"  width="700px"  height="500px"   bgColor="transparent"  onEntry="">
                            <lido-trace id="image" tabIndex="2" value="image1" visible="true" svgSource='${traceSrc}' mode='${mode}' z="1" width="750px" height="500px" onEntry="" altText="{backgroundImage}">
                            </lido-trace>
                        </lido-cell>
                    </lido-cell>

            </lido-container>

            <lido-container id="lido-container" tabIndex="1"  value="mainContainer1" bgImage="${args.backgroundImage}" objective="" height="1600px" width="900px" bgColor="transparent"  visible="true"   onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="this.justifyContent='space-around';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" showCheck="false" isContinueOnCorrect="true" afterDrop="false">

                <!-- Chimple Avatar -->
                <lido-cell layout="pos" id="pos1" disableEdit="true" value="pos1" height="landscape.393px, portrait.447px" width="landscape.292px, portrait.332px" x="landscape.-150px, portrait.550px" y="landscape.475px, portrait.1200px" ariaHidden="true" z="1" bgColor="transparent" visible="true"  onEntry="this.flex-shrink='0';">
                    <lido-avatar id="lido-avatar" disableEdit="true" visible="true"  height="inherit"  width="inherit" src="${avatarSrc}" altText="" onEntry="">
                    </lido-avatar>
                </lido-cell>

                <!-- flash-card element -->
                <lido-row visible="true" width="landscape.594px, portrait.754px" onEntry="" height="landscape.725px, portrait.925px" y="landscape.340px, portrait.300px" x="landscape.,portrait.520px" direction="landscape.row, portrait.column" bgColor="transparent">
                    <lido-flash-card x="50" y="100" width="landscape.594px, portrait.754px" height="landscape.725px, portrait.925px" bgColor="transparent" onEntry="this.border-radius='32px';">
                        <lido-col id="col1" slot="front" disableEdit="true" visible="true" width="landscape.594px, portrait.754px" height="landscape.695px, portrait.895px" bgColor="white" type="" tabIndex="2" dropAttr="diagonal"  onEntry="this.border-radius=32px;';" y="landscape.,portrait." >
                            <lido-image visible="true" src="${flashCardImage}" z="1" width="landscape.578px, portrait.738px" height="landscape.578px, portrait.738px" onEntry="this.border-radius='24px 24px 6px 6px'; this.flex-shrink='0';"  altText="{image1}">
                            </lido-image>
                            <lido-text width="371px" height="80px" display="flex" onEntry="this.text-align='center'; this.flex-direction='cloumn'; this.justify-content='center'; this.flex-shrink='0';" font-family="'Baloo Bhai 2'" fontSize="64px" z="1" fontColor="black" fontWeight="500" color="#303030" string="Unicorn" visible="true" y="landscape.15px, portrait.15px" bgColor="white">
                            </lido-text>
                        </lido-col>
                        <lido-col id="col2" slot="back" disableEdit="true" visible="true"  width="landscape.594px, portrait.754px" height="landscape.695px, portrait.895px" bgColor="white" type="" tabIndex="2" dropAttr="diagonal" onEntry="this.border-radius=32px" y="landscape.,portrait.">
                            <lido-text id="col2" height="80px" width="371px" display="flex" onEntry="this.text-align='center'; this.flex-direction='cloumn'; this.justify-content='center'; this.flex-shrink='0';" font-family="'Baloo Bhai 2'" fontSize="84px" z="1" fontColor="black" fontWeight="500" color="#000000" string="Unicorn" visible="true" y="landscape.35px, portrait.15px" bgColor="white">
                            </lido-text>
                        </lido-col>
                    </lido-flash-card>
                </lido-row>

            </lido-container>

        </main>
    `
}