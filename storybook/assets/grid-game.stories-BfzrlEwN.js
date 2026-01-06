import"./lit-element-BxxbMms4.js";import{x as l}from"./lit-html-DLYuhZ0i.js";const n={title:"Templates/GridGame"},e={args:{bgImage:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/grid-game//Underwater.png",avatarSrc:"https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv",colHeader1Text:"ug",colHeader2Text:"ad",colHeader3Text:"op",rowLabel1Text:"m",rowLabel2Text:"ch",rowLabel3Text:"d",dropTarget1Value:"mug",dropTarget2Value:"mad",dropTarget3Value:"mop",dropTarget4Value:"chug",dropTarget5Value:"chad",dropTarget6Value:"chop",dropTarget7Value:"dug",dropTarget8Value:"dad",dropTarget9Value:"dop",draggable1Word:"mug",draggable2Word:"mad",draggable3Word:"mop",draggable4Word:"chug",draggable5Word:"chad",draggable6Word:"chop",draggable7Word:"dug",draggable8Word:"dad",draggable9Word:"dop"},render:t=>{const o=d(t);return l`<lido-home .xmlData="${o}"></lido-home>`}};function d(t){return`<main>
<lido-container id="lido-container" tab-index="1" objective="${t.draggable1Word},${t.draggable2Word},${t.draggable3Word},${t.draggable4Word},${t.draggable5Word},${t.draggable6Word},${t.draggable7Word},${t.draggable8Word},${t.draggable9Word}" is-allow-only-correct="true" value="mainContainer1" height="100%" width="100%" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/background-images/Grid.png" bg-color="transparent" visible="true" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="true">

    <lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="305px" width="227px" x="landscape.1274px, portrait.541px" y="landscape.591px, portrait.1274px" aria-hidden="true" z="1" bg-color="transparent" visible="true" onEntry="this.animation='rightToPlace 2.5s linear';">
        <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="462px" width="356px" src="${t.avatarSrc}" alt-text="{chimpleCharacterRive}"></lido-avatar>
    </lido-cell>

    <lido-cell id="main-layout-wrapper" layout="landscape.row, portrait.col" width="100%" height="100%" visible="true" bg-color="transparent" onEntry="this.justifyContent='center'; this.alignItems='center'; this.gap='20px'; this.padding='10px';">

        <lido-cell id="game-board" width="landscape.50%, portrait.90%" height="landscape.60%, portrait.40%" aspectRatio="1" maxHeight="landscape.90vh, portrait.auto" maxWidth="portrait.90vw, landscape.auto" visible="true" bg-color="#F5D482" onEntry="this.display='flex'; this.flexDirection='column'; this.padding='15px'; this.gap='10px'; this.borderRadius='20px'; this.boxShadow='0 8px 16px rgba(0,0,0,0.1)';">

            <!-- TOP ROW: Column Headers -->
            <lido-cell id="top-row" flex="1" bg-color="transparent" onEntry="this.display='flex'; this.flex='0 0 15%';">
                <lido-cell id="blank-space" width="5%" visible="true" onEntry="this.flex='0 0 15%';" bg-color="transparent"></lido-cell>
                <lido-cell id="column-headers" width="85%" visible="true" flex="1" bg-color="transparent" padding-left="45%" onEntry="this.display='flex'; this.justifyContent='space-around'; this.alignItems='center'; this.margin-left='-9vh' this.gap='10vh';">
                    <lido-text string="${t.colHeader1Text}" font-size="clamp(24px, 4vw, 48px)" visible="true" font-weight="700" font-family="'Baloo Bhai 2', serif" font-color="#EEB565" onEntry="this.backgroundColor='#EEB565'; this.width='40%'; this.font-size='clamp(24px, 4vw, 48px)'; "></lido-text>
                    <lido-text string="${t.colHeader2Text}" font-size="clamp(24px, 4vw, 48px)" visible="true" font-weight="700" font-family="'Baloo Bhai 2', serif" font-color="#EEB565" onEntry="this.backgroundColor='#EEB565'; this.width='40%'; this.font-size='clamp(24px, 4vw, 48px)'; "></lido-text>
                    <lido-text string="${t.colHeader3Text}" font-size="clamp(24px, 4vw, 48px)" visible="true" font-weight="700" font-family="'Baloo Bhai 2', serif" font-color="#EEB565" onEntry="this.backgroundColor='#EEB565'; this.width='40%'; this.font-size='clamp(24px, 4vw, 48px)';"></lido-text>
                </lido-cell>
            </lido-cell>

            <!-- BOTTOM ROW: Row Labels and Drop Grid -->
            <lido-cell id="bottom-row" flex="1" visible="true" bg-color="transparent" onEntry="this.display='flex'; this.flex='0 0 15%';">
                <lido-cell id="row-labels" height="50vh" onEntry="this.display='flex'; this.flexDirection='column'; this.flex='0 0 15%'; this.justifyContent='space-around'; this.alignItems='center';" bg-color="transparent">
                    <lido-text string="${t.rowLabel1Text}" font-size="clamp(24px, 4vw, 48px)" visible="true" font-weight="700" font-family="'Baloo Bhai 2', serif" font-color="#654321" onEntry="this.backgroundColor='#EEB565'; this.width='60%'; this.font-size='clamp(24px, 4vw, 48px)';"></lido-text>
                    <lido-text string="${t.rowLabel2Text}" font-size="clamp(24px, 4vw, 48px)" visible="true" font-weight="700" font-family="'Baloo Bhai 2', serif" font-color="#654321" onEntry="this.backgroundColor='#EEB565'; this.width='60%'; this.font-size='clamp(24px, 4vw, 48px)';"></lido-text>
                    <lido-text string="${t.rowLabel3Text}" font-size="clamp(24px, 4vw, 48px)" visible="true" font-weight="700" font-family="'Baloo Bhai 2', serif" font-color="#654321" onEntry="this.backgroundColor='#EEB565'; this.width='60%'; this.font-size='clamp(24px, 4vw, 48px)';"></lido-text>
                </lido-cell>

                <lido-cell id="drop-grid" flex="1" visible="true" width="100%" bg-color="#E7CFAA" onEntry="this.display='grid'; this.gridTemplateColumns='repeat(3, 1fr)'; this.gridTemplateRows='repeat(3, 1fr)'; this.gap='15px'; this.padding='15px'; this.borderRadius='10px';">
                    <lido-text id="drop_mug"  tab-index="1" visible="true" type="drop" value="${t.dropTarget1Value}" bg-color="transparent" is-allow-only-correct="true" onEntry="this.borderRadius='10px';"></lido-text>
                    <lido-text id="drop_mad" tab-index="2" visible="true" type="drop" value="${t.dropTarget2Value}" bg-color="transparent" is-allow-only-correct="true" onEntry="this.borderRadius='10px';"></lido-text>
                    <lido-text id="drop_mop" tab-index="3" visible="true" type="drop" value="${t.dropTarget3Value}" bg-color="transparent" is-allow-only-correct="true" onEntry="this.borderRadius='10px';"></lido-text>
                    <lido-text id="drop_chug" tab-index="4" visible="true" type="drop" value="${t.dropTarget4Value}" bg-color="transparent" is-allow-only-correct="true" onEntry="this.borderRadius='10px';"></lido-text>
                    <lido-text id="drop_chad" tab-index="5" visible="true" type="drop" value="${t.dropTarget5Value}" bg-color="transparent" is-allow-only-correct="true" onEntry="this.borderRadius='10px';"></lido-text>
                    <lido-text id="drop_chop" tabIndex="6" visible="true" type="drop" value="${t.dropTarget6Value}" bg-color="transparent" is-allow-only-correct="true" onEntry="this.borderRadius='10px';"></lido-text>
                    <lido-text id="drop_dug" tab-index="7" visible="true" type="drop" value="${t.dropTarget7Value}" bg-color="transparent" is-allow-only-correct="true" onEntry="this.borderRadius='10px';"></lido-text>
                    <lido-text id="drop_dad" tab-index="8" visible="true" type="drop" value="${t.dropTarget8Value}" bg-color="transparent" is-allow-only-correct="true" onEntry="this.borderRadius='10px';"></lido-text>
                    <lido-text id="drop_dop" tab-index="9" visible="true" type="drop" value="${t.dropTarget9Value}" bg-color="transparent" is-allow-only-correct="true" onEntry="this.borderRadius='10px';"></lido-text>
                </lido-cell>
            </lido-cell>
        </lido-cell>

        <!-- Draggable Words Container -->
        <lido-cell id="draggable-area" visible="true" bg-color="transparent" width="landscape.12%, portrait.43%" height="landscape.90vh, portrait.33%" overflow="hidden" onEntry="this.display='flex'; this.flexWrap='wrap'; this.justifyContent='center'; this.alignContent='center'; this.gap='10px';">
            <lido-text type="drag" id="drad_mug" tab-index="11" value="${t.draggable1Word}" string="${t.draggable1Word}" visible="true" onTouch="this.speak='true'" width="clamp(100px, 25vw, 150px)" height="auto" aspectRatio="2.5"  font-size="clamp(24px, 5vw, 32px)" onEntry="this.borderRadius='15px'; this.backgroundColor='#EEB565'; this.width='60%'; this.font-size='clamp(24px, 4vw, 48px)'; this.display='grid'; this.placeItems='center'; this.bg-color='red' this.cursor='grab';" />
            <lido-text type="drag" id="drag_mad" tab-index="12" value="${t.draggable2Word}" string="${t.draggable2Word}" visible="true" onTouch="this.speak='true'" width="clamp(100px, 25vw, 150px)" height="auto" aspectRatio="2.5" bg-color="#fcf3b1" font-size="clamp(24px, 5vw, 32px)" onEntry="this.borderRadius='15px'; this.backgroundColor='#EEB565'; this.width='60%'; this.font-size='clamp(24px, 4vw, 48px)'; this.textAlign='center'; this.display='grid'; this.placeItems='center'; this.cursor='grab';" />
            <lido-text type="drag" id="drag_mop" tab-index="13" value="${t.draggable3Word}" string="${t.draggable3Word}" visible="true" onTouch="this.speak='true'" width="clamp(100px, 25vw, 150px)" height="auto" aspectRatio="2.5" bg-color="#fcf3b1" font-size="clamp(24px, 5vw, 32px)" onEntry="this.borderRadius='15px'; this.backgroundColor='#EEB565'; this.width='60%'; this.font-size='clamp(24px, 4vw, 48px)'; this.textAlign='center'; this.display='grid'; this.placeItems='center'; this.cursor='grab';" />
            <lido-text type="drag" id="drag_chug" tab-index="14" value="${t.draggable4Word}" string="${t.draggable4Word}" visible="true" onTouch="this.speak='true'" width="clamp(100px, 25vw, 150px)" height="auto" aspectRatio="2.5" bg-color="#fcf3b1" font-size="clamp(24px, 5vw, 32px)" onEntry="this.borderRadius='15px'; this.backgroundColor='#EEB565'; this.width='60%'; this.font-size='clamp(24px, 4vw, 48px)'; this.textAlign='center'; this.display='grid'; this.placeItems='center'; this.cursor='grab';" />
            <lido-text type="drag" id="drag_chad" tab-index="15" value="${t.draggable5Word}" string="${t.draggable5Word}" visible="true" onTouch="this.speak='true'" width="clamp(100px, 25vw, 150px)" height="auto" aspectRatio="2.5" bg-color="#fcf3b1" font-size="clamp(24px, 5vw, 32px)" onEntry="this.borderRadius='15px'; this.backgroundColor='#EEB565'; this.width='60%'; this.font-size='clamp(24px, 4vw, 48px)'; this.textAlign='center'; this.display='grid'; this.placeItems='center'; this.cursor='grab';" />
            <lido-text type="drag" id="drag_chop" tab-index="16" value="${t.draggable6Word}" string="${t.draggable6Word}" visible="true" onTouch="this.speak='true'" width="clamp(100px, 25vw, 150px)" height="auto" aspectRatio="2.5" bg-color="#fcf3b1" font-size="clamp(24px, 5vw, 32px)" onEntry="this.borderRadius='15px'; this.backgroundColor='#EEB565'; this.width='60%'; this.font-size='clamp(24px, 4vw, 48px)'; this.textAlign='center'; this.display='grid'; this.placeItems='center'; this.cursor='grab';" />
            <lido-text type="drag" id="drag_dug" tab-index="17" value="${t.draggable7Word}" string="${t.draggable7Word}" visible="true" onTouch="this.speak='true'" width="clamp(100px, 25vw, 150px)" height="auto" aspectRatio="2.5" bg-color="#fcf3b1" font-size="clamp(24px, 5vw, 32px)" onEntry="this.borderRadius='15px'; this.backgroundColor='#EEB565'; this.width='60%'; this.font-size='clamp(24px, 4vw, 48px)'; this.textAlign='center'; this.display='grid'; this.placeItems='center'; this.cursor='grab';" />
            <lido-text type="drag" id="drag_dad" tab-index="18" value="${t.draggable8Word}" string="${t.draggable8Word}" visible="true" onTouch="this.speak='true'" width="clamp(100px, 25vw, 150px)" height="auto" aspectRatio="2.5" bg-color="#fcf3b1" font-size="clamp(24px, 5vw, 32px)" onEntry="this.borderRadius='15px'; this.backgroundColor='#EEB565'; this.width='60%'; this.font-size='clamp(24px, 4vw, 48px)'; this.textAlign='center'; this.display='grid'; this.placeItems='center'; this.cursor='grab';" />
            <lido-text type="drag" id="drag_dop" tab-index="19" value="${t.draggable9Word}" string="${t.draggable9Word}" visible="true" onTouch="this.speak='true'" width="clamp(100px, 25vw, 150px)" height="auto" aspectRatio="2.5" bg-color="#fcf3b1" font-size="clamp(24px, 5vw, 32px)" onEntry="this.borderRadius='15px'; this.backgroundColor='#EEB565'; this.width='60%'; this.font-size='clamp(24px, 4vw, 48px)'; this.textAlign='center'; this.display='grid'; this.placeItems='center'; this.cursor='grab';" />
        </lido-cell>
    </lido-cell>
</lido-container>
</main>`}var r,a,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
    draggable2Word: "mad",
    draggable3Word: "mop",
    draggable4Word: "chug",
    draggable5Word: "chad",
    draggable6Word: "chop",
    draggable7Word: "dug",
    draggable8Word: "dad",
    draggable9Word: "dop"
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const c=["DefaultGame"];export{e as DefaultGame,c as __namedExportsOrder,n as default};
