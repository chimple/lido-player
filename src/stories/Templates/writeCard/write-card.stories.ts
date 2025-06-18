import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';


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
            
            <lido-container id="lido-container" tabIndex="1"  value="mainContainer1" bgImage="${args.backgroundImage}" objective="" height="100%" width="100%" bgColor="transparent"  visible="true"   onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="this.justifyContent='space-around';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" showCheck="false" isContinueOnCorrect="true" afterDrop="false">

                <!-- Chimple Avatar -->
                <lido-cell layout="pos" id="pos1" disableEdit="true" value="pos2" height="300px" width="227px" x="landscape.-150px, portrait.541px" y="landscape.225px, portrait.1274px" ariaHidden="true" z="1" bgColor="transparent" visible="true"  onEntry="">
                    <lido-avatar id="lido-avatar" disableEdit="true" visible="true"  height="900px"  width="400px" src="${avatarSrc}" altText="">
                    </lido-avatar>
                </lido-cell>

                <!-- parent cell -->
                <lido-cell layout="pos" id="pos1" disableEdit="true" value="pos2" height="750px" width="900px" x="landscape.350px, portrait.541px" y="landscape.100px, portrait.1274px" ariaHidden="true" z="1" bgColor="white" visible="true"  onEntry="">

                    <lido-trace id="image" tabIndex="2" value="image1" visible="true" svgSource='${traceSrc}' mode='${mode}' z="1" x="-20px" y="-20px" width="1000px" height="900px" onEntry="" altText="{backgroundImage}">
                    </lido-trace>
                </lido-cell>

            </lido-container>

            <lido-container id="lido-container" tabIndex="1"  value="mainContainer1" bgImage="${args.backgroundImage}" objective="" height="100%" width="100%" bgColor="transparent"  visible="true"   onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="this.justifyContent='space-around';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" showCheck="false" isContinueOnCorrect="true" afterDrop="false">

                <!-- Chimple Avatar -->
                <lido-cell layout="pos" id="pos1" disableEdit="true" value="pos2" height="300px" width="227px" x="landscape.-150px, portrait.541px" y="landscape.225px, portrait.1274px" ariaHidden="true" z="1" bgColor="transparent" visible="true"  onEntry="">
                    <lido-avatar id="lido-avatar" disableEdit="true" visible="true"  height="900px"  width="400px" src="${avatarSrc}" altText="">
                    </lido-avatar>
                </lido-cell>

                <!-- row element -->
                <lido-row visible="true" width="landscape.65%, portrait.338px" onEntry="" height="landscape.80%, portrait." y="landscape.340px, portrait.300px" x="landscape.,portrait.500px" direction="landscape.row, portrait.column" bgColor="transparent">
                    <lido-flash-card x="50" y="240" width="635px" height="735px" bgColor="transparent">
                        <lido-col id="col1" slot="front" disableEdit="true" visible="true" width="610px" height="680px" bgColor="white" type="" tabIndex="6" dropAttr="diagonal" value="cat" onEntry="this.position='relative'; this.border-radius=30px" y="landscape.,portrait.">
                            <lido-image visible="true" src="${flashCardImage}" z="0" width="800px" height="600px" onEntry=""  altText="{image1}">
                            </lido-image>
                            <lido-text width="600px" height="200px" display="flex" onEntry="" font="'Baloo Bhai 2'" fontSize="54px" z="1" fontColor="black" fontWeight="bold" color="#000000" string="Unicorn" visible="true" y="landscape.35px, portrait.15px" bgColor="white">
                            </lido-text>
                        </lido-col>
                        <lido-text slot="back" width="630px" height="700px" display="flex" onEntry="" font="'Baloo Bhai 2'" fontSize="72px" z="1" fontColor="black" fontWeight="bold" color="#000000" string="Unicorn" visible="true" y="landscape.35px, portrait.15px" bgColor="white" >
                        </lido-text>
                    </lido-flash-card>
                </lido-row>

            </lido-container>
        </main>
    `
}