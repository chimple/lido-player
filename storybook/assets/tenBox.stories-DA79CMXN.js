import"./lit-element-BxxbMms4.js";import{x as d}from"./lit-html-DLYuhZ0i.js";const m={title:"Templates/TenBox",argTypes:{num1:{control:"number"},num2:{control:"number"},num3:{control:"number"},operator:{control:"select",options:["+","-"]}}},r={args:{num1:13,num2:15,operator:"+"},render:e=>{const t=h(e);return d`<lido-home .xmlData="${t}"></lido-home>`}},p=(e,t,l,i)=>{let o=0;return l==="+"?(o=e+t,i!==void 0&&(o+=i)):l==="-"&&(o=e-t,i!==void 0&&(o-=i)),o},c=e=>e.toString().split("").map((l,i)=>`<lido-text visible="true" id="drop${i}" string="?" tab-index="${i}" font-size="150px" font-color="#facf50" bg-color="#000000a5" type="drop" height="165px" width="115px" border-radius="15px" value="${l}" onEntry="this.fontWeight='bold';"></lido-text>`).join(""),b=()=>{let e="";for(let t=0;t<10;t++)e+=`
      <lido-text 
        visible="true" 
        id="drag${t}" 
        type="drag" 
        string="${t}" 
        value="${t}" 
        font-size="150px" 
        font-color="#3d1d0c" 
        height="165px" 
        width="115px" 
        bg-color="#f5f098" 
        border-radius="15px" 
        onEntry="this.fontWeight='bold';">
      </lido-text>
    `;return e},h=e=>{const t=p(e.num1,e.num2,e.operator,e.num3);return`
    <main>
    <lido-container visible="true" objective="${t.toString().split("").join(",")}" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Tenbox/tenbox.png" is-continue-on-correct="true" onCorrect="this.sleep='1500';" drop-action="infinite-drop" id="lido-container" >
    <lido-cell visible="true" layout="col" height="100%" width="100%" bg-color="transparent">
        <lido-cell visible="true" layout="landscape.row, portrait.col" height="53%" width="auto" gap="20px" bg-color="transparent">
            <lido-cell visible="true" layout="col" height="100%" width="500px" bg-color="transparent">
                ${!e.num3&&e.num1>=10?`
                    <lido-cell visible="true" height="50%" width="100%" layout="row">
                        <lido-text id="tenBox" visible="false" font-size="150px" bg-color="#fbd061" width="100%" height="70%" onEntry="this.border='4px solid #c86d29';" border-radius="20px">
                            <lido-image visible="true" is-slice="true" width="35%" height="100%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Tenbox/sunflower.png">
                                <lido-text visible="true" string="10" font-size="145px" bg-color="transparent" onEntry="this.fontWeight='700';"></lido-text>
                            </lido-image>
                        </lido-text>
                        <lido-math-matrix visible="true" height="100%" width="100%" rows="5" cols="2" border="2px solid orange" border-radius="7px" active-bg-color="white" deactive-bg-color="white" onEntry="this.sleep='1000'; this.display='none'; tenBox.display='flex';" defualt-fill="10" clickable="false" matrix-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/FoodJar/apple.png"></lido-math-matrix>
                    </lido-cell>
                    `:""}

                ${!e.num3&&e.num1===20?`
                    <lido-cell visible="true" height="50%" width="100%" layout="row">
                        <lido-text id="tenBox1" visible="false" font-size="150px" bg-color="#fbd061" width="100%" height="70%" onEntry="this.border='4px solid #c86d29';" border-radius="20px">
                            <lido-image visible="true" is-slice="true" width="35%" height="100%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Tenbox/sunflower.png">
                                <lido-text visible="true" string="10" font-size="145px" bg-color="transparent" onEntry="this.fontWeight='700';"></lido-text>
                            </lido-image>
                        </lido-text>
                        <lido-math-matrix visible="true" height="100%" width="100%" rows="5" cols="2" border="2px solid orange" border-radius="7px" active-bg-color="white" deactive-bg-color="white" onEntry="this.sleep='1000'; this.display='none'; tenBox1.display='flex';" defualt-fill="10" clickable="false" matrix-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/FoodJar/apple.png"></lido-math-matrix>
                    </lido-cell>
                    `:`<lido-math-matrix visible="${e.num1!==10}" height="50%" width="100%" rows="5" cols="2" border="2px solid orange" border-radius="7px" active-bg-color="white" deactive-bg-color="white" defualt-fill="${e.num1>10?e.num1-10:e.num1}" clickable="false" matrix-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/FoodJar/apple.png"></lido-math-matrix>`}
                

                

            </lido-cell>

            <lido-cell visible="true" layout="col" height="100%" width="500px" bg-color="transparent">
                ${!e.num3&&e.num2>=10?`
                    <lido-cell visible="true" height="50%" width="100%" layout="row">
                        <lido-text id="tenBox2" visible="false" font-size="150px" bg-color="#fbd061" width="100%" height="70%" onEntry="this.border='4px solid #c86d29';" border-radius="20px">
                            <lido-image visible="true" is-slice="true" width="35%" height="100%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Tenbox/sunflower.png">
                                <lido-text visible="true" string="10" font-size="145px" bg-color="transparent" onEntry="this.fontWeight='700';"></lido-text>
                            </lido-image>
                        </lido-text>
                        <lido-math-matrix visible="true" height="100%" width="100%" rows="5" cols="2" border="2px solid orange" border-radius="7px" active-bg-color="white" deactive-bg-color="white" onEntry="this.sleep='1000'; this.display='none'; tenBox2.display='flex';" defualt-fill="10" clickable="false" matrix-image="${e.operator==="+"?"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/FoodJar/apple.png":"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Tenbox/apple%20outline.png"}"></lido-math-matrix>
                    </lido-cell>
                    `:""}
                

                ${!e.num3&&e.num2===20?`
                    <lido-cell visible="true" height="50%" width="100%" layout="row">
                        <lido-text id="tenBox3" visible="false" font-size="150px" bg-color="#fbd061" width="100%" height="70%" onEntry="this.border='4px solid #c86d29';" border-radius="20px">
                            <lido-image visible="true" is-slice="true" width="35%" height="100%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Tenbox/sunflower.png">
                                <lido-text visible="true" string="10" font-size="145px" bg-color="transparent" onEntry="this.fontWeight='700';"></lido-text>
                            </lido-image>
                        </lido-text>
                        <lido-math-matrix visible="true" height="100%" width="100%" rows="5" cols="2" border="2px solid orange" border-radius="7px" active-bg-color="white" deactive-bg-color="white" onEntry="this.sleep='1000'; this.display='none'; tenBox3.display='flex';" defualt-fill="10" clickable="false" matrix-image="${e.operator==="+"?"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/FoodJar/apple.png":"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Tenbox/apple%20outline.png"}"></lido-math-matrix>
                    </lido-cell>
                    `:`<lido-math-matrix visible="${e.num2!==10}" height="50%" width="100%" rows="5" cols="2" border="2px solid orange" border-radius="7px" active-bg-color="white" deactive-bg-color="white" defualt-fill="${e.num2>10?e.num2-10:e.num2}" clickable="false" matrix-image="${e.operator==="+"?"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/FoodJar/apple.png":"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Tenbox/apple%20outline.png"}"></lido-math-matrix>`}
            </lido-cell>
            ${e.num3?`
            <lido-cell visible="true" layout="col" height="100%" width="500px" bg-color="transparent">
                <lido-math-matrix visible="true" height="50%" width="100%" rows="5" cols="2" border="2px solid orange" border-radius="7px" active-bg-color="white" deactive-bg-color="white" defualt-fill="${e.num3}" clickable="false" matrix-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/FoodJar/apple.png"></lido-math-matrix>
            </lido-cell>`:""}
        </lido-cell>
        <lido-cell visible="true" layout="row" height="20%" width="auto" gap="20px" bg-color="transparent">
            <lido-text visible="true" string="${e.num1}${e.operator}${e.num2}${e.num3?e.operator+e.num3:""} = " font-size="150px" font-color="white" onEntry="this.fontWeight='bold';" onTouch="this.fontSize='20px'; this.visibility='hidden';"></lido-text>
            ${c(t)}
        </lido-cell>
        <lido-cell visible="true" layout="landscape.row, portrait.flex" height="landscpae.20%, portrait.30%" gap="landscape.0, portrait.80px" width="100%" bg-color="transparent">
            
            ${b()}

        </lido-cell>
    </lido-cell>
</lido-container>
</main>`};var s,a,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    num1: 13,
    num2: 15,
    // num3: 2,
    operator: '+'
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(n=(a=r.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const x=["TenBoxTemplate"];export{r as TenBoxTemplate,x as __namedExportsOrder,m as default};
