import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
const meta: Meta = {
    title: 'Templates/Balancing',
    argTypes: {
   leftValue: { control: 'text' },
   rightValue: { control: 'text' },
   objective: { control: 'text' },
  },
    };
export default meta;
export const Balancing: StoryObj = {
  args: {
     leftValue: '10-5',
     rightValue: '11-2',
     objective: '>',
    },
    
      render: args => {
        const xml = getContainerXml(args);
        return html`<lido-home .xmlData="${xml}"></lido-home>`;
      },
    };

function escapeXml(str: string) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&apos;');
}

function getContainerXml(args) {
  const objective = escapeXml(args.objective);
  const leftValue = escapeXml(args.leftValue);
  const rightValue = escapeXml(args.rightValue);

  return `
   <main>
    <lido-container visible="true" drop-action="move"  objective="${objective}"  equationCheck="$#lefthandle1,$#righthandle1" id="lido-container" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2000';" show-Check="true" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/Sky.png" is-continue-on-correct="true">
      <!-- Check Button -->
      <lido-pos id="pos1" disable-edit="true" value="pos1" height="70px" width="150px" x="landscape.1324px,portrait.639px" y="landscape.220px,portrait.28%" aria-hidden="true" z="1" bg-color="transparent" type="" visible="true" audio="col1.mp3" onTouch="" onCorrect="" onEntry="">
        <lido-text id="lido-checkButton" visible="true" bg-color="#5b5bd3" width="150px" height="70px" string="Check" type="click" font-family="'Baloo 2', serif" font-size="30px" font-color="white" onEntry="this.fontWeight='800'; this.addClass='lido-disable-check-button';">
        </lido-text>
      </lido-pos>
      <!-- question -->
      <lido-text visible="true" height="landscape.100px,portrait.175px" font-family="'Baloo Bhai 2'" font-size="60px" width="landscape.auto,portrait.86%" string="Drop the elements to match the given symbol '${objective}'" font-color="black" bg-color="white" y="landscape.12%,portrait.-4%" onEntry="this.font-weight='600'; this.position='relative';">
      </lido-text>
      <lido-balance  tilt="0" operation="add" visible="true" height="landscape.456px,portrait.500px" y="landscape.180px,portrait.6%" width="landscape.1136px,portrait.876px">
      </lido-balance>
      <!-- drop Element -->
      <lido-cell layout="row" visible="true" id="leftparent" heigth="auto" width="auto" bg-Color="transparent" y="landscape.-158px,portrait.-276px" x="landscape.-357px,portrait.-293px" onEntry="this.position='relative';">
        <lido-text visible="true" id="lefthandle1" tab-index="1" value="" height="126px" width="120px" type="drop"></lido-text>
      </lido-cell>
      <lido-cell layout="row" visible="true" id="rightparent" heigth="auto" width="auto" bg-Color="transparent" onEntry="this.position='relative';" y="landscape.-32%,portrait.-26%" x="landscape.22%,portrait.31%">
        <lido-text visible="true" id="righthandle1" tab-index="2" value="" height="126px" width="120px" type="drop"></lido-text>
      </lido-cell>
      <!-- dragElements -->
      <lido-cell visible="true" height="130px" width="80%" layout="row" onEntry="this.position='relative';" y="-35px">
        <lido-image  is-slice="true" height="126px" width="188px" audio="" id="drag1" value="${leftValue}" tab-index="3" visible="true"  x="78%" y="0%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/balancing/big_fruit.png" type="drag">
          <lido-text font-family="'Baloo Bhai 2'" height="126px" width="188px" audio="" visible="true" onEntry="this.fontWeight='600';" string="${leftValue}" fontColor="black" font-size="40px"></lido-text>
        </lido-image>
        <lido-image is-slice="true"  height="126px" width="188px" audio="" id="drag2" value="${rightValue}" tab-index="4" visible="true"  x="78%" y="0%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/balancing/big_fruit.png" type="drag">
          <lido-text font-family="'Baloo Bhai 2'" height="126px" width="188px" audio="" visible="true" onEntry="this.fontWeight='600';" string="${rightValue}" fontColor="black" font-size="40px"></lido-text>
        </lido-image>
      </lido-cell>
    </lido-container>
   </main>
  `;
}