import{x as r}from"./lit-html-DLYuhZ0i.js";const p={title:"Templates/MultiOption",argTypes:{question:{control:"text"},option1:{control:"text"},audio1:{control:"text"},optionImg1:{control:"text"},audio2:{control:"text"},option2:{control:"text"},optionImg2:{control:"text"},option3:{control:"text"},audio3:{control:"text"},optionImg3:{control:"text"},option4:{control:"text"},audio4:{control:"text"},optionImg4:{control:"text"},correctAns:{control:"text"}}},o={args:{question:"Which animal is known as “the king of the jungle”?",option1:"GIRAFFE",audio1:"",optionImg1:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/giraffe.png",option2:"LEOPARD",audio2:"",optionImg2:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/leopard.png",option3:"LION",audio3:"",optionImg3:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/lion.png",option4:"TIGER",audio4:"",optionImg4:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/tiger.png",correctAns:"LION"},render:t=>{const n=s(t);return r`<lido-home .xmlData="${n}}"></lido-home>`}};function s(t){return`<main>
        <lido-container id="lido-container" value="maincontainer" objective="${t.correctAns}" aria-label="This is a multiple-option question. Select one option from the list." height="100vh" width="100vw" x="0" y="0" z="0" bg-color="transparent" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/background-images/MCQ.png" visible="true" audio="background1.mp3" onTouch="" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="true">

        <!-- Chimple Avatar -->
        <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos1" height="350px" width="350px" x="landscape.-50px, portrait.273px" y="landscape.507px, portrait.1200px" aria-hidden="true" z="2" bg-color="transparent" type="" visible="true" audio="" onTouch="" onCorrect="" onEntry="this.animation='leftToPlace 1.5s linear';">
            <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="350px" width="350px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/chimplecharacter.riv" alt-text="{chimpleCharacterRive}" bg-color="transparent">
            </lido-avatar>
            <lido-image id="image1" disable-edit="true" value="image1" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/Shadow.png" bg-color="transparent" width="186px" height="40px" x="77px" y="302px" alt-text="{shadowImgae}">
            </lido-image>
        </lido-cell>

        <lido-cell visible="true" layout="col" width="100%" height="100%" bg-color="transparent">
            <!-- Question -->
            <lido-cell layout="flex" visible="true" width="100%" height="landscape.30%, portrait.25%" bg-color="transparent" onEntry="this.justifyContent='center'; this.alignContent='center'; this.animation='topToPlace 0.5s linear';">
                <lido-image visible="true" is-slice="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/questionBg.png" bg-color="transparent" width="landscape.65%, portrait.70%" height="40%" onEntry="this.padding='20px';">
                    <lido-text id="textA" tab-index="1" value="{question.id}" visible="true" width="1000px" height="100px" onEntry="this.boxShadow='unset'; this.fontWeight='800';" string="${t.question}" font-family="'Baloo 2', serif" font-size="40px" font-color="black" bg-color="transparent" z="0" x="25px" y="20px" onTouch="question.speak='true';"></lido-text>
                </lido-image>
            </lido-cell>
            
            <!-- Options -->
            <lido-cell layout="flex" visible="true" width="100%" height="70%" bg-color="transparent" onEntry="this.justifyContent='center'; this.alignContent='center'; this.animation='bottomToPlace 1s linear';">
                <lido-cell visible="true" layout="landscape.row, portrait.wrap" width="landscape.70%, portrait.73%" height="landscape.50%, portrait.auto" bg-color="transpernt" gap="landscape.30px, portrait.55px" onEntry="">
                    <lido-cell tab-index="2" visible="true" layout="col" width="landscape.25%, portrait.100%" type="click" value="${t.option1}" height="100%" onEntry="this.borderRadius='25px'; this.padding='0';" onCorrect="this.border='8px solid green';" onInCorrect="this.border='8px solid red';" audio='${t.audio1}' onTouch="this.speak='true';">
                        <lido-image visible="true" src="${t.optionImg1}" bg-color="transparent" width="90%" height="auto" border-radius="25px 25px 0 0" onEntry="this.marginTop='10px';"></lido-image>
                        <lido-text visible="true" font-size="40px" font-color="black" string="${t.option1}" width="100%" bg-color="transparent" onEntry="this.fontWeight='bold';"></lido-text>
                    </lido-cell>
                    <lido-cell tab-index="3" visible="true" layout="col" width="landscape.25%, portrait.100%" type="click" value="${t.option2}" height="100%" onEntry="this.borderRadius='25px'; this.padding='0';" onCorrect="this.border='8px solid green';" onInCorrect="this.border='8px solid red';" audio='${t.audio2}' onTouch="this.speak='true';">
                        <lido-image visible="true" src="${t.optionImg2}" bg-color="transparent" width="90%" height="auto" border-radius="25px 25px 0 0" onEntry="this.marginTop='10px';"></lido-image>
                        <lido-text visible="true" font-size="40px" font-color="black" string="${t.option2}" width="100%" bg-color="transparent" onEntry="this.fontWeight='bold';"></lido-text>
                    </lido-cell>
                    <lido-cell tab-index="4" visible="true" layout="col" width="landscape.25%, portrait.100%" type="click" value="${t.option3}" height="100%" onEntry="this.borderRadius='25px'; this.padding='0';" margin="landscape.0, portrait.20px 0 0 0" onCorrect="this.border='8px solid green';" onInCorrect="this.border='8px solid red';" audio='${t.audio3}' onTouch="this.speak='true';">
                        <lido-image visible="true" src="${t.optionImg3}" bg-color="transparent" width="90%" height="auto" border-radius="25px 25px 0 0" onEntry="this.marginTop='10px';"></lido-image>
                        <lido-text visible="true" font-size="40px" font-color="black" string="${t.option3}" width="100%" bg-color="transparent" onEntry="this.fontWeight='bold';"></lido-text>
                    </lido-cell>
                    <lido-cell tab-index="5" visible="true" layout="col" width="landscape.25%, portrait.100%" type="click" value="${t.option4}" height="100%" onEntry="this.borderRadius='25px'; this.padding='0';" margin="landscape.0, portrait.20px 0 0 0" onCorrect="this.border='8px solid green';" onInCorrect="this.border='8px solid red';" audio='${t.audio4}' onTouch="this.speak='true';">
                        <lido-image visible="true" src="${t.optionImg4}" bg-color="transparent" width="90%" height="auto" border-radius="25px 25px 0 0" onEntry="this.marginTop='10px';"></lido-image>
                        <lido-text visible="true" font-size="40px" font-color="black" string="${t.option4}" width="100%" bg-color="transparent" onEntry="this.fontWeight='bold';"></lido-text>
                    </lido-cell>
                </lido-cell>
            </lido-cell>
            
            <lido-cell layout="flex" height="30%" width="100%" x="landscape.-50px, portrait.100px" y="507px" z="2" bg-color="transparent" type="" visible="landscape.false, portrait.true" audio="" onTouch="" onCorrect="" onEntry="this.justifyContent='center'; this.alignContent='center'; this.animation='leftToPlace 1.5s linear'; ">
                
            </lido-cell>

        </lido-cell>
    </lido-container>
</main>`}var e,i,a;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    question: 'Which animal is known as “the king of the jungle”?',
    option1: 'GIRAFFE',
    audio1: '',
    optionImg1: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/giraffe.png',
    option2: 'LEOPARD',
    audio2: '',
    optionImg2: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/leopard.png',
    option3: 'LION',
    audio3: '',
    optionImg3: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/lion.png',
    option4: 'TIGER',
    audio4: '',
    optionImg4: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/tiger.png',
    correctAns: 'LION'
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}}"></lido-home>\`;
  }
}`,...(a=(i=o.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const c=["Default"];export{o as Default,c as __namedExportsOrder,p as default};
