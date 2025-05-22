import"./lit-element-BxxbMms4.js";import{x as l}from"./lit-html-DLYuhZ0i.js";const c={title:"Templates/FillInTheBlanks",argTypes:{option1:{control:"text"},option2:{control:"text"},option3:{control:"text"},option4:{control:"text"},correct1:{control:"text"},correct2:{control:"text"},correct3:{control:"text"},correct4:{control:"text"}}},e={args:{option1:"Mountains",option2:"Sunscreen",option3:"Snacks",option4:"Water Bottles",correct1:"Mountains",correct2:"Sunscreen",correct3:"Snacks",correct4:"Water Bottles"},render:t=>{const n=s(t);return l`<lido-home .xmlData="${n}"></lido-home>`}};function s(t){return`
    <lido-container id="lido-container" objective="${t.correct1},${t.correct2},${t.correct3},${t.correct4}" tabIndex="1" visible="true" bgColor="#B1BEFD" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" isContinueOnCorrect="false" showCheck="true">
    <lido-row visible="true" width="100%" font-size="60px" y="70px" onEntry="this.position='absolute'; this.display='block'; this.lineHeight='1.4';">
        <lido-text visible="true" font-size="36px" onEntry="this.display='inline';" string="Last summer, my family and I went on a trip to the " bgColor="transparent"></lido-text>
        <lido-image id="drop1" isSlice="true" disableEdit="true" tabIndex="1" visible="true" width="140px" imageSlice="30 fill" height="60px" value="${t.correct1}" z="1" type="drop" isAllowOnlyOneDrop="true" onEntry="this.display='inline-block'; this.verticalAlign='middle'; this.minWidth='80px'; this.marginRight='4px';" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/dropCard.png"></lido-image>
        <lido-text visible="true" font-size="36px" onEntry="this.display='inline';" string=". We started our journey early in the morning, packing our bags with essentials like " bgColor="transparent"></lido-text>
        <lido-image id="drop2" isSlice="true" disableEdit="true" tabIndex="2" visible="true" width="140px" imageSlice="30 fill" height="60px" value="${t.correct2}" z="1" type="drop" isAllowOnlyOneDrop="true" onEntry="this.display='inline-block'; this.verticalAlign='middle'; this.minWidth='80px'; this.marginRight='4px';" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/dropCard.png"></lido-image>
        <lido-text visible="true" font-size="36px" onEntry="this.display='inline';" string=", " bgColor="transparent"></lido-text>
        <lido-image id="drop3" isSlice="true" disableEdit="true" tabIndex="3" visible="true" width="140px" imageSlice="30 fill" height="60px" value="${t.correct3}" z="1" type="drop" isAllowOnlyOneDrop="true" onEntry="this.display='inline-block'; this.verticalAlign='middle'; this.minWidth='80px'; this.marginRight='4px';" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/dropCard.png"></lido-image>
        <lido-text visible="true" font-size="36px" onEntry="this.display='inline';" string=", and plenty " bgColor="transparent"></lido-text>
        <lido-image id="drop4" isSlice="true" disableEdit="true" tabIndex="4" visible="true" width="140px" imageSlice="30 fill" height="60px" value="${t.correct4}" z="1" type="drop" isAllowOnlyOneDrop="true" onEntry="this.display='inline-block'; this.verticalAlign='middle'; this.minWidth='80px'; this.marginRight='4px';" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/dropCard.png"></lido-image>
    </lido-row>

    <!-- OPTIONS -->
    <lido-row visible="true" onEntry="this.position='absolute';" width="100%" y="400px">
        <lido-text font="'Baloo 2', serif" fontSize="36px" z="1" fontColor="black" fontWeight="bold" color="#000000" visible="true" bgColor="transparent" onEntry="this.position='absolute';" type="drag" string="${t.option1}" x="100px" dropAttr="stretch"></lido-text>
        <lido-text font="'Baloo 2', serif" fontSize="36px" z="1" fontColor="black" fontWeight="bold" color="#000000" visible="true" bgColor="transparent" onEntry="this.position='absolute';" type="drag" string="${t.option2}" x="300px" dropAttr="stretch"></lido-text>
        <lido-text font="'Baloo 2', serif" fontSize="36px" z="1" fontColor="black" fontWeight="bold" color="#000000" visible="true" bgColor="transparent" onEntry="this.position='absolute';" type="drag" string="${t.option3}" x="500px" dropAttr="stretch"></lido-text>
        <lido-text font="'Baloo 2', serif" fontSize="36px" z="1" fontColor="black" fontWeight="bold" color="#000000" visible="true" bgColor="transparent" onEntry="this.position='absolute';" type="drag" string="${t.option4}" x="700px" dropAttr="stretch"></lido-text>
    </lido-row>
    </lido-container>
    `}var o,i,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    option1: 'Mountains',
    option2: 'Sunscreen',
    option3: 'Snacks',
    option4: 'Water Bottles',
    correct1: 'Mountains',
    correct2: 'Sunscreen',
    correct3: 'Snacks',
    correct4: 'Water Bottles'
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(r=(i=e.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const d=["FillInTheBlanksStoryDrop"];export{e as FillInTheBlanksStoryDrop,d as __namedExportsOrder,c as default};
