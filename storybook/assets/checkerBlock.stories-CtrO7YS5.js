import"./lit-element-DRlmAcsz.js";import{b as c}from"./lit-html-s0HVm7S4.js";const x={title:"Templates/CheckerBlock",argTypes:{shapeNumber:{control:"number"}}},a={args:{shapeNumber:1},render:t=>{const e=m();return c`<lido-home .xmlData="${e}"></lido-home>`}};function m(t){const e=d();return console.log("shape : ",e),`<main>
    <lido-container visible="true" show-next-button="true" dropAttr="math-matrix" objective="nammadha" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/background-images/Checker%20blocks.png" onCorrect="this.sleep='120000';">
    <lido-math-matrix id="matrix3" visible="true" rows="10" cols="10" top-index="false" left-index="false" bottom-index="false" active-only-visible="false" defualtFill="100" active-bg-color="#deb3f2" clickable="false" type="checkerBlock"></lido-math-matrix>

    <lido-cell visible="true" layout="pos" x="0" y="0">
        <lido-math-matrix id="matrix1" visible="true" width="1600px" height="900px" rows="1" cols="10" top-index="false" left-index="false" bottom-index="false" active-only-visible="true" text="false" activeBgColor="#9a3dc5ff" defualtFill="10" tab-index="1" type="drop" value="nammadha" clickable="false"></lido-math-matrix>
    </lido-cell>

    <lido-cell visible="true" layout="pos" x="0" y="0">
        <lido-math-matrix id="matrix4" visible="true" width="1600px" height="900px" rows="2" cols="3" top-index="false" left-index="false" bottom-index="false" active-only-visible="true" text="false" activeBgColor="#9a3dc5ff" defualtFill="9" tab-index="3" type="drag" value="nammadha" clickable="false"></lido-math-matrix>
    </lido-cell>

</lido-container>
  </main>`}function d(){const t={};let e=0;for(;e<8;){const l=Math.floor(Math.random()*3),s=l===0?2:3,n=l===0?3:l===1?2:3;return e++,t[`slot-${e}`]={width:s,height:n},t}}var o,i,r;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    shapeNumber: 1
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(r=(i=a.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const b=["CheckerBlock"];export{a as CheckerBlock,b as __namedExportsOrder,x as default};
