import"./lit-element-BxxbMms4.js";import{x as p}from"./lit-html-DLYuhZ0i.js";const c={title:"Templates/quizLiteracyImageWithText",argTypes:{image:{control:"file"}}},e={args:{option1:"A black bear A black bear1.",option2:"A black bear A black bear2.",option3:"A black bear A black bear3.",option4:"A black bear A black bear4.",answer:"A black bear A black bear1.",image:["https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/LetterPair/Cat.png"]},render:t=>{const r=l(t);return p`<lido-home .xmlData="${r}"></lido-home>`}};function l(t){return`<main>
  <lido-container id="lido-container" value="maincontainer" visible="true" objective="${t.answer}"  bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/Underwater.png"  onEntry="" is-Continue-On-Correct="true" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';">
    <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos1" height="landscape.334px,portrait.401px" width="landscape.347px,portrait.401px" x="landscape.91%, portrait.24%" y="landscape.659px, portrait.73%" aria-hidden="true" z="2" bg-color="transparent" type="" visible="true" audio="" onTouch="" onCorrect="">
        <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/chimplecharacter.riv" alt-text="{chimpleCharacterRive}" bg-color="transparent">
        </lido-avatar>
        <lido-image id="image1" disable-edit="true" value="image1" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/Shadow.png" bg-color="transparent" width="165px" height="30px" x="landscape.54px,portrait.125px" y="landscape.239px,portrait.400px" alt-text="{shadowImgae}">
        </lido-image>
    </lido-cell>
    <lido-cell layout="landscape.row,portrait.col" visible="true" bg-Color="transparent" width="landscape.114%,portrait.90%" height="68%" margin="landscape.0px,portrait.-322px 0px 0px 0px">
        <lido-cell layout="flex" visible="true" width="100%" height="300px" bg-Color="transparent" onEntry="this.align-items='center'; this.justify-content='center';">
            <lido-cell visible="true" height="400px" width="400px" border-radius="7px"
          bg-color="white" margin="landscape.-70px 0px 0px 0px, portrait.0px 0px 0px 0px"
          onEntry="this.display='flex'; this.align-items='center'; this.justifyContent='center';">
            <lido-image visible="true"
            width="landscape.400px,portrait.400px"
            height="landscape.400px,portrait.400px"
            border-radius="7px" bg-color="white"
            src="${t.image}">
          </lido-image>
          </lido-cell>
        </lido-cell>
        <lido-cell layout="col" visible="true"  width="landscape.100%,portrait.108%" height="216px" bg-Color="transparent" margin="landscape.0px 160px 0px -299px,portrait.0px 0px 0px 0px" onEntry="this.align-items='center'; this.justify-content='center'; this.gap='40px';">
            <lido-text visible="true" audio="" show-speak-icon="true" id="option1" font-family="'Baloo Bhai 2'" tab-index="2" font-size="62px" border-radius="12px" font-color="black" height="120px" width="auto" string="${t.option1}" value="${t.option1}" type="click" onEntry="this.font-weight='500';this.padding='0px 64px 0px 64px';">
            </lido-text>
            <lido-text visible="true" audio="" show-speak-icon="true" id="option2" font-family="'Baloo Bhai 2'" tab-index="3" font-size="62px" border-radius="12px" font-color="black" height="120px" width="auto" string="${t.option2}" value="${t.option2}" type="click" onEntry="this.font-weight='500';this.padding='0px 64px 0px 64px';">
            </lido-text>
            <lido-text visible="true" audio="" show-speak-icon="true" id="option3" font-family="'Baloo Bhai 2'" tab-index="4" font-size="62px" border-radius="12px" font-color="black" height="120px" width="auto" string="${t.option3}" value="${t.option3}" type="click" onEntry="this.font-weight='500';this.padding='0px 64px 0px 64px';">
            </lido-text>
            <lido-text visible="true" audio="" show-speak-icon="true" id="option4" font-family="'Baloo Bhai 2'" tab-index="5" font-size="62px" border-radius="12px" font-color="black" height="120px" width="auto" string="${t.option4}" value="${t.option4}" type="click" onEntry="this.font-weight='500';this.padding='0px 64px 0px 64px';">
            </lido-text>
        </lido-cell>

    </lido-cell>
</lido-container>


  </main>`}var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    option1: "A black bear A black bear1.",
    option2: "A black bear A black bear2.",
    option3: "A black bear A black bear3.",
    option4: "A black bear A black bear4.",
    answer: "A black bear A black bear1.",
    image: ['https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/LetterPair/Cat.png']
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const d=["quizLiteracyImageWithText"];export{d as __namedExportsOrder,c as default,e as quizLiteracyImageWithText};
