import{x as r}from"./lit-html-DLYuhZ0i.js";const p={title:"Templates/StoryMaking",argTypes:{PracticeMode:{control:"boolean"},value1:{control:"text"},value2:{control:"text"},value3:{control:"text"},value4:{control:"text"}}},t={args:{PracticeMode:!1,value1:"A",value2:"D",value3:"E",value4:"B"},render:e=>{const o=s(e);return r`<lido-home .xmlData="${o}"></lido-home>`}};function s(e){return`<main>
    <lido-container is-continue-on-correct="true" template-id="dragAndDrop" is-allow-only-correct="true" objective="${e.value1},${e.value2},${e.value3},${e.value4}" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/palStory/bgImage.png">

    <!-- Chimple Avatar -->
    <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.300px,portrait.402px" width="landscape.250px,portrait.398px" x="landscape.68%, portrait.28%" y="landscape.600px, portrait.77%" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="">
        <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv">
        </lido-avatar>
        <lido-image id="image" disableEdit="true" value="image" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/Shadow.png" bgColor="transparent" width="150px" height="27px" x="45px" y="235px">
        </lido-image>
    </lido-cell>
    
    <lido-cell visible="true" layout="row" width="97%" height="87%" bg-color="transparent" margin="70px 0 0 0">
        <!-- Drop Elements -->
        <lido-cell visible="true" layout="col" width="53%" height="100%" padding="0" bg-color="transparent">
            <lido-cell visible="true" layout="row" width="100%" height="22%" bg-color="transparent">
                <lido-image visible="true" width="160px" height="160px" bg-color="white" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/picture_Clues/f1.png"></lido-image>
                <lido-text visible="true" value="${e.value1}" id="drop1" tab-index="1" disable-speak="true" type="drop" width="630px" height="100px" bg-color="white" border-radius="16px" onCorrect="lido-avatar.avatarAnimate='Success';"></lido-text>
            </lido-cell>
            <lido-cell visible="true" layout="row" width="100%" height="22%" bg-color="transparent">
                <lido-image visible="true" width="160px" height="160px" bg-color="white" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/picture_Clues/f1.png"></lido-image>
                <lido-text visible="true" value="${e.value2}" id="drop2" tab-index="2" disable-speak="true" type="drop" width="630px" height="100px" bg-color="white" border-radius="16px" onCorrect="lido-avatar.avatarAnimate='Success';"></lido-text>
            </lido-cell>
            <lido-cell visible="true" layout="row" width="100%" height="22%" bg-color="transparent">
                <lido-image visible="true" width="160px" height="160px" bg-color="white" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/picture_Clues/f1.png"></lido-image>
                <lido-text visible="true" value="${e.value3}" id="drop3" tab-index="3" disable-speak="true" type="drop" width="630px" height="100px" bg-color="white" border-radius="16px" onCorrect="lido-avatar.avatarAnimate='Success';"></lido-text>
            </lido-cell>
            <lido-cell visible="true" layout="row" width="100%" height="22%" bg-color="transparent">
                <lido-image visible="true" width="160px" height="160px" bg-color="white" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/picture_Clues/f1.png"></lido-image>
                <lido-text visible="true" value="${e.value4}" id="drop4" tab-index="4" disable-speak="true" type="drop" width="630px" height="100px" bg-color="white" border-radius="16px" onCorrect="lido-avatar.avatarAnimate='Success';"></lido-text>
            </lido-cell>
        </lido-cell>

        <!-- Drag Elements -->
        <lido-cell visible="true" layout="col" width="42%" height="100%" bg-color="transparent">
            <lido-cell visible="true" layout="col" width="100%" height="70%" bg-color="transparent">
                <lido-text visible="true" value="${e.value3}" disable-speak="true" type="drag" width="630px" height="100px" bg-color="#FFAC4C" font-size="50px" font-color="black" string="${e.value3}" border-radius="16px" onEntry="this.fontWeight='600';"></lido-text>
                <lido-text visible="true" value="${e.value1}" disable-speak="true" type="drag" width="630px" height="100px" bg-color="#FFAC4C" font-size="50px" font-color="black" string="${e.value1}" border-radius="16px" onEntry="this.fontWeight='600';"></lido-text>
                <lido-text visible="true" value="${e.value4}" disable-speak="true" type="drag" width="630px" height="100px" bg-color="#FFAC4C" font-size="50px" font-color="black" string="${e.value4}" border-radius="16px" onEntry="this.fontWeight='600';"></lido-text>
                <lido-text visible="true" value="${e.value2}" disable-speak="true" type="drag" width="630px" height="100px" bg-color="#FFAC4C" font-size="50px" font-color="black" string="${e.value2}" border-radius="16px" onEntry="this.fontWeight='600';"></lido-text>
            </lido-cell>
            <lido-cell visible="true" height="30%"></lido-cell>
        </lido-cell>
    </lido-cell>
</lido-container>
</main>`}var i,l,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    PracticeMode: false,
    value1: 'A',
    value2: 'D',
    value3: 'E',
    value4: 'B'
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(a=(l=t.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const c=["Default"];export{t as Default,c as __namedExportsOrder,p as default};
