import"./lit-element-DRlmAcsz.js";import{b as n}from"./lit-html-s0HVm7S4.js";const d={title:"Templates/foodJar",argTypes:{firstNum:{control:"text"},operator:{control:"text"},secondNum:{control:"text"},equator:{control:"text"},answer:{control:"text"},option1:{control:"text"},option2:{control:"text"},option3:{control:"text"},option4:{control:"text"},option5:{control:"text"},isAllowOnlyCorrect:{control:"boolean"}}},a={args:{firstNum:"10",operator:"+",secondNum:"5",equator:"=",answer:"15",option1:"=",option2:"5",option3:"+",option4:"15",option5:"10",isAllowOnlyCorrect:"true"},render:t=>{const i=p(t);return n`<lido-home .xmlData="${i}"></lido-home>`}};function p(t){return`
    <main>
    <lido-container id="lido-container" is-allow-only-correct="${t.isAllowOnlyCorrect}"  value="mainContainer1" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/background-images/Food%20Jar.png" objective="${[t.firstNum,t.operator,t.secondNum,t.equator,t.answer].join(",")}" width="100%" bg-color="transparent" visible="true" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2000';  " onEntry="this.justifyContent='space-around';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="true" after-drop="false" custom-style="#drop1, #drop2, #drop3, #drop4, #drop5{border: none !important;boxShadow: none !important;}  ">
    <!-- Chimple Avatar -->
    <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.448px,portrait.402px" width="landscape.350px,portrait.398px" x="landscape.1px, portrait.20px" y="landscape.5px, portrait.100px" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="">
            <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
            </lido-avatar>
    </lido-cell>

    <!-- image math matrix -->
        <lido-cell layout="row" visible="true" width="100%" height="landscape.40%,portrait.80%" bg-color="transparent" margin="landscape.100px 0px 0px 0px,portrait.500px 0px 0px 0px">
            <lido-math-matrix id="mat1" rows="3" cols="4"  defualtFill="${t.firstNum}" leftIndex="false" topIndex="false" clickable="true" matrixImage="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/FoodJar/apple.png" activeBgColor="transparent" inactiveBgColor="transparent" border="none" height="100%" width="100%" visible="true"></lido-math-matrix>
            <lido-math-matrix id="mat2" rows="3" cols="4" defualtFill="${t.secondNum}" leftIndex="false" topIndex="false" clickable="true" matrixImage="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/FoodJar/apple.png" activeBgColor="transparent" inactiveBgColor="transparent" border="none" height="100%" width="100%" visible="true"></lido-math-matrix>
        </lido-cell>

        <!-- drop elements -->
        <lido-cell visible="true" id="answer" layout="row" height="landscape.30%,portrait.40%" width="landscape.80%,portrait.100%" bg-color="transparent" onEntry="this.alignItems='center';" margin="landscape.0,portrait.0px 0px 0px 0px">
            <lido-image id="drop1"  width="landscape.300px,portrait.200px" height="landscape.200px,portrait.200px" value="${t.firstNum}" visible="true" tab-index="1" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/FoodJar/smalljargrey_equation.png" bg-Color="transparent" onEntry="" type="drop"  onCorrect="lido-avatar.avatarAnimate='Success'"></lido-image>
            <lido-image id="drop2"  width="landscape.300px,portrait.200px" height="landscape.200px,portrait.200px" value="${t.operator}" visible="true" tab-index="2" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/FoodJar/smalljargrey_equation.png" bg-Color="transparent" onEntry="" type="drop"  onCorrect="lido-avatar.avatarAnimate='Success'" ></lido-image>
            <lido-image id="drop3"  width="landscape.300px,portrait.200px" height="landscape.200px,portrait.200px" value="${t.secondNum}" visible="true" tab-index="3" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/FoodJar/smalljargrey_equation.png" bg-Color="transparent" onEntry="" type="drop" onCorrect="lido-avatar.avatarAnimate='Success'" ></lido-image>
            <lido-image id="drop4"  width="landscape.300px,portrait.200px" height="landscape.200px,portrait.200px" value="${t.equator}" visible="true" tab-index="4" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/FoodJar/smalljargrey_equation.png" bg-Color="transparent" onEntry="" type="drop"   onCorrect="lido-avatar.avatarAnimate='Success'" ></lido-image>
            <lido-image id="drop5"  width="landscape.300px,portrait.200px" height="landscape.200px,portrait.200px" value="${t.answer}" visible="true" tab-index="5" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/FoodJar/smalljargrey_equation.png" bg-Color="transparent" onEntry="" type="drop"   onCorrect="lido-avatar.avatarAnimate='Success'" ></lido-image>
        </lido-cell>

        <!-- drag elements -->
        <lido-cell visible="true" id="answer" layout="row" height="landscape.30%,portrait.40%" width="landscape.80%,portrait.100%" bg-color="transparent" onEntry="this.alignItems='center';" >
            <lido-text id="drg1"  height="landscape.200px,portrait.200px" width="landscape.160px,portrait.155px" visible="true" font-family="'Baloo Bhai 2'" font-size="90px" string="${t.option1}" value="${t.option1}" tab-index="6" bg-Color="transparent" onEntry="  this.fontWeight='1000';" type="drag" border-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/FoodJar/smalljar_equation.png" ></lido-text>
            <lido-text id="drg2"  height="landscape.200px,portrait.200px" width="landscape.160px,portrait.155px" visible="true" font-family="'Baloo Bhai 2'" font-size="90px" string="${t.option2}" value="${t.option2}" tab-index="7" bg-Color="transparent" onEntry="  this.fontWeight='1000';" type="drag" border-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/FoodJar/smalljar_equation.png" ></lido-text>
            <lido-text id="drg3"  height="landscape.200px,portrait.200px" width="landscape.160px,portrait.155px" visible="true" font-family="'Baloo Bhai 2'" font-size="90px" string="${t.option3}" value="${t.option3}" tab-index="8" bg-Color="transparent" onEntry="  this.fontWeight='1000';" type="drag" border-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/FoodJar/smalljar_equation.png" ></lido-text>
            <lido-text id="drg4"  height="landscape.200px,portrait.200px" width="landscape.160px,portrait.155px" visible="true" font-family="'Baloo Bhai 2'" font-size="90px" string="${t.option4}" value="${t.option4}" tab-index="9" bg-Color="transparent" onEntry="  this.fontWeight='1000';" type="drag" border-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/FoodJar/smalljar_equation.png" ></lido-text>
            <lido-text id="drg5"  height="landscape.200px,portrait.200px" width="landscape.160px,portrait.155px" visible="true" font-family="'Baloo Bhai 2'" font-size="90px" string="${t.option5}" value="${t.option5}" tab-index="10" bg-Color="transparent" onEntry="  this.fontWeight='1000';" type="drag" border-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/FoodJar/smalljar_equation.png" ></lido-text>
            </lido-cell>

    </lido-container>
    </main>
  `}var e,o,r;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    firstNum: '10',
    operator: '+',
    secondNum: '5',
    equator: '=',
    answer: '15',
    option1: '=',
    option2: '5',
    option3: '+',
    option4: '15',
    option5: '10',
    isAllowOnlyCorrect: 'true'
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(r=(o=a.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const c=["OrderTractor"];export{a as OrderTractor,c as __namedExportsOrder,d as default};
