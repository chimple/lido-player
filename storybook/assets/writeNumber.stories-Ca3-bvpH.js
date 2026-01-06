import"./lit-element-BxxbMms4.js";import{x as u}from"./lit-html-DLYuhZ0i.js";const k={title:"Templates/writeNumber",argTypes:{traceImage1:{control:"file",name:"Trace Image 1 URL",multiple:!0},traceImage2:{control:"file",name:"Trace Image 2 URL",multiple:!0},traceMode:{control:"select",options:["noFlow","showFlow","freeTrace","blindTracing","blindFreeTrace"],name:"Trace Mode"},highlightedText:{control:"text",name:"Highlighted Text"},textDisplayImage:{control:"file",name:"Top Display Image URL",multiple:!0},spanType:{control:"select",options:["letters","words"],name:"Text Highlight Type"},stars:{control:"number",name:"Number of Stars",min:0,max:10,step:1},isAllowOnlyCorrect:{control:"boolean",name:"isAllowOnlyCorrect"}},args:{traceImage1:["https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/svgs/Numbers/1.svg"],traceImage2:["https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/svgs/Numbers/0.svg"],traceMode:"showFlow",highlightedText:"bug",textDisplayImage:["https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/top_display_image.svg"],spanType:"letters",stars:10,isAllowOnlyCorrect:!0}},a={args:{highlightedText:"10",spanType:"letters",stars:10},render:t=>{const e=y(t);return u`<lido-home xml-data="${e}" xmlData="${e}"></lido-home>`}};function y(t){const e=t.traceImage1[0],r=t.traceImage2[0],p=t.traceMode,n=t.highlightedText,c=t.textDisplayImage[0],d=t.spanType,x=t.stars,g=t.isAllowOnlyCorrect??!0;if(!e||!r)return console.error("Trace image is missing"),"";let h=7;const m=Array.from({length:x},(s,b)=>b+1).map(s=>`
        <lido-image id="star${s}" tab-index="${h++}" audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Audios/1.wav" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/fly1%201.png" width="landscape.100px, portrait.140px" visible="true" height="landscape.75px, portrait.92px">
        </lido-image>
      `).join("");return`
        <main>
            <lido-container id="lido-container" objective="writeNumber" tab-index="1"  value="mainContainer1" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/background-images/Write%20number.svg" height="100%" width="100%" bg-color="transparent"  visible="true" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="this.justifyContent='space-around';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" is-continue-on-correct="true" is-allow-only-correct="${g}">

                <!-- Chimple Avatar -->
                <lido-cell layout="pos" id="pos1" disable-edit="true" height="landscape.600px, portrait.700px" width="landscape.393px, portrait.485px" x="landscape.1279px, portrait.230px" y="landscape.375px, portrait.1035px" ariaHidden="true" z="1" bg-color="transparent" visible="true"  onEntry="this.flex-shrink='0';">
                    <lido-avatar id="lido-avatar" disable-edit="true" visible="true"  height="inherit"  width="inherit" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}" onEntry="">
                    </lido-avatar>
                    <lido-image id="image" disable-edit="true" value="image" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/Shadow.png" bg-color="transparent" width="inherit" height="27px" x="landscape.-7px, portrait.-7px" y="landscape.450px, portrait.535px" alt-text="{shadowImage}">
                    </lido-image>
                </lido-cell>


                <lido-text id="invisible-text" tab-index="2" audio="" width="297px" height="80px" display="flex" onEntry="this.speak='true';" font-size="12px" z="1" font-color="black" value="trace the number as shown by pointing the figure and count the rockets." string="trace the number as shown by pointing the figure and count the rockets." visible="false" bg-color="transparent">
                </lido-text>   

                <!-- text-element -->
                <lido-cell layout="pos" id="pos2" disable-edit="true" height="landscape.80px, portrait.80px" width="landscape.297px, portrait.297px" x="landscape.645px, portrait.300px" y="landscape.90px, portrait.105px" aria-hidden="true" z="1" bg-color="transparent" visible="true"  onEntry="this.font-weight='600';">
                    <lido-text id="txt1" tab-index="3" span-type="${d}"  audio="" width="297px" height="80px" display="flex" onEntry="this.text-align='center'; this.justify-content='center'; this.flex-shrink='0';" font="'Baloo Bhai 2'" font-size="96px" z="1" font-color="black" font-weight="600" color=" #000000" string="${n}" visible="true" y="landscape., portrait." bg-color="transparent">
                    </lido-text>                        
                </lido-cell>

                <!-- text-image -->
                <lido-cell layout="pos" id="pos2" visible="true" bg-color="transparent" onEntry="this.padding='4px 0px 16px 0px';" x="landscape.595px, portrait.255px" y="landscape.30px, portrait.45px">
                    <lido-image visible="true" src="${c}" z="1" width="landscape.375px, portrait.375px" height="landscape.175px, portrait.175px" onEntry="this.flex-shrink='0';" alt-text="image1">
                    </lido-image>
                </lido-cell>

                <!-- trace cell -->
                <lido-cell layout="pos" id="pos3" visible="true" width="landscape.740px, portrait.740px"  height="landscape.477px, portrait.477px" bg-color="transparent"  onEntry="this.border-radius='6px'; this.flex-shrink='0';" x="landscape.430px, portrait.75px" y="landscape.205px, portrait.275px">
                    <lido-trace id="image2" tab-index="4" value="10" audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Audios/1.wav; https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Audios/2.wav" visible="true" highlightTextId="txt1" svgSource="${e}; ${r}" onCorrect="star-row.highlightStarsAndDisapper='true'; lido-avatar.avatarAnimate='Success'; this.sleep='2000';"  mode="${p}" z="1" x="" y="" width="740px" height="477px" alt-text="{backgroundImage}">
                    </lido-trace>
                </lido-cell>


                <lido-cell layout="wrap" id="star-row" width="landscape.85%, portrait.80%" height="landscape.160px, portrait.200px" visible="true" bg-color="transparent" y="landscape.500px, portrait.485px" margin="landscape.560px 0px -100px 0px, portrait.95px 0px -100px 0px" onEntry="this.grid-template-columns='repeat(auto-fit, minmax(125px, auto))'; this.justify-content='center'; this.align-items='center';">
                    ${m}
                </lido-cell>

            </lido-container>
        </main>
    `}var i,o,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    highlightedText: "10",
    spanType: "letters",
    stars: 10
  },
  render: (args: WriteNumberArgs) => {
    const xml = getContainerXml(args);
    return html\`<lido-home xml-data="\${xml}" xmlData="\${xml}"></lido-home>\`;
  }
}`,...(l=(o=a.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const T=["WriteNumber"];export{a as WriteNumber,T as __namedExportsOrder,k as default};
