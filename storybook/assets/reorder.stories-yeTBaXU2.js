import"./lit-element-BxxbMms4.js";import{x as s}from"./lit-html-DLYuhZ0i.js";const d={title:"Templates/Reorder",argTypes:{question:{control:"text"},questionImg:{control:"file"},questionAudio:{control:{type:"file",accept:".mp3, .wav, .ogg, audio/*"}},option1:{control:"text"},option1Img:{control:"file"},option1Audio:{control:{type:"file",accept:".mp3, .wav, .ogg, audio/*"}},option2:{control:"text"},option2Img:{control:"file"},option2Audio:{control:{type:"file",accept:".mp3, .wav, .ogg, audio/*"}},option3:{control:"text"},option3Img:{control:"file"},option3Audio:{control:{type:"file",accept:".mp3, .wav, .ogg, audio/*"}},option4:{control:"text"},option4Img:{control:"file"},option4Audio:{control:{type:"file",accept:".mp3, .wav, .ogg, audio/*"}},correctObjective:{control:"text"}}},e={args:{question:"Reorder the following shapes from the fewest flat faces to the most flat faces.",questionImg:"",questionAudio:"",option1:"Sphere",option1Img:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/reordertemp/sphere.png",option1Audio:"",option2:"Cube",option2Img:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/reordertemp/cube.png",option2Audio:"",option3:"Cylinder",option3Img:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/reordertemp/cylinder.png",option3Audio:"",option4:"Cone",option4Img:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/reordertemp/cone.png",option4Audio:"",correctObjective:"sphere,cone,cylinder,cube"},render:t=>{const r=p(t);return s`<lido-home .xmlData="${r}"></lido-home>`}};function p(t){return`<main>
 <lido-container visible="true" objective="${t.correctObjective.toLowerCase()}" is-continue-on-correct="true" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/phonic-tractor/bg-image.png" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="this.sleep='1000'; this.slideAnimation='true';">

    <!-- Chimple Avatar -->
    <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos1" height="250px" width="250px" x="landscape.0, portrait.670px" y="landscape.105px, portrait.1315px" aria-hidden="true" z="2" bg-color="transparent" type="" visible="true" audio="" onTouch="" onCorrect="">
        <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/chimplecharacter.riv" alt-text="{chimpleCharacterRive}" bg-color="transparent">
        </lido-avatar>
        <lido-image id="image1" disable-edit="true" value="image1" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/Shadow.png" bg-color="transparent" width="165px" height="40px" x="40px" y="205px" alt-text="{shadowImgae}">
        </lido-image>
    </lido-cell>

    <lido-cell visible="true" layout="col" width="100%" height="100%" bg-color="transparent">
        <lido-text visible="true" width="70%" height="landscape.10%, portrait.5%" bg-color="transparent"></lido-text>

        <!-- Question -->
        <lido-text tab-index="1" show-speak-icon="true" visible="true" y="landscape.33px,portrait.0px" width="landscape.70%, portrait.62%" height="10%" string="${t.question}" audio="${t.questionAudio}" font-size="36px" onEntry=" this.padding='0px 45px';this.fontWeight='600'; " bg-color="transparent"></lido-text>

        <lido-cell visible="true" layout="landscape.col, portrait.row" flex-direction="landscape., portrait.row-reverse" align-items="landscape.center, portrait.start" width="100%" height="80%" bg-color="transparent">

            <!-- Question Image -->
      ${t.questionImg===""||t.questionImg.length<=0?"":`<lido-image visible="true" height="30%" bg-color="white" src="${t.questionImg}"></lido-image>`}
            
            <!-- Slide Elements -->
            <lido-cell visible="true" layout="landscape.row, portrait.col" width="landscape.75%, portrait.35%" height="landscape.40%, portrait.90%" bg-color="#FBCAB5" border-radius="landscape.16px 16px 0 0, portrait.0 16px 16px 0" onEntry="this.padding='60px 40px';">
                <lido-cell show-speak-icon="true" visible="true" layout="col" bg-color="white" width="landscape.15%, portrait.48%" height="landscape.85%, portrait.17%" value="${t.option1.toLowerCase()}" type="slide" onTouch="" border-radius="6px" onEntry="this.border='2px solid #CACACA'; this.paddingTop='50px';">
                    <lido-cell visible="true" layout="pos" width="48px" height="48px" z="1">
                        <lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/reordertemp/Reorder%20button.png"></lido-image>
                    </lido-cell>
          ${t.option1Img===""||t.option1Img.length<=0?"":`<lido-image visible="true" width="landscape., portrait.100%" src="${t.option1Img}"></lido-image>`}
                    
                    <lido-text visible="true" string="${t.option1}" audio="${t.option1Audio}" font-size="24px" onEntry="this.fontWeight='800'; this.textAlign='left'; this.lineHeight='26px';"></lido-text>
                </lido-cell>
                <lido-image visible="true" bg-color="transparent" transform="landscape., portrait.rotate(90deg)" width="landscape.8%,portrait." height="landscape.20%, portrait.5%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/reordertemp/arrow.png" margin="landscape.100px 0 0 0, portrait.0 100px 0 0"></lido-image>
                <lido-cell show-speak-icon="true" visible="true" layout="col" bg-color="white" width="landscape.15%, portrait.48%" height="landscape.85%, portrait.17%" value="${t.option2.toLowerCase()}" type="slide" onTouch="" border-radius="6px" onEntry="this.border='2px solid #CACACA'; this.paddingTop='50px';">
                    <lido-cell visible="true" layout="pos" width="48px" height="48px" z="1">
                        <lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/reordertemp/Reorder%20button.png"></lido-image>
                    </lido-cell>
                    ${t.option2Img===""||t.option2Img.length<=0?"":`<lido-image visible="true" width="landscape., portrait.100%" src="${t.option2Img}"></lido-image>`}
                    
                    <lido-text visible="true" string="${t.option2}" audio="${t.option2Audio}" font-size="24px" onEntry="this.fontWeight='800'; this.textAlign='left'; this.lineHeight='26px';"></lido-text>
                </lido-cell>
                <lido-image visible="true" bg-color="transparent" transform="landscape., portrait.rotate(90deg)" width="landscape.8%,portrait." height="landscape.20%, portrait.5%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/reordertemp/arrow.png"></lido-image>
                <lido-cell show-speak-icon="true" visible="true" layout="col" bg-color="white" width="landscape.15%, portrait.48%" height="landscape.85%, portrait.17%" value="${t.option3.toLowerCase()}" type="slide" onTouch="" border-radius="6px" onEntry="this.border='2px solid #CACACA'; this.paddingTop='50px';">
                    <lido-cell visible="true" layout="pos" width="48px" height="48px" z="1">
                        <lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/reordertemp/Reorder%20button.png"></lido-image>
                    </lido-cell>
                    ${t.option3Img===""||t.option3Img.length<=0?"":`<lido-image visible="true" width="landscape., portrait.100%" src="${t.option3Img}"></lido-image>`}
                    
                    <lido-text visible="true" string="${t.option3}" audio="${t.option3Audio}" font-size="24px" onEntry="this.fontWeight='800'; this.textAlign='left'; this.lineHeight='26px';"></lido-text>
                </lido-cell>
                <lido-image visible="true" bg-color="transparent" transform="landscape., portrait.rotate(90deg)" width="landscape.8%,portrait." height="landscape.20%, portrait.5%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/reordertemp/arrow.png" margin="landscape.0 0 100px 0, portrait.0 0 0 100px"></lido-image>
                <lido-cell show-speak-icon="true" visible="true" layout="col" bg-color="white" width="landscape.15%, portrait.48%" height="landscape.85%, portrait.17%" value="${t.option4.toLowerCase()}" type="slide" onTouch="" border-radius="6px" onEntry="this.border='2px solid #CACACA'; this.paddingTop='50px';">
                    <lido-cell visible="true" layout="pos" width="48px" height="48px" z="1">
                        <lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/reordertemp/Reorder%20button.png"></lido-image>
                    </lido-cell>
                    ${t.option4Img===""||t.option4Img.length<=0?"":`<lido-image visible="true" width="landscape., portrait.100%" src="${t.option4Img}"></lido-image>`}
                    
                    <lido-text visible="true" string="${t.option4}" audio="${t.option4Audio}" font-size="24px" onEntry="this.fontWeight='800'; this.textAlign='left'; this.lineHeight='26px';"></lido-text>
                </lido-cell>
            </lido-cell>
        </lido-cell>
    </lido-cell>
</lido-container>
  </main>`}var o,i,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    question: 'Reorder the following shapes from the fewest flat faces to the most flat faces.',
    questionImg: '',
    questionAudio: '',
    option1: 'Sphere',
    option1Img: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/reordertemp/sphere.png',
    option1Audio: '',
    option2: 'Cube',
    option2Img: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/reordertemp/cube.png',
    option2Audio: '',
    option3: 'Cylinder',
    option3Img: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/reordertemp/cylinder.png',
    option3Audio: '',
    option4: 'Cone',
    option4Img: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/reordertemp/cone.png',
    option4Audio: '',
    correctObjective: 'sphere,cone,cylinder,cube'
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const c=["QuestionAndOptions"];export{e as QuestionAndOptions,c as __namedExportsOrder,d as default};
