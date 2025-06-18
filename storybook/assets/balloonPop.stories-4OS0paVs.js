import"./lit-element-BxxbMms4.js";import{x as n}from"./lit-html-DLYuhZ0i.js";const p={title:"Templates/BalloonPop",argTypes:{Increment:{control:"text"},Decrement:{control:"text"},cells:{control:{type:"object"},description:"Array of balloon cells with value and filter"}}},l={args:{Increment:"+10",Decrement:"-10",cells:[{value:"A",filter:"violet"},{value:"B",filter:"red"},{value:"A",filter:"blue"},{value:"B",filter:"blue"},{value:"B",filter:"yellow"},{value:"A",filter:"grey"},{value:"A",filter:"white"}]},render:e=>{const t=s(e);return n`<lido-home .xmlData="${t}"></lido-home>`}};function s(e){const t=e.cells.map(i=>`
    <lido-cell visible="true" layout="col" width="10%" height="10%" bgColor="transparent" value="${i.value}">
      <lido-image visible="true"
        src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/float/balloon.png"
        width="200px" filter="${i.filter}">
      </lido-image>
      <lido-text visible="true"
        string="${i.value}" bgColor="transparent" font="'Baloo Bhai 2'" font-size="40px"
        x="80px" y="50px" onEntry="this.position='absolute';">
      </lido-text>
    </lido-cell>
  `).join("");return`<main>
    <lido-container id="lido-container" tabIndex="1" visible="true" objective="A"
      onCorrect="lido-slide-fill.fill-slide='${e.Increment}'; lido-avatar.avatarAnimate='Success'; this.sleep='2000';"
      onInCorrect="lido-slide-fill.fill-slide='${e.Decrement}'; lido-avatar.avatarAnimate='Fail'; this.sleep='2000';"
      isContinueOnCorrect="true" showCheck="true" bgColor="black">

      <!-- Chimple Avatar -->
      <lido-cell layout="pos" id="pos1" disableEdit="true" value="pos2" height="305px" width="227px" x="-50px" y="500px" ariaHidden="true" z="1" bgColor="transparent" visible="true">
        <lido-avatar id="lido-avatar" disableEdit="true" visible="true" height="462px" width="356px"
          src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv"
          altText="{chimpleCharacterRive}">
        </lido-avatar>
      </lido-cell>

      <!-- Beeker -->
      <lido-cell visible="true" layout="pos" width="150px" z="1" x="50px" y="70px">
        <lido-slide-fill id="lido-slide-fill" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/float/balloonBeeker.svg"
          width="100%" fill="0" fillDirection="vertical">
        </lido-slide-fill>
      </lido-cell>

      <!-- Float Area -->
      <lido-float visible="true" width="100%" height="100%" bgColor="transparent">
        ${t}
      </lido-float>

    </lido-container>
  </main>`}var a,r,o;l.parameters={...l.parameters,docs:{...(a=l.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    Increment: '+10',
    Decrement: '-10',
    cells: [{
      value: 'A',
      filter: 'violet'
    }, {
      value: 'B',
      filter: 'red'
    }, {
      value: 'A',
      filter: 'blue'
    }, {
      value: 'B',
      filter: 'blue'
    }, {
      value: 'B',
      filter: 'yellow'
    }, {
      value: 'A',
      filter: 'grey'
    }, {
      value: 'A',
      filter: 'white'
    }]
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(o=(r=l.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const u=["QuestionAndOptions"];export{l as QuestionAndOptions,u as __namedExportsOrder,p as default};
