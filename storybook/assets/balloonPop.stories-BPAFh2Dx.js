import"./lit-element-BxxbMms4.js";import{x as n}from"./lit-html-DLYuhZ0i.js";const d={title:"Templates/BalloonPop",argTypes:{Increment:{control:"text"},Decrement:{control:"text"},cells:{control:{type:"object"},description:"Array of balloon cells with value and filter"},objective:{control:"text"}}},t={args:{Increment:"+10",Decrement:"-10",objective:"A",cells:[{value:"A",filter:"violet"},{value:"B",filter:"red"},{value:"A",filter:"blue"},{value:"B",filter:"blue"},{value:"B",filter:"yellow"},{value:"A",filter:"grey"},{value:"A",filter:"white"}]},render:e=>{const l=s(e);return n`<lido-home .xmlData="${l}"></lido-home>`}};function s(e){const l=e.cells.map(i=>`
    <lido-cell visible="true" layout="col" width="250px" height="500px" bg-color="transparent" value="${i.value}">
        <lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/float/balloon.png" width="100%" height="100%" filter="${i.filter}">
        </lido-image>
        <lido-text visible="true" string="${i.value}" bg-color="transparent" font-family="'Baloo Bhai 2'" font-size="143px" x="97px" y="50px" onEntry="this.position='absolute'; this.fontWeight='500';">
        </lido-text>
    </lido-cell>
  `).join("");return`<main>
    <lido-container id="lido-container" tab-index="1" visible="true" objective="${e.objective}"
      onCorrect="lido-slide-fill.fill-slide='${e.Increment}'; lido-avatar.avatarAnimate='Success'; this.sleep='2000';"
      onInCorrect="lido-slide-fill.fill-slide='${e.Decrement}'; lido-avatar.avatarAnimate='Fail'; this.sleep='2000';"
      is-continue-on-correct="true" show-check="true" bg-color="transparent" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/Sky.png" disable-speak="true">
        <lido-text tab-index="1" visible="false" string="Pop the ${e.objective} balloon"></lido-text>
        <!-- Chimple Avatar -->
        <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="305px" width="227px" x="-50px" y="landscape.560px, portrait.1220px" aria-hidden="true" z="1" bg-color="transparent" visible="true">
            <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="462px" width="356px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
            </lido-avatar>
        </lido-cell>
        
        <!-- Content -->
        <lido-cell visible="true" layout="row" width="landscape.100%, portrait.95%" height="100%" z="1" onEntry="this.alignItems='flex-start';" >

            <lido-cell visible="true" layout="pos" x="landscape.70px, portrait.50px" y="landscape.360px, portrait.330px" bg-color="transparent">
              <lido-text visible="true" string="${e.objective}" bg-color="transparent" font-family="'Baloo Bhai 2'" font-size="140px">
              </lido-text>
            </lido-cell>

            <lido-slide-fill id="lido-slide-fill" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/float/balloonBeeker.svg" width="landscape.10%, portrait.17%" margin="landscape.0 0 0 35px, portrait.0" height="600px" fill="0" fillDirection="vertical">
            </lido-slide-fill>


            <!-- Float Area -->
            <lido-float visible="true" width="90%" height="100%" bg-color="transparent">
                ${l}
            </lido-float>
        </lido-cell>
        
    </lido-container>
  </main>`}var a,o,r;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    Increment: '+10',
    Decrement: '-10',
    objective: 'A',
    cells: [{
      value: 'A',
      filter: 'violet'
    }, {
      value: 'B',
      filter: 'red'
    }, {
      value: 'A',
      filter: 'blue'
    }, {
      value: 'B',
      filter: 'blue'
    }, {
      value: 'B',
      filter: 'yellow'
    }, {
      value: 'A',
      filter: 'grey'
    }, {
      value: 'A',
      filter: 'white'
    }]
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const u=["QuestionAndOptions"];export{t as QuestionAndOptions,u as __namedExportsOrder,d as default};
