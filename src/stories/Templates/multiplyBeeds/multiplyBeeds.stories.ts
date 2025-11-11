import {Meta, StoryObj} from '@storybook/web-components';
import {html} from 'lit';

type MultiplyBeedsArgs = {
    number: string;
    multiplicationFactor: string;
    answer: string;
}

const meta: Meta<MultiplyBeedsArgs> = {
    title: 'Templates/multiplyBeeds',
    argTypes: {
        number: { control: 'text', name: 'number1', description: 'number. (E.g. 9)' },
        multiplicationFactor: { control: 'text', name: 'multiplication factor', description: '(E.g. 9)' },
        answer: { control: 'text', name: 'answer', description: 'answer. (E.g. 81)' }
    },
    args: {
        number: '9',
        multiplicationFactor: '9',
        answer: '81',
    }
}

export default meta;

export const MultiplyBeeds: StoryObj<MultiplyBeedsArgs> = {
    
    render: (args: MultiplyBeedsArgs) => {
        const xml = getContainerXml(args);
        return html`<lido-home xml-data="${xml}" xmlData="${xml}"></lido-home>`;
    },
}

function getContainerXml(args : MultiplyBeedsArgs) {    
    const number = args.number;
    const multiplicationFactor = args.multiplicationFactor;
    const answer = args.answer;

    return `
        <main>
            <lido-container id="multiply-beads" disable-speak="true" show-drop-border="false" objective="${number}X${multiplicationFactor} = ${answer}" tab-index="1"  value="multiply-beads" bgImage="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/Underwater.png"  height="100%" width="100%" bg-color="transparent"  visible="true" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="this.justifyContent='space-around'; this.MultiplyBeedsAnimation='true';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="true">

                <!-- Chimple Avatar -->
                <lido-cell layout="pos" id="pos1" disableEdit="true" value="pos1" height="landscape.570px, portrait.700px" width="landscape.380px, portrait.485px" x="landscape.1045px, portrait.220px" y="landscape.525px, portrait.1075px" ariaHidden="true" bgColor="transparent" visible="true"  onEntry="this.flex-shrink='0'; this.z-index='0';">
                    <lido-avatar id="lido-avatar" disableEdit="true" visible="true"  height="inherit"  width="inherit" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" altText="{chimpleCharacterRive}" onEntry="">
                    </lido-avatar>
                </lido-cell>
                
                <!-- Question Start Section -->
                <lido-text visible="false" id="txt1" font-family="'Baloo 2', serif" font-size="52px" font-color="black" string="click the right slot of the beeds column and count the sum of all the beeds" onEntry="this.speak='true';" >
                </lido-text>

                <!-- Bottom display Section -->
                <lido-cell layout="pos" id="pos2"  value="pos1" height="auto" width="landscape.815px, portrait.815px" x="landscape.775px, portrait.48px" y="landscape.300px, portrait.945px" ariaHidden="true" bgColor="transparent" visible="true" onEntry="this.flex-shrink='0'; this.animation='bottomToPlace 2s linear';">
                    <lido-text id="answer-multiply-beeds"  value="" height="inherit" width="inherit" string="" font-size="84px" font-weight="600" bgColor="#FFF4CD" visible="true" onEntry="this.word-wrap='break-word'; this.fontWeight='600'; this.textAlign='center';">
                    </lido-text>
                </lido-cell>

                <!-- Beeds Section -->
                <lido-cell layout="pos" id="pos3"  height="landscape.1100px, portrait.900px" width="landscape.700px,portrait.825px" x="landscape.40px, portrait.15px" y="landscape.-80px,portrait.45px" ariaHidden="true" z="0" bgColor="transparent" visible="true" onEntry="this.opacity='1';">
                    <lido-math-matrix visible="true" rows="9" cols="9" top-index="true" left-index="true" bottom-index="false" clickable="true" active-only-visible="false" active-bg-color="#C23E06" deactive-bg-color="#F57139" border="2px solid #F34D08" defualt-fill="0" matrix-image="">
                    </lido-math-matrix>
                </lido-cell>
            </lido-container>
        </main>
    `
}