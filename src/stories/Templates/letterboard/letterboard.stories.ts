import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta<object> = {
  title: 'Templates/letterboard',
};

export default meta;

export const letterBoard: StoryObj<object> = {
  render: args => {
    const xml = getContainerXml();
    return html`<lido-home xml-data="${xml}" xmlData="${xml}"></lido-home>`;
  },
};

function getDraggables(): string {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  return letters
    .map(
      (letter, i) => `
    <lido-image id="drag${letter}" value="${letter}" type="drag" tab-index="${30 + i}" disable-edit="true" visible="true"
      src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/draggables/${letter}.svg"
      width="100%" onEntry="this.boxShadow='none';" onTouch="this.play='true'"
      audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/sounds/${letter.toLowerCase()}.mp3">
    </lido-image>
  `,
    )
    .join('\n');
}

function getContainerXml() {
  return `<main>
  <lido-container id="lido-container" objective="A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y" tab-index="1" value="mainContainer1" height="100%" width="100%" visible="true" 
		audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/sounds/letterboard.mp3"  
		onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="this.justifyContent='space-around';" 
		onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" bg-color="transparent" show-check="false" is-continue-on-correct="true"
		bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/bg.png">

		<lido-cell id="cell1" tab-index="2" disable-edit="true" layout="row" visible="true"  onEntry="this.animation='rightToPlace 2.5s linear';">
			<lido-image id="image1" z="3" disable-edit="true" value="image1" visible="landscape.true, portrait.false" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/truck.png" bg-color="transparent" onEntry="this.animation='rightToPlace 2.5s linear';" width="landscape.10%, portrait.0px">
			</lido-image>
      <lido-cell id="cell2" tab-index="3" disable-edit="true" layout="col" height="landscape.85%, portrait.50%" width="landscape.60%, portrait.90%" aria-hidden="true"
       z="1" bg-color="#F57C00" visible="true"  onEntry="this.animation='rightToPlace 2.5s linear';">
				<lido-cell id="cell3" disable-edit="true" layout="row"  aria-hidden="true" visible="true">
					<lido-image id="A" value="A" tab-index="4" type="drop" disable-edit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/A.svg"
						></lido-image>
					<lido-image id="B" value="B" tab-index="5" type="drop" disable-edit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/B.svg"
						></lido-image>
					<lido-image id="C" value="C" tab-index="6" type="drop" disable-edit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/C.svg"
						></lido-image>
					<lido-image id="D" value="D" tab-index="7" type="drop" disable-edit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/D.svg"
						></lido-image>
					<lido-image id="E" value="E" tab-index="8" type="drop" disable-edit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/E.svg"
						></lido-image>
				</lido-cell>
				<lido-cell id="cell4" tab-index="3" disable-edit="true" layout="row"  aria-hidden="true"  visible="true">
					<lido-image id="F" value="F" tab-index="9" type="drop" disable-edit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/F.svg"
						></lido-image>
					<lido-image id="G" value="G" tab-index="10" type="drop" disable-edit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/G.svg"
						></lido-image>
					<lido-image id="H" value="H" tab-index="11" type="drop" disable-edit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/H.svg"
						></lido-image>
					<lido-image id="I" value="I" tab-index="12" type="drop" disable-edit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/I.svg"
						></lido-image>
					<lido-image id="J" value="J" tab-index="13" type="drop" disable-edit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/J.svg"
						></lido-image>
				</lido-cell>
				<lido-cell id="cell5" tab-index="3" disable-edit="true" layout="row"  aria-hidden="true"  visible="true">
					<lido-image id="K" value="K" tab-index="14" type="drop" disable-edit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/K.svg"
						></lido-image>
					<lido-image id="L" value="L" tab-index="15" type="drop" disable-edit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/L.svg"
						></lido-image>
					<lido-image id="M" value="M" tab-index="16" type="drop" disable-edit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/M.svg"
						></lido-image>
					<lido-image id="N" value="N" tab-index="17" type="drop" disable-edit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/N.svg"
						></lido-image>
					<lido-image id="O" value="O" tab-index="18" type="drop" disable-edit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/O.svg"
						></lido-image>
				</lido-cell>
				<lido-cell id="cell6" tab-index="3" disable-edit="true" layout="row"  aria-hidden="true"  visible="true">
					<lido-image id="P" value="P" tab-index="19" type="drop" disable-edit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/P.svg"
						></lido-image>
					<lido-image id="Q" value="Q" tab-index="20" type="drop" disable-edit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/Q.svg"
						></lido-image>
					<lido-image id="R" value="R" tab-index="21" type="drop" disable-edit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/R.svg"
						></lido-image>
					<lido-image id="S" value="S" tab-index="22" type="drop" disable-edit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/S.svg"
						></lido-image>
					<lido-image id="T" value="T" tab-index="23" type="drop" disable-edit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/T.svg"
						></lido-image>
				</lido-cell>
				<lido-cell id="cell7" tab-index="3" disable-edit="true" layout="row"  aria-hidden="true"  visible="true">
					<lido-image id="U" value="U" tab-index="24" type="drop" disable-edit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/U.svg"
						></lido-image>
					<lido-image id="V" value="V" tab-index="25" type="drop" disable-edit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/V.svg"
						></lido-image>
					<lido-image id="W" value="W" tab-index="26" type="drop" disable-edit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/W.svg"
						></lido-image>
					<lido-image id="X" value="X" tab-index="27" type="drop" disable-edit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/X.svg"
						></lido-image>
					<lido-image id="Y" value="Y" tab-index="28" type="drop" disable-edit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/Y.svg"
						></lido-image>
					<lido-image id="Z" value="Z" tab-index="29" type="drop" disable-edit="true" visible="true"
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/droppables/Z.svg"
						></lido-image>
				</lido-cell>
			</lido-cell>

			<lido-cell id="cell3" bg-color="transparent" disable-edit="true" layout="landscape.col, portrait.row" height="landscape.100%, portrait.20%" width="landscape.10%, portrait.100%" aria-hidden="true" x="landscape.85%, portrait.5%" y="landscape.5%, portrait.80%" z="1" visible="true" 
				onEntry="; this.animation='rightToPlace 2.5s linear';">
					 ${getDraggables()}
		</lido-cell>
	</lido-container>
</main>`;
}
