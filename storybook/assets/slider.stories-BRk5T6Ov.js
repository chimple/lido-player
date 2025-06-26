import"./lit-element-BxxbMms4.js";import{x as d}from"./lit-html-DLYuhZ0i.js";const v={title:"Component/Slider",argTypes:{src:{control:"select",options:["https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/slider/gwt.svg","https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/slider/beeker.svg","https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/slider/beekerFrame.svg"]},fillPercentage:{control:"number"},numberType:{control:"select",options:["integer","decimal","fraction"]},min:{control:"number"},division:{control:"number"},max:{control:"number"},fillDirection:{control:"select",options:["vertical","horizontal"]}}},t={args:{src:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/slider/gwt.svg",fillPercentage:30,numberType:"integer",min:0,division:5,max:10,fillDirection:"vertical"},render:s=>{const e=b(s);return d`<lido-home xml-data="${e}" xmlData="${e}"></lido-home>`}};function b(s){const{src:e,fillPercentage:o,fillDirection:a,min:l,max:c,division:m,numberType:p}=s;return`<main>
    <lido-container id="lido-container" tab-index="1" value="mainContainer1" objective="..." aria-label="" height="100vh" width="100vw" x="0" y="0" z="0" bg-color="black" visible="true">
      <lido-slide-fill fill="${o}" width="500px" src="${e}" fillDirection="${a}" numberType="${p}" min="${l}" max="${c}" division="${m}" ></lido-slider-fill>
    </lido-container>
  </main>`}var i,n,r;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/slider/gwt.svg',
    fillPercentage: 30,
    numberType: 'integer',
    min: 0,
    division: 5,
    max: 10,
    fillDirection: 'vertical'
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home xml-data="\${xml}" xmlData="\${xml}"></lido-home>\`;
  }
}`,...(r=(n=t.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const f=["QuestionAndOptions"];export{t as QuestionAndOptions,f as __namedExportsOrder,v as default};
