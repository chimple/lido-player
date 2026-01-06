import"./lit-element-BxxbMms4.js";import{x as d}from"./lit-html-DLYuhZ0i.js";const b={title:"Templates/palEgraWordFormation",argTypes:{options:{control:"object"},PracticeMode:{control:"boolean"}}},o={args:{image:["https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/PAL-EGRA/madari.jpg"],options:["म","दा","री"],PracticeMode:!1},render:t=>{const i=c(t);return d`<lido-home .xmlData="${i}"></lido-home>`}};function c(t){const i=168*t.options.length+23*t.options.length,s=t.options.map((a,e)=>`
    <lido-text visible="true" id="drop${e+1}" tab-index="${12+e}" disable-speak="true" value="${a}" string="?" font-family="'Baloo Bhai 2'" width="160px" height="175px" is-allow-only-one-drop="true" font-color="#030028" font-size="landscape.140px, portrait.100px"  bg-color="#FFFFFF"  type="drop" onEntry="this.fontWeight='700'; this.border-radius='16px';">
    </lido-text>
  `).join(""),n=[...t.options].sort(()=>Math.random()-.5).map((a,e)=>`
      <lido-text visible="true" id="drag${e+1}" tab-index="${16+e}" value="${a}" string="${a}" disable-speak="true" font-family="'Baloo Bhai 2'" width="160px" height="175px" font-color="#030028" font-size="landscape.120px, portrait.100px"  bg-color="#A05730"  type="drag" onEntry="this.fontWeight='700'; this.border-radius='16px'; this.justifyContent='center'; this.alignItems='baseline';">
      </lido-text>
  `).join("");return`
<main>
<lido-container  visible="true" id="lido-container" template-id="dragAndDrop" onInCorrect="lido-avatar.avatarAnimate='Fail';this.sleep='2000';" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2300';" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/PAL-EGRA/palEgraTemp6_bg.png" objective="${t.options.join(",")}" is-continue-on-correct="${t.PracticeMode}" is-allow-only-correct="${t.PracticeMode}">
      <!-- Chimple Avatar -->
      <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.300px,portrait.378px" width="landscape.280px,portrait.382px"
       x="landscape.68%, portrait.30%" y="landscape.3%, portrait.78%" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="">
        <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
        </lido-avatar>
      </lido-cell>

        <lido-cell layout="landscape.row, portrait.row" aria-hidden="true" visible="true" height="landscape.100%,portrait.150px" width="landscape.100%, portrait.80%" bg-Color="transparent" margin="landscape.46px 0px 0px 0px,portrait.20px 0px 0px 0px" onEntry="this.z-index='1'; this.justify-content='space-between'; this.alignItems='center'; this.gap='73px';">
            <!-- image cell -->
          <lido-cell layout="landscape.row, portrait.col" tab-index="11" visible="true" margin="landscape.0px 0px 0px 0px,portrait.-168px 0px 0px 0px" onEntry="this.border='11px solid #FFFFFF'; this.justify-content='center'; this.align-items='center';" height="landscape.590px,portrait.42%" width="landscape.590px,portrait.100%" bg-color="#FFF5BB">				
            <lido-image type="text" margin="landscape.0px,portrait.0px 0px 0px 0px" id="" visible="true" src="${t.image}" width="100%" height="100%" onTouch="this.speak='true'">
                  </lido-image>  
          </lido-cell>

          
            <lido-cell layout="landscape.col, portrait.col" visible="true" margin="landscape.138px 51px 0px 0px,portrait.0" onEntry="this.border-radius='26px';" height="landscape.80%,portrait.35%" width="landscape.51%,portrait.100%" bg-color="transparent">
            <lido-text visible="false" id="inventedAudio" string="${t.options.join("")}" tab-index="2" font-size="80px" font-color="#07004E" border-radius="16px" bg-color="#FFF5BB" onEntry="this.fontWeight='700'; this.border='#FFB612 2px solid'; this.padding='25px 50px';"></lido-text>
            <lido-cell visible="true" id="audioCell" layout="row" width="160px" height="160px" onTouch="inventedAudio.speak='true';" bg-color="white" border-radius="70px" onEntry="this.border='#ffac4c 2px solid'; this.boxShadow='0px 8px 0px #f34d08;'" margin="-113px 289px 0px 0px">
              <lido-image visible="true" bg-color="transparent" width="100px" height="100px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Icons/palAudioIcon.png"></lido-image>
            </lido-cell>
                <!-- drop cells -->
                <lido-cell layout="landscape.row, portrait.col" visible="true" margin="landscape.0px,portrait.0" onEntry="this.border-radius='16px';" height="landscape.239px,portrait.35%" width="landscape.${i}px,portrait.100%" bg-color="#FFFFFF99" padding="0px 13px 0px 17px">
                  ${s}
                </lido-cell>

                  <!-- drag cells -->
                <lido-cell layout="landscape.row, portrait.col" visible="true" margin="landscape.0px,portrait.0" onEntry="this.border-radius='16px';" height="landscape.239px,portrait.35%" width="landscape.auto,portrait.100%" bg-color="transparent" padding="0px 13px 0px 17px" gap="23px">
                  ${n}
                </lido-cell>          
            </lido-cell>
        </lido-cell>
                  

</lido-container>
</main>
`}var r,p,l;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    image: ['https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/PAL-EGRA/madari.jpg'],
    options: ['म', 'दा', 'री'],
    PracticeMode: false
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(l=(p=o.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const u=["palEgraWordFormation"];export{u as __namedExportsOrder,b as default,o as palEgraWordFormation};
