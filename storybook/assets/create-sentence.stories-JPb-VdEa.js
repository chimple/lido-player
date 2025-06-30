import"./lit-element-BxxbMms4.js";import{x as n}from"./lit-html-DLYuhZ0i.js";const c={title:"Templates/CreateSentence",argTypes:{option1:{control:"text"},option2:{control:"text"},option3:{control:"text"},option4:{control:"text"},correct1:{control:"text"},correct2:{control:"text"},correct3:{control:"text"},correct4:{control:"text"}}},e={args:{option1:"streetlight",option2:"Girl",option3:"sits",option4:"under",correct1:"Girl",correct2:"sits",correct3:"under",correct4:"streetlight"},render:t=>{const a=l(t);return n`<lido-home .xmlData="${a}"></lido-home>`}};function l(t){return`<main>
    <lido-container id="lido-container" value="maincontainer" objective="${t.correct1},${t.correct2},${t.correct3},${t.correct4}" x="0" y="0" z="0" bg-color="transparent" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/create%20sentence/Spring.png" visible="true" audio="background1.mp3" onCorrect="this.sleep='1000';speak-con.speak='true';lido-avatar.avatarAnimate='Success'; pos5.animation='placeToLeft 2.5s linear';pos2.animation='placeToLeft 2.5s linear'; this.sleep='2000';" onEntry="this.sleep='1000';speak-con.speak='true';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="false" is-allow-only-correct="true">
        <lido-cell visible="false" id="speak-con">
            <lido-text id="sentenceText" value="${t.correct1} ${t.correct2} ${t.correct3} ${t.correct4}" string="${t.correct1} ${t.correct2} ${t.correct3} ${t.correct4}" />
        </lido-cell>

        <lido-cell id="row1" layout="row" height="100%" width="100%" visible="true">
            <!-- Truck -->
            <lido-cell id="col" layout="col" disable-edit="true" value="pos" aria-hidden="true" x="0" y="0" z="0" bg-color="transparent" type="" visible="true" audio="" onTouch="" onCorrect="" width="100%" height="100%" onEntry="">
                <lido-cell id="pos2" layout="pos" disable-edit="true" value="pos" aria-hidden="true" x="0" y="0" z="0" bg-color="transparent" type="" visible="true" audio="" onTouch="" width="100%" height="100%" onEntry="this.animation='rightToPlace 2.5s linear'; this.sleep='2000'">
                    <lido-image width="landscape.87%, portrait.145%" height="landscape.137%, portrait.70%" y="landscape.-32%, portrait.26%" x="landscape.0%, portrait.-39%" id="image1" disable-edit="true" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/create%20sentence/blueTruck.png" onEntry="">
                    </lido-image>
                    <lido-image width="landscape.20%, portrait.32%" y="landscape.13%, portrait.49%" x="landscape.46%, portrait.40%" z="2" id="image2" disable-edit="true" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/create%20sentence/question%20image.png" onEntry="">
                    </lido-image>
                    <lido-cell layout="row" visible="true" width="landscape.47%, portrait.76%" minLength="2" maxLength="6" height="landscape.0%, portrait.20%" x="landscape.33%, portrait.17%" y="landscape.56%, portrait.61%" bg-color="transparent" onEntry="">

                        <lido-text id="drop1" visible="true" width="150px" height="80px" value="Girl" z="1" y="149px" type="drop" tab-index="1" isAllowOnlyOneDrop="true" onEntry="this.border='2px dashed black'; this.background='transparent'; this.borderRadius='15px'; this.display='flex'; this.alignItems='center'; this.justifyContent='center'; this.fontWeight='bold';"></lido-text>

                        <lido-text id="drop2" visible="true" width="150px" height="80px" value="sits" z="1" y="149px" type="drop" tab-index="2" isAllowOnlyOneDrop="true" onEntry="this.border='2px dashed black'; this.background='transparent'; this.borderRadius='15px'; this.display='flex'; this.alignItems='center'; this.justifyContent='center'; this.fontWeight='bold';"></lido-text>

                        <lido-text id="drop3" visible="true" width="150px" height="80px" value="under" z="1" y="149px" type="drop" tab-index="3" isAllowOnlyOneDrop="true" onEntry="this.border='2px dashed black'; this.background='transparent'; this.borderRadius='15px'; this.display='flex'; this.alignItems='center'; this.justifyContent='center'; this.fontWeight='bold';"></lido-text>

                        <lido-text id="drop4" visible="true" width="150px" height="80px" value="streetlight" z="1" y="149px" type="drop" tab-index="4" isAllowOnlyOneDrop="true" onEntry="this.border='2px dashed black'; this.background='transparent'; this.borderRadius='15px'; this.display='flex'; this.alignItems='center'; this.justifyContent='center'; this.fontWeight='bold';"></lido-text>
                    </lido-cell>

                </lido-cell>
                <lido-cell layout="row" visible="true" width="landscape.70%, portrait.130%" y="landscape.40%, portrait.42%" x="landscape.20%,portrait.25%" z="2" onEntry="this.position='relative'">
                    <lido-text id="option1" value="${t.option1}" tab-index="5" flexibleWidth="false" visible="true" bg-color="#6DC1ED" onEntry="this.borderRadius='25px'; this.boxShadow='unset'; this.fontWeight='800'; this.color='white';" width="150px" height="90px" string="${t.option1}" font="'Baloo 2', serif" font-size="24px" z="2" type="drag"></lido-text>

                    <lido-text id="option2" value="${t.option2}" tab-index="6" flexibleWidth="false" visible="true" bg-color="#6DC1ED" onEntry="this.borderRadius='25px'; this.boxShadow='unset'; this.fontWeight='800'; this.color='white';" width="150px" height="90px" string="${t.option2}" font="'Baloo 2', serif" font-size="24px" z="2" type="drag"></lido-text>

                    <lido-text id="option3" value="${t.option3}" tab-index="7" flexibleWidth="false" visible="true" bg-color="#6DC1ED" onEntry="this.borderRadius='25px'; this.boxShadow='unset'; this.fontWeight='800'; this.color='white';" width="150px" height="90px" string="${t.option3}" font="'Baloo 2', serif" font-size="24px" z="2" type="drag"></lido-text>

                    <lido-text id="option4" value="${t.option4}" tab-index="8" flexibleWidth="false" visible="true" bg-color="#6DC1ED" onEntry="this.borderRadius='25px'; this.boxShadow='unset'; this.fontWeight='800'; this.color='white';" width="150px" height="90px" string="${t.option4}" font="'Baloo 2', serif" font-size="24px" z="2" type="drag"></lido-text>
                </lido-cell>
            </lido-cell>
            <!-- avatar -->
            <lido-cell layout="col" id="pos5" disable-edit="true" value="pos5" height="landscape.56%, portrait.95%" width="landscape.28%, portrait.52%" x="landscape.-11%, portrait.-5%" y="landscape.-6%, portrait.-39%" aria-hidden="true" z="5" bg-color="transparent" visible="true" onEntry="this.animation='rightToPlace 2.5s linear'; this.margin='50vh -3vw 0 0vh';">
                <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
                </lido-avatar>
            </lido-cell>
        </lido-cell>
    </lido-container>	
    </main>`}var i,o,r;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
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
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const p=["CreateSentence"];export{e as CreateSentence,p as __namedExportsOrder,c as default};
