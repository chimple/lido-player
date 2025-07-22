import"./lit-element-BxxbMms4.js";import{x as a}from"./lit-html-DLYuhZ0i.js";const s={title:"Templates/letterPairing",argTypes:{question:{control:"text"},dropimg1:{control:"file"},droptext1:{control:"text"},dropimg2:{control:"file"},droptext2:{control:"text"},dropimg3:{control:"file"},droptext3:{control:"text"},dropimg4:{control:"file"},droptext4:{control:"text"},dropimg5:{control:"file"},droptext5:{control:"text"},dragimg1:{control:"file"},dragtext1:{control:"text"},dragimg2:{control:"file"},dragtext2:{control:"text"},dragimg3:{control:"file"},dragtext3:{control:"text"},dragimg4:{control:"file"},dragtext4:{control:"text"},dragimg5:{control:"file"},dragtext5:{control:"text"},option1:{control:"text"},option2:{control:"text"},option3:{control:"text"},option4:{control:"text"},option5:{control:"text"},correct1:{control:"text"},correct2:{control:"text"},correct3:{control:"text"},correct4:{control:"text"},correct5:{control:"text"}}},e={args:{question:"Match the jump number to the number reached when skip jumping by 3.",dropimg1:"https://aeakbcdznktpsbrfsgys.storage.supabase.co/v1/object/public/template-assets/LetterPair/Cat.png",droptext1:"Cat",dropimg2:"",droptext2:"34 Books + 45 Books",dropimg3:"https://aeakbcdznktpsbrfsgys.storage.supabase.co/v1/object/public/template-assets/LetterPair/Cat.png",droptext3:"",dropimg4:"https://aeakbcdznktpsbrfsgys.storage.supabase.co/v1/object/public/template-assets/LetterPair/Mouse_withbg.png",droptext4:"",dropimg5:"https://aeakbcdznktpsbrfsgys.storage.supabase.co/v1/object/public/template-assets/LetterPair/Mouse_nobg.png",droptext5:"Mouse",dragimg1:"",dragtext1:"Cat",dragimg2:"",dragtext2:"34 Books + 45 Books",dragimg3:"https://aeakbcdznktpsbrfsgys.storage.supabase.co/v1/object/public/template-assets/LetterPair/Mouse_withbg.png",dragtext3:"Camel",dragimg4:"https://aeakbcdznktpsbrfsgys.storage.supabase.co/v1/object/public/template-assets/LetterPair/Cat.png",dragtext4:"Mouse",dragimg5:"https://aeakbcdznktpsbrfsgys.storage.supabase.co/v1/object/public/template-assets/LetterPair/Mouse_nobg.png",dragtext5:"",correct1:"Cat",correct2:"Books",correct3:"Kitten",correct4:"Smallmouse",correct5:"Bigmouse",option1:"Cat",option2:"Books",option3:"Kitten",option4:"Smallmouse",option5:"Bigmouse"},render:t=>{const p=l(t);return a`<lido-home .xmlData="${p}"></lido-home>`}};function l(t){return`<main>
    <lido-container id="lido-container" is-allow-only-correct="true" objective="${t.correct1},${t.correct2},${t.correct3},${t.correct4},${t.correct5}" visible="true" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/phonic-tractor/bg-image.png" dropAttr="EnableAnimation">
                <!-- Chimple Avatar -->
        <lido-cell layout="pos" id="pos1" disableEdit="true" value="pos2" height="landscape.205px,portrait.195px" width="landscape.209px,portrait.209px" x="landscape.83%,portrait.80%" y="landscape.85px,portrait.146px" ariaHidden="true" bgColor="transparent" visible="true"  onEntry="">
                <lido-avatar id="lido-avatar" disableEdit="true" visible="true"  height="100%"  width="100%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" altText="{chimpleCharacterRive}">
                </lido-avatar>
        </lido-cell>
            <!-- heading -->
            <lido-text id="heading" width="landscape.80%,portrait.70%" tabIndex="20" visible="true" string="${t.question}" font-family="'Baloo Bhai 2'" fontColor="#323232" font-size="landscape.36px,portrait.36px" bg-Color="transparent" onEntry="this.fontWeight='600';"  margin="landscape.120px 0px -25px 0px, portrait.160px 0px -39px 0px" >
            </lido-text>
        <lido-cell visible="true" flex-direction="landscape., portrait.row-reverse" bg-color="transparent" layout="portrait.row,landscape.col" width="100%" height="100%" onEntry="">
            
            <lido-cell visible="true" margin="20px 0px 0px 0px" bg-color="transparent" layout="landscape.row,portrait.col" height="landscape.50%,portrait.96%" width="landscape.100%,portrait.100%" onEntry="this.gap='10px';">
                
                <lido-cell layout="row" visible="true" bg-color="transparent" height="landscape.100%,portrait.20%" width="landscape.20%,portrait.100%" onEntry="">
                    <lido-cell layout="random" visible="true" width="100%" height="100%" bg-color="transparent" onEntry="">
                        <lido-cell id="image1" value="${t.correct1}" tab-index="1" height="landscape.270px,portrait.240px" width="landscape.200px,portrait.180px" type="drop" layout="col" visible="true" bg-Color="white" onEntry="this.padding='0px'; this.borderRadius='8px';">
                            ${!t.dropimg1||t.dropimg1.length===0?"":`<lido-image border-radius="8px 8px 0px 0px" margin="0px 0px 0px 0px"  visible="true" width="landscape.202px,portrait.180px" height="landscape.200px,portrait.180px" bg-color="transparent" src="${t.dropimg1}"></lido-image>`}

                            ${!t.droptext1||t.droptext1===""?"":`<lido-text visible="true" height="100%" font-family="'Baloo Bhai 2'" font-size="landscape.36px,portrait.36px" string="${t.droptext1}" bg-Color="transparent" onEntry="this.fontWeight='600';" ></lido-text>`}
                            
                        </lido-cell>
                    </lido-cell>
                </lido-cell>

                <lido-cell layout="row" visible="true" bg-color="transparent" height="landscape.100%,portrait.20%" width="landscape.20%,portrait.100%" onEntry="this.border-radius='6px';">
                    <lido-cell layout="random" visible="true" width="100%" height="100%" bg-color="transparent" onEntry="">
                        <lido-cell id="image2" value="${t.correct2}" tab-index="2" isAllowOnlyOneDrop="true" disable-edit="true" height="landscape.268px,portrait.240px" width="landscape.200px,portrait.178px" type="drop" layout="col" visible="true" bg-Color="white" onEntry="this.padding='0px';this.borderRadius='8px';">
                            ${!t.dropimg2||t.dropimg2.length===0?"":`<lido-image border-radius="8px 8px 0px 0px" margin="0px 0px 0px 0px"  visible="true" width="landscape.202px,portrait.180px" height="landscape.200px,portrait.180px" bg-color="transparent" src="${t.dropimg2}"></lido-image>`}

                            ${!t.droptext2||t.droptext2===""?"":`<lido-text visible="true" height="100%" font-family="'Baloo Bhai 2'" font-size="landscape.36px,portrait.36px" string="${t.droptext2}" bg-Color="transparent" onEntry="this.fontWeight='600';" ></lido-text>`}
                        </lido-cell>
                    </lido-cell>
                </lido-cell>

                <lido-cell layout="row" margin="landscape.50px 0px 0px 0px,portrait.0px 0px 0px 0px" visible="true" bg-color="transparent" height="landscape.100%,portrait.20%" width="landscape.20%,portrait.100%" onEntry="this.border-radius='5px';">
                    <lido-cell layout="random" visible="true" width="100%" height="100%" bg-color="transparent" onEntry="">
                        <lido-cell type="drop" id="image3" tab-index="3" isAllowOnlyOneDrop="true" disable-edit="true" value="${t.correct3}" height="landscape.268px,portrait.240px" width="landscape.200px,portrait.178px" layout="col" visible="true" bg-Color="white" onEntry="this.padding='0px';this.borderRadius='8px';">
                            ${!t.dropimg3||t.dropimg3.length===0?"":`<lido-image border-radius="8px 8px 0px 0px" margin="0px 0px 0px 0px"  visible="true" width="landscape.202px,portrait.180px" height="landscape.200px,portrait.180px" bg-color="transparent" src="${t.dropimg3}"></lido-image>`}

                            ${!t.droptext3||t.droptext3===""?"":`<lido-text visible="true" height="100%" font-family="'Baloo Bhai 2'" font-size="landscape.36px,portrait.36px" string="${t.droptext3}" bg-Color="transparent" onEntry="this.fontWeight='600';" ></lido-text>`}
                        </lido-cell>
                    </lido-cell>
                </lido-cell>


                <lido-cell layout="row" margin="landscape.0px 0px 0px 0px,portrait.0px 0px 0px 0px" visible="true" bg-color="transparent" height="landscape.100%,portrait.20%" width="landscape.20%,portrait.100%" onEntry="this.border-radius='6px';">
                    <lido-cell layout="random" visible="true" width="100%" height="100%" bg-color="transparent" onEntry="this.display='flex';">
                        <lido-cell id="image4" value="${t.correct4}" isAllowOnlyOneDrop="true" disable-edit="true" tab-index="4" height="landscape.270px,portrait.240px" width="landscape.200px,portrait.178px" type="drop" layout="col" visible="true" bg-Color="white" onEntry="this.padding='0px';this.borderRadius='8px';">
                            ${!t.dropimg4||t.dropimg4.length===0?"":`<lido-image border-radius="8px 8px 0px 0px" margin="0px 0px 0px 0px"  visible="true" width="landscape.202px,portrait.180px" height="landscape.200px,portrait.180px" bg-color="transparent" src="${t.dropimg4}"></lido-image>`}

                            ${!t.droptext4||t.droptext4===""?"":`<lido-text visible="true" height="100%" font-family="'Baloo Bhai 2'" font-size="landscape.36px,portrait.36px" string="${t.droptext4}" bg-Color="transparent" onEntry="this.fontWeight='600';" ></lido-text>`}
                        </lido-cell>
                    </lido-cell>
                </lido-cell>

                <lido-cell layout="row" margin="landscape.0px 0px 0px 0px,portrait.0px 0px 0px 0px" visible="true" bg-color="transparent" height="landscape.100%,portrait.20%" width="landscape.20%,portrait.100%" onEntry="this.border-radius='6px';">
                    <lido-cell layout="random" visible="true" width="100%" height="100%" bg-color="transparent" onEntry="this.display='flex';">
                        <lido-cell type="drop" id="image5" value="${t.correct5}" tab-index="5" isAllowOnlyOneDrop="true" disable-edit="true" width="landscape.200px,portrait.178px" height="landscape.268px,portrait.240px" layout="col" visible="true" bg-Color="white" onEntry="this.padding='0px';this.borderRadius='8px';">
                            ${!t.dropimg5||t.dropimg5.length===0?"":`<lido-image border-radius="8px 8px 0px 0px" margin="0px 0px 0px 0px"  visible="true" width="landscape.202px,portrait.180px" height="landscape.200px,portrait.180px" bg-color="transparent" src="${t.dropimg5}"></lido-image>`}

                            ${!t.droptext5||t.droptext5===""?"":`<lido-text visible="true" height="100%" font-family="'Baloo Bhai 2'" font-size="landscape.36px,portrait.36px" string="${t.droptext5}" bg-Color="transparent" onEntry="this.fontWeight='600';" ></lido-text>`}
                        </lido-cell>
                    </lido-cell>
                </lido-cell>
            </lido-cell>




            <lido-cell visible="true" margin="landscape.0px 0px 0px 0px,portrait.0px 0px 0px 0px" bg-color="transparent" layout="landscape.row,portrait.col" height="landscape.40%,portrait.96%" width="100%" onEntry="">
                <lido-cell layout="row" margin="landscape.0px 0px 0px 0px,portrait.0px 0px 0px 0px" visible="true" bg-color="transparent" height="landscape.100%,portrait.20%" width="landscape.20%,portrait.100%" onEntry="">
                    <lido-cell layout="random" visible="true" width="100%" height="100%" bg-color="transparent">
                        <lido-cell border-radius="8px" id="option1" value="${t.option1}" tab-index="6" height="landscape.268px,portrait.240px" width="landscape.200px,portrait.178px" type="drag" layout="col" visible="true" bg-Color="white" onEntry="this.padding='0px';">
                            ${!t.dragimg1||t.dragimg1.length===0?"":`<lido-image border-radius="8px 8px 0px 0px" margin="0px 0px 0px 0px"  visible="true" width="landscape.202px,portrait.180px" height="landscape.200px,portrait.180px" bg-color="transparent" src="${t.dragimg1}"></lido-image>`}

                            ${!t.dragtext1||t.dragtext1===""?"":`<lido-text visible="true" height="100%" font-family="'Baloo Bhai 2'" font-size="landscape.36px,portrait.36px" string="${t.dragtext1}" bg-Color="transparent" onEntry="this.fontWeight='600';"></lido-text>`}
                        </lido-cell>
                    </lido-cell>
                </lido-cell>

                <lido-cell layout="row" visible="true" bg-color="transparent" height="landscape.100%,portrait.20%" width="landscape.20%,portrait.100%" onEntry="this.border-radius='2px';">
                    <lido-cell layout="random" visible="true" width="100%" height="100%" bg-color="transparent" onEntry="">
                        <lido-cell border-radius="8px" id="option2" value="${t.option2}" tab-index="7" height="landscape.268px,portrait.240px" width="landscape.200px,portrait.178px" type="drag" layout="col" visible="true" bg-Color="white" onEntry="this.padding='0px';this.justifyContent='center';">
                            ${!t.dragimg2||t.dragimg2.length===0?"":`<lido-image border-radius="8px 8px 0px 0px" margin="0px 0px 0px 0px"  visible="true" width="landscape.202px,portrait.180px" height="landscape.200px,portrait.180px" bg-color="transparent" src="${t.dragimg2}"></lido-image>`}

                            ${!t.dragtext2||t.dragtext2===""?"":`<lido-text visible="true" height="100%" font-family="'Baloo Bhai 2'" font-size="landscape.36px,portrait.36px" string="${t.dragtext2}" bg-Color="transparent" onEntry="this.fontWeight='600';"></lido-text>`}
                        </lido-cell>
                    </lido-cell>
                </lido-cell>

                    <lido-cell layout="row" margin="landscape.0px 0px 0px 0px,portrait.0px 0px 0px 0px" visible="true" bg-color="transparent" height="landscape.100%,portrait.20%" width="landscape.20%,portrait.100%" onEntry="this.border-radius='2px';">
                    <lido-cell layout="random" visible="true" width="100%" height="100%" bg-color="transparent" onEntry="this.display='flex';">
                        <lido-cell border-radius="8px" id="option3" value="${t.option3}" tab-index="8" height="landscape.268px,portrait.240px" width="landscape.200px,portrait.178px" type="drag" layout="col" visible="true" bg-Color="white" onEntry="this.padding='0px';">
                            ${!t.dragimg3||t.dragimg3.length===0?"":`<lido-image border-radius="8px 8px 0px 0px" margin="0px 0px 0px 0px"  visible="true" width="landscape.202px,portrait.180px" height="landscape.200px,portrait.180px" bg-color="transparent" src="${t.dragimg3}"></lido-image>`}

                            ${!t.dragtext3||t.dragtext3===""?"":`<lido-text visible="true" height="100%" font-family="'Baloo Bhai 2'" font-size="landscape.36px,portrait.36px" string="${t.dragtext3}" bg-Color="transparent" onEntry="this.fontWeight='600';"></lido-text>`}
                        </lido-cell>
                    </lido-cell>
                </lido-cell>

                <lido-cell layout="row" margin="landscape.0px 0px 0px 0px,portrait.0px 0px 0px 0px" visible="true" bg-color="transparent" height="landscape.100%,portrait.20%" width="landscape.20%,portrait.100%" onEntry="this.border-radius='2px';">
                    <lido-cell layout="random" visible="true" width="100%" height="100%" bg-color="transparent" onEntry="this.display='flex';">
                        <lido-cell border-radius="8px" id="option4" value="${t.option4}" tab-index="9" height="landscape.270px,portrait.240px" width="landscape.200px,portrait.178px" type="drag" layout="col" visible="true" bg-Color="white" onEntry="this.padding='0px'; this.justifyContent='flex-start';">
                            ${!t.dragimg4||t.dragimg4.length===0?"":`<lido-image border-radius="8px 8px 0px 0px" margin="0px 0px 0px 0px"  visible="true" width="landscape.202px,portrait.180px" height="landscape.200px,portrait.180px" bg-color="transparent" src="${t.dragimg4}"></lido-image>`}

                            ${!t.dragtext4||t.dragtext4===""?"":`<lido-text visible="true" height="100%" font-family="'Baloo Bhai 2'" font-size="landscape.36px,portrait.36px" string="${t.dragtext4}" bg-Color="transparent" onEntry="this.fontWeight='600';"></lido-text>`}
                        </lido-cell>
                    </lido-cell>
                </lido-cell>

                    <lido-cell layout="row" margin="landscape.0px 0px 0px 0px,portrait.0px 0px 0px 0px" visible="true" bg-color="transparent" height="landscape.100%,portrait.20%" width="landscape.20%,portrait.100%" onEntry="this.border-radius='2px';">
                    <lido-cell layout="random" visible="true" width="100%" height="100%" bg-color="transparent" onEntry="">
                        <lido-cell border-radius="8px" id="option5" value="${t.option5}" tab-index="10" height="landscape.268px,portrait.240px" width="landscape.200px,portrait.178px" type="drag" layout="col" visible="true" bg-Color="white" onEntry="this.padding='0px';">
                            ${!t.dragimg5||t.dragimg5.length===0?"":`<lido-image border-radius="8px 8px 0px 0px" margin="0px 0px 0px 0px"  visible="true" width="landscape.202px,portrait.180px" height="landscape.200px,portrait.180px" bg-color="transparent" src="${t.dragimg5}"></lido-image>`}

                            ${!t.dragtext5||t.dragtext5===""?"":`<lido-text visible="true" height="100%" font-family="'Baloo Bhai 2'" font-size="landscape.36px,portrait.36px" string="${t.dragtext5}" bg-Color="transparent" onEntry="this.fontWeight='600';"></lido-text>`}
                        </lido-cell>
                    </lido-cell>
                </lido-cell>
            </lido-cell>
        </lido-cell>
    </lido-container>
    </main>`}var o,r,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    question: 'Match the jump number to the number reached when skip jumping by 3.',
    dropimg1: 'https://aeakbcdznktpsbrfsgys.storage.supabase.co/v1/object/public/template-assets/LetterPair/Cat.png',
    droptext1: 'Cat',
    dropimg2: '',
    droptext2: '34 Books + 45 Books',
    dropimg3: 'https://aeakbcdznktpsbrfsgys.storage.supabase.co/v1/object/public/template-assets/LetterPair/Cat.png',
    droptext3: '',
    dropimg4: 'https://aeakbcdznktpsbrfsgys.storage.supabase.co/v1/object/public/template-assets/LetterPair/Mouse_withbg.png',
    droptext4: '',
    dropimg5: 'https://aeakbcdznktpsbrfsgys.storage.supabase.co/v1/object/public/template-assets/LetterPair/Mouse_nobg.png',
    droptext5: 'Mouse',
    dragimg1: '',
    dragtext1: 'Cat',
    dragimg2: '',
    dragtext2: '34 Books + 45 Books',
    dragimg3: 'https://aeakbcdznktpsbrfsgys.storage.supabase.co/v1/object/public/template-assets/LetterPair/Mouse_withbg.png',
    dragtext3: 'Camel',
    dragimg4: 'https://aeakbcdznktpsbrfsgys.storage.supabase.co/v1/object/public/template-assets/LetterPair/Cat.png',
    dragtext4: 'Mouse',
    dragimg5: 'https://aeakbcdznktpsbrfsgys.storage.supabase.co/v1/object/public/template-assets/LetterPair/Mouse_nobg.png',
    dragtext5: '',
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
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const x=["LetterPairing"];export{e as LetterPairing,x as __namedExportsOrder,s as default};
