import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta<object> = {
  title: 'Templates/letterboard',
};

export default meta;

export const letterBoard: StoryObj<object> = {
  render: (args) => {
    const xml = getContainerXml();
    return html`<lido-home xml-data="${xml}" xmlData="${xml}"></lido-home>`;
  },
};

function getDraggables(): string {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  return letters.map((letter, i) => `
    <lido-image id="drag${letter}" value="${letter}" type="drag" tabIndex="${30 + i}" disableEdit="true" visible="true"
      src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/draggables/${letter}.svg"
      width="100%" onEntry="this.boxShadow='none';" onTouch="this.play='true'"
      audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/sounds/${letter.toLowerCase()}.mp3">
    </lido-image>
  `).join('\n');
}

function getContainerXml() {
  return `<main>
  <lido-container id="lido-container" objective="A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y" tabIndex="1" value="mainContainer1" height="100%" width="100%" visible="true" 
		audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/sounds/letterboard.mp3"  
		onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="this.justifyContent='space-around';" 
		onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" bgColor="transparent" showCheck="false" isContinueOnCorrect="true"
		bgImage="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/bg.png">

		<lido-cell id="cell1" tabIndex="2" disableEdit="true" layout="row" visible="true"  onEntry="this.animation='rightToPlace 2.5s linear';">
			<lido-image id="image1" z="3" disableEdit="true" value="image1" visible="landscape.true, portrait.false" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/truck.png" bgColor="transparent" onEntry="this.animation='rightToPlace 2.5s linear';" width="landscape.10%, portrait.0px">
			</lido-image>
      <lido-cell id="cell2" tabIndex="3" disableEdit="true" layout="col" height="landscape.85%, portrait.50%" width="landscape.60%, portrait.90%" ariaHidden="true"
       z="1" bgColor="#F57C00" visible="true"  onEntry="this.animation='rightToPlace 2.5s linear';">
				<lido-cell id="cell3" disableEdit="true" layout="row"  ariaHidden="true" visible="true">
					<lido-image id="A" value="A" tabIndex="4" type="drop" disableEdit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/A.svg"
						></lido-image>
					<lido-image id="B" value="B" tabIndex="5" type="drop" disableEdit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/B.svg"
						></lido-image>
					<lido-image id="C" value="C" tabIndex="6" type="drop" disableEdit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/C.svg"
						></lido-image>
					<lido-image id="D" value="D" tabIndex="7" type="drop" disableEdit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/D.svg"
						></lido-image>
					<lido-image id="E" value="E" tabIndex="8" type="drop" disableEdit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/E.svg"
						></lido-image>
				</lido-cell>
				<lido-cell id="cell4" tabIndex="3" disableEdit="true" layout="row"  ariaHidden="true"  visible="true">
					<lido-image id="F" value="F" tabIndex="9" type="drop" disableEdit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/F.svg"
						></lido-image>
					<lido-image id="G" value="G" tabIndex="10" type="drop" disableEdit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/G.svg"
						></lido-image>
					<lido-image id="H" value="H" tabIndex="11" type="drop" disableEdit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/H.svg"
						></lido-image>
					<lido-image id="I" value="I" tabIndex="12" type="drop" disableEdit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/I.svg"
						></lido-image>
					<lido-image id="J" value="J" tabIndex="13" type="drop" disableEdit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/J.svg"
						></lido-image>
				</lido-cell>
				<lido-cell id="cell5" tabIndex="3" disableEdit="true" layout="row"  ariaHidden="true"  visible="true">
					<lido-image id="K" value="K" tabIndex="14" type="drop" disableEdit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/K.svg"
						></lido-image>
					<lido-image id="L" value="L" tabIndex="15" type="drop" disableEdit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/L.svg"
						></lido-image>
					<lido-image id="M" value="M" tabIndex="16" type="drop" disableEdit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/M.svg"
						></lido-image>
					<lido-image id="N" value="N" tabIndex="17" type="drop" disableEdit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/N.svg"
						></lido-image>
					<lido-image id="O" value="O" tabIndex="18" type="drop" disableEdit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/O.svg"
						></lido-image>
				</lido-cell>
				<lido-cell id="cell6" tabIndex="3" disableEdit="true" layout="row"  ariaHidden="true"  visible="true">
					<lido-image id="P" value="P" tabIndex="19" type="drop" disableEdit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/P.svg"
						></lido-image>
					<lido-image id="Q" value="Q" tabIndex="20" type="drop" disableEdit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/Q.svg"
						></lido-image>
					<lido-image id="R" value="R" tabIndex="21" type="drop" disableEdit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/R.svg"
						></lido-image>
					<lido-image id="S" value="S" tabIndex="22" type="drop" disableEdit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/S.svg"
						></lido-image>
					<lido-image id="T" value="T" tabIndex="23" type="drop" disableEdit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/T.svg"
						></lido-image>
				</lido-cell>
				<lido-cell id="cell7" tabIndex="3" disableEdit="true" layout="row"  ariaHidden="true"  visible="true">
					<lido-image id="U" value="U" tabIndex="24" type="drop" disableEdit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/U.svg"
						></lido-image>
					<lido-image id="V" value="V" tabIndex="25" type="drop" disableEdit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/V.svg"
						></lido-image>
					<lido-image id="W" value="W" tabIndex="26" type="drop" disableEdit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/W.svg"
						></lido-image>
					<lido-image id="X" value="X" tabIndex="27" type="drop" disableEdit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/X.svg"
						></lido-image>
					<lido-image id="Y" value="Y" tabIndex="28" type="drop" disableEdit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/Y.svg"
						></lido-image>
					<lido-image id="Z" value="Z" tabIndex="29" type="drop" disableEdit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/Z.svg"
						></lido-image>
				</lido-cell>
			</lido-cell>

			<lido-cell id="cell3" bgColor="transparent" disableEdit="true" layout="landscape.col, portrait.row" height="landscape.100%, portrait.20%" width="landscape.10%, portrait.100%" ariaHidden="true" x="landscape.85%, portrait.5%" y="landscape.5%, portrait.80%" z="1" visible="true" 
				onEntry="; this.animation='rightToPlace 2.5s linear';">
					 ${getDraggables()}
		</lido-cell>
	</lido-container>
</main>`;
}
