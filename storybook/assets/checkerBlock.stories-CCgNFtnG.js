import"./lit-element-DRlmAcsz.js";import{b as x}from"./lit-html-s0HVm7S4.js";const B={title:"Templates/CheckerBlock",argTypes:{shapeNumber:{control:"number"}}},s={args:{shapeNumber:1},render:e=>{const t=f(e);return x`<lido-home .xmlData="${t}"></lido-home>`}};function f(e){const t=v(e.shapeNumber);let a=1,r=[];const n=Object.entries(t).map(([g,{width:i,height:l}],o)=>(r.push(`slot${o+1}`),`
        <lido-math-matrix id="drop-${o+1}" visible="true" width="1600px" height="900px" rows="${i}" cols="${l}" top-index="false" left-index="false" bottom-index="false" active-only-visible="true" activeBgColor="#967ca6" defualtFill="${i*l}" tab-index="${a++}" type="drop" value="slot${o+1}" clickable="false" border="2px solid black" font-color="white" onInCorrect="lido-avatar.avatarAnimate='Fail';" onCorrect="lido-avatar.avatarAnimate='Success';"></lido-math-matrix>
        `)).join(`
`),m=Object.entries(t).map(([g,{width:i,height:l}],o)=>{const c=["#a657fa","#fa7f98","#dee60e","#71f24e","#55d9a4"],b=c[Math.floor(Math.random()*c.length)];return`
        <lido-math-matrix id="drag-${o+1}" visible="true" width="1600px" height="900px" rows="${i}" cols="${l}" top-index="false" left-index="false" bottom-index="false" active-only-visible="true" activeBgColor="${b}" defualtFill="${i*l}" type="drag" value="slot${o+1}" clickable="false" border="2px solid black" font-color="white" onCorrect="lido-avatar.avatarAnimate='Success';"></lido-math-matrix>`}).join(`
`);return`<main>
    <lido-container id="lido-container" visible="true" dropAttr="math-matrix" objective="${r}" onCorrect="this.sleep='2000'; all.animation='placeToLeft 1.5s linear'; this.sleep='1500';" is-continue-on-correct="true" is-allow-only-correct="true" bg-color="transparent" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/background-images/Checker%20blocks.png" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" disable-speak="true">

    <lido-text visible="false" tab-index="1" string="drag the missing numbers from right to its correct place and complete the puzzle" onEntry="this.sleep='2000'; this.speak='true';"></lido-text>

    <!-- Chimple Avatar -->
    <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.448px,portrait.270px" width="landscape.350px,portrait.270px" x="landscape.500px, portrait.-9%" y="landscape.522px, portrait.36%" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="">
            <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
            </lido-avatar>
    </lido-cell>

    <lido-cell visible="true" id="all" layout="landscape.row, portrait.col" height="100%" width="100%" flex-direction="landscape.unset, portrait.column-reverse" onEntry="this.justifyContent='unset';" bg-color="transparent">
    <lido-cell visible="true" layout="col" width="landscape.30%, portrait.90%" height="landscape.90%, portrait.45%" bg-color="transparent" z="2">
            <lido-cell visible="true" layout="random" width="100%" height="100%" bg-color="transparent">
                ${m}
            </lido-cell>
        </lido-cell>
        <lido-cell id="truck" visible="true" layout="pos" x="0" y="0" z="1" onEntry="this.animation='rightToPlace 1.5s linear';">
            <lido-image visible="true" width="landscape.1500px, portrait.1234px" height="landscape.900px, portrait.850px" x="landscape.185px, portrait.-350px" y='landscape.20px, portrait.60px' src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/CheckerBlock/checkerBlockTruck.svg"></lido-image>
            <lido-math-matrix id="matrix" visible="true" width="landscape.720px, portrait.660px" height="landscape.860px, portrait.400px" x="landscape.800px, portrait.135px" y="landscape.23px, portrait.75px" rows="10" cols="10" top-index="false" left-index="false" bottom-index="false" active-only-visible="false" defualtFill="100" text="1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100" border="2px solid #736e6cff" border-radius="0" active-bg-color="#d7d5d9" clickable="false" type="checkerBlock" font-color="#4f2e35"></lido-math-matrix>
            ${n}
            
        </lido-cell>
    </lido-cell>
    
</lido-container>
  </main>`}function v(e){switch(e){case 1:return d();case 2:return w();case 3:return y();case 8:return k();case 9:return $();case 10:return C();case 11:return S();default:return d()}}function d(){const e={};let t=0;for(;t<8;){const a=Math.floor(Math.random()*3),r=a===0?2:3,n=a===0?3:a===1?2:3;t++,e[`slot-${t}`]={width:r,height:n}}return e}function w(){const e={};let t=0;for(;t<5;)t++,e[`slot-${t}`]={width:10,height:1};return e}function k(){const e={};let t=0;for(;t<10;)t++,e[`slot-${t}`]={width:5,height:1};return e}function y(){const e={};let t=0;for(;t<5;)t++,e[`slot-${t}`]={width:1,height:10};return e}function $(){const e={};let t=0;for(;t<10;)t++,e[`slot-${t}`]={width:2,height:2};return e}function C(){const e={};let t=0;for(;t<10;)t++,e[`slot-${t}`]={width:2,height:1};return e}function S(){const e={};let t=0;for(;t<10;)t++,e[`slot-${t}`]={width:1,height:1};return e}var p,h,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    shapeNumber: 1
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(u=(h=s.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const A=["Blocks"];export{s as Blocks,A as __namedExportsOrder,B as default};
