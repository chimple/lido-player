import"./lit-element-DRlmAcsz.js";import{b as s}from"./lit-html-s0HVm7S4.js";const g={title:"Templates/Balancing",argTypes:{leftValue:{control:"text"},rightValue:{control:"text"},objective:{control:"text"}}},i={args:{leftValue:"10-5",rightValue:"11-2",objective:">"},render:t=>{const e=d(t);return s`<lido-home .xmlData="${e}"></lido-home>`}};function a(t){return t?t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;"):""}function d(t){const e=a(t.objective),o=a(t.leftValue),l=a(t.rightValue);return`
   <main>
    <lido-container visible="true" drop-action="move"  objective="${e}"  equationCheck="$#lefthandle1,$#righthandle1" id="lido-container" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2000';" show-Check="true" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/background-images/Balancing.png" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" is-continue-on-correct="true">
     <!-- Chimple Avatar -->
    <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.396px,portrait.400px" width="landscape.298px,portrait.369px" x="landscape.82%, portrait.32%" y="landscape.63%, portrait.78%" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="">
        <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
        </lido-avatar>
    </lido-cell> 
      <!-- Check Button -->
      <lido-pos id="pos1" disable-edit="true" value="pos1" height="70px" width="150px" x="landscape.1324px,portrait.639px" y="landscape.220px,portrait.28%" aria-hidden="true" z="1" bg-color="transparent" type="" visible="true" audio="col1.mp3" onTouch="" onCorrect="" onEntry="">
        <lido-text id="lido-checkButton" visible="true" bg-color="#5b5bd3" width="150px" height="70px" string="Next" type="click" font-family="'Baloo 2', serif" font-size="30px" font-color="white" onEntry="this.fontWeight='800'; this.addClass='lido-disable-check-button';">
        </lido-text>
      </lido-pos>
      <!-- question -->
      <lido-text visible="true" audio="" id="heading" tab-index="12" height="landscape.100px,portrait.175px" font-family="'Baloo Bhai 2'" font-size="60px" width="landscape.auto,portrait.86%" string="Drop the elements to match the given symbol '${e}'" font-color="black" bg-color="white" y="landscape.0%,portrait.-12%" onEntry="this.speak='true';this.font-weight='600'; this.position='relative';">
      </lido-text>
      <lido-balance  tilt="0" operation="add" visible="true" height="landscape.456px,portrait.500px" y="landscape.4%,portrait.0%" width="landscape.1136px,portrait.876px">
      <!-- drop Element -->
      <lido-cell layout="row" visible="true" id="leftparent" height="126px" width="120px" bg-color="transparent" y="landscape.22%,portrait.28%" x="landscape.14%,portrait.12%" onEntry="this.position='relative';">
        <lido-text visible="true" id="lefthandle1" tab-index="1" value="" height="126px" width="120px" type="drop"></lido-text>
      </lido-cell>
      <lido-cell layout="row" visible="true" id="rightparent" height="126px" width="120px" bg-color="transparent" onEntry="this.position='relative';" y="landscape.22%,portrait.28%" x="landscape.65%,portrait.61%">
        <lido-text visible="true" id="righthandle1" tab-index="2" value="" height="126px" width="120px" type="drop"></lido-text>
      </lido-cell>
    </lido-balance>
      
      <!-- dragElements -->
      <lido-cell visible="true" height="130px" width="80%" layout="row" onEntry="this.position='relative';" y="landscape.6%,portrait.4%">
        <lido-image  is-slice="true" height="126px" width="172px" audio="" id="drag1" value="${o}" tab-index="3" visible="true"  x="78%" y="0%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/balancing/big_fruit.png" type="drag">
          <lido-text font-family="'Baloo Bhai 2'" height="126px" width="120px" audio="" margin="30px 1px 0px 0px" visible="true" onEntry="this.fontWeight='600';" string="${o}" fontColor="black" font-size="40px"></lido-text>
        </lido-image>
        <lido-image is-slice="true"  height="126px" width="172px" audio="" id="drag2" value="${l}" tab-index="4" visible="true"  x="78%" y="0%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/balancing/big_fruit.png" type="drag">
          <lido-text font-family="'Baloo Bhai 2'" height="126px" width="120px" audio=""  margin="30px 1px 0px 0px" visible="true" onEntry="this.fontWeight='600';" string="${l}" fontColor="black" font-size="40px"></lido-text>
        </lido-image>
      </lido-cell>
    </lido-container>
   </main>
  `}var r,n,p;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    leftValue: '10-5',
    rightValue: '11-2',
    objective: '>'
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(p=(n=i.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const u=["Balancing"];export{i as Balancing,u as __namedExportsOrder,g as default};
