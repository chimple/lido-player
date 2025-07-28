import{x as n}from"./lit-html-DLYuhZ0i.js";const p={title:"Templates/MCQWithQuestionImage",argTypes:{question:{control:"text"},questionImg:{control:"file"},option1:{control:"text"},audio1:{control:"text"},optionImg1:{control:"file"},audio2:{control:"text"},option2:{control:"text"},optionImg2:{control:"file"},option3:{control:"text"},audio3:{control:"text"},optionImg3:{control:"file"},option4:{control:"text"},audio4:{control:"text"},optionImg4:{control:"file"},correctAns:{control:"text"}}},o={args:{question:"I have less than double of 3 marbles. I have more than half of 8 marbles. How many marbles do I have?",questionImg:"https://aeakbcdznktpsbrfsgys.storage.supabase.co/v1/object/public/template-assets/fill-in-the-blanks/image%201.png",option1:"A square and a circle",audio1:"",optionImg1:"",option2:"A square and a rectangle",audio2:"",optionImg2:"",option3:"A triangle and a square",audio3:"",optionImg3:"",option4:"A circle and a rectangle",audio4:"",optionImg4:"",correctAns:"A square and a rectangle"},render:t=>{const e=l(t);return n`<lido-home .xmlData="${e}}"></lido-home>`}};function l(t){const e=t.questionImg.length===0?"":`<lido-image visible="true" bg-color="white" height="landscape.80%, portrait.35%" src="${t.questionImg}" border-radius="6px" onEntry="this.border='5px solid white';"></lido-image>`;return`<main>
            <lido-container id="lido-container" value="maincontainer" objective="${t.correctAns}" aria-label="This is a multiple-option question. Select one option from the list." height="100vh" width="100vw" x="0" y="0" z="0" bg-color="transparent" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/Sky.png" visible="true" audio="background1.mp3" onTouch="" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="true" onEntry="">

        <!-- Chimple Avatar -->
        <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos1" height="300px" width="300px" x="landscape.1330px, portrait.653px" y="landscape.590px, portrait.1280px" aria-hidden="true" z="2" bg-color="transparent" type="" visible="true" audio="" onTouch="" onCorrect="">
            <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/chimplecharacter.riv" alt-text="{chimpleCharacterRive}" bg-color="transparent">
            </lido-avatar>
            <lido-image id="image1" disable-edit="true" value="image1" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/Shadow.png" bg-color="transparent" width="186px" height="40px" x="55px" y="248px" alt-text="{shadowImgae}">
            </lido-image>
        </lido-cell>

        <lido-cell visible="true" layout="col" width="100%" height="100%" bg-color="transparent">
            <lido-text visible="true" width="80%" height="10%" bg-color="transparent"></lido-text>
            <lido-text tab-index="1" visible="true" id="lido-question" width="landscape.65%, portrait.80%" height="10%" bg-color="#FFF5BB" string="${t.question}" border-radius="16px" onEntry="this.border='1px solid black'; this.fontWeight='500'; this.padding='50px';" font-size="36px"></lido-text>
            <lido-cell visible="true" width="68%" height="landscape.68%, portrait.90%" bg-color="transparent" layout="landscape.row, portrait.col"  margin="landscape.0, portrait.-108px 0 0 0">
                    ${e}

                    <lido-cell visible="true" layout="wrap" width="landscape.40%, portrait.80%" height="landscape.97%, portrait.auto" bg-color="transparent" gap="40px" onEntry="" margin="landscape.0, portrait.-195px 0 0 0">

                            <lido-cell tab-index="2" visible="true" show-speak-icon="true" layout="col" width="100%" type="click" audio="${t.audio1}" value="${t.option1}" height="landscape.250px, portrait.270px" onEntry="this.borderRadius='25px'; this.padding='0';" onCorrect="this.cellBorderAnimate='#65BC46';" onInCorrect="this.vibrate='horizontal-shake';" onTouch="">
                                ${t.optionImg1.length===0?"":`<lido-image visible="true" src="${t.optionImg1}" bg-color="transparent" width="90%" height="auto" border-radius="25px 25px 0 0" onEntry="this.marginTop='10px';"></lido-image>`}
                                <lido-text visible="true" font-size="36px" font-color="black" string="${t.option1}" width="fit-content" bg-color="transparent" onEntry="this.fontWeight='500'; this.padding='0 20px';"></lido-text>
                            </lido-cell>
                            <lido-cell tab-index="3" visible="true" show-speak-icon="true" layout="col" width="100%" type="click" audio="${t.audio2}" value="${t.option2}" height="landscape.250px, portrait.270px" onEntry="this.borderRadius='25px'; this.padding='0';" onCorrect="this.cellBorderAnimate='#65BC46';" onInCorrect="this.vibrate='horizontal-shake';" onTouch="this.speak='true';">
                                ${t.optionImg2.length===0?"":`<lido-image visible="true" src="${t.optionImg2}" bg-color="transparent" width="90%" height="auto" border-radius="25px 25px 0 0" onEntry="this.marginTop='10px';"></lido-image>`}
                                <lido-text visible="true" font-size="36px" font-color="black" string="${t.option2}"  width="fit-content" bg-color="transparent" onEntry="this.fontWeight='500'; this.padding='0 20px';"></lido-text>
                            </lido-cell>
                            <lido-cell tab-index="4" visible="true" show-speak-icon="true" layout="col" width="100%" type="click" audio="${t.audio3}" value="${t.option3}" height="landscape.250px, portrait.270px" onEntry="this.borderRadius='25px'; this.padding='0';" margin="landscape.0, portrait.20px 0 0 0" onCorrect="this.border='this.cellBorderAnimate='#65BC46';" onInCorrect="this.vibrate='horizontal-shake';" onTouch="">
                                ${t.optionImg3.length===0?"":`<lido-image visible="true" src="${t.optionImg3}" bg-color="transparent" width="90%" height="auto" border-radius="25px 25px 0 0" onEntry="this.marginTop='10px';"></lido-image>`}
                                <lido-text visible="true" font-size="36px" font-color="black" string="${t.option3}" width="fit-content" bg-color="transparent" onEntry="this.fontWeight='500'; this.padding='0 20px';"></lido-text>
                            </lido-cell>
                            <lido-cell tab-index="5" visible="true" show-speak-icon="true" layout="col" width="100%" type="click" audio="${t.audio4}" value="${t.option4}" height="landscape.250px, portrait.270px" onEntry="this.borderRadius='25px'; this.padding='0';" margin="landscape.0, portrait.20px 0 0 0" onCorrect="this.cellBorderAnimate='#65BC46';" onInCorrect="this.vibrate='horizontal-shake';" onTouch="">

                                ${t.optionImg4.length===0?"":`<lido-image visible="true" src="${t.optionImg4}" bg-color="transparent" width="90%" height="auto" border-radius="25px 25px 0 0" onEntry="this.marginTop='10px';"></lido-image>`}
                                <lido-text visible="true" font-size="36px" font-color="black" string="${t.option4}" bg-color="transparent" onEntry="this.fontWeight='500'; this.padding='0 20px';"></lido-text>
                            </lido-cell>
                            
                    </lido-cell>
            </lido-cell>

        </lido-cell>

    </lido-container>
</main>`}var i,a,r;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    question: 'I have less than double of 3 marbles. I have more than half of 8 marbles. How many marbles do I have?',
    questionImg: "https://aeakbcdznktpsbrfsgys.storage.supabase.co/v1/object/public/template-assets/fill-in-the-blanks/image%201.png",
    option1: 'A square and a circle',
    audio1: '',
    optionImg1: '',
    option2: 'A square and a rectangle',
    audio2: '',
    optionImg2: '',
    option3: 'A triangle and a square',
    audio3: '',
    optionImg3: '',
    option4: 'A circle and a rectangle',
    audio4: '',
    optionImg4: '',
    correctAns: 'A square and a rectangle'
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}}"></lido-home>\`;
  }
}`,...(r=(a=o.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const d=["Default"];export{o as Default,d as __namedExportsOrder,p as default};
