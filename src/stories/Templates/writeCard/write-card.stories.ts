import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';


type WriteCardArgs = {
    svgFile: string[];
    mode: 'noFlow' | 'showFlow' | 'freeTrace' | 'blindTracing' | 'blindFreeTrace';
    avtarImgFile: string;
    backgroundImage: string;

    flashCardBackImage: string;
};

const defaultBackground = "https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets//SkyBg.png";

const meta: Meta<WriteCardArgs> = {
    title: 'Templates/WriteCard',
    argTypes: {
        backgroundImage: { control: 'text', name: 'Background Image URL'},
        avtarImgFile: { control: 'file' },
        svgFile: { control: 'file' },
        mode: { control: 'select', options: ['noFlow', 'showFlow', 'freeTrace', 'blindTracing', 'blindFreeTrace'] },
        flashCardBackImage: { control: 'text', name: 'Flash Card Image URL' },
    },
    args: {
        backgroundImage: defaultBackground,
        avtarImgFile: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv',
        svgFile: ['https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/hindi_aa.svg'],
        mode: 'showFlow',
        flashCardBackImage: 'https://i0.wp.com/pixahive.com/wp-content/uploads/2021/02/Yellow-pattern-abstract-background-wallpaper-325431-pixahive.jpg?fit=778%2C435ssl=1',
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
    const svgText = args.svgFile[0];
    const mode = args.mode;
    const avatarSrc = args.avtarImgFile;
    const flashCardBackImage = args.flashCardBackImage;
    return `
        <main>
            <lido-container id="lido-container" tabIndex="1"  value="mainContainer1" bgImage="${args.backgroundImage}" objective="" height="100%" width="100%" bgColor="transparent"  visible="true"   onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="this.justifyContent='space-around';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" showCheck="false" isContinueOnCorrect="true" afterDrop="false">

                <!-- Chimple Avatar -->
                <lido-cell layout="pos" id="pos1" disableEdit="true" value="pos2" height="300px" width="227px" x="landscape.-150px, portrait.541px" y="landscape.225px, portrait.1274px" ariaHidden="true" z="1" bgColor="transparent" visible="true"  onEntry="">
                    <lido-avatar id="lido-avatar" disableEdit="true" visible="true"  height="900px"  width="400px" src="${avatarSrc}" altText="">
                    </lido-avatar>
                </lido-cell>

                <!-- Trace Cell -->
                <lido-cell layout="pos" id="pos1" disableEdit="true" value="pos2" height="700px" width="1000px" x="landscape.320px, portrait.541px" y="landscape.100px, portrait.1274px" ariaHidden="true" z="1" bgColor="white" visible="true"  onEntry="">

                    <lido-trace id="image" tabIndex="2" value="image1" visible="true" svgSource="${svgText}" mode="${mode}" z="1" x="-20px" y="-20px" width="1100px" height="850px" onEntry="" altText="{backgroundImage}">
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
                <lido-row visible="true" width="landscape.65%, portrait.338px" onEntry="" height="landscape.80%, portrait." y="landscape.340px, portrait.300px" x="landscape.,portrait.500px" direction="landscape.row, portrait.column" bgColor="white">

                    <!-- Flash Card Element -->
                    <lido-flash-card x="50" y="240" width="520px" height="500px" bgColor="transparent">
                        <lido-text slot="front" width="325px" height="425px" display="flex" onEntry="" font="" fontSize="48px" z="1" fontColor="black" fontWeight="bold" color="#000000" string="lion" visible="true" y="landscape.35px, portrait.15px" bgColor="red">
                        </lido-text>
                        <lido-col id="col5" slot="back" disableEdit="true" visible="true" width="300px" height="400px" bgColor="orange" type="" tabIndex="6" dropAttr="diagonal" value="cat" onEntry="this.position='relative';" y="landscape.,portrait.">
                            <lido-image visible="true" src="${flashCardBackImage}" z="0" width="200px" height="300px" onEntry="">
                            </lido-image>
                            <lido-text width="300px" height="200px" display="flex" onEntry="" font="" fontSize="48px" z="1" fontColor="black" fontWeight="bold" color="#000000" string="tiger" visible="true" y="landscape.35px, portrait.15px" bgColor="yellow">
                            </lido-text>
                        </lido-col>
                    </lido-flash-card>
                </lido-row>

            </lido-container>
        </main>
    `
}