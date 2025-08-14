import"./lit-element-BxxbMms4.js";import{x as c}from"./lit-html-DLYuhZ0i.js";const g={title:"Templates/OpenWindowUI2",argTypes:{objective:{control:"text"},heading:{control:"text"},backgroundImage:{control:"file",name:"Background Image URL",multiple:!0},choice1Text:{control:"text",name:"Choice 1 Text"},choice1ImageUrl:{control:"file",name:"Choice 1 Image URL",multiple:!0},choice2Text:{control:"text",name:"Choice 2 Text"},choice2ImageUrl:{control:"file",name:"Choice 2 Image URL",multiple:!0}},args:{objective:"city",heading:"CITY",backgroundImage:["https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/open_window/Spring.png"],choice1Text:"city",choice1ImageUrl:["https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/open_window/city.png"],choice2Text:"sun",choice2ImageUrl:["https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/open_window/sun.png"]}},i={args:{objective:"mom",heading:"MOM",choice2Text:"mom",choice2ImageUrl:["https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/open_window/mom.png"]},render:e=>{const a=p(e);return c`<lido-home xml-data="${a}" .xmlData="${a}"></lido-home>`}};function p(e){const r=[{id:"choice1",value:e.choice1Text,src:e.choice1ImageUrl[0]},{id:"choice2",value:e.choice2Text,src:e.choice2ImageUrl[0]}].map(o=>`
        <lido-cell visible="true" layout="col" width="250px" height="180px" value="${o.value}" type="click" onEntry="this.background='white'; this.background-color='white !important'; this.box-shadow='white !important'; this.borderRadius='8px';" onInCorrect="this.vibrate='horizontal-shake';" onCorrect="this.cellBorderAnimate='#65BC46';">
          <lido-image id="${o.id}" visible="true" src="${o.src}">
          </lido-image>
        </lido-cell>
      `).join(`
`),t="heading.speak='true'; this.sleep='800';";return`
  <main>
    <lido-container id="lido-container" tab-index="1" bg-image="${e.backgroundImage}" height="100%" width="100%" visible="true" is-continue-on-correct="true" onCorrect="${t} lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" onEntry="${t}" objective="${e.objective}" >
      <lido-cell layout="row" visible="true" width="landscape.auto, portrait.80%" height="landscape.30%, portrait.10%" bg-color="transparent" margin="5%" onEntry="">
        <lido-text id="heading" tab-index="2" visible="true" border-image="" bg-color="transparent" width="350px" height="210px" string="${e.heading}" font-color="black" font-family="'Baloo 2', serif" font-size="146px" z="0"
        onEntry="this.borderRadius='6px'; this.boxShadow='unset'; this.fontWeight='800';" show-speak-icon="true" audio="">
        </lido-text>
          </lido-cell>
      <lido-cell layout="row" visible="true" width="75%" height="25%" bg-color="transparent" margin="5%">
        <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="305px" width="227px" x="landscape.620px, portrait.270px" y="landscape.440px, portrait.1200px" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="this.padding-right=100px">
          <lido-image id="image" disable-edit="true" value="image" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/open_window/door.png" bg-color="transparent" width="195px" height="285px" x="landscape.80px, portrait.80px" y="landscape.90px, portrait.90px" alt-text="{shadowImage}">
          </lido-image>
          <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="480px" width="220px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}" x="65px" y="-25px">
          </lido-avatar>
        </lido-cell>
        ${r}
        </lido-cell>
    </lido-container>

    <lido-container id="lido-container" tab-index="1" bg-image="${e.backgroundImage}" height="100%" width="100%" visible="true" is-continue-on-correct="true" onCorrect="${t} lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" onEntry="${t}" objective="${e.objective}" >
      <lido-cell layout="row" visible="true" width="landscape.auto, portrait.80%" height="landscape.30%, portrait.10%" bg-color="transparent" margin="5%" onEntry="">
        <lido-text id="heading" tab-index="2" visible="true" border-image="" bg-color="transparent" width="350px" height="210px" string="${e.heading}" font-color="black" font-family="'Baloo 2', serif" font-size="146px" z="0"
        onEntry="this.borderRadius='6px'; this.boxShadow='unset'; this.fontWeight='800';" show-speak-icon="true" audio="">
        </lido-text>
          </lido-cell>
      <lido-cell layout="row" visible="true" width="75%" height="25%" bg-color="transparent" margin="5%">
        <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="305px" width="227px" x="landscape.620px, portrait.270px" y="landscape.440px, portrait.1200px" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="this.padding-right=100px">
          <lido-image id="image" disable-edit="true" value="image" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/open_window/door.png" bg-color="transparent" width="195px" height="285px" x="landscape.80px, portrait.80px" y="landscape.90px, portrait.90px" alt-text="{shadowImage}">
          </lido-image>
          <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="480px" width="220px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}" x="65px" y="-25px">
          </lido-avatar>
        </lido-cell>
        ${r}
        </lido-cell>
    </lido-container>
  </main>`}var s,l,n;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    objective: "mom",
    heading: "MOM",
    choice2Text: "mom",
    choice2ImageUrl: ["https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/open_window/mom.png"]
  },
  render: args => {
    const xml = getOpenWindowXml(args);
    return html\`<lido-home xml-data="\${xml}" .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(n=(l=i.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const b=["OpenWindow"];export{i as OpenWindow,b as __namedExportsOrder,g as default};
