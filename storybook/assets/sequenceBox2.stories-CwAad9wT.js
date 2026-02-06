import"./lit-element-DRlmAcsz.js";import{b as g}from"./lit-html-s0HVm7S4.js";const v={title:"Templates/SequenceBox2",argTypes:{missingNumber:{control:"text",name:"missing number"},number1:{control:"text",name:"Number 1"},number2:{control:"text",name:"Number 2"},number4:{control:"text",name:"Number 4"},options:{control:"object",name:"digits"},isAllowOnlyCorrect:{control:"boolean",name:"isAllowOnlyCorrect"}},args:{missingNumber:"555",number1:"535",number2:"545",number4:"565",options:["777","666","555","444"],isAllowOnlyCorrect:!0}},a={render:t=>{const e=h(t);return g`<lido-home xml-data="${e}" xmlData="${e}"></lido-home>`}};function h(t){const e=t.missingNumber,r=t.number1,o=t.number2,p=t.number4,d=t.options,x=t.isAllowOnlyCorrect??!0,c=d.map((i,b)=>`
        <lido-text id="drag-${i}" tab-index="${50+b}" height="landscape.130px, portrait.130px" width="landscape.225px, portrait.200px" visible="true" value="${i}" string="${i}" font-family="'Baloo Bhai 2'" font-color="black" type="drag" font-size="104px"  bg-color="#FFF4CD"  onEntry="this.fontWeight='800'; this.borderRadius='10px';" border-image="" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';"
        onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';">
        </lido-text>
    `).join(`
`);return`
    <main>
        <lido-container id="lido-container" objective="${e}" tab-index="1" show-drop-border="false" is-continue-on-correct="true" is-allow-only-correct="${x}" value="mainContainer1" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/background-images/Sequence%20box.png" height="100%" width="100%" bg-color="transparent"  visible="true" onCorrect="this.questionBoxAnimate='true'; lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="this.justifyContent='space-around';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" drop-action="infinite-drop" show-check="false">

            <!-- Chimple Avatar -->
            <lido-cell layout="pos" id="pos1" disable-edit="true" height="landscape.600px, portrait.700px" width="landscape.393px, portrait.485px" x="landscape.600px, portrait.230px" y="landscape.45px, portrait.1010px" ariaHidden="true" z="1" bgColor="transparent" visible="true"  onEntry="this.flex-shrink='0';">
                <lido-avatar id="lido-avatar" disableEdit="true" visible="true"  height="inherit"  width="inherit" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" altText="{chimpleCharacterRive}" onEntry="">
                </lido-avatar>
                <lido-image id="image" disableEdit="true" value="image" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/Shadow.png" bgColor="transparent" width="inherit" height="27px" x="landscape.-7px, portrait.-7px" y="landscape.450px, portrait.535px" altText="{shadowImage}">
                </lido-image>
            </lido-cell>

            <lido-text id="invisible-text" tab-index="2" audio="" width="297px" height="80px" display="flex" font-size="12px" z="1" font-color="black" value="fill the empty box with the missing numbers and complete the pattern." string="fill the empty box with the missing numbers and complete the pattern." visible="false" bg-color="transparent">
            </lido-text>  

            <!-- drop cells -->
            <lido-cell layout="row" aria-hidden="true" visible="true" height="landscape.45%,portrait.40%" width="landscape.85%, portrait.95%" bg-Color="transparent" margin="landscape.385px 0px -545px 0px,portrait.55px 0px -73px 0px" onEntry="this.z-index='1'; this.boxAnimationOneByOne='true';">

                <lido-cell layout="col" visible="true" type="box" height="landscape.90%,portrait.41%" width="20%" bg-Color="transparent" onEntry="this.z-index='1';">
                    <lido-image is-slice="true" bg-color="transparent" id="drop-image0" disable-edit="true" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/sequence-box/tressure_top1.png" height="landscape.150px, portrait.150px" width="landscape.315px, portrait.200px" margin="landscape.-180px 0px -525px 0px, portrait.-200px 0px -715px 0px">
                    </lido-image>
                    <lido-image is-slice="true" bg-color="transparent" id="drop-image1" disable-edit="true" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/sequence-box/tressure_bottom1.png" height="landscape.250px, portrait.200px" width="landscape.315px, portrait.200px" margin="landscape.0px 0px -145px 0px, portrait.0px 0px -275px 0px" >
                        <lido-text id="drop-1" tab-index="3" disable-edit="true" height="landscape.130px, portrait.100px" width="200px" visible="true" value="${r}" string="${r}" font-family="'Baloo Bhai 2'" font-color="#FFC805" font-size="landscape.130px, portrait.100px"  bg-color="transparent"  onEntry="this.fontWeight='800'; this.borderRadius='10px'; this.margin-top='65px'; this.margin-right='15px';">
                        </lido-text>
                    </lido-image>
                </lido-cell>
                <lido-cell layout="col" visible="true" type="box" height="landscape.90%,portrait.41%" width="20%" bg-Color="transparent" onEntry="this.z-index='1';">
                    <lido-image is-slice="true" bg-color="transparent" id="drop-image2" disable-edit="true" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/sequence-box/tressure_top1.png" height="landscape.150px, portrait.150px" width="landscape.315px, portrait.200px" margin="landscape.-180px 0px -525px 0px, portrait.-200px 0px -715px 0px" >
                    </lido-image>
                    <lido-image is-slice="true" bg-color="transparent" id="drop-image3" disable-edit="true" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/sequence-box/tressure_bottom1.png" height="landscape.250px, portrait.200px" width="landscape.315px, portrait.200px" margin="landscape.0px 0px -145px 0px, portrait.0px 0px -275px 0px" >
                        <lido-text id="drop-2" tab-index="4" disable-edit="true" height="landscape.130px, portrait.100px" width="200px" visible="true" value="${o}" string="${o}" font-family="'Baloo Bhai 2'" font-color="#FFC805" font-size="landscape.130px, portrait.100px"  bg-color="transparent"  onEntry="this.fontWeight='800'; this.borderRadius='10px'; this.margin-top='65px'; this.margin-right='15px';">
                        </lido-text>
                    </lido-image>
                </lido-cell>
                <lido-cell layout="col" visible="true" type="box" height="landscape.90%,portrait.41%" width="20%" bg-Color="transparent" onEntry="this.z-index='1';" onCorrect="this.boxAnimate='true';">
                    <lido-image is-slice="true" bg-color="transparent" id="drop-image4" disable-edit="true" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/sequence-box/tressure_top1.png" height="landscape.150px, portrait.150px" width="landscape.315px, portrait.200px" margin="landscape.-180px 0px -525px 0px, portrait.-200px 0px -715px 0px" >
                    </lido-image>
                    <lido-image is-slice="true" bg-color="transparent" id="drop-image2" disable-edit="true" tab-index="27" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/sequence-box/tressure_bottom1.png" height="landscape.250px, portrait.200px" width="landscape.315px, portrait.200px" margin="landscape.0px 0px -145px 0px, portrait.0px 0px -275px 0px" >
                        <lido-text id="drop-${e}" tab-index="${e}" disable-edit="true" height="landscape.130px, portrait.125px" width="250px" visible="true" value="${e}" string="?" font-family="'Baloo Bhai 2'" font-color="#FFC805" type="drop" font-size="landscape.130px, portrait.100px"  bg-color="transparent"  onEntry="this.fontWeight='800'; this.borderRadius='10px'; this.margin-top='65px'; this.border='1px solid white';" border-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/sequence-box/card-slot_empty.png">
                        </lido-text>
                    </lido-image>
                </lido-cell>
                <lido-cell layout="col" visible="true" type="box" height="landscape.90%,portrait.41%" width="20%" bg-Color="transparent" onEntry="this.z-index='1';">
                    <lido-image is-slice="true" bg-color="transparent" id="drop-image6" disable-edit="true" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/sequence-box/tressure_top1.png" height="landscape.150px, portrait.150px" width="landscape.315px, portrait.200px" margin="landscape.-180px 0px -525px 0px, portrait.-200px 0px -715px 0px" >
                    </lido-image>
                    <lido-image is-slice="true" bg-color="transparent" id="drop-image7" disable-edit="true" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/sequence-box/tressure_bottom1.png" height="landscape.250px, portrait.200px" width="landscape.315px, portrait.200px" margin="landscape.0px 0px -145px 0px, portrait.0px 0px -275px 0px" >
                        <lido-text id="drop-4" tab-index="6" disable-edit="true" height="landscape.130px, portrait.100px" width="200px" visible="true" value="${p}" string="${p}" font-family="'Baloo Bhai 2'" font-color="#FFC805" font-size="landscape.130px, portrait.100px"  bg-color="transparent"  onEntry="this.fontWeight='800'; this.borderRadius='10px'; this.margin-top='65px'; this.margin-right='15px';">
                        </lido-text>
                    </lido-image>
                </lido-cell>
            </lido-cell>

            <!-- answers drag cell -->
            <lido-cell layout="row" aria-hidden="true" visible="true" height="landscape.40%,portrait.20%" width="landscape.60%, portarit.90%" bg-Color="transparent" margin="landscape.530px 0px 0px 0px,portrait.-135px 0px 290px 0px" onEntry="this.z-index='1';" gap="landscape.5px, portrait.10px">
                ${c}
            </lido-cell>
        </lido-container>
    </main>
  `}var s,n,l;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: (args: SequenceBoxArgs) => {
    const xml = getContainerXml(args);
    return html\`<lido-home xml-data="\${xml}" xmlData="\${xml}"></lido-home>\`;
  }
}`,...(l=(n=a.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const y=["SequenceBox"];export{a as SequenceBox,y as __namedExportsOrder,v as default};
