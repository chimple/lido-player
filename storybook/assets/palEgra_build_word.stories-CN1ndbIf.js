import"./lit-element-BxxbMms4.js";import{x as c}from"./lit-html-DLYuhZ0i.js";const g={title:"Templates/palEgraBuildWord",argTypes:{options:{control:"object"},PracticeMode:{control:"boolean"}}},a={args:{question_text:"Listen to the word and build it with the letters below",question_word:["dance"],PracticeMode:!1},render:t=>{const o=h(t);return c`<lido-home .xmlData="${o}"></lido-home>`}};function h(t){const o=t.question_word[0],r=[...o],p=r.map((i,e)=>`
    <lido-text visible="true" id="drop${e+1}" tab-index="${12+e}" value="${i}" string="?" disable-speak="true" font-family="'Baloo Bhai 2'" width="173px" height="189px" is-allow-only-one-drop="true" font-color="#030028" font-size="landscape.140px, portrait.100px"  bg-color="#FFFFFF"  type="drop" onEntry="this.fontWeight='700'; this.border-radius='16px';">
    </lido-text>
  `).join(""),d=[...r].sort(()=>Math.random()-.5).map((i,e)=>`
    <lido-text visible="true" id="drag${e+1}" tab-index="${16+e}" value="${i}" string="${i}" disable-speak="true" font-family="'Baloo Bhai 2'" width="173px" height="189px" font-color="#FFFFFF" font-size="landscape.140px, portrait.100px"  bg-color="#A05730"  type="drag" onEntry="this.fontWeight='700'; this.border-radius='16px'; this.justifyContent='center'; this.alignItems='center';">
    </lido-text>
  `).join("");return`
<main>
<lido-container disable-speak="true"  visible="true" id="lido-container" onEntry="lido-question.speak='true';" onInCorrect="lido-avatar.avatarAnimate='Fail';this.sleep='2000';" template-id="dragAndDrop" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2300';" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/PAL-EGRA/palEgraTemp6_bg.png" objective="${r}" is-continue-on-correct="${t.PracticeMode}" is-allow-only-correct="${t.PracticeMode}" >
       <!-- Chimple Avatar -->
      <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.330px,portrait.378px" width="landscape.300px,portrait.382px"
       x="landscape.82%, portrait.30%" y="landscape.32%, portrait.78%" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="">
        <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
        </lido-avatar>
        <lido-image id="image" disableEdit="true" value="image" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/Shadow.png" bgColor="transparent" width="inherit" height="20px" x="landscape.-1px, portrait.-7px" y="landscape.280px, portrait.535px" altText="{shadowImage}"></lido-image>
      </lido-cell>

        <lido-cell layout="landscape.col, portrait.row" aria-hidden="true" visible="true" height="landscape.82%,portrait.150px" width="landscape.98%, portrait.80%" bg-Color="transparent" margin="landscape.94px 0px 0px 0px,portrait.20px 0px 0px 0px" onEntry="this.z-index='1'; this.justify-content='center'; this.alignItems='center'; this.gap='73px';">
            <!-- question cell -->				
            <lido-text tab-index="111" visible="true" id="lido-question" width="landscape.93%, portrait.80%" height="60px" bg-color="#FFF5BB" string="${t.question_text}" border-radius="16px" onEntry="this.border='2px solid #FFB612'; this.fontWeight='700'; this.padding='50px';" font-size="60px" font-color="#07004E" font-family="'Baloo Bhai 2'">
            </lido-text>
          

          <!-- options cells -->
            <lido-cell layout="landscape.row, portrait.col" visible="true" margin="landscape.-18px 91px 31px -100px,portrait.0" onEntry="this.border-radius='26px';" height="landscape.auto,portrait.35%" width="landscape.80%,portrait.100%" bg-color="transparent">
                    <lido-text visible="false" id="inventedAudio" string="${o}" tab-index="2" font-size="80px" font-color="#07004E" border-radius="16px" bg-color="#FFF5BB" onEntry="this.fontWeight='700'; this.border='#FFB612 2px solid'; this.padding='25px 50px';"></lido-text>
          <lido-cell visible="true" id="audioCell" layout="row" width="160px" height="160px" onTouch="inventedAudio.speak='true';" bg-color="white" border-radius="70px" onEntry="this.border='#ffac4c 2px solid'; this.boxShadow='0px 8px 0px #f34d08;'">
            <lido-image visible="true" bg-color="transparent" width="100px" height="100px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Icons/palAudioIcon.png"></lido-image>
          </lido-cell>
                
              <!-- drop cells -->
              <lido-cell layout="landscape.row, portrait.col" visible="true" margin="landscape.0px,portrait.0" onEntry="this.border-radius='16px'; this.justifyContent='space-around'" height="landscape.239px,portrait.35%" width="landscape.80%,portrait.100%" bg-color="#FFFFFF99" padding="0px 13px 0px 17px">
                ${p}
              </lido-cell>
            </lido-cell>


            <lido-cell layout="landscape.row, portrait.col" visible="true" margin="landscape.-46px 0px 0px 0px,portrait.0" onEntry="this.border-radius='16px';" height="landscape.239px,portrait.35%" width="landscape.auto,portrait.100%" bg-color="transparent" gap="23px">
                      ${d}
            </lido-cell>        
             
        </lido-cell>
</lido-container>
</main>
`}var l,s,n;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    question_text: 'Listen to the word and build it with the letters below',
    question_word: ['dance'],
    PracticeMode: false
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(n=(s=a.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const m=["palEgraBuildWord"];export{m as __namedExportsOrder,g as default,a as palEgraBuildWord};
