import"./lit-element-BxxbMms4.js";import{x as h}from"./lit-html-DLYuhZ0i.js";const u={title:"Templates/writeWord",argTypes:{traceImage1:{control:"file",name:"Trace Image URL",multiple:!0},traceImage2:{control:"file",name:"Trace Image URL",multiple:!0},traceImage3:{control:"file",name:"Trace Image URL",multiple:!0},traceMode:{control:"select",options:["noFlow","showFlow","freeTrace","blindTracing","blindFreeTrace"],name:"Trace Mode"},highlightedText:{control:"text",name:"Highlighted Text"},topDisplayImage:{control:"file",name:"Top Display Image URL",multiple:!0},bottomDisplayImage:{control:"file",name:"Bottom Display Image URL",multiple:!0},spanType:{control:"select",options:["letters","words"],name:"Text Highlight Type"}},args:{traceImage1:["https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/hindi_aa.svg"],traceImage2:["https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/hindi_aa.svg"],traceImage3:["https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/hindi_aa.svg"],traceMode:"showFlow",highlightedText:"bug",topDisplayImage:["https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/questionBg.png"],bottomDisplayImage:["https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/traceBackground.png"],spanType:"letters"}},a={args:{highlightedText:"bug",spanType:"letters"},render:e=>{const t=x(e);return h`<lido-home xml-data="${t}" xmlData="${t}"></lido-home>`},parameters:{controls:{exclude:["height","width","x","y","z","bg-Color","visible","onEntry"]},actions:{argTypesRegex:"^on[A-Z].*"}}};function x(e){const t=e.traceImage1,r=e.traceImage2,i=e.traceImage3,l=e.traceMode,n=e.highlightedText,c=e.topDisplayImage,d=e.bottomDisplayImage,g=e.spanType;return!t||!r||!i?(console.error("Trace image is missing"),""):`
        <main>
            <lido-container id="lido-container" tab-index="1" objective="writeWord" value="mainContainer1" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/Underwater.png" height="100%" width="100%" bg-color="transparent"  visible="true"   onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="this.justifyContent='space-around';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="true" after-drop="false">

                    <!-- Chimple Avatar -->
                    <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos1" height="landscape.600px, portrait.700px" width="landscape.393px, portrait.485px" x="landscape.1200px, portrait.450px" y="landscape.390px, portrait.1020px" aria-hidden="true" z="1" bg-color="transparent" visible="true"  onEntry="this.flex-shrink='0';">
                        <lido-avatar id="lido-avatar" disable-edit="true" visible="true"  height="inherit"  width="inherit" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" altText="{chimpleCharacterRive}" onEntry="">
                        </lido-avatar>
                        <lido-image id="image" disable-edit="true" value="image" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/Shadow.png" bg-color="transparent" width="inherit" height="27px" x="landscape.-7px, portrait.-7px" y="landscape.450px, portrait.540px" altText="{shadowImage}">
                        </lido-image>
                    </lido-cell>

                    <!-- text-element -->
                    <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos1" height="landscape.80px, portrait.80px" width="landscape.297px, portrait.297px" x="landscape.650px, portrait.300px" y="landscape.125px, portrait.190px" aria-hidden="true" z="1" bg-color="transparent" visible="true"  onEntry="">
                        <lido-text id="txt1" tab-index="2" span-type="${g}" show-speak-icon="true" audio="" width="297px" height="80px" display="flex" onEntry="this.text-align='center'; this.justify-content='center'; this.flex-shrink='0';" font="'Baloo Bhai 2'" font-size="96px" z="1" font-color="black" font-weight="600" color=" #000000" string="${n}" visible="true" y="landscape., portrait." bg-color="transparent">
                        </lido-text>                        
                    </lido-cell>

                    <lido-cell layout="col" visible="true" width="landscape.70%, portrait.70%" height="landscape.84%, portrait.60%" bg-color="transparent" margin="landscape.-35px 0px -35px 0px, portrait.-400px 0px -40px 0px" onEntry="this.padding='4px 0px 16px 0px';">
                        <lido-image visible="true" src="${c}" z="1" width="landscape.570px, portrait.570px" height="landscape.225px, portrait.225px" onEntry="this.flex-shrink='0';" altText="{image1}">
                        </lido-image>

                        <lido-image visible="true" src="${d}" z="1" width="landscape.574px, portrait.760px" height="landscape.574px, portrait.760px" onEntry="this.flex-shrink='0';" altText="{image1}">
                        </lido-image>
                    </lido-cell>

                    <!-- trace element -->
                    <lido-cell layout="pos" id="pos2" disable-edit="true" value="pos2" height="landscape.500px, portrait.500px" width="landscape.550px, portrait.550px" x="landscape.510px, portrait.75px" y="landscape.305px, portrait.475px" aria-hidden="true" z="1" bg-color="transparent" visible="true"  onEntry="trace1.visibility='visible'; this.flex-shrink='0';">
                        <lido-trace id="trace1" show-speak-icon="true" audio="" animationTrace="true" highlightTextId="txt1" tab-index="3" value="a" visible="true" svg-source="${t}; ${r}; ${i}" onCorrect="" mode="${l}" z="1" x="25px" y="25px" width="landscape.500px, portrait.675px" height="landscape.500px, portrait.500px" altText="{backgroundImage}">
                        </lido-trace>
                    </lido-cell>
            </lido-container>
        </main>
    `}var o,s,p;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    highlightedText: "bug",
    spanType: "letters"
  },
  render: (args: WriteWordArgs) => {
    const xml = getContainerXml(args);
    return html\`<lido-home xml-data="\${xml}" xmlData="\${xml}"></lido-home>\`;
  },
  parameters: {
    controls: {
      exclude: ['height', 'width', 'x', 'y', 'z', 'bg-Color', 'visible', 'onEntry']
    },
    actions: {
      argTypesRegex: '^on[A-Z].*'
    }
  }
}`,...(p=(s=a.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const y=["WriteWord"];export{a as WriteWord,y as __namedExportsOrder,u as default};
