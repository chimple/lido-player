import"./lit-element-BxxbMms4.js";import{x as d}from"./lit-html-DLYuhZ0i.js";const m={title:"Templates/SpellDoor",argTypes:{options:{control:"object"},image:{control:"file"}}},i={args:{options:["g","P","a","n","l","y","o","d","s","u","r","#P","#l","#a","#y","#g","#r","#o","#u","#n","#d","#s"],image:["https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg"]},render:e=>{const r=c(e);return d`<lido-home .xmlData="${r}"></lido-home>`}};function c(e){const r=e.options.filter(t=>t.startsWith("#")).map(t=>t.slice(1)),l=e.options.filter(t=>!t.startsWith("#")&&!t.startsWith("@"));let a=1;const n=e.options.filter(t=>t.startsWith("#")||t.startsWith("@")).map(t=>t.slice(1)).join("");return`<main>
        <lido-container id="lido-container" is-allow-only-correct="true" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/spelldoor/Background_Spring.png" objective="${r.join(",")}" height="100%" width="100%" bg-color="transparent" visible="true" onCorrect=" lido-avatar.avatarAnimate='Success';  correctWord.speak='true';  this.sleep='2000';" onEntry="this.justifyContent='space-around';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="true" after-drop="false">
                <lido-text visible="false" id="correctWord" onEntry="this.display='none';" string="${n}" ></lido-text>
        <!-- Chimple Avatar -->
        <lido-cell layout="pos" id="pos1" value="pos2" height="305px" width="227px" x="landscape.81%, portrait.60%" y="landscape.12%, portrait.20%" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="this.animation='rightToPlace 2.5s linear';">
            <lido-avatar id="lido-avatar" visible="true" height="462px" width="356px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
            </lido-avatar>
        </lido-cell>
        <lido-cell layout="landscape.row, portrait.col" visible="true" width="landscape.75%, portrait.76%" margin="landscape.0%, portrait.71% 0 0 0" height="landscape.57%, portrait.60%" onEntry="this.borderRadius='10px'; this.padding='8px'; this.backgroundColor='transparent';">
            <!-- image -->
            <lido-image id="image0" visible="true" z="100" src="https://media.githubusercontent.com/media/chimple/bahama/master/assets/games/spelldoor/textures/hut1_image_spelling.png" width="landscape.80%, portrait.100%" height="landscape.80%, portrait.62%" >
            </lido-image>
            <lido-cell layout="pos" id="pos3" visible="true" width="landscape.60%, portrait.76%" x="landscape.31%, portrait.31%" y="landscape.0%, portrait.35%" height="landscape.54%, portrait.60%" onEntry="this.borderRadius='10px'; this.padding='8px'; this.backgroundColor='transparent'" >
                <!-- image -->
                <lido-image id="image1" visible="true"  x="landscape.6%, portrait.-3%" y="landscape.25%, portrait.29%" src="https://media.githubusercontent.com/media/chimple/bahama/master/assets/games/spelldoor/textures/shutter1_image_spelling.png" width="landscape.50%, portrait.56%" height="landscape.69%, portrait.36%" >
                </lido-image>
                <lido-image id="image2" visible="true" x="landscape.12%, portrait.-5%" y="landscape.2%, portrait.20%" src="${e.image}" width="landscape.39%, portrait.60%" height="landscape.100%, portrait.50%" >
                </lido-image>
            </lido-cell>
        </lido-cell>

        <lido-cell bg-color="transparent" layout="landscape.col, portrait.col" width="landscape.auto, portrait.100%" height="landscape.43%, portrait.50%" onEntry="this.animation='bottomToPlace 1.5s linear'; this.align-items='center'; this.justify-content='space-between';" margin="landscape.-72px 0px 0px 0px, portrait.-14% 0px 7%" visible="true" >
            <lido-cell  layout="landscape.row, portrait.row"  width="landscape.auto, portrait.75%"  height="landscape.43%, portrait.53%" margin="landscape.0px,portrait.0px 0px 0px 0px" child-elements-length="11"  onEntry="this.gap='13px';this.justifyContent='center'; this.gridTemplateColumns='repeat(2, 1fr)'; this.gridTemplateRows='repeat(2, 1fr)';"  visible="true">
            ${e.options.map(t=>t.startsWith("#")?`
             <lido-text id="drop${a}" drop-attr="stretch" visible="true" type="drop" tab-index="${a++}" value="${t.slice(1)}"   height="130px"  width="130px" onEntry="this.flex-shrink='0';">
              </lido-text>
               `:t.startsWith("@")?`
         <lido-text  id="text${a}" audio="" tab-index="${a++}"   height="130px"  width="130px"  visible="true"  value="${t.slice(1)}"  string="${t.slice(1)}"  font-family="'Baloo Bhai 2'"  font-color="white"   type="text" font-size="104px"   bg-color="transparent"    onEntry="this.fontWeight='800'; this.borderRadius='10px'; this.flex-shrink='0';"   margin="landscape.113px 0px 112px 0px, portrait.0px 0px 0px 0px"  border-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/phonic-tractor/box.png">
        </lido-text>
        `:"").join("")}
      </lido-cell>

            <lido-cell layout="landscape.row, portrait.row" width="landscape.auto, portrait.95%" height="landscape.43%, portrait.22%" child-elements-length="11" margin="landscape.0px,portrait.0px 25px 0px 0px" onEntry="this.gap='20px ';    this.gridTemplateColumns = 'repeat(2, 1fr)';  this.gridTemplateRows = 'repeat(2, 1fr)';" visible="true">
                 ${l.map(t=>`
          <lido-text id="option${a}" audio="" tab-index="${a++}"  height="130px" width="130px" visible="true" value="${t}" string="${t}" font-family="'Baloo Bhai 2'" font-color="white" type="drag" font-size="104px"  bg-color="transparent"  onEntry="this.fontWeight='800'; this.borderRadius='10px'; this.flex-shrink='0';" margin="landscape.150px 0px 112px 0px, portrait.0px 0px 0px 0px" border-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/phonic-tractor/box.png">
          </lido-text>
        `).join("")}
                
            </lido-cell>
        </lido-cell>
    </lido-container>
    </main>`}var o,s,p;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    options: ['g', 'P', 'a', 'n', 'l', 'y', 'o', 'd', 's', 'u', 'r', '#P', '#l', '#a', '#y', '#g', '#r', '#o', '#u', '#n', '#d', '#s'],
    image: ['https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg']
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(p=(s=i.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const x=["Options"];export{i as Options,x as __namedExportsOrder,m as default};
