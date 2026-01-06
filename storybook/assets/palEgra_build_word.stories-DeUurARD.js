import"./lit-element-BxxbMms4.js";import{x as c}from"./lit-html-DLYuhZ0i.js";const g={title:"Templates/palEgraBuildWord",argTypes:{options:{control:"object"},PracticeMode:{control:"boolean"}}},r={args:{question_text:"Listen to the word and build it with the letters below",question_word:["dance"],PracticeMode:!1},render:t=>{const a=h(t);return c`<lido-home .xmlData="${a}"></lido-home>`}};function h(t){const a=t.question_word[0],i=[...a],n=i.map((o,e)=>`
    <lido-text visible="true" id="drop${e+1}" tab-index="${12+e}" value="${o}" string="?" disable-speak="true" font-family="'Baloo Bhai 2'" width="165px" height="182px" is-allow-only-one-drop="true" font-color="#030028" font-size="landscape.140px, portrait.100px"  bg-color="#FFFFFF"  type="drop" onEntry="this.fontWeight='700'; this.border-radius='16px';">
    </lido-text>
  `).join(""),d=[...i].sort(()=>Math.random()-.5).map((o,e)=>`
    <lido-text visible="true" id="drag${e+1}" tab-index="${16+e}" value="${o}" string="${o}" disable-speak="true" font-family="'Baloo Bhai 2'" width="173px" height="189px" font-color="#FFFFFF" font-size="landscape.140px, portrait.100px"  bg-color="#A05730"  type="drag" onEntry="this.fontWeight='700'; this.border-radius='16px'; this.justifyContent='center'; this.alignItems='center';">
    </lido-text>
  `).join("");return`
<main>
<lido-container  visible="true" id="lido-container" onEntry="lido-question.speak='true';" onInCorrect="lido-avatar.avatarAnimate='Fail';this.sleep='2000';" template-id="dragAndDrop" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2300';" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/PAL-EGRA/palEgraTemp6_bg.png" objective="${i}" is-continue-on-correct="${t.PracticeMode}" is-allow-only-correct="${t.PracticeMode}" custom-style= "#button {
        box-shadow: 0px 12.08px 0px rgb(159, 50, 5);
        }">
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
                    <lido-text id="button" layout="landscape.row, portrait.col" visible="true" margin="landscape.0px,portrait.0" onEntry="this.border-radius='16px';this.border='2px solid #FFB612';" height="landscape.147px,portrait.35%" width="landscape.140px,portrait.100%" bg-color="#f34d08" font-size="1px" onTouch="this.speak='true';" string="${a}">
                        <lido-image visible="true" bg-color="transparent" width="133px" height="140px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Navbar-buttons/audio.png"></lido-image>
                    </lido-text>
                
              <!-- drop cells -->
              <lido-cell layout="landscape.row, portrait.col" visible="true" margin="landscape.0px,portrait.0" onEntry="this.border-radius='16px'; this.justifyContent='space-around'" height="landscape.239px,portrait.35%" width="landscape.80%,portrait.100%" bg-color="#FFFFFF99" padding="0px 13px 0px 17px">
                ${n}
              </lido-cell>
            </lido-cell>


            <lido-cell layout="landscape.row, portrait.col" visible="true" margin="landscape.-46px 0px 0px 0px,portrait.0" onEntry="this.border-radius='16px';" height="landscape.239px,portrait.35%" width="landscape.auto,portrait.100%" bg-color="transparent" gap="23px">
                      ${d}
            </lido-cell>        
             
        </lido-cell>
</lido-container>
</main>
`}var s,l,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    question_text: 'Listen to the word and build it with the letters below',
    question_word: ['dance'],
    PracticeMode: false
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const m=["palEgraBuildWord"];export{m as __namedExportsOrder,g as default,r as palEgraBuildWord};
