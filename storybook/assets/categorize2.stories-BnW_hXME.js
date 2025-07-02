import"./lit-element-BxxbMms4.js";import{x as s}from"./lit-html-DLYuhZ0i.js";const h={title:"Templates/Categorize2",argTypes:{heading:{control:"text"},image1:{control:"file"},image2:{control:"file"},image3:{control:"file"},image4:{control:"file"},image5:{control:"file"},image6:{control:"file"},option1:{control:"text"},option2:{control:"text"},option3:{control:"text"},option4:{control:"text"},option5:{control:"text"},option6:{control:"text"},category1:{control:"text"},category2:{control:"text"},category3:{control:"text"},correct1:{control:"text"},correct2:{control:"text"},correct3:{control:"text"}}},e={args:{heading:"कीटों को उनके पैरों की संख्या के अनुसार बताएँ!",image1:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Categorize/insect3.png",image2:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Categorize/insect2.png",image3:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Categorize/insect3.png",image4:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Categorize/insect4.png",image5:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Categorize/insect5.png",image6:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Categorize/insect5.png",option1:"मकड़ी-2",option2:"झींगुर",option3:"मकड़ी",option4:"मक्खी",option5:"कनखजूरा",option6:"कनखजूरा-2",category1:"छह पैर वाले",category2:"आठ पैर वाले",category3:"कई पैर वाले",correct1:"झींगुर,मक्खी",correct2:"मकड़ी,मकड़ी-2",correct3:"कनखजूरा,कनखजूरा-2"},render:t=>{const i=n(t);return s`<lido-home .xmlData="${i}"></lido-home>`}};function n(t){return`
  <main>
   <lido-container id="lido-container" show-next-button="true" show-drop-border="false" tabIndex="1"  value="mainContainer1"   bg-Color="#FFF"  height="100%" width="100%" visible="true" objective="${`(${t.correct1.split(",").join("|")}),(${t.correct2.split(",").join("|")}),(${t.correct3.split(",").join("|")})`}" show-Check="false" is-Continue-On-Correct="true" after-Drop="false" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';"   onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" is-allow-only-correct="false"   > 
        
        <!-- parent cell -->
        <lido-cell layout="col" visible="true"  height="100%"  width="98%" bgColor="transparent"  margin="landscape.83px 0px 0px 0px, portrait.36px 0px -49px 0px">
            <!-- Chimple Avatar -->
            <lido-cell layout="pos" id="pos1" disableEdit="true" value="pos2" height="landscape.205px,portrait.195px" width="landscape.209px,portrait.209px" x="landscape.12px,portrait.-17px" y="landscape.68px,portrait.146px" ariaHidden="true" bgColor="transparent" visible="true"  onEntry="">
                <lido-avatar id="lido-avatar" disableEdit="true" visible="true"  height="100%"  width="100%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" altText="{chimpleCharacterRive}">
                </lido-avatar>
            </lido-cell>

            <!-- heading -->
            <lido-text id="heading"  tabIndex="2"   visible="true" string="${t.heading}" font="'Baloo Bhai 2'" fontColor="#323232" font-size="landscape.44px,portrait.32px" bg-Color="transparent" onEntry="  this.fontWeight='400';"   margin="landscape.0px 0px 0px 0px, portrait.46px 0px -39px 0px" >
            </lido-text>
            <!-- dropElements -->
            <lido-cell layout="row" visible="true"  height="landscape.38%,portrait.41%" width="100%" bg-Color="transparent" margin="landscape.7px 0px 0px 0px,portrait.55px 0px -73px 0px"   >
                <lido-cell id="cate1" z="100"  visible="true"  width="landscape.32%,portrait.30%" height="100%" bg-Color="#E3F5FC"  onEntry="this.border-radius='6px';this.border=' 2px dashed #326B80';this.display='flex';this.flex-direction='column';this.align-items='center';" onTouch="this.addClass='highlight-element'; cate2.removeClass='highlight-element'; cate3.removeClass='highlight-element';">
                    <lido-text visible="true" font-size="landscape.32px,portrait.32px" string="${t.category1}" bg-Color="transparent" onEntry="  this.fontWeight='600';" ></lido-text>
                    <lido-cell  layout="landscape.wrap,portrait.col" id="category1" tab-index="3"  visible="true" value="${t.correct1}" type="category" height="900px" width="-18px" bg-color="#E3F5FC" onEntry=" this.grid-template-columns=' repeat(2, 1fr)'; this.gap=' 10px'; this.overflow-y=' auto';" ></lido-cell>
                </lido-cell>
                <lido-cell id="cate2" z="100"  visible="true"  width="landscape.32%,portrait.30%" height="100%" bg-Color="#F2EAFC" onEntry="this.border-radius='6px';this.border=' 2px dashed #67428F';this.display='flex';this.flex-direction='column';this.align-items='center';" onTouch="this.addClass='highlight-element'; cate1.removeClass='highlight-element'; cate3.removeClass='highlight-element';">
                    <lido-text visible="true" font-size="landscape.32px,portrait.32px" string="${t.category2}" bg-Color="transparent" onEntry="  this.fontWeight='600';" ></lido-text>
                    <lido-cell layout="landscape.wrap,portrait.col" id="category2" tab-index="4"  visible="true" value="${t.correct2}" type="category" height="900px" width="-18px" bg-color="#F2EAFC" onEntry=" this.grid-template-columns=' repeat(2, 1fr)'; this.gap=' 10px'; this.overflow-y=' auto'; this.flex-direction='column';" ></lido-cell>
                </lido-cell>
                <lido-cell id="cate3" z="100"  visible="true" width="landscape.32%,portrait.30%" height="100%" bg-Color="#DAF1BC" onEntry="this.border-radius='6px'; this.border=' 2px dashed #799650';this.display='flex';this.flex-direction='column';this.align-items='center';" onTouch="this.addClass='highlight-element'; cate2.removeClass='highlight-element'; cate1.removeClass='highlight-element';">
                    <lido-text visible="true" font-size="landscape.32px,portrait.32px" string="${t.category3}" bg-Color="transparent" onEntry="  this.fontWeight='600';" ></lido-text>
                    <lido-cell layout="landscape.wrap,portrait.col" id="category3" tab-index="5"  visible="true" value="${t.correct3}" type="category" height="900px" width="-18px" bg-color="#DAF1BC" onEntry=" this.grid-template-columns=' repeat(2, 1fr)'; this.gap=' 10px'; this.overflow-y=' auto';this.flex-direction='column'; " ></lido-cell>
                </lido-cell>
            </lido-cell>
            <!-- dragElements -->
            <lido-cell layout="landscape.row,portrait.wrap" z="0" visible="true" type="optionArea"  height="landscape.32%,portrait.38%" width="landscape.99%,portrait.98%" bg-Color="#FEEDE6"  margin="landscape.-33px 0px 32px 0px, portrait.23px 0px 18px 0px" onEntry=" this.border='1px solid #FAB89C';this.overflow=' hidden'; this.gap='25px'; this.align-items='center'; this.justify-content='center';this.border-radius='6px';">
                <lido-cell layout="col" z="1"  visible="true" type="option"  tab-index="6" id="i1"  value="${t.option1}" height="217px" width="149px" bg-Color="white" onEntry=" this.box-sizing='unset'; this.align-items='center';this.justify-content='center';this.border-radius='6px';this. box-shadow=' 0px 8px 0px -2px rgba(0, 0, 0, 0.1)'">
                    <lido-image visible="true"    height="145px" width="145px" bgColor="transparent"  src="${t.image1}" onEntry="this.flex=' 0 0 auto'; this.boxShadow='unset';this.transition = 'transform 0.5s ease';" ></lido-image>
                    <lido-text visible="true"  height="31px" width="145px" string="${t.option1}" font="'Baloo Bhai 2'" font-size="32px" margin="0px 0px 0px 0px" onEntry="this.border-radius='0px'; this.fontWeight='500';" bg-Color="white"></lido-text>
                </lido-cell>
                <lido-cell layout="col"  visible="true" type="option"   tab-index="7" id="i2"  value="${t.option2}" height="217px" width="149px" bg-Color="white" onEntry="this.box-sizing='unset';this.align-items='center';this.justify-content='center';this.border-radius='6px';this. box-shadow=' 0px 8px 0px -2px rgba(0, 0, 0, 0.1)'">
                    <lido-image visible="true"   height="145px" width="145px" bgColor="transparent"  src="${t.image2}" onEntry="this.flex=' 0 0 auto';this.boxShadow='unset';this.transition = 'transform 0.5s ease';"></lido-image>
                    <lido-text visible="true"  height="31px" width="145px" string="${t.option2}" font="'Baloo Bhai 2'" font-size="32px" margin="0px 0px 0px 0px" onEntry="this.border-radius='0px'; this.fontWeight='500';" bg-Color="white"></lido-text>
                </lido-cell>
                <lido-cell layout="col"  visible="true" type="option"   tab-index="7" id="i2"  value="${t.option3}" height="217px" width="149px" bg-Color="white" onEntry="this.box-sizing='unset';this.align-items='center';this.justify-content='center';this.border-radius='6px';this. box-shadow=' 0px 8px 0px -2px rgba(0, 0, 0, 0.1)'">
                    <lido-image visible="true"   height="145px" width="145px" bgColor="transparent"  src="${t.image3}" onEntry="this.flex=' 0 0 auto';this.boxShadow='unset';this.transition = 'transform 0.5s ease';"></lido-image>
                    <lido-text visible="true"  height="31px" width="145px" string="${t.option3}" font="'Baloo Bhai 2'" font-size="32px" margin="0px 0px 0px 0px" onEntry="this.border-radius='0px'; this.fontWeight='500';" bg-Color="white"></lido-text>
                </lido-cell>
                <lido-cell layout="col"  visible="true" type="option"   tab-index="7" id="i2"  value="${t.option4}" height="217px" width="149px" bg-Color="white" onEntry="this.box-sizing='unset';this.align-items='center';this.justify-content='center';this.border-radius='6px';this. box-shadow=' 0px 8px 0px -2px rgba(0, 0, 0, 0.1)'">
                    <lido-image visible="true"   height="145px" width="145px" bgColor="transparent"  src="${t.image4}" onEntry="this.flex=' 0 0 auto';this.boxShadow='unset';this.transition = 'transform 0.5s ease';"></lido-image>
                    <lido-text visible="true"  height="31px" width="145px" string="${t.option4}" font="'Baloo Bhai 2'" font-size="32px" margin="0px 0px 0px 0px" onEntry="this.border-radius='0px'; this.fontWeight='500';" bg-Color="white"></lido-text>
                </lido-cell>
                <lido-cell layout="col"  visible="true" type="option"   tab-index="7" id="i2"  value="${t.option5}" height="217px" width="149px" bg-Color="white" onEntry="this.box-sizing='unset';this.align-items='center';this.justify-content='center';this.border-radius='6px';this. box-shadow=' 0px 8px 0px -2px rgba(0, 0, 0, 0.1)'">
                    <lido-image visible="true"   height="145px" width="145px" bgColor="transparent"  src="${t.image5}" onEntry="this.flex=' 0 0 auto';this.boxShadow='unset';this.transition = 'transform 0.5s ease';"></lido-image>
                    <lido-text visible="true"  height="31px" width="145px" string="${t.option5}" font="'Baloo Bhai 2'" font-size="32px" margin="0px 0px 0px 0px" onEntry="this.border-radius='0px'; this.fontWeight='500';" bg-Color="white"></lido-text>
                </lido-cell>
                <lido-cell layout="col"  visible="true" type="option"   tab-index="7" id="i2"  value="${t.option6}" height="217px" width="149px" bg-Color="white" onEntry="this.box-sizing='unset';this.align-items='center';this.justify-content='center';this.border-radius='6px';this. box-shadow=' 0px 8px 0px -2px rgba(0, 0, 0, 0.1)'">
                    <lido-image visible="true"   height="145px" width="145px" bgColor="transparent"  src="${t.image6}" onEntry="this.flex=' 0 0 auto';this.boxShadow='unset';this.transition = 'transform 0.5s ease';"></lido-image>
                    <lido-text visible="true"  height="31px" width="145px" string="${t.option6}" font="'Baloo Bhai 2'" font-size="32px" margin="0px 0px 0px 0px" onEntry="this.border-radius='0px'; this.fontWeight='500';" bg-Color="white"></lido-text>
                </lido-cell>	
            </lido-cell>
        </lido-cell>
    </lido-container>
  </main>`}var o,a,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    heading: 'कीटों को उनके पैरों की संख्या के अनुसार बताएँ!',
    image1: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Categorize/insect3.png',
    image2: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Categorize/insect2.png',
    image3: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Categorize/insect3.png',
    image4: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Categorize/insect4.png',
    image5: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Categorize/insect5.png',
    image6: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Categorize/insect5.png',
    option1: 'मकड़ी-2',
    option2: 'झींगुर',
    option3: 'मकड़ी',
    option4: 'मक्खी',
    option5: 'कनखजूरा',
    option6: 'कनखजूरा-2',
    category1: 'छह पैर वाले',
    category2: 'आठ पैर वाले',
    category3: 'कई पैर वाले',
    correct1: 'झींगुर,मक्खी',
    correct2: 'मकड़ी,मकड़ी-2',
    correct3: 'कनखजूरा,कनखजूरा-2'
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const c=["Categ"];export{e as Categ,c as __namedExportsOrder,h as default};
