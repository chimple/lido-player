import"./lit-element-BxxbMms4.js";import{x as r}from"./lit-html-DLYuhZ0i.js";const d={title:"Templates/sentenceMatch",argTypes:{questionText:{control:"text"},option1:{control:"text"},option2:{control:"text"},option3:{control:"text"},option4:{control:"text"},answer:{control:"text"},PracticeMode:{control:"boolean"}}},e={args:{option1:"रमन के स्कूल में खेल दिवस है।",option2:"रमन के स्कूल में खेल दिवस हैं।",option3:"रमन की स्कूल में खेल दिवस है।",option4:"रमन के स्कूल खेल दिवस है।",answer:"रमन के स्कूल में खेल दिवस है।",questionText:"रमन के स्कूल में खेल दिवस है। रमन के स्कूल में खेल दिवस है। रमन के स्कूल में खेल दिवस है। रमन के स्कूल में खेल दिवस है। म दिवस है।",PracticeMode:!1},render:t=>{const i=p(t);return r`<lido-home .xmlData="${i}"></lido-home>`}};function p(t){const{isAllowOnlyCorrect:i=!0}=t;return`<main>
  <lido-container id="lido-container" value="maincontainer" visible="true" objective="${t.answer}"  bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/background-images/Quiz%20literacy.png"  onEntry="text1.speak='true';"  is-allow-only-correct="${t.PracticeMode}" is-Continue-On-Correct="${t.PracticeMode}" onInCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';">
    <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos1" height="landscape.375px,portrait.401px" width="landscape.338px,portrait.401px" x="landscape.1323px, portrait.24%" y="landscape.57%, portrait.83%" aria-hidden="true" z="2" bg-color="transparent" type="" visible="true" audio="" onTouch="" onCorrect="">
        <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/chimplecharacter.riv" alt-text="{chimpleCharacterRive}" bg-color="transparent">
        </lido-avatar>
        <lido-image id="image1" disable-edit="true" value="image1" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/Shadow.png" bg-color="transparent" width="203px" height="32px" x="landscape.74px,portrait.111px" y="landscape.309px,portrait.344px" alt-text="{shadowImgae}">
        </lido-image>
    </lido-cell>
  <lido-text visible="false" id="inst" string="choose the correct option"></lido-text>
    <lido-cell layout="col" visible="true" bg-Color="transparent" width="landscape.100%,portrait.90%" height="68%" margin="landscape.0px,portrait.-107px 0px 0px 0px">

    
          
            <lido-text id="text1" tab-index="1" disable-edit="true" margin="landscape.0px 0px 0px 0px,portrait.0px 0px 60px 0px" value="text1" visible="true" width="landscape.94%,portrait.90%" height="27%" bg-color="#FFF5BB" font-family="'Baloo 2', serif" font-size="60px" font-color="#000" string="${t.questionText}" y="-11%" onEntry="this.position='relative';this.fontWeight='500';this.padding='20px';this.border='2px solid #FFB612'; this.boxShadow='unset';this.border-radius='16px'; this.textAlign='start';">
            </lido-text>
          
    <lido-cell layout="col" visible="true"  width="landscape.53%,portrait.108%" height="216px" bg-Color="transparent" margin="landscape.0px 0px 0px 0px,portrait.0px 0px 0px 0px" y="21px" x="-88px" onEntry="this.align-items='center'; this.justify-content='center';this.position='relative'; this.gap='25px';">
            <lido-text visible="true" disable-speak="true" audio=""   id="option1" font-family="'Baloo Bhai 2'" tab-index="2" font-size="62px" border-radius="12px" font-color="black" height="113px" width="1244px" string="${t.option1}" value="${t.option1}" type="click" onEntry="this.font-weight='500';this.padding='0px 64px 0px 64px';">
            </lido-text>
            <lido-text visible="true" audio="" disable-speak="true"  id="option2"  font-family="'Baloo Bhai 2'" tab-index="3" font-size="62px" border-radius="12px" font-color="black" height="113px" width="1244px" string="${t.option2}" value="${t.option2}" type="click" onEntry="this.font-weight='500';this.padding='0px 64px 0px 64px';">
            </lido-text>
            <lido-text visible="true" audio="" disable-speak="true" id="option3" font-family="'Baloo Bhai 2'" tab-index="4" font-size="62px"  border-radius="12px" font-color="black" height="113px" width="1244px" string="${t.option3}" value="${t.option3}" type="click" onEntry="this.font-weight='500';this.padding='0px 64px 0px 64px';">
            </lido-text>
            <lido-text visible="true" audio="" disable-speak="true"  id="option4" font-family="'Baloo Bhai 2'" tab-index="5" font-size="62px" border-radius="12px" font-color="black" height="113px"  width="1244px" string="${t.option4}" value="${t.option4}" type="click" onEntry="this.font-weight='500';this.padding='0px 64px 0px 64px';">
            </lido-text>
        </lido-cell>
    </lido-cell>

</lido-container>
  </main>`}var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    option1: "रमन के स्कूल में खेल दिवस है।",
    option2: "रमन के स्कूल में खेल दिवस हैं।",
    option3: "रमन की स्कूल में खेल दिवस है।",
    option4: "रमन के स्कूल खेल दिवस है।",
    answer: "रमन के स्कूल में खेल दिवस है।",
    questionText: "रमन के स्कूल में खेल दिवस है। रमन के स्कूल में खेल दिवस है। रमन के स्कूल में खेल दिवस है। रमन के स्कूल में खेल दिवस है। म दिवस है।",
    PracticeMode: false
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const c=["sentenceMatch"];export{c as __namedExportsOrder,d as default,e as sentenceMatch};
