import"./lit-element-BxxbMms4.js";import{x as p}from"./lit-html-DLYuhZ0i.js";const d={title:"Templates/SpellDoor"},e={args:{option1:"f",option2:"s",option3:"a",option4:"m",option5:"e",correct1:"s",correct2:"e",correct3:"a",image:"https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg"},render:t=>{const r=s(t);return p`<lido-home .xmlData="${r}"></lido-home>`}};function s(t){return`<main>
        <lido-container id="lido-container" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/spelldoor/Background_Spring.png" objective="${t.correct1},${t.correct2},${t.correct3}" height="100%" width="100%" bg-color="transparent" visible="true" onCorrect="this.sleep='2000'; lido-avatar.avatarAnimate='Success';  correctWord.speak='true';  this.sleep='2000';" onEntry="this.justifyContent='space-around';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="true" after-drop="false">
                <lido-text visible="false" id="correctWord" onEntry="this.display='none';" string="${t.correct1}${t.correct2}${t.correct3}" ></lido-text>
        <!-- Chimple Avatar -->
        <lido-cell layout="pos" id="pos1" value="pos2" height="305px" width="227px" x="landscape.1400px, portrait.575px" y="landscape.591px, portrait.0px" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="this.animation='rightToPlace 2.5s linear';">
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
                <lido-image id="image2" visible="true" x="landscape.12%, portrait.-5%" y="landscape.2%, portrait.20%" src="${t.image}" width="landscape.39%, portrait.60%" height="landscape.100%, portrait.50%" >
                </lido-image>
            </lido-cell>
        </lido-cell>

        <lido-cell bg-color="transparent" layout="landscape.col, portrait.col" width="landscape.75%, portrait.100%" height="landscape.43%, portrait.40%" onEntry="this.animation='bottomToPlace 1.5s linear';" margin="landscape.0%, portrait.-15% 0 0 0" visible="true" alignItems="center" justifyContent="center">
            <lido-cell layout="landscape.row, portrait.row" width="landscape.75%, portrait.95%" height="landscape.43%, portrait.23%" child-elements-length="5" onEntry="this.gap='28px';    this.gridTemplateColumns = 'repeat(2, 1fr)';  this.gridTemplateRows = 'repeat(2, 1fr)';" visible="true">
                <lido-image id="image3" visible="true" type="drop" tab-index='1' value="${t.correct1}" src="https://media.githubusercontent.com/media/chimple/bahama/master/assets/games/spelldoor/textures/hole_dropbox_spelling.png" width="landscape.20%, portrait.100%" height="landscape.100%, portrait.62%" margin="landscape.0px 21px 0px 0px , portrait. 0">
                </lido-image>
                <lido-image id="image4" visible="true" type="drop" tab-index='2' value="${t.correct2}" src="https://media.githubusercontent.com/media/chimple/bahama/master/assets/games/spelldoor/textures/hole_dropbox_spelling.png" width="landscape.20%, portrait.100%" height="landscape.100%, portrait.62%" margin="landscape.0px 21px 0px 0px , portrait. 0">
                </lido-image>
                <lido-image id="image5" visible="true" type="drop" tab-index='3' value="${t.correct3}" src="https://media.githubusercontent.com/media/chimple/bahama/master/assets/games/spelldoor/textures/hole_dropbox_spelling.png" width="landscape.20%, portrait.100%" height="landscape.100%, portrait.62%" margin="landscape.0px 21px 0px 0px , portrait. 0">
                </lido-image>
            </lido-cell>
            <lido-cell layout="landscape.row, portrait.row" width="landscape.95%, portrait.95%" height="landscape.43%, portrait.22%" child-elements-length="7" onEntry="this.gap='28px ';    this.gridTemplateColumns = 'repeat(2, 1fr)';  this.gridTemplateRows = 'repeat(2, 1fr)';" visible="true">
                <lido-image id="option1" is-slice="true" font-family="'Baloo Bhai 2'" onTouch="this.speak='true';" src="https://media.githubusercontent.com/media/chimple/bahama/master/assets/games/spelldoor/textures/box_alphabet_spelling.png" value="${t.option1}"  tab-index="4" visible="true" type="drag" onEntry="this.boxShadow='0 5px 3px'; this.color='white'; this.font-size='80px'; this.fontWeight='600';" width="landscape.100%, portrait.100%" height="landscape.100%, portrait.150%" margin="landscape.0px 21px 0px 0px , portrait. 0">
                    <lido-text  string='${t.option1}' font-family="'Baloo Bhai 2'" font-size='80px' bg-color='transparent' onEntry='this.color="white"'></lido-text>
                </lido-image>
                <lido-image id="option2" is-slice="true" font-family="'Baloo Bhai 2'" onTouch="this.speak='true';" src="https://media.githubusercontent.com/media/chimple/bahama/master/assets/games/spelldoor/textures/box_alphabet_spelling.png" value="${t.option2}" tab-index="5" visible="true" type="drag" onEntry="this.boxShadow='0 5px 3px'; this.color='white'; this.font-size='80px'; this.fontWeight='600';" width="landscape.100%, portrait.100%" height="landscape.100%, portrait.150%" margin="landscape.0px 21px 0px 0px , portrait. 0">
                    <lido-text  string='${t.option2}' font-family="'Baloo Bhai 2'" font-size='80px' bg-color='transparent' onEntry='this.color="white"'></lido-text>
                </lido-image>
                <lido-image id="option3" is-slice="true" font-family="'Baloo Bhai 2'" onTouch="this.speak='true';" src="https://media.githubusercontent.com/media/chimple/bahama/master/assets/games/spelldoor/textures/box_alphabet_spelling.png" value="${t.option3}"  tab-index="6" visible="true" type="drag" onEntry="this.boxShadow='0 5px 3px'; this.color='white'; this.font-size='80px'; this.fontWeight='600';" width="landscape.100%, portrait.100%" height="landscape.100%, portrait.150%" margin="landscape.0px 21px 0px 0px , portrait. 0">
                    <lido-text string='${t.option3}' font-family="'Baloo Bhai 2'" font-size='80px' bg-color='transparent' onEntry='this.color="white"'></lido-text>
                </lido-image>
                <lido-image id="option4" is-slice="true" font-family="'Baloo Bhai 2'" onTouch="this.speak='true';" src="https://media.githubusercontent.com/media/chimple/bahama/master/assets/games/spelldoor/textures/box_alphabet_spelling.png" value="${t.option4}" tab-index="7" visible="true" type="drag" onEntry="this.boxShadow='0 5px 3px'; this.color='white'; this.font-size='80px'; this.fontWeight='600';" width="landscape.100%, portrait.100%" height="landscape.100%, portrait.150%" margin="landscape.0px 21px 0px 0px , portrait. 0">
                    <lido-text  string='${t.option4}' font-family="'Baloo Bhai 2'" font-size='80px' bg-color='transparent' onEntry='this.color="white"'></lido-text>
                </lido-image>
                <lido-image id="option5" is-slice="true" font-family="'Baloo Bhai 2'" onTouch="this.speak='true';" src="https://media.githubusercontent.com/media/chimple/bahama/master/assets/games/spelldoor/textures/box_alphabet_spelling.png" value="${t.option5}" tab-index="8	" visible="true" type="drag" onEntry="this.boxShadow='0 5px 3px'; this.color='white'; this.font-size='80px'; this.fontWeight='600';" width="landscape.100%, portrait.100%" height="landscape.100%, portrait.150%" margin="landscape.0px 21px 0px 0px , portrait. 0">
                    <lido-text string='${t.option5}' font-family="'Baloo Bhai 2'" font-size='80px' bg-color='transparent' onEntry='this.color="white"'></lido-text>
                </lido-image>
            </lido-cell>
        </lido-cell>
    </lido-container>
    </main>`}var i,a,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    option1: 'f',
    option2: 's',
    option3: 'a',
    option4: 'm',
    option5: 'e',
    correct1: 's',
    correct2: 'e',
    correct3: 'a',
    image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg"
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const c=["Options"];export{e as Options,c as __namedExportsOrder,d as default};
