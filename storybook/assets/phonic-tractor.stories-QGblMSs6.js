import"./lit-element-DRlmAcsz.js";import{b as h}from"./lit-html-s0HVm7S4.js";const m={title:"Templates/Phonic-tractor",argTypes:{text1:{control:"text"},options:{control:"object"},answers:{control:"object"},isAllowOnlyCorrect:{control:"boolean",name:"Allow Only Correct"}}},a={args:{text1:"fox",options:["f","o","x"],answers:["f","o","x"],isAllowOnlyCorrect:!0},render:o=>{const t=g(o);return h`<lido-home .xmlData="${t}"></lido-home>`}};function g(o){let t=1;const{text1:l,options:c=[],answers:r=[],isAllowOnlyCorrect:i}=o,d=r.map(e=>`
        <!-- drop and trolley -->
        <lido-cell height="237px" width="200px" visible="true" bg-color="transparent" layout="col" >
            <lido-text id="drop${t}" type="drop" tab-index="${t++}" bg-color="transparent" height="132px" width="132px" value="${e}" is-allow-only-one-drop="${i}" margin="-25px 0px 16px 0px" onEntry=" this.borderRadius='6px';this.display='flex'; this.alignItems='center'; this.justifyContent='center';">
            </lido-text>
            <lido-image id="img${t}" visible="true"  disable-edit="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/phonic-tractor/phonictractor_tractor_holder.png" height="97px" width="220px" >
            </lido-image>
        </lido-cell>
      `).join(""),x=c.map(e=>`
        <lido-text id="option${t}" tab-index="${t++}" width="132px"  height="132px" value="${e}"  visible="true" string="${e}" font-family="'Baloo Bhai 2'" font-color="white" type="drag" font-size="landscape.96px, portrait.96px" bg-color="transparent" onEntry="  this.fontWeight='600';this.borderRadius='10px';"  margin="landscape.150px 0px 112px 0px, portrait.0px 0px 0px 0px"  border-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/phonic-tractor/box.png" onTouch="this.speak='true';"  >
        </lido-text>
      `).join("");return`
    <main>
    <lido-container id="lido-container" appendToDropOnCompletion="true" value="mainContainer1" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/background-images/Phonic%20tractor.png"  bg-color="transparent" objective="${r.join(",")}" height="100%" width="100%" visible="true" show-check="false" is-continue-on-correct="true" after-drop="false" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='1000';  b1.animation='placeToLeft 2s linear'; this.sleep='2000';"  onEntry="this.justifyContent='space-around';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" is-allow-only-correct="${i}"> 

        <!-- Chimple Avatar -->
        <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="305px" width="227px" x="landscape.1274px, portrait.576px" y="landscape.591px, portrait.236px" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="this.animation='rightToPlace 2.5s linear';">
            <lido-avatar id="lido-avatar" disable-edit="true" visible="true"  height="462px"  width="356px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
            </lido-avatar>
            <lido-image id="image" disable-edit="true" value="image" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/Shadow.png" bg-color="transparent" width="186px" height="20px" x="landscape.7px, portrait.77px" y="landscape.305px, portrait.365px" alt-text="{shadowImage}">
            </lido-image>
        </lido-cell>
        <!-- parent cell -->
        <lido-cell layout="col" visible="true" width="100%" height="100%"  bg-color="transparent" margin="landscape.-38px 0px -122px 0px, portrait.0px 0px 0px 0px">
            <!-- question -->
            <lido-image visible="true" onTouch="this.speak='true';" id="img1" height="140px" width="361px"  disable-edit="true" is-slice="true" bg-color="transparent" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/phonic-tractor/board.png" margin="landscape.42px 0px -126px 0px, portrait.-58px 0px 60px 0px"  >
                <lido-text id="heading"  tab-index="1" height="100px"  visible="true" string="${l}" font-family="'Baloo Bhai 2'" font-color="white" font-size="landscape.96px, portrait.96px" bg-color="transparent" onEntry="  this.fontWeight='600';"   margin="landscape.0px 0px 0px 0px, portrait.0px 0px 0px 0px" >
                </lido-text>
            </lido-image>
            <!-- tractor -->
            <lido-cell layout="row" id="b1" visible="true" width="landscape.100%, portrait.850px" height="landscape.245px, portrait.30%" bg-color="transparent" onEntry="this.align-items='center'; this.animation='rightToPlace 3s linear'; this.justifyContent='center';" margin="landscape.215px 0px 0px 0px, portrait.0px 0px 0px 0px">
                <!-- tractor head -->
                <lido-image id="img2" visible="true"  disable-edit="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/phonic-tractor/phonictractor_tractor_head.png" height="landscape.154px, portrait.154px" width="197px" onEntry="" margin="landscape.86px -11px 0px 89px, portrait.80px 0px 0px 0px" >
                </lido-image>
                ${d}
            </lido-cell>
            <!-- options -->
            <lido-cell layout="landscape.row,portrait.wrap" width="80%" height="landscpe.275px, portrait.150px" visible="true" delay-visible="3000" bg-color="transparent" onEntry="this.gap=35px; this.justify-content='center';" >
                ${x}				
            </lido-cell>	
        </lido-cell>	

    </lido-container>
    </main>
  `}var p,s,n;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    text1: 'fox',
    options: ['f', 'o', 'x'],
    answers: ['f', 'o', 'x'],
    isAllowOnlyCorrect: true
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(n=(s=a.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const y=["PhonicTractor"];export{a as PhonicTractor,y as __namedExportsOrder,m as default};
