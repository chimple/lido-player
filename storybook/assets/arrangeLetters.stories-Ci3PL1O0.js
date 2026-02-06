import"./lit-element-DRlmAcsz.js";import{b as p}from"./lit-html-s0HVm7S4.js";const c={title:"Templates/arrangeLetters",argTypes:{image:{control:"file"},options:{control:"object"},answers:{control:"object"}}},a={args:{image:["https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/LetterPair/Cat.png"],options:["N","W","S","R","F","O","E","U","L"],answers:["S","U","N","F","L","O","W","E","R"]},render:t=>{const e=l(t);return p`<lido-home .xmlData="${e}"></lido-home>`}};function l(t){return`<main>
<lido-container visible="true" objective="${t.answers}" is-continue-on-correct="true" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/background-images/Arrange%20letters.png" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="this.sleep='1000'; this.slideAnimation='true';">

    <!-- Chimple Avatar -->
    <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos1" height="landscape.372px,portrait.476px" width="landscape.366px,portrait.467px" x="landscape.71%, portrait.52%" y="landscape.105px, portrait.66%" aria-hidden="true" z="2" bg-color="transparent" type="" visible="true" audio="" onTouch="" onCorrect="">
        <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/chimplecharacter.riv" alt-text="{chimpleCharacterRive}" bg-color="transparent">
        </lido-avatar>
        <lido-image id="image1" disable-edit="true" value="image1" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/Shadow.png" bg-color="transparent" width="200px" height="44px" x="landscape.84px,portrait.125px" y="landscape.310px,portrait.400px" alt-text="{shadowImgae}">
        </lido-image>
    </lido-cell>

    <lido-cell visible="true" layout="col" width="100%" height="100%" bg-color="transparent">
        <lido-text visible="true" width="70%" height="landscape.10%, portrait.5%" bg-color="transparent"></lido-text>

        <!-- Question -->
        <!-- <lido-text visible="true" tab-index="1" width="landscape.70%, portrait.62%" height="10%" string="Reorder the following shapes from the fewest flat faces to the most flat faces." font-size="36px" onEntry="this.fontWeight='600'; this.speak='true';" bg-color="transparent"></lido-text> -->

        <lido-cell visible="true" layout="landscape.col, portrait.row" flex-direction="landscape., portrait.row-reverse" align-items="landscape.center, portrait.start" width="100%" height="landscape.80%,portrait.91%" bg-color="transparent" margin="landscape.-115px 0px 0px 0px,portrait.-92px 0px 0px 0px" onEntry="this.gap='10px';this.flex-shrink='0';">

            <!-- Question Image -->
            <lido-cell visible="true" height="450px" width="450px" border-radius='7px' bg-color="white" onEntry="this.display='flex'; this.align-items='center'; this.justifyContent='center';">
                <lido-image visible="true" width="landscape.450px,portrait.450px" height="landscape.450px,portrait.450px" border-radius='7px' bg-color="white" src="${t.image}"></lido-image>
            </lido-cell>

            <!-- Slide Elements -->
            <lido-cell visible="true" layout="landscape.row, portrait.col" width="landscape.98%, portrait.21%" height="landscape.37%, portrait.100%" bg-color="#FBCAB5" border-radius="landscape.16px 16px 0 0, portrait.0 16px 16px 0" padding="landscape.0px, portrait.20px 40px" onEntry="this.gap='0px';">
            ${t.options.map((e,s)=>`	
            <lido-cell visible="true" tab-index="${s+1}" audio="" layout="col" bg-color="white" width="landscape.116px, portrait.116px" height="landscape.100px, portrait.78px" value="${e}" type="slide" onTouch="this.speak='true';" border-radius="6px" onEntry="this.border='2px solid #CACACA'; this.paddingTop='50px';this.flex-shrink='0';">
                    <lido-cell visible="true" layout="pos" width="landscape.44px,portrait.39px" height="landscape.44px,portrait.39px" z="1">
                        <lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/reordertemp/Reorder%20button.png"></lido-image>
                    </lido-cell>
                    <!-- <lido-image visible="true" width="landscape., portrait.100%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/reordertemp/sphere.png"></lido-image> -->
                    <lido-text visible="true" string="${e}" value="${e}" font-size="140px" onEntry="this.fontWeight='800'; this.textAlign='left'; this.lineHeight='26px';"></lido-text>
                </lido-cell>
                 `).join("")}
                
                
                
            </lido-cell>
        </lido-cell>
    </lido-cell>
</lido-container>
  </main>`}var i,r,o;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    image: ['https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/LetterPair/Cat.png'],
    options: ['N', 'W', 'S', 'R', 'F', 'O', 'E', 'U', 'L'],
    answers: ['S', 'U', 'N', 'F', 'L', 'O', 'W', 'E', 'R']
    //    option1: 'U',
    //    option2: 'F',
    //     option3: 'N',
    //     option4: 'L',
    //     option5: 'O',
    //     option6: 'W',
    //     option7: 'E',
    //     option8: 'R',
    //     option9: 'S',
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(o=(r=a.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const h=["arrangeLetters"];export{h as __namedExportsOrder,a as arrangeLetters,c as default};
