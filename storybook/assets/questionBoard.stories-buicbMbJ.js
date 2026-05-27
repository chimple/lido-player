import"./lit-element-DByy2wOb.js";import{b as z}from"./lit-html-BGZAEiha.js";const R={title:"Templates/questionBoard",argTypes:{questionBoardImage:{control:"file",name:"Question Board Image URL",multiple:!0},questionBoardText:{control:"text",name:"Question Board Text"},backgroundImagePlusSign1:{control:"file",name:"Background Image 1 URL for (+,- sign)",multiple:!0},backgroundImagePlusSign2:{control:"file",name:"Background Image 2 URL for (+,- sign)",multiple:!0},backgroundImageMultiplicationSign:{control:"file",name:"Background Image URL for (x sign)",multiple:!0},expressionText:{control:"text",name:"Expression Text"},options:{control:"object",name:"Options"},optionText:{control:"text",name:"Option Text"},objective:{control:"text",name:"Objective",description:"Objective to achieve the task. (E.g. 5)"},isAllowOnlyCorrect:{control:"boolean",name:"isAllowOnlyCorrect"},highlightWord:{control:"boolean",name:"Highlight Word by Word"},audioURL:{control:"text",name:"Audio URL"}},args:{questionBoardImage:["https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/question-board/wordwindow_frame_question.png"],questionBoardText:"The library has 5 more tables than the school office. The school office has 2 tables. How many tables does the library have?",backgroundImagePlusSign1:["https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Categorize/insect3.png"],backgroundImagePlusSign2:["https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Categorize/insect3.png"],backgroundImageMultiplicationSign:["https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Categorize/insect3.png"],expressionText:"5 + 2 = 7",options:[5,7,12,18],optionText:"tables",objective:"7",isAllowOnlyCorrect:!0,highlightWord:!0,audioURL:""}},m={args:{questionBoardText:"The library has 5 more tables than the school office. The school office has 2 tables. How many tables does the library have?",optionText:"tables",options:[5,7,12,18]},render:t=>{const l=C(t);return z`<lido-home xml-data="${l}" xmlData="${l}"></lido-home>`}},E=t=>{const l=t.trim(),[e,i]=l.split("=").map(a=>a.trim()),u=i.trim().includes("+")||i.trim().includes("-")||i.trim().includes("x")||i.trim().includes("X")||i.trim().includes("*"),x=e.trim().includes("+")||e.trim().includes("-")||e.trim().includes("x")||e.trim().includes("X")||e.trim().includes("*"),o=u?e.trim().replace(/[<>]/g,""):x?i.trim().replace(/[<>]/g,""):"";if(u){const a=i.match(/(\+|-|x|X|\*)/),c=a?a[1]:"",[n,s]=i.split(/(\+|-|x|X|\*)/).filter(r=>!["+","-","x","X","*"].includes(r)).map(r=>r.trim()),p=n?n.replace(/[<>]/g,"").trim():"",d=s?s.replace(/[<>]/g,"").trim():"";return{num1:p,num2:d,operator:c,result:o}}if(x){const a=e.match(/(\+|-|x|X|\*)/),c=a?a[1]:"",[n,s]=e.split(/(\+|-|x|X|\*)/).filter(r=>!["+","-","x","X","*"].includes(r)).map(r=>r.trim()),p=n?n.replace(/[<>]/g,"").trim():"",d=s?s.replace(/[<>]/g,"").trim():"";return{num1:p,num2:d,operator:c,result:o}}};function C(t){const l=t.questionBoardImage[0],e=t.questionBoardText,i=t.backgroundImagePlusSign1[0],u=t.backgroundImagePlusSign2[0],x=t.backgroundImageMultiplicationSign[0],o=t.expressionText,a=t.optionText,c=t.objective,n=t.isAllowOnlyCorrect??!0,s=t.options;let p=4;const d=s.map(g=>`
        <lido-text id="${g}" tab-index="${p++}" height="215px" width="auto" visible="true" value="${g}" string="${g}" font-family="'Baloo Bhai 2'" font-color="black" type="click" font-size="104px"  bg-color="#FFB366" onCorrect="" onInCorrect="this.vibrate='horizontal-shake';" onEntry="this.font-weight='800'; this.borderRadius='10px'; this.flex-flow='column-reverse';" border-image="">
            <lido-text visible="true" id="option-text" audio="" height="0px" width="auto" font-family="'Baloo 2', serif" font-size="landscape.44px, portrait.52px" font-color="black" string="${a}" bg-Color="transparent" onEntry="this.font-weight='700';" padding="0px 10px 0px 10px">
            </lido-text>
        </lido-text>
        `).join(""),r=o.includes("+")||o.includes("-"),w=o.includes("X")||o.includes("x")||o.includes("*"),T=r?`
        background-animation-plus-minus-1.opacity='1'; background-animation-plus-minus-2.opacity='1';
    `:w?`
        background-animation-multiplication.opacity='1';
    `:"",{num1:b,num2:h,operator:q,result:B}=E(o),f=o.replace(/</g,"&lt;").replace(/>/g,"&gt;");let $=parseInt(b)<=10?"1":"2",I=parseInt(h)<=10?"1":"2";return`
        <main>
                <lido-container id="question-board-container" highlight-word-by-word="${t.highlightWord}"  disable-speak="true" objective="${c}" tab-index="1"  value="questionBoard" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/background-images/Question%20board.png"  height="100%" width="100%" bg-color="transparent"  visible="true" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000'; question-board-image.transition='transform 1s ease'; question-board-image.transform='rotateY(180deg)'; question-board-text.transition='opacity 0.5s ease'; question-board-text.opacity='0'; option-row.opacity='0'; invisible-text.transition='opacity 0.5s ease'; invisible-text.opacity='1'; invisible-text.visibility='visible'; ${T} this.sleep='4000';" onEntry="this.justifyContent='space-around';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="true" is-allow-only-correct="${n}" >

                    <!-- Chimple Avatar -->
                    <lido-cell layout="pos" id="pos1" disableEdit="true" value="pos1" height="landscape.570px, portrait.700px" width="landscape.380px, portrait.485px" x="landscape.110px, portrait.195px" y="landscape.160px, portrait.1050px" ariaHidden="true" bg-color="transparent" visible="true"  onEntry="this.flex-shrink='0'; this.z-index='2';">
                        <lido-avatar id="lido-avatar" disableEdit="true" visible="true"  height="inherit"  width="inherit" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" altText="{chimpleCharacterRive}" onEntry="">
                        </lido-avatar>
                    </lido-cell>

                    <!-- Question Section -->
                    <lido-cell layout="pos" id="pos2" disableEdit="true" value="pos2" height="landscape.850px, portrait.710px" width="landscape.1225px, portrait.900px" x="landscape.155px, portrait.0px" y="landscape.60px, portrait.85px" ariaHidden="true" z="1" bg-color="transparent" visible="true"  onEntry="this.flex-shrink='0';">
                        <lido-image visible="true" id="question-board-image" width="100%" height="67%" bg-color="transparent" src="${l}" altText="{questionBoardImage}"  onEntry="">
                        </lido-image>
                    </lido-cell>

                    <lido-text visible="false" id="txt1" audio="" tab-index="2" font-family="'Baloo 2', serif" font-size="52px" font-color="black" string="Solve the problem shown in the board and select the correct answer" bg-Color="transparent" onEntry="this.speak='true'; question-board-text.speak='true';" >
                    </lido-text>

                    <lido-cell layout="pos" id="pos3" value="pos3" x="landscape.445px, portrait.45px" y="landscape.115px, portrait.145px" visible="true" height="landscape.60%,portrait.10%" width="landscape.55%,portrait.92%" border-radius="7px" bg-color="transparent" onEntry="this.z-index='1';">
                        <lido-text visible="true" audio="${t.audioURL}" id="question-board-text" tab-index="3" audio="" font-family="'Baloo 2', serif" font-size="landscape.60px, portrait.52px" font-color="black" string="${e}" bg-Color="transparent" onEntry="this.font-weight='700'; this.textAlign='left'; this.lineHeight='1.25';" >
                        </lido-text>
                    </lido-cell>

                    <!-- Options Section -->
                    <lido-cell layout="landscape.row, portrait.wrap" id="option-row" aria-hidden="true" visible="true" height="landscape.40%,portrait.20%" width="landscape.95%, portrait.75%" bg-Color="transparent" margin="landscape.625px 0px 0px -70px,portrait.50px 0px 130px 0px" onEntry="this.z-index='1'; this.justify-content='center';" gap="landscape.175px,portrait.65px">
                        ${d}
                    </lido-cell>
                    
                    <!-- Invisible Text for Animation -->
                    <lido-cell layout="pos" id="invisible-text" disableEdit="true" value="pos3" height="landscape.10%, portrait.710px" width="landscape.75%, portrait.875px" x="landscape.325px, portrait.10px" y="landscape.740px, portrait.475px" ariaHidden="true" z="1" bg-color="transparent" visible="true"  onEntry="this.flex-shrink='0'; this.opacity='0'; this.z-index='0';">
                        <lido-text id="txt2" audio="" tab-index="8" height="inherit" width="inherit" visible="true" value="${f}" string="${f}" font-family="'Baloo Bhai 2'" font-color="white" font-size="104px"  bg-color="transparent" onCorrect="" onInCorrect="this.vibrate='horizontal-shake';" onEntry="this.font-weight='800'; this.borderRadius='10px'; this.flex-shrink='0';">
                        </lido-text>
                    </lido-cell>

                    <!-- Background animation -->
                    <lido-cell layout="pos" id="background-animation-plus-minus-1" value="pos5" height="600px" width="600px" x="landscape.475px, portrait.85px" y="landscape.-110px,portrait.-80px" ariaHidden="true" z="1" bg-color="transparent" visible="true" onEntry="this.opacity='0';">
                        <lido-math-matrix visible="true" rows="10" cols="${$}" top-index="false" left-index="false" bottom-index="false" clickable="false" active-only-visible="true" active-bg-color="yellow" inactive-bg-color="black" defualt-fill="${b}" matrix-image="${i}"></lido-math-matrix>
                    </lido-cell>
                    <lido-cell layout="pos" id="background-animation-plus-minus-2" value="pos5" height="600px" width="600px" x="landscape.475px, portrait.85px" y="landscape.130px, portrait.75px" ariaHidden="true" z="1" bg-color="transparent" visible="true" onEntry="this.opacity='0';">
                        <lido-math-matrix visible="true" rows="10" cols="${I}" top-index="false" left-index="false" bottom-index="false" clickable="false" active-only-visible="true" active-bg-color="yellow" inactive-bg-color="black" defualt-fill="${h}" matrix-image="${u}"></lido-math-matrix>
                    </lido-cell>

                    <lido-cell layout="pos" id="background-animation-multiplication" value="pos5" height="600px" width="600px" x="landscape.530px, portrait.125px" y="landscape.50px, portrait.15px" ariaHidden="true" z="1" bg-color="transparent" visible="true" onEntry="this.opacity='0';">
                        <lido-math-matrix visible="true" rows="${b}" cols="${h}" top-index="false" left-index="false" bottom-index="false" clickable="false" active-only-visible="true" active-bg-color="yellow" inactive-bg-color="black" defualt-fill="${B}" matrix-image="${x}"></lido-math-matrix>
                    </lido-cell>

                </lido-container>
        </main>
    `}var y,v,k;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    questionBoardText: "The library has 5 more tables than the school office. The school office has 2 tables. How many tables does the library have?",
    optionText: "tables",
    options: [5, 7, 12, 18]
  },
  render: (args: QuestionBoardArgs) => {
    const xml = getContainerXml(args);
    return html\`<lido-home xml-data="\${xml}" xmlData="\${xml}"></lido-home>\`;
  }
}`,...(k=(v=m.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};const A=["QuestionBoard"];export{m as QuestionBoard,A as __namedExportsOrder,R as default};
