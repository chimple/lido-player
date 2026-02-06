import"./lit-element-DRlmAcsz.js";import{b as a}from"./lit-html-s0HVm7S4.js";const s={title:"Templates/letterPairing",argTypes:{PracticeMode:{control:"boolean"},question:{control:"text"},questionAudio:{control:{type:"file",accept:".mp3, .wav, .ogg, audio/*"}},dropimg1:{control:"file"},droptext1:{control:"text"},drop1Audio:{control:{type:"file",accept:".mp3, .wav, .ogg, audio/*"}},dropimg2:{control:"file"},droptext2:{control:"text"},drop2Audio:{control:{type:"file",accept:".mp3, .wav, .ogg, audio/*"}},dropimg3:{control:"file"},droptext3:{control:"text"},drop3Audio:{control:{type:"file",accept:".mp3, .wav, .ogg, audio/*"}},dropimg4:{control:"file"},droptext4:{control:"text"},drop4Audio:{control:{type:"file",accept:".mp3, .wav, .ogg, audio/*"}},dropimg5:{control:"file"},droptext5:{control:"text"},drop5Audio:{control:{type:"file",accept:".mp3, .wav, .ogg, audio/*"}},dragimg1:{control:"file"},dragtext1:{control:"text"},drag1Audio:{control:{type:"file",accept:".mp3, .wav, .ogg, audio/*"}},dragimg2:{control:"file"},dragtext2:{control:"text"},drag2Audio:{control:{type:"file",accept:".mp3, .wav, .ogg, audio/*"}},dragimg3:{control:"file"},dragtext3:{control:"text"},drag3Audio:{control:{type:"file",accept:".mp3, .wav, .ogg, audio/*"}},dragimg4:{control:"file"},dragtext4:{control:"text"},drag4Audio:{control:{type:"file",accept:".mp3, .wav, .ogg, audio/*"}},dragimg5:{control:"file"},dragtext5:{control:"text"},drag5Audio:{control:{type:"file",accept:".mp3, .wav, .ogg, audio/*"}},option1:{control:"text"},option2:{control:"text"},option3:{control:"text"},option4:{control:"text"},option5:{control:"text"},correct1:{control:"text"},correct2:{control:"text"},correct3:{control:"text"},correct4:{control:"text"},correct5:{control:"text"}}},o={args:{PracticeMode:!1,question:"Match the jump number to the number reached when skip jumping by 3.",questionAudio:"",dropimg1:"https://aeakbcdznktpsbrfsgys.storage.supabase.co/v1/object/public/template-assets/LetterPair/Cat.png",droptext1:"Cat",drop1Audio:"",dropimg2:"",droptext2:"34 Books + 45 Books",drop2Audio:"",dropimg3:"https://aeakbcdznktpsbrfsgys.storage.supabase.co/v1/object/public/template-assets/LetterPair/Cat.png",droptext3:"",drop3Audio:"",dropimg4:"https://aeakbcdznktpsbrfsgys.storage.supabase.co/v1/object/public/template-assets/LetterPair/Mouse_withbg.png",droptext4:"",drop4Audio:"",dropimg5:"https://aeakbcdznktpsbrfsgys.storage.supabase.co/v1/object/public/template-assets/LetterPair/Mouse_nobg.png",droptext5:"Mouse",drop5Audio:"",dragimg1:"",dragtext1:"Cat",drag1Audio:"",dragimg2:"",dragtext2:"34 Books + 45 Books",drag2Audio:"",dragimg3:"https://aeakbcdznktpsbrfsgys.storage.supabase.co/v1/object/public/template-assets/LetterPair/Mouse_withbg.png",dragtext3:"Camel",drag3Audio:"",dragimg4:"https://aeakbcdznktpsbrfsgys.storage.supabase.co/v1/object/public/template-assets/LetterPair/Cat.png",dragtext4:"Mouse",drag4Audio:"",dragimg5:"https://aeakbcdznktpsbrfsgys.storage.supabase.co/v1/object/public/template-assets/LetterPair/Mouse_nobg.png",dragtext5:"",drag5Audio:"",correct1:"Cat",correct2:"Books",correct3:"Kitten",correct4:"Smallmouse",correct5:"Bigmouse",option1:"Cat",option2:"Books",option3:"Kitten",option4:"Smallmouse",option5:"Bigmouse"},render:t=>{const p=l(t);return a`<lido-home .xmlData="${p}"></lido-home>`}};function l(t){return`<main>
    <lido-container id="lido-container" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onInCorrect="this.sleep='2000';" is-allow-only-correct="${t.PracticeMode}" objective="${t.correct1},${t.correct2},${t.correct3},${t.correct4},${t.correct5}" visible="true" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/phonic-tractor/bg-image.png" dropAttr="EnableAnimation">
                <!-- Chimple Avatar -->
        <lido-cell layout="pos" id="pos1" disableEdit="true" value="pos2" height="landscape.205px,portrait.195px" width="landscape.209px,portrait.209px" x="landscape.-30px,portrait.80%" y="landscape.700px,portrait.146px" ariaHidden="true" bgColor="transparent" visible="true" z="1"  onEntry="">
                <lido-avatar id="lido-avatar" disableEdit="true" visible="true"  height="100%"  width="100%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" altText="{chimpleCharacterRive}">
                </lido-avatar>
        </lido-cell>
            <!-- heading -->
            <lido-text id="heading" show-speak-icon="true" audio="${t.questionAudio}" width="landscape.auto,portrait.70%" tabIndex="20" visible="true" string="${t.question}" font-family="'Baloo Bhai 2'" fontColor="#323232" font-size="landscape.36px,portrait.36px" bg-Color="transparent" onEntry="this.padding='0px 45px';this.fontWeight='600';"  margin="landscape.20px 0px 0px 0px, portrait.160px 0px -39px 0px" >
            </lido-text>
        <lido-cell visible="true" flex-direction="landscape., portrait.row-reverse" bg-color="transparent" layout="portrait.row,landscape.col" width="100%" height="100%" onEntry="">
            
            <lido-cell visible="true" margin="20px 0px 0px 0px" bg-color="transparent" layout="landscape.row,portrait.col" height="landscape.50%,portrait.96%" width="landscape.100%,portrait.100%" onEntry="this.gap='10px';">
                
                ${t.dropimg1.length===0&&t.droptext1.length===0?"":`<lido-cell layout="row" visible="true" bg-color="transparent" height="landscape.100%,portrait.20%" width="landscape.20%,portrait.100%" onEntry="">
                    <lido-cell layout="row" visible="true" width="100%" height="100%" bg-color="transparent" onEntry="">
                        <lido-cell id="image1" show-speak-icon="true" audio="${t.drop1Audio}" value="${t.correct1}" tab-index="1" height="landscape.270px,portrait.240px" width="landscape.200px,portrait.180px" type="drop" layout="col" visible="true" bg-Color="white" onEntry="this.padding='0px'; this.borderRadius='8px';">
                            ${!t.dropimg1||t.dropimg1.length===0?"":`<lido-image border-radius="8px 8px 0px 0px" margin="0px 0px 0px 0px"  visible="true" width="landscape.202px,portrait.180px" height="landscape.200px,portrait.180px" bg-color="transparent" src="${t.dropimg1}"></lido-image>`}

                            ${!t.droptext1||t.droptext1===""?"":`<lido-text visible="true" height="100%" font-family="'Baloo Bhai 2'" font-size="landscape.36px,portrait.36px" string="${t.droptext1}" bg-Color="transparent" onEntry="this.fontWeight='600';" ></lido-text>`}
                            
                        </lido-cell>
                    </lido-cell>
                </lido-cell>`}

                ${t.dropimg2.length===0&&t.droptext2.length===0?"":`<lido-cell layout="row" visible="true" bg-color="transparent" height="landscape.100%,portrait.20%" width="landscape.20%,portrait.100%" onEntry="this.border-radius='6px';">
                    <lido-cell layout="row" visible="true" width="100%" height="100%" bg-color="transparent" onEntry="">
                        <lido-cell id="image2" show-speak-icon="true" audio="${t.drop2Audio}" value="${t.correct2}" tab-index="2" isAllowOnlyOneDrop="true" disable-edit="true" height="landscape.268px,portrait.240px" width="landscape.200px,portrait.178px" type="drop" layout="col" visible="true" bg-Color="white" onEntry="this.padding='0px';this.borderRadius='8px';">
                            ${!t.dropimg2||t.dropimg2.length===0?"":`<lido-image border-radius="8px 8px 0px 0px" margin="0px 0px 0px 0px"  visible="true" width="landscape.202px,portrait.180px" height="landscape.200px,portrait.180px" bg-color="transparent" src="${t.dropimg2}"></lido-image>`}

                            ${!t.droptext2||t.droptext2===""?"":`<lido-text visible="true" height="100%" font-family="'Baloo Bhai 2'" font-size="landscape.36px,portrait.36px" string="${t.droptext2}" bg-Color="transparent" onEntry="this.fontWeight='600';" ></lido-text>`}
                        </lido-cell>
                    </lido-cell>
                </lido-cell>`}

                ${t.dropimg3.length===0&&t.droptext3.length===0?"":`<lido-cell layout="row" margin="landscape.50px 0px 0px 0px,portrait.0px 0px 0px 0px" visible="true" bg-color="transparent" height="landscape.100%,portrait.20%" width="landscape.20%,portrait.100%" onEntry="this.border-radius='5px';">
                    <lido-cell layout="row" visible="true" width="100%" height="100%" bg-color="transparent" onEntry="">
                        <lido-cell type="drop" show-speak-icon="true" audio="${t.drop3Audio}" id="image3" tab-index="3" isAllowOnlyOneDrop="true" disable-edit="true" value="${t.correct3}" height="landscape.268px,portrait.240px" width="landscape.200px,portrait.178px" layout="col" visible="true" bg-Color="white" onEntry="this.padding='0px';this.borderRadius='8px';">
                            ${!t.dropimg3||t.dropimg3.length===0?"":`<lido-image border-radius="8px 8px 0px 0px" margin="0px 0px 0px 0px"  visible="true" width="landscape.202px,portrait.180px" height="landscape.200px,portrait.180px" bg-color="transparent" src="${t.dropimg3}"></lido-image>`}

                            ${!t.droptext3||t.droptext3===""?"":`<lido-text visible="true" height="100%" font-family="'Baloo Bhai 2'" font-size="landscape.36px,portrait.36px" string="${t.droptext3}" bg-Color="transparent" onEntry="this.fontWeight='600';" ></lido-text>`}
                        </lido-cell>
                    </lido-cell>
                </lido-cell>`}


                ${t.dropimg4.length===0&&t.droptext4.length===0?"":`<lido-cell layout="row" margin="landscape.0px 0px 0px 0px,portrait.0px 0px 0px 0px" visible="true" bg-color="transparent" height="landscape.100%,portrait.20%" width="landscape.20%,portrait.100%" onEntry="this.border-radius='6px';">
                    <lido-cell layout="row" visible="true" width="100%" height="100%" bg-color="transparent" onEntry="this.display='flex';">
                        <lido-cell id="image4" show-speak-icon="true" audio="${t.drop4Audio}" value="${t.correct4}" isAllowOnlyOneDrop="true" disable-edit="true" tab-index="4" height="landscape.270px,portrait.240px" width="landscape.200px,portrait.178px" type="drop" layout="col" visible="true" bg-Color="white" onEntry="this.padding='0px';this.borderRadius='8px';">
                            ${!t.dropimg4||t.dropimg4.length===0?"":`<lido-image border-radius="8px 8px 0px 0px" margin="0px 0px 0px 0px"  visible="true" width="landscape.202px,portrait.180px" height="landscape.200px,portrait.180px" bg-color="transparent" src="${t.dropimg4}"></lido-image>`}

                            ${!t.droptext4||t.droptext4===""?"":`<lido-text visible="true" height="100%" font-family="'Baloo Bhai 2'" font-size="landscape.36px,portrait.36px" string="${t.droptext4}" bg-Color="transparent" onEntry="this.fontWeight='600';" ></lido-text>`}
                        </lido-cell>
                    </lido-cell>
                </lido-cell>`}

                ${t.dropimg5.length===0&&t.droptext5.length===0?"":`<lido-cell layout="row" margin="landscape.0px 0px 0px 0px,portrait.0px 0px 0px 0px" visible="true" bg-color="transparent" height="landscape.100%,portrait.20%" width="landscape.20%,portrait.100%" onEntry="this.border-radius='6px';">
                    <lido-cell layout="row" visible="true" width="100%" height="100%" bg-color="transparent" onEntry="this.display='flex';">
                        <lido-cell type="drop" show-speak-icon="true" audio="${t.drop5Audio}" id="image5" value="${t.correct5}" tab-index="5" isAllowOnlyOneDrop="true" disable-edit="true" width="landscape.200px,portrait.178px" height="landscape.268px,portrait.240px" layout="col" visible="true" bg-Color="white" onEntry="this.padding='0px';this.borderRadius='8px';">
                            ${!t.dropimg5||t.dropimg5.length===0?"":`<lido-image border-radius="8px 8px 0px 0px" margin="0px 0px 0px 0px"  visible="true" width="landscape.202px,portrait.180px" height="landscape.200px,portrait.180px" bg-color="transparent" src="${t.dropimg5}"></lido-image>`}

                            ${!t.droptext5||t.droptext5===""?"":`<lido-text visible="true" height="100%" font-family="'Baloo Bhai 2'" font-size="landscape.36px,portrait.36px" string="${t.droptext5}" bg-Color="transparent" onEntry="this.fontWeight='600';" ></lido-text>`}
                        </lido-cell>
                    </lido-cell>
                </lido-cell>`}
            </lido-cell>




            <lido-cell visible="true" margin="landscape.0px 0px 0px 0px,portrait.0px 0px 0px 0px" bg-color="#fbcab5" layout="landscape.row,portrait.col" height="landscape.50%,portrait.96%" width="95%" border-radius="10px" onEntry="">
                ${t.dragimg1.length===0&&t.dragtext1.length===0?"":`<lido-cell layout="row" margin="landscape.0px 0px 0px 0px,portrait.0px 0px 0px 0px" visible="true" bg-color="transparent" height="landscape.100%,portrait.20%" width="landscape.20%,portrait.100%" onEntry="">
                    <lido-cell layout="random" visible="true" width="100%" height="100%" bg-color="transparent">
                        <lido-cell border-radius="8px"  show-speak-icon="true" audio="${t.drag1Audio}" id="option1" value="${t.option1}" tab-index="6" height="landscape.268px,portrait.240px" width="landscape.200px,portrait.178px" type="drag" layout="col" visible="true" bg-Color="white" onEntry="this.padding='0px';">
                            ${!t.dragimg1||t.dragimg1.length===0?"":`<lido-image border-radius="8px 8px 0px 0px" margin="0px 0px 0px 0px"  visible="true" width="landscape.202px,portrait.180px" height="landscape.200px,portrait.180px" bg-color="transparent" src="${t.dragimg1}"></lido-image>`}

                            ${!t.dragtext1||t.dragtext1===""?"":`<lido-text visible="true" height="100%" font-family="'Baloo Bhai 2'" font-size="landscape.36px,portrait.36px" string="${t.dragtext1}" bg-Color="transparent" onEntry="this.fontWeight='600';"></lido-text>`}
                        </lido-cell>
                    </lido-cell>
                </lido-cell>`}

                ${t.dragimg2.length===0&&t.dragtext2.length===0?"":`<lido-cell layout="row" visible="true" bg-color="transparent" height="landscape.100%,portrait.20%" width="landscape.20%,portrait.100%" onEntry="this.border-radius='2px';">
                    <lido-cell layout="random" visible="true" width="100%" height="100%" bg-color="transparent" onEntry="">
                        <lido-cell border-radius="8px" show-speak-icon="true" audio="${t.drag2Audio}" id="option2" value="${t.option2}" tab-index="7" height="landscape.268px,portrait.240px" width="landscape.200px,portrait.178px" type="drag" layout="col" visible="true" bg-Color="white" onEntry="this.padding='0px';this.justifyContent='center'; ">
                            ${!t.dragimg2||t.dragimg2.length===0?"":`<lido-image border-radius="8px 8px 0px 0px" margin="0px 0px 0px 0px"  visible="true" width="landscape.202px,portrait.180px" height="landscape.200px,portrait.180px" bg-color="transparent" src="${t.dragimg2}"></lido-image>`}

                            ${!t.dragtext2||t.dragtext2===""?"":`<lido-text visible="true" height="100%" font-family="'Baloo Bhai 2'" font-size="landscape.36px,portrait.36px" string="${t.dragtext2}" bg-Color="transparent" onEntry="this.fontWeight='600';"></lido-text>`}
                        </lido-cell>
                    </lido-cell>
                </lido-cell>`}

                ${t.dragimg3.length===0&&t.dragtext3.length===0?"":`<lido-cell layout="row" margin="landscape.0px 0px 0px 0px,portrait.0px 0px 0px 0px" visible="true" bg-color="transparent" height="landscape.100%,portrait.20%" width="landscape.20%,portrait.100%" onEntry="this.border-radius='2px';">
                    <lido-cell layout="random" visible="true" width="100%" height="100%" bg-color="transparent" onEntry="this.display='flex';">
                        <lido-cell border-radius="8px" show-speak-icon="true" id="option3" audio="${t.drag3Audio}" value="${t.option3}" tab-index="8" height="landscape.268px,portrait.240px" width="landscape.200px,portrait.178px" type="drag" layout="col" visible="true" bg-Color="white" onEntry="this.padding='0px'; ">
                            ${!t.dragimg3||t.dragimg3.length===0?"":`<lido-image border-radius="8px 8px 0px 0px" margin="0px 0px 0px 0px"  visible="true" width="landscape.202px,portrait.180px" height="landscape.200px,portrait.180px" bg-color="transparent" src="${t.dragimg3}"></lido-image>`}

                            ${!t.dragtext3||t.dragtext3===""?"":`<lido-text visible="true" height="100%" font-family="'Baloo Bhai 2'" font-size="landscape.36px,portrait.36px" string="${t.dragtext3}" bg-Color="transparent" onEntry="this.fontWeight='600';"></lido-text>`}
                        </lido-cell>
                    </lido-cell>
                </lido-cell>`}

                ${t.dragimg4.length===0&&t.dragtext4.length===0?"":`<lido-cell layout="row" margin="landscape.0px 0px 0px 0px,portrait.0px 0px 0px 0px" visible="true" bg-color="transparent" height="landscape.100%,portrait.20%" width="landscape.20%,portrait.100%" onEntry="this.border-radius='2px';">
                    <lido-cell layout="random" visible="true" width="100%" height="100%" bg-color="transparent" onEntry="this.display='flex';">
                        <lido-cell border-radius="8px" show-speak-icon="true" id="option4" audio="${t.drag4Audio}" value="${t.option4}" tab-index="9" height="landscape.270px,portrait.240px" width="landscape.200px,portrait.178px" type="drag" layout="col" visible="true" bg-Color="white" onEntry="this.padding='0px'; this.justifyContent='flex-start'; ">
                            ${!t.dragimg4||t.dragimg4.length===0?"":`<lido-image border-radius="8px 8px 0px 0px" margin="0px 0px 0px 0px"  visible="true" width="landscape.202px,portrait.180px" height="landscape.200px,portrait.180px" bg-color="transparent" src="${t.dragimg4}"></lido-image>`}

                            ${!t.dragtext4||t.dragtext4===""?"":`<lido-text visible="true" height="100%" font-family="'Baloo Bhai 2'" font-size="landscape.36px,portrait.36px" string="${t.dragtext4}" bg-Color="transparent" onEntry="this.fontWeight='600';"></lido-text>`}
                        </lido-cell>
                    </lido-cell>
                </lido-cell>`}

                ${t.dragimg5.length===0&&t.dragtext5.length===0?"":`<lido-cell layout="row" margin="landscape.0px 0px 0px 0px,portrait.0px 0px 0px 0px" visible="true" bg-color="transparent" height="landscape.100%,portrait.20%" width="landscape.20%,portrait.100%" onEntry="this.border-radius='2px';">
                    <lido-cell layout="random" visible="true" width="100%" height="100%" bg-color="transparent" onEntry="">
                        <lido-cell border-radius="8px" show-speak-icon="true" id="option5" audio="${t.drag5Audio}" value="${t.option5}" tab-index="10" height="landscape.268px,portrait.240px" width="landscape.200px,portrait.178px" type="drag" layout="col" visible="true" bg-Color="white" onEntry="this.padding='0px'; ">
                            ${!t.dragimg5||t.dragimg5.length===0?"":`<lido-image border-radius="8px 8px 0px 0px" margin="0px 0px 0px 0px"  visible="true" width="landscape.202px,portrait.180px" height="landscape.200px,portrait.180px" bg-color="transparent" src="${t.dragimg5}"></lido-image>`}

                            ${!t.dragtext5||t.dragtext5===""?"":`<lido-text visible="true" height="100%" font-family="'Baloo Bhai 2'" font-size="landscape.36px,portrait.36px" string="${t.dragtext5}" bg-Color="transparent" onEntry="this.fontWeight='600';"></lido-text>`}
                        </lido-cell>
                    </lido-cell>
                </lido-cell>`}
            </lido-cell>
        </lido-cell>
    </lido-container>
    </main>`}var e,i,r;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    PracticeMode: false,
    question: 'Match the jump number to the number reached when skip jumping by 3.',
    questionAudio: '',
    dropimg1: 'https://aeakbcdznktpsbrfsgys.storage.supabase.co/v1/object/public/template-assets/LetterPair/Cat.png',
    droptext1: 'Cat',
    drop1Audio: '',
    dropimg2: '',
    droptext2: '34 Books + 45 Books',
    drop2Audio: '',
    dropimg3: 'https://aeakbcdznktpsbrfsgys.storage.supabase.co/v1/object/public/template-assets/LetterPair/Cat.png',
    droptext3: '',
    drop3Audio: '',
    dropimg4: 'https://aeakbcdznktpsbrfsgys.storage.supabase.co/v1/object/public/template-assets/LetterPair/Mouse_withbg.png',
    droptext4: '',
    drop4Audio: '',
    dropimg5: 'https://aeakbcdznktpsbrfsgys.storage.supabase.co/v1/object/public/template-assets/LetterPair/Mouse_nobg.png',
    droptext5: 'Mouse',
    drop5Audio: '',
    dragimg1: '',
    dragtext1: 'Cat',
    drag1Audio: '',
    dragimg2: '',
    dragtext2: '34 Books + 45 Books',
    drag2Audio: '',
    dragimg3: 'https://aeakbcdznktpsbrfsgys.storage.supabase.co/v1/object/public/template-assets/LetterPair/Mouse_withbg.png',
    dragtext3: 'Camel',
    drag3Audio: '',
    dragimg4: 'https://aeakbcdznktpsbrfsgys.storage.supabase.co/v1/object/public/template-assets/LetterPair/Cat.png',
    dragtext4: 'Mouse',
    drag4Audio: '',
    dragimg5: 'https://aeakbcdznktpsbrfsgys.storage.supabase.co/v1/object/public/template-assets/LetterPair/Mouse_nobg.png',
    dragtext5: '',
    drag5Audio: '',
    correct1: 'Cat',
    correct2: 'Books',
    correct3: 'Kitten',
    correct4: 'Smallmouse',
    correct5: 'Bigmouse',
    option1: 'Cat',
    option2: 'Books',
    option3: 'Kitten',
    option4: 'Smallmouse',
    option5: 'Bigmouse'
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(r=(i=o.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const c=["LetterPairing"];export{o as LetterPairing,c as __namedExportsOrder,s as default};
