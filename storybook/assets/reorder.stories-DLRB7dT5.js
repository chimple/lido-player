import"./lit-element-BxxbMms4.js";import{x as l}from"./lit-html-DLYuhZ0i.js";const d={title:"Templates/Reorder",argTypes:{PracticeMode:{control:"boolean"},question:{control:"text"},questionImg:{control:"file"},questionAudio:{control:{type:"file",accept:".mp3, .wav, .ogg, audio/*"}},option1:{control:"text"},option1Img:{control:"file"},option1Audio:{control:{type:"file",accept:".mp3, .wav, .ogg, audio/*"}},option2:{control:"text"},option2Img:{control:"file"},option2Audio:{control:{type:"file",accept:".mp3, .wav, .ogg, audio/*"}},option3:{control:"text"},option3Img:{control:"file"},option3Audio:{control:{type:"file",accept:".mp3, .wav, .ogg, audio/*"}},option4:{control:"text"},option4Img:{control:"file"},option4Audio:{control:{type:"file",accept:".mp3, .wav, .ogg, audio/*"}},correctObjective:{control:"text"}}},e={args:{PracticeMode:!1,question:"Reorder the following shapes from the fewest flat faces to the most flat faces.",questionImg:"",questionAudio:"",option1:"Sphere",option1Img:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/reordertemp/sphere.png",option1Audio:"",option2:"Cube",option2Img:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/reordertemp/cube.png",option2Audio:"",option3:"Cylinder",option3Img:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/reordertemp/cylinder.png",option3Audio:"",option4:"Cone",option4Img:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/reordertemp/cone.png",option4Audio:"",correctObjective:"sphere,cone,cylinder,cube"},render:t=>{const p=r(t);return l`<lido-home .xmlData="${p}"></lido-home>`}};function r(t){return`<main>
 <lido-container visible="true" objective="${t.correctObjective.toLowerCase()}" is-continue-on-correct="${t.PracticeMode}" show-next-button="${!t.PracticeMode}" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/phonic-tractor/bg-image.png" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" onEntry="this.sleep='1000'; this.slideAnimation='true';">

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
        <lido-text tab-index="1" show-speak-icon="true" visible="true" width="landscape.70%, portrait.62%" height="10%" string="${t.question}" audio="${t.questionAudio}" font-size="36px" onEntry=" this.padding='0px 45px';this.fontWeight='600'; " bg-color="transparent"></lido-text>

        <lido-cell visible="true" layout="landscape.col, portrait.row" flex-direction="landscape., portrait.row-reverse" align-items="landscape.center, portrait.start" width="100%" height="80%" bg-color="transparent">

            <!-- Question Image -->
      ${t.questionImg===""||t.questionImg.length<=0?"":`<lido-image visible="true" height="30%" bg-color="white" src="${t.questionImg}"></lido-image>`}
            
            <!-- Slide Elements -->
            <lido-cell visible="true" layout="landscape.row, portrait.col" width="landscape.64%, portrait.26%" height="landscape.40%, portrait.90%" bg-color="#FBCAB5" border-radius="landscape.16px 16px 0 0, portrait.0 16px 16px 0" onEntry="this.flex-shrink='0';this.padding='60px 40px';this.gap='37px';">
                <lido-cell show-speak-icon="true" visible="true" layout="col" bg-color="white" width="landscape.182px, portrait.154px" height="landscape.85%, portrait.17%" value="${t.option1.toLowerCase()}" type="slide" onTouch="" border-radius="6px" onEntry="this.flex-shrink='0';this.border='2px solid #CACACA'; this.paddingTop='50px';">
                    <lido-cell visible="true" layout="pos" width="48px" height="48px" z="1">
                        <lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/reordertemp/Reorder%20button.png"></lido-image>
                    </lido-cell>
          ${t.option1Img===""||t.option1Img.length<=0?"":`<lido-image visible="true" width="landscape., portrait.100%" src="${t.option1Img}"></lido-image>`}
                    
                    <lido-text visible="true" string="${t.option1}" audio="${t.option1Audio}" font-size="24px" onEntry="this.fontWeight='800'; this.textAlign='left'; this.lineHeight='26px';"></lido-text>
                </lido-cell>
                
                <lido-cell show-speak-icon="true" visible="true" layout="col" bg-color="white" width="landscape.182px, portrait.154px" height="landscape.85%, portrait.17%" value="${t.option2.toLowerCase()}" type="slide" onTouch="" border-radius="6px" onEntry="this.flex-shrink='0'; this.border='2px solid #CACACA'; this.paddingTop='50px';">
                    <lido-cell visible="true" layout="pos" width="48px" height="48px" z="1">
                        <lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/reordertemp/Reorder%20button.png"></lido-image>
                    </lido-cell>
                    ${t.option2Img===""||t.option2Img.length<=0?"":`<lido-image visible="true" width="landscape., portrait.100%" src="${t.option2Img}"></lido-image>`}
                    
                    <lido-text visible="true" string="${t.option2}" audio="${t.option2Audio}" font-size="24px" onEntry="this.fontWeight='800'; this.textAlign='left'; this.lineHeight='26px';"></lido-text>
                </lido-cell>
                
                <lido-cell show-speak-icon="true" visible="true" layout="col" bg-color="white" width="landscape.182px, portrait.154px" height="landscape.85%, portrait.17%" value="${t.option3.toLowerCase()}" type="slide" onTouch="" border-radius="6px" onEntry=" this.flex-shrink='0';this.border='2px solid #CACACA'; this.paddingTop='50px';">
                    <lido-cell visible="true" layout="pos" width="48px" height="48px" z="1">
                        <lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/reordertemp/Reorder%20button.png"></lido-image>
                    </lido-cell>
                    ${t.option3Img===""||t.option3Img.length<=0?"":`<lido-image visible="true" width="landscape., portrait.100%" src="${t.option3Img}"></lido-image>`}
                    
                    <lido-text visible="true" string="${t.option3}" audio="${t.option3Audio}" font-size="24px" onEntry="this.fontWeight='800'; this.textAlign='left'; this.lineHeight='26px';"></lido-text>
                </lido-cell>
                
                <lido-cell show-speak-icon="true" visible="true" layout="col" bg-color="white" width="landscape.182px, portrait.154px" height="landscape.85%, portrait.17%" value="${t.option4.toLowerCase()}" type="slide" onTouch="" border-radius="6px" onEntry="this.flex-shrink='0';this.border='2px solid #CACACA'; this.paddingTop='50px';">
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
  </main>`}var o,i,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    PracticeMode: false,
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
}`,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const c=["QuestionAndOptions"];export{e as QuestionAndOptions,c as __namedExportsOrder,d as default};
