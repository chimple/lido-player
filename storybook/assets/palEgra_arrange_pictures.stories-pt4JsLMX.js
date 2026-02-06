import"./lit-element-DRlmAcsz.js";import{b as n}from"./lit-html-s0HVm7S4.js";const u={title:"Templates/palEgraArrangePictures",argTypes:{options:{control:"object"},PracticeMode:{control:"boolean"}}},s={args:{question_text:"एक बिल्ली मेज के ऊपर बैठी थी।  मेज के ऊपर एक गिलास में शरबत था। बिल्ली मेज के ऊपर शरबत पीने चढ़ी। उसने शरबत मेज पर गिरा दिया। बिल्ली मेज के ऊपर शरबत पीने चढ़ी।",images:[{id:"1",src:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/PAL-EGRA/cat_playing_outside.webp"},{id:"2",src:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/PAL-EGRA/glass_on_table.webp"},{id:"3",src:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/PAL-EGRA/cat_on_table.jpg"},{id:"4",src:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/PAL-EGRA/juice_on_table_spilled.webp"},{id:"5",src:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/PAL-EGRA/juice_on_table_spilled.webp"}],PracticeMode:!1},render:t=>{const o=c(t);return n`<lido-home .xmlData="${o}"></lido-home>`}};function c(t){const o=t.images.map((e,a)=>`
    <lido-cell layout="landscape.col, portrait.col" visible="true" margin="landscape.0px,portrait.0" onEntry="" height="landscape.auto,portrait.35%" width="landscape.auto,portrait.100%" bg-color="transparent" gap="20px">
        <lido-text visible="true" id="label${a+1}" tab-index="" value="" string="${e.id}" font-family="'Baloo Bhai 2'" width="72px" height="72px" font-color="#030028" font-size="landscape.60px, portrait.100px"  bg-color="#FFF5BB" onEntry="this.fontWeight='600'; this.border-radius='100%';">
        </lido-text>
        <lido-text visible="true" id="drop${a+1}" tab-index="${11+a}" value="${e.id}" string="" font-family="'Baloo Bhai 2'" width="222px" height="222px" font-color="#030028" bg-color="#FFFFFF"  type="drop" onEntry="this.fontWeight='700'; ">
        </lido-text>
    </lido-cell>
  `).join(""),l=[...t.images].sort(()=>Math.random()-.5).map((e,a)=>`
      <lido-image  visible="true" id="drag${a+1}" value="${e.id}" bg-color="transparent" width="240px" height="240px" src="${e.src}" type="drag"></lido-image>
  `).join("");return`
<main>
<lido-container disable-speak="true" visible="true" id="lido-container" onEntry="lido-question.speak='true';" onInCorrect="lido-avatar.avatarAnimate='Fail';this.sleep='2000';" template-id="dragAndDrop"  is-allow-only-one-drop = "true" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2300';" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/PAL-EGRA/palEgraTemp6_bg.png" objective="${t.images.map(e=>e.id).join(",")}" is-continue-on-correct="${t.PracticeMode}" is-allow-only-correct="${t.PracticeMode}">
     <!-- Chimple Avatar -->
      <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.290px,portrait.378px" width="landscape.262px,portrait.382px"
       x="landscape.87%, portrait.30%" y="landscape.40%, portrait.78%" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="">
        <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
        </lido-avatar>
        <lido-image id="image" disableEdit="true" value="image" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/Shadow.png" bgColor="transparent" width="inherit" height="20px" x="landscape.-1px, portrait.-7px" y="landscape.248px, portrait.535px" altText="{shadowImage}"></lido-image>
      </lido-cell>

        <lido-cell layout="landscape.col, portrait.row" aria-hidden="true" visible="true" height="landscape.95%,portrait.150px" width="landscape.98%, portrait.80%" bg-Color="transparent" margin="landscape.102px 0px 0px 0px,portrait.20px 0px 0px 0px" onEntry="this.z-index='1'; this.justify-content='center'; this.alignItems='center';">
            <!-- question cell -->				
            <lido-text tab-index="111" visible="true" id="lido-question" width="landscape.104%, portrait.80%" height="auto" bg-color="#FFF5BB" string="${t.question_text}" border-radius="16px" onEntry="this.border='2px solid #FFB612'; this.fontWeight='700';" font-size="44px" font-color="#07004E" font-family="'Baloo Bhai 2'" padding="7px 0px 0px 0px">
            </lido-text>
          

          <!--drop cells -->
            <lido-cell layout="landscape.row, portrait.col" visible="true" margin="landscape.0px 100px 0px 0px,portrait.0" onEntry="" height="landscape.auto,portrait.35%" width="landscape.85%,portrait.100%" bg-color="transparent">		
            ${o}
            </lido-cell>


            <lido-cell layout="landscape.row, portrait.col" visible="true" margin="landscape.0px 50px 0px 0px,portrait.0" onEntry=" this.justify-content='space-evenly';" height="landscape.auto,portrait.35%" width="landscape.100%,portrait.100%" bg-color="transparent">
                ${l}
            </lido-cell>        
             
        </lido-cell>                  

</lido-container>
</main>
`}var i,r,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    question_text: 'एक बिल्ली मेज के ऊपर बैठी थी।  मेज के ऊपर एक गिलास में शरबत था। बिल्ली मेज के ऊपर शरबत पीने चढ़ी। उसने शरबत मेज पर गिरा दिया। बिल्ली मेज के ऊपर शरबत पीने चढ़ी।',
    images: [{
      id: '1',
      src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/PAL-EGRA/cat_playing_outside.webp'
    }, {
      id: '2',
      src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/PAL-EGRA/glass_on_table.webp'
    }, {
      id: '3',
      src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/PAL-EGRA/cat_on_table.jpg'
    }, {
      id: '4',
      src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/PAL-EGRA/juice_on_table_spilled.webp'
    }, {
      id: '5',
      src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/PAL-EGRA/juice_on_table_spilled.webp'
    }],
    PracticeMode: false
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(p=(r=s.parameters)==null?void 0:r.docs)==null?void 0:p.source}}};const h=["palEgraArrangePictures"];export{h as __namedExportsOrder,u as default,s as palEgraArrangePictures};
