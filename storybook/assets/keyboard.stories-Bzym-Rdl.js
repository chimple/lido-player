import"./lit-element-BxxbMms4.js";import{x as n}from"./lit-html-DLYuhZ0i.js";const p={title:"Component/Keyboard",argTypes:{objective:{control:"text"},keys:{control:"text"},keyboardInput:{control:"select",options:["enable","disable"]},type:{control:"select",options:["click","drag"]}}},t={args:{objective:"A",keys:"A,B-disable,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z",keyboardInput:"enable"},render:e=>{const a=l(e);return n`<lido-home xml-data="${a}" xmlData="${a}"></lido-home>`}},l=e=>`<main>
            <lido-container objective="${e.objective}" is-continue-on-correct="true" drop-action="infinite-drop" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onInCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';">
              <!-- Chimple Avatar -->
              <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="305px" width="227px" x="-50px" y="landscape.560px, portrait.1220px" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="">
                  <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="462px" width="356px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
                  </lido-avatar>
              </lido-cell>
              ${e.type==="drag"?`<lido-text visible="true" string="Drag the letters to this boxes." font-family="'Baloo Bhai 2'" font-size="36px" bg-color="transparent" margin="0 0 20px 0" type="drop"></lido-text>`:""}
              <lido-keyboard visible="true" keys="${e.keys}" type="${e.type}" width="1000px" height="300px" keyboard-input="${e.keyboardInput==="enable"?"true":"false"}"></lido-keyboard>
            </lido-container>
          </main>`;var o,r,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    objective: 'A',
    keys: 'A,B-disable,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z',
    keyboardInput: "enable"
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home xml-data="\${xml}" xmlData="\${xml}"></lido-home>\`;
  }
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const c=["Keyboard"];export{t as Keyboard,c as __namedExportsOrder,p as default};
