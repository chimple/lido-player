import"./lit-element-BxxbMms4.js";import{x as r}from"./lit-html-DLYuhZ0i.js";const d={title:"Templates/DragAndDrop",argTypes:{question:{control:"text"},option1:{control:"text"},option2:{control:"text"},option3:{control:"text"},option4:{control:"text"},correct1:{control:"text"},correct2:{control:"text"},correct3:{control:"text"},correct4:{control:"text"}}},e={args:{question:"Make it Alphabetical Order",option1:"BasketBall",option2:"Character",option3:"Dance",option4:"Apple",correct1:"Apple",correct2:"BasketBall",correct3:"Character",correct4:"Dance"},render:t=>{const s=p(t);return r`<lido-home .xmlData="${s}"></lido-home>`}};function p(t){return`<main>
            <lido-container id="lido-container" tabIndex="1" value="mainContainer1" objective="${t.correct1},${t.correct2},${t.correct3},${t.correct4}" ariaLabel="" height="100vh" width="100vw" x="0" y="0" z="0" bgColor="#FFB742" visible="true" audio="background1.mp3" onTouch="" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" showCheck="false" isContinueOnCorrect="true" afterDrop="true">
                <!-- Audio Icon -->
                <lido-pos id="pos" disableEdit="true" value="pos" height="100px" width="100px" ariaHidden="true" x="0" y="0" z="2" bgColor="transparent" type="" visible="true" audio="" onTouch="" onCorrect="" onEntry="">
                    <lido-image id="play" disableEdit="true" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets//Audio%20icon.png" width="100px" height="100px" bgColor="transparent" x="35px" y="50px" onTouch="this.visibilty='hidden'; pause.visibility='visible'; question.speak='true'; option1.speak='true'; option2.speak='true'; option3.speak='true'; option4.speak='true'; option5.speak='true'; option6.speak='true'; this.visibilty='visible'; pause.visibility='hidden';">
                    </lido-image>
                    <lido-image id="pause" disableEdit="true" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets//pause.png" width="100px" height="100px" bgColor="transparent" x="35px" y="50px" onTouch="this.stop='true'; this.visibility='hidden'; play.visibility='visible';" onEntry="this.visibility='hidden';">
                    </lido-image>
                </lido-pos>
                <!-- Chimple Avatar -->
                <lido-pos id="pos1" disableEdit="true" value="pos1" height="350px" width="350px" x="landscape.1260px, portrait.265px" y="landscape.530px, portrait.835px" ariaHidden="true" z="1" bgColor="transparent" type="" visible="true" audio="col1.mp3" onTouch="" onCorrect="" onEntry="this.animation='rightToPlace 2.5s linear';">
                    <lido-avatar id="lido-avatar" disableEdit="true" visible="true" height="350px" width="350px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" altText="{chimpleCharacterRive}">
                    </lido-avatar>
                    <lido-image id="image1" disableEdit="true" value="image1" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/Shadow.png" bgColor="transparent" width="186px" height="20px" x="77px" y="305px" altText="{shadowImage}">
                    </lido-image>
                </lido-pos>
                <!-- Background -->
                <lido-pos id="pos2" disableEdit="true" value="pos2" height="900px" width="1600px" ariaHidden="true" x="0" y="0" z="0" bgColor="transparent" type="" visible="true" audio="col1.mp3" onTouch="" onCorrect="" onEntry="">
                    <lido-image id="image2" disableEdit="true" value="image2" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/backgroundImage.png" z="0" width="1600px" height="900px" onEntry="" altText="{backgroundImage}">
                    </lido-image>
                </lido-pos>
                <!-- Question -->
                <lido-pos id="question" value="pos3" visible="true" width="840px" height="135px" x="landscape.370px, portrait.30px" y="100px"  bgColor="transparent" onEntry="this.animation='topToPlace 0.5s linear';">
                    <lido-image id="image3" disableEdit="true" value="image3" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/Vector.png" z="0" width="840px" height="100%" altText="{question.image}">
                    </lido-image>
                    <lido-text id="textA" width="800px" height="100px" tabIndex="2" value="{question.id}" visible="true" string="${t.question}" font="'Baloo 2', serif" fontColor="black" font-size="40px" bgColor="transparent" onEntry="this.boxShadow='unset'; this.fontWeight='800';" y="20px" x="25px">
                    </lido-text>
                </lido-pos>
                <!-- Drop Elements -->
                <lido-pos id="pos4" disableEdit="true" value="pos4" visible="true" width="landscape.1600px, portrait.600px" height="landscape.300px, portrait.500px" bgColor="transparent" x="landscape.0, portrait.140px" y="landscape.280px, portrait.340px" z="1" onEntry="this.visibility='hidden'; this.sleep='1500'; this.visibility='visible'; this.animation='leftToPlace 0.5s linear';">
                    <!-- Drop Background -->
                    <lido-row id="row" disableEdit="true" display="landscape.flex, portrait.grid" value="row" visible="true" width="landscape.auto, portrait.597px" minLength="2" maxLength="6" childElementsLength="4" height="landscape.300px, portrait.500px" x="50%" y="50%" onEntry="this.marginBottom='70px'; this.transform='translate(-50%, -50%)'; this.gap='30px';" >
                        <lido-image id="col" isSlice="true" disableEdit="true" visible="true" height="auto" width="auto"  bgColor="transparent" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/dropBackground.png" onEntry="this.padding='51px';">
                            <lido-image id="image4" isSlice="true" disableEdit="true" tabIndex="3" visible="true" width="150px" imageSlice="30 fill" flexibleWidth="false" height="100px" value="apple" z="1" y="149px" type="drop" isAllowOnlyOneDrop="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/dropCard.png" onEntry="this.borderRadius='15px'; this.boxShadow='unset'; " >
                            </lido-image>
                        </lido-image>
                        <lido-image id="col" isSlice="true" disableEdit="true" visible="true" height="auto" width="auto"  bgColor="transparent" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/dropBackground.png" onEntry="this.padding='51px';">
                            <lido-image id="image5" isSlice="true" disableEdit="true" tabIndex="4" visible="true" width="150px" imageSlice="30 fill" flexibleWidth="false" height="100px" value="basket" z="1" y="149px" type="drop" isAllowOnlyOneDrop="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/dropCard.png" onEntry="this.borderRadius='15px'; this.boxShadow='unset'; " >
                            </lido-image>
                        </lido-image>
                        <lido-image id="col" isSlice="true" disableEdit="true" visible="true" height="auto" width="auto"  bgColor="transparent" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/dropBackground.png" onEntry="this.padding='51px';">
                            <lido-image id="image6" isSlice="true" disableEdit="true" tabIndex="5" visible="true" width="150px" imageSlice="30 fill" flexibleWidth="false" height="100px" value="character" z="1" y="149px" type="drop" isAllowOnlyOneDrop="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/dropCard.png" onEntry="this.borderRadius='15px'; this.boxShadow='unset'; " >
                            </lido-image>
                        </lido-image>
                        <lido-image id="col" isSlice="true" disableEdit="true" visible="true" height="auto" width="auto"  bgColor="transparent" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/dropBackground.png" onEntry="this.padding='51px';">
                            <lido-image id="image7" isSlice="true" disableEdit="true" tabIndex="6" visible="true" width="150px" imageSlice="30 fill" flexibleWidth="false" height="100px" value="dance" z="1" y="149px" type="drop" isAllowOnlyOneDrop="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/dropCard.png" onEntry="this.borderRadius='15px'; this.boxShadow='unset'; " >
                            </lido-image>
                        </lido-image>
                    </lido-row>
                </lido-pos>
                <!-- Drag Background -->
                <lido-pos id="pos5" disableEdit="true" value="pos5" visible="true" width="1532.89px" height="300px" x="landscape.60px, portrait.-160px" y="landscape.620px, portrait.1100px" bgColor="transparent" onEntry="this.animation='bottomToPlace 1s linear';">
                    <lido-image id="image10" disableEdit="true" value="image10" visible="true" width="landscape.1532px, portrait.1600px" height="landscape.300px, portrait.550px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/dragGroupBg.png" altText="{dragGroupBackgroundImage}">
                    </lido-image>
                </lido-pos>
                <!-- Drag Elements -->
                <lido-pos id="pos6" value="pos6" visible="true" width="landscape.1600px, portrait.900px" height="150px" bgColor="transparent" x="0" y="landscape.700px, portrait.1260px" z="1" onEntry="this.animation='bottomToPlace 1s linear';">
                    <lido-row id="row2" value="row2" display="landscape.flex, portrait.grid" visible="true" height="landscape.150px, portrait.240px" width="landscape.auto, portrait.597px" minLength="2" maxLength="6" childElementsLength="4" x="50%" y="50%" onEntry="this.gap='30px'; this.transform='translate(-50%, -50%)';">
                        <lido-text id="option1" value="${t.option1}" tabIndex="6" flexibleWidth="false" visible="true" borderImage="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/dragElementBg.png" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="150px" height="100px" string="${t.option1}" fontColor="black" font="'Baloo 2', serif" font-size="36px" z="0" type="drag">
                        </lido-text>
                        <lido-text id="option2" value="${t.option2}" tabIndex="7" flexibleWidth="false" visible="true" borderImage="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/dragElementBg.png" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="150px" height="100px" string="${t.option2}" fontColor="black" font="'Baloo 2', serif" font-size="36px" z="0" type="drag">
                        </lido-text>
                        <lido-text id="option3" value="${t.option3}" tabIndex="8" flexibleWidth="false" visible="true" borderImage="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/dragElementBg.png" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="150px" height="100px" string="${t.option3}" fontColor="black" font="'Baloo 2', serif" font-size="36px" z="0" type="drag">
                        </lido-text>
                        <lido-text id="option3" value="${t.option4}" tabIndex="9" flexibleWidth="false" visible="true" borderImage="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/dragElementBg.png" bgColor="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="150px" height="100px" string="${t.option4}" fontColor="black" font="'Baloo 2', serif" font-size="36px" z="0" type="drag">
                        </lido-text>
                    </lido-row>
                </lido-pos>
            </lido-container>
    </main>`}var i,a,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    question: "Make it Alphabetical Order",
    option1: "BasketBall",
    option2: "Character",
    option3: "Dance",
    option4: "Apple",
    correct1: "Apple",
    correct2: "BasketBall",
    correct3: "Character",
    correct4: "Dance"
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const c=["QuestionAndOptions"];export{e as QuestionAndOptions,c as __namedExportsOrder,d as default};
