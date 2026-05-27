import"./lit-element-DByy2wOb.js";import{b as r}from"./lit-html-BGZAEiha.js";const c={title:"Templates/CheckerBlock",argTypes:{shapeNumber:{control:"number"}}},e={args:{shapeNumber:1},render:i=>{const o=s();return r`<lido-home .xmlData="${o}"></lido-home>`}};function s(i){return`<main>
    <lido-container visible="true" show-next-button="true" dropAttr="math-matrix" objective="nammadha" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/background-images/Checker%20blocks.png" onCorrect="this.sleep='120000';">
    <lido-math-matrix id="matrix3" visible="true" rows="10" cols="10" top-index="false" left-index="false" bottom-index="false" active-only-visible="false" defualtFill="100" active-bg-color="#deb3f2" clickable="false" type="checkerBlock"></lido-math-matrix>

    <lido-cell visible="true" layout="pos" x="0" y="0">
        <lido-math-matrix id="matrix1" visible="true" width="1600px" height="900px" rows="1" cols="10" top-index="false" left-index="false" bottom-index="false" active-only-visible="true" text="false" activeBgColor="#9a3dc5ff" defualtFill="10" tab-index="1" type="drop" value="nammadha" clickable="false"></lido-math-matrix>
    </lido-cell>

    <lido-cell visible="true" layout="pos" x="0" y="0">
        <lido-math-matrix id="matrix4" visible="true" width="1600px" height="900px" rows="2" cols="3" top-index="false" left-index="false" bottom-index="false" active-only-visible="true" text="false" activeBgColor="#9a3dc5ff" defualtFill="9" tab-index="3" type="drag" value="nammadha" clickable="false"></lido-math-matrix>
    </lido-cell>

</lido-container>
  </main>`}var t,a,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    shapeNumber: 1
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(l=(a=e.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const d=["CheckerBlock"];export{e as CheckerBlock,d as __namedExportsOrder,c as default};
