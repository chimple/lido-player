import"./lit-element-BxxbMms4.js";import{x as n}from"./lit-html-DLYuhZ0i.js";const d={title:"Templates/fillAnswer",argTypes:{firstNum:{control:"text"},operator:{control:"text"},secontNum:{control:"text"},equator:{control:"text"},answer:{control:"text"},option1:{control:"text"},option2:{control:"text"},option3:{control:"text"},option4:{control:"text"},isAllowOnlyCorrect:{control:"boolean"}}},o={args:{firstNum:"3",operator:"+",secontNum:"4",equator:"=",answer:"7",option1:"5",option2:"7",option3:"3",option4:"2",isAllowOnlyCorrect:"true"},render:t=>{const a=l(t);return n`<lido-home .xmlData="${a}"></lido-home>`}};function l(t){return`
    <main>
        <lido-container id="lido-container" is-allow-only-correct="${t.isAllowOnlyCorrect}"  value="mainContainer1" tab-index="1" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/background-images/Fill%20answer.png" objective="${t.answer}" width="100%" bg-color="transparent" visible="true" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2000';  " onEntry="this.justifyContent='space-around';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="true" after-drop="false">
            <!-- Chimple Avatar -->
            <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.448px,portrait.402px" width="landscape.350px,portrait.398px" x="landscape.1267px, portrait.541px" y="landscape.587px, portrait.1304px" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="this.animation='rightToPlace 2.5s linear';">
                <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
                </lido-avatar>
            </lido-cell>

            <!--Parent cell  -->
            <lido-cell layout="col" visible="true" width="100%" height="100%" bg-color="transparent">
                <!-- heading -->
                <lido-cell layout="row" visible="true" width="landscape.45%, portrait.69%" height="landscape.15%, portrait.auto" bg-color="white"  onEntry="this.borderRadius='10px'; this.padding='8px';this.animation='topToPlace 2.5s linear';" margin="landscape.110px 0px 0px 0px , portrait.400px 0px 0px 0px">

                    <lido-text id="question" audio="" tab-index="2" visible="false" string="solve the problem and select the correct answer from below" value="solve the problem and select the correct answer from below" onEntry="this.sleep='2000';this.speak='true';">
                    </lido-text>
                
                    <lido-text tab-index="3" font-family="'Baloo Bhai 2'" visible="true" font-size="88px" y="-10px" string="${t.firstNum}" bg-color="transparent" onEntry="this.position='relative'; this.fontWeight='600';this.display='inline'; this.padding='0px 20px 0px 0px'; ">
                    </lido-text>
                    <lido-text tab-index="4" font-family="'Baloo Bhai 2'" visible="true" font-size="88px" y="-10px" string="${t.operator}" bg-color="transparent" onEntry="this.position='relative';this.fontWeight='600';this.display='inline';this.boxShadow='0 0 0'; this.padding='0px 21px 0px 0px';">
                    </lido-text>
                    <lido-text tab-index="5" font-family="'Baloo Bhai 2'" visible="true" font-size="88px" y="-10px" string="${t.secontNum}" bg-color="transparent" onEntry="this.position='relative';this.fontWeight='600';this.display='inline';this.boxShadow='0 0 0'; this.padding='0px 21px 0px 0px';">
                    </lido-text>
                    <lido-text tab-index="6" font-family="'Baloo Bhai 2'" visible="true" font-size="88px" y="-10px" string="${t.equator}" bg-color="transparent" onEntry="this.position='relative';this.fontWeight='600';this.display='inline';this.boxShadow='0 0 0'; this.padding='0px 21px 0px 0px';">
                    </lido-text>
                    <lido-text tab-index="7" id="drop1" disable-edit="true" visible="true" width="164px" height="landscape.73px,portrait.77px" value="${t.answer}"  type="drop" is-allow-only-one-drop="true" drop-Attr="stretch" onEntry="this.border-radius='10px'; this.box-shoadow=''; this.margin-right='35px';" onTouch="this.speak='true';" onCorrect="this.speak='true';" >
                    </lido-text>
                
                </lido-cell>
                <lido-cell layout="row" childElementsLength="4" onEntry="this.gap='28px'; this.animation='rightToPlace 2.5s linear';   this.gridTemplateColumns = 'repeat(2, 1fr)';  this.gridTemplateRows = 'repeat(2, 1fr)';" visible="true" margin="landscape.6px 25px 74px 0px, portrait.-170px 128px 0px 117px">
                    <lido-text  font-family="'Baloo Bhai 2'" audio="" id="option1" value="${t.option1}" tab-index="14" visible="true" bg-color="#fcf3b1" onEntry="this.padding='0px 48px'; this.borderRadius='24px';  this.fontWeight='600';" width="auto" height="landscape.87px, portrait.91px" string="${t.option1}" fontColor="black" font-size="88px" onTouch="this.speak='true';" onCorrect="this.speak='true';"  type="drag">
                    </lido-text>
                    <lido-text  font-family="'Baloo Bhai 2'" audio="" id="option2" value="${t.option2}" tab-index="15" visible="true" bg-color="#fcf3b1" onEntry="this.padding='0px 48px'; this.borderRadius='24px';  this.fontWeight='600'; " width="auto" height="landscape.87px, portrait.91px" string="${t.option2}" fontColor="black" font-size="88px" onTouch="this.speak='true';" onCorrect="this.speak='true';" type="drag">
                    </lido-text>
                    <lido-text  font-family="'Baloo Bhai 2'" audio="" id="option3" value="${t.option3}" tab-index="16" visible="true" bg-color="#fcf3b1" onEntry="this.padding='0px 48px'; this.borderRadius='24px'; this.fontWeight='600'; " width="auto" height="landscape.87px, portrait.91px" string="${t.option3}" fontColor="black" font-size="88px" onTouch="this.speak='true';" onCorrect="this.speak='true';" type="drag">
                    </lido-text>
                    <lido-text  font-family="'Baloo Bhai 2'" audio="" id="option4" value="${t.option4}" tab-index="17" visible="true" bg-color="#fcf3b1" onEntry="this.padding='0px 48px'; this.borderRadius='24px';  this.fontWeight='600';" width="auto" height="landscape.87px, portrait.91px" string="${t.option4}" fontColor="black" font-size="88px" onTouch="this.speak='true';" onCorrect="this.speak='true';"  type="drag">
                    </lido-text>
                </lido-cell>
            
            </lido-cell>
        </lido-container>
    </main>
  `}var i,e,r;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    firstNum: '3',
    operator: '+',
    secontNum: '4',
    equator: '=',
    answer: '7',
    option1: '5',
    option2: '7',
    option3: '3',
    option4: '2',
    isAllowOnlyCorrect: 'true'
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(r=(e=o.parameters)==null?void 0:e.docs)==null?void 0:r.source}}};const h=["FillAnswer"];export{o as FillAnswer,h as __namedExportsOrder,d as default};
