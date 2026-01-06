import"./lit-element-BxxbMms4.js";import{x as m}from"./lit-html-DLYuhZ0i.js";const w={title:"Templates/palEgmaWordProblem",argTypes:{options:{control:"object"},answers:{control:"object"},PracticeMode:{control:"boolean"}}},i={args:{question2:"George went to a store and bought some t-shirts. He went to another store and bought 2 more t-shirts. He bought a total of 15 t-shirts. How many t-shirts did he buy at the first store?",answer:"13",options:["0","1","2","3","4","5","6","7","8","9"],PracticeMode:!1},render:t=>{const e=x(t);return m`<lido-home .xmlData="${e}"></lido-home>`}};function x(t){const e=t.options.map((o,r)=>`
      <lido-text id="drag${r}" disable-speak="true" tab-index="${11+r}" height="landscape.190px, portrait.125px" width="landscape.125px, portrait.90px" visible="true" value="${o}" string="${o}" font-family="'Baloo Bhai 2'" font-color="black" type="drag" font-size="104px"  bg-color="orange"  onEntry="this.fontWeight='800'; this.borderRadius='10px'; this.flex-shrink='0';" border-image="">
      </lido-text>
    `).join(`
`),a=t.answer.split("").map((o,r)=>`
       <lido-text id="drop${r}" disable-edit="true" height="landscape.190px, portrait.auto" width="125px" visible="true" value="${o}" string="?" font-family="'Baloo Bhai 2'" font-color="black" type="drop" font-size="landscape.130px, portrait.100px"  bg-color="white"  onEntry="this.fontWeight='800'; this.borderRadius='20px'; this.border='4px dashed #f34d08'" border-image="">
      </lido-text>
      `).join(`
`);return`
<main>

  <lido-container id="lido-container" objective="${t.answer.split("").join(",")}" tab-index="" template-id="dragAndDrop" show-drop-border="false" is-allow-only-correct="${t.PracticeMode}" value="mainContainer1" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/PAL-EGMA/new.svg" height="100%" width="100%" bg-color="transparent"  visible="true" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="question.speak='true'" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" drop-action="infinite-drop" show-check="false" custom-style= "#question11 {
        box-shadow: none !important;
        }">

            <!-- Chimple Avatar -->
        <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.344px,portrait.402px" width="landscape.296px,portrait.398px" x="landscape.82%, portrait.28%" y="landscape.36%, portrait.77%" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="">
          <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
          </lido-avatar>
        </lido-cell>

        <lido-cell id="question11" layout="row" visible="true" margin="44px 0px 0px 0px" height="landscape.330px,portrait.70%" 
            width="landscape.95%,portrait.96%" bg-color="transparent" onEntry="this.justifyContent='center';" onTouch="this.speak='true'">
                <lido-text id="question" tab-index="111" visible="true" value="${t.answer}" string="${t.question2}" font-family="'Baloo Bhai 2'" font-color="black" font-size="50px" bg-color="transparent" onEntry="this.fontWeight='600';">
                </lido-text>
        </lido-cell>

        <!-- answer drop cell -->
            <lido-cell layout="landscape.col, portrait.row" aria-hidden="true" visible="true" height="landscape.50%,portrait.150px" width="landscape.100%, portrait.80%" bg-Color="transparent" margin="landscape.0px,portrait.20px 0px 0px 0px" onEntry="this.z-index='1'; this.justify-content='flex-start'; this.alignItems='center'; this.gap='44px';">

                <lido-cell layout="landscape.row, portrait.row" aria-hidden="true" visible="true" height="landscape.200px,portrait.150px" width="landscape.60%, portrait.80%" bg-Color="transparent" margin="landscape.0px,portrait.20px 0px 0px 0px" onEntry="this.z-index='1'; this.justify-content='center'; this.alignItems='center'; this.gap='20px';">
                    ${a}
                </lido-cell>

            <!-- answers drag cell -->
                <lido-cell layout="landscape.wrap, portrait.wrap" aria-hidden="true" visible="true" height="landscape.20%,portrait.18%" width="95%" bg-Color="transparent" margin="landscape.0px,portrait.55px 0px 125px 0px" onEntry="this.z-index='1'; this.grid-template-columns='repeat(auto-fill, minmax(140px, auto))'; this.gridTemplateRows='repeat(auto-fit, 145px)'; this.flexWrap='wrap'; this.justify-content='center';" gap="5px">
                ${e}
                </lido-cell>
            </lido-cell>

          
  </lido-container>

</main>
`}const n={args:{question2:"George went to a store and bought some t-shirts. He went to another store and bought 2 more t-shirts. He bought a total of 15 t-shirts. How many t-shirts did he buy at the first store?",answer:"13",options:["10","15","12","13"],PracticeMode:!1},render:t=>{const e=b(t);return m`<lido-home .xmlData="${e}"></lido-home>`}};function b(t){const e=t.options.map((s,a)=>`
      <lido-text id="drag${a}" tab-index="${a+1}" disable-speak="true" height="landscape.270px, portrait.125px" width="landscape.270px, portrait.90px" visible="true" value="${s}" string="${s}" font-family="'Baloo Bhai 2'" font-color="black" type="click" font-size="104px"  bg-color="orange"  onEntry="this.fontWeight='800'; this.borderRadius='10px'; this.flex-shrink='0';" border-image="">
      </lido-text>
    `).join(`
`);return`
<main>

  <lido-container id="lido-container" objective="${t.answer}" tab-index="" template-id="mcq" show-drop-border="false" is-continue-on-correct="${t.PracticeMode}" is-allow-only-correct="${t.PracticeMode}" value="mainContainer1" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/PAL-EGMA/new.svg" height="100%" width="100%" bg-color="transparent"  visible="true" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="question.speak='true'" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" drop-action="infinite-drop" show-check="false" custom-style= "#question11 {
        box-shadow: none !important;
        }">

            <!-- Chimple Avatar -->
        <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.344px,portrait.402px" width="landscape.296px,portrait.398px" x="landscape.85%, portrait.28%" y="landscape.30%, portrait.77%" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="">
          <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
          </lido-avatar>
        </lido-cell>

        <lido-cell id="question11" layout="col" visible="true" margin="0px 0px 0px 0px" height="landscape.90%,portrait.70%" 
        width="landscape.98%,portrait.96%" bg-color="transparent" onEntry="this.justifyContent='center'; this.gap='100px'">
               <lido-cell id="question11" layout="row" visible="true" margin="44px 0px 0px 0px" height="landscape.330px,portrait.70%" 
                width="landscape.95%,portrait.96%" bg-color="transparent" onEntry="this.justifyContent='center';" onTouch="this.speak='true'">
                    <lido-text id="question" tab-index="111" visible="true" value="${t.answer}" string="${t.question2}" font-family="'Baloo Bhai 2'" font-color="black" font-size="50px" bg-color="transparent" onEntry="this.fontWeight='600';">
                    </lido-text>
                </lido-cell>

                <lido-cell layout="landscape.row, portrait.row" aria-hidden="true" visible="true" height="landscape.50%,portrait.150px" width="landscape.85%, portrait.80%" bg-Color="transparent" margin="landscape.0px,portrait.20px 0px 0px 0px" onEntry="this.z-index='1'; this.justify-content='center'; this.alignItems='center'; this.gap='44px';">

                <!-- answers option cell -->
                
                    ${e}
                
                </lido-cell>               
        </lido-cell>

          
  </lido-container>

</main>
`}var l,p,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    question2: 'George went to a store and bought some t-shirts. He went to another store and bought 2 more t-shirts. He bought a total of 15 t-shirts. How many t-shirts did he buy at the first store?',
    answer: '13',
    options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    PracticeMode: false
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(d=(p=i.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var c,h,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    question2: 'George went to a store and bought some t-shirts. He went to another store and bought 2 more t-shirts. He bought a total of 15 t-shirts. How many t-shirts did he buy at the first store?',
    answer: '13',
    options: ['10', '15', '12', '13'],
    PracticeMode: false
  },
  render: args => {
    const xml = getContainerXml1(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(u=(h=n.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const y=["palEgmaWordProblem1","palEgmaWordProblem2"];export{y as __namedExportsOrder,w as default,i as palEgmaWordProblem1,n as palEgmaWordProblem2};
