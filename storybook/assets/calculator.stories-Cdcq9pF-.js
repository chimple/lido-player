import"./lit-element-DRlmAcsz.js";import{b as a}from"./lit-html-s0HVm7S4.js";const p={title:"Templates/calculator",argTypes:{number1:{control:"text"},number2:{control:"text"},symbol:{control:"text"},isContinueOnCorrect:{control:"boolean"},isAllowOnlyCorrect:{control:"boolean"}}},e={args:{number1:"10",number2:"5",symbol:"+",isContinueOnCorrect:!0,isAllowOnlyCorrect:!0},render:t=>{const l=n(t);return a`<lido-home .xmlData="${l}"></lido-home>`}};function n(t){return`
   <main>
    <lido-container visible="true" id="lido-container" objective="" equationCheck="$#numb1,$#symbol,$#numb2" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/background-images/Calculator.png" onInCorrect="lido-avatar.avatarAnimate='Fail';" is-allow-only-correct="${t.isAllowOnlyCorrect}" onCorrect="lido-avatar.avatarAnimate='Success';answer.updateCalculatorAnswer='true';this.sleep='2500';" is-continue-on-correct="${t.isContinueOnCorrect}" >
        <lido-text visible="true" z="1" height="100px" width="400px" y="landscape.8%,portrait.-17%" x="landscape.-21%,portrait.0px" font-size="56px" font-color="white" onEntry="this.position='relative';this.font-weight='600';"  string="WRITE HERE"></lido-text>
        <lido-cell layout="col" visible="true" height="10px" width="254px" bg-color="transparent" z="1" y="landscape.18%,portrait.-15%" x="landscape.-12%,portrait.19%" onEntry="this.align-items='center'; this.jsutifyContent='space-around'; this.position='relative';">
            <lido-text visible="true" height="100px" width="400px" id="numb1" tab-index="1" font-size="106px" font-color="black" value="${t.number1}" string="${t.number1}" y="" z="1" x="" onEntry="this.position='relative';this.font-weight='900';"></lido-text>
            <lido-cell layout="row" visible="true" height="100px" width="243px" bg-color="transparent" onEntry="this.position='relative';" x="-61px">
                <lido-text visible="true" height="100px" width="400px" id="symbol" tab-index="2" font-size="106px" font-color="black" value="${t.symbol}" string="${t.symbol}" y="" z="1" x=""  onEntry="this.position='relative';this.font-weight='900';"></lido-text>
                <lido-text visible="true" height="100px" width="400px"  id="numb2" tab-index="3"  font-size="106px" font-color="black" value="${t.number2}" string="${t.number2}" y="" z="1" x="" onEntry="this.position='relative';this.font-weight='900';"></lido-text>
            </lido-cell>
            <lido-text visible="true" height="40px" width="295px" font-size="106px" font-color="black" string="- - - - -"   z="1" ></lido-text>
            <lido-text  id="answer" visible="true" tab-index="4" height="84px" width="279px"  font-size="106px" font-color="black" string=" " value="5"   z="1"  onEntry="this.font-weight='900';"></lido-text>
        </lido-cell>
        <lido-canvas visible="true" width="700px" heigth="800px" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/calculator/s1.png" y="landscape.10%,portrait.6%" x="landscape.4%,portrait.6%"   ></lido-canvas>
        <lido-cell visible="true" height="700px" width="470px"  onEntry="this.position='relative';" y="landscape.-2%,portrait.23%" x="landscape.456px,portrait.9%" >
            <lido-calculator id="lidoCalculator" visible="true" height="700px" width="470px"  onEntry="this.position='relative';" ></lido-calculator>
        </lido-cell>
    <!-- Chimple Avatar -->
        <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.396px,portrait.400px" width="landscape.298px,portrait.369px" x="landscape.48%, portrait.-2%" y="landscape.60%, portrait.77%" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="">
                <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
                </lido-avatar>
        </lido-cell>
    </lido-container>
   </main>
  `}var i,o,r;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    number1: '10',
    number2: '5',
    symbol: '+',
    isContinueOnCorrect: true,
    isAllowOnlyCorrect: true
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const d=["calculator"];export{d as __namedExportsOrder,e as calculator,p as default};
