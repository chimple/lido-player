import"./lit-element-BxxbMms4.js";import{x as o}from"./lit-html-DLYuhZ0i.js";const l={title:"Templates/order-tractor",argTypes:{option1:{control:"text"},option2:{control:"text"},option3:{control:"text"},option4:{control:"text"},option5:{control:"text"},answer1:{control:"text"},answer2:{control:"text"},answer3:{control:"text"},answer4:{control:"text"},answer5:{control:"text"}}},a={args:{option1:"1",option2:"2",option3:"3",option4:"4",option5:"5",answer1:"5",answer2:"4",answer3:"3",answer4:"2",answer5:"1"},render:t=>{const s=i(t);return o`<lido-home .xmlData="${s}"></lido-home>`}};function i(t){return`
    <main>
    <lido-container id="lido-container" is-allow-only-correct="true" show-Check="false" is-Continue-On-Correct="true" after-Drop="false" objective="${[t.answer1,t.answer2,t.answer3,t.answer4,t.answer5].join(",")}" visible="true" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/Spring.png" custom-style="#drop1, #drop2,#drop3,#drop4,#drop5{border: none !important;}" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';  lido-avatar.animation='placeToLeft 2.5s linear'; answer.animation='placeToLeft 2.5s linear';  truck.animation='placeToLeft 2.5s linear'; trainAudio.speak='true'; this.sleep='1000';" onInCorrect="lido-avatar.avatarAnimate='Fail';" >
                <!-- Chimple Avatar -->
        <lido-cell layout="pos" id="pos1" disableEdit="true" value="pos2" height="300px" width="300px" x="landscape.50px,portrait.10px" y="landscape.120px,portrait.230px" ariaHidden="true" bgColor="transparent" visible="true"  onEntry="this.animation='rightToPlace 2.5s linear';">
                <lido-avatar id="lido-avatar" disableEdit="true" visible="true"  height="100%"  width="100%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" altText="{chimpleCharacterRive}">
                </lido-avatar>
        </lido-cell>

        <!-- truck -->
        <lido-cell visible="true" id="truck" layout="row" height="60%" width="landscape.100%, portrait.auto" margin="landscape.0,portrait.650px -44px -11px -146px" bg-color="transparent"  onEntry=" this.animation='rightToPlace 2.5s linear';" onCorrect="" >
            <lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/ordertractor_cart.png" width="landscape.220px,portrait.250px" padding="0px" margin="landscape.350px -81px 0px 34px,portrait.172px -44px -11px -87px"></lido-image>

                <lido-text id="question" visible="false" string="arrange the number blocks in increasing or decreasing order and complete the pattern train" value="arrange the number blocks in increasing or decreasing order and complete the pattern train" onEntry="this.sleep='2000';this.speak='true';"></lido-text>
                <lido-text id="trainAudio" visible="false" audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/train1.m4a" onEntry="this.speak='true';"></lido-text>
            <lido-cell visible="true" layout="col" bg-color="transparent" margin="landscape.0px -36px 0px -130px,portrait.0px 10px 0px 30px"  >

                <lido-image visible="true" id="drop1" tab-index="1" type="drop" value="${t.answer1}" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/box_answer_soundtrain_trans.png" margin="landscape.200px 0px -90px 0px,portrait.50px 0px 0px 0px" width="landscape.200px,portrait.160px" background="transparent"></lido-image>
                <lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain_upper.png" margin="landscape.-5px 0px 0px 0px,portrait.-70px 0px 0px 0px"  width="landscape.200px,portrait.160px" background="transparent"></lido-image>
                <lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain_base%20(1).png" margin="landscape.-175px 0px 0px 0px,portrait.-140px 0px 0px 0px" width="landscape.200px,portrait.160px" background="transparent"></lido-image>
                <lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain_base%20(1).png" margin="landscape.-175px 0px 0px 0px,portrait.-140px 0px 0px 0px" width="landscape.200px,portrait.160px" background="transparent"></lido-image>
                <lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain_base%20(1).png" margin="landscape.-175px 0px 0px 0px,portrait.-140px 0px 0px 0px" width="landscape.200px,portrait.160px" background="transparent"></lido-image>
                <lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain_base%20(1).png" margin="landscape.-175px 0px 0px 0px,portrait.-140px 0px 0px 0px" width="landscape.200px,portrait.160px" background="transparent"></lido-image>
                <lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain_base%20(1).png" margin="landscape.-175px 0px -150px 0px,portrait.-140px 0px 0px 0px" width="landscape.200px,portrait.160px" background="transparent"></lido-image>
                <lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain.png" margin="landscape.-1px 18px 0px 0px,portrait.-120px 12px 0px 0px"  width="landscape.217px,portrait.170px" background="transparent"></lido-image>
            </lido-cell>

            <lido-cell visible="true" layout="col" bg-color="transparent" margin="landscape.30px -31px 0px -198px,portrait.20px 10px 0px -40px" padding="0px" >

                <lido-image visible="true" id="drop2" tab-index="2" type="drop" value="${t.answer2}" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/box_answer_soundtrain_trans.png" margin="landscape.200px 0px -90px 0px,portrait.50px 0px 0px 0px" width="landscape.200px,portrait.160px" background="transparent"></lido-image>
                <lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain_upper.png" margin="landscape.-5px 0px 0px 0px,portrait.-70px 0px 0px 0px"  width="landscape.200px,portrait.160px" background="transparent"></lido-image>
                <lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain_base%20(1).png" margin="landscape.-175px 0px 0px 0px,portrait.-140px 0px 0px 0px" width="landscape.200px,portrait.160px" background="transparent"></lido-image>
                <lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain_base%20(1).png" margin="landscape.-175px 0px 0px 0px,portrait.-140px 0px 0px 0px" width="landscape.200px,portrait.160px" background="transparent"></lido-image>
                <lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain_base%20(1).png" margin="landscape.-175px 0px 0px 0px,portrait.-140px 0px 0px 0px" width="landscape.200px,portrait.160px" background="transparent"></lido-image>
                <lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain_base%20(1).png" margin="landscape.-175px 0px -150px 0px,portrait.-140px 0px 0px 0px" width="landscape.200px,portrait.160px" background="transparent"></lido-image>
                <lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain.png" margin="landscape.-2px 17px 0px 0px,portrait.-120px 12px 0px 0px"  width="landscape.217px,portrait.170px" background="transparent"></lido-image>
            </lido-cell>

            <lido-cell visible="true" layout="col" bg-color="transparent" margin=" landscape.50px -44px 0px -205px,portrait.40px 0px 0px -40px" >

                <lido-image visible="true" id="drop3" tab-index="3" type="drop" value="${t.answer3}" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/box_answer_soundtrain_trans.png" margin="landscape.200px 0px -90px 0px,portrait.50px 0px 0px 0px" width="landscape.200px,portrait.160px" background="transparent"></lido-image>
                <lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain_upper.png" margin="landscape.-5px 0px 0px 0px,portrait.-70px 0px 0px 0px"  
                width="landscape.200px,portrait.160px" background="transparent"></lido-image>
                <lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain_base%20(1).png" margin="landscape.-175px 0px 0px 0px,portrait.-140px 0px 0px 0px" width="landscape.200px,portrait.160px" background="transparent"></lido-image>
                <lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain_base%20(1).png" margin="landscape.-175px 0px 0px 0px,portrait.-140px 0px 0px 0px" width="landscape.200px,portrait.160px" background="transparent"></lido-image>
                <lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain_base%20(1).png" margin="landscape.-175px 0px -150px 0px,portrait.-140px 0px 0px 0px" width="landscape.200px,portrait.160px" background="transparent"></lido-image>
                <lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain.png" margin="landscape.-2px 17px 0px 0px,portrait.-120px 11px 0px 0px"  width="landscape.218px,portrait.170px" background="transparent"></lido-image>
            </lido-cell>

            <lido-cell visible="true" layout="col" bg-color="transparent" margin="landscape.70px 0px 0px -207px,portrait.60px 0px 0px -40px" >

                <lido-image visible="true" id="drop4" tab-index="4" type="drop" value="${t.answer4}" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/box_answer_soundtrain_trans.png"  margin="landscape.200px 0px -90px 0px,portrait.50px 0px 0px 0px"
                width="landscape.200px,portrait.160px" background="transparent"></lido-image>
                <lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain_upper.png" margin="landscape.-5px 0px 0px 0px,portrait.-70px 0px 0px 0px"  
                width="landscape.200px,portrait.160px" background="transparent"></lido-image>
                <lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain_base%20(1).png" margin="landscape.-175px 0px 0px 0px,portrait.-140px 0px 0px 0px" width="landscape.200px,portrait.160px" background="transparent"></lido-image>
                <lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain_base%20(1).png" margin="landscape.-175px 0px -150px 0px,portrait.-140px 0px 0px 0px" width="landscape.200px,portrait.160px" background="transparent"></lido-image>
                <lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain.png" margin="landscape.-2px 18px 0px 0px,portrait.-120px 12px 0px 0px"  width="landscape.217px,portrait.170px" background="transparent"></lido-image>
            </lido-cell>

            <lido-cell visible="true" layout="col" bg-color="transparent" padding="0" margin="landscape.90px 0px 0px -238px,portrait.80px 0px 0px -26px" >

                <lido-image visible="true" id="drop5" tab-index="5" type="drop" value="${t.answer5}" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/box_answer_soundtrain_trans.png" margin="landscape.200px 0px -90px 0px,portrait.50px 0px 0px 0px" width="landscape.200px,portrait.160px" background="transparent"></lido-image>
                <lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain_upper.png" margin="landscape.-5px 0px 0px 0px,portrait.-70px 0px 0px 0px"  
                width="landscape.200px,portrait.160px" background="transparent"></lido-image>
                <lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain_base%20(1).png" margin="landscape.-175px 0px -150px 0px,portrait.-140px 0px 0px 0px" width="landscape.200px,portrait.160px" background="transparent"></lido-image>
                <lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain.png" margin="landscape.-1px 16px 0px 0px,portrait.-120px 13px 0px 0px"  width="landscape.217px,portrait.170px" background="transparent"></lido-image>
            </lido-cell>

        </lido-cell>
        

        <!-- answers -->
        <lido-cell visible="true" id="answer" layout="row" height="40%" width="100%" bg-color="transparent" onEntry="this.alignItems='center';this.justify-content='space-around'"  >
            
                <lido-text id="drg1"  height="landscape.200px,portrait.160px" width="landscape.200px,portrait.160px" visible="true" font-family="'Baloo Bhai 2'" font-size="110px" string="${t.option1}" value="${t.option1}" tab-index="6" bg-Color="transparent" onEntry="  this.fontWeight='1000';" fontColor="gold" type="drag" border-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/box_answer_soundtrain.png" ></lido-text>
            
                <lido-text id="drg2"  height="landscape.200px,portrait.160px" width="landscape.200px,portrait.160px" visible="true" font-family="'Baloo Bhai 2'" font-size="110px" string="${t.option2}" value="${t.option2}" tab-index="7" bg-Color="transparent" onEntry="  this.fontWeight='1000';" fontColor="gold" type="drag" border-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/box_answer_soundtrain.png" ></lido-text>

                <lido-text id="drg3"   height="landscape.200px,portrait.160px" width="landscape.200px,portrait.160px" visible="true" font-family="'Baloo Bhai 2'" font-size="110px" string="${t.option3}" value="${t.option3}" tab-index="8" bg-Color="transparent" onEntry="  this.fontWeight='1000';" fontColor="gold" type="drag" border-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/box_answer_soundtrain.png" ></lido-text>

                <lido-text id="drg4"   height="landscape.200px,portrait.160px" width="landscape.200px,portrait.160px" visible="true" font-family="'Baloo Bhai 2'" font-size="110px" string="${t.option4}" value="${t.option4}" tab-index="9" bg-Color="transparent" onEntry="  this.fontWeight='1000';" fontColor="gold" type="drag" border-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/box_answer_soundtrain.png" ></lido-text>
            
                <lido-text id="drg5"   height="landscape.200px,portrait.160px" width="landscape.200px,portrait.160px" visible="true" font-family="'Baloo Bhai 2'" font-size="110px" string="${t.option5}" value="${t.option5}" tab-index="10" bg-Color="transparent" onEntry="  this.fontWeight='1000';" fontColor="gold" type="drag" border-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/box_answer_soundtrain.png" ></lido-text>
            
        </lido-cell>
        

    </lido-container>
    </main>
  `}var r,p,e;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    option1: '1',
    option2: '2',
    option3: '3',
    option4: '4',
    option5: '5',
    answer1: '5',
    answer2: '4',
    answer3: '3',
    answer4: '2',
    answer5: '1'
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(e=(p=a.parameters)==null?void 0:p.docs)==null?void 0:e.source}}};const x=["OrderTractor"];export{a as OrderTractor,x as __namedExportsOrder,l as default};
