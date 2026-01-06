import"./lit-element-BxxbMms4.js";import{x as s}from"./lit-html-DLYuhZ0i.js";const $t={title:"Templates/quizMaths",argTypes:{questions:{control:"object"},answers:{control:"object"},images:{control:"object"},isAllowOnlyCorrect:{control:"boolean"},isContinueOnCorrect:{control:"boolean"}}},h={args:{questions:["1","+","9","+","10","=","?"],answers:["20"],images:["https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/GroupSum/ball_fishtank.png","https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/total/stone_04.png","https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/total/stone_05.png"],isAllowOnlyCorrect:!0,isContinueOnCorrect:!0},render:t=>{const e=gt(t);return s`<lido-home .xmlData="${e}"></lido-home>`}},x={args:{questions:["31","+","20","=","?"],answers:["51"],isAllowOnlyCorrect:!0,isContinueOnCorrect:!0},render:t=>{const e=gt(t);return s`<lido-home .xmlData="${e}"></lido-home>`}};function gt(t){const{questions:e=[],images:i=[],isAllowOnlyCorrect:n=!0,isContinueOnCorrect:r=!0}=t,o=Number(e[0]),a=Number(e[2]),l=Number(e[4]),p=(d,j)=>Array.from({length:d}).map(()=>`
        <lido-image type="text" margin="" id=""
          visible="true" src="${j}" height="80px" width="80px">
        </lido-image>`).join(""),u=i.length>0?`
        ${p(o,i[0])}
        ${p(a,i[1])}
        ${p(l,i[2])}
      `:"",c=e.map(d=>`
      <lido-text id="" tab-index="2" width="114px" visible="true"
        value="${d}" string="${d}"
        font-family="'Baloo Bhai 2'" font-color="black"
        font-size="landscape.130px, portrait.100px"
        bg-color="transparent" onEntry="this.fontWeight='800';">
      </lido-text>`).join("");return`
<main>
  <lido-container visible="true" id="lido-container" onInCorrect="lido-avatar.avatarAnimate='Fail';this.sleep='2000';" is-allow-only-correct="${n}" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2300';" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/Sky.png" objective="${t.answers[0]}" is-continue-on-correct="${r}" show-Check="true">

    <!--Chimple Avatar -->
    <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.370px,portrait.332px" width="landscape.342px,portrait.320px" x="landscape.27%, portrait.-4%" y="landscape.34%, portrait.77%" aria-hidden="true" z="1" bg-color="transparent" visible="true">
      <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
      </lido-avatar>
    </lido-cell>

    <lido-cell layout="landscape.row,portrait.col" visible="true" width="90%" height="90%" bg-color="transparent">

      <lido-cell layout="col" visible="true" margin="landscape.72px 0px 0px 32px,portrait.0px" height="700px" width="900px" bg-color="transparent">

        <!-- WRAPPED IMAGE GRID -->
        <lido-cell layout="col" visible="true"
          margin="landscape.-150px 0px 0px 0px,portrait.0px"
          height="200px" width="97%" bg-color="transparent"
          onEntry="this.justifyContent='flex-start'; this.alignItems='center';">

          <lido-cell layout="row" visible="true" margin="landscape.0px, portrait.58px -36px 0px 0px"
            height="auto" width="100%" bg-color="transparent"
            onEntry="
              this.justifyContent='flex-start';
              this.alignItems='flex-start';
              this.flexWrap='wrap';"
            gap="4px">
            ${u}
          </lido-cell>

        </lido-cell>

        <!-- Question text row -->
        <lido-cell layout="row" visible="true"
          margin="landscape.107px 0px -82px 0px, portrait.0px"
          height="126px" width="96%" bg-color="transparent"
          onEntry="this.justifyContent='center';">
          ${c}
        </lido-cell>

      </lido-cell>

      <!-- Calculator -->
      <lido-cell layout="col" visible="true"
        margin="landscape.0px,portrait.0px -100px 0px 0px"
        height="751px" width="500px" bg-color="transparent">
        <lido-text visible="true" bg-color="#60DADA"
          height="100px" width="456px" string="How many??"
          onEntry="this.border='5px solid #029A9A';this.border-radius='10px';this.font-size='40px';this.font-weight='600';">
        </lido-text>

        <lido-calculator visible="true" height="650px"
          y="26px" width="456px" onEntry="this.position='relative';">
        </lido-calculator>
      </lido-cell>

    </lido-cell>

  </lido-container>
</main>`}const b={args:{questions:"Which group is bigger?",numbers:["10","5"],answer1:["10"],images:["https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/total/stone_01.png","https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/total/stone_04.png"],isAllowOnlyCorrect:!0,isContinueOnCorrect:!0},render:t=>{const e=mt(t);return s`<lido-home .xmlData="${e}"></lido-home>`}},g={args:{questions:"Which is the biggest?",numbers:["40","50"],answer2:["50"],isAllowOnlyCorrect:!0,isContinueOnCorrect:!0},render:t=>{const e=mt(t);return s`<lido-home .xmlData="${e}"></lido-home>`}};function mt(t){const e=t.numbers.map(l=>`
      <lido-text id="text1" tab-index="2" width="300px" height="300px" visible="true" value="${l}" string="${l}" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.130px, portrait.100px"  bg-color="orange" 
                onEntry="this.fontWeight='800'; this.border-radius='15px'" type="click">
                </lido-text>	`).join(""),[i,n]=t.numbers.map(l=>Number(l)),r=(l,p)=>`
  <lido-cell layout="row" visible="true"
    margin="landscape.0px, portrait.64px 0px 0px 0px"
    height="74%" width="landscape.40%,portrait.46%"
    bg-color="orange"
    onEntry="this.justifyContent='flex-start'; this.align-items='flex-start'; this.border-radius='15px'; this.padding='14px'"
    type="click" value="${l}">

      ${Array.from({length:l}).map(()=>`
          <lido-image type="text" margin="" id=""
            visible="true" src="${p}"
            height="80px" width="80px">
          </lido-image>`).join("")}

  </lido-cell>
  `,o=Array.isArray(t.images)&&t.images.length>=2;let a="";return o&&(a=`
    ${r(i,t.images[0])}
    ${r(n,t.images[1])}
  `),`
<main>

<lido-container  visible="true" id="lido-container" onInCorrect="lido-avatar.avatarAnimate='Fail';this.sleep='2000';" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2300';" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/Sky.png" objective="${o?t.answer1:t.answer2}" is-continue-on-correct="${t.isContinueOnCorrect}" is-allow-only-correct="${t.isAllowOnlyCorrect}" custom-style="#question{box-shadow: none !important;}">

    <!-- Chimple Avatar -->
    <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.344px,portrait.402px" width="landscape.310px,portrait.398px" x="landscape.86%, portrait.28%" y="landscape.66%, portrait.72%" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="">
        <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
        </lido-avatar>
    </lido-cell>

    <lido-cell layout="landscape.col,portrait.col" visible="true"  width="landscape.94%, portrait.100%" height="landscape.90%,portrait.50%" bg-color="transparent" onEntry="this.justifyContent='space-between';" margin="landscape.82px 0px 0px -138px,portrait.-230px 0px 0px 0px">

        <lido-cell layout="row" visible="true" margin="landscape.0px, portrait.64px 0px 0px 0px" height="126px" width="landscape.96%,portrait.100%" bg-color="transparent" onEntry="this.justifyContent='center';">
            <lido-text id="question" tab-index="2" visible="true" value="10" string="${t.questions}" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.100px, portrait.84px"  bg-color="transparent" 
            onEntry="this.fontWeight='800'; this.speak='true';">
      </lido-text>
        </lido-cell>

        <lido-cell layout="row" visible="true" margin="" onEntry="this.border-radius='26px';" height="80%" width="landscape.100%,portrait.100%" bg-color="transparent">
            
      ${o?a:e}
    
        </lido-cell>
    </lido-cell>
</lido-container>
  
</main>`}const m={args:{question1:"Which is circle?",answer:["circle"],options:["cube","rectangle","circle","cylinder"],isAllowOnlyCorrect:!0,isContinueOnCorrect:!0},render:t=>{const e=z(t);return s`<lido-home .xmlData="${e}"></lido-home>`}},y={args:{question2:["100","9","8","7"],answer:["100"],images:["https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/total/stone_01.png"],isAllowOnlyCorrect:!0,isContinueOnCorrect:!0},render:t=>{const e=z(t);return s`<lido-home .xmlData="${e}"></lido-home>`}},v={args:{question2:["10","9","8","7"],answer:["10"],isAllowOnlyCorrect:!0,isContinueOnCorrect:!0},render:t=>{const e=z(t);return s`<lido-home .xmlData="${e}"></lido-home>`}};function z(t){var u;const e=Array.isArray(t.images)&&t.images.length>0,i=`
  <lido-text visible="true" margin="landscape.-242px 0px 0px 0px,portrait.-46px 0px 0px 0px" id="text11"
      onEntry="this.border-radius='14px';" bg-color="" onTouch="this.speak='true';" string="${t.question1}" font-color="white"
      font-size="1px">
        <lido-image visible="true"
          src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Navbar-buttons/audio.png"
          width="96px">
        </lido-image>
    </lido-text>
    <lido-text id="question" tab-index="2" visible="true"
      value="${t.question1||""}"
      string="${t.question1||""}"
      font-family="'Baloo Bhai 2'"
      font-color="black"
      font-size="landscape.100px, portrait.84px"
      bg-color="transparent"
      onEntry="this.fontWeight='800';">
    </lido-text>
  `,n=`
  <lido-text visible="true" margin="landscape.-242px 0px 0px 0px,portrait.-46px 0px 0px 0px" id="text11"
      onEntry="this.border-radius='14px';" bg-color="" onTouch="this.speak='true';" string="${t.answer}" font-color="white"
      font-size="1px">
        <lido-image visible="true"
          src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Navbar-buttons/audio.png"
          width="96px">
        </lido-image>
    </lido-text>
    <lido-cell visible="true" margin=""
      onEntry="this.border-radius='14px';this.display='flex';this.speak='true';this.justifyContent='flex-start'; this.flexWrap='wrap';"
      padding="0px 0px 0px 12px" height="auto" width="landscape.100%,portrait.100%" bg-color="white" string="${t.answer}"
      font-size="1px" gap="2px">
      ${Array.from({length:Number(((u=t.answer)==null?void 0:u[0])||0)}).map(()=>{var c;return`
          <lido-image type="text" visible="true" src="${(c=t.images)==null?void 0:c[0]}" width="landscape.67px,portrait.50px"></lido-image>
        `}).join("")}

    </lido-cell>
  `,r=`
    <lido-text visible="true" margin="landscape.0px,portrait.0px"
      onEntry="this.border-radius='14px';"
      height="177px"
      width="landscape.236px,portrait.34%"
      bg-color=""
      onTouch="this.speak='true';"
      string="${t.answer}"
      font-color="white"
      font-size="1px">
        <lido-image visible="true"
          src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Navbar-buttons/audio.png"
          width="100%">
        </lido-image>
    </lido-text>
  `,o=t.options&&t.options.length>0?`
    <!-- Render Shape Options -->
        <lido-cell layout="landscape.row, portrait.col" visible="true" 
            margin="landscape.-46px 0px 0px -94px,portrait.0"
            onEntry="this.border-radius='26px';"
            height="landscape.390px,portrait.46%"
            width="landscape.92%,portrait.100%"
            bg-color="transparent">

            <lido-cell layout="row" visible="true" onEntry="this.border-radius='26px';"
                height="landcape.100%,portrait.50%" width="landscape.50%,portrait.100%" bg-color="transparent">

                <lido-shape class="shape" id="${t.options[0]}1" shapeType="lido-${t.options[0]}"
                    x="landscape.7%, portrait.10%"  y="${t.options[0]==="cube"?"landscape.58%, portrait.36%":t.options[0]==="cylinder"?"landscape.52%, portrait.36%":t.options[0]==="rectangle"?"landscape.61%, portrait.36%":"landscape.51%, portrait.36%"}"
                    width="${t.options[0]==="cube"?"landscape.200px,portrait.200px":t.options[0]==="rectangle"?"landscape.232px,portrait.312px":"landscape.268px,portrait.300px"}"

                      height="${t.options[0]==="cube"?"landscape.200px,portrait.200px":t.options[0]==="rectangle"?"landscape.144px,portrait.224px":"landscape.268px,portrait.300px"}"
                    bgColor="blue" value="${t.options[0]}" type="click" visible="true"></lido-shape>

                <lido-shape class="shape" id="${t.options[1]}" shapeType="lido-${t.options[1]}"
                    x="landscape.30%,portrait.55%"  y="${t.options[1]==="cube"?"landscape.58%, portrait.36%":t.options[1]==="cylinder"?"landscape.52%, portrait.36%":t.options[1]==="rectangle"?"landscape.61%, portrait.36%":"landscape.51%, portrait.36%"}"
                    width="${t.options[1]==="cube"?"landscape.200px,portrait.200px":t.options[1]==="rectangle"?"landscape.232px,portrait.312px":"landscape.268px,portrait.300px"}"

                        height="${t.options[1]==="cube"?"landscape.200px,portrait.200px":t.options[1]==="rectangle"?"landscape.144px,portrait.224px":"landscape.268px,portrait.300px"}"
                    bgColor="blue" value="${t.options[1]}" type="click" visible="true"></lido-shape>
            </lido-cell>

            <lido-cell layout="row" visible="true" onEntry="this.border-radius='26px';"
                height="landcape.100%,portrait.50%" width="landscape.50%,portrait.100%" bg-color="transparent">

                <lido-shape class="shape" id="${t.options[2]}" shapeType="lido-${t.options[2]}"
                    x="landscape.53%, portrait.8%" y="${t.options[2]==="cube"?"landscape.58%, portrait.60%":t.options[2]==="cylinder"?"landscape.52%, portrait.60%":t.options[2]==="rectangle"?"landscape.61%, portrait.60%":"landscape.51%, portrait.60%"}"
                    width="${t.options[2]==="cube"?"landscape.200px,portrait.300px":t.options[2]==="rectangle"?"landscape.232px,portrait.312px":"landscape.268px,portrait.300px"}"

                        height="${t.options[2]==="cube"?"landscape.200px,portrait.300px":t.options[2]==="rectangle"?"landscape.144px,portrait.224px":"landscape.268px,portrait.300px"}"
                    bgColor="blue" value="${t.options[2]}" type="click" visible="true"></lido-shape>

                <lido-shape class="shape" id="${t.options[3]}" shapeType="lido-${t.options[3]}"
                    x="landscape.75%,portrait.56%"  y="${t.options[3]==="cube"?"landscape.58%, portrait.60%":t.options[3]==="cylinder"?"landscape.52%, portrait.60%":t.options[3]==="rectangle"?"landscape.61%, portrait.60%":"landscape.51%, portrait.60%"}"
                    width="${t.options[3]==="cube"?"landscape.200px,portrait.300px":t.options[3]==="rectangle"?"landscape.232px,portrait.312px":"landscape.268px,portrait.300px"}"

                      height="${t.options[3]==="cube"?"landscape.100px,portrait.300px":t.options[3]==="rectangle"?"landscape.144px,portrait.224px":"landscape.268px,portrait.300px"}"
                    bgColor="blue" value="${t.options[3]}" type="click" visible="true"></lido-shape>
            </lido-cell>

        </lido-cell>
  `:"",a=(()=>{if(!Array.isArray(t.question2))return"";const c=t.question2,d=c.slice(0,2),j=c.slice(2,4),q=A=>`
      <lido-cell layout="row" visible="true" margin=""
        onEntry="this.border-radius='14px';"
        height="228px"
        width="266px"
        bg-color="orange"
        type="click"
        value="${A}">
          <lido-text visible="true" value="${A}" string="${A}"
            font-family="'Baloo Bhai 2'"
            font-color="black"
            font-size="landscape.130px, portrait.100px"
            bg-color="orange"
            onEntry="this.fontWeight='800';">
          </lido-text>
      </lido-cell>
    `;return`
      <lido-cell layout="landscape.row, portrait.col" visible="true" margin="landscape.0px 90px 0px 0px,portrait.0px"
        onEntry="this.border-radius='26px';"
        height="landscape.390px,portrait.46%"
        width="landscape.92%,portrait.100%"
        bg-color="transparent">

        <lido-cell layout="row" visible="true" margin="" onEntry="this.border-radius='26px';" height="landcape.100%,portrait.50%" width="landscape.50%,portrait.100%" bg-color="transparent">
            ${d.map(q).join("")}
        </lido-cell>

        <lido-cell layout="row" visible="true" margin=""
          onEntry="this.border-radius='26px';"
          height="landcape.100%,portrait.50%"
          width="landscape.50%,portrait.100%"
          bg-color="transparent">
            ${j.map(q).join("")}
        </lido-cell>

      </lido-cell>
    `})(),l=t.question1?i:e?n:r,p=a;return`
<main>
<lido-container visible="true" id="lido-container"
  onInCorrect="lido-avatar.avatarAnimate='Fail';this.sleep='2000';" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2300';"
  bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/Sky.png" objective="${t.answer}" is-continue-on-correct="${t.isContinueOnCorrect}" is-allow-only-correct="${t.isAllowOnlyCorrect}" custom-style= "#text11, .shape {box-shadow: none !important;}">

  <!-- Chimple Avatar -->
    <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.344px,portrait.402px" width="landscape.296px,portrait.398px" x="landscape.87%, portrait.28%" y="landscape.67%, portrait.77%" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="">
        <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
        </lido-avatar>
    </lido-cell>

  <!-- Question -->
  <lido-cell layout="row" visible="true" margin="landscape.0px 0px 0px -64px, portrait.-170px 0px 0px 0px" height="348px" width="landscape.95%,portrait.100%" bg-color="transparent" onEntry="this.justifyContent='center';">
      ${l}
  </lido-cell>

  <!-- Options -->
  
      ${t.options&&t.options.length>0?`
       ${o} 
    `:`${p}`}


</lido-container>
</main>
`}const w={args:{question2:"George went to a store and bought some t-shirts. He went to another store and bought 2 more t-shirts. He bought a total of 15 t-shirts. How many t-shirts did he buy at the first store?",answer:"13",options:["0","1","2","3","4","5","6","7","8","9"],images:["https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Navbar-buttons/audio.png"],isAllowOnlyCorrect:!0,isContinueOnCorrect:!0},render:t=>{const e=O(t);return s`<lido-home .xmlData="${e}"></lido-home>`}},f={args:{questions:["100","+","30","="],answer:"130",options:["0","1","2","3","4","5","6","7","8","9"],isAllowOnlyCorrect:!0,isContinueOnCorrect:!0},render:t=>{const e=O(t);return s`<lido-home .xmlData="${e}"></lido-home>`}},C={args:{questions:[],answer:"100",options:["0","1","2","3","4","5","6","7","8","9"],isAllowOnlyCorrect:!0,isContinueOnCorrect:!0},render:t=>{const e=O(t);return s`<lido-home .xmlData="${e}"></lido-home>`}};function O(t){const e=t.options.map((o,a)=>`
      <lido-text id="drag${a}" tab-index="${a}" height="landscape.170px, portrait.125px" width="landscape.125px, portrait.90px" visible="true" value="${o}" string="${o}" font-family="'Baloo Bhai 2'" font-color="black" type="drag" font-size="104px"  bg-color="#FFF4CD"  onEntry="this.fontWeight='800'; this.borderRadius='10px'; this.flex-shrink='0';" border-image="">
      </lido-text>
    `).join(`
`),i=t.images&&t.images.length>0?`
    <lido-cell id="question11" layout="row" visible="true" margin="" height="landscape.330px,portrait.70%" 
    width="landscape.95%,portrait.96%" bg-color="transparent" onEntry="this.justifyContent='center';" onTouch="this.speak='true'">
      <lido-image type="text" margin="landscape.-170px 0px 0px 0px,portrait.-405px 0px 0px 0px" id="speaker" visible="true" src="${t.images}" width="338px" height="230px" onTouch="this.speak='true'">
      </lido-image>

      <lido-text id="question" tab-index="text1" visible="true" value="${t.answer}" string="${t.question2}" font-family="'Baloo Bhai 2'" font-color="black" font-size="50px" bg-color="transparent" onEntry="this.fontWeight='600';">
      </lido-text>
    </lido-cell>
  `:`
    <lido-cell layout="row" visible="true" margin="" height="landscape.170px,portrait.125px" width="450px" bg-color="transparent" onEntry="this.justifyContent='center';">
      ${t.questions.map((o,a)=>`
          <lido-text id="question_${a}" tab-index="text_${a}" visible="true" value="${o}" string="${o}" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.100px, portrait.84px" bg-color="transparent" onEntry="this.fontWeight='800';this.padding='10px'">
          </lido-text>`).join("")}
    </lido-cell>
  `,r=t.answer.split("").map((o,a)=>`
       <lido-text id="drop${a}" tab-index="${a}" disable-edit="true" height="landscape.170px, portrait.auto" width="125px" visible="true" value="${o}" string="?" font-family="'Baloo Bhai 2'" font-color="#FFC805" type="drop" font-size="landscape.130px, portrait.100px"  bg-color="transparent"  onEntry="this.fontWeight='800'; this.borderRadius='10px';" border-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/sequence-box/card-slot_empty.png">
      </lido-text>
      `).join(`
`);return`
<main>

  <lido-container id="lido-container" objective="${t.answer.split("").join(",")}" tab-index="" show-drop-border="false" is-continue-on-correct="true"  is-allow-only-correct="true" value="mainContainer1" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/Sky.png" height="100%" width="100%" bg-color="transparent"  visible="true" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" drop-action="infinite-drop" show-check="false" custom-style= "#question11, #text12  {
        box-shadow: none !important;
        }">

            <!-- Chimple Avatar -->
        <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.344px,portrait.402px" width="landscape.296px,portrait.398px" x="landscape.82%, portrait.28%" y="landscape.36%, portrait.77%" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="">
          <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
          </lido-avatar>
        </lido-cell>

            <!-- question cell -->  
       ${Array.isArray(t.questions)&&t.questions.length>0||t.question2?`
          <lido-cell layout="${t.images&&t.images.length>0?"col":"row"}" visible="true" margin="landscape.-50px 0px 0px 0px, portrait.-170px 0px 0px 0px" height="landscape.70%,portrait.${t.images&&t.images.length>0?"45%":"30%"}"
            width="landscape.96%,portrait.100%" bg-color="transparent" onEntry="this.justifyContent='center';"
            gap="${t.images&&t.images.length>0?"landscape.0px, portrait.20px":"0px"}">

              ${i}

              <lido-cell layout="row" visible="true" margin="" height="landscape.170px,portrait.125px"
                width="380px" bg-color="transparent" onEntry="this.justifyContent='center';">
                ${r}
              </lido-cell>

          </lido-cell>
              `:`
          <lido-cell  layout="col" visible="true" margin="landscape.22px 0px 0px 0px, portrait.-110px 0px 0px 0px" height="landscape.62%,portrait.40%" width="landscape.96%,portrait.100%" bg-color="transparent" onEntry="this.justifyContent='center';" gap="82px">
              <lido-text id="text12" visible="true" margin="landscape.0px,portrait.0px" onEntry="this.border-radius='14px';" height="177px" width="landscape.236px,portrait.34%" bg-color="" onTouch="this.speak='true';" string="${t.answer}" font-color="white" font-size="1px">
                <lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Navbar-buttons/audio.png"
                width="100%">
                </lido-image>
                </lido-text>
              
              <lido-cell layout="row" id="question11" visible="true" margin="" height="landscape.192px,portrait.40%" width="landscape.84%,portrait.96%" bg-color="transparent" onEntry="this.justifyContent='center';" onTouch="this.speak='true'">
                ${r}
              </lido-cell>
            </lido-cell>
              `}

            <!-- answers drag cell -->
            <lido-cell layout="landscape.wrap, portrait.wrap" aria-hidden="true" visible="true" height="landscape.20%,portrait.18%" width="95%" bg-Color="transparent" margin="landscape.0px,portrait.55px 0px 125px 0px" onEntry="this.z-index='1'; this.grid-template-columns='repeat(auto-fill, minmax(140px, auto))'; this.gridTemplateRows='repeat(auto-fit, 145px)'; this.flexWrap='wrap'; this.justify-content='center';" gap="5px">
              ${e}
            </lido-cell>
  </lido-container>

</main>
`}const $={args:{questions:["991","992","993","?"],answer:"994",options:["0","1","2","3","4","5","6","7","8","9"],isAllowOnlyCorrect:!0,isContinueOnCorrect:!0},render:t=>{const e=yt(t);return s`<lido-home .xmlData="${e}"></lido-home>`}};function yt(t){const e=t.options.map((n,r)=>`
      <lido-text id="drag${r}" tab-index="${r}" height="landscape.170px, portrait.125px" width="landscape.125px, portrait.90px" visible="true" value="${n}" string="${n}" font-family="'Baloo Bhai 2'" font-color="black" type="drag" font-size="104px"  bg-color="#FFF4CD"  onEntry="this.fontWeight='800'; this.borderRadius='10px'; this.flex-shrink='0';" border-image="">
      </lido-text>
    `).join(`
`),i=`
     <lido-cell layout="row" visible="true" margin="" height="landscape.54%,portrait.72%" width="landscape.45%,portrait.34%" bg-color="orange" onEntry="this.justifyContent='center'; this.borderRadius='10px';" padding="0px 10px">
        ${[...t.answer].map((n,r)=>`
        <lido-text id="drop${r+1}" tab-index="${r+3}" disable-edit="true" height="landscape.170px, portrait.125px"
          width="125px"
          visible="true"
          value="${n}"
          string="?"
          font-family="'Baloo Bhai 2'"
          font-color="black"
          type="drop"
          font-size="landscape.110px, portrait.100px"
          bg-color="transparent"
          onEntry="this.fontWeight='800'; this.borderRadius='10px';"
          border-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/sequence-box/card-slot_empty.png">
        </lido-text>
    `).join(`
`)}
     </lido-cell>
    `;return`
<main>
   <lido-container id="lido-container" objective="${t.answer.split("").join(",")}" tab-index="1" show-drop-border="false" is-continue-on-correct="true"  is-allow-only-correct="true" value="mainContainer1" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/Sky.png" height="100%" width="100%" bg-color="transparent"  visible="true" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" drop-action="infinite-drop" show-check="false">
     <!-- Chimple Avatar -->
     <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.344px,portrait.402px" width="landscape.296px,portrait.398px" x="landscape.41%, portrait.28%" y="landscape.44%, portrait.77%" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="">
        <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
        </lido-avatar>
    </lido-cell> 

    <lido-cell layout="landscape.row,portrait.col" visible="true" margin="landscape.100px 0px 30px 0px, portrait.-155px 0px 0px 0px" height="landscape.62%,portrait.50%" width="landscape.100%,portrait.100%" bg-color="transparent" onEntry="this.justifyContent='center';" gap="10px">

            <lido-cell layout="row" visible="true" margin="" onEntry="this.border-radius='26px'; this.align-items='flex-start';" height="landscape.90%,portrait.44%" width="landscape.50%,portrait.100%" bg-color="transparent">
          
          ${t.questions[0]==="?"?i:`
              <lido-cell layout="row" visible="true" margin="" height="landscape.54%,portrait.72%" width="landscape.47%,portrait.34%" bg-color="orange" onEntry="this.justifyContent='center'; this.borderRadius='10px';">
                <lido-text id="drop${t.questions[0]}" tab-index="${t.questions[0]+2}" disable-edit="true" height="landscape.170px, portrait.125px" width="125px" visible="true" value="${t.questions[0]}" string="${t.questions[0]}"
                  font-family="'Baloo Bhai 2'" font-color="black" type="drop" font-size="landscape.110px, portrait.100px" 
                  bg-color="transparent" onEntry="this.fontWeight='800'; this.borderRadius='10px';">
                  </lido-text>
              </lido-cell>
            `}

            ${t.questions[1]==="?"?i:`
              <lido-cell layout="row" visible="true" margin="" height="landscape.54%,portrait.72%" width="landscape.47%,portrait.34%" bg-color="orange" onEntry="this.justifyContent='center'; this.borderRadius='10px';">
                <lido-text id="drop${t.questions[1]}" tab-index="${t.questions[1]+2}" disable-edit="true" height="landscape.170px, portrait.125px" width="125px" visible="true" value="${t.questions[1]}" string="${t.questions[1]}"
                  font-family="'Baloo Bhai 2'" font-color="black" type="drop" font-size="landscape.110px, portrait.100px" 
                  bg-color="transparent" onEntry="this.fontWeight='800'; this.borderRadius='10px';">
                  </lido-text>
              </lido-cell>
            `}

        </lido-cell>


            
            <lido-cell layout="row" visible="true" margin="" onEntry="this.border-radius='26px'; this.align-items='flex-start';" height="landscape.90%,portrait.44%" width="landscape.50%,portrait.100%" bg-color="transparent">

            ${t.questions[2]==="?"?i:`
              <lido-cell layout="row" visible="true" margin="" height="landscape.54%,portrait.72%" width="landscape.47%,portrait.34%" bg-color="orange" onEntry="this.justifyContent='center'; this.borderRadius='10px';">
                <lido-text id="drop${t.questions[2]}" tab-index="${t.questions[2]+2}" disable-edit="true" height="landscape.170px, portrait.125px" width="125px" visible="true" value="${t.questions[2]}" string="${t.questions[2]}"
                  font-family="'Baloo Bhai 2'" font-color="black" type="drop" font-size="landscape.110px, portrait.100px" 
                  bg-color="transparent" onEntry="this.fontWeight='800'; this.borderRadius='10px';">
                  </lido-text>
              </lido-cell>
            `}

            ${t.questions[3]==="?"?i:`
              <lido-cell layout="row" visible="true" margin="" height="landscape.100%,portrait.96%" width="landscape.47%,portrait.34%" bg-color="orange" onEntry="this.justifyContent='center'; this.borderRadius='10px';">
                <lido-text id="drop${t.questions[3]}" tab-index="${t.questions[3]+2}" disable-edit="true" height="landscape.170px, portrait.125px" width="125px" visible="true" value="${t.questions[3]}" string="${t.questions[3]}"
                  font-family="'Baloo Bhai 2'" font-color="black" type="drop" font-size="landscape.110px, portrait.100px" 
                  bg-color="transparent" onEntry="this.fontWeight='800'; this.borderRadius='10px';">
                  </lido-text>
              </lido-cell>
            `}
           

          </lido-cell>
    
    </lido-cell>

  <!-- answers drag cell -->
            <lido-cell layout="landscape.wrap, portrait.wrap" aria-hidden="true" visible="true" height="landscape.20%,portrait.18%" width="95%" bg-Color="transparent" margin="landscape.0px,portrait.-48px 0px 125px 42px" onEntry="this.z-index='1'; this.grid-template-columns='repeat(auto-fill, minmax(140px, auto))'; this.gridTemplateRows='repeat(auto-fit, 145px)'; this.flexWrap='wrap'; this.justify-content='center';" gap="5px">
              ${e}
            </lido-cell>
</lido-container>
</main>
`}const k={args:{question:"Order the numbers from smallest to largest.",drags:["200","100","300","900"],answers:["100","200","300","900"],isAllowOnlyCorrect:!0,isContinueOnCorrect:!0},render:t=>{const e=vt(t);return s`<lido-home .xmlData="${e}"></lido-home>`}};function vt(t){return`
<main>
<lido-container  visible="true" id="lido-container" onInCorrect="lido-avatar.avatarAnimate='Fail';this.sleep='2000';" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2300';" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/Sky.png" objective="${t.answers.join(",")}"  is-continue-on-correct="${t.isContinueOnCorrect}" is-allow-only-correct="${t.isAllowOnlyCorrect}" custom-style= "#t11 {
        box-shadow: none !important;
        }">
     <!-- Chimple Avatar -->
      <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.328px,portrait.378px" width="landscape.284px,portrait.382px" x="landscape.85%, portrait.30%" y="landscape.68%, portrait.78%" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="">
        <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
        </lido-avatar>
      </lido-cell>


        <!-- drop cells -->
        <lido-cell layout="landscape.row, portrait.col" visible="true" margin="landscape.156px 0px 0px -154px,portrait.-168px 0px 0px 0px" onEntry="this.border-radius='26px';" height="landscape.390px,portrait.42%" width="landscape.86%,portrait.100%" bg-color="transparent">

            <lido-text visible="true" margin="" id="t11" onEntry="this.border-radius='14px';" bg-color="" onTouch="this.speak='true';" string="Order the numbers from smallest to largest." font-color="white" font-size="1px">
                <lido-image type="text" margin="landscape.-244px 0px 0px 0px,portrait.0px 0px 0px 0px" id="" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Navbar-buttons/audio.png" width="100px" height="127px" onTouch="this.speak='true'">
                </lido-image>
            </lido-text>
                

            <lido-cell layout="row" visible="true" margin="" onEntry="this.border-radius='26px';" height="landcape.100%,portrait.50%" width="landscape.50%,portrait.100%" bg-color="transparent">
                <lido-cell layout="row" id="text2" tab-index="2" visible="true" margin="" onEntry="this.border-radius='14px';" height="landscape.270px,portrait.244px" width="landscape.270px,portrait.244px" bg-color="#6D8C87"  type="drop" value="${t.answers[0]}" onInCorrect="lido-avatar.avatarAnimate='Fail';" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2300';">
                    <lido-text  visible="true" value="${t.answers[0]}" string="" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.130px, portrait.100px"  bg-color="" 
                    onEntry="this.fontWeight='800';">
                    </lido-text>
                </lido-cell>

                <lido-cell layout="row" id="text3" tab-index="3" visible="true" margin="" onEntry="this.border-radius='14px';" height="landscape.270px,portrait.244px" width="landscape.270px,portrait.244px" bg-color="#6D8C87"  type="drop" value="${t.answers[1]}" onInCorrect="lido-avatar.avatarAnimate='Fail';" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2300';">
                    <lido-text  visible="true" value="${t.answers[1]}" string="" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.130px, portrait.100px"  bg-color="" 
                    onEntry="this.fontWeight='800';">
                    </lido-text>
                </lido-cell>
        
            </lido-cell>

            <lido-cell layout="row" visible="true" margin="" onEntry="this.border-radius='26px';" height="landcape.100%,portrait.50%" width="landscape.50%,portrait.100%" bg-color="transparent">
                <lido-cell layout="row" id="text4" tab-index="4" visible="true" margin="" onEntry="this.border-radius='14px';" height="landscape.270px,portrait.244px" width="landscape.270px,portrait.244px" bg-color="#6D8C87"  type="drop" value="${t.answers[2]}" onInCorrect="lido-avatar.avatarAnimate='Fail';" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2300';">
                    <lido-text  visible="true" value="${t.answers[2]}" string="" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.130px, portrait.100px"  bg-color="" 
                    onEntry="this.fontWeight='800';">
                    </lido-text>
                </lido-cell>

                <lido-cell layout="row" id="text5" tab-index="5" visible="true" margin="" onEntry="this.border-radius='14px';" height="landscape.270px,portrait.244px" width="landscape.270px,portrait.244px" bg-color="#6D8C87"  type="drop" value="${t.answers[3]}" onInCorrect="lido-avatar.avatarAnimate='Fail';" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2300';">
                    <lido-text  visible="true" value="${t.answers[3]}" string="" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.130px, portrait.100px"  bg-color="" 
                    onEntry="this.fontWeight='800';">
                    </lido-text>
                </lido-cell>	
            </lido-cell>				
    
    </lido-cell>


<!-- drag cells -->
        <lido-cell layout="landscape.row, portrait.col" visible="true" margin="landscape.-46px 0px 0px -124px,portrait.0" onEntry="this.border-radius='26px';" height="landscape.390px,portrait.35%" width="landscape.86%,portrait.100%" bg-color="transparent">

            <lido-cell layout="row" visible="true" margin="" onEntry="this.border-radius='26px';" height="landcape.100%,portrait.50%" width="landscape.50%,portrait.100%" bg-color="transparent">
                <lido-cell layout="row" id="text6" tab-index="6" visible="true" margin="" onEntry="this.border-radius='14px';" height="landscape.270px,portrait.244px" width="landscape.270px,portrait.244px" bg-color="orange"  type="drag" value="${t.drags[0]}">
                    <lido-text visible="true" value="${t.drags[0]}" string="${t.drags[0]}" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.130px, portrait.100px"  bg-color="orange" 
                    onEntry="this.fontWeight='800';">
                    </lido-text>
                </lido-cell>

                <lido-cell layout="row" id="text7" tab-index="7" visible="true" margin="" onEntry="this.border-radius='14px';" height="landscape.270px,portrait.244px" width="landscape.270px,portrait.244px" bg-color="orange"  type="drag" value="${t.drags[1]}">
                    <lido-text visible="true" value="${t.drags[1]}" string="${t.drags[1]}" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.130px, portrait.100px"  bg-color="orange" 
                    onEntry="this.fontWeight='800';">
                    </lido-text>
                </lido-cell>
        
            </lido-cell>

            <lido-cell layout="row" visible="true" margin="" onEntry="this.border-radius='26px';" height="landcape.100%,portrait.50%" width="landscape.50%,portrait.100%" bg-color="transparent">
                <lido-cell layout="row" id="text8" tab-index="8" visible="true" margin="" onEntry="this.border-radius='14px';" height="landscape.270px,portrait.244px" width="landscape.270px,portrait.244px" bg-color="orange"  type="drag" value="${t.drags[2]}">
                    <lido-text  visible="true" value="${t.drags[2]}" string="${t.drags[2]}" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.130px, portrait.100px"  bg-color="orange" 
                    onEntry="this.fontWeight='800';">
                    </lido-text>
                </lido-cell>

                <lido-cell layout="row" id="text9" tab-index="9" visible="true" margin="" onEntry="this.border-radius='14px';" height="landscape.270px,portrait.244px" width="landscape.270px,portrait.244px" bg-color="orange"  type="drag" value="${t.drags[3]}">
                    <lido-text visible="true" value="${t.drags[3]}" string="${t.drags[3]}" font-family="'Baloo Bhai 2'" font-color="black" font-size="landscape.130px, portrait.100px"  bg-color="orange" 
                    onEntry="this.fontWeight='800';">
                    </lido-text>
                </lido-cell>	
            </lido-cell>				
    
    </lido-cell>

</lido-container>
</main>
`}const E={args:{question1:"What is this shape?",options:["circle","cube","cylinder","pentagon"],answer:["cube"],isAllowOnlyCorrect:!0,isContinueOnCorrect:!0},render:t=>{const e=wt(t);return s`<lido-home .xmlData="${e}"></lido-home>`}};function wt(t){var r;Array.isArray(t.images)&&t.images.length>0;const i=`
  <lido-cell layout="col" visible="true" margin="landscape.0, portrait.-26px 0px 0px -126px" height="492px" width="landscape.66%,portrait.82%" bg-color="transparent" onEntry="this.justifyContent='flex-start';">
    <lido-text id="question" tab-index="2" visible="true" value="${((r=t.answer)==null?void 0:r[0])||""}" string="${t.question1}" font-family="'Baloo Bhai 2'"
        font-color="black" font-size="landscape.90px, portrait.84px" bg-color="transparent" margin="landscape.0px 0px -103px 0px,portrait.0px"
        onEntry="this.fontWeight='800';">
      </lido-text>

      <lido-shape class="shape" id="${t.answer}" shapeType="lido-${t.answer}" x="landscape.40%,portrait.32%" y="landscape.30%, portrait.19%" 
      width="${t.answer==="cube"?"landscape.150px,portrait.150px":"landscape.268px,portrait.300px"}"
      height="${t.answer==="cube"?"landscape.1500px,portrait.300px":"landscape.268px,portrait.300px"}"
      bgColor="blue" value="${t.answer}" type="click" visible="true"></lido-shape>
  </lido-cell>
  `,n=t.options&&t.options.length>0?`
    <!-- Landscape layout: single horizontal row -->
    <lido-cell 
      layout="landscape.row, portrait.col" 
      visible="landscape.true, portrait.false"
      margin="landscape.0px 90px 0px 0px"
      onEntry="this.border-radius='26px';"
      height="landscape.390px,portrait.46%" 
      width="landscape.92%,portrait.100%" 
      bg-color="transparent"
    >

      ${t.options.map(o=>`
          <lido-text 
            id="option-${o}"
            tab-index="2" 
            visible="true" 
            value="${o}" 
            string="${o}" 
            font-family="'Baloo Bhai 2'" 
            font-color="black" 
            font-size="landscape.58px, portrait.84px" 
            onEntry="this.fontWeight='800'; this.border-radius='10px'"
            height="200px" 
            width="landscape.270px,portrait.300px" 
            bg-color="orange" 
            type="click">
          </lido-text>
        `).join("")}
    </lido-cell>

    <!-- Portrait layout: 2 items per row -->
    <lido-cell 
      layout="landscape.row, portrait.col" margin="68px 0px 0px 0px"
      visible="landscape.false, portrait.true" 
      onEntry="this.border-radius='26px';"
      height="landscape.390px,portrait.42%" 
      width="landscape.92%,portrait.100%" 
      bg-color="transparent"
    >

      ${t.options.map((o,a)=>`
            ${a%2===0?'<lido-cell layout="row" visible="true" height="landcape.100%,portrait.50%" width="landscape.50%,portrait.100%" bg-color="transparent">':""}

              <lido-text 
                id="option-${o}"
                tab-index="2" 
                visible="true" 
                value="${o}" 
                string="${o}" 
                font-family="'Baloo Bhai 2'" 
                font-color="black" 
                font-size="landscape.50px, portrait.70px" 
                height="200px" 
                width="landscape.270px,portrait.326px" 
                bg-color="orange" 
                type="click" 
                onEntry="this.fontWeight='800'; this.border-radius='10px'">
              </lido-text>

            ${a%2===1||a===t.options.length-1?"</lido-cell>":""}
        `).join("")}

    </lido-cell>
  `:"";return`
<main>
<lido-container visible="true" id="lido-container"
  onInCorrect="lido-avatar.avatarAnimate='Fail';this.sleep='2000';" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2300';"
  bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/Sky.png" objective="${t.answer}" is-continue-on-correct="${t.isContinueOnCorrect}" is-allow-only-correct="${t.isAllowOnlyCorrect}" custom-style= "#text11, .shape {box-shadow: none !important;}">

  <!-- Chimple Avatar -->
    <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.344px,portrait.360px" width="landscape.296px,portrait.368px" x="landscape.87%, portrait.30%" y="landscape.67%, portrait.77%" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="">
        <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
        </lido-avatar>
    </lido-cell>

  <!-- Question -->
  <lido-cell layout="row" visible="true" margin="landscape.166px 0px 0px -64px, portrait.-92px 0px 0px 0px" height="348px" width="landscape.95%,portrait.100%" bg-color="transparent" onEntry="this.justifyContent='center';">
  <lido-text visible="true" margin="landscape.-304px 70px 0px -98px,portrait.-46px 0px 0px 0px" id="text11"
      onEntry="this.border-radius='14px';" bg-color="" onTouch="this.speak='true';" string="${t.question1}" font-color="white"
      font-size="1px">
        <lido-image visible="true"
          src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Navbar-buttons/audio.png"
          width="96px">
        </lido-image>
    </lido-text>
      ${i}
  </lido-cell>

  <!-- Options -->
  
      ${n}

</lido-container>
</main>
`}var B,S,W;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    questions: ['1', '+', '9', '+', '10', '=', '?'],
    answers: ['20'],
    images: ['https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/GroupSum/ball_fishtank.png', 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/total/stone_04.png', 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/total/stone_05.png'],
    isAllowOnlyCorrect: true,
    isContinueOnCorrect: true
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(W=(S=h.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};var D,_,R;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    questions: ['31', '+', '20', '=', '?'],
    answers: ['51'],
    isAllowOnlyCorrect: true,
    isContinueOnCorrect: true
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(R=(_=x.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var F,I,T;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    questions: 'Which group is bigger?',
    numbers: ['10', '5'],
    answer1: ['10'],
    images: ['https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/total/stone_01.png', 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/total/stone_04.png'],
    isAllowOnlyCorrect: true,
    isContinueOnCorrect: true
  },
  render: args => {
    const xml = getContainerXml1(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(T=(I=b.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var X,N,Q;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    questions: 'Which is the biggest?',
    numbers: ['40', '50'],
    answer2: ['50'],
    isAllowOnlyCorrect: true,
    isContinueOnCorrect: true
  },
  render: args => {
    const xml = getContainerXml1(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(Q=(N=g.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var H,G,M;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    question1: 'Which is circle?',
    answer: ['circle'],
    options: ["cube", "rectangle", "circle", "cylinder"],
    isAllowOnlyCorrect: true,
    isContinueOnCorrect: true
  },
  render: args => {
    const xml = getContainerXml2(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(M=(G=m.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var P,V,L;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    question2: ['100', '9', '8', '7'],
    answer: ['100'],
    images: ['https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/total/stone_01.png'],
    isAllowOnlyCorrect: true,
    isContinueOnCorrect: true
  },
  render: args => {
    const xml = getContainerXml2(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(L=(V=y.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};var J,K,U;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    question2: ['10', '9', '8', '7'],
    answer: ['10'],
    isAllowOnlyCorrect: true,
    isContinueOnCorrect: true
  },
  render: args => {
    const xml = getContainerXml2(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(U=(K=v.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var Y,Z,tt;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    question2: 'George went to a store and bought some t-shirts. He went to another store and bought 2 more t-shirts. He bought a total of 15 t-shirts. How many t-shirts did he buy at the first store?',
    answer: '13',
    options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    images: ['https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Navbar-buttons/audio.png'],
    isAllowOnlyCorrect: true,
    isContinueOnCorrect: true
  },
  render: args => {
    const xml = getContainerXml3(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(tt=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:tt.source}}};var et,ot,at;f.parameters={...f.parameters,docs:{...(et=f.parameters)==null?void 0:et.docs,source:{originalSource:`{
  args: {
    questions: ['100', '+', '30', '='],
    answer: '130',
    options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    isAllowOnlyCorrect: true,
    isContinueOnCorrect: true
  },
  render: args => {
    const xml = getContainerXml3(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(at=(ot=f.parameters)==null?void 0:ot.docs)==null?void 0:at.source}}};var rt,it,nt;C.parameters={...C.parameters,docs:{...(rt=C.parameters)==null?void 0:rt.docs,source:{originalSource:`{
  args: {
    questions: [],
    answer: '100',
    options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    isAllowOnlyCorrect: true,
    isContinueOnCorrect: true
  },
  render: args => {
    const xml = getContainerXml3(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(nt=(it=C.parameters)==null?void 0:it.docs)==null?void 0:nt.source}}};var st,lt,pt;$.parameters={...$.parameters,docs:{...(st=$.parameters)==null?void 0:st.docs,source:{originalSource:`{
  args: {
    questions: ['991', '992', '993', '?'],
    answer: '994',
    options: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    isAllowOnlyCorrect: true,
    isContinueOnCorrect: true
  },
  render: args => {
    const xml = getContainerXml4(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(pt=(lt=$.parameters)==null?void 0:lt.docs)==null?void 0:pt.source}}};var ct,dt,ut;k.parameters={...k.parameters,docs:{...(ct=k.parameters)==null?void 0:ct.docs,source:{originalSource:`{
  args: {
    question: 'Order the numbers from smallest to largest.',
    drags: ['200', '100', '300', '900'],
    answers: ['100', '200', '300', '900'],
    isAllowOnlyCorrect: true,
    isContinueOnCorrect: true
  },
  render: args => {
    const xml = getContainerXml5(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(ut=(dt=k.parameters)==null?void 0:dt.docs)==null?void 0:ut.source}}};var ht,xt,bt;E.parameters={...E.parameters,docs:{...(ht=E.parameters)==null?void 0:ht.docs,source:{originalSource:`{
  args: {
    question1: 'What is this shape?',
    options: ['circle', 'cube', 'cylinder', 'pentagon'],
    answer: ["cube"],
    isAllowOnlyCorrect: true,
    isContinueOnCorrect: true
  },
  render: args => {
    const xml = getContainerXml6(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(bt=(xt=E.parameters)==null?void 0:xt.docs)==null?void 0:bt.source}}};const kt=["operationsWithObjects","operationsWithoutObjects","biggerAndSmaller","biggestAndSmallest","Shapes","how_many","number_identification","word_problem","operations_drag","recognize_number","missing_number_drag","custom_number_magnitudes","Shapes1"];export{m as Shapes,E as Shapes1,kt as __namedExportsOrder,b as biggerAndSmaller,g as biggestAndSmallest,k as custom_number_magnitudes,$t as default,y as how_many,$ as missing_number_drag,v as number_identification,h as operationsWithObjects,x as operationsWithoutObjects,f as operations_drag,C as recognize_number,w as word_problem};
