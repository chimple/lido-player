import"./lit-element-DRlmAcsz.js";import{b as s}from"./lit-html-s0HVm7S4.js";const l={title:"Templates/Grid",argTypes:{PracticeMode:{control:"boolean"}}},e={args:{PracticeMode:!1,option1:"chop",option2:"chug",option3:"chad",option4:"dop",option5:"dug",option6:"dad",option7:"mop",option8:"mug",option9:"mad",correct1:"chop",correct2:"chug",correct3:"chad",correct4:"dop",correct5:"dug",correct6:"dad",correct7:"mop",correct8:"mug",correct9:"mad"},render:t=>{const r=p(t);return s`<lido-home .xmlData="${r}"></lido-home>`}};function p(t){return`<main>
                <lido-container id="lido-container" value="mainContainer1" drop-action="move" objective="${t.correct1},${t.correct2},${t.correct3},${t.correct4},${t.correct5},${t.correct6},${t.correct7},${t.correct8},${t.correct9}" height="100%" width="100%" bg-color="transparent" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/Underwater.png" visible="true" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="this.justifyContent='space-around'; this.overflow='hidden';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="false" after-drop="false" is-allow-only-correct="${t.PracticeMode}">

        <!-- Chimple Avatar -->
        <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="305px" width="227px" x="landscape.1274px, portrait.541px" y="landscape.0, portrait.1274px" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="this.animation='rightToPlace 2.5s linear';">
            <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
            </lido-avatar>
        </lido-cell>

        <!-- drop container -->
        <lido-cell layout="col" visible="true" width="landscape.100%, portrait.96%" height="landscape.100%, portrait.57%" bg-color="transparent">
            <lido-image src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/ground.png" is-slice="true" disable-edit="true" visible="true" width="100%" height="83%" imageSlice="30 fill" flexible-width="false" value="dropContainer" z="0">
                <lido-cell layout="landscape.row, portrait.col" bg-color="transparent" visible="true" width="100%" height="100%">
                    <!-- child drops -->
                    <lido-cell layout="col" bg-color="transparent" visible="true" width="100%" height="100%">
                        <lido-cell layout="row" visible="true" width="80%" height="100%" bg-color="transparent" x="0px" y="0px" margin="landscape.0px 0px 0px 17%, portrait.0px 0px 0px 25%" z="1">

                            <lido-image is-slice="true" id="option1" value="op"  audio="" tab-index="1" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/grass_question_wordmatrix.png" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.25%, portrait.22%" height="landscape.70%, portrait.75%" font-size="50px" z="0">
                                <lido-text visible="true" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="100px" height="100px" string="op" font-color="black" font-family="'Baloo 2', serif" font-size="50px" z="0">
                                </lido-text>
                            </lido-image>
                            <lido-image is-slice="true" id="option2" value="ug"  audio="" tab-index="2" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/grass_question_wordmatrix.png" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.25%, portrait.22%" height="landscape.70%, portrait.75%" font-size="50px" z="0">
                                <lido-text visible="true" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="100px" height="100px" string="ug" font-color="black" font-family="'Baloo 2', serif" font-size="50px" z="0">
                                </lido-text>
                            </lido-image>
                            <lido-image is-slice="true" id="option3" value="ad"  audio="" tab-index="3" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/grass_question_wordmatrix.png" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.25%, portrait.22%" height="landscape.70%, portrait.75%" font-size="50px" z="0">
                                <lido-text visible="true" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="100px" height="100px" string="ad" font-color="black" font-family="'Baloo 2', serif" font-size="50px" z="0">
                                </lido-text>
                            </lido-image>


                        </lido-cell>
                        <lido-cell layout="row" visible="true" width="96%" height="100%" bg-color="transparent" gap="20px">
                            <lido-image is-slice="true" tab-index="4" id="option4"  audio="" value="basket" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/grass_question_wordmatrix.png" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.20%, portrait.18%" height="landscape.70%, portrait.75%" font-size="50px" z="0">
                                <lido-text visible="true" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="100px" height="100px" string="ch" font-color="black" font-family="'Baloo 2', serif" font-size="50px" z="0">
                                </lido-text>
                            </lido-image>
                            <lido-image id="option5" is-slice="true" value="${t.correct1}" tab-index="5" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/mud_drop_wordmatrix.png" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.355px, portrait.15%" height="landscape.67%, portrait.70%" font-size="50px" z="0" type="drop">
                            </lido-image>
                            <lido-image id="option6" is-slice="true" value="${t.correct2}" tab-index="6" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/mud_drop_wordmatrix.png" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.355px, portrait.15%" height="landscape.67%, portrait.70%" font-size="50px" z="0" type="drop">
                            </lido-image>
                            <lido-image id="option7" is-slice="true" value="${t.correct3}" tab-index="7" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/mud_drop_wordmatrix.png" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.355px, portrait.15%" height="landscape.67%, portrait.70%" font-size="50px" z="0" type="drop">
                            </lido-image>


                        </lido-cell>
                        <lido-cell layout="row" visible="true" width="96%" height="100%" bg-color="transparent" gap="20px">
                            <lido-image is-slice="true" id="option8" value="basket"  audio="" tab-index="8" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/grass_question_wordmatrix.png" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.20%, portrait.18%" height="landscape.70%, portrait.75%" font-size="50px" z="0">
                                <lido-text visible="true" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="100px" height="100px" string="d" font-color="black" font-family="'Baloo 2', serif" font-size="50px" z="0">
                                </lido-text>
                            </lido-image>
                            <lido-image id="option9" is-slice="true" value="${t.correct4}" tab-index="9" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/mud_drop_wordmatrix.png" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.355px, portrait.15%" height="landscape.67%, portrait.70%" font-size="50px" z="0" type="drop">
                            </lido-image>
                            <lido-image id="option10" is-slice="true" value="${t.correct5}" tab-index="10" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/mud_drop_wordmatrix.png" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.355px, portrait.15%" height="landscape.67%, portrait.70%" font-size="50px" z="0" type="drop">
                            </lido-image>
                            <lido-image id="option11" is-slice="true" value="${t.correct6}" tab-index="11" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/mud_drop_wordmatrix.png" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.355px, portrait.15%" height="landscape.67%, portrait.70%" font-size="50px" z="0" type="drop">
                            </lido-image>
                        </lido-cell>
                        <lido-cell layout="row" visible="true" width="96%" height="100%" bg-color="transparent" gap="20px">
                            <lido-image is-slice="true" id="option12" value="basket"  audio="" tab-index="12" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/grass_question_wordmatrix.png" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.20%, portrait.18%" height="landscape.70%, portrait.75%" font-size="50px" z="0">
                                <lido-text visible="true" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="100px" height="100px" string="m" font-color="black" font-family="'Baloo 2', serif" font-size="50px" z="0">
                                </lido-text>
                            </lido-image>
                            <lido-image id="option13" is-slice="true" value="${t.correct7}" visible="true" tab-index="13" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/mud_drop_wordmatrix.png" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.355px, portrait.15%" height="landscape.67%, portrait.70%" font-size="50px" z="0" type="drop">
                            </lido-image>
                            <lido-image id="option14" is-slice="true" value="${t.correct8}" visible="true" tab-index="14" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/mud_drop_wordmatrix.png" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.355px, portrait.15%" height="landscape.67%, portrait.70%" font-size="50px" z="0" type="drop">
                            </lido-image>
                            <lido-image id="option15" is-slice="true" value="${t.correct9}" visible="true" tab-index="15" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/mud_drop_wordmatrix.png" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.355px, portrait.15%" height="landscape.67%, portrait.70%" font-size="50px" z="0" type="drop">
                            </lido-image>
                        </lido-cell>

                    </lido-cell>
                    <!-- drag container -->
                    <lido-cell layout="landscape.col, portrait.row" visible="true" width="landscape.25%, portrait.75%" height="landscape.100%, portrait.30%" bg-color="transparent" x="0px" y="0px" margin="landscape.23% 0px 0px 0px, portrait.0px 0px 0px 37%" z="1" onEntry="this.justifyContent='unset';">
                        <lido-image tab-index="16" is-slice="true" type="drag"  audio="" id="option16" value="${t.option1}" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/blue_alphabet_wordmatrix.png" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.300px, portrait.120px" height="landscape.120px, portrait.120px" font-size="50px" z="0" margin="landscape.0px 0px 90px 0px, portrait.0px 82px 0px 0px">
                            <lido-text visible="true" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="landscape.100px, portrait.120px" height="landscape.120px, portrait.100px" string="${t.option1}" font-color="black" font-family="'Baloo 2', serif" font-size="50px" z="0" onTouch="this.speak='true';">
                            </lido-text>
                        </lido-image>
                        <lido-image tab-index="17" is-slice="true" type="drag"  audio="" id="option17" value="${t.option2}" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/blue_alphabet_wordmatrix.png" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.300px, portrait.120px" height="landscape.120px, portrait.120px" font-size="50px" z="0" margin="landscape.0px 0px 90px 0px, portrait.0px 82px 0px 0px">
                            <lido-text visible="true" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="landscape.100px, portrait.120px" height="landscape.120px, portrait.100px" string="${t.option2}" font-color="black" font-family="'Baloo 2', serif" font-size="50px" z="0" onTouch="this.speak='true';">
                            </lido-text>
                        </lido-image>
                        <lido-image tab-index="18" is-slice="true" type="drag"  audio="" id="option18" value="${t.option3}" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/blue_alphabet_wordmatrix.png" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.300px, portrait.120px" height="landscape.120px, portrait.120px" font-size="50px" z="0" margin="landscape.0px 0px 90px 0px, portrait.0px 82px 0px 0px">
                            <lido-text visible="true" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="landscape.100px, portrait.120px" height="landscape.120px, portrait.100px" string="${t.option3}" font-color="black" font-family="'Baloo 2', serif" font-size="50px" z="0" onTouch="this.speak='true';">
                            </lido-text>
                        </lido-image>

                        <!--hidden drags -->
                        <lido-image is-slice="true" type="drag"  tab-index="19" audio="" id="option19" value="${t.option4}" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/blue_alphabet_wordmatrix.png" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.300px, portrait.120px" height="landscape.120px, portrait.120px" font-size="50px" z="0" margin="landscape.0px 0px 90px 0px, portrait.0px 82px 0px 0px">
                            <lido-text visible="true" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="landscape.100px, portrait.120px" height="landscape.120px, portrait.100px" string="${t.option4}" font-color="black" font-family="'Baloo 2', serif" font-size="50px" z="0" onTouch="this.speak='true';">
                            </lido-text>
                        </lido-image>
                        <lido-image is-slice="true" type="drag"  tab-index="20" audio="" id="option20" value="${t.option5}" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/blue_alphabet_wordmatrix.png" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.300px, portrait.120px" height="landscape.120px, portrait.120px" font-size="50px" z="0" margin="landscape.0px 0px 90px 0px, portrait.0px 82px 0px 0px">
                            <lido-text visible="true" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="landscape.100px, portrait.120px" height="landscape.120px, portrait.100px" string="${t.option5}" font-color="black" font-family="'Baloo 2', serif" font-size="50px" z="0" onTouch="this.speak='true';">
                            </lido-text>
                        </lido-image>
                        <lido-image is-slice="true" type="drag"  tab-index="21" audio="" id="option21" value="${t.option6}" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/blue_alphabet_wordmatrix.png" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.300px, portrait.120px" height="landscape.120px, portrait.120px" font-size="50px" z="0" margin="landscape.0px 0px 90px 0px, portrait.0px 82px 0px 0px">
                            <lido-text visible="true" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="landscape.100px, portrait.120px" height="landscape.120px, portrait.100px" string="${t.option6}" font-color="black" font-family="'Baloo 2', serif" font-size="50px" z="0" onTouch="this.speak='true';">
                            </lido-text>
                        </lido-image>

                        <lido-image is-slice="true" type="drag"  tab-index="22" audio="" id="option22" value="${t.option7}" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/blue_alphabet_wordmatrix.png" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.300px, portrait.120px" height="landscape.120px, portrait.120px" font-size="50px" z="0" margin="landscape.0px 0px 90px 0px, portrait.0px 82px 0px 0px">
                            <lido-text visible="true" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="landscape.100px, portrait.120px" height="landscape.120px, portrait.100px" string="${t.option7}" font-color="black" font-family="'Baloo 2', serif" font-size="50px" z="0" onTouch="this.speak='true';">
                            </lido-text>
                        </lido-image>
                        <lido-image is-slice="true" type="drag"  tab-index="23" audio="" id="option23" value="${t.option8}" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/blue_alphabet_wordmatrix.png" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.300px, portrait.120px" height="landscape.120px, portrait.120px" font-size="50px" z="0" margin="landscape.0px 0px 90px 0px, portrait.0px 82px 0px 0px">
                            <lido-text visible="true" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="landscape.100px, portrait.120px" height="landscape.120px, portrait.100px" string="${t.option8}" font-color="black" font-family="'Baloo 2', serif" font-size="50px" z="0" onTouch="this.speak='true';">
                            </lido-text>
                        </lido-image>
                        <lido-image is-slice="true" type="drag"  tab-index="24" audio="" id="option24" value="${t.option9}" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/grid/blue_alphabet_wordmatrix.png" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset';" width="landscape.300px, portrait.120px" height="landscape.120px, portrait.120px" font-size="50px" z="0" margin="landscape.0px 0px 90px 0px, portrait.0px 82px 0px 0px">
                            <lido-text visible="true" bg-color="transparent" onEntry="this.borderRadius='unset'; this.boxShadow='unset'; this.fontWeight='800';" width="landscape.100px, portrait.120px" height="landscape.120px, portrait.100px" string="${t.option9}" font-color="black" font-family="'Baloo 2', serif" font-size="50px" z="0" onTouch="this.speak='true';">
                            </lido-text>
                        </lido-image>

                    </lido-cell>
                </lido-cell>
            </lido-image>
    </lido-container>
    </main>`}var i,o,a;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    PracticeMode: false,
    option1: 'chop',
    option2: 'chug',
    option3: 'chad',
    option4: 'dop',
    option5: 'dug',
    option6: 'dad',
    option7: 'mop',
    option8: 'mug',
    option9: 'mad',
    correct1: 'chop',
    correct2: 'chug',
    correct3: 'chad',
    correct4: 'dop',
    correct5: 'dug',
    correct6: 'dad',
    correct7: 'mop',
    correct8: 'mug',
    correct9: 'mad'
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const c=["Options"];export{e as Options,c as __namedExportsOrder,l as default};
