import{x as n}from"./lit-html-DLYuhZ0i.js";const p={title:"Templates/picturemeaning"},i={args:{objective1:"They want to buy bananas.",option1:"He wants to buy mangoes",option2:"She wants to buy bananas",option3:"They want to buy bananas.",objective2:"Tiger",option4:"Zebra",option5:"Lion",option6:"Tiger",objective3:"a",option7:"b",option8:"a",option9:"c",objective4:"2",option10:"2",option11:"3",option12:"1"},render:t=>{const r=s(t);return n`<lido-home .xmlData="${r}}"></lido-home>`}};function s(t){return`<main>
    <lido-container id="lido-container" tabIndex="1" value="mainContainer" bgColor="transparent" objective="${t.objective1}" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/picturemeaning/Underwater.png" height="100%" width="100%" onCorrect="option1.speak='true'; lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" showCheck="false" isContinueOnCorrect="true">
        <!-- Chimple Avatar -->
        <lido-cell layout="pos" id="avatar-cell" disableEdit="true" height="305px" width="227px" x="landscape.1274px, portrait.541px" y="landscape.591px, portrait.1274px" z="1" bgColor="transparent" visible="true" onEntry="this.animation='rightToPlace 2.5s linear';">
            <lido-avatar id="lido-avatar" disableEdit="true" visible="true" height="462px" width="356px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" altText="Chimple Character">
            </lido-avatar>
        </lido-cell>

        <!-- Main Content -->
        <lido-cell layout="col" visible="true" width="100%" height="100%" bgColor="transparent">
            <!-- Heading -->
            <lido-cell visible="true" margin="landscape.12px 0px -17px 0px, portrait.-24px 0px 37px 0px">
                <lido-image id="bg-image1" disableEdit="true" visible="true" bgColor='transparent' src="https://media.githubusercontent.com/media/chimple/bahama/master/assets/games/picturemeaning/textures/picture_card.png" width="100%" height="100%">
                </lido-image>
            </lido-cell>
            <!-- Options -->
            <lido-cell layout="landscape.col, portrait.row" visible="true" width="60%" height="auto" bgColor="transparent" onEntry="this.justifyContent='center'; this.gap='20px';">
                <lido-image id="option1" isSlice="true" font="'Baloo Bhai 2'" src="https://media.githubusercontent.com/media/chimple/bahama/master/assets/games/picturemeaning/textures/answer_card.png" value="${t.option3}" tabIndex="1" visible="true" type="click" bgColor="transparent" onEntry="this.boxShadow='solid #4c131b 0 5px 3px'; this.borderRadius='10px'; this.color='white'; this.fontSize='80px'; this.fontWeight='600';" width="landscape.100%, portrait.100%" height="landscape.100%, portrait.62%" margin="landscape.0px 21px 0px 0px , portrait. 0">
                    <lido-text string="${t.option3}" font="'Baloo Bhai 2'" fontSize='80px' bgColor='transparent' onEntry='this.color="white"'></lido-text>
                </lido-image>

                <lido-image id="option2" isSlice="true" font="'Baloo Bhai 2'" src="https://media.githubusercontent.com/media/chimple/bahama/master/assets/games/picturemeaning/textures/answer_card.png" value="${t.option1}" tabIndex="2" visible="true" type="click" bgColor="transparent" onEntry="this.boxShadow='solid #4c131b 0 5px 3px'; this.color='white'; this.fontSize='80px'; this.fontWeight='600';" width="landscape.100%, portrait.100%" height="landscape.100%, portrait.62%" margin="landscape.0px 21px 0px 0px , portrait. 0">
                    <lido-text string="${t.option1}" font="'Baloo Bhai 2'" fontSize='80px' bgColor='transparent' onEntry='this.color="white"'></lido-text>
                </lido-image>
                
                <lido-image id="option3" isSlice="true" font="'Baloo Bhai 2'" src="https://media.githubusercontent.com/media/chimple/bahama/master/assets/games/picturemeaning/textures/answer_card.png" value="${t.option2}" tabIndex="3" visible="true" type="click" bgColor="transparent" onEntry="this.boxShadow='solid #4c131b 0 5px 3px'; this.color='white'; this.fontSize='80px'; this.fontWeight='600';" width="landscape.100%, portrait.100%" height="landscape.100%, portrait.62%" margin="landscape.0px 21px 0px 0px , portrait. 0">
                    <lido-text string="${t.option2}" font="'Baloo Bhai 2'" fontSize='80px' bgColor='transparent' onEntry='this.color="white"'></lido-text>
                </lido-image>
            </lido-cell>
        </lido-cell>
    </lido-container>

    <lido-container id="lido-container" tabIndex="1" value="mainContainer" bgColor="transparent" objective="${t.objective2}" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/picturemeaning/Underwater.png" height="100%" width="100%" onCorrect="tiger.speak='true'; lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" showCheck="false" isContinueOnCorrect="true">
        <!-- Chimple Avatar -->
        <lido-cell layout="pos" id="avatar-cell" disableEdit="true" height="305px" width="227px" x="landscape.1274px, portrait.541px" y="landscape.591px, portrait.1274px" z="1" bgColor="transparent" visible="true" onEntry="this.animation='rightToPlace 2.5s linear';">
            <lido-avatar id="lido-avatar" disableEdit="true" visible="true" height="462px" width="356px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" altText="Chimple Character">
            </lido-avatar>
        </lido-cell>

        <!-- Main Content -->
        <lido-cell layout="col" visible="true" width="100%" height="100%" bgColor="transparent">
            <!-- Heading -->
            <lido-image isSlice="true" id="bg-image5" disableEdit="true" visible="true" bgColor='transparent' src="https://media.githubusercontent.com/media/chimple/bahama/master/assets/games/picturemeaning/textures/answer_card.png" value="National Animal of India" width="40%" height="50%">
            <lido-text string='National Animal of India' font="'Baloo Bhai 2'" fontSize='80px' bgColor='transparent' onEntry='this.color="yellow"; this.padding="15px";this.fontWeight="600"'></lido-text>
            </lido-image>

            <!-- Options -->
            <lido-cell layout="landscape.row, portrait.row" visible="true" width="60%" height="auto" bgColor="transparent" onEntry="this.justifyContent='center'; this.gap='20px';">
                <lido-image id="option4" font="'Baloo Bhai 2'" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/picturemeaning/zebra.jpg" value="${t.option4}" tabIndex="1" visible="true" type="click" bgColor="transparent" onEntry="this.fontWeight='600';" width="landscape.100%, portrait.40%" height="landscape.100%, portrait.22%" margin="landscape.0 , portrait. 0">
                    <!-- <lido-text string='Zebra' font="'Baloo Bhai 2'" fontSize='80px' bgColor='transparent' onEntry='this.color="white"'></lido-text> -->
                </lido-image>

                <lido-image id="option5" font="'Baloo Bhai 2'" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/picturemeaning/lion.jpg" value="${t.option5}" tabIndex="2" visible="true" type="click" bgColor="transparent" onEntry="this.color='white'; this.fontSize='80px'; this.fontWeight='600';" width="landscape.100%, portrait.100%" height="landscape.100%, portrait.62%" margin="landscape.0 , portrait. 0">
                    <!-- <lido-text string='Lion' font="'Baloo Bhai 2'" fontSize='80px' bgColor='transparent' onEntry='this.color="white"'></lido-text> -->
                </lido-image>
                
                <lido-image id="option6" font="'Baloo Bhai 2'" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/picturemeaning/tiger.jpg" value="${t.option6}" tabIndex="3" visible="true" type="click" bgColor="transparent" onEntry="this.color='white'; this.fontSize='80px'; this.fontWeight='600';" width="landscape.100%, portrait.100%" height="landscape.100%, portrait.62%" margin="landscape.0 , portrait.0">
                </lido-image>
            </lido-cell>

            <lido-cell>
            <lido-text id='tiger' string='Tiger' font="'Baloo Bhai 2'" fontSize='80px' bgColor='transparent' onEntry='this.color="white"'></lido-text>
            </lido-cell>
        </lido-cell>
    </lido-container>

    <lido-container id="lido-container" tabIndex="1" value="mainContainer" bgColor="transparent" objective="${t.objective3}" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/picturemeaning/Underwater.png" height="100%" width="100%" onCorrect="option8.speak='true'; lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" showCheck="false" isContinueOnCorrect="true">
        <!-- Chimple Avatar -->
        <lido-cell layout="pos" id="avatar-cell" disableEdit="true" height="305px" width="227px" x="landscape.1274px, portrait.541px" y="landscape.591px, portrait.1274px" z="1" bgColor="transparent" visible="true" onEntry="this.animation='rightToPlace 2.5s linear';">
            <lido-avatar id="lido-avatar" disableEdit="true" visible="true" height="462px" width="356px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" altText="Chimple Character">
            </lido-avatar>
        </lido-cell>

        <!-- Main Content -->
        <lido-cell layout="col" visible="true" width="100%" height="100%" bgColor="transparent">
            <!-- Heading -->
            <lido-image isSlice="true" id="bg-image5" disableEdit="true" visible="true" bgColor='transparent' src="https://media.githubusercontent.com/media/chimple/bahama/master/assets/games/picturemeaning/textures/answer_card.png" value='Find the Alphabet - "a"' width="40%" height="50%">
            <lido-text string='Find the Alphabet - "a"' font="'Baloo Bhai 2'" fontSize='80px' bgColor='transparent' onEntry='this.color="yellow"; this.padding="15px";this.fontWeight="600"'></lido-text>
            </lido-image>

            <!-- Options -->
            <lido-cell layout="landscape.row, portrait.row" visible="true" width="60%" height="auto" bgColor="transparent" onEntry="this.justifyContent='center'; this.gap='20px';">
                <lido-image id="option7" isSlice="true" font="'Baloo Bhai 2'" src="https://media.githubusercontent.com/media/chimple/bahama/master/assets/games/picturemeaning/textures/picture_card.png" value="${t.option9}" tabIndex="1" visible="true" type="click" bgColor="transparent" onEntry="this.boxShadow='solid #4c131b 0 5px 3px'; this.borderRadius='10px'; this.color='white'; this.fontSize='80px'; this.fontWeight='600';" width="landscape.100%, portrait.100%" height="landscape.100%, portrait.62%" margin="landscape.0px 21px 0px 0px , portrait. 0">
                    <lido-text string='${t.option9}' font="'Baloo Bhai 2'" fontSize='80px' bgColor='transparent' onEntry='this.color="white"'></lido-text>
                </lido-image>

                <lido-image id="option8" isSlice="true" font="'Baloo Bhai 2'" src="https://media.githubusercontent.com/media/chimple/bahama/master/assets/games/picturemeaning/textures/picture_card.png" value="${t.option8}" tabIndex="2" visible="true" type="click" bgColor="transparent" onEntry="this.boxShadow='solid #4c131b 0 5px 3px'; this.color='white'; this.fontSize='80px'; this.fontWeight='600';" width="landscape.100%, portrait.100%" height="landscape.100%, portrait.62%" margin="landscape.0px 21px 0px 0px , portrait. 0">
                    <lido-text string='${t.option8}' font="'Baloo Bhai 2'" fontSize='80px' bgColor='transparent' onEntry='this.color="white"'></lido-text>
                </lido-image>
                
                <lido-image id="option9" isSlice="true" font="'Baloo Bhai 2'" src="https://media.githubusercontent.com/media/chimple/bahama/master/assets/games/picturemeaning/textures/picture_card.png" value="${t.option7}" tabIndex="3" visible="true" type="click" bgColor="transparent" onEntry="this.boxShadow='solid #4c131b 0 5px 3px'; this.color='white'; this.fontSize='80px'; this.fontWeight='600';" width="landscape.100%, portrait.100%" height="landscape.100%, portrait.62%" margin="landscape.0px 21px 0px 0px , portrait. 0">
                    <lido-text string='${t.option7}' font="'Baloo Bhai 2'" fontSize='80px' bgColor='transparent' onEntry='this.color="white"'></lido-text>
                </lido-image>
            </lido-cell>
        </lido-cell>
    </lido-container>

    <lido-container id="lido-container" tabIndex="1" value="mainContainer" bgColor="transparent" objective="${t.objective4}" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/picturemeaning/Underwater.png" height="100%" width="100%" onCorrect="option7.speak='true'; lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" showCheck="false" isContinueOnCorrect="true">
        <!-- Chimple Avatar -->
        <lido-cell layout="pos" id="avatar-cell" disableEdit="true" height="305px" width="227px" x="landscape.1274px, portrait.541px" y="landscape.591px, portrait.1274px" z="1" bgColor="transparent" visible="true" onEntry="this.animation='rightToPlace 2.5s linear';">
            <lido-avatar id="lido-avatar" disableEdit="true" visible="true" height="462px" width="356px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" altText="Chimple Character">
            </lido-avatar>
        </lido-cell>

        <!-- Main Content -->
        <lido-cell layout="col" visible="true" width="100%" height="100%" bgColor="transparent">
            <!-- Heading -->
            <lido-image isSlice="true" id="bg-image5" disableEdit="true" visible="true" bgColor='transparent' src="https://media.githubusercontent.com/media/chimple/bahama/master/assets/games/picturemeaning/textures/answer_card.png" value='Find the number - "2"' width="40%" height="50%">
            <lido-text string='Find the number - 2' font="'Baloo Bhai 2'" fontSize='80px' bgColor='transparent' onEntry='this.color="yellow"; this.padding="15px";this.fontWeight="600"'></lido-text>
            </lido-image>

            <!-- Options -->
            <lido-cell layout="landscape.row, portrait.row" visible="true" width="60%" height="auto" bgColor="transparent" onEntry="this.justifyContent='center'; this.gap='20px';">
                <lido-image id="option7" isSlice="true" font="'Baloo Bhai 2'" src="https://media.githubusercontent.com/media/chimple/bahama/master/assets/games/picturemeaning/textures/picture_card.png" value="${t.option10}" tabIndex="1" visible="true" type="click" bgColor="transparent" onEntry="this.boxShadow='solid #4c131b 0 5px 3px'; this.borderRadius='10px'; this.color='white'; this.fontSize='80px'; this.fontWeight='600';" width="landscape.100%, portrait.100%" height="landscape.100%, portrait.62%" margin="landscape.0px 21px 0px 0px , portrait. 0">
                    <lido-text string='${t.option10}' font="'Baloo Bhai 2'" fontSize='80px' bgColor='transparent' onEntry='this.color="white"'></lido-text>
                </lido-image>

                <lido-image id="option8" isSlice="true" font="'Baloo Bhai 2'" src="https://media.githubusercontent.com/media/chimple/bahama/master/assets/games/picturemeaning/textures/picture_card.png" value="${t.option11}" tabIndex="2" visible="true" type="click" bgColor="transparent" onEntry="this.boxShadow='solid #4c131b 0 5px 3px'; this.color='white'; this.fontSize='80px'; this.fontWeight='600';" width="landscape.100%, portrait.100%" height="landscape.100%, portrait.62%" margin="landscape.0px 21px 0px 0px , portrait. 0">
                    <lido-text string='${t.option11}' font="'Baloo Bhai 2'" fontSize='80px' bgColor='transparent' onEntry='this.color="white"'></lido-text>
                </lido-image>
                
                <lido-image id="option9" isSlice="true" font="'Baloo Bhai 2'" src="https://media.githubusercontent.com/media/chimple/bahama/master/assets/games/picturemeaning/textures/picture_card.png" value="${t.option12}" tabIndex="3" visible="true" type="click" bgColor="transparent" onEntry="this.boxShadow='solid #4c131b 0 5px 3px'; this.color='white'; this.fontSize='80px'; this.fontWeight='600';" width="landscape.100%, portrait.100%" height="landscape.100%, portrait.62%" margin="landscape.0px 21px 0px 0px , portrait. 0">
                    <lido-text string="${t.option12}" font="'Baloo Bhai 2'" fontSize='80px' bgColor='transparent' onEntry='this.color="white"'></lido-text>
                </lido-image>
            </lido-cell>
        </lido-cell>
    </lido-container>
</main>`}var e,a,o;i.parameters={...i.parameters,docs:{...(e=i.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    objective1: 'They want to buy bananas.',
    option1: 'He wants to buy mangoes',
    option2: 'She wants to buy bananas',
    option3: 'They want to buy bananas.',
    objective2: 'Tiger',
    option4: 'Zebra',
    option5: 'Lion',
    option6: 'Tiger',
    objective3: 'a',
    option7: 'b',
    option8: 'a',
    option9: 'c',
    objective4: "2",
    option10: "2",
    option11: "3",
    option12: "1"
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}}"></lido-home>\`;
  }
}`,...(o=(a=i.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const c=["Default"];export{i as Default,c as __namedExportsOrder,p as default};
