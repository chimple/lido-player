import"./lit-element-BxxbMms4.js";import{x as d}from"./lit-html-DLYuhZ0i.js";const p="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/puzzles-asset/gaezzle_bg.jpg",g={title:"Templates/PuzzleGame",argTypes:{backgroundImage:{control:"text",name:"Background Image URL"},draggables:{control:"object",name:"Draggable Images"},dropCells:{control:"object",name:"Drop Cells"}},args:{backgroundImage:p,draggables:[{id:"image1",value:"option1",src:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/puzzles-asset/gaezzle1.png",width:"313px"},{id:"image2",value:"option2",src:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/puzzles-asset/gaezzle2.png",width:"269px"}],dropCells:[{id:"drop1",value:"option1",y:"35.3%",x:"44.8%"},{id:"drop2",value:"option2",y:"57.2%",x:"42.7%"}]}},o={render:a=>{const t=m(a);return d`<lido-home xml-data="${t}" xmlData="${t}"></lido-home>`}};function m(a){const t=a.draggables.map(e=>`<lido-image id="${e.id}" width="${e.width||"250px"}" disableEdit="true" value="${e.value}" visible="true" type="drag" src="${e.src}" z="0" altText="{${e.id}}"></lido-image>`).join(`
`),i=a.dropCells.map((e,n)=>`<lido-cell id="${e.id}" value="${e.value}" tabIndex="${n+2}" height="10%" width="10%" layout="pos" y="${e.y}" x="${e.x}" visible="true" type="drop" bgColor="transparent"></lido-cell>`).join(`
`);return`<main>
  <lido-container id="lido-container" tabIndex="1" isContinueOnCorrect="true" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" showCheck="false" visible="true">
    <lido-image id="mainImage" disableEdit="true" value="background-image" visible="true" src="${a.backgroundImage}" z="0" onEntry="" altText="{backgroundImage}"></lido-image>
    <lido-cell layout="random" visible="true" width="1200px" height="100px" y="65%">
      ${t}
    </lido-cell>

    ${i}
  </lido-container>
</main>`}var r,l,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home xml-data="\${xml}" xmlData="\${xml}"></lido-home>\`;
  }
}`,...(s=(l=o.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const b=["PuzzleGame"];export{o as PuzzleGame,b as __namedExportsOrder,g as default};
