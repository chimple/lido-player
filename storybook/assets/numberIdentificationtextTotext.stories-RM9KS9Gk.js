import"./lit-element-DRlmAcsz.js";import{b as n}from"./lit-html-s0HVm7S4.js";const c={title:"Templates/numberIdentificationtextTotext",argTypes:{option1:{control:"text"},option2:{control:"text"},option3:{control:"text"},option4:{control:"text"},question:{control:"text"},answer:{control:"text"},PracticeMode:{control:"boolean"}}},e={args:{PracticeMode:!1,option1:"333",option2:"256",option3:"777",option4:"234",question:"SEVEN HUNDRED AND SEVENTY SEVEN",answer:"777"},render:t=>{const r=l(t);return n`<lido-home .xmlData="${r}"></lido-home>`}};function l(t){return`<main>
 <lido-container disable-speak="true"  visible="true" id="lido-container" template-id="mcq" onInCorrect="lido-avatar.avatarAnimate='Fail';this.sleep='2000';" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2300';" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/pal_number_identification/bgImage.png" objective="${t.answer}"  is-continue-on-correct="${t.PracticeMode}" is-allow-only-correct="${t.PracticeMode}" onEntry="question.speak='true';text1.speak='true';text2.speak='true';text3.speak='true';text4.speak='true';">
     <!-- Chimple Avatar -->
    <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.344px,portrait.402px" width="landscape.296px,portrait.398px" x="landscape.83%, portrait.28%" y="landscape.64%, portrait.77%" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="">
        <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
        </lido-avatar>
    </lido-cell>
    
<!-- question text -->
        <lido-cell layout="row" visible="true"  margin="landscape.26px 0px 155px 0px, portrait.-170px 0px 0px 0px" height="290px" width="landscape.1476px,portrait.100%" bg-color="#FFF5BB" onEntry="this.justifyContent='center';this.border='2px solid #FFA500'; this.borderRadius='16px';">
            <lido-text id="question" tab-index="2" visible="true" value="10" string="${t.question}" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.80px, portrait.84px"  bg-color="transparent" 
            onEntry="this.fontWeight='700';">
            </lido-text>

            
        </lido-cell>

        <lido-cell layout="landscape.row, portrait.col" visible="true" margin="landscape.-65px 0px -101px -94px,portrait.0" onEntry="this.border-radius='26px';" height="landscape.390px,portrait.46%" width="landscape.76%,portrait.100%" bg-color="transparent">

        
                <lido-cell layout="row" visible="true" margin="" onEntry="this.border-radius='24px';" height="228px" width="landscape.280px,portrait.300px" bg-color="orange"  type="click" value="${t.option1}">
                    
                    <lido-text id="text1" tab-index="3" visible="true" disable-speak="true"  string="${t.option1}" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.140px, portrait.100px"  bg-color="orange" 
                    onEntry="this.fontWeight='700';">
                    </lido-text>
                </lido-cell>

                <lido-cell layout="row" visible="true" margin="" onEntry="this.border-radius='24px';" height="228px" width="landscape.280px,portrait.300px" bg-color="orange"  type="click" value="${t.option2}">
                    
                    <lido-text id="text2" tab-index="4"  disable-speak="true" visible="true"  string="${t.option2}" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.140px, portrait.100px"  bg-color="orange" 
                    onEntry="this.fontWeight='700';">
                    </lido-text>
                </lido-cell>
        
        
                <lido-cell layout="row" visible="true" margin="" onEntry="this.border-radius='24px';" height="228px" width="landscape.280px,portrait.300px" bg-color="orange"  type="click" value="${t.option3}">
                    
                    <lido-text id="text3" tab-index="5"  disable-speak="true" visible="true" string="${t.option3}" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.140px, portrait.100px"  bg-color="orange" 
                    onEntry="this.fontWeight='700';">
                    </lido-text>
                </lido-cell>

                <lido-cell layout="row" visible="true" margin="" onEntry="this.border-radius='24px';" height="228px" width="landscape.280px,portrait.300px" bg-color="orange"  type="click" value="${t.option4}">
                    
                    <lido-text id="text4" tab-index="6"  disable-speak="true" visible="true" string="${t.option4}" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.130px, portrait.100px"  bg-color="orange" 
                    onEntry="this.fontWeight='800';">
                    </lido-text>
                </lido-cell>	
        
    
    </lido-cell>

</lido-container>
  </main>`}var o,i,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    PracticeMode: false,
    option1: "333",
    option2: "256",
    option3: "777",
    option4: "234",
    question: "SEVEN HUNDRED AND SEVENTY SEVEN",
    answer: "777"
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const d=["numberIdentificationtextTotext"];export{d as __namedExportsOrder,c as default,e as numberIdentificationtextTotext};
