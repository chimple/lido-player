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
            <lido-container id="multiply-beads" disable_speak="true" show-drop-border="false" objective="${number}X${multiplicationFactor} = ${answer}" tab-index="1"  value="multiply-beads" bgImage="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/Underwater.png"  height="100%" width="100%" bg-color="transparent"  visible="true" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="this.justifyContent='space-around'; this.MultiplyBeedsAnimation='true';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="true">

                <!-- Chimple Avatar -->
                <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos1" height="landscape.570px, portrait.700px" width="landscape.380px, portrait.485px" x="landscape.-65px, portrait.195px" y="landscape.525px, portrait.1050px" aria-hidden="true" bg-color="transparent" visible="true"  onEntry="this.flex-shrink='0'; this.z-index='0';">
                    <lido-avatar id="lido-avatar" disable-edit="true" visible="true"  height="inherit"  width="inherit" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" altText="{chimpleCharacterRive}" onEntry="">
                    </lido-avatar>
                </lido-cell>
                
                <!-- Question Start Section -->
                <lido-text visible="false" id="txt1" font-family="'Baloo 2', serif" font-size="52px" font-color="black" string="click the right slot of the beeds column and count the sum of all the beeds" onEntry="this.speak='true';" >
                </lido-text>

                <!-- Bottom display Section -->
                <lido-cell layout="pos" id="pos1"  value="pos1" height="landscape.150px, portrait.150px" width="landscape.1125px, portrait.900px" x="landscape.240px, portrait.0px" y="landscape.720px, portrait.1030px" aria-hidden="true" bg-color="transparent" visible="true" onEntry="this.flex-shrink='0'; this.animation='bottomToPlace 2s linear';">
                    <lido-text id="answer-multiply-beeds"  value="" height="inherit" width="inherit" string="" font-size="84px" font-weight="600" bg-color="#FFB366" visible="true" onEntry="this.flex-shrink='0'; this.font-weight='600'; this.textAlign='center';">
                    </lido-text>
                </lido-cell>

                <!-- Beeds Section -->
                <lido-cell layout="pos" height="landscape.950px, portrait.800px" width="landscape.575px,portrait.725px" x="landscape.475px, portrait.65px" y="landscape.-95px,portrait.100px" ariaHidden="true" z="0" bgColor="transparent" visible="true" onEntry="this.opacity='1';">
                    <lido-math-matrix visible="true" rows="10" cols="10" top-index="true" left-index="true" bottom-index="false" clickable="true" active-only-visible="false" active-bg-color="#5D44BD" deactive-bg-color="black" defualt-fill="0" matrix-image="">
                    </lido-math-matrix>
                </lido-cell>
            </lido-container>
        </main>
    `
}