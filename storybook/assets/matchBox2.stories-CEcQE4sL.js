import"./lit-element-DRlmAcsz.js";import{b as o}from"./lit-html-s0HVm7S4.js";const n={title:"Templates/matchBox2",argTypes:{dragimg1:{control:"file"},dragimg2:{control:"file"},dragimg3:{control:"file"},dragimg4:{control:"file"}}},e={args:{drag1:"lion",dragimg1:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/picturemeaning/lion.jpg",drag2:"zebra",dragimg2:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/picturemeaning/zebra.jpg",drag3:"tiger",dragimg3:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/picturemeaning/tiger.jpg",drag4:"hygine",dragimg4:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/picturemeaning/hygiene%201.png",drop1:"hygine",dropimg1:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/picturemeaning/hygiene%201.png",drop2:"lion",dropimg2:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/picturemeaning/lion.jpg",drop3:"tiger",dropimg3:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/picturemeaning/tiger.jpg",drop4:"zebra",dropimg4:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/picturemeaning/zebra.jpg"},render:t=>{const i=l(t);return o`<lido-home .xmlData="${i}"></lido-home>`}};function l(t){return`
  <main>
        <lido-container id="lido-container" is-allow-only-correct="true" is-continue-on-correct="true" objective="${t.drop1},${t.drop2},${t.drop3},${t.drop4}" visible="true" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/phonic-tractor/bg-image.png" dropAttr="EnableAnimation" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onInCorrect="this.sleep='2000';">
        <!-- Chimple Avatar -->
        <lido-cell layout="pos" id="pos1" disableEdit="true" value="pos2" height="landscape.205px,portrait.195px" width="landscape.209px,portrait.209px" x="landscape.-30px,portrait.80%" y="landscape.700px,portrait.146px" ariaHidden="true" bgColor="transparent" visible="true" z="1"  onEntry="">
                <lido-avatar id="lido-avatar" disableEdit="true" visible="true"  height="100%"  width="100%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" >
                </lido-avatar>
        </lido-cell>
            
        <lido-cell visible="true" flex-direction="landscape., portrait.row-reverse" bg-color="transparent" layout="portrait.row,landscape.col" width="100%" height="100%" onEntry="">
            
            <lido-cell visible="true" margin="20px 0px 0px 0px" bg-color="transparent" layout="landscape.row,portrait.col" height="landscape.50%,portrait.96%" width="landscape.100%,portrait.100%" onEntry="this.gap='10px';">
                
                <lido-cell layout="row" visible="true" bg-color="transparent" height="landscape.100%,portrait.20%" width="landscape.20%,portrait.100%" onEntry="">
                    <lido-cell layout="random" visible="true" width="100%" height="100%" bg-color="transparent" onEntry="">
                        <lido-cell id="image1" value="${t.drop1}" tab-index="1" height="landscape.270px,portrait.240px" width="landscape.200px,portrait.180px" type="drop" layout="col" visible="true" bg-Color="white" onEntry="this.padding='0px'; this.borderRadius='8px';">
                            <lido-image border-radius="8px 8px 0px 0px" margin="0px 0px 0px 0px"  visible="true" width="landscape.202px,portrait.180px" height="landscape.200px,portrait.180px" bg-color="transparent" src="${t.dropimg1}"></lido-image>
                        </lido-cell>
                    </lido-cell>
                </lido-cell>
                <lido-cell layout="row" visible="true" bg-color="transparent" height="landscape.100%,portrait.20%" width="landscape.20%,portrait.100%" onEntry="">
                    <lido-cell layout="random" visible="true" width="100%" height="100%" bg-color="transparent" onEntry="">
                        <lido-cell id="image2" value="${t.drop2}" tab-index="2" height="landscape.270px,portrait.240px" width="landscape.200px,portrait.180px" type="drop" layout="col" visible="true" bg-Color="white" onEntry="this.padding='0px'; this.borderRadius='8px';">
                            <lido-image border-radius="8px 8px 0px 0px" margin="0px 0px 0px 0px"  visible="true" width="landscape.202px,portrait.180px" height="landscape.200px,portrait.180px" bg-color="transparent" src="${t.dropimg2}"></lido-image>
                        </lido-cell>
                    </lido-cell>
                </lido-cell>
                <lido-cell layout="row" visible="true" bg-color="transparent" height="landscape.100%,portrait.20%" width="landscape.20%,portrait.100%" onEntry="">
                    <lido-cell layout="random" visible="true" width="100%" height="100%" bg-color="transparent" onEntry="">
                        <lido-cell id="image3" value="${t.drop3}" tab-index="3" height="landscape.270px,portrait.240px" width="landscape.200px,portrait.180px" type="drop" layout="col" visible="true" bg-Color="white" onEntry="this.padding='0px'; this.borderRadius='8px';">
                            <lido-image border-radius="8px 8px 0px 0px" margin="0px 0px 0px 0px"  visible="true" width="landscape.202px,portrait.180px" height="landscape.200px,portrait.180px" bg-color="transparent" src="${t.dropimg3}"></lido-image>
                        </lido-cell>
                    </lido-cell>
                </lido-cell>
                <lido-cell layout="row" visible="true" bg-color="transparent" height="landscape.100%,portrait.20%" width="landscape.20%,portrait.100%" onEntry="">
                    <lido-cell layout="random" visible="true" width="100%" height="100%" bg-color="transparent" onEntry="">
                        <lido-cell id="image4" value="${t.drop4}" tab-index="4" height="landscape.270px,portrait.240px" width="landscape.200px,portrait.180px" type="drop" layout="col" visible="true" bg-Color="white" onEntry="this.padding='0px'; this.borderRadius='8px';">
                            <lido-image border-radius="8px 8px 0px 0px" margin="0px 0px 0px 0px"  visible="true" width="landscape.202px,portrait.180px" height="landscape.200px,portrait.180px" bg-color="transparent" src="${t.dropimg4}"></lido-image>
                        </lido-cell>
                    </lido-cell>
                </lido-cell>
                
            </lido-cell>



            <lido-cell visible="true" margin="landscape.0px 0px 0px 0px,portrait.0px 0px 0px 0px" bg-color="#fbcab5" layout="landscape.row,portrait.col" height="landscape.50%,portrait.96%" width="95%" border-radius="10px" onEntry="">
                
                <lido-cell layout="row" margin="landscape.0px 0px 0px 0px,portrait.0px 0px 0px 0px" visible="true" bg-color="transparent" height="landscape.100%,portrait.20%" width="landscape.20%,portrait.100%" onEntry="">
                    <lido-cell layout="random" visible="true" width="100%" height="100%" bg-color="transparent">
                        <lido-cell border-radius="8px" id="option1" value="${t.drag1}" tab-index="5" height="landscape.268px,portrait.240px" width="landscape.200px,portrait.178px" type="drag" layout="col" visible="true" bg-Color="white" onEntry="this.padding='0px';">
                            <lido-image border-radius="8px 8px 0px 0px" margin="0px 0px 0px 0px"  visible="true" width="landscape.202px,portrait.180px" height="landscape.200px,portrait.180px" bg-color="transparent" src="${t.dragimg1}"></lido-image>
                        </lido-cell>
                    </lido-cell>
                </lido-cell>
                <lido-cell layout="row" margin="landscape.0px 0px 0px 0px,portrait.0px 0px 0px 0px" visible="true" bg-color="transparent" height="landscape.100%,portrait.20%" width="landscape.20%,portrait.100%" onEntry="">
                    <lido-cell layout="random" visible="true" width="100%" height="100%" bg-color="transparent">
                        <lido-cell border-radius="8px" id="option2" value="${t.drag2}" tab-index="6" height="landscape.268px,portrait.240px" width="landscape.200px,portrait.178px" type="drag" layout="col" visible="true" bg-Color="white" onEntry="this.padding='0px';">
                            <lido-image border-radius="8px 8px 0px 0px" margin="0px 0px 0px 0px"  visible="true" width="landscape.202px,portrait.180px" height="landscape.200px,portrait.180px" bg-color="transparent" src="${t.dragimg2}"></lido-image>
                        </lido-cell>
                    </lido-cell>
                </lido-cell>
                <lido-cell layout="row" margin="landscape.0px 0px 0px 0px,portrait.0px 0px 0px 0px" visible="true" bg-color="transparent" height="landscape.100%,portrait.20%" width="landscape.20%,portrait.100%" onEntry="">
                    <lido-cell layout="random" visible="true" width="100%" height="100%" bg-color="transparent">
                        <lido-cell border-radius="8px" id="option3" value="${t.drag3}" tab-index="7" height="landscape.268px,portrait.240px" width="landscape.200px,portrait.178px" type="drag" layout="col" visible="true" bg-Color="white" onEntry="this.padding='0px';">
                            <lido-image border-radius="8px 8px 0px 0px" margin="0px 0px 0px 0px"  visible="true" width="landscape.202px,portrait.180px" height="landscape.200px,portrait.180px" bg-color="transparent" src="${t.dragimg3}"></lido-image>
                        </lido-cell>
                    </lido-cell>
                </lido-cell>
                <lido-cell layout="row" margin="landscape.0px 0px 0px 0px,portrait.0px 0px 0px 0px" visible="true" bg-color="transparent" height="landscape.100%,portrait.20%" width="landscape.20%,portrait.100%" onEntry="">
                    <lido-cell layout="random" visible="true" width="100%" height="100%" bg-color="transparent">
                        <lido-cell border-radius="8px" id="option4" value="${t.drag4}" tab-index="8" height="landscape.268px,portrait.240px" width="landscape.200px,portrait.178px" type="drag" layout="col" visible="true" bg-Color="white" onEntry="this.padding='0px';">
                            <lido-image border-radius="8px 8px 0px 0px" margin="0px 0px 0px 0px"  visible="true" width="landscape.202px,portrait.180px" height="landscape.200px,portrait.180px" bg-color="transparent" src="${t.dragimg4}"></lido-image>
                        </lido-cell>
                    </lido-cell>
                </lido-cell>

            </lido-cell>


        </lido-cell>

    </lido-container>
  </main>
   `}var a,r,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    drag1: 'lion',
    dragimg1: "https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/picturemeaning/lion.jpg",
    drag2: 'zebra',
    dragimg2: "https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/picturemeaning/zebra.jpg",
    drag3: 'tiger',
    dragimg3: "https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/picturemeaning/tiger.jpg",
    drag4: 'hygine',
    dragimg4: "https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/picturemeaning/hygiene%201.png",
    drop1: 'hygine',
    dropimg1: "https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/picturemeaning/hygiene%201.png",
    drop2: 'lion',
    dropimg2: "https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/picturemeaning/lion.jpg",
    drop3: 'tiger',
    dropimg3: "https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/picturemeaning/tiger.jpg",
    drop4: 'zebra',
    dropimg4: "https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/picturemeaning/zebra.jpg"
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(p=(r=e.parameters)==null?void 0:r.docs)==null?void 0:p.source}}};const c=["Blanks"];export{e as Blanks,c as __namedExportsOrder,n as default};
