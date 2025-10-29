import {Meta, StoryObj} from '@storybook/web-components';
import {html} from 'lit';
import { index } from 'mathjs';

type MultiplyBeedsArgs = {
    matrixImage: string[];
    options: string[];
    objective: string;
    matrixSlots: string;
}

const meta: Meta<MultiplyBeedsArgs> = {
    title: 'Templates/multiplyBeeds',
    argTypes: {
        matrixImage: { control: 'file', name: 'Matrix Beeds Image URL', multiple: true },
        options: { control: 'object', name: 'Options' },
        objective: { control: 'text', name: 'Objective', description: 'Objective to achieve the task. (E.g. 5)' },
        matrixSlots: { control: 'text', name: 'Matrix Beeds Slots', description: 'Size of the matrix in rows x columns format. (E.g. 1x9)' },
    },
    args: {
        matrixImage: ['https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Categorize/insect3.png'],
        options: ['1','2','3','4','5','6','7','8','9'],
        objective: '9',
        matrixSlots: '9',
    }
}

export default meta;

export const MultiplyBeeds: StoryObj = {
    
    render: (args: MultiplyBeedsArgs) => {
        const xml = getContainerXml(args);
        return html`<lido-home xml-data="${xml}" xmlData="${xml}"></lido-home>`;
    },
}

function getContainerXml(args : MultiplyBeedsArgs) {    
    const matrixImage = args.matrixImage[0];
    const objective = args.objective;
    const options = args.options;
    const matrixSlots = args.matrixSlots;

    const optionsCell = options.map((option: any) => {
        const bgColor = option === objective ? '#AA4A44' : '#FFB366';
        return `
            <lido-text id="${option+1}" tab-index="${option+2}" height="70px" width="55px" visible="true"  value="${option}" string="${option}" font-family="'Baloo Bhai 2'" font-color="black" font-size="52px"  bg-color="${bgColor}" onInCorrect="" onEntry="this.fontWeight='800'; this.borderRadius='10px'; this.flex-flow='column-reverse';" border-image="">
            </lido-text>
        `
    }).join('\n');


    const beedsCell = Array.from({length : Number(objective)},(_ ,index) => {
        // base x positions (landscape / portrait)
        const xLandscape = 145 + (index) * 145; // increment position horizontally
        const xPortrait = -20 + (index) * 95;

        // opacity = 1 for first, 0 for rest
        const opacity = index === 0 ? '1' : '0';
        
        return `
            <lido-cell layout="pos" height="landscape.600px, portrait.775px" width="landscape.100px,portrait.125px" x="landscape.${xLandscape}px, portrait.${xPortrait}px" y="landscape.125px,portrait.175px" ariaHidden="true" z="0" bg-color="transparent" visible="true" onEntry="this.opacity=${opacity};">
                <lido-math-matrix visible="true" rows="1" cols="${matrixSlots}" top-index="false" left-index="true" bottom-index="false" clickable="true" active-only-visible="false" active-bg-color="yellow" inactive-bg-color="black" defualt-fill="0" matrix-image="${matrixImage}"></lido-math-matrix>
            </lido-cell>
        `

    }).join('\n');
    
    return `
        <main>
            <lido-container id="multiply beads" disable-speak="true" show-drop-border="false" objective="${objective}" tab-index="1"  value="questionBoard" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/Underwater.png"  height="100%" width="100%" bg-color="transparent"  visible="true" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="this.justifyContent='space-around';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" showCheck="false" isContinueOnCorrect="true">

                <!-- Chimple Avatar -->
                <lido-cell layout="pos" id="pos1" disableEdit="true" value="pos1" height="landscape.570px, portrait.700px" width="landscape.380px, portrait.485px" x="landscape.-65px, portrait.195px" y="landscape.525px, portrait.1050px" ariaHidden="true" bg-color="transparent" visible="true"  onEntry="this.flex-shrink='0'; this.z-index='0';">
                    <lido-avatar id="lido-avatar" disableEdit="true" visible="true"  height="inherit"  width="inherit" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" altText="{chimpleCharacterRive}" onEntry="">
                    </lido-avatar>
                </lido-cell>
                
                <!-- Question Start Section -->
                <lido-text visible="false" id="txt1" tab-index="2" audio="" font-family="'Baloo 2', serif" font-size="52px" font-color="black" string="click the right slot of the beeds column and count the sum of all the beeds" onEntry="this.speak='true';" >
                </lido-text>

                <!-- option Section -->
                <lido-cell layout="row" id="option-row" aria-hidden="true" visible="true" height="landscape.10%,portrait.5%" width="landscape.95%, portrait.90%" bg-Color="transparent" margin="landscape.-690px 0px 0px 0px,portrait.-1325px 0px 0px 0px" onEntry="this.z-index='1'; this.justify-content='center';" gap="landscape.90px,portrait.40px">
                    ${optionsCell}
                </lido-cell>

                <!-- Bottom display Section -->
                <lido-cell layout="pos" id="pos2" value="pos2" height="landscape.150px, portrait.150px" width="landscape.1125px, portrait.900px" x="landscape.240px, portrait.0px" y="landscape.720px, portrait.1030px" ariaHidden="true" bg-color="#AA4A44" visible="true" onEntry="this.flex-shrink='0'; this.animation='bottomToPlace 2s linear'; this.z-index='0';">
                    <lido-text id="answer-multiply-beeds" value="" height="inherit" width="inherit" string="" font-size="84px" font-weight="600"  bg-color="#AA4A44" visible="true" onEntry="this.flex-shrink='0'; this.fontWeight='600'; this.textAlign='center';">
                    </lido-text>
                </lido-cell>

                <!-- Beeds Section -->
                ${beedsCell}

            </lido-container>
        </main>
    `
}