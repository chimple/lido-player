import"./lit-element-DRlmAcsz.js";import{b as l}from"./lit-html-s0HVm7S4.js";const b={title:"Templates/total",argTypes:{questionText:{control:"text"},images:{control:"object"},answer:{control:"text"}}},s={args:{questionText:"How many??",images:["https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/total/stone_01.png","https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/total/stone_02.png","https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/total/stone_03.png","https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/total/stone_04.png","https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/total/stone_05.png"],answer:"5"},render:t=>{const e=p(t);return l`<lido-home .xmlData="${e}"></lido-home>`}};function p(t){return`
  <main>
    <lido-container  visible="true"  id="lido-container"  onInCorrect="lido-avatar.avatarAnimate='Fail';"  onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='1000'; ${t.images.map((e,a)=>`i${a+1}.revealImageValue='true'; this.sleep='1000';`).join("")} this.sleep='2000';"
    bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/background-images/Total.png" objective="${t.answer}" is-continue-on-correct="true" show-Check="false" >
<!-- Chimple Avatar -->
    <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.402px,portrait.402px" width="landscape.302px,portrait.398px" x="landscape.84%, portrait.-4%" y="landscape.58%, portrait.77%" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="">
        <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
        </lido-avatar>
    </lido-cell>
  <lido-text visible="false" audio="" onEntry="this.speak='true';" bg-color="red" string="Count the number of objects in the left and click the number on the number board">
  </lido-text>

      <!-- Main Layout -->
      <lido-cell layout="landscape.row,portrait.col" y="landscape.3%,portrait.0px" onEntry="this.position='relative';" visible="true" width="90%" height="90%" bg-color="transparent">
        <!-- Left column: images -->
        <lido-cell layout="wrap" visible="true"  margin="landscape.0px -161px 0px -148px,portrait.0px"  onEntry="this.animation='topToPlace 1.5s linear';this.gridTemplateColumns = 'repeat(5, 1fr)' ;this.gap='10px';" bg-color="transparent" height="auto" width="auto"  >
          ${t.images.map((e,a)=>`
              <lido-image id="i${a+1}" value="${a+1}" type="text" visible="true" src="${e}" height="landscape.170px,portrait.140px" width="landscape.170px,portrait.140px"    ></lido-image>`).join("")}
        </lido-cell>

        <!-- Right column: text + calculator -->
        <lido-cell layout="col" visible="true" margin="landscape.0px,portrait.0px -184px 0px 0px" height="751px" width="500px" bg-color="transparent">
          <lido-text visible="true" bg-color="#60DADA" height="100px" width="456px" margin="0px" string="${t.questionText}" onEntry="this.border='5px solid #029A9A'; this.border-radius='10px'; this.font-size='40px'; this.font-weight='600';"></lido-text>
          <lido-calculator visible="true" height="650px" y="26px" width="456px" onEntry="this.position='relative';"></lido-calculator>
        </lido-cell>
      </lido-cell>
    </lido-container>
  </main>
  `}var o,i,r;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    questionText: 'How many??',
    images: ['https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/total/stone_01.png', 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/total/stone_02.png', 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/total/stone_03.png', 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/total/stone_04.png', 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/total/stone_05.png'],
    answer: '5'
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(r=(i=s.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const d=["total"];export{d as __namedExportsOrder,b as default,s as total};
