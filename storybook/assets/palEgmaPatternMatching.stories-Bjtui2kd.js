import"./lit-element-BxxbMms4.js";import{x as u}from"./lit-html-DLYuhZ0i.js";const g={title:"Templates/palEgmaPatternMatching",argTypes:{options:{control:"object"},answers:{control:"object"},PracticeMode:{control:"boolean"}}},a={args:{question_text:"Complete the pattern",questions:["975","976","@977","978","979"],options:["977","980","957","947"],PracticeMode:!1},render:e=>{const r=h(e);return u`<lido-home .xmlData="${r}"></lido-home>`}};function h(e){const r=e.questions.map((t,o)=>{const i=t==null?void 0:t.startsWith("@"),c=i?t.slice(1):t,d=i?"?":t,x=o<e.questions.length-1;return`
  <lido-text id="pattern${1+o}"
    visible="true"
    tab-index="${1+o}"
    value="${c}"
    string="${d}"
    font-family="'Baloo Bhai 2'"
    font-color="#07004E"
    font-size="landscape.130px, portrait.100px"
    bg-color=""
    onEntry="this.fontWeight='800';">
  </lido-text>

  ${x?`
    <lido-text onEntry="this.fontWeight='800';"
      visible="true"
      value=","
      string=","
      speak="false"
      font-family="'Baloo Bhai 2'"
      font-color="#07004E"
      font-size="landscape.130px, portrait.100px"
      bg-color="" >
    </lido-text>
  `:""}
`}).join(""),p=e.options.map((t,o)=>`
      <lido-cell layout="row" id="text${1+o}" visible="true" margin="" onEntry="this.border-radius='14px';" height="landscape.270px,portrait.244px" width="landscape.270px,portrait.244px" bg-color="orange"  type="click" value="${t}">
        <lido-text visible="true" value="${t}" string="${t}" disable-speak="true" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.130px, portrait.100px"  bg-color="orange" onEntry="this.fontWeight='800';">
        </lido-text>
      </lido-cell>
  `).join("");return`
<main>
<lido-container  visible="true" id="lido-container" template-id="mcq" onInCorrect="lido-avatar.avatarAnimate='Fail';this.sleep='2000';" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2300';" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/PAL-EGMA/Frame%2051.svg" objective="${(e.questions.find(t=>t.startsWith("@"))||"").slice(1)}" is-continue-on-correct="${e.PracticeMode}" is-allow-only-correct="${e.PracticeMode}" custom-style= "#text {
        box-shadow: none !important;
        }" onEntry="questionText.speak='true'; pattern1.speak='true'; pattern2.speak='true'; pattern3.speak='true'; pattern4.speak='true'; pattern5.speak='true'">
     <!-- Chimple Avatar -->
      <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.328px,portrait.378px" width="landscape.284px,portrait.382px" x="landscape.87%, portrait.30%" y="landscape.68%, portrait.78%" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="">
        <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
        </lido-avatar>
      </lido-cell>


    <lido-cell layout="landscape.col, portrait.col" visible="true" margin="landscape.30px 0px 0px 0px,portrait.-168px 0px 0px 0px" onEntry="this.border-radius='26px';" height="landscape.90%,portrait.42%" width="landscape.96%,portrait.100%" bg-color="transparent">
        <lido-cell layout="landscape.row, portrait.col" visible="true" margin="landscape.0px 0px 0px 0px,portrait.-168px 0px 0px 0px" onEntry="this.border-radius='26px';" height="landscape.140px,portrait.42%" width="landscape.80%,portrait.100%" bg-color=" transparent">
            <lido-text id="questionText" visible="true" tab-index="112" value="${e.questions[0]}" string="${e.question_text}" font-family="'Baloo Bhai 2'" font-color="#07004E" font-size="landscape.80px, portrait.100px"  bg-color="" onEntry="this.fontWeight='800'; this.fontWeight='800';">
                  </lido-text>
        </lido-cell>

        <!-- question cells -->
          <lido-cell layout="landscape.row, portrait.col" visible="true" margin="landscape.0px 0px 0px 0px,portrait.-168px 0px 0px 0px" onEntry="this.border-radius='26px'; this.border='5px solid #6D8600'" height="landscape.290px,portrait.42%" width="landscape.90%,portrait.100%" bg-color="#FFFFFF99">				
            ${r}
          </lido-cell>

        <!-- options cells -->
            <lido-cell layout="landscape.row, portrait.col" visible="true" margin="landscape.0px 38px 0px 0px,portrait.0" onEntry="this.border-radius='26px';" height="landscape.290px,portrait.35%" width="landscape.86%,portrait.100%" bg-color="transparent">
            ${p}
          </lido-cell>

          
    </lido-cell>

</lido-container>
</main>
`}var l,n,s;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    question_text: 'Complete the pattern',
    questions: ['975', '976', '@977', '978', '979'],
    options: ['977', '980', '957', '947'],
    PracticeMode: false
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(s=(n=a.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const v=["palEgmaPatternMatching"];export{v as __namedExportsOrder,g as default,a as palEgmaPatternMatching};
