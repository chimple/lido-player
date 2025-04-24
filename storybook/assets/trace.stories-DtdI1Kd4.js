import"./lit-element-BxxbMms4.js";import{x as l}from"./lit-html-DLYuhZ0i.js";const d={title:"Component/Trace",argTypes:{svgFile:{control:"file"},mode:{control:"select",options:["noFlow","showFlow","freeTrace","blindTracing","blindFreeTrace"]}}},a={args:{svgFile:["assets/images/trace/उ (1).svg"],mode:"showFlow"},render:o=>{const e=s(o);return console.log("🚀 ~ xml:",e),l`<lido-home xml-data="${e}" xmlData="${e}"></lido-home>`}};function s(o){let e=o.svgFile[0],i=o.mode;return`<main>
    <lido-container id="lido-container" tabIndex="1" value="mainContainer1" objective="D-6ba518e3,D-5a192ba3,D-b686f882,D-9095b74f,D-e0a32c78,D-1e4e88f1" ariaLabel="" height="100vh" width="100vw" x="0" y="0" z="0" bgColor="#FFB742" visible="true" audio="background1.mp3" onTouch="" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" showCheck="false" isContinueOnCorrect="true">
        <lido-trace id="image1" tabIndex="2" value="image1" visible="true" svgSource="${e}" mode="${i}" z="0" width="1600px" height="900px" onEntry="" altText="{backgroundImage}">
        </lido-trace>
    </lido-container>
    </main>`}var t,n,r;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    svgFile: ['assets/images/trace/उ (1).svg'],
    mode: 'showFlow'
  },
  render: args => {
    const xml = getContainerXml(args);
    console.log('🚀 ~ xml:', xml);
    return html\`<lido-home xml-data="\${xml}" xmlData="\${xml}"></lido-home>\`;
  }
}`,...(r=(n=a.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const g=["QuestionAndOptions"];export{a as QuestionAndOptions,g as __namedExportsOrder,d as default};
