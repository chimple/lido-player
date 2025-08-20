import"./lit-element-BxxbMms4.js";import{x as n}from"./lit-html-DLYuhZ0i.js";const b={title:"Templates/BubbleType",argTypes:{cells:{control:{type:"object"},description:"Array of bubble cells with value and filter"},buttons:{control:{type:"text"}}}},l={args:{cells:[{value:"A",filter:"#F34D08"},{value:"B",filter:"#81C127"},{value:"C",filter:"#FFC805"},{value:"D",filter:"#F55376"},{value:"E",filter:"#5D44BD"}],buttons:"A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"},render:t=>{const i=c(t);return n`<lido-home .xmlData="${i}"></lido-home>`}};function c(t){const i=t.cells.map(e=>e.value.toUpperCase()),s=`${t.buttons}`.split(",").map(e=>i.includes(e)?e:`${e}-disable`).join(",");return`<main>
              <lido-container id="lido-container" visible="true" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" is-continue-on-correct="true" bg-color="transparent" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/Underwater.png">


                        <lido-text tab-index="1" visible="false" string="Click the bubbled Letter"></lido-text>
                        <lido-cell visible="true" layout="col" width="100%" height="100%" z="1" onEntry="this.justifyContent='space-between';" bg-color="transparent">
                                  <!-- Chimple Avatar -->
                        <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="305px" width="227px" x="-20px" y="landscape.230px, portrait.620px" aria-hidden="true" z="9999" bg-color="transparent" visible="true" onEntry="">
                            <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="462px" width="356px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
                            </lido-avatar>
                        </lido-cell>
                            <!-- Float Area -->
                            <lido-float visible="true" width="100%" height="56%" bg-color="transparent" float-direction="leftToRight" onEntry="this.pointerEvents='none';">
                                ${t.cells.map(e=>`
    <lido-cell visible="true" layout="col" width="180px" height="180px" bg-color="transparent" value="${e.value}">
        <lido-image visible="true" src="/src/assets/images/Group 1.png" width="100%" height="100%" filter="${e.filter}">
        </lido-image>
        <lido-text visible="true" height="100%" width="100%" string="${e.value}" bg-color="transparent" font-family="'Baloo Bhai 2'" font-size="120px" font-color="white" onEntry="this.position='absolute'; this.fontWeight='800';">
        </lido-text>
    </lido-cell>
  `).join("")}
                            </lido-float>
                            <lido-keyboard 
                              visible="true" 
                              width="90%" 
                              height="44%" 
                              type="click" 
                              bg-color="#f59631" 
                              keys="${s}" 
                              font-size="landscape.50px, portrait.70px" 
                              onEntry="this.fontWeight='800';" 
                              font-color="white" 
                              keyboard-input="true" 
                              border-radius="10px" 
                              letter-length="5"
                              z="99999"
                              columns="landscape.10, portrait.7"
                              >
                            </lido-keyboard>
                        </lido-cell>
                        
              </lido-container>
          </main>`}var o,a,r;l.parameters={...l.parameters,docs:{...(o=l.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    cells: [{
      value: 'A',
      filter: '#F34D08'
    }, {
      value: 'B',
      filter: '#81C127'
    }, {
      value: 'C',
      filter: '#FFC805'
    }, {
      value: 'D',
      filter: '#F55376'
    }, {
      value: 'E',
      filter: '#5D44BD'
    }],
    buttons: "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(r=(a=l.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const m=["QuestionAndOptions"];export{l as QuestionAndOptions,m as __namedExportsOrder,b as default};
