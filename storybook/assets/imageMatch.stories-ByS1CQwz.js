import"./lit-element-DRlmAcsz.js";import{b as n}from"./lit-html-s0HVm7S4.js";const d={title:"Templates/imageMatch",argTypes:{questionText:{control:"text"},option1:{control:"text"},option2:{control:"text"},option3:{control:"text"},option4:{control:"text"},answer:{control:"text"},image:{control:"file"},PracticeMode:{control:"boolean"}}},e={args:{PracticeMode:!1,option1:"रमन के स्कूल में खेल दिवस है।",option2:"रमन के स्कूल में खेल दिवस हैं।",option3:"रमन की स्कूल में खेल दिवस है।",option4:"रमन के स्कूल खेल दिवस है।",answer:"रमन के स्कूल में खेल दिवस है।",questionText:"रमन के स्कूल में खेल दिवस है। रमन के स्कूल में खेल दिवस है।",image:["https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/palStory/f2.png"]},render:t=>{const i=p(t);return n`<lido-home .xmlData="${i}"></lido-home>`}};function p(t){const{isAllowOnlyCorrect:i=!0}=t;return`<main>
  <lido-container disable-speak="true" id="lido-container" value="maincontainer" visible="true" objective="${t.answer}"  bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/background-images/Quiz%20literacy.png"  onEntry="text1.speak='true';" is-allow-only-correct="${t.PracticeMode}" is-Continue-On-Correct="${t.PracticeMode}" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';">
    <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos1" height="landscape.345px,portrait.401px" width="landscape.308px,portrait.401px" x="landscape.24%, portrait.24%" y="landscape.60%, portrait.83%" aria-hidden="true" z="2" bg-color="transparent" type="" visible="true" audio="" onTouch="" onCorrect="">
        <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/chimplecharacter.riv" alt-text="{chimpleCharacterRive}" bg-color="transparent">
        </lido-avatar>
        <lido-image id="image1" disable-edit="true" value="image1" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/Shadow.png" bg-color="transparent" width="203px" height="32px" x="landscape.57px,portrait.111px" y="landscape.285px,portrait.344px" alt-text="{shadowImgae}">
        </lido-image>
    </lido-cell>
  <lido-text visible="false" id="inst" string="choose the correct option"></lido-text>
    <lido-cell layout="col" visible="true" bg-Color="transparent" width="landscape.100%,portrait.90%" height="68%" margin="landscape.0px,portrait.-107px 0px 0px 0px">

    
          
            <lido-text id="text1" tab-index="1" disable-edit="true" margin="landscape.0px 0px 0px 0px,portrait.0px 0px 60px 0px" value="text1" visible="true" width="landscape.92%,portrait.90%" height="18%" bg-color="#FFF5BB" font-family="'Baloo 2', serif" font-size="60px" font-color="#000" string="${t.questionText}" y="-7%" onEntry="this.position='relative';this.fontWeight='500';this.padding='0px';this.border='2px solid #FFB612'; this.boxShadow='unset';this.border-radius='16px'; this.textAlign='start'; ">
            </lido-text>
          
   <lido-cell layout="landscape.row,portrait.col" visible="true" bg-Color="transparent" width="landscape.109%,portrait.90%" height="68%" margin="landscape.40px 0px -31px 0px,portrait.-107px 0px 0px 0px">
        
            <lido-cell visible="true" height="landscape.400px,portrait.62%" width="landscape.400px,portrait.681px" border-radius="7px"
          bg-color="white" margin="landscape.0px 0px 0px 0px, portrait.-149px 0px 25px 0px"
          onEntry="this.display='flex'; this.align-items='center'; this.justifyContent='center';">
            <lido-image visible="true"
            width="landscape.400px,portrait.100%"
            height="landscape.400px,portrait.100%"
            border-radius="7px" bg-color="white"
            src="${t.image}">
          </lido-image>
          </lido-cell>
        
        <lido-cell layout="col" visible="true"  width="landscape.53%,portrait.108%" height="216px" bg-Color="transparent" margin="landscape.0px 0px 0px 0px,portrait.0px 0px 0px 0px" onEntry="this.align-items='center'; this.justify-content='center'; this.gap='24px';">
            <lido-text visible="true" disable-speak="true" audio="" onCorrect="" onInCorrect=""  id="option1" font-family="'Baloo Bhai 2'" tab-index="2" font-size="54px" border-radius="12px" font-color="black" height="120px" width="873px" string="${t.option1}" value="${t.option1}" type="click" onEntry="this.font-weight='500';this.padding='12px 19px';this.line-height='1';">
            </lido-text>
            <lido-text visible="true" audio="" disable-speak="true"  id="option2" onCorrect="" onInCorrect="" font-family="'Baloo Bhai 2'" tab-index="3" font-size="54px" border-radius="12px" font-color="black" height="120px" width="873px" string="${t.option2}" value="${t.option2}" type="click" onEntry="this.font-weight='500';this.padding='12px 19px';this.line-height='1';">
            </lido-text>
            <lido-text visible="true" audio="" disable-speak="true"  id="option3" font-family="'Baloo Bhai 2'" tab-index="4" font-size="54px" onCorrect="" onInCorrect="" border-radius="12px" font-color="black" height="120px" width="873px" string="${t.option3}" value="${t.option3}" type="click" onEntry="this.font-weight='500';this.padding='12px 19px'; this.line-height='1';">
            </lido-text>
            <lido-text visible="true" audio="" disable-speak="true"  id="option4" font-family="'Baloo Bhai 2'" tab-index="5" font-size="54px" border-radius="12px" font-color="black" height="120px" onCorrect="" onInCorrect="" width="873px" string="${t.option4}" value="${t.option4}" type="click" onEntry="this.font-weight='500';this.padding='12px 19px';this.line-height='1';">
            </lido-text>
        </lido-cell>

    </lido-cell>
    </lido-cell>

</lido-container>
  </main>`}var o,a,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    PracticeMode: false,
    option1: "रमन के स्कूल में खेल दिवस है।",
    option2: "रमन के स्कूल में खेल दिवस हैं।",
    option3: "रमन की स्कूल में खेल दिवस है।",
    option4: "रमन के स्कूल खेल दिवस है।",
    answer: "रमन के स्कूल में खेल दिवस है।",
    questionText: "रमन के स्कूल में खेल दिवस है। रमन के स्कूल में खेल दिवस है।",
    image: ['https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/palStory/f2.png']
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const c=["imageMatch"];export{c as __namedExportsOrder,d as default,e as imageMatch};
