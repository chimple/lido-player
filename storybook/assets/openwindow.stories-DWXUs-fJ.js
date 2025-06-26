import"./lit-element-BxxbMms4.js";import{x as p}from"./lit-html-DLYuhZ0i.js";const u={title:"Templates/OpenWindowUI",argTypes:{objective:{control:"text"},heading:{control:"text"},choices:{control:"object"}},args:{objective:"city",heading:"CITY",choices:[{id:"choice1",value:"city",src:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/open_window/city.png"},{id:"choice2",value:"sun",src:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/open_window/sun.png"}]}},o={render:e=>{const i=c(e);return p`<lido-home xml-data="${i}" .xmlData="${i}"></lido-home>`}};function c(e){const i=e.heading.split("").map((t,a)=>`
    <lido-text id="heading${a+1}" tab-index="${a+2}" flexible-width="false" visible="true"
      border-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/open_window/letter_bg.png"
      bg-color="transparent" width="180px" height="210px"
      string="${t}" font-color="black" font-family="'Baloo 2', serif"
      font-size="146px" z="0"
      onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';">
    </lido-text>
  `).join(`
`),n=e.choices.map(t=>`
    <lido-cell visible="true" layout="col" width="250px" height="180px" value="${t.value}" type="click" onEntry="this.background='white'; this.background-color='white !important'; this.box-shadow='white !important';">
      <lido-image id="${t.id}" visible="true" src="${t.src}"></lido-image>
    </lido-cell>
  `).join(`
`);return`<main>
    <lido-container id="lido-container" tab-index="1" 
      bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/open_window/Spring.png" 
      height="100%" width="100%" visible="true"
        is-continue-on-correct="true"
      onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" 
      onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" 
      onEntry="${`heading0.speak='true'; this.sleep='800'; ${e.heading.split("").map((t,a)=>`heading${a+1}.speak='true'; this.sleep='500';`).join(" ")}`}"
      objective="${e.objective}" >
        <lido-cell layout="row" visible="true" width="landscape.auto, portrait.80%" height="landscape.30%, portrait.10%" bg-color="transparent" margin="5%" onEntry="this.gap='45px';">
            <lido-cell layout="row" visible="false">
            <lido-text id="heading0" string="${e.objective}"></lido-text>
          </lido-cell>
            ${i}
        </lido-cell>
        <lido-cell layout="row" visible="true" width="75%" height="25%" bg-color="transparent" margin="5%">
            <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="305px" width="227px" x="landscape.620px, portrait.270px" y="landscape.440px, portrait.1200px" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="this.padding-right=100px">
                <lido-image id="image" disable-edit="true" value="image" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/open_window/door.png" bg-color="transparent" width="195px" height="285px" x="landscape.80px, portrait.80px" y="landscape.90px, portrait.90px" alt-text="{shadowImage}"></lido-image>
                <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="480px" width="220px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}" x="65px" y="-25px"></lido-avatar>
            </lido-cell>
            ${n}
        </lido-cell>
    </lido-container>
  </main>`}var s,r,l;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => {
    const xml = getOpenWindowXml(args);
    return html\`<lido-home xml-data="\${xml}" .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(l=(r=o.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const m=["OpenWindow"];export{o as OpenWindow,m as __namedExportsOrder,u as default};
