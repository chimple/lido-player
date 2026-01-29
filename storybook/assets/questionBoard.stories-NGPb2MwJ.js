import"./lit-element-BxxbMms4.js";import{x as I}from"./lit-html-DLYuhZ0i.js";const j={title:"Templates/questionBoard",argTypes:{questionBoardImage:{control:"file",name:"Question Board Image URL",multiple:!0},questionBoardText:{control:"text",name:"Question Board Text"},backgroundImagePlusSign1:{control:"file",name:"Background Image 1 URL for (+,- sign)",multiple:!0},backgroundImagePlusSign2:{control:"file",name:"Background Image 2 URL for (+,- sign)",multiple:!0},backgroundImageMultiplicationSign:{control:"file",name:"Background Image URL for (x sign)",multiple:!0},expressionText:{control:"text",name:"Expression Text"},options:{control:"object",name:"Options"},optionText:{control:"text",name:"Option Text"},objective:{control:"text",name:"Objective",description:"Objective to achieve the task. (E.g. 5)"},isAllowOnlyCorrect:{control:"boolean",name:"isAllowOnlyCorrect"},highlightWord:{control:"boolean",name:"Highlight Word by Word"},audioURL:{control:"text",name:"Audio URL"}},args:{questionBoardImage:["https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/question-board/wordwindow_frame_question.png"],questionBoardText:"The library has 5 more tables than the school office. The school office has 2 tables. How many tables does the library have?",backgroundImagePlusSign1:["https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Categorize/insect3.png"],backgroundImagePlusSign2:["https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Categorize/insect3.png"],backgroundImageMultiplicationSign:["https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Categorize/insect3.png"],expressionText:"5 + 2 = 7",options:[5,7,12,18],optionText:"tables",objective:"7",isAllowOnlyCorrect:!0,highlightWord:!0,audioURL:""}},m={args:{questionBoardText:"The library has 5 more tables than the school office. The school office has 2 tables. How many tables does the library have?",optionText:"tables",options:[5,7,12,18]},render:t=>{const r=C(t);return I`<lido-home xml-data="${r}" xmlData="${r}"></lido-home>`}},z=t=>{const r=t.trim();console.log("Expression Text:",r);const[e,o]=r.split("=").map(a=>a.trim());console.log("Left:",e),console.log("Right:",o);const u=o.trim().includes("+")||o.trim().includes("-")||o.trim().includes("x")||o.trim().includes("X")||o.trim().includes("*"),x=e.trim().includes("+")||e.trim().includes("-")||e.trim().includes("x")||e.trim().includes("X")||e.trim().includes("*");console.log("isLeftResult:",u),console.log("isRightResult:",x);const i=u?e.trim().replace(/[<>]/g,""):x?o.trim().replace(/[<>]/g,""):"";if(console.log("Result:",i),u){const a=o.match(/(\+|-|x|X|\*)/),l=a?a[1]:"";console.log("Operator:",l);const[s,c]=o.split(/(\+|-|x|X|\*)/).filter(n=>!["+","-","x","X","*"].includes(n)).map(n=>n.trim()),p=s?s.replace(/[<>]/g,"").trim():"",d=c?c.replace(/[<>]/g,"").trim():"";return console.log("Num1:",p),console.log("Num2:",d),{num1:p,num2:d,operator:l,result:i}}if(x){const a=e.match(/(\+|-|x|X|\*)/),l=a?a[1]:"";console.log("Operator:",l);const[s,c]=e.split(/(\+|-|x|X|\*)/).filter(n=>!["+","-","x","X","*"].includes(n)).map(n=>n.trim()),p=s?s.replace(/[<>]/g,"").trim():"",d=c?c.replace(/[<>]/g,"").trim():"";return console.log("Num1:",p),console.log("Num2:",d),{num1:p,num2:d,operator:l,result:i}}};function C(t){const r=t.questionBoardImage[0],e=t.questionBoardText,o=t.backgroundImagePlusSign1[0],u=t.backgroundImagePlusSign2[0],x=t.backgroundImageMultiplicationSign[0],i=t.expressionText,a=t.optionText,l=t.objective,s=t.isAllowOnlyCorrect??!0,c=t.options;let p=4;const d=c.map(f=>`
        <lido-text id="${f}" tab-index="${p++}" height="215px" width="auto" visible="true" value="${f}" string="${f}" font-family="'Baloo Bhai 2'" font-color="black" type="click" font-size="104px"  bg-color="#FFB366" onCorrect="" onInCorrect="this.vibrate='horizontal-shake';" onEntry="this.font-weight='800'; this.borderRadius='10px'; this.flex-flow='column-reverse';" border-image="">
            <lido-text visible="true" id="option-text" audio="" height="0px" width="auto" font-family="'Baloo 2', serif" font-size="landscape.44px, portrait.52px" font-color="black" string="${a}" bg-Color="transparent" onEntry="this.font-weight='700';" padding="0px 10px 0px 10px">
            </lido-text>
        </lido-text>
        `).join(""),n=i.includes("+")||i.includes("-"),T=i.includes("X")||i.includes("x")||i.includes("*"),y=n?`
        background-animation-plus-minus-1.opacity='1'; background-animation-plus-minus-2.opacity='1';
    `:T?`
        background-animation-multiplication.opacity='1';
    `:"";console.log("Expression Animation: ",y);const{num1:g,num2:h,operator:q,result:B}=z(i),b=i.replace(/</g,"&lt;").replace(/>/g,"&gt;");let $=parseInt(g)<=10?"1":"2",E=parseInt(h)<=10?"1":"2";return console.log("Expression Text: ",b),`
        <main>
                <lido-container id="question-board-container" highlight-word-by-word="${t.highlightWord}"  disable-speak="true" objective="${l}" tab-index="1"  value="questionBoard" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/background-images/Question%20board.png"  height="100%" width="100%" bg-color="transparent"  visible="true" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000'; question-board-image.transition='transform 1s ease'; question-board-image.transform='rotateY(180deg)'; question-board-text.transition='opacity 0.5s ease'; question-board-text.opacity='0'; option-row.opacity='0'; invisible-text.transition='opacity 0.5s ease'; invisible-text.opacity='1'; invisible-text.visibility='visible'; ${y} this.sleep='4000';" onEntry="this.justifyContent='space-around';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="true" is-allow-only-correct="${s}" >

                    <!-- Chimple Avatar -->
                    <lido-cell layout="pos" id="pos1" disableEdit="true" value="pos1" height="landscape.570px, portrait.700px" width="landscape.380px, portrait.485px" x="landscape.110px, portrait.195px" y="landscape.160px, portrait.1050px" ariaHidden="true" bg-color="transparent" visible="true"  onEntry="this.flex-shrink='0'; this.z-index='2';">
                        <lido-avatar id="lido-avatar" disableEdit="true" visible="true"  height="inherit"  width="inherit" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" altText="{chimpleCharacterRive}" onEntry="">
                        </lido-avatar>
                    </lido-cell>

                    <!-- Question Section -->
                    <lido-cell layout="pos" id="pos2" disableEdit="true" value="pos2" height="landscape.850px, portrait.710px" width="landscape.1225px, portrait.900px" x="landscape.155px, portrait.0px" y="landscape.60px, portrait.85px" ariaHidden="true" z="1" bg-color="transparent" visible="true"  onEntry="this.flex-shrink='0';">
                        <lido-image visible="true" id="question-board-image" width="100%" height="67%" bg-color="transparent" src="${r}" altText="{questionBoardImage}"  onEntry="">
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
                        <lido-text id="txt2" audio="" tab-index="8" height="inherit" width="inherit" visible="true" value="${b}" string="${b}" font-family="'Baloo Bhai 2'" font-color="white" font-size="104px"  bg-color="transparent" onCorrect="" onInCorrect="this.vibrate='horizontal-shake';" onEntry="this.font-weight='800'; this.borderRadius='10px'; this.flex-shrink='0';">
                        </lido-text>
                    </lido-cell>

                    <!-- Background animation -->
                    <lido-cell layout="pos" id="background-animation-plus-minus-1" value="pos5" height="600px" width="600px" x="landscape.475px, portrait.85px" y="landscape.-110px,portrait.-80px" ariaHidden="true" z="1" bg-color="transparent" visible="true" onEntry="this.opacity='0';">
                        <lido-math-matrix visible="true" rows="10" cols="${$}" top-index="false" left-index="false" bottom-index="false" clickable="false" active-only-visible="true" active-bg-color="yellow" inactive-bg-color="black" defualt-fill="${g}" matrix-image="${o}"></lido-math-matrix>
                    </lido-cell>
                    <lido-cell layout="pos" id="background-animation-plus-minus-2" value="pos5" height="600px" width="600px" x="landscape.475px, portrait.85px" y="landscape.130px, portrait.75px" ariaHidden="true" z="1" bg-color="transparent" visible="true" onEntry="this.opacity='0';">
                        <lido-math-matrix visible="true" rows="10" cols="${E}" top-index="false" left-index="false" bottom-index="false" clickable="false" active-only-visible="true" active-bg-color="yellow" inactive-bg-color="black" defualt-fill="${h}" matrix-image="${u}"></lido-math-matrix>
                    </lido-cell>

                    <lido-cell layout="pos" id="background-animation-multiplication" value="pos5" height="600px" width="600px" x="landscape.530px, portrait.125px" y="landscape.50px, portrait.15px" ariaHidden="true" z="1" bg-color="transparent" visible="true" onEntry="this.opacity='0';">
                        <lido-math-matrix visible="true" rows="${g}" cols="${h}" top-index="false" left-index="false" bottom-index="false" clickable="false" active-only-visible="true" active-bg-color="yellow" inactive-bg-color="black" defualt-fill="${B}" matrix-image="${x}"></lido-math-matrix>
                    </lido-cell>

                </lido-container>
        </main>
    `}var v,k,w;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    questionBoardText: "The library has 5 more tables than the school office. The school office has 2 tables. How many tables does the library have?",
    optionText: "tables",
    options: [5, 7, 12, 18]
  },
  render: (args: QuestionBoardArgs) => {
    const xml = getContainerXml(args);
    return html\`<lido-home xml-data="\${xml}" xmlData="\${xml}"></lido-home>\`;
  }
}`,...(w=(k=m.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const A=["QuestionBoard"];export{m as QuestionBoard,A as __namedExportsOrder,j as default};
