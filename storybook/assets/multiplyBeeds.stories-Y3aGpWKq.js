import"./lit-element-DRlmAcsz.js";import{b}from"./lit-html-s0HVm7S4.js";const x={title:"Templates/multiplyBeeds",argTypes:{num1:{control:"number"},num2:{control:"number"}},args:{num1:9,num2:9}},l={render:t=>{const i=h(t);return b`<lido-home xml-data="${i}" xmlData="${i}"></lido-home>`}};function h(t){const i=Number((t==null?void 0:t.num1)??0),e=Number((t==null?void 0:t.num2)??0),n=Array.from({length:Math.max(0,e)},(c,a)=>a+1).join(","),p=Array.from({length:9},(c,a)=>{const r=a+1;return`
                    <lido-text visible="true" width="63px" font-size="40px" onEntry="this.fontWeight='800'; this.border='2px solid black';" bg-color="${r===e?"#f24c05":"#f2c90f"}" string="${r}" borderRadius="86px"></lido-text>
                `}).join("");return`
        <main>
        <lido-container visible="true" template-id="multiplyBeeds" objective="${n}" onCorrect="drop${e}.visibility='hidden'; drag${e}.visibility='hidden'; num1.speak='true'; num2.speak='true'; num3.speak='true'; num4.speak='true'; num5.speak='true'; lido-avatar.avatarAnimate='Success'; this.sleep='2000';" is-allow-only-correct="true" bg-image="https://db-stage.chimple.net/storage/v1/object/public/template-assets/background-images/Multiply%20beads.png" exit-button-url="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Navbar-buttons/Close.png" prev-button-url='https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Navbar-buttons/Previous.png' next-button-url='https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Navbar-buttons/Next.png' speaker-button-url='https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Navbar-buttons/NavAudio.png'>

                <lido-text id="num1" string="${i}"></lido-text>
                <lido-text id="num2" string="in to"></lido-text>
                <lido-text id="num3" string="${e}"></lido-text>
                <lido-text id="num4" string="equal"></lido-text>
                <lido-text id="num5" string="${i*e}"></lido-text>

        <!-- Chimple Avatar -->
        <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.348px,portrait.270px" width="landscape.250px,portrait.270px" x="landscape.0px, portrait.-9%" y="landscape.600px, portrait.36%" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="">
                <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
                </lido-avatar>
        </lido-cell>

        <lido-cell visible="true" height="100%" width="80%" bg-color="transparent" layout="col" onEntry="this.justifyContent='flex-end';" margin="0 0 -10px 0">
            <lido-cell visible="true" height="80px" width="90%" bg-color="transparent" layout="row" onEntry="this.justifyContent='flex-start';">
                <lido-cell visible="true" height="30px" width="60%" layout="row">
                    ${p}
                </lido-cell>
            </lido-cell>
            <lido-cell visible="true" height="600px" width="90%" bg-color="transparent" layout="row" onEntry="this.justifyContent='flex-start';">
                <lido-cell visible="true" height="100%" width="60%" bg-color="transparent" layout="row" onEntry="this.alignItems='flex-start';">
                    <lido-math-matrix id="drop0" value="1" clickable="false" visible="true" height="550px" width="1200px" cols="${i}" rows="1" border-radius="20px" type="drop" onEntry="this.visibility='visible';" onCorrect="drop1.visibility='visible'; drag1.visibility='visible'; lido-avatar.avatarAnimate='Success';"></lido-math-matrix>
                    <lido-math-matrix id="drop1" value="2" clickable="false" visible="true" height="550px" width="1200px" cols="${i}" rows="1" border-radius="20px" type="drop" onEntry="this.visibility='hidden';" onCorrect="drop2.visibility='visible'; drag2.visibility='visible'; lido-avatar.avatarAnimate='Success';"></lido-math-matrix>   
                    <lido-math-matrix id="drop2" value="3" clickable="false" visible="true" height="550px" width="1200px" cols="${i}" rows="1" border-radius="20px" type="drop" onEntry="this.visibility='hidden';" onCorrect="drop3.visibility='visible'; drag3.visibility='visible'; lido-avatar.avatarAnimate='Success';"></lido-math-matrix>   
                    <lido-math-matrix id="drop3" value="4" clickable="false" visible="true" height="550px" width="1200px" cols="${i}" rows="1" border-radius="20px" type="drop" onEntry="this.visibility='hidden';" onCorrect="drop4.visibility='visible'; drag4.visibility='visible'; lido-avatar.avatarAnimate='Success';"></lido-math-matrix>   
                    <lido-math-matrix id="drop4" value="5" clickable="false" visible="true" height="550px" width="1200px" cols="${i}" rows="1" border-radius="20px" type="drop" onEntry="this.visibility='hidden';" onCorrect="drop5.visibility='visible'; drag5.visibility='visible'; lido-avatar.avatarAnimate='Success';"></lido-math-matrix>   
                    <lido-math-matrix id="drop5" value="6" clickable="false" visible="true" height="550px" width="1200px" cols="${i}" rows="1" border-radius="20px" type="drop" onEntry="this.visibility='hidden';" onCorrect="drop6.visibility='visible'; drag6.visibility='visible'; lido-avatar.avatarAnimate='Success';"></lido-math-matrix>   
                    <lido-math-matrix id="drop6" value="7" clickable="false" visible="true" height="550px" width="1200px" cols="${i}" rows="1" border-radius="20px" type="drop" onEntry="this.visibility='hidden';" onCorrect="drop7.visibility='visible'; drag7.visibility='visible'; lido-avatar.avatarAnimate='Success';"></lido-math-matrix>   
                    <lido-math-matrix id="drop7" value="8" clickable="false" visible="true" height="550px" width="1200px" cols="${i}" rows="1" border-radius="20px" type="drop" onEntry="this.visibility='hidden';" onCorrect="drop8.visibility='visible'; drag8.visibility='visible'; lido-avatar.avatarAnimate='Success';"></lido-math-matrix>   
                    <lido-math-matrix id="drop8" value="9" clickable="false" visible="true" height="550px" width="1200px" cols="${i}" rows="1" border-radius="20px" type="drop" onEntry="this.visibility='hidden';" onCorrect="drop9.visibility='visible'; drag9.visibility='visible'; lido-avatar.avatarAnimate='Success';"></lido-math-matrix>   
                </lido-cell>
                <lido-cell visible="true" layout="pos" height="65%" width="30%" bg-color="transparent" x="950px" y="113px" onEntry="this.display='flex'; this.justifyContent='center'; this.alignItems='center';">
                    <lido-math-matrix id="drag0" value="1" clickable="false" visible="true" height="550px" width="1200px" cols="${i}" rows="1" border-radius="20px" type="drag" activeBgColor="#9a3dc5ff" defualtFill="${i}" onEntry=""></lido-math-matrix>
                    <lido-math-matrix id="drag1" value="2" clickable="false" visible="true" height="550px" width="1200px" cols="${i}" rows="1" border-radius="20px" type="drag" activeBgColor="#9a3dc5ff" defualtFill="${i}" onEntry="this.visibility='hidden';"></lido-math-matrix>
                    <lido-math-matrix id="drag2" value="3" clickable="false" visible="true" height="550px" width="1200px" cols="${i}" rows="1" border-radius="20px" type="drag" activeBgColor="#9a3dc5ff" defualtFill="${i}" onEntry="this.visibility='hidden';"></lido-math-matrix>
                    <lido-math-matrix id="drag3" value="4" clickable="false" visible="true" height="550px" width="1200px" cols="${i}" rows="1" border-radius="20px" type="drag" activeBgColor="#9a3dc5ff" defualtFill="${i}" onEntry="this.visibility='hidden';"></lido-math-matrix>
                    <lido-math-matrix id="drag4" value="5" clickable="false" visible="true" height="550px" width="1200px" cols="${i}" rows="1" border-radius="20px" type="drag" activeBgColor="#9a3dc5ff" defualtFill="${i}" onEntry="this.visibility='hidden';"></lido-math-matrix>
                    <lido-math-matrix id="drag5" value="6" clickable="false" visible="true" height="550px" width="1200px" cols="${i}" rows="1" border-radius="20px" type="drag" activeBgColor="#9a3dc5ff" defualtFill="${i}" onEntry="this.visibility='hidden';"></lido-math-matrix>
                    <lido-math-matrix id="drag6" value="7" clickable="false" visible="true" height="550px" width="1200px" cols="${i}" rows="1" border-radius="20px" type="drag" activeBgColor="#9a3dc5ff" defualtFill="${i}" onEntry="this.visibility='hidden';"></lido-math-matrix>
                    <lido-math-matrix id="drag7" value="8" clickable="false" visible="true" height="550px" width="1200px" cols="${i}" rows="1" border-radius="20px" type="drag" activeBgColor="#9a3dc5ff" defualtFill="${i}" onEntry="this.visibility='hidden';"></lido-math-matrix>
                    <lido-math-matrix id="drag8" value="9" clickable="false" visible="true" height="550px" width="1200px" cols="${i}" rows="1" border-radius="20px" type="drag" activeBgColor="#9a3dc5ff" defualtFill="${i}" onEntry="this.visibility='hidden';"></lido-math-matrix>
                </lido-cell>
            </lido-cell>

            <lido-cell visible="true" layout="row" width="90%" height="165px" bg-color="brown" border-radius="50px">
                <lido-text visible="true" id="beedsText" font-size="100px" font-color="white" string="" onEntry="this.fontWeight='800';"></lido-text>
            <lido-cell>
        <lido-cell>

    </lido-container>

        </main>
    `}var o,s,d;l.parameters={...l.parameters,docs:{...(o=l.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home xml-data="\${xml}" xmlData="\${xml}"></lido-home>\`;
  }
}`,...(d=(s=l.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const y=["MultiplyBeeds"];export{l as MultiplyBeeds,y as __namedExportsOrder,x as default};
