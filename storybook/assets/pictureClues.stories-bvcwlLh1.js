import"./lit-element-BxxbMms4.js";import{x as p}from"./lit-html-DLYuhZ0i.js";const u={title:"Templates/pictureClues",argTypes:{option1:{control:"text"},option2:{control:"text"},option3:{control:"text"},option4:{control:"text"},option5:{control:"text"},img1:{control:"file"},sentenceParts:{control:"object"},answer:{control:"text"},PracticeMode:{control:"boolean"}}},o={args:{option1:"विद्यालय",option2:"पानी",option3:"पाठ",option4:"बस",option5:"बाजा",sentenceParts:["ज़ोर ज़ोर से","#बाजा","बजा।।"],PracticeMode:!1,img1:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/picture_Clues/f1.png",answer:"बाजा"},render:t=>{const e=c(t);return p`<lido-home .xmlData="${e}"></lido-home>`}};function d(t,e){return t.startsWith("#")?`
      <lido-text type="drop" drop-attr="stretch" value="${t.replace("#","").trim()}" id="${e}" visible="true" height="136px" width="200px" y="19px" onEntry="this.position='relative';this.margin-right='40px';this.border-radius='16px';"></lido-text>
    `:`
    <lido-text visible="true" height="100px" width="auto" id="${e}" string="${t}" font-family="'Baloo Bhai 2'" font-color="black" font-size="80px" bg-color="transparent" onEntry="  this.font-weight='700';  this.border-radius='16px';  this.margin-right='40px'; " ></lido-text>
  `}function c(t){const{isAllowOnlyCorrect:e=!0}=t,{sentenceParts:i=[]}=t;return`<main>
    <lido-container disable-speak="true"  visible="true" template-id="dragAndDrop" id="lido-container" objective="${t.answer}" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/palEgra-pictureWordMatch/bgImg.png" onInCorrect="lido-avatar.avatarAnimate='Fail';this.sleep='2000';" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2300';" is-continue-on-correct="${t.PracticeMode}" is-allow-only-correct="${t.PracticeMode}" onEntry="">

    <!-- Chimple Avatar -->
    <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.344px,portrait.402px" width="landscape.296px,portrait.398px" x="landscape.85%, portrait.28%" y="landscape.21%, portrait.77%" aria-hidden="true" z="1" bg-color="transparent" visible="true">
        <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="">
        </lido-avatar>
    </lido-cell>

    <lido-text visible="false" id="inst" tab-index="1" string="drag and drop the correct option to form a sentence"></lido-text>

    <lido-cell visible="true" layout="col" height="85%" width="98%" bg-color="transparent" margin="61px 0px -58px 0px">
        <lido-cell layout="row" visible="true" height="330px" width="330px" bg-color="transparent">
            <lido-image   tab-index="8"  visible="true" height="auto" width="auto" src="${t.img1}"></lido-image>
    
            </lido-cell>
        <lido-cell layout="flex" visible="true" height="270px" width="auto" onEntry="this.display='ruby';" bg-color="transparent">
          ${i.map((l,s)=>d(l,`sentence-${s}`)).join("")}
        </lido-cell>
        <lido-cell layout="row" visible="true" height="270px" width="90%" bg-color="transparent" onEntry="this.align-items='center';this.justify-content='space-around';">
            <lido-text visible="true" height="136px" width="auto" disable-speak="true" type="drag" id="drag1" tab-index="2" string="${t.option1}" value="${t.option1}" font-family="'Baloo Bhai 2'" font-color="black" font-size="80px"  bg-color="#FFAC4C" onEntry="this.font-weight='700';this.padding='10px 45px 10px 45px'; this.border-radius='16px';" ></lido-text>
            <lido-text visible="true" height="136px" width="auto" disable-speak="true" type="drag" id="drag2" tab-index="3" string="${t.option2}" value="${t.option2}" font-family="'Baloo Bhai 2'" font-color="black" font-size="80px"  bg-color="#FFAC4C" onEntry="this.font-weight='700';this.padding='10px 45px 10px 45px';this.border-radius='16px';" ></lido-text>
            <lido-text visible="true" height="136px" width="auto" disable-speak="true" type="drag" id="drag3" tab-index="4" string="${t.option3}" value="${t.option3}" font-family="'Baloo Bhai 2'" font-color="black" font-size="80px"  bg-color="#FFAC4C" onEntry="this.font-weight='700';this.padding='10px 45px 10px 45px';this.border-radius='16px';" ></lido-text>
            <lido-text visible="true" height="136px" width="auto" disable-speak="true" type="drag" id="drag4" tab-index="5" string="${t.option4}" value="${t.option4}" font-family="'Baloo Bhai 2'" font-color="black" font-size="80px"  bg-color="#FFAC4C" onEntry="this.font-weight='700';this.padding='10px 45px 10px 45px';this.border-radius='16px';" ></lido-text>
            <lido-text visible="true" height="136px" width="auto" disable-speak="true" type="drag" id="drag5" tab-index="6" string="${t.option5}" value="${t.option5}" font-family="'Baloo Bhai 2'" font-color="black" font-size="80px"  bg-color="#FFAC4C" onEntry="this.font-weight='700';this.padding='10px 45px 10px 45px';this.border-radius='16px';" ></lido-text>
        
        </lido-cell>
    </lido-cell>

</lido-container>
  </main>`}var a,r,n;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    option1: "विद्यालय",
    option2: "पानी",
    option3: "पाठ",
    option4: "बस",
    option5: "बाजा",
    sentenceParts: ['ज़ोर ज़ोर से', '#बाजा', 'बजा।।'],
    PracticeMode: false,
    img1: "https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/picture_Clues/f1.png",
    answer: "बाजा"
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(n=(r=o.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const b=["pictureClues"];export{b as __namedExportsOrder,u as default,o as pictureClues};
