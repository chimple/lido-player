import"./lit-element-BxxbMms4.js";import{x as p}from"./lit-html-DLYuhZ0i.js";const d={title:"Templates/quizLiteracyImageWord",argTypes:{image:{control:"file"}}},i={args:{option1:"Elephant",option2:"Fish",option3:"Egg",option4:"Nest",answers:"Elephant",image:["https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/LetterPair/Cat.png"]},render:t=>{const e=n(t);return p`<lido-home .xmlData="${e}"></lido-home>`}};function n(t){let e=1;return`<main>
   <lido-container id="lido-container" value="maincontainer" visible="true" objective="${t.answers}"  bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/Underwater.png"  onEntry="" is-Continue-On-Correct="true" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';">
    <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos1" height="landscape.290px,portrait.476px" width="landscape.278px,portrait.467px" x="landscape.78%, portrait.24%" y="landscape.228px, portrait.66%" aria-hidden="true" z="2" bg-color="transparent" type="" visible="true" audio="" onTouch="" onCorrect="">
        <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/chimplecharacter.riv" alt-text="{chimpleCharacterRive}" bg-color="transparent">
        </lido-avatar>
        <lido-image id="image1" disable-edit="true" value="image1" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/Shadow.png" bg-color="transparent" width="landscape.165px,portrait.200px" height="landscape.30px,portrait.48px" x="landscape.54px,portrait.125px" y="landscape.239px,portrait.400px" alt-text="{shadowImgae}">
        </lido-image>
    </lido-cell>
    <lido-cell layout="col" visible="true" bg-Color="transparent" width="90%" height="68%">
        <lido-cell layout="flex" margin="landscape.0px,portrait.-215px 0px 0px 0px" visible="true" width="100%" height="300px" bg-Color="transparent"
  onEntry="this.align-items='center'; this.justify-content='center';">

        <lido-cell visible="true" height="400px" width="400px" value="${t.answers}" border-radius="7px"
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


        <lido-cell layout="flex" visible="true" margin="landscape.0px,portrait.-34px 0px 364px" width="landscape.67%,portrait.100%" height="216px" bg-Color="transparent" onEntry="this.align-items='center'; this.justify-content='center'; this.gap='40px';">
            
            <lido-text visible="true" audio="" show-speak-icon="true" id="drag${e}" tab-index="${e++}" font-size="80px" border-radius="12px" font-color="black" height="148px" width="auto" string="${t.option1}" value="${t.option1}" type="click" onEntry="this.font-weight='500';this.padding='0px 64px 0px 64px';">
            </lido-text>
             <lido-text visible="true" audio="" show-speak-icon="true" id="drag${e}" tab-index="${e++}" font-size="80px" border-radius="12px" font-color="black" height="148px" width="auto" string="${t.option2}" value="${t.option2}" type="click" onEntry="this.font-weight='500';this.padding='0px 64px 0px 64px';">
            </lido-text>
             <lido-text visible="true" audio="" show-speak-icon="true" id="drag${e}" tab-index="${e++}" font-size="80px" border-radius="12px" font-color="black" height="148px" width="auto" string="${t.option3}" value="${t.option3}" type="click" onEntry="this.font-weight='500';this.padding='0px 64px 0px 64px';">
            </lido-text>
             <lido-text visible="true" audio="" show-speak-icon="true" id="drag${e}" tab-index="${e++}" font-size="80px" border-radius="12px" font-color="black" height="148px" width="auto" string="${t.option4}" value="${t.option4}" type="click" onEntry="this.font-weight='500';this.padding='0px 64px 0px 64px';">
            </lido-text>
            
            
        </lido-cell>

    </lido-cell>
</lido-container>
  </main>`}var a,o,r;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    option1: "Elephant",
    option2: "Fish",
    option3: "Egg",
    option4: "Nest",
    answers: "Elephant",
    image: ['https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/LetterPair/Cat.png']
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(r=(o=i.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const c=["quizLiteracyImageWord"];export{c as __namedExportsOrder,d as default,i as quizLiteracyImageWord};
