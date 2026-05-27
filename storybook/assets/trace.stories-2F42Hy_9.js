import"./lit-element-DByy2wOb.js";import{b as s}from"./lit-html-BGZAEiha.js";const m={title:"Component/Trace",argTypes:{svgFile:{control:"file"},mode:{control:"select",options:["noFlow","showFlow","freeTrace","blindTracing","blindFreeTrace"]}}},t={args:{svgFile:["https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/hindi_aa.svg"],mode:"showFlow"},render:e=>{const a=l(e);return s`<lido-home xml-data="${a}" xmlData="${a}"></lido-home>`}};function l(e){let a=e.svgFile[0],i=e.mode;return`<main>
    <lido-container id="lido-container" tab-index="1" value="mainContainer1" objective="D-6ba518e3,D-5a192ba3,D-b686f882,D-9095b74f,D-e0a32c78,D-1e4e88f1" aria-label="" height="100vh" width="100vw" x="0" y="0" z="0" bg-color="#FFB742" visible="true" audio="background1.mp3" onTouch="" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="true">
        <lido-trace id="image1" tab-index="2" value="image1" visible="true" svgSource="${a}" mode="${i}" z="0" width="1600px" height="900px" onEntry="" alt-text="{backgroundImage}">
        </lido-trace>
    </lido-container>
    </main>`}var o,n,r;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    svgFile: ['https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/hindi_aa.svg'],
    mode: 'showFlow'
  },
  render: args => {
    const xml = getContainerXml(args); // Function to generate XML based on args

    return html\`<lido-home xml-data="\${xml}" xmlData="\${xml}"></lido-home>\`;
  }
}`,...(r=(n=t.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const g=["QuestionAndOptions"];export{t as QuestionAndOptions,g as __namedExportsOrder,m as default};
