import"./lit-element-BxxbMms4.js";import{x as n}from"./lit-html-DLYuhZ0i.js";const d={title:"Templates/Categorize",argTypes:{options:{control:"object"},category1:{control:"text"},category2:{control:"text"},category3:{control:"text"},correct1:{control:"text"},correct2:{control:"text"},correct3:{control:"text"}}},o={args:{options:["Apple","Lion","Tiger","3","Strawberry","7","Mango","10"],category1:"Fruits",category2:"Numbers",category3:"Animals",correct1:"Apple,Strawberry,Mango",correct2:"3,7,10",correct3:"Lion,Tiger"},render:t=>{const e=s(t);return n`<lido-home .xmlData="${e}"></lido-home>`}};function s(t){return`
  <main>
    <lido-container id="lido-container" tabIndex="1" value="mainContainer1" objective="${`(${t.correct1.split(",").join("|")}),(${t.correct2.split(",").join("|")}),(${t.correct3.split(",").join("|")})`}" ariaLabel="" height="100vh" width="100vw" x="0" y="0" z="0" bgColor="#FFB742" visible="true" audio="background1.mp3" onTouch="" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" showCheck="true" isContinueOnCorrect="true" isAllowOnlyCorrect="false">
        <!-- Chimple Avatar -->
      <lido-pos id="pos1" disableEdit="true" value="pos1" height="350px" width="350px" x="1430px" y="500px" ariaHidden="true" z="1" bgColor="transparent" type="" visible="true" audio="col1.mp3" onTouch="" onCorrect="" onEntry="">
        <lido-avatar id="lido-avatar" disableEdit="true" visible="true" height="350px" width="350px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" altText="{chimpleCharacterRive}">
        </lido-avatar>
        <lido-image id="image1" disableEdit="true" value="image1" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/Shadow.png" bgColor="transparent" width="186px" height="20px" x="77px" y="305px" altText="{shadowImage}">
        </lido-image>
      </lido-pos>
      <!-- Check Button -->
      <lido-pos id="pos1" disableEdit="true" value="pos1" height="70px" width="150px" x="1500px" y="105px" ariaHidden="true" z="1" bgColor="transparent" type="" visible="true" audio="col1.mp3" onTouch="" onCorrect="" onEntry="">
        <lido-text id="lido-checkButton" bgColor="#5b5bd3" width="150px" height="70px" string="Check" type="click" font="'Baloo 2', serif" font-size="30px" fontColor="white" onEntry="this.fontWeight='800'; this.addClass='lido-disable-check-button';"></lido-text>
      </lido-pos>
      <lido-row visible="true" bgColor="transparent" width="1500px" height="850px">
        <lido-col visible="true" type="optionArea" bgColor="transparent" width="300px" height="840px">
        ${t.options.map(i=>`
          <lido-text visible="true" bgColor="white" value="${i}" string="${i}" width="200px" height="80px" font="'Baloo 2', serif" font-size="30px" onEntry="this.fontWeight='800'; this.marginBottom='10px';" type="option"></lido-text>`).join("")}
        
        </lido-col>
        <lido-row visible="true" bgColor="transparent" width="1150px" height="840px">
          <lido-col id="cate1" visible="true" width="200px" height="700px" onEntry="this.border='2px solid';" bgColor="#0000005e" onTouch="this.addClass='highlight-element'; cate2.removeClass='highlight-element'; cate3.removeClass='highlight-element';">
            <lido-text visible="true" width="200px" bgColor="black" fontColor="white" string="${t.category1}" font-size="30px" font="'Baloo 2', serif" onEntry="this.fontWeight='800';"></lido-text>
            <lido-col visible="true" id="category1" tabIndex="1" width="200px" height="100%" onEntry="this.display='block'; this.overflow='auto'; this.scrollbarWidth='none';" value="${t.correct1}" bgColor="transparent" type="category">
            </lido-col>
          </lido-col>
          <lido-col id="cate2" visible="true" width="200px" height="700px" onEntry="this.border='2px solid';" bgColor="#0000005e" onTouch="this.addClass='highlight-element'; cate1.removeClass='highlight-element'; cate3.removeClass='highlight-element';">
            <lido-text visible="true" width="200px" bgColor="black" fontColor="white" string="${t.category2}" font-size="30px" font="'Baloo 2', serif" onEntry="this.fontWeight='800';"></lido-text>
            <lido-col visible="true" id="category2" tabIndex="2" width="200px" height="100%" onEntry="this.display='block'; this.overflow='auto'; this.scrollbarWidth='none';" value="${t.correct2}" bgColor="transparent" type="category"></lido-col>
          </lido-col>
          <lido-col id="cate3" visible="true" width="200px" height="700px" onEntry="this.border='2px solid';" bgColor="#0000005e" onTouch="this.addClass='highlight-element'; cate2.removeClass='highlight-element'; cate1.removeClass='highlight-element';">
            <lido-text visible="true" width="200px" bgColor="black" fontColor="white" string="${t.category3}" font-size="30px" font="'Baloo 2', serif" onEntry="this.fontWeight='800';"></lido-text>
            <lido-col visible="true" id="category3" tabIndex="3" width="200px" height="100%" onEntry="this.display='block'; this.overflow='auto'; this.scrollbarWidth='none';" value="${t.correct3}" bgColor="transparent" type="category"></lido-col>
          </lido-col>
        </lido-row>
      </lido-row>
    </lido-container>
  </main>`}var r,l,a;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    options: ["Apple", "Lion", "Tiger", "3", "Strawberry", "7", "Mango", "10"],
    category1: 'Fruits',
    category2: 'Numbers',
    category3: 'Animals',
    correct1: 'Apple,Strawberry,Mango',
    correct2: '3,7,10',
    correct3: 'Lion,Tiger'
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(a=(l=o.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const p=["QuestionAndOptions"];export{o as QuestionAndOptions,p as __namedExportsOrder,d as default};
