import"./lit-element-DRlmAcsz.js";import{b as s}from"./lit-html-s0HVm7S4.js";const h={title:"Templates/MakeSentence",argTypes:{options:{control:"object"},Answer:{control:"text"}}},i={args:{options:["postponed","has","The","game","been","indefinitely"],Answer:"The game has been indefinitely postponed"},render:e=>{const o=l(e);return s`<lido-home .xmlData="${o}"></lido-home>`}};function l(e){return`<main>
        <lido-container id="lido-container" objective="${e.Answer.split(" ").map(t=>`${t}`).join(",")}" tab-index="1" visible="true" bg-color="#B1BEFD" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" is-continue-on-correct="false" show-check="true">
      <!-- Chimple Avatar -->
      <lido-pos id="pos1" disable-edit="true" value="pos1" height="350px" width="350px" x="1170px" y="105px" aria-hidden="true" z="1" bg-color="transparent" type="" visible="true" audio="col1.mp3" onTouch="" onCorrect="" onEntry="">
        <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="350px" width="350px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
        </lido-avatar>
        <lido-image id="image1" disable-edit="true" value="image1" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/Shadow.png" bg-color="transparent" width="186px" height="20px" x="77px" y="305px" alt-text="{shadowImage}">
        </lido-image>
      </lido-pos>

      <!-- Check Button -->
      <lido-pos id="pos1" disable-edit="true" value="pos1" height="70px" width="150px" x="1500px" y="105px" aria-hidden="true" z="1" bg-color="transparent" type="" visible="true" audio="col1.mp3" onTouch="" onCorrect="" onEntry="">
        <lido-text id="lido-checkButton" bg-color="#5b5bd3" width="150px" height="70px" string="Check" type="click" font-family="'Baloo 2', serif" font-size="30px" font-color="white" onEntry="this.fontWeight='800'; this.addClass='lido-disable-check-button';"></lido-text>
      </lido-pos>

      <lido-text visible="true" string="${e.Answer}" value="${e.Answer}" onEntry="this.padding='10px 30px'; this.fontWeight='800'; this.boxShadow='unset';" bg-color="transparent" font-family="'Baloo 2', serif" font-size="40px"></lido-text>
      <lido-col visible="true" bg-color="white" height="750px" width="1300px" onEntry="this.gap='30px';">
        <lido-wrap visible="true" height="280px" width="800px" type="blank" bg-color="#efbbef" flex="true" onEntry="this.padding='30px'; this.borderRadius='20px';"	>
        </lido-wrap>
        <lido-wrap visible="true" height="280px" width="800px" type="blank" bg-color="grey" onEntry="this.padding='30px'; this.borderRadius='20px'; this.gridTemplateColumns='auto auto auto'; this.alignContent='space-around'; this.justifyItems='center';">
          ${e.options.map(t=>`
            <lido-text visible="true" type="word" width="fit-content" height="fit-content" string="${t}" value="${t}" onEntry="this.padding='10px 30px'; this.fontWeight='800';" font-family="'Baloo 2', serif" font-size="30px"></lido-text>
            `).join("")}
        </lido-wrap>
        <!-- <lido-col visible="true" height="400px" width="1000px" bg-color="grey">
          <lido-row visible="true" width="800px" >
            
            
          </lido-row>
          <lido-row visible="true" width="800px">
            
          </lido-row>
        </lido-col> -->
      </lido-col>

    </lido-container>
  </main>`}var n,r,a;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    options: ['postponed', 'has', 'The', 'game', 'been', 'indefinitely'],
    Answer: 'The game has been indefinitely postponed'
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(a=(r=i.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const c=["QuestionAndOptions"];export{i as QuestionAndOptions,c as __namedExportsOrder,h as default};
