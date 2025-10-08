import"./lit-element-BxxbMms4.js";import{x}from"./lit-html-DLYuhZ0i.js";const b={title:"Templates/rowBlock",argTypes:{options:{control:"object"},answers:{control:"object"},colors:{control:"object",description:"Array of colors for numbers",defaultValue:["#F34D08","#81C127","#FFC805","#F55376","#5D44BD"]}}},i={args:{numbers:["970","971","972","973","@974","975","976","977","@978","979","980","981","982","@983","984","985","986","@987","988","989","990","991","992","993","@994","995","996","997","@998","999"],answers:["974","978","983","987","994","998"],dragColors:["#CF1565","#AD3184","#F55376","#81C127","#5D44BD"],numColors:["#FFE99B","#FBCAB5"]},render:e=>{const t=u(e);return x`<lido-home .xmlData="${t}"></lido-home>`}};function u(e){let t=1;const{answers:l=[],numbers:h=[]}=e,c=l.map((a,p)=>{const r=e.dragColors,o=r[Math.floor(Math.random()*r.length)];return`
            <lido-text visible="true" id="drag${t}" tab-index="${t++}" width="140px" height="86px" value="${a}" string="${a}" font-color="white" font-size="76px" font-family="Baloo Bhai 2" bg-color="${o}" border-radius="8px" onEntry="this.border='5px solid ${o}'; this.font-weight='500'; this.sleep='100';this.animation='rightToPlace 3s linear';" type="drag" margin="${p%2==0?"landscape.196px 0px 0px -52px":"landscape.-56px 28px 0px -60px"}, portrait.0px 0px 0px 0px" isAllowOnlyCorrect="true" onTouch="this.speak='true';" onCorrect="this.speak='true';" ></lido-text>
      `}).join("");return`
<main>

    <lido-container id="lido-container" visible="true" objective="${l.join(",")}" onEntry="audio12.speak='true';"
        onCorrect="lido-avatar.avatarAnimate='Success';  sentenceText.speak='true'; this.sleep='2000';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" is-continue-on-correct="true" bg-color="transparent" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RowBlocks/Sky%207.png" custom-style= ".dropping {
        border: 5px dashed #2C3836 !important;
        background-color: #6D8C87 !important;
        }" is-allow-only-correct="true">

        <!-- Audio -->
        <lido-text visible="false" id="audio12" onEntry="this.display='none';" string="Drag the missing number to its correct place and complete the number puzzle."></lido-text>
        
        <!-- Chimple Avatar -->
        <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" x="landscape.1432px,portrait.330px" y="landscape.612px, portrait.1338px" aria-hidden="true" z="9999" bg-color="transparent" visible="true" onEntry="" margin="-104px 0px 0px -54px">
                <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="404px" width="302px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
                </lido-avatar>
                <lido-image id="image1" disable-edit="true" value="image1" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/Shadow.png" bg-color="transparent" width="165px" height="30px" x="landscape.70px,portrait.125px" y="landscape.320px,portrait.400px" alt-text="{shadowImage}">
            </lido-image>
        </lido-cell>

            
        <lido-cell visible="true" layout="landscape.col, portrait.row" width="landscape.98%, portrait.860px" height="landscape.712px,portrait.1032px" padding="landscape.20px 42px, portrait.60px 10px" bg-Color="#234838" margin="landscape.90px 0px 0px 0px, portrait.-136px 0px 0px 0px" onEntry="this.animation='topToPlace 1s linear';" border-radius="10px">
            <lido-cell id="numberBlocks" visible="true" audio="" width="lanscape.102%, portrait.55%" height="landscape.40%, portrait.100%" layout="landscape.col, portrait.row" bg-color="transparent" gap="landscape.10px, portrait.20px" margin="landscape.16px -46px 0px 0px, portrait.0px 0px 0px 0px" padding="landscape.0px 0px 0px 0px, portrait.0px 0px 0px 30px">
                <!-- drop elements -->
                <lido-cell bg-color="transparent" height="landscape.32%, portrait.102%" width="landscape.103%, portrait.33%" 
                    visible="true" onEntry="this.display='flex'; this.alignItems='center'; this.justify-content='flex-start';  this.flexWrap='wrap';" margin="landscape.-214px 0px 0px 0px, portrait.40px 5px 40px -258px" layout="landscape.row,portrait.col" gap="landscape.14px, portrait.12px">
                    ${e.numbers.map((a,p)=>{const r=e.numColors,o=a.substring(1);return a.startsWith("@")?`
                    <lido-text visible="true" class="dropping" id="drop${t}" tab-index="${t++}" width="138px" height="86px" value="${o}" string="" font-color="#182A4F" font-size="76px" font-family="Baloo Bhai 2" bg-color="#6D8C87" border-radius="8px" onEntry="this.border='5px solid #2C3836'; this.speak='true';" type="drop" layout="row"></lido-text>
                    `:`
                    <lido-text visible="true" id="num${t}" tab-index="${t++}" width="140px" height="94px" value="${a}" string="${a}" font-color="#182A4F" font-size="76px" font-family="Baloo Bhai 2" bg-color="${p%2!==0?r[0]:r[1]}" border-radius="8px" onEntry="this.font-weight='500'" onTouch="this.speak='true';" margin="0px 1px 0px 0px"></lido-text>
                    `}).join("")}
                </lido-cell>
            </lido-cell>		

            <!--drag elements-->
            <lido-cell id="numberBlocks" visible="true" tab-index="32" audio="" width="landscape.90%, portrait.50%" height="landscape.50%, portrait.100%" onEntry="this.animation='rightToPlace 2.5s linear'" layout="landscape.col, portrait.col" bg-color="transparent" display="flex" flex-direction="landscape.row, portrait.col" margin="landscape.0px 0px 0px -130px, portrait.0px 0px 0px 0px" gap="landscape.0px, portrait.10px" padding="landscape.0px 0px 0px 0px, portrait.0px 0px 0px 20px">
                    ${c}				    
            </lido-cell>



        </lido-cell>
        
    </lido-container>

</main>`}var s,n,d;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    numbers: ["970", "971", "972", "973", "@974", "975", "976", "977", "@978", "979", "980", "981", "982", "@983", "984", "985", "986", "@987", "988", "989", "990", "991", "992", "993", "@994", "995", "996", "997", "@998", "999"],
    answers: ["974", "978", "983", "987", "994", "998"],
    dragColors: ['#CF1565', '#AD3184', '#F55376', '#81C127', '#5D44BD'],
    numColors: ['#FFE99B', '#FBCAB5']
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(d=(n=i.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};const y=["rowBlock"];export{y as __namedExportsOrder,b as default,i as rowBlock};
