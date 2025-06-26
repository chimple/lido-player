import"./lit-element-BxxbMms4.js";import{x as d}from"./lit-html-DLYuhZ0i.js";const c="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/Sky.png",h="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/Shadow.png",x="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv",u={title:"Templates/WriteCard",argTypes:{backgroundImage:{control:"file",name:"Background Image URL",multiple:!1},avtarImgFile:{control:"file",name:"Avatar Image URL",multiple:!1},shadowImage:{control:"file",name:"Shadow Image URL",multiple:!1},traceImgFile:{control:"file",name:"Trace Image URL",multiple:!0},mode:{control:"select",options:["noFlow","showFlow","freeTrace","blindTracing","blindFreeTrace"],name:"Trace Mode"},flashCardImage:{control:"file",name:"Flash Card Image URL",multiple:!0},frontSlot:{control:"select",options:["front","back"],name:"Flash Card Front Slot"},backSlot:{control:"select",options:["front","back"],name:"Flash Card Back Slot"}},args:{backgroundImage:c,avtarImgFile:x,shadowImage:h,traceImgFile:["https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/hindi_aa.svg"],mode:"showFlow",flashCardImage:["https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/flash-card/Unicorn.png"],frontSlot:"front",backSlot:"back"}},e={args:{frontSlot:"front",backSlot:"back"},render:t=>{const a=g(t);return d`<lido-home xml-data="${a}" xmlData="${a}"></lido-home>`}};function g(t){const a=t.traceImgFile[0],n=t.mode,r=t.flashCardImage[0],s=t.frontSlot,p=t.backSlot;return!a||!r?(console.error("Trace image or flash card image is missing"),""):`
        <main>

            <lido-container id="lido-container"  tabIndex="1"  value="mainContainer1" bgImage="${t.backgroundImage}" objective="" height="100%" width="100%" bgColor="transparent"  visible="true"   onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="this.justifyContent='space-around';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" showCheck="false" isContinueOnCorrect="true" afterDrop="false">

                    <!-- Chimple Avatar -->
                    <lido-cell layout="pos" id="pos1" disableEdit="true" value="pos1" height="landscape.393px, portrait.447px" width="landscape.292px, portrait.332px" x="landscape.-5px, portrait.600px" y="landscape.500px, portrait.1150px" ariaHidden="true" z="1" bgColor="transparent" visible="true"  onEntry="this.flex-shrink='0';">
                        <lido-avatar id="lido-avatar" disableEdit="true" visible="true"  height="inherit"  width="inherit" src="${t.avtarImgFile}" altText="{chimpleCharacterRive}" onEntry="">
                        </lido-avatar>
                        <lido-image id="image" disableEdit="true" value="image" visible="true" src="${t.shadowImage}" bgColor="transparent" width="inherit" height="20px" x="landscape.7px, portrait.5px" y="landscape.305px, portrait.365px" altText="{shadowImage}">
                        </lido-image>
                    </lido-cell>

                    <!-- parent cell -->
                    <lido-cell layout="landscape.row, portrait.col" visible="true" width="100%" height="100%" bgColor="transparent">

                        <lido-cell layout="col" visible="true" width="landscpae.27.5% , portrait.100%" height="landscpae.100% , portrait.27.5%" bgColor="transparent">
                        </lido-cell>

                        <lido-cell layout="col" visible="true" width="landscape.725px, portrait.725px"  height="landscape.725px, portrait.725px" bgColor="white"  onEntry="this.border-radius='6px'; this.flex-shrink='0';">
                            <lido-trace id="image2" tabIndex="2" value="a" visible="true" svgSource='${a}' mode="${n}" z="1" x="" y="" width="700px" height="700px" onEntry="" altText="{backgroundImage}">
                            </lido-trace>
                        </lido-cell>

                        <lido-cell layout="col" visible="true" width="landscpae.27.5% , portrait.100%" height="landscpae.100% , portrait.27.5%" bgColor="transparent">
                        </lido-cell>
                    </lido-cell>

            </lido-container>

            

            <lido-container id="lido-container" tabIndex="1"  value="mainContainer1" bgImage="${t.backgroundImage}" objective="" height="1600px" width="900px" bgColor="transparent"  visible="true"   onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="this.justifyContent='space-around';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" showCheck="false" isContinueOnCorrect="true" afterDrop="false">

                <!-- Chimple Avatar -->
                <lido-cell layout="pos" id="pos1" disableEdit="true" value="pos1" height="landscape.393px, portrait.447px" width="landscape.292px, portrait.332px" x="landscape.-5px, portrait.575px" y="landscape.475px, portrait.1190px" ariaHidden="true" z="1" bgColor="transparent" visible="true"  onEntry="this.flex-shrink='0';">
                    <lido-avatar id="lido-avatar" disableEdit="true" visible="true"  height="inherit"  width="inherit" src="${t.avtarImgFile}" altText="{chimpleCharacterRive}" onEntry="">
                    </lido-avatar>
                    <lido-image id="image" disableEdit="true" value="image" visible="true" src="${t.shadowImage}" bgColor="transparent" width="inherit" height="20px" x="landscape.7px, portrait.5px" y="landscape.305px, portrait.365px" altText="{shadowImage}">
                    </lido-image>
                </lido-cell>

                <!-- flash-card element -->
                <lido-row visible="true" width="landscape.594px, portrait.754px" onEntry="" height="landscape.725px, portrait.925px" y="landscape.340px, portrait.300px" x="landscape.,portrait.520px" direction="landscape.row, portrait.column" bgColor="transparent">
                    <lido-flash-card x="50" y="100" width="landscape.594px, portrait.754px" height="landscape.725px, portrait.925px" bgColor="transparent" onEntry="this.border-radius='32px';">
                        <lido-col id="col1" slot="${s}" disableEdit="true" visible="true" width="landscape.594px, portrait.754px" height="landscape.695px, portrait.895px" bgColor="white" type="" tabIndex="2" dropAttr="diagonal"  onEntry="this.border-radius=32px; this.padding='2px 8px 16px 8px';" y="landscape.,portrait." >
                            <lido-image visible="true" src="${r}" z="1" width="landscape.578px, portrait.738px" height="landscape.578px, portrait.738px" onEntry="this.flex-shrink='0';" borderRadius="24px 24px 6px 6px" altText="{image1}">
                            </lido-image>
                            <lido-text width="371px" height="80px" display="flex" onEntry="this.text-align='center'; this.flex-direction='cloumn'; this.justify-content='center'; this.flex-shrink='0';" font="'Baloo Bhai 2'" fontSize="64px" z="1" fontColor="black" fontWeight="500" color="#303030" string="Unicorn" visible="true" y="landscape.15px, portrait.15px" bgColor="white">
                            </lido-text>
                        </lido-col>
                        <lido-col id="col2" slot="${p}" disableEdit="true" visible="true"  width="landscape.594px, portrait.754px" height="landscape.695px, portrait.895px" bgColor="white" type="" tabIndex="2" dropAttr="diagonal" onEntry="this.border-radius=32px; this.padding='2px 8px 16px 8px';" y="landscape.,portrait.">
                            <lido-text id="col2" height="80px" width="371px" display="flex" onEntry="this.text-align='center'; this.flex-direction='cloumn'; this.justify-content='center'; this.flex-shrink='0';" font="'Baloo Bhai 2'" fontSize="84px" z="1" fontColor="black" fontWeight="500" color="#000000" string="Unicorn" visible="true" y="landscape.35px, portrait.15px" bgColor="white">
                            </lido-text>
                        </lido-col>
                    </lido-flash-card>
                </lido-row>

            </lido-container>

        </main>
    `}var i,o,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    frontSlot: "front",
    backSlot: "back"
  },
  render: (args: WriteCardArgs) => {
    const xml = getContainerXml(args);
    return html\`<lido-home xml-data="\${xml}" xmlData="\${xml}"></lido-home>\`;
  }
}`,...(l=(o=e.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const f=["WriteCard"];export{e as WriteCard,f as __namedExportsOrder,u as default};
