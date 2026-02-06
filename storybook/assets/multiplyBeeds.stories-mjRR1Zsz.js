import"./lit-element-DRlmAcsz.js";import{b as d}from"./lit-html-s0HVm7S4.js";const x={title:"Templates/multiplyBeeds",argTypes:{number:{control:"text",name:"number1",description:"number. (E.g. 9)"},multiplicationFactor:{control:"text",name:"multiplication factor",description:"(E.g. 9)"},answer:{control:"text",name:"answer",description:"answer. (E.g. 81)"},isAllowOnlyCorrect:{control:"boolean",name:"isAllowOnlyCorrect"}},args:{number:"9",multiplicationFactor:"9",answer:"81",isAllowOnlyCorrect:!0}},a={render:t=>{const e=m(t);return d`<lido-home xml-data="${e}" xmlData="${e}"></lido-home>`}};function m(t){const e=t.number,p=t.multiplicationFactor,r=t.answer,c=t.isAllowOnlyCorrect??!0;let i="";for(let o=0;o<Number(p);o++)i+=e+"+";return i=i.slice(0,-1)+"=",`
        <main>
            <lido-container id="multiply-beads" disableSpeak="true" show-drop-border="false" equationCheck="$#mat1,==,$#answer-multiply-beeds" objective="" tab-index="1"  value="multiply-beads" bgImage="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/background-images/Multiply%20beads.png"  height="100%" width="100%" bgColor="transparent"  visible="true" onCorrect="answer-multiply-beeds.addText='${r}'; lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="this.justifyContent='space-around';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="true" is-allow-only-correct="${c}">

                <!-- Chimple Avatar -->
                <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos1" height="landscape.570px, portrait.700px" width="landscape.380px, portrait.485px" x="landscape.1045px, portrait.220px" y="landscape.525px, portrait.1075px" ariaHidden="true" bgColor="transparent" visible="true"  onEntry="this.flex-shrink='0'; this.z-index='0';">
                    <lido-avatar id="lido-avatar" disable-edit="true" visible="true"  height="inherit"  width="inherit" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" altText="{chimpleCharacterRive}" onEntry="">
                    </lido-avatar>
                </lido-cell>
                
                <!-- Question Start Section -->
                <lido-text visible="false" id="txt1" font-family="'Baloo 2', serif" font-size="52px" font-color="black" string="click the right slot of the beeds column and count the sum of all the beeds" onEntry="this.speak='true';" >
                </lido-text>

                <!-- Bottom display Section -->
                <lido-cell layout="pos" id="pos2"  value="pos2" height="auto" width="landscape.900px, portrait.100%" x="landscape.700px, portrait.0px" y="landscape.300px, portrait.1000px" ariaHidden="true" bgColor="transparent" visible="true" onEntry="this.flex-shrink='0'; this.animation='bottomToPlace 2s linear';">
                    <lido-text id="answer-multiply-beeds"  value="${r}" height="inherit" width="inherit" string="${i}" font-size="84px" font-weight="600" bgColor="#FFF4CD" visible="true" onEntry="this.word-wrap='break-word'; this.fontWeight='600'; this.textAlign='center';">
                    </lido-text>
                </lido-cell>

                <!-- Beeds Section -->
                <lido-cell layout="pos" id="pos3"  height="landscape.1100px, portrait.900px" width="landscape.600px,portrait.825px" x="landscape.40px, portrait.15px" y="landscape.-80px,portrait.45px" ariaHidden="true" z="0" bgColor="transparent" visible="true" onEntry="this.opacity='1';">
                    <lido-math-matrix id="mat1" visible="true" rows="9" cols="9" top-index="true" left-index="true" bottom-index="false" clickable="true" active-only-visible="false" active-bg-color="#C23E06" deactive-bg-color="#F57139" border="2px solid #F34D08" defualt-fill="0" matrix-image="">
                    </lido-math-matrix>
                </lido-cell>
            </lido-container>
        </main>
    `}var l,n,s;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (args: MultiplyBeedsArgs) => {
    const xml = getContainerXml(args);
    return html\`<lido-home xml-data="\${xml}" xmlData="\${xml}"></lido-home>\`;
  }
}`,...(s=(n=a.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const b=["MultiplyBeeds"];export{a as MultiplyBeeds,b as __namedExportsOrder,x as default};
