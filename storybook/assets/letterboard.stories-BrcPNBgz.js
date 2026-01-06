import"./lit-element-BxxbMms4.js";import{x as a}from"./lit-html-DLYuhZ0i.js";const h={title:"Templates/letterboard",argTypes:{}},e={args:{letter1:"A",letter2:"B",letter3:"C",letter4:"D",letter5:"E",letter6:"F",letter7:"G",letter8:"H",letter9:"I",letter10:"J",letter11:"K",letter12:"L",letter13:"M",letter14:"N",letter15:"O",letter16:"P",letter17:"Q",letter18:"R",letter19:"S",letter20:"T",letter21:"U",letter22:"V",letter23:"W",letter24:"X",letter25:"Y",letter26:"Z",answer1:"A",answer2:"B",answer3:"C",answer4:"D",answer5:"E",answer6:"F",answer7:"G",answer8:"H",answer9:"I",answer10:"J",answer11:"K",answer12:"L",answer13:"M",answer14:"N",answer15:"O",answer16:"P",answer17:"Q",answer18:"R",answer19:"S",answer20:"T",answer21:"U",answer22:"V",answer23:"W",answer24:"X",answer25:"Y",answer26:"Z"},render:t=>{const n=l(t);return a`<lido-home .xmlData="${n}"></lido-home>`}};function l(t){return`<main>
 <lido-container id="lido-container" show-drop-border="false" is-allow-only-correct="true" drop-action="move" tab-index="1" value="mainContainer1"  bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/background-images/Letter%20board.png" objective="A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z" height="100%" width="100%" bg-color="transparent" visible="true" onCorrect="this.sleep='1000';lido-avatar.avatarAnimate='Success';xx.animation='placeToLeft 2s linear';tyre.animation='placeToLeft 2s linear';this.sleep='2000'; " onEntry="this.justifyContent='space-around'; this.animation='rightToPlace 2.5 linear';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="true" after-drop="false">
        <!-- Chimple Avatar -->
        <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.417px,portrait.363px" width="landscape.280px,portrait.340px" x="landscape.1360px, portrait.597px" y="landscape.637px, portrait.1370px" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="this.animation='rightToPlace 2.5s linear';">
            
            <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
            </lido-avatar>
            
        </lido-cell>
        <lido-image visible="true" id="tyre"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/wheel.png" height="119px" width="131px" onEntry=" this.position='relative'; this.animation='rightToPlace 2.5s linear';" x="landscape.299px, portrait.293px" y="landscape.768px, portrait.1092px" margin="">
            </lido-image>
        
        <lido-cell visible="true" id="xx"  layout="landscape.row,portrait.col" height="90%" width="90%" bg-Color="transparent" margin="landscape.56px 0px 0px 0px,portrait.0px" onEntry="">
            <lido-cell visible="true" id="truck" layout="row" height="90%" width="1377px" bg-Color="transparent" margin="landscape.-169px 114px 39px -195px,portrait.-115px 0px 0px 0px" onEntry="this.animation='rightToPlace 2.5s linear';">
            <lido-image visible="true"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/truck.png" height="583px" width="502px" onEntry=" " margin="landscape.345px -40px 0px 55px,portrait.408px 67px -179px -107px">
            </lido-image>
            <lido-cell visible="true" height="landscape.100%,portrait.858px" width="landscape.858px,portrait.62%" bg-color="#F78315" margin="landscape.0px 0px 0px -18px,portrait.-124px 252px -238px -114px" onEntry=" this.place-items='center'; this.padding='0px'; this.gridTemplateColumns='repeat(auto-fill, minmax(143px, auto))';   this.gridTemplateRows='repeat(auto-fit, 146px)';  this.flexWrap='wrap';">
                <lido-cell layout="row" visible="true"    height="120px" width="120px" bg-Color="transparent"     onEntry="this.position='relative';this.align-items='center';this.justify-content='center';this.borderRadius='10px';">
                    <lido-text visible="true" type="drop"  id="drop1" tab-index="2" height="100%" width="100%" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" is-allow-only-one-drop="true" value="${t.answer1}" string="${t.answer1}" onEntry="this.color='#AB7552'; this.fontWeight='800';this.borderRadius='10px';  this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
                    </lido-text>
                </lido-cell>
                <lido-cell layout="row" visible="true" height="120px" width="120px" bg-Color="transparent"     onEntry="this.position='relative';this.align-items='center';this.justify-content='center';this.borderRadius='10px';">
                    <lido-text visible="true" type="drop" id="drop2" tab-index="3" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${t.answer2}" string="${t.answer2}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552'; this.fontWeight='800';this.borderRadius='10px';this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
                    </lido-text>
                </lido-cell>
                <lido-cell layout="row" visible="true" height="120px" width="120px" bg-Color="transparent"     onEntry="this.position='relative';this.align-items='center';this.justify-content='center';this.borderRadius='10px';">
                    <lido-text visible="true" type="drop" id="drop3" tab-index="4" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${t.answer3}" string="${t.answer3}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px'; this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
                    </lido-text>
                </lido-cell>
                <lido-cell layout="row" visible="true" height="120px" width="120px" bg-Color="transparent"     onEntry="this.position='relative';this.align-items='center';this.justify-content='center';this.borderRadius='10px';">
                    <lido-text visible="true" type="drop" id="drop4" tab-index="5" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${t.answer4}" string="${t.answer4}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px'; this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
                    </lido-text>
                </lido-cell>
                <lido-cell layout="row" visible="true" height="120px" width="120px" bg-Color="transparent"     onEntry="this.position='relative';this.align-items='center';this.justify-content='center';this.borderRadius='10px';">
                    <lido-text visible="true" type="drop" id="drop5" tab-index="6" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${t.answer5}" string="${t.answer5}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px'; this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
                    </lido-text>
                </lido-cell>	
                <lido-cell layout="row" visible="true" height="120px" width="120px" bg-Color="transparent"     onEntry="this.position='relative';this.align-items='center';this.justify-content='center';this.borderRadius='10px';">
                    <lido-text visible="true" type="drop" id="drop6" tab-index="7" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${t.answer6}" string="${t.answer6}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px'; this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
                    </lido-text>
                </lido-cell>	
                <lido-cell layout="row" visible="true"    height="120px" width="120px" bg-Color="transparent"     onEntry="this.position='relative';this.align-items='center';this.justify-content='center';this.borderRadius='10px';">
                    <lido-text visible="true" type="drop" id="drop7" tab-index="8" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${t.answer7}" string="${t.answer7}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px'; this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
                    </lido-text>
                </lido-cell>	
                <lido-cell layout="row" visible="true" height="120px" width="120px" bg-Color="transparent"     onEntry="this.position='relative';this.align-items='center';this.justify-content='center';this.borderRadius='10px';">
                    <lido-text visible="true" type="drop" id="drop8" tab-index="9" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${t.answer8}" string="${t.answer8}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px';this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
                    </lido-text>
                </lido-cell>	
                <lido-cell layout="row" visible="true" height="120px" width="120px" bg-Color="transparent"     onEntry="this.position='relative';this.align-items='center';this.justify-content='center';this.borderRadius='10px';">	
                    <lido-text visible="true" type="drop" id="drop9" tab-index="10" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${t.answer9}" string="${t.answer9}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px';this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
                    </lido-text>
                </lido-cell>	
                <lido-cell layout="row" visible="true" height="120px" width="120px" bg-Color="transparent"     onEntry="this.position='relative';this.align-items='center';this.justify-content='center';this.borderRadius='10px';">
                    <lido-text visible="true" type="drop" id="drop10" tab-index="11" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${t.answer10}" string="${t.answer10}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px';this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
                    </lido-text>
                </lido-cell>
                <lido-cell layout="row" visible="true" height="120px" width="120px" bg-Color="transparent"     onEntry="this.position='relative';this.align-items='center';this.justify-content='center';this.borderRadius='10px';">
                    <lido-text visible="true" type="drop" id="drop11" tab-index="12" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${t.answer11}" string="${t.answer11}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px';this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
                    </lido-text>
                </lido-cell>	
                <lido-cell layout="row" visible="true" height="120px" width="120px" bg-Color="transparent"     onEntry="this.position='relative';this.align-items='center';this.justify-content='center';this.borderRadius='10px';">	
                    <lido-text visible="true" type="drop" id="drop12" tab-index="13" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${t.answer12}" string="${t.answer12}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px';this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
                    </lido-text>
                </lido-cell>
                <lido-cell layout="row" visible="true" height="120px" width="120px" bg-Color="transparent"     onEntry="this.position='relative';this.align-items='center';this.justify-content='center';this.borderRadius='10px';">
                    <lido-text visible="true" type="drop" id="drop13" tab-index="14" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${t.answer13}" string="${t.answer13}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px';this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
                    </lido-text>
                </lido-cell>	
                <lido-cell layout="row" visible="true" height="120px" width="120px" bg-Color="transparent"     onEntry="this.position='relative';this.align-items='center';this.justify-content='center';this.borderRadius='10px';">	
                    <lido-text visible="true" type="drop" id="drop14" tab-index="15" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${t.answer14}" string="${t.answer14}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px';this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
                    </lido-text>
                </lido-cell>
                <lido-cell layout="row" visible="true" height="120px" width="120px" bg-Color="transparent"     onEntry="this.position='relative';this.align-items='center';this.justify-content='center';this.borderRadius='10px';">	
                    <lido-text visible="true" type="drop" id="drop15" tab-index="16" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${t.answer15}" string="${t.answer15}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px';this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
                    </lido-text>
                </lido-cell>	
                <lido-cell layout="row" visible="true" height="120px" width="120px" bg-Color="transparent"     onEntry="this.position='relative';this.align-items='center';this.justify-content='center';this.borderRadius='10px';">	
                    <lido-text visible="true" type="drop" id="drop16" tab-index="17" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${t.answer16}" string="${t.answer16}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px';this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
                    </lido-text>
                </lido-cell>	
                <lido-cell layout="row" visible="true" height="120px" width="120px" bg-Color="transparent"     onEntry="this.position='relative';this.align-items='center';this.justify-content='center';this.borderRadius='10px';">	
                    <lido-text visible="true" type="drop" id="drop17" tab-index="18" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${t.answer17}" string="${t.answer17}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px';this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
                    </lido-text>
                </lido-cell>	
                <lido-cell layout="row" visible="true" height="120px" width="120px" bg-Color="transparent"     onEntry="this.position='relative';this.align-items='center';this.justify-content='center';this.borderRadius='10px';">
                    <lido-text visible="true" type="drop" id="drop18" tab-index="19" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${t.answer18}" string="${t.answer18}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px';this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
                    </lido-text>
                </lido-cell>	
                <lido-cell layout="row" visible="true" height="120px" width="120px" bg-Color="transparent"     onEntry="this.position='relative';this.align-items='center';this.justify-content='center';this.borderRadius='10px';">	
                    <lido-text visible="true" type="drop" id="drop19" tab-index="20" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${t.answer19}" string="${t.answer19}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px';this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
                    </lido-text>
                </lido-cell>	
                <lido-cell layout="row" visible="true" height="120px" width="120px" bg-Color="transparent"     onEntry="this.position='relative';this.align-items='center';this.justify-content='center';this.borderRadius='10px';">
                    <lido-text visible="true" type="drop" id="drop20" tab-index="21" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${t.answer20}" string="${t.answer20}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px';this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
                    </lido-text>
                </lido-cell>	
                <lido-cell layout="row" visible="true" height="120px" width="120px" bg-Color="transparent"     onEntry="this.position='relative';this.align-items='center';this.justify-content='center';this.borderRadius='10px';">
                    <lido-text visible="true" type="drop" id="drop21" tab-index="22" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${t.answer21}" string="${t.answer21}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px';this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
                    </lido-text>
                </lido-cell>
                <lido-cell layout="row" visible="true" height="120px" width="120px" bg-Color="transparent"     onEntry="this.position='relative';this.align-items='center';this.justify-content='center';this.borderRadius='10px';">	
                    <lido-text visible="true" type="drop" id="drop22" tab-index="23" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${t.answer22}" string="${t.answer22}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px';this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
                    </lido-text>
                </lido-cell>
                <lido-cell layout="row" visible="true" height="120px" width="120px" bg-Color="transparent"     onEntry="this.position='relative';this.align-items='center';this.justify-content='center';this.borderRadius='10px';">
                    <lido-text visible="true" type="drop" id="drop23" tab-index="24" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${t.answer23}" string="${t.answer23}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px';this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
                    </lido-text>
                </lido-cell>	
                <lido-cell layout="row" visible="true" height="120px" width="120px" bg-Color="transparent"     onEntry="this.position='relative';this.align-items='center';this.justify-content='center';this.borderRadius='10px';">	
                    <lido-text visible="true" type="drop" id="drop24" tab-index="25" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${t.answer24}" string="${t.answer24}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px'; this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
                    </lido-text>
                </lido-cell>	
                <lido-cell layout="row" visible="true" height="120px" width="120px" bg-Color="transparent"     onEntry="this.position='relative';this.align-items='center';this.justify-content='center';this.borderRadius='10px';">	
                    <lido-text visible="true" type="drop" id="drop25" tab-index="26" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${t.answer25}" string="${t.answer25}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px'; this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
                    </lido-text>
                </lido-cell>	
                <lido-cell layout="row" visible="true" height="120px" width="120px" bg-Color="transparent"     onEntry="this.position='relative';this.align-items='center';this.justify-content='center';this.borderRadius='10px';">	
                    <lido-text visible="true" type="drop" id="drop26" tab-index="27" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px"  value="${t.answer26}" string="${t.answer26}" is-allow-only-one-drop="true" onEntry="this.color='#AB7552';this.fontWeight='800';this.borderRadius='10px'; this.textShadow = '3px 0 #853810, -3px 0 #853810, 0 3px #853810, 0 -3px #853810';">
                    </lido-text>
                </lido-cell>
            </lido-cell>
            </lido-cell>
            
            <lido-cell layout="landscape.col,portrait.row" visible="true" height="landscape.71%,portrait.185px" width="landscape.12%,portrait.71%" bg-color="transparent" onEntry="  this.animation='rightToPlace 2.5s linear';" margin="landscape.-270px 102px 0px -73px,portrait.-108px 0px 151px -50px">
                <lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag1" tab-index="29" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${t.letter1}" string="${t.letter1}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0 " onEntry="this.color='#CF1565';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white ">
                </lido-text>
                <lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag2" tab-index="30" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${t.letter2}" string="${t.letter2}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#409F5C';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white';">
                </lido-text>
                <lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag3" tab-index="31" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${t.letter3}" string="${t.letter3}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#02C1C1';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white';">
                </lido-text>
                <lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag4" tab-index="32" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${t.letter4}" string="${t.letter4}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#AD3184';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white';">
                </lido-text>
                <lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag5" tab-index="33" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${t.letter5}" string="${t.letter5}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#F55376';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white'; ">
                </lido-text>
                <lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag6" tab-index="34" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${t.letter6}" string="${t.letter6}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#81C127';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white'; ">
                </lido-text>
                <lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag7" tab-index="35" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${t.letter7}" string="${t.letter7}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#5D44BD';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white'; ">
                </lido-text>
                <lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag8" tab-index="36" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${t.letter8}" string="${t.letter8}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#CF1565';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white';">
                </lido-text>
                <lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag9" tab-index="37" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${t.letter9}" string="${t.letter9}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#409F5C';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white';">
                </lido-text>
                <lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag10" tab-index="38" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${t.letter10}" string="${t.letter10}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#02C1C1';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0'; this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white'; ">
                </lido-text>
                <lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag11" tab-index="39" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${t.letter11}" string="${t.letter11}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#AD3184';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white';">
                </lido-text>
                <lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag12" tab-index="40" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${t.letter12}" string="${t.letter12}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#F55376';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white';">
                </lido-text>
                <lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag13" tab-index="41" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${t.letter13}" string="${t.letter13}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#81C127';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white';">
                </lido-text>
                <lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag14" tab-index="42" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${t.letter14}" string="${t.letter14}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#5D44BD';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white';">
                </lido-text>
                <lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag15" tab-index="43" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${t.letter15}" string="${t.letter15}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#CF1565';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white'; ">
                </lido-text>
                <lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag16" tab-index="44" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${t.letter16}" string="${t.letter16}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#409F5C';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white'; ">
                </lido-text>
                <lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag17" tab-index="45" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${t.letter17}" string="${t.letter17}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#CF1565';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white'; ">
                </lido-text>
                <lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag18" tab-index="46" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${t.letter18}" string="${t.letter18}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#409F5C';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white'; ">
                </lido-text>
                <lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag19" tab-index="47" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${t.letter19}" string="${t.letter19}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#02C1C1';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white'; ">
                </lido-text>
                <lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag20" tab-index="48" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${t.letter20}" string="${t.letter20}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#AD3184';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white'; ">
                </lido-text>
                <lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag21" tab-index="49" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${t.letter21}" string="${t.letter21}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#F55376';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white'; ">
                </lido-text>
                <lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag22" tab-index="50" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${t.letter22}" string="${t.letter22}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#81C127';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white'; ">
                </lido-text>
                <lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag23" tab-index="51" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${t.letter23}" string="${t.letter23}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#5D44BD';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white'; ">
                </lido-text>
                <lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag24" tab-index="52" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${t.letter24}" string="${t.letter24}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#CF1565';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0'; this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white';">
                </lido-text>
                <lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag25" tab-index="53" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${t.letter25}" string="${t.letter25}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#409F5C';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white'; ">
                </lido-text>
                <lido-text visible="true" audio="" onTouch="this.speak='true';" type="drag" id="drag26" tab-index="54" height="120px" width="120px" bg-Color="transparent" font-family="'Baloo Bhai 2'" font-size="140px" value="${t.letter26}" string="${t.letter26}" margin="landscape.0 0 127px 0,portrait.0 135px 0 0" onEntry="this.color='#02C1C1';this.fontWeight='800';this.borderRadius='10px'; this.flex-shrink='0';this.textShadow = '3px 0 white, -3px 0 white, 0 3px white, 0 -3px white'; ">
                </lido-text>
                
            </lido-cell>
            </lido-cell>
            
        
</lido-container>
</main>`}var i,o,r;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    letter1: 'A',
    letter2: 'B',
    letter3: 'C',
    letter4: 'D',
    letter5: 'E',
    letter6: 'F',
    letter7: 'G',
    letter8: 'H',
    letter9: 'I',
    letter10: 'J',
    letter11: 'K',
    letter12: 'L',
    letter13: 'M',
    letter14: 'N',
    letter15: 'O',
    letter16: 'P',
    letter17: 'Q',
    letter18: 'R',
    letter19: 'S',
    letter20: 'T',
    letter21: 'U',
    letter22: 'V',
    letter23: 'W',
    letter24: 'X',
    letter25: 'Y',
    letter26: 'Z',
    answer1: 'A',
    answer2: 'B',
    answer3: 'C',
    answer4: 'D',
    answer5: 'E',
    answer6: 'F',
    answer7: 'G',
    answer8: 'H',
    answer9: 'I',
    answer10: 'J',
    answer11: 'K',
    answer12: 'L',
    answer13: 'M',
    answer14: 'N',
    answer15: 'O',
    answer16: 'P',
    answer17: 'Q',
    answer18: 'R',
    answer19: 'S',
    answer20: 'T',
    answer21: 'U',
    answer22: 'V',
    answer23: 'W',
    answer24: 'X',
    answer25: 'Y',
    answer26: 'Z'
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const x=["letterBoard"];export{x as __namedExportsOrder,h as default,e as letterBoard};
