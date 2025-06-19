import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

type letterBoard = {
  backgroundImage: string;
};

const meta: Meta<letterBoard> = {
  title: 'Templates/letterboard'
};

export default meta;

export const letterBoard: StoryObj<letterBoard> = {
  render: (args) => {
    const xml = getContainerXml(args);
    return html`<lido-home xml-data="${xml}" xmlData="${xml}"></lido-home>`;
  },
};

function getContainerXml(args: letterBoard) {
  return `<main>
      <lido-container id="lido-container" tabIndex="1"  value="mainContainer1" height="100%" width="100%" bgColor="#74AADD" visible="true" 
        audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/sounds/letterboard.mp3"  
        onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="this.justifyContent='space-around';" 
        onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" showCheck="false" isContinueOnCorrect="true">
            
        <lido-pos id="pos" disableEdit="true" value="pos" height="100px" width="100px" ariaHidden="true" x="0" y="0" z="2" bgColor="transparent" type="" visible="true" audio="" onTouch="" onCorrect="" onEntry="">
          <lido-image id="play" disableEdit="true" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets//Audio%20icon.png" width="100px" height="100px" bgColor="transparent" x="35px" y="50px" onTouch="this.visibilty='hidden'; pause.visibility='visible'; question.speak='true'; pause.visibility='hidden';">
          </lido-image>
          <lido-image id="pause" disableEdit="true" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets//pause.png" width="100px" height="100px" bgColor="transparent" x="35px" y="50px" onTouch="this.stop='true'; this.visibility='hidden'; play.visibility='visible';" onEntry="this.visibility='hidden';">
          </lido-image>
        </lido-pos>

        <lido-pos id="pos1" disableEdit="true" tabIndex="2" value="pos1" height="350px" width="330px"  ariaHidden="true" z="1" bgColor="transparent" type="" visible="true" onTouch="" onCorrect="" onEntry="this.animation='rightToPlace 2.5s linear';">
          <lido-avatar id="lido-avatar" disableEdit="true" visible="true" height="350px" width="330px" x="0%" y="95%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" altText="{chimpleCharacterRive}">
          </lido-avatar>
        </lido-pos>
        <lido-image id="image1" z="3" disableEdit="true" value="image1" visible="landscape.true, portrait.false" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/truck.png" bgColor="transparent" onEntry="this.animation='rightToPlace 2.5s linear';this.position='absolute'" width="landscape.50%, portrait.0px" x="-21.6%" y="19%">
        </lido-image>
        <lido-image id="image2" z="1" disableEdit="true" value="image2" visible="landscape.true, portrait.false" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/tyre.png" bgColor="transparent" onEntry="this.animation='rightToPlace 2.5s linear';this.position='absolute'" width="landscape.45%, portrait.0px" x="44%" y="27%">
        </lido-image>
        <lido-image id="image3" disableEdit="true" value="image3" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/bg.png" bgColor="transparent" width="landscape.1600px, portrait.0px" height="landscape.900px, portrait.0px" altText="{bgImage}">
        </lido-image>
        <lido-image id="image4" disableEdit="true" value="image3" visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/portrait_bg.png" bgColor="transparent" width="landscape.0px, portrait.900px" height="landscape.0px, portrait.1600px" altText="{bgImage}">
        </lido-image>
        <lido-cell id="pos2" tabIndex="3" disableEdit="true" layout="col" height="landscape.85%, portrait.50%" width="landscape.60%, portrait.90%" ariaHidden="true" x="landscape.20%, portrait.5%" y="landscape.5%, portrait.20%" z="1" bgColor="#F57C00" visible="true"  onEntry="this.animation='rightToPlace 2.5s linear';this.position='absolute'">
            <lido-cell id="pos3" tabIndex="3" disableEdit="true" layout="row" height="15%" ariaHidden="true" visible="true">
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
            <lido-cell id="pos4" tabIndex="3" disableEdit="true" layout="row" height="15%" ariaHidden="true"  visible="true">
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
            <lido-cell id="pos5" tabIndex="3" disableEdit="true" layout="row" height="15%" ariaHidden="true"  visible="true">
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
            <lido-cell id="pos6" tabIndex="3" disableEdit="true" layout="row" height="15%" ariaHidden="true"  visible="true">
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
            <lido-cell id="pos7" tabIndex="3" disableEdit="true" layout="row" height="15%" ariaHidden="true"  visible="true">
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

        <lido-cell id="pos2" bgColor="transparent" disableEdit="true" layout="landscape.col, portrait.row" height="landscape.100%, portrait.20%" width="landscape.10%, portrait.100%" ariaHidden="true" x="landscape.85%, portrait.5%" y="landscape.5%, portrait.80%" z="1" visible="true" 
          onEntry="this.position='absolute'; this.animation='rightToPlace 2.5s linear';">
          
            <lido-image id="dragA" value="A" type="drag" tabIndex="30" disableEdit="true" visible="true"
              src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/draggables/A.svg"
              width="100%" onEntry="this.boxShadow='none'; " onTouch="this.play='true'"
              audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/sounds/a.mp3"></lido-image>

            <lido-image id="dragB" value="B" type="drag" disableEdit="true" visible="true"
                src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/draggables/B.svg"
                width="100%" onEntry="this.boxShadow='none'; " onTouch="this.play='true'"
                audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/sounds/b.mp3"></lido-image>

            <lido-image id="dragC" value="C" type="drag" disableEdit="true" visible="true"
                src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/draggables/C.svg"
                width="100%" onEntry="this.boxShadow='none'; " onTouch="this.play='true'"
                audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/sounds/c.mp3"></lido-image>

            <lido-image id="dragD" value="D" type="drag" disableEdit="true" visible="true"
                src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/draggables/D.svg"
                width="100%" onEntry="this.boxShadow='none'; " onTouch="this.play='true'"
                audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/sounds/d.mp3"></lido-image>

            <lido-image id="dragE" value="E" type="drag" disableEdit="true" visible="true"
                src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/draggables/E.svg"
                width="100%" onEntry="this.boxShadow='none'; " onTouch="this.play='true'"
                audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/sounds/e.mp3"></lido-image>

            <lido-image id="dragF" value="F" type="drag" disableEdit="true" visible="true"
                src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/draggables/F.svg"
                width="100%" onEntry="this.boxShadow='none'; " onTouch="this.play='true'"
                audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/sounds/f.mp3"></lido-image>

            <lido-image id="dragG" value="G" type="drag" disableEdit="true" visible="true"
                src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/draggables/G.svg"
                width="100%" onEntry="this.boxShadow='none'; " onTouch="this.play='true'"
                audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/sounds/g.mp3"></lido-image>

            <lido-image id="dragH" value="H" type="drag" disableEdit="true" visible="true"
                src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/draggables/H.svg"
                width="100%" onEntry="this.boxShadow='none'; " onTouch="this.play='true'"
                audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/sounds/h.mp3"></lido-image>

            <lido-image id="dragI" value="I" type="drag" disableEdit="true" visible="true"
                src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/draggables/I.svg"
                width="100%" onEntry="this.boxShadow='none'; " onTouch="this.play='true'"
                audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/sounds/i.mp3"></lido-image>

            <lido-image id="dragJ" value="J" type="drag" disableEdit="true" visible="true"
                src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/draggables/J.svg"
                width="100%" onEntry="this.boxShadow='none'; " onTouch="this.play='true'"
                audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/sounds/j.mp3"></lido-image>

            <lido-image id="dragK" value="K" type="drag" disableEdit="true" visible="true"
                src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/draggables/K.svg"
                width="100%" onEntry="this.boxShadow='none'; " onTouch="this.play='true'"
                audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/sounds/k.mp3"></lido-image>

            <lido-image id="dragL" value="L" type="drag" disableEdit="true" visible="true"
                src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/draggables/L.svg"
                width="100%" onEntry="this.boxShadow='none'; " onTouch="this.play='true'"
                audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/sounds/l.mp3"></lido-image>

            <lido-image id="dragM" value="M" type="drag" disableEdit="true" visible="true"
                src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/draggables/M.svg"
                width="100%" onEntry="this.boxShadow='none'; " onTouch="this.play='true'"
                audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/sounds/m.mp3"></lido-image>

            <lido-image id="dragN" value="N" type="drag" disableEdit="true" visible="true"
                src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/draggables/N.svg"
                width="100%" onEntry="this.boxShadow='none'; " onTouch="this.play='true'"
                audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/sounds/n.mp3"></lido-image>

            <lido-image id="dragO" value="O" type="drag" disableEdit="true" visible="true"
                src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/draggables/O.svg"
                width="100%" onEntry="this.boxShadow='none'; " onTouch="this.play='true'"
                audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/sounds/o.mp3"></lido-image>

            <lido-image id="dragP" value="P" type="drag" disableEdit="true" visible="true"
                src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/draggables/P.svg"
                width="100%" onEntry="this.boxShadow='none'; " onTouch="this.play='true'"
                audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/sounds/p.mp3"></lido-image>

            <lido-image id="dragQ" value="Q" type="drag" disableEdit="true" visible="true"
                src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/draggables/Q.svg"
                width="100%" onEntry="this.boxShadow='none'; " onTouch="this.play='true'"
                audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/sounds/q.mp3"></lido-image>

            <lido-image id="dragR" value="R" type="drag" disableEdit="true" visible="true"
                src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/draggables/R.svg"
                width="100%" onEntry="this.boxShadow='none'; " onTouch="this.play='true'"
                audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/sounds/r.mp3"></lido-image>

            <lido-image id="dragS" value="S" type="drag" disableEdit="true" visible="true"
                src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/draggables/S.svg"
                width="100%" onEntry="this.boxShadow='none'; " onTouch="this.play='true'"
                audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/sounds/s.mp3"></lido-image>

            <lido-image id="dragT" value="T" type="drag" disableEdit="true" visible="true"
                src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/draggables/T.svg"
                width="100%" onEntry="this.boxShadow='none'; " onTouch="this.play='true'"
                audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/sounds/t.mp3"></lido-image>

            <lido-image id="dragU" value="U" type="drag" disableEdit="true" visible="true"
                src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/draggables/U.svg"
                width="100%" onEntry="this.boxShadow='none'; " onTouch="this.play='true'"
                audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/sounds/u.mp3"></lido-image>

            <lido-image id="dragV" value="V" type="drag" disableEdit="true" visible="true"
                src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/draggables/V.svg"
                width="100%" onEntry="this.boxShadow='none'; " onTouch="this.play='true'"
                audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/sounds/v.mp3"></lido-image>

            <lido-image id="dragW" value="W" type="drag" disableEdit="true" visible="true"
                src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/draggables/W.svg"
                width="100%" onEntry="this.boxShadow='none'; " onTouch="this.play='true'"
                audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/sounds/w.mp3"></lido-image>

            <lido-image id="dragX" value="X" type="drag" disableEdit="true" visible="true"
                src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/draggables/X.svg"
                width="100%" onEntry="this.boxShadow='none'; " onTouch="this.play='true'"
                audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/sounds/x.mp3"></lido-image>

            <lido-image id="dragY" value="Y" type="drag" disableEdit="true" visible="true"
                src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/draggables/Y.svg"
                width="100%" onEntry="this.boxShadow='none'; " onTouch="this.play='true'"
                audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/sounds/y.mp3"></lido-image>

            <lido-image id="dragZ" value="Z" type="drag" disableEdit="true" visible="true"
                src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/draggables/Z.svg"
                width="100%" onEntry="this.boxShadow='none'; " onTouch="this.play='true'"
                audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/letterboard/sounds/z.mp3"></lido-image>
        </lido-cell>
      </lido-container>
</main>`;
}
