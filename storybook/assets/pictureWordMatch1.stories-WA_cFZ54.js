import"./lit-element-BxxbMms4.js";import{x as s}from"./lit-html-DLYuhZ0i.js";const d={title:"Templates/pictureWordMatch1",argTypes:{option1:{control:"text"},option2:{control:"text"},option3:{control:"text"},option4:{control:"text"},option5:{control:"text"},img1:{control:"file"},img2:{control:"file"},img3:{control:"file"},img4:{control:"file"},img5:{control:"file"},answer1:{control:"text"},answer2:{control:"text"},answer3:{control:"text"},answer4:{control:"text"},answer5:{control:"text"},PracticeMode:{control:"boolean"}}},e={args:{option1:"boy",option2:"cat",option3:"bag",option4:"sun",option5:"dog",PracticeMode:!0,img1:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/palEgra-pictureWordMatch/CAT.png",img2:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/palEgra-pictureWordMatch/SUN.png ",img3:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/palEgra-pictureWordMatch/BAG.png",img4:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/palEgra-pictureWordMatch/BOY.png",img5:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/palEgra-pictureWordMatch/DOG.png",answer1:"cat",answer2:"sun",answer3:"bag",answer4:"boy",answer5:"dog"},render:t=>{const i=p(t);return s`<lido-home .xmlData="${i}"></lido-home>`}};function p(t){const{isAllowOnlyCorrect:i=!0}=t;return`<main>
   <lido-container  disable-speak="true"  visible="true" template-id="dragAndDrop" id="lido-container" objective="${t.answer1},${t.answer2},${t.answer3},${t.answer4},${t.answer5}" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/palEgra-pictureWordMatch/bgImg.png" onInCorrect="lido-avatar.avatarAnimate='Fail';this.sleep='2000';" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2300';" is-continue-on-correct="${t.PracticeMode}" is-allow-only-correct="${t.PracticeMode}" onEntry="">

        <!-- Chimple Avatar -->
        <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.344px,portrait.402px" width="landscape.296px,portrait.398px" x="landscape.84%, portrait.28%" y="landscape.61%, portrait.77%" aria-hidden="true" z="1" bg-color="transparent" visible="true" >
            <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
            </lido-avatar>
        </lido-cell>
        <lido-text visible="false" id="inst" tab-index="1" string="drag and drop the correct option to match the picture given"></lido-text>
<lido-cell visible="true" layout="col" height="85%" width="98%" bg-color="transparent" margin="61px 0px -58px 0px">

  <lido-cell layout="row" visible="true" height="270px" width="90%" bg-color="transparent">
    <lido-image visible="true" height="261px" width="260px" src="${t.img1}"></lido-image>
    <lido-image visible="true" height="261px" width="260px" src="${t.img2}"></lido-image>
    <lido-image visible="true" height="261px" width="260px" src="${t.img3}"></lido-image>
    <lido-image visible="true" height="261px" width="260px" src="${t.img4}"></lido-image>
    <lido-image visible="true" height="261px" width="260px" src="${t.img5}"></lido-image>
  </lido-cell>
  <lido-cell visible="true" layout="row" height="270px" width="90%" bg-color="transparent">
    <lido-text type="drop" value="${t.answer1}" tab-index="8" id="drop1" visible="true" height="122px" width="225px" onEntry="this.border-radius='16px';" ></lido-text>
    <lido-text type="drop" value="${t.answer2}" id="drop2" tab-index="9" visible="true" height="122px" width="225px" onEntry="this.border-radius='16px';"></lido-text>
    <lido-text type="drop" value="${t.answer3}" id="drop3" tab-index="10" visible="true" height="122px" width="225px" onEntry="this.border-radius='16px';"></lido-text>
    <lido-text type="drop" value="${t.answer4}" id="drop4" tab-index="11" visible="true" height="122px" width="225px" onEntry="this.border-radius='16px';"></lido-text>
    <lido-text type="drop" value="${t.answer5}" id="drop5" tab-index="12" visible="true" height="122px" width="225px" onEntry="this.border-radius='16px';"></lido-text>
  </lido-cell>
  <lido-cell visible="true" layout="row"  height="270px" width="81%" bg-color="transparent" onEntry="this.align-items='center';this.justify-content='space-around';this.position='relative';" x="-34px">
    <lido-text visible="true" height="122px" disable-speak="true" width="225px" type="drag" id="drag1" tab-index="2" string="${t.option1}" value="${t.option1}" font-family="'Baloo Bhai 2'" font-color="black" font-size="80px"  bg-color="#FFAC4C" onEntry="this.font-weight='700';this.border-radius='16px';" ></lido-text>
    <lido-text visible="true" height="122px" disable-speak="true" width="225px" type="drag" id="drag2" tab-index="3" string="${t.option2}" value="${t.option2}" font-family="'Baloo Bhai 2'" font-color="black" font-size="80px"  bg-color="#FFAC4C" onEntry="this.font-weight='700';this.border-radius='16px';" ></lido-text>
    <lido-text visible="true" height="122px" disable-speak="true" width="225px" type="drag" id="drag3" tab-index="4" string="${t.option3}" value="${t.option3}" font-family="'Baloo Bhai 2'" font-color="black" font-size="80px"  bg-color="#FFAC4C" onEntry="this.font-weight='700';this.border-radius='16px';" ></lido-text>
    <lido-text visible="true" height="122px" disable-speak="true" width="225px" type="drag" id="drag4" tab-index="5" string="${t.option4}" value="${t.option4}" font-family="'Baloo Bhai 2'" font-color="black" font-size="80px"  bg-color="#FFAC4C" onEntry="this.font-weight='700';this.border-radius='16px';" ></lido-text>
    <lido-text visible="true" height="122px" disable-speak="true" width="225px" type="drag" id="drag5" tab-index="6" string="${t.option5}" value="${t.option5}" font-family="'Baloo Bhai 2'" font-color="black" font-size="80px"  bg-color="#FFAC4C" onEntry="this.font-weight='700';this.border-radius='16px';" ></lido-text>
  </lido-cell>

</lido-cell>

    </lido-container>
  </main>`}var o,a,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    option1: "boy",
    option2: "cat",
    option3: "bag",
    option4: "sun",
    option5: "dog",
    PracticeMode: true,
    img1: "https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/palEgra-pictureWordMatch/CAT.png",
    img2: "https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/palEgra-pictureWordMatch/SUN.png ",
    img3: "https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/palEgra-pictureWordMatch/BAG.png",
    img4: "https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/palEgra-pictureWordMatch/BOY.png",
    img5: "https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/palEgra-pictureWordMatch/DOG.png",
    answer1: "cat",
    answer2: "sun",
    answer3: "bag",
    answer4: "boy",
    answer5: "dog"
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const c=["pictureWordMatch1"];export{c as __namedExportsOrder,d as default,e as pictureWordMatch1};
