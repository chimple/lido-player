import"./lit-element-BxxbMms4.js";import{x as a}from"./lit-html-DLYuhZ0i.js";const n={title:"Templates/GridGame"},e={args:{bgImage:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/grid-game//Underwater.png",avatarSrc:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv",colHeader1Text:"ug",colHeader2Text:"ad",colHeader3Text:"op",rowLabel1Text:"m",rowLabel2Text:"ch",rowLabel3Text:"d",dropTarget1Value:"mug",dropTarget2Value:"mad",dropTarget3Value:"mop",dropTarget4Value:"chug",dropTarget5Value:"chad",dropTarget6Value:"chop",dropTarget7Value:"dug",dropTarget8Value:"dad",dropTarget9Value:"dop",draggable1Word:"mug",draggable2Word:"chad",draggable3Word:"dug",draggable4Word:"dad",draggable5Word:"chug",draggable6Word:"chop",draggable7Word:"mad",draggable8Word:"mop",draggable9Word:"dop"},render:t=>{const l=d(t);return a`<lido-home .xmlData="${l}"></lido-home>`}};function d(t){return`<main>
<lido-container id="lido-container" tabIndex="1" objective="${t.draggable1Word},${t.draggable2Word},${t.draggable3Word},${t.draggable4Word},${t.draggable5Word},${t.draggable6Word},${t.draggable7Word},${t.draggable8Word},${t.draggable9Word}" isAllowOnlyCorrect="true" value="mainContainer1" height="100%" width="100%" bgImage="${t.bgImage}" bgColor="transparent" visible="true" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" showCheck="false" isContinueOnCorrect="true">

    <lido-cell layout="pos" id="pos1" disableEdit="true" value="pos2" height="305px" width="227px" x="landscape.1274px, portrait.541px" y="landscape.591px, portrait.1274px" ariaHidden="true" z="1" bgColor="transparent" visible="true" onEntry="this.animation='rightToPlace 2.5s linear';">
        <lido-avatar id="lido-avatar" disableEdit="true" visible="true" height="462px" width="356px" src="${t.avatarSrc}" altText="{chimpleCharacterRive}"></lido-avatar>
    </lido-cell>

    <lido-cell id="main-layout-wrapper" layout="landscape.row, portrait.col" width="100%" height="100%" visible="true" bgColor="transparent" onEntry="this.justifyContent='center'; this.alignItems='center'; this.gap='20px'; this.padding='10px';">

        <lido-cell id="game-board" width="landscape.50%, portrait.90%" height="landscape.60%, portrait.40%" aspectRatio="1" maxHeight="landscape.90vh, portrait.auto" maxWidth="portrait.90vw, landscape.auto" visible="true" bgColor="#F5D482" onEntry="this.display='flex'; this.flexDirection='column'; this.padding='15px'; this.gap='10px'; this.borderRadius='20px'; this.boxShadow='0 8px 16px rgba(0,0,0,0.1)';">

            <!-- TOP ROW: Column Headers -->
            <lido-cell id="top-row" flex="1" bgColor="transparent" onEntry="this.display='flex'; this.flex='0 0 15%';">
                <lido-cell id="blank-space" visible="true" onEntry="this.flex='0 0 15%';" bgColor="transparent"></lido-cell>
                <lido-cell id="column-headers" width="60vh" visible="true" flex="1" bgColor="transparent" padding-left="45%" onEntry="this.display='flex'; this.justifyContent='space-around'; this.alignItems='center'; this.margin-left='-9vh' this.gap='10vh';">
                    <lido-text string="${t.colHeader1Text}" font-size="clamp(24px, 4vw, 48px)" visible="true" font-weight="700" font-family="'Baloo Bhai 2', serif" fontColor="#EEB565" onEntry="this.backgroundColor='#EEB565'; this.width='40%'; this.font-size='clamp(24px, 4vw, 48px)'; "></lido-text>
                    <lido-text string="${t.colHeader2Text}" font-size="clamp(24px, 4vw, 48px)" visible="true" font-weight="700" font-family="'Baloo Bhai 2', serif" fontColor="#EEB565" onEntry="this.backgroundColor='#EEB565'; this.width='40%'; this.font-size='clamp(24px, 4vw, 48px)'; "></lido-text>
                    <lido-text string="${t.colHeader3Text}" font-size="clamp(24px, 4vw, 48px)" visible="true" font-weight="700" font-family="'Baloo Bhai 2', serif" fontColor="#EEB565" onEntry="this.backgroundColor='#EEB565'; this.width='40%'; this.font-size='clamp(24px, 4vw, 48px)';"></lido-text>
                </lido-cell>
            </lido-cell>

            <!-- BOTTOM ROW: Row Labels and Drop Grid -->
            <lido-cell id="bottom-row" flex="1" visible="true" bgColor="transparent" onEntry="this.display='flex'; this.flex='0 0 15%';">
                <lido-cell id="row-labels" height="50vh" onEntry="this.display='flex'; this.flexDirection='column'; this.flex='0 0 15%'; this.justifyContent='space-around'; this.alignItems='center';" bgColor="transparent">
                    <lido-text string="${t.rowLabel1Text}" font-size="clamp(24px, 4vw, 48px)" visible="true" font-weight="700" font-family="'Baloo Bhai 2', serif" fontColor="#654321" onEntry="this.backgroundColor='#EEB565'; this.width='60%'; this.font-size='clamp(24px, 4vw, 48px)';"></lido-text>
                    <lido-text string="${t.rowLabel2Text}" font-size="clamp(24px, 4vw, 48px)" visible="true" font-weight="700" font-family="'Baloo Bhai 2', serif" fontColor="#654321" onEntry="this.backgroundColor='#EEB565'; this.width='60%'; this.font-size='clamp(24px, 4vw, 48px)';"></lido-text>
                    <lido-text string="${t.rowLabel3Text}" font-size="clamp(24px, 4vw, 48px)" visible="true" font-weight="700" font-family="'Baloo Bhai 2', serif" fontColor="#654321" onEntry="this.backgroundColor='#EEB565'; this.width='60%'; this.font-size='clamp(24px, 4vw, 48px)';"></lido-text>
                </lido-cell>

                <lido-cell id="drop-grid" flex="1" visible="true" bgColor="#E7CFAA" onEntry="this.display='grid'; this.gridTemplateColumns='repeat(3, 1fr)'; this.gridTemplateRows='repeat(3, 1fr)'; this.gap='15px'; this.padding='15px'; this.borderRadius='10px';">
                    <lido-cell id="drop_mug" visible="true" type="drop" value="${t.dropTarget1Value}" bgColor="#6B4226" isAllowOnlyCorrect="true" onEntry="this.borderRadius='10px';"></lido-cell>
                    <lido-cell id="drop_mad" visible="true" type="drop" value="${t.dropTarget2Value}" bgColor="#6B4226" isAllowOnlyCorrect="true" onEntry="this.borderRadius='10px';"></lido-cell>
                    <lido-cell id="drop_mop" visible="true" type="drop" value="${t.dropTarget3Value}" bgColor="#6B4226" isAllowOnlyCorrect="true" onEntry="this.borderRadius='10px';"></lido-cell>
                    <lido-cell id="drop_chug" visible="true" type="drop" value="${t.dropTarget4Value}" bgColor="#6B4226" isAllowOnlyCorrect="true" onEntry="this.borderRadius='10px';"></lido-cell>
                    <lido-cell id="drop_chad" visible="true" type="drop" value="${t.dropTarget5Value}" bgColor="#6B4226" isAllowOnlyCorrect="true" onEntry="this.borderRadius='10px';"></lido-cell>
                    <lido-cell id="drop_chop" visible="true" type="drop" value="${t.dropTarget6Value}" bgColor="#6B4226" isAllowOnlyCorrect="true" onEntry="this.borderRadius='10px';"></lido-cell>
                    <lido-cell id="drop_dug" visible="true" type="drop" value="${t.dropTarget7Value}" bgColor="#6B4226" isAllowOnlyCorrect="true" onEntry="this.borderRadius='10px';"></lido-cell>
                    <lido-cell id="drop_dad" visible="true" type="drop" value="${t.dropTarget8Value}" bgColor="#6B4226" isAllowOnlyCorrect="true" onEntry="this.borderRadius='10px';"></lido-cell>
                    <lido-cell id="drop_dop" visible="true" type="drop" value="${t.dropTarget9Value}" bgColor="#6B4226" isAllowOnlyCorrect="true" onEntry="this.borderRadius='10px';"></lido-cell>
                </lido-cell>
            </lido-cell>
        </lido-cell>

        <!-- Draggable Words Container -->
        <lido-cell id="draggable-area" visible="true" bgColor="transparent" width="landscape.12%, portrait.43%" height="landscape.90vh, portrait.33%" overflow="hidden" onEntry="this.display='flex'; this.flexWrap='wrap'; this.justifyContent='center'; this.alignContent='center'; this.gap='10px';">
            <lido-text type="drag" value="${t.draggable1Word}" string="${t.draggable1Word}" visible="true" width="clamp(100px, 25vw, 150px)" height="auto" aspectRatio="2.5"  font-size="clamp(24px, 5vw, 32px)" onEntry="this.borderRadius='15px'; this.backgroundColor='#EEB565'; this.width='60%'; this.font-size='clamp(24px, 4vw, 48px)'; this.display='grid'; this.placeItems='center'; this.bgColor='red' this.cursor='grab';" />
            <lido-text type="drag" value="${t.draggable2Word}" string="${t.draggable2Word}" visible="true" width="clamp(100px, 25vw, 150px)" height="auto" aspectRatio="2.5" bgColor="#fcf3b1" font-size="clamp(24px, 5vw, 32px)" onEntry="this.borderRadius='15px'; this.backgroundColor='#EEB565'; this.width='60%'; this.font-size='clamp(24px, 4vw, 48px)'; this.textAlign='center'; this.display='grid'; this.placeItems='center'; this.cursor='grab';" />
            <lido-text type="drag" value="${t.draggable3Word}" string="${t.draggable3Word}" visible="true" width="clamp(100px, 25vw, 150px)" height="auto" aspectRatio="2.5" bgColor="#fcf3b1" font-size="clamp(24px, 5vw, 32px)" onEntry="this.borderRadius='15px'; this.backgroundColor='#EEB565'; this.width='60%'; this.font-size='clamp(24px, 4vw, 48px)'; this.textAlign='center'; this.display='grid'; this.placeItems='center'; this.cursor='grab';" />
            <lido-text type="drag" value="${t.draggable4Word}" string="${t.draggable4Word}" visible="true" width="clamp(100px, 25vw, 150px)" height="auto" aspectRatio="2.5" bgColor="#fcf3b1" font-size="clamp(24px, 5vw, 32px)" onEntry="this.borderRadius='15px'; this.backgroundColor='#EEB565'; this.width='60%'; this.font-size='clamp(24px, 4vw, 48px)'; this.textAlign='center'; this.display='grid'; this.placeItems='center'; this.cursor='grab';" />
            <lido-text type="drag" value="${t.draggable5Word}" string="${t.draggable5Word}" visible="true" width="clamp(100px, 25vw, 150px)" height="auto" aspectRatio="2.5" bgColor="#fcf3b1" font-size="clamp(24px, 5vw, 32px)" onEntry="this.borderRadius='15px'; this.backgroundColor='#EEB565'; this.width='60%'; this.font-size='clamp(24px, 4vw, 48px)'; this.textAlign='center'; this.display='grid'; this.placeItems='center'; this.cursor='grab';" />
            <lido-text type="drag" value="${t.draggable6Word}" string="${t.draggable6Word}" visible="true" width="clamp(100px, 25vw, 150px)" height="auto" aspectRatio="2.5" bgColor="#fcf3b1" font-size="clamp(24px, 5vw, 32px)" onEntry="this.borderRadius='15px'; this.backgroundColor='#EEB565'; this.width='60%'; this.font-size='clamp(24px, 4vw, 48px)'; this.textAlign='center'; this.display='grid'; this.placeItems='center'; this.cursor='grab';" />
            <lido-text type="drag" value="${t.draggable7Word}" string="${t.draggable7Word}" visible="true" width="clamp(100px, 25vw, 150px)" height="auto" aspectRatio="2.5" bgColor="#fcf3b1" font-size="clamp(24px, 5vw, 32px)" onEntry="this.borderRadius='15px'; this.backgroundColor='#EEB565'; this.width='60%'; this.font-size='clamp(24px, 4vw, 48px)'; this.textAlign='center'; this.display='grid'; this.placeItems='center'; this.cursor='grab';" />
            <lido-text type="drag" value="${t.draggable8Word}" string="${t.draggable8Word}" visible="true" width="clamp(100px, 25vw, 150px)" height="auto" aspectRatio="2.5" bgColor="#fcf3b1" font-size="clamp(24px, 5vw, 32px)" onEntry="this.borderRadius='15px'; this.backgroundColor='#EEB565'; this.width='60%'; this.font-size='clamp(24px, 4vw, 48px)'; this.textAlign='center'; this.display='grid'; this.placeItems='center'; this.cursor='grab';" />
            <lido-text type="drag" value="${t.draggable9Word}" string="${t.draggable9Word}" visible="true" width="clamp(100px, 25vw, 150px)" height="auto" aspectRatio="2.5" bgColor="#fcf3b1" font-size="clamp(24px, 5vw, 32px)" onEntry="this.borderRadius='15px'; this.backgroundColor='#EEB565'; this.width='60%'; this.font-size='clamp(24px, 4vw, 48px)'; this.textAlign='center'; this.display='grid'; this.placeItems='center'; this.cursor='grab';" />
        </lido-cell>
    </lido-cell>
</lido-container>
</main>`}var r,o,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    bgImage: "https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/grid-game//Underwater.png",
    avatarSrc: "https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv",
    colHeader1Text: "ug",
    colHeader2Text: "ad",
    colHeader3Text: "op",
    rowLabel1Text: "m",
    rowLabel2Text: "ch",
    rowLabel3Text: "d",
    dropTarget1Value: "mug",
    dropTarget2Value: "mad",
    dropTarget3Value: "mop",
    dropTarget4Value: "chug",
    dropTarget5Value: "chad",
    dropTarget6Value: "chop",
    dropTarget7Value: "dug",
    dropTarget8Value: "dad",
    dropTarget9Value: "dop",
    draggable1Word: "mug",
    draggable2Word: "chad",
    draggable3Word: "dug",
    draggable4Word: "dad",
    draggable5Word: "chug",
    draggable6Word: "chop",
    draggable7Word: "mad",
    draggable8Word: "mop",
    draggable9Word: "dop"
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const g=["DefaultGame"];export{e as DefaultGame,g as __namedExportsOrder,n as default};
