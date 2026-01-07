import{x as l}from"./lit-html-DLYuhZ0i.js";const s={title:"Templates/LetterIdentification",argTypes:{PracticeMode:{control:"boolean"},template:{control:"select",options:["Template1","Template2"]},option1:{control:"text"},option2:{control:"text"},option3:{control:"text"},option4:{control:"text"},option5:{control:"text"},correctAns:{control:"text"}}},e={args:{PracticeMode:!1,template:["Template1"],option1:"A",option2:"D",option3:"E",option4:"B",option5:"C",correctAns:"A"},render:t=>{const r=n(t);return l`<lido-home .xmlData="${r}"></lido-home>`}};function n(t){return`<main>
    <lido-container disable-speak="true" objective="${t.correctAns}" template-id="mcq" is-continue-on-correct="${t.PracticeMode}" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/background-images/Write%20Set.png" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onInCorrect="lido-avatar.avatarAnimate='Fail';" onEntry="questionText.speak='true';" custom-style = "#audioCell:active {
  box-shadow: 0px 0px 0px !important;
  transform: translateY(10px);
} ">
    <lido-col visible="true" width="100%" height="80%" bg-color="transparent">
        
        <!-- Chimple Avatar -->
        <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.400px,portrait.402px" width="landscape.350px,portrait.398px" x="landscape.60%, portrait.28%" y="landscape.50px, portrait.77%" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="">
          <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv">
          </lido-avatar>
          <lido-image id="image" disableEdit="true" value="image" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/Shadow.png" bgColor="transparent" width="inherit" height="27px" x="0" y="330px">
          </lido-image>
        </lido-cell>

        <lido-text visible="${t.template==="Template1"}" id="questionText" width="405px" height="250px" tab-index="1"  bg-color="#fff5bb" string="${t.correctAns.toLowerCase()}" font-size="120px" border-radius="20px" font-color="black" onEntry="this.fontWeight='700'; this.border='#ffac4c 2px solid'; "></lido-text>
        
        <lido-cell visible="${t.template!=="Template1"}" id="audioCell" onTouch="questionText.speak='true';" layout="row" width="300px" height="300px" bg-color="white" border-radius="130px" onEntry="this.border='#ffac4c 2px solid'; this.boxShadow='0px 10.88px 0px #f34d08;';">
            <lido-image visible="true" bg-color="transparent" width="200px" height="200px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Icons/palAudioIcon.png"></lido-image>
        </lido-cell>

        <lido-cell layout="col" visible="true" width="90%" height="50%" bg-color="transparent" padding="0">
            <lido-cell layout="row" visible="true" width="70%" height="50%" bg-color="transparent">
                <lido-text visible="true" disable-speak="true" width="400px" height="136px" type="click" value="${t.option1}" string="${t.option1}" font-size="110px" border-radius="20px" font-color="black" onEntry="this.fontWeight='700';"></lido-text>
                <lido-text visible="true" disable-speak="true" width="400px" height="136px" type="click" value="${t.option2}" string="${t.option2}" font-size="110px" border-radius="20px" font-color="black" onEntry="this.fontWeight='700';"></lido-text>
            </lido-cell>
            <lido-cell layout="row" visible="true" width="100%" height="50%" bg-color="transparent">
                <lido-text visible="true" disable-speak="true" width="400px" height="136px" type="click" value="${t.option3}" string="${t.option3}" font-size="110px" border-radius="20px" font-color="black" onEntry="this.fontWeight='700';"></lido-text>
                <lido-text visible="true" disable-speak="true" width="400px" height="136px" type="click" value="${t.option4}" string="${t.option4}" font-size="110px" border-radius="20px" font-color="black" onEntry="this.fontWeight='700';"></lido-text>
                <lido-text visible="true" disable-speak="true" width="400px" height="136px" type="click" value="${t.option5}" string="${t.option5}" font-size="110px" border-radius="20px" font-color="black" onEntry="this.fontWeight='700';"></lido-text>
            </lido-cell>
        </lido-cell>
    </lido-col>
</lido-container>
</main>`}var o,i,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    PracticeMode: false,
    template: ['Template1'],
    option1: 'A',
    option2: 'D',
    option3: 'E',
    option4: 'B',
    option5: 'C',
    correctAns: 'A'
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const c=["Default"];export{e as Default,c as __namedExportsOrder,s as default};
