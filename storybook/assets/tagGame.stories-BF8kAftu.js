import"./lit-element-DRlmAcsz.js";import{b as n}from"./lit-html-s0HVm7S4.js";const c={title:"Templates/tagGame",argTypes:{question:{control:"text"},option1:{control:"text"},option2:{control:"text"},option3:{control:"text"},option4:{control:"text"},correct1:{control:"text"},correct2:{control:"text"},correct3:{control:"text"},correct4:{control:"text"}}},e={args:{option1:"Face",option2:"Forehead",option3:"chin",option4:"cheek",correct1:"Face",correct2:"Forehead",correct3:"chin",correct4:"cheek"},render:t=>{const r=l(t);return n`<lido-home .xmlData="${r}"></lido-home>`}};function l(t){return`<main>
<lido-container id="lido-container" value="maincontainer" objective="${t.correct1},${t.correct2},${t.correct3},${t.correct4}" aria-label="This is a multiple-option question. Select one option from the list." x="0" y="0" z="0" bg-color="transparent" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/tag/Spring.png" visible="true" audio="background1.mp3" onTouch="" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2000;pos1.animation='placeToLeft 2.5s linear';this.sleep='2000';" onEntry="" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="true" is-allow-only-correct="true">
        <lido-cell id="pos1" layout="landscape.row, portrait.col" height="100%" width="100%" visible="true" bg-color="transparent">
            <lido-cell layout="landscape.col, portrait.row" id="pos2" disable-edit="true" value="pos2" margin="landscape.0% 4% 41% -3%, portrait.2% 69% 0% 0%" height="landscape.56%, portrait.28%" width="landscape.28%, portrait.38%" x="landscape.-11%, portrait.-5%" y="landscape.-6%, portrait.-39%" aria-hidden="true" z="5" bg-color="transparent" visible="true" onEntry="this.animation='leftToPlace 2.5s linear';">
                <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
                </lido-avatar>
            </lido-cell>
            <lido-cell id="pos3" layout="landscape.col, portrait.row" disable-edit="true" value="pos" aria-hidden="true" x="0" y="0" z="0" bg-color="transparent" type="" visible="true" audio="" onTouch="" onCorrect="" width="100%" height="100%" onEntry="">
                <lido-cell id="pos4" layout="pos" disable-edit="true" value="pos" aria-hidden="true" x="0" y="0" z="0" bg-color="transparent" type="" visible="true" audio="" onTouch="" width="100%" height="100%" onEntry="this.animation='rightToPlace 2.5s linear'; this.sleep='2000'">
                    <lido-image width="landscape.87%, portrait.138%" height="landscape.137%, portrait.51%" y="landscape.-16%, portrait.32%" x="landscape.0%, portrait.-23%" custom-style=".redBg{background-color: red !important;} .greenBg{background-color: green !important; color: white !important;}" id="image1" disable-edit="true" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/tag/truck.png" onEntry="">
                    </lido-image>
                    <lido-image width="landscape.42%, portrait.51%" height="landscape.45%, portrait.23%" y="landscape.23%, portrait.43%" x="landscape.30%, portrait.34%" z="2" id="image2" disable-edit="true" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/tag/face.png" onEntry="">
                    </lido-image>
                    <lido-text id="text1" visible="true" width="landscape.16%, portrait.25%" height="landscape.9%, portrait.6%" z="3" x="landscape.43%, portrait.46%" y="landscape.23%, portrait.41%" type="drop" value="${t.option1}" isAllowOnlyOneDrop="true" onEntry="this.border='5px dashed black'" bg-color="#fbfbfbcf"></lido-text>
                    <lido-text id="text2" visible="true" width="landscape.16%, portrait.25%" height="landscape.9%, portrait.6%" z="3" x="landscape.59%, portrait.71%" y="landscape.33%, portrait.48%" type="drop" value="${t.option2}" isAllowOnlyOneDrop="true" onEntry="this.border='5px dashed black'" bg-color="#fbfbfbcf"></lido-text>
                    <lido-text id="text3" visible="true" width="landscape.16%, portrait.25%" height="landscape.9%, portrait.6%" z="3" x="landscape.57%, portrait.68%" y="landscape.56%, portrait.59%" type="drop" value="${t.option3}" isAllowOnlyOneDrop="true" onEntry="this.border='5px dashed black'" bg-color="#fbfbfbcf"></lido-text>
                    <lido-text id="text4" visible="true" width="landscape.16%, portrait.25%" height="landscape.9%, portrait.6%" z="3" x="landscape.28%, portrait.24%" y="landscape.54%, portrait.58%" type="drop" value="${t.option4}" isAllowOnlyOneDrop="true" onEntry="this.border='5px dashed black'" bg-color="#fbfbfbcf"></lido-text>
                </lido-cell>
            </lido-cell>
            <lido-cell id="pos5" layout="landscape.col, portrait.row" disable-edit="true" value="pos" aria-hidden="true" x="0%" y="0" z="3" bg-color="transparent" type="" visible="true" audio="" onTouch="" width="landscape.27%, portrait.100%" height="landscape.100%, portrait.27%" onCorrect="" onEntry="this.visibility='hidden'; this.sleep='2500';this.visibility='visible'">
                <lido-cell id="pos6" layout="landscape.col,portrait.row" disable-edit="true" value="pos" aria-hidden="true" x="landscape.85%, portrait.0%" y="landscape.23%, portrait.87%" z="2" bg-color="transparent" type="" visible="true" audio="" onTouch="" width="landscape.130%, portrait.102%" height="landscape.59%, portrait.42%" onCorrect="" onEntry="this.align-content='center'; this.gap='2%'">
                    <lido-text id="text5" tab-index="1" height="landscape.16%, portrait.98%" width="landscape.76%, portrait.27%" type="drag" font="'Baloo Bhai 2'" visible="true" fontColor="black" font-size="50px" value="${t.option1}" string="${t.option1}" onTouch="this.speak='true'" bg-color="#DFF2F2" onEntry=" this.fontWeight='400'; this.boaderRadius='2px"></lido-text>
                    <lido-text id="text6" tab-index="2" height="landscape.16%, portrait.98%" width="landscape.76%, portrait.27%" type="drag" font="'Baloo Bhai 2'" visible="true" font-size="50px" value="${t.option2}" string="${t.option2}" onTouch="this.speak='true'" bg-color="#DFF2F2" onEntry=" this.fontWeight='400'; this.boaderRadius='2px'"></lido-text>
                    <lido-text id="text7" tab-index="3" height="landscape.16%, portrait.98%" width="landscape.76%, portrait.27%" type="drag" font="'Baloo Bhai 2'" visible="true" font-size="50px" value="${t.option3}" string="${t.option3}" onTouch="this.speak='true'" bg-color="#DFF2F2" onEntry=" this.fontWeight='400'; this.boaderRadius='2px'"></lido-text>
                    <lido-text id="text8" tab-index="4" height="landscape.16%, portrait.98%" width="landscape.76%, portrait.27%" type="drag" font="'Baloo Bhai 2'" visible="true" font-size="50px" value="${t.option4}" string="${t.option4}" onTouch="this.speak='true'" bg-color="#DFF2F2" onEntry=" this.fontWeight='400'; this.boaderRadius='2px'"></lido-text>
                </lido-cell>
            </lido-cell>
        </lido-cell>
    </lido-container> 
</main>`}var o,i,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    option1: 'Face',
    option2: 'Forehead',
    option3: 'chin',
    option4: 'cheek',
    correct1: 'Face',
    correct2: 'Forehead',
    correct3: 'chin',
    correct4: 'cheek'
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const d=["QuestionAndOptions"];export{e as QuestionAndOptions,d as __namedExportsOrder,c as default};
