import"./lit-element-BxxbMms4.js";import{x as s}from"./lit-html-DLYuhZ0i.js";const c={title:"Templates/Reorder",argTypes:{question:{control:"text"},questionImg:{control:"file"},option1:{control:"text"},optionImg1:{control:"file"},option2:{control:"text"},optionImg2:{control:"file"},option3:{control:"text"},optionImg3:{control:"file"},option4:{control:"text"},optionImg4:{control:"file"},correct1:{control:"text"},correct2:{control:"text"},correct3:{control:"text"},correct4:{control:"text"}}},e={args:{question:"Reorder the following shapes from the fewest flat faces to the most flat faces.",questionImg:"",option1:"Sphere",optionImg1:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/reordertemp/sphere.png",option2:"Cube",optionImg2:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/reordertemp/cube.png",option3:"Cylinder",optionImg3:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/reordertemp/cylinder.png",option4:"Cone",optionImg4:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/reordertemp/cone.png",correct1:"sphere",correct2:"cone",correct3:"cylinder",correct4:"cube"},render:t=>{const a=p(t);return s`<lido-home .xmlData="${a}"></lido-home>`}};function p(t){return console.log("que : ",t.questionImg),`<main>
    <lido-container visible="true" bg-color="transparent" objective="${t.correct1.toLowerCase()},${t.correct2.toLowerCase()},${t.correct3.toLowerCase()},${t.correct4.toLowerCase()}" is-continue-on-correct="true" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onInCorrect="lido-avatar.avatarAnimate='fail'; this.sleep='2000';" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/phonic-tractor/bg-image.png">

    <!-- Chimple Avatar -->
    <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos1" height="250px" width="250px" x="landscape.0, portrait.670px" y="landscape.105px, portrait.1315px" aria-hidden="true" z="2" bg-color="transparent" type="" visible="true" audio="" onTouch="" onCorrect="">
        <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/chimplecharacter.riv" alt-text="{chimpleCharacterRive}" bg-color="transparent">
        </lido-avatar>
        <lido-image id="image1" disable-edit="true" value="image1" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/Shadow.png" bg-color="transparent" width="165px" height="40px" x="40px" y="205px" alt-text="{shadowImgae}">
        </lido-image>
    </lido-cell>

    <lido-text bg-color="transparent" width="100%" height="landscape.10%, portrait.0%"></lido-text>

    <!-- Question -->
    <lido-text visible="true" width="landscape.70%, portrait.65%" height="landscape.20%, portrait.13%" bg-color="transparent" string="${t.question}" font-size="36px" font-color="black" onEntry="this.fontWeight='500'; this.speak='true';"></lido-text>

    <!-- Options -->
    <lido-cell visible="true" layout="landscape.col, portrait.row" flex-direction="landscape.,portrait.row-reverse" width="80%" height="landscape.60%, portrait.80%" bg-color='transparent' gap="20px" align-items="landscape.center, portrait.start">
  ${!t.questionImg||t.questionImg.length===0?"":`<lido-image visible="true" bg-color="white" src="${t.questionImg}" width="250px" height="250px" border-radius="6px"></lido-image>`}

        <lido-cell visible="true" layout="col" bg-color="transparent" width="landscape.100%, portrait.65%" height="landscape.90%, portrait.100%" flex-direction="landscape., portrait.row-reverse" onEntry="this.padding='0';">
            <lido-cell visible="true" layout="landscape.row, portrait.col" bg-color="#FBCAB5" width="100%" height="100%" border-radius="landscape.16px 16px 0 0, portrait.0 16px 16px 0" onEntry="this.padding='0';" z="1">
                <lido-cell visible="true" layout="col" type="slide" value="${t.option1.toLowerCase()}" width="landscape.15%, portrait.55%" height="auto" bg-color="white" border-radius="6px" onEntry="this.border='2px solid #CACACA'; this.padding='0';" onTouch="this.speak='true';">
                    <lido-cell visible="true" layout="landscape.pos, portrait.col" height="50px" width="lanscape.50px, portrait.100%" border-radius="6px" onEntry="this.alignItems='start'; this.padding='0';" bg-color="transparent">
                                <lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/reordertemp/Reorder%20button.png" border-radius="6px"></lido-image>
                    </lido-cell>
                    ${!t.optionImg1||t.optionImg1.length===0?"":`<lido-image visible="true" bg-color="transparent" width="landscape.100%, portrait.170px" height="landscape.100%, portrait.170px" src="${t.optionImg1}"></lido-image>`}
                    <lido-text visible="true" height="landscape.100px, portrait.auto" width="100%" string="${t.option1}" font-size="36px" font-color="black" onEntry="this.fontWeight='500'; this.alignItems='end';"></lido-text>
                </lido-cell>
                <lido-cell visible="true" layout="col" type="slide" value="${t.option2.toLowerCase()}" width="landscape.15%, portrait.55%" height="auto" bg-color="white" border-radius="6px" onEntry="this.border='2px solid #CACACA'; this.padding='0';" onTouch="this.speak='true';">
                    <lido-cell visible="true" layout="landscape.pos, portrait.col" height="50px" width="lanscape.50px, portrait.100%" border-radius="6px" onEntry="this.alignItems='start'; this.padding='0';" bg-color="transparent">
                                <lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/reordertemp/Reorder%20button.png" border-radius="6px"></lido-image>
                    </lido-cell>
                    ${!t.optionImg2||t.optionImg2.length===0?"":`<lido-image visible="true" bg-color="transparent" width="landscape.100%, portrait.170px" height="landscape.100%, portrait.170px" src="${t.optionImg2}"></lido-image>`}
                    <lido-text visible="true" height="landscape.100px, portrait.auto" width="100%" string="${t.option2}" font-size="36px" font-color="black" onEntry="this.fontWeight='500'; this.alignItems='end';"></lido-text>
                </lido-cell>
                <lido-cell visible="true" layout="col" type="slide" value="${t.option3.toLowerCase()}" width="landscape.15%, portrait.55%" height="auto" bg-color="white" border-radius="6px" onEntry="this.border='2px solid #CACACA'; this.padding='0';" onTouch="this.speak='true';">
                    <lido-cell visible="true" layout="landscape.pos, portrait.col" height="50px" width="lanscape.50px, portrait.100%" border-radius="6px" onEntry="this.alignItems='start'; this.padding='0';" bg-color="transparent">
                                <lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/reordertemp/Reorder%20button.png" border-radius="6px"></lido-image>
                    </lido-cell>
                    ${!t.optionImg3||t.optionImg3.length===0?"":`<lido-image visible="true" bg-color="transparent" width="landscape.100%, portrait.170px" height="landscape.100%, portrait.170px" src="${t.optionImg3}"></lido-image>`}
                    <lido-text visible="true" height="landscape.100px, portrait.auto" width="100%" string="${t.option3}" font-size="36px" font-color="black" onEntry="this.fontWeight='500'; this.alignItems='end';"></lido-text>
                </lido-cell>
                <lido-cell visible="true" layout="col" type="slide" value="${t.option4.toLowerCase()}" width="landscape.15%, portrait.55%" height="auto" bg-color="white" border-radius="6px" onEntry="this.border='2px solid #CACACA'; this.padding='0';" onTouch="this.speak='true';">
                    <lido-cell visible="true" layout="landscape.pos, portrait.col" height="50px" width="lanscape.50px, portrait.100%" border-radius="6px" onEntry="this.alignItems='start'; this.padding='0';" bg-color="transparent">
                                <lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/reordertemp/Reorder%20button.png" border-radius="6px"></lido-image>
                    </lido-cell>
          ${!t.optionImg4||t.optionImg4.length===0?"":`<lido-image visible="true" bg-color="transparent" width="landscape.100%, portrait.170px" height="landscape.100%, portrait.170px" src="${t.optionImg4}"></lido-image>`}
                    
                    <lido-text visible="true" height="landscape.100px, portrait.auto" width="100%" string="${t.option4}" font-size="36px" font-color="black" onEntry="this.fontWeight='500'; this.alignItems='end';"></lido-text>
                </lido-cell>
                
            </lido-cell>
            <lido-text visible="true" bg-color="#F57139" height="landscape.70px, portrait.100%" width="landscape.100%, portrait.60px" border-radius="landscape.0 0 16px 16px, portrait.16px 0 0 16px"></lido-text>
        </lido-cell>
    </lido-cell>
</lido-container>
  </main>`}var o,i,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    question: 'Reorder the following shapes from the fewest flat faces to the most flat faces.',
    questionImg: '',
    option1: 'Sphere',
    optionImg1: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/reordertemp/sphere.png',
    option2: 'Cube',
    optionImg2: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/reordertemp/cube.png',
    option3: 'Cylinder',
    optionImg3: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/reordertemp/cylinder.png',
    option4: 'Cone',
    optionImg4: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/reordertemp/cone.png',
    correct1: 'sphere',
    correct2: 'cone',
    correct3: 'cylinder',
    correct4: 'cube'
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(r=(i=e.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const d=["QuestionAndOptions"];export{e as QuestionAndOptions,d as __namedExportsOrder,c as default};
