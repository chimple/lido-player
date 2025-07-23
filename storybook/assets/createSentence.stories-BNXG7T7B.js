import"./lit-element-BxxbMms4.js";import{x as n}from"./lit-html-DLYuhZ0i.js";const d={title:"Templates/create-sentence"},e={args:{heading:"Create a Sentence from the Image",option1:"streetlight",option2:"Girl",option3:"sits",option4:"under",correct1:"Girl",correct2:"sits",correct3:"under",correct4:"streetlight"},render:t=>{const a=l(t);return n`<lido-home .xmlData="${a}"></lido-home>`}};function l(t){return`<main>
    <lido-container id="lido-container" is-allow-only-correct="true" value="maincontainer" objective="${t.correct1},${t.correct2},${t.correct3},${t.correct4}" x="0" y="0" z="0" bg-color="transparent" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/create%20sentence/Spring.png" visible="true" audio="background1.mp3" onCorrect="this.sleep='1000';speak-con.speak='true';lido-avatar.avatarAnimate='Success'; pos5.animation='placeToLeft 2.5s linear';pos2.animation='placeToLeft 2.5s linear'; this.sleep='2000';" onEntry="this.sleep='1000';speak-con.speak='true';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="false"  appendToDropOnCompletion="true">
        <lido-cell visible="false" id="speak-con">
            <lido-text id="sentenceText" value="${t.correct1} ${t.correct2} ${t.correct3} ${t.correct4}" string="${t.correct1} ${t.correct2} ${t.correct3} ${t.correct4}" />
        </lido-cell>
        <lido-cell id="row1" layout="col" height="100%" width="100%" visible="true" bg-Color="transparent">
            <lido-text visible="true" width="100%" height="10%" string="${t.heading}"  font-family="'Baloo Bhai 2'" margin="60px 0px -139px 0px" font-size="landscape.36px,portrait.36px" onEntry="this.fontWeight='600';"></lido-text>
            <!-- Truck -->
            <lido-cell id="col" layout="col" disable-edit="true" value="pos" aria-hidden="true" x="0" y="0" z="0" bg-color="transparent" type="" visible="true" audio="" onTouch="" onCorrect="" width="100%" height="100%" onEntry="">
                <lido-cell id="pos2" layout="pos" disable-edit="true" value="pos" aria-hidden="true" x="0" y="0" z="0" bg-color="transparent" type="" visible="true" audio="" onTouch="" width="100%" height="100%" onEntry="this.animation='rightToPlace 2.5s linear'; this.sleep='2000'">
                    <lido-image width="landscape.87%, portrait.145%" height="landscape.127%, portrait.70%" y="landscape.-21%, portrait.26%" x="landscape.0%, portrait.-39%" id="image1" disable-edit="true" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/create%20sentence/blueTruck.png" onEntry="">
                    </lido-image>
                    <lido-image width="landscape.20%, portrait.32%" y="landscape.20%, portrait.49%" x="landscape.46%, portrait.40%" z="2" id="image2" disable-edit="true" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/create%20sentence/question%20image.png" onEntry="">
                    </lido-image>
                    <lido-cell layout="row" visible="true" width="landscape.47%, portrait.76%" min-length="2" max-length="6" height="landscape.0%, portrait.20%" x="landscape.33%, portrait.17%" y="landscape.56%, portrait.61%" bg-color="transparent" onEntry="">
                        <lido-text visible="true" id="drop1" width="150px" height="80px" value="${t.correct1}" z="1" margin="landscape.98px 0px 0px 0px, portrait.-6px 0px 0px 0px" type="drop" tab-index="1" is-allow-only-one-drop="true" onEntry=" this.background='transparent'; this.borderRadius='15px'; this.display='flex'; this.alignItems='center'; this.justifyContent='center'; this.fontWeight='bold';">
                        </lido-text>
                        <lido-text visible="true" id="drop2" width="150px" height="80px" value="${t.correct2}" z="1" margin="landscape.98px 0px 0px 0px, portrait.-6px 0px 0px 0px" type="drop" tab-index="2" is-allow-only-one-drop="true" onEntry=" this.background='transparent'; this.borderRadius='15px'; this.display='flex'; this.alignItems='center'; this.justifyContent='center'; this.fontWeight='bold';">
                        </lido-text>
                        <lido-text visible="true" id="drop3" width="150px" height="80px" value="${t.correct3}" z="1" margin="landscape.98px 0px 0px 0px, portrait.-6px 0px 0px 0px" type="drop" tab-index="3" is-allow-only-one-drop="true" onEntry=" this.background='transparent'; this.borderRadius='15px'; this.display='flex'; this.alignItems='center'; this.justifyContent='center'; this.fontWeight='bold';">
                        </lido-text>
                        <lido-text visible="true" id="drop4" width="150px" height="80px" value="${t.correct4}" z="1" margin="landscape.98px 0px 0px 0px, portrait.-6px 0px 0px 0px" type="drop" tab-index="4" is-allow-only-one-drop="true" onEntry=" this.background='transparent'; this.borderRadius='15px'; this.display='flex'; this.alignItems='center'; this.justifyContent='center'; this.fontWeight='bold';">
                        </lido-text>
                    </lido-cell>
                </lido-cell>
                <lido-cell layout="row" visible="true" width="landscape.70%, portrait.88%" y="landscape.40%, portrait.42%" x="0%" z="2" onEntry="this.position='relative'">
                    <lido-text id="option1" value="${t.option1}" tab-index="5" flexible-width="false" visible="true" bg-color="#FCF3B1" onEntry="this.borderRadius='25px'; this.boxShadow='unset'; this.fontWeight='800'; " width="150px" height="90px" string="${t.option1}" font-family="'Baloo 2', serif" font-size="24px" z="2" type="drag">
                    </lido-text>
                    <lido-text id="option2" value="${t.option2}" tab-index="6" flexible-width="false" visible="true" bg-color="#FCF3B1" onEntry="this.borderRadius='25px'; this.boxShadow='unset'; this.fontWeight='800';" width="150px" height="90px" string="${t.option2}" font-family="'Baloo 2', serif" font-size="24px" z="2" type="drag">
                    </lido-text>
                    <lido-text id="option3" value="${t.option3}" tab-index="7" flexible-width="false" visible="true" bg-color="#FCF3B1" onEntry="this.borderRadius='25px'; this.boxShadow='unset'; this.fontWeight='800'; " width="150px" height="90px" string="${t.option3}" font-family="'Baloo 2', serif" font-size="24px" z="2" type="drag">
                    </lido-text>
                    <lido-text id="option4" value="${t.option4}" tab-index="8" flexible-width="false" visible="true" bg-color="#FCF3B1" onEntry="this.borderRadius='25px'; this.boxShadow='unset'; this.fontWeight='800'; " width="150px" height="90px" string="${t.option4}" font-family="'Baloo 2', serif" font-size="24px" z="2" type="drag">
                    </lido-text>
                </lido-cell>
            </lido-cell>
                <!-- avatar -->
            <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.448px,portrait.402px" width="landscape.350px,portrait.398px" x="landscape.1267px, portrait.541px" y="landscape.587px, portrait.335px" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="this.animation='rightToPlace 2.5s linear';">
                <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
                </lido-avatar>
                <lido-image id="image1" disable-edit="true" value="image1" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/Shadow.png" bg-color="transparent" width="186px" height="20px" x="landscape.77px,portrait.103px" y="landscape.305px,portrait.353px" alt-text="{shadowImage}">
                </lido-image>
            
            </lido-cell>
        </lido-cell>
    </lido-container>	
    </main>`}var i,o,r;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    heading: 'Create a Sentence from the Image',
    option1: 'streetlight',
    option2: 'Girl',
    option3: 'sits',
    option4: 'under',
    correct1: 'Girl',
    correct2: 'sits',
    correct3: 'under',
    correct4: 'streetlight'
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const c=["CreateSentence"];export{e as CreateSentence,c as __namedExportsOrder,d as default};
