import"./lit-element-BxxbMms4.js";import{x as n}from"./lit-html-DLYuhZ0i.js";const s={title:"Templates/tagGame",argTypes:{question:{control:"text"},option1:{control:"text"},option2:{control:"text"},option3:{control:"text"},option4:{control:"text"},correct1:{control:"text"},correct2:{control:"text"},correct3:{control:"text"},correct4:{control:"text"}}},e={args:{question:"Make it Alphabetical Order",option1:"Face",option2:"Forehead",option3:"chin",option4:"cheek",correct1:"Face",correct2:"Forehead",correct3:"chin",correct4:"cheek"},render:t=>{const r=l(t);return n`<lido-home .xmlData="${r}"></lido-home>`}};function l(t){return`<main>
<lido-container id="lido-container" customStyle="" tabIndex="1" value="maincontainer" objective="${t.correct1},${t.correct2},${t.correct3},${t.correct4}" ariaLabel="This is a multiple-option question. Select one option from the list." 	 x="0" y="0" z="0" bgColor="transparent" bgImage="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/tag/Spring.png" visible="true" audio="background1.mp3" onTouch="" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2000;pos1.animation='placeToLeft 2.5s linear';this.sleep='2000';" onEntry="" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" showCheck="false" isContinueOnCorrect="true" isAllowOnlyCorrect="true">
    <lido-cell id="pos1" tabIndex="2" layout="landscape.row, portrait.col" height="100%" width="100%" visible="true" bgColor="transparent">
        <lido-cell layout="landscape.col, portrait.row" id="pos2"  tabIndex="3" disableEdit="true" value="pos2" margin="landscape.0% 4% 41% -3%, portrait.2% 69% 0% 0%" height="landscape.56%, portrait.28%" width="landscape.28%, portrait.38%" x="landscape.-11%, portrait.-5%" y="landscape.-6%, portrait.-39%" ariaHidden="true" z="5" bgColor="transparent" visible="true"  onEntry="this.animation='leftToPlace 2.5s linear';">
            <lido-avatar id="lido-avatar" tabIndex="4" disableEdit="true" visible="true"  height="100%"  width="100%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" altText="{chimpleCharacterRive}">
            </lido-avatar>
        </lido-cell>
        <lido-cell id="pos3" tabIndex="5" layout="landscape.col, portrait.row" disableEdit="true" value="pos" ariaHidden="true" x="0" y="0" z="0" bgColor="transparent" type="" visible="true" audio="" onTouch="" onCorrect="" width="100%" height="100%" onEntry="">
            <lido-cell id="pos4" tabIndex="6" layout="pos" disableEdit="true" value="pos" ariaHidden="true" x="0" y="0" z="0" bgColor="transparent" type="" visible="true" audio="" onTouch="" width="100%" height="100%" onEntry="this.animation='rightToPlace 2.5s linear'; this.sleep='2000'">
                <lido-image tabIndex="7" width="landscape.87%, portrait.138%" height="landscape.137%, portrait.51%" y="landscape.-16%, portrait.32%" x="landscape.0%, portrait.-23%" customStyle=".redBg{background-color: red !important;} .greenBg{background-color: green !important; color: white !important;}" id="image1" disableEdit="true" visible="true"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/tag/truck.png" onEntry="">
                </lido-image>
                <lido-image  tabIndex="8" width="landscape.42%, portrait.51%" height="landscape.45%, portrait.23%"  y="landscape.23%, portrait.43%" x="landscape.30%, portrait.34%" z="2" id="image2" disableEdit="true" visible="true"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/tag/face.png" onEntry="">
                </lido-image>
                <lido-text id="text1" tabIndex="9" visible="true"  width="landscape.16%, portrait.25%" height="landscape.9%, portrait.6%"  z="3" x="landscape.43%, portrait.46%" y="landscape.23%, portrait.41%" type="drop" value="${t.option1}" isAllowOnlyOneDrop="true" onEntry="this.border='5px dashed black'" bgColor="#fbfbfbcf"></lido-text>
                <lido-text id="text2" tabIndex="10" visible="true"  width="landscape.16%, portrait.25%" height="landscape.9%, portrait.6%"  z="3" x="landscape.59%, portrait.71%" y="landscape.33%, portrait.48%" type="drop" value="${t.option2}" isAllowOnlyOneDrop="true" onEntry="this.border='5px dashed black'" bgColor="#fbfbfbcf"></lido-text>
                <lido-text id="text3" tabIndex="11" visible="true" width="landscape.16%, portrait.25%" height="landscape.9%, portrait.6%" z="3" x="landscape.57%, portrait.68%" y="landscape.56%, portrait.59%" type="drop" value="${t.option3}" isAllowOnlyOneDrop="true" onEntry="this.border='5px dashed black'" bgColor="#fbfbfbcf"></lido-text>
                <lido-text id="text4" tabIndex="12" visible="true"  width="landscape.16%, portrait.25%" height="landscape.9%, portrait.6%" z="3" x="landscape.28%, portrait.24%" y="landscape.54%, portrait.58%" type="drop" value="${t.option4}" isAllowOnlyOneDrop="true" onEntry="this.border='5px dashed black'" bgColor="#fbfbfbcf"></lido-text>
            </lido-cell>	
        </lido-cell> 
        <lido-cell id="pos5" tabIndex="13" layout="landscape.col, portrait.row" disableEdit="true" value="pos" ariaHidden="true" x="0%" y="0" z="3" bgColor="transparent" type="" visible="true" audio="" onTouch=""  width="landscape.27%, portrait.100%" height="landscape.100%, portrait.27%" onCorrect="" onEntry="this.visibility='hidden'; this.sleep='2500';this.visibility='visible'">
            <lido-cell id="pos6" tabIndex="14" layout="landscape.col,portrait.row" disableEdit="true" value="pos" ariaHidden="true" x="landscape.85%, portrait.0%" y="landscape.23%, portrait.87%" z="2" bgColor="transparent" type="" visible="true" audio="" onTouch=""  width="landscape.130%, portrait.102%" height="landscape.59%, portrait.42%"  onCorrect=""  onEntry="this.align-content='center'; this.gap='2%'">
            <lido-text id="text5" tabIndex="15" height="landscape.16%, portrait.98%" width="landscape.76%, portrait.27%" type="drag" font="'Baloo Bhai 2'" visible="true"  fontColor="black" font-size="50px" value="${t.option1}" string="${t.option1}" onTouch="this.speak='true'"  bgColor="#DFF2F2" onEntry=" this.fontWeight='400'; this.boaderRadius='2px"></lido-text>
            <lido-text id="text6" tabIndex="16" height="landscape.16%, portrait.98%" width="landscape.76%, portrait.27%" type="drag" font="'Baloo Bhai 2'" visible="true"  font-size="50px" value="${t.option2}" string="${t.option2}" onTouch="this.speak='true'"  bgColor="#DFF2F2" onEntry=" this.fontWeight='400'; this.boaderRadius='2px'"></lido-text>
            <lido-text id="text7" tabIndex="17" height="landscape.16%, portrait.98%" width="landscape.76%, portrait.27%" type="drag" font="'Baloo Bhai 2'" visible="true"  font-size="50px" value="${t.option3}" string="${t.option3}" onTouch="this.speak='true'" bgColor="#DFF2F2" onEntry=" this.fontWeight='400'; this.boaderRadius='2px'"></lido-text>
            <lido-text id="text8" tabIndex="18" height="landscape.16%, portrait.98%" width="landscape.76%, portrait.27%" type="drag" font="'Baloo Bhai 2'" visible="true"  font-size="50px" value="${t.option4}" string="${t.option4}cheek" onTouch="this.speak='true'"  bgColor="#DFF2F2" onEntry=" this.fontWeight='400'; this.boaderRadius='2px'"></lido-text>
        </lido-cell>
    </lido-cell>
</lido-cell>	
    
 </lido-container>
</main>`}var o,a,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    question: 'Make it Alphabetical Order',
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
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const c=["QuestionAndOptions"];export{e as QuestionAndOptions,c as __namedExportsOrder,s as default};
