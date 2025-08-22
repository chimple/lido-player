import{x as d}from"./lit-html-DLYuhZ0i.js";const s={title:"Templates/PictureMeaningCocos"},e={args:{drag1:"Uma alimentação saudável é essencial.",drag2:"Devemos evitar contato com vírus.",drag3:"O carro da dona violeta é amarelo.",drop1:"Uma alimentação saudável é essencial.",drop2:"Devemos evitar contato com vírus.",drop3:"O carro da dona violeta é amarelo."},render:t=>{const r=l(t);return d`<lido-home .xmlData="${r}}"></lido-home>`}};function l(t){return`<main>	
  <lido-container id="lido-container" is-allow-only-correct="true" objective="${t.drop1},${t.drop2},${t.drop3}" visible="true" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/Sky.png" dropAttr="EnableAnimation">
                <!-- Chimple Avatar -->
        <lido-cell layout="pos" id="pos1" disableEdit="true" value="pos2" height="300px" width="300px" x="landscape.870px,portrait.300px" y="landscape.560px,portrait.1400px" ariaHidden="true" bgColor="transparent" visible="true"  onEntry="">
                <lido-avatar id="lido-avatar" disableEdit="true" visible="true"  height="100%"  width="100%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" altText="{chimpleCharacterRive}">
                </lido-avatar>
        </lido-cell>
        <lido-cell visible="true" layout="row" width="landscape.90%, portrait.100%" height="100%" bg-color="transparent" onEntry="this.justifyContent='space-between';">
            <lido-cell visible="true" layout="col" width="landscape.45%, portrait.60%" height="90%" bg-color="transparent">
                <lido-text visible="true" id="drag1" width="landscape.700px, portrait.470px" tab-index="1" audio="" string="${t.drag1}" value="${t.drag1}" font-size="landscape.72px, portrait.62px" font-color="black" onEntry="this.fontWeight='500'; this.lineHeight='80px';" border-radius="16px" bg-color="white" type="drag" padding="10px"></lido-text>
                <lido-text visible="true" id="drag2" width="landscape.700px, portrait.470px" tab-index="2" audio="" string="${t.drag2}" value="${t.drag2}" font-size="landscape.72px, portrait.62px" font-color="black" onEntry="this.fontWeight='500'; this.lineHeight='80px';" border-radius="16px" bg-color="white" type="drag" padding="10px"></lido-text>
                <lido-text visible="true" id="drag3" width="landscape.700px, portrait.470px" tab-index="3" audio="" string="${t.drag3}" value="${t.drag3}" font-size="landscape.72px, portrait.62px" font-color="black" onEntry="this.fontWeight='500'; this.lineHeight='80px';" border-radius="16px" bg-color="white" type="drag" padding="10px"></lido-text>
            </lido-cell>
            <lido-cell visible="true" layout="col" width="landscape.30%, portrait.40%" height="90%" bg-color="transparent" onEntry="this.alignItems='end';">
                <lido-image visible="true" id="drop1" width="landscape.240px, portrait.300px" tab-index="4" audio="" height="landscape.240px, portrait.300px" type="drop" border-radius="6px" value="${t.drop1}" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/picturemeaning/hygiene%201.png" bg-color="white"></lido-image>
                <lido-image visible="true" id="drop2" width="landscape.240px, portrait.300px" tab-index="5" audio="" height="landscape.240px, portrait.300px" type="drop" border-radius="6px" value="${t.drop2}" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/picturemeaning/healthy_food.png" bg-color="white"></lido-image>
                <lido-image visible="true" id="drop3" width="landscape.240px, portrait.300px" tab-index="6" audio="" height="landscape.240px, portrait.300px" type="drop" border-radius="6px" value="${t.drop3}" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/picturemeaning/hospital_with_patients.png" bg-color="white"></lido-image>
            </lido-cell>
        </lido-cell>
    </lido-container>
  </main>`}var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    drag1: "Uma alimentação saudável é essencial.",
    drag2: "Devemos evitar contato com vírus.",
    drag3: "O carro da dona violeta é amarelo.",
    drop1: "Uma alimentação saudável é essencial.",
    drop2: "Devemos evitar contato com vírus.",
    drop3: "O carro da dona violeta é amarelo."
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}}"></lido-home>\`;
  }
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const n=["Default"];export{e as Default,n as __namedExportsOrder,s as default};
