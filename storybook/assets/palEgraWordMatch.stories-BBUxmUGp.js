import"./lit-element-DRlmAcsz.js";import{b as n}from"./lit-html-s0HVm7S4.js";const s={title:"Templates/palEgraWordMatch",argTypes:{option1:{control:"text"},option2:{control:"text"},option3:{control:"text"},option4:{control:"text"},option5:{control:"text"},text1:{control:"text"},text2:{control:"text"},text3:{control:"text"},text4:{control:"text"},text5:{control:"text"},answer1:{control:"text"},answer2:{control:"text"},answer3:{control:"text"},answer4:{control:"text"},answer5:{control:"text"},PracticeMode:{control:"boolean"}}},e={args:{option1:"phone",option2:"friend",option3:"boat",option4:"light",option5:"light",answer1:"phone",answer2:"friend",answer3:"boat",answer4:"light",answer5:"light",PracticeMode:!0},render:t=>{const a=l(t);return n`<lido-home .xmlData="${a}"></lido-home>`}};function l(t){return`<main>
        <lido-container disable-speak="true"  visible="true" template-id="dragAndDrop" id="lido-container" objective="${t.answer1},${t.answer2},${t.answer3},${t.answer4},${t.answer5}" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/palEgra-pictureWordMatch/bgImg.png" onInCorrect="lido-avatar.avatarAnimate='Fail';this.sleep='2000';" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2300';" is-continue-on-correct="${t.PracticeMode}" is-allow-only-correct="${t.PracticeMode}" onEntry="inst.speak='true';">

            <!-- Chimple Avatar -->
            <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.395px,portrait.402px" width="landscape.330px,portrait.398px" x="landscape.640px, portrait.28%" y="landscape.350px, portrait.77%" aria-hidden="true" z="1" bg-color="transparent" visible="true" >
                <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
                </lido-avatar>
                <lido-image id="image1" disable-edit="true" value="image1" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp1/Shadow.png" bg-color="transparent" width="186px" height="40px" x="65px" y="310px" alt-text="{shadowImgae}">
                </lido-image>
            </lido-cell>
            

            <lido-text visible="false" id="inst" tab-index="1" string="drag and drop the correct option to match the word given">
            </lido-text>

            <lido-cell visible="true" layout="col" height="85%" width="98%" bg-color="transparent" margin="-20px 0px -20px 0px">

                <lido-cell layout="row" visible="true" height="0px" width="100%" bg-color="transparent">
                    <lido-text visible="true" height="141px" disable-speak="true" width="256px" id="text1" tab-index="2" string="${t.option1}" value="${t.option1}" font-family="'Baloo Bhai 2'" font-color="black" font-size="60px"  bg-color="#FFF5BB" onEntry="this.font-weight='600';this.border-radius='16px'; this.border = 4px solid #FFB612" >
                    </lido-text>
                    <lido-text visible="true" height="141px" disable-speak="true" width="256px" id="text2" tab-index="3" string="${t.option2}" value="${t.option2}" font-family="'Baloo Bhai 2'" font-color="black" font-size="60px"  bg-color="#FFF5BB" onEntry="this.font-weight='600';this.border-radius='16px'; this.border = 4px solid #FFB612" >
                    </lido-text>
                    <lido-text visible="true" height="141px" disable-speak="true" width="256px" id="text3" tab-index="4" string="${t.option3}" value="${t.option3}" font-family="'Baloo Bhai 2'" font-color="black" font-size="60px"  bg-color="#FFF5BB" onEntry="this.font-weight='600';this.border-radius='16px'; this.border = 4px solid #FFB612" >
                    </lido-text>
                    <lido-text visible="true" height="141px" disable-speak="true" width="256px" id="text4" tab-index="5" string="${t.option4}" value="${t.option4}" font-family="'Baloo Bhai 2'" font-color="black" font-size="60px"  bg-color="#FFF5BB" onEntry="this.font-weight='600';this.border-radius='16px'; this.border = 4px solid #FFB612" >
                    </lido-text>
                    <lido-text visible="true" height="141px" disable-speak="true" width="256px" id="text5" tab-index="6" string="${t.option5}" value="${t.option5}" font-family="'Baloo Bhai 2'" font-color="black" font-size="60px"  bg-color="#FFF5BB" onEntry="this.font-weight='600';this.border-radius='16px'; this.border = 4px solid #FFB612" >
                    </lido-text>
                </lido-cell>

                <lido-cell visible="true" layout="row" height="40px" width="100%" bg-color="transparent">
                    <lido-text type="drop" value="${t.answer1}" bg-color="white" id="drop1" tab-index="8" visible="true" height="141px" width="256px" onEntry="this.border-radius='16px';" ></lido-text>
                    <lido-text type="drop" value="${t.answer2}" bg-color="white" id="drop2" tab-index="9" visible="true" height="141px" width="256px" onEntry="this.border-radius='16px';"></lido-text>
                    <lido-text type="drop" value="${t.answer3}" bg-color="white" id="drop3" tab-index="10" visible="true" height="141px" width="256px" onEntry="this.border-radius='16px';"></lido-text>
                    <lido-text type="drop" value="${t.answer4}" bg-color="white" id="drop4" tab-index="11" visible="true" height="141px" width="256px" onEntry="this.border-radius='16px';"></lido-text>
                    <lido-text type="drop" value="${t.answer5}" bg-color="white" id="drop5" tab-index="12" visible="true" height="141px" width="256px" onEntry="this.border-radius='16px';"></lido-text>
                </lido-cell>

                <lido-cell visible="true" layout="row"  height="250px" width="90%" bg-color="transparent" onEntry="this.align-items='center';this.justify-content='space-around';" margin="195px 0px -160px 0px">
                    <lido-text visible="true" height="122px" disable-speak="true" width="245px" type="drag" id="drag1" tab-index="2" string="${t.option1}" value="${t.option1}" font-family="'Baloo Bhai 2'" font-color="black" font-size="70px"  bg-color="#FFAC4C" onEntry="this.font-weight='700';this.border-radius='16px';" >
                    </lido-text>
                    <lido-text visible="true" height="122px" disable-speak="true" width="245px" type="drag" id="drag2" tab-index="3" string="${t.option2}" value="${t.option2}" font-family="'Baloo Bhai 2'" font-color="black" font-size="70px"  bg-color="#FFAC4C" onEntry="this.font-weight='700';this.border-radius='16px';" >
                    </lido-text>
                    <lido-text visible="true" height="122px" disable-speak="true" width="245px" type="drag" id="drag3" tab-index="4" string="${t.option3}" value="${t.option3}" font-family="'Baloo Bhai 2'" font-color="black" font-size="70px"  bg-color="#FFAC4C" onEntry="this.font-weight='700';this.border-radius='16px';" >
                    </lido-text>
                    <lido-text visible="true" height="122px" disable-speak="true" width="245px" type="drag" id="drag4" tab-index="5" string="${t.option4}" value="${t.option4}" font-family="'Baloo Bhai 2'" font-color="black" font-size="70px"  bg-color="#FFAC4C" onEntry="this.font-weight='700';this.border-radius='16px';" >
                    </lido-text>
                    <lido-text visible="true" height="122px" disable-speak="true" width="245px" type="drag" id="drag5" tab-index="6" string="${t.option5}" value="${t.option5}" font-family="'Baloo Bhai 2'" font-color="black" font-size="70px"  bg-color="#FFAC4C" onEntry="this.font-weight='700';this.border-radius='16px';" >
                    </lido-text>
                </lido-cell>
            </lido-cell>
        </lido-container>
    </main>`}var o,i,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    option1: "phone",
    option2: "friend",
    option3: "boat",
    option4: "light",
    option5: "light",
    answer1: "phone",
    answer2: "friend",
    answer3: "boat",
    answer4: "light",
    answer5: "light",
    PracticeMode: true
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(r=(i=e.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const x=["palEgraWordMatch"];export{x as __namedExportsOrder,s as default,e as palEgraWordMatch};
