import"./lit-element-BxxbMms4.js";import{x as g}from"./lit-html-DLYuhZ0i.js";const v={title:"Templates/palEgmaCalculateSum",argTypes:{number1:{control:"text",name:"Number 1"},number2:{control:"text",name:"Number 2"},options:{control:"object",name:"options"},sign:{control:"text",name:"sign",defaultValue:"+"},isAllowOnlyCorrect:{control:"boolean",name:"isAllowOnlyCorrect"}},args:{number1:"3",number2:"2",sign:"+",options:["1","7","5","9"],isAllowOnlyCorrect:!0}},a={render:e=>{const i=m(e);return g`<lido-home xml-data="${i}" xmlData="${i}"></lido-home>`}};function m(e){const i=e.number1,o=e.number2,d=e.options,l=e.sign??"+",n=e.isAllowOnlyCorrect??!0,h=String(Number(i)+Number(o)),u=Array.from({length:Number(i)},(t,r)=>r+1).map((t,r)=>`
        <lido-image id="image1-${t}" height="landscape.140px, portrait.125px" width="60px" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/PAL-EGMA/Kulfi.png" bg-color="transparent" border-image="">
        </lido-image>
      `).join(`
`),x=Array.from({length:Number(o)},(t,r)=>r+1).map((t,r)=>`
        <lido-image id="image2-${t}" height="landscape.140px, portrait.125px" width="60px" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/PAL-EGMA/Kulfi.png" bg-color="transparent" border-image="">
        </lido-image>
      `).join(`
`),b=d.map((t,r)=>`
      <lido-text id="click-${t}" disable-speak="true" tab-index="${50+r}" height="landscape.212px, portrait.125px" width="landscape.270px, portrait.90px" visible="true" value="${t}" string="${t}" font-family="'Baloo Bhai 2'" font-color="black" type="click" font-size="104px"  bg-color="#FFAC4C"  onEntry="this.fontWeight='800'; this.borderRadius='24px'; this.flex-shrink='0';" border-image="" onCorrect="" onInCorrect="" >
      </lido-text>
    `).join(`
`);return`
    <main>
    
        <lido-container disable-speak="true" id="lido-container" objective="${h}" tab-index="1" show-drop-border="false" is-continue-on-correct="${n}"  is-allow-only-correct="${n}" value="mainContainer1" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/PAL-EGMA/pal_egma_temp_3.png" height="100%" width="100%" bg-color="transparent"  visible="true" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="this.justifyContent='space-around'; invisibleText.speak='true';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" drop-action="infinite-drop" show-check="false">

            <!-- Chimple Avatar -->
            <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos1" height="landscape.600px, portrait.700px" width="landscape.393px, portrait.485px" x="landscape.1310px, portrait.450px" y="landscape.418px, portrait.1020px" aria-hidden="true" z="1" bg-color="transparent" visible="true"  onEntry="this.flex-shrink='0';">
                <lido-avatar id="lido-avatar" disable-edit="true" visible="true"  height="inherit"  width="inherit" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" altText="{chimpleCharacterRive}" onEntry="">
                </lido-avatar>
                <lido-image id="image" disable-edit="true" value="image" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/Shadow.png" bg-color="transparent" width="inherit" height="27px" x="landscape.-7px, portrait.-7px" y="landscape.450px, portrait.540px" altText="{shadowImage}">
                </lido-image>
            </lido-cell>

            <lido-text id="invisibleText" tab-index="2" audio="" width="297px" height="80px" display="flex" font-size="12px" z="1" font-color="black" value="solve the equation and click the correct answer" string="solve the equation and click the correct answer" visible="false" bg-color="transparent" onEntry="">
            </lido-text> 


            <!-- question row-->
            <lido-cell layout="row" id="question-row" aria-hidden="true" visible="true" height="landscape.15%,portrait.15%" width="landscape.65%, portrait.90%" bg-Color="transparent" margin="landscape.215px 0px 30px 0px,portrait.25px 0px -120px 0px" onEntry="this.z-index='1'; this.justify-content='center';" gap="landscape.35px,portrait.40px">
                <lido-cell layout="col" is-slice="true" visible="true" height="landscape.245px,portrait.41%" width="auto" bg-Color="#FFF5BB" onEntry="this.z-index='1'; this.borderRadius='16px';" onCorrect="">
                  <lido-cell layout="row" is-slice="true" visible="true" height="landscape.15%,portrait.41%" width="auto" bg-Color="transparent" onEntry="this.z-index='1';" onCorrect="">
                    ${u}
                  </lido-cell>
                  <lido-cell layout="row" is-slice="true" visible="true" height="landscape.5%,portrait.41%" width="inherit" bg-Color="transparent" onEntry="this.z-index='1';" onCorrect="">
                    <lido-text id="num-1" is-slice="true"  disable-edit="true" height="landscape.156px, portrait.125px" width="inherit" visible="true" value="${i}" string="${i}" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.90px, portrait.100px"  bg-color="transparent"  onEntry="this.fontWeight='700'; this.borderRadius='16px';" border-image="">
                    </lido-text>
                  </lido-cell>
                </lido-cell>
                <lido-text id="operator"  height="295px" width="120px" visible="true"  value="${l}" string="${l}" font-family="'Baloo Bhai 2'" font-color="black" font-size="140px"  bg-color="transparent" onInCorrect="" onEntry="this.font-weight='700'; this.borderRadius='10px'; this.flex-flow='column-reverse'; this.opacity='1';" border-image="">
                </lido-text>
                <lido-cell layout="col" is-slice="true" visible="true" height="landscape.245px,portrait.41%" width="auto" bg-Color="#FFF5BB" onEntry="this.z-index='1'; this.borderRadius='16px';" onCorrect="">
                  <lido-cell layout="row" is-slice="true" visible="true" height="landscape.15%,portrait.41%" width="auto" bg-Color="transparent" onEntry="this.z-index='1';" onCorrect="">
                    ${x}
                  </lido-cell>
                  <lido-cell layout="row" is-slice="true" visible="true" height="landscape.5%,portrait.41%" width="inherit" bg-Color="transparent" onEntry="this.z-index='1';" onCorrect="">
                    <lido-text id="num-2" is-slice="true"  disable-edit="true" height="landscape.156px, portrait.125px" width="inherit" visible="true" value="${o}" string="${o}" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.90px, portrait.100px"  bg-color="transparent"  onEntry="this.fontWeight='700'; this.borderRadius='16px';" border-image="">
                    </lido-text>
                  </lido-cell>
                </lido-cell>
                <lido-text id="equal"  height="215px" width="120px" visible="true"  value="=" string="=" font-family="'Baloo Bhai 2'" font-color="black" font-size="140px"  bg-color="transparent" onInCorrect="" onEntry="this.font-weight='700'; this.borderRadius='10px'; this.flex-flow='column-reverse'; this.opacity='1';" border-image="">
                </lido-text>
                <lido-text id="drop-answer" disable-edit="true" height="landscape.287px, portrait.125px" width="208px" visible="true" value="5" string="?" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.140px, portrait.100px"  bg-color="transparent"  onEntry="this.fontWeight='700'; this.borderRadius='16px';" border-image="">
                </lido-text>
            </lido-cell>


            <!-- answers click cell -->
            <!-- option row-->
            <lido-cell layout="landscape.row, portrait.wrap" id="option-row" aria-hidden="true" visible="true" height="landscape.15%,portrait.5%" width="landscape.90%, portrait.106%" bg-Color="transparent" margin="landscape.65px 0px 65px 0px,portrait.-160px -65px 500px 0px" onEntry="this.z-index='1'; this.justify-content='center'; this.opacity='1';" gap="landscape.20px,portrait.5px">
                ${b}
            </lido-cell>
        </lido-container>

    </main>
  `}var s,p,c;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: (args: PalEgma2Args) => {
    const xml = getContainerXml(args);
    return html\`<lido-home xml-data="\${xml}" xmlData="\${xml}"></lido-home>\`;
  }
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const w=["PalEgmaMultiOption"];export{a as PalEgmaMultiOption,w as __namedExportsOrder,v as default};
