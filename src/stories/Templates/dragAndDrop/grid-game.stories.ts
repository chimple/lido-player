import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Templates/GridGame', 
};
export default meta;

export const DefaultGame: StoryObj = {
  args: {
    bgImage: "https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/grid-game//Underwater.png",
    avatarSrc: "https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv",
    objectiveList: "mug,chad,dug,dad,chug,chop,mad,mop,dop", 

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
    draggable9Word: "dop",
  },
  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};

function getContainerXml(args: any): string {
  return `<main>
<lido-container id="lido-container" tabIndex="1" objective="${args.objectiveList}" isAllowOnlyCorrect="true" value="mainContainer1" height="100%" width="100%" bgImage="${args.bgImage}" bgColor="transparent" visible="true" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" showCheck="false" isContinueOnCorrect="true">

	<lido-cell layout="pos" id="pos1" disableEdit="true" value="pos2" height="305px" width="227px" x="landscape.1274px, portrait.541px" y="landscape.591px, portrait.1274px" ariaHidden="true" z="1" bgColor="transparent" visible="true" onEntry="this.animation='rightToPlace 2.5s linear';">
		<lido-avatar id="lido-avatar" disableEdit="true" visible="true" height="462px" width="356px" src="${args.avatarSrc}" altText="{chimpleCharacterRive}"></lido-avatar>
	</lido-cell>

	<lido-cell id="main-layout-wrapper" layout="landscape.row, portrait.col" width="100%" height="100%" visible="true" bgColor="transparent" onEntry="this.justifyContent='center'; this.alignItems='center'; this.gap='20px'; this.padding='10px';">

		<lido-cell id="game-board" width="landscape.50%, portrait.90%" height="landscape.60%, portrait.40%" aspectRatio="1" maxHeight="landscape.90vh, portrait.auto" maxWidth="portrait.90vw, landscape.auto" visible="true" bgColor="#F5D482" onEntry="this.display='flex'; this.flexDirection='column'; this.padding='15px'; this.gap='10px'; this.borderRadius='20px'; this.boxShadow='0 8px 16px rgba(0,0,0,0.1)';">

			<!-- TOP ROW: Column Headers -->
			<lido-cell id="top-row" flex="1" bgColor="transparent" onEntry="this.display='flex'; this.flex='0 0 15%';">
				<lido-cell id="blank-space" visible="true" onEntry="this.flex='0 0 15%';" bgColor="transparent"></lido-cell>
				<lido-cell id="column-headers" width="60vh" visible="true" flex="1" bgColor="transparent" padding-left="45%" onEntry="this.display='flex'; this.justifyContent='space-around'; this.alignItems='center'; this.margin-left='-9vh' this.gap='10vh';">
					<lido-text string="${args.colHeader1Text}" font-size="clamp(24px, 4vw, 48px)" visible="true" font-weight="700" font-family="'Baloo Bhai 2', serif" fontColor="#EEB565" onEntry="this.backgroundColor='#EEB565'; this.width='40%'; this.font-size='clamp(24px, 4vw, 48px)'; "></lido-text>
					<lido-text string="${args.colHeader2Text}" font-size="clamp(24px, 4vw, 48px)" visible="true" font-weight="700" font-family="'Baloo Bhai 2', serif" fontColor="#EEB565" onEntry="this.backgroundColor='#EEB565'; this.width='40%'; this.font-size='clamp(24px, 4vw, 48px)'; "></lido-text>
					<lido-text string="${args.colHeader3Text}" font-size="clamp(24px, 4vw, 48px)" visible="true" font-weight="700" font-family="'Baloo Bhai 2', serif" fontColor="#EEB565" onEntry="this.backgroundColor='#EEB565'; this.width='40%'; this.font-size='clamp(24px, 4vw, 48px)';"></lido-text>
				</lido-cell>
			</lido-cell>

			<!-- BOTTOM ROW: Row Labels and Drop Grid -->
			<lido-cell id="bottom-row" flex="1" visible="true" bgColor="transparent" onEntry="this.display='flex'; this.flex='0 0 15%';">
				<lido-cell id="row-labels" height="50vh" onEntry="this.display='flex'; this.flexDirection='column'; this.flex='0 0 15%'; this.justifyContent='space-around'; this.alignItems='center';" bgColor="transparent">
					<lido-text string="${args.rowLabel1Text}" font-size="clamp(24px, 4vw, 48px)" visible="true" font-weight="700" font-family="'Baloo Bhai 2', serif" fontColor="#654321" onEntry="this.backgroundColor='#EEB565'; this.width='60%'; this.font-size='clamp(24px, 4vw, 48px)';"></lido-text>
					<lido-text string="${args.rowLabel2Text}" font-size="clamp(24px, 4vw, 48px)" visible="true" font-weight="700" font-family="'Baloo Bhai 2', serif" fontColor="#654321" onEntry="this.backgroundColor='#EEB565'; this.width='60%'; this.font-size='clamp(24px, 4vw, 48px)';"></lido-text>
					<lido-text string="${args.rowLabel3Text}" font-size="clamp(24px, 4vw, 48px)" visible="true" font-weight="700" font-family="'Baloo Bhai 2', serif" fontColor="#654321" onEntry="this.backgroundColor='#EEB565'; this.width='60%'; this.font-size='clamp(24px, 4vw, 48px)';"></lido-text>
				</lido-cell>

				<lido-cell id="drop-grid" flex="1" visible="true" bgColor="#E7CFAA" onEntry="this.display='grid'; this.gridTemplateColumns='repeat(3, 1fr)'; this.gridTemplateRows='repeat(3, 1fr)'; this.gap='15px'; this.padding='15px'; this.borderRadius='10px';">
					<lido-cell id="drop_mug" visible="true" type="drop" value="${args.dropTarget1Value}" bgColor="#6B4226" isAllowOnlyCorrect="true" onEntry="this.borderRadius='10px';"></lido-cell>
					<lido-cell id="drop_mad" visible="true" type="drop" value="${args.dropTarget2Value}" bgColor="#6B4226" isAllowOnlyCorrect="true" onEntry="this.borderRadius='10px';"></lido-cell>
					<lido-cell id="drop_mop" visible="true" type="drop" value="${args.dropTarget3Value}" bgColor="#6B4226" isAllowOnlyCorrect="true" onEntry="this.borderRadius='10px';"></lido-cell>
					<lido-cell id="drop_chug" visible="true" type="drop" value="${args.dropTarget4Value}" bgColor="#6B4226" isAllowOnlyCorrect="true" onEntry="this.borderRadius='10px';"></lido-cell>
					<lido-cell id="drop_chad" visible="true" type="drop" value="${args.dropTarget5Value}" bgColor="#6B4226" isAllowOnlyCorrect="true" onEntry="this.borderRadius='10px';"></lido-cell>
					<lido-cell id="drop_chop" visible="true" type="drop" value="${args.dropTarget6Value}" bgColor="#6B4226" isAllowOnlyCorrect="true" onEntry="this.borderRadius='10px';"></lido-cell>
					<lido-cell id="drop_dug" visible="true" type="drop" value="${args.dropTarget7Value}" bgColor="#6B4226" isAllowOnlyCorrect="true" onEntry="this.borderRadius='10px';"></lido-cell>
					<lido-cell id="drop_dad" visible="true" type="drop" value="${args.dropTarget8Value}" bgColor="#6B4226" isAllowOnlyCorrect="true" onEntry="this.borderRadius='10px';"></lido-cell>
					<lido-cell id="drop_dop" visible="true" type="drop" value="${args.dropTarget9Value}" bgColor="#6B4226" isAllowOnlyCorrect="true" onEntry="this.borderRadius='10px';"></lido-cell>
				</lido-cell>
			</lido-cell>
		</lido-cell>

		<!-- Draggable Words Container -->
		<lido-cell id="draggable-area" visible="true" bgColor="transparent" width="landscape.12%, portrait.43%" height="landscape.90vh, portrait.33%" overflow="hidden" onEntry="this.display='flex'; this.flexWrap='wrap'; this.justifyContent='center'; this.alignContent='center'; this.gap='10px';">
			<lido-text type="drag" value="${args.draggable1Word}" string="${args.draggable1Word}" visible="true" width="clamp(100px, 25vw, 150px)" height="auto" aspectRatio="2.5"  font-size="clamp(24px, 5vw, 32px)" onEntry="this.borderRadius='15px'; this.backgroundColor='#EEB565'; this.width='60%'; this.font-size='clamp(24px, 4vw, 48px)'; this.display='grid'; this.placeItems='center'; this.bgColor='red' this.cursor='grab';" />
			<lido-text type="drag" value="${args.draggable2Word}" string="${args.draggable2Word}" visible="true" width="clamp(100px, 25vw, 150px)" height="auto" aspectRatio="2.5" bgColor="#fcf3b1" font-size="clamp(24px, 5vw, 32px)" onEntry="this.borderRadius='15px'; this.backgroundColor='#EEB565'; this.width='60%'; this.font-size='clamp(24px, 4vw, 48px)'; this.textAlign='center'; this.display='grid'; this.placeItems='center'; this.cursor='grab';" />
			<lido-text type="drag" value="${args.draggable3Word}" string="${args.draggable3Word}" visible="true" width="clamp(100px, 25vw, 150px)" height="auto" aspectRatio="2.5" bgColor="#fcf3b1" font-size="clamp(24px, 5vw, 32px)" onEntry="this.borderRadius='15px'; this.backgroundColor='#EEB565'; this.width='60%'; this.font-size='clamp(24px, 4vw, 48px)'; this.textAlign='center'; this.display='grid'; this.placeItems='center'; this.cursor='grab';" />
			<lido-text type="drag" value="${args.draggable4Word}" string="${args.draggable4Word}" visible="true" width="clamp(100px, 25vw, 150px)" height="auto" aspectRatio="2.5" bgColor="#fcf3b1" font-size="clamp(24px, 5vw, 32px)" onEntry="this.borderRadius='15px'; this.backgroundColor='#EEB565'; this.width='60%'; this.font-size='clamp(24px, 4vw, 48px)'; this.textAlign='center'; this.display='grid'; this.placeItems='center'; this.cursor='grab';" />
			<lido-text type="drag" value="${args.draggable5Word}" string="${args.draggable5Word}" visible="true" width="clamp(100px, 25vw, 150px)" height="auto" aspectRatio="2.5" bgColor="#fcf3b1" font-size="clamp(24px, 5vw, 32px)" onEntry="this.borderRadius='15px'; this.backgroundColor='#EEB565'; this.width='60%'; this.font-size='clamp(24px, 4vw, 48px)'; this.textAlign='center'; this.display='grid'; this.placeItems='center'; this.cursor='grab';" />
			<lido-text type="drag" value="${args.draggable6Word}" string="${args.draggable6Word}" visible="true" width="clamp(100px, 25vw, 150px)" height="auto" aspectRatio="2.5" bgColor="#fcf3b1" font-size="clamp(24px, 5vw, 32px)" onEntry="this.borderRadius='15px'; this.backgroundColor='#EEB565'; this.width='60%'; this.font-size='clamp(24px, 4vw, 48px)'; this.textAlign='center'; this.display='grid'; this.placeItems='center'; this.cursor='grab';" />
			<lido-text type="drag" value="${args.draggable7Word}" string="${args.draggable7Word}" visible="true" width="clamp(100px, 25vw, 150px)" height="auto" aspectRatio="2.5" bgColor="#fcf3b1" font-size="clamp(24px, 5vw, 32px)" onEntry="this.borderRadius='15px'; this.backgroundColor='#EEB565'; this.width='60%'; this.font-size='clamp(24px, 4vw, 48px)'; this.textAlign='center'; this.display='grid'; this.placeItems='center'; this.cursor='grab';" />
			<lido-text type="drag" value="${args.draggable8Word}" string="${args.draggable8Word}" visible="true" width="clamp(100px, 25vw, 150px)" height="auto" aspectRatio="2.5" bgColor="#fcf3b1" font-size="clamp(24px, 5vw, 32px)" onEntry="this.borderRadius='15px'; this.backgroundColor='#EEB565'; this.width='60%'; this.font-size='clamp(24px, 4vw, 48px)'; this.textAlign='center'; this.display='grid'; this.placeItems='center'; this.cursor='grab';" />
			<lido-text type="drag" value="${args.draggable9Word}" string="${args.draggable9Word}" visible="true" width="clamp(100px, 25vw, 150px)" height="auto" aspectRatio="2.5" bgColor="#fcf3b1" font-size="clamp(24px, 5vw, 32px)" onEntry="this.borderRadius='15px'; this.backgroundColor='#EEB565'; this.width='60%'; this.font-size='clamp(24px, 4vw, 48px)'; this.textAlign='center'; this.display='grid'; this.placeItems='center'; this.cursor='grab';" />
		</lido-cell>
	</lido-cell>
</lido-container>
</main>`;
}