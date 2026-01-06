import"./lit-element-BxxbMms4.js";import{x as r}from"./lit-html-DLYuhZ0i.js";const d={title:"Templates/matchBox"},e={args:{ans1:"6",ans2:"8",ans3:"5",ans4:"4",ans5:"1",option1:"6",option2:"4",option3:"5",option4:"1",option5:"8",row1:"3",col1:"2",row2:"2",col2:"2",row3:"5",col3:"1",row4:"1",col4:"1",row5:"4",col5:"2"},render:t=>{const o=n(t);return r`<lido-home .xmlData="${o}"></lido-home>`}};function n(t){return`
  <main>

    <lido-container visible="true" dropAttr="EnableAnimation" is-allow-only-correct="true" objective="${t.ans1},${t.ans2},${t.ans3},${t.ans4},${t.ans5}" id="ldo-container" onCorrect="lido-avatar.avatarAnimate='Success';this.sleep='2000';" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/Sky.png" is-continue-on-correct="true">
        <lido-cell visible="true"  onEntry="this.position='relative';" y="landscape.57%,portrait.77%">	
                <lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="360px" width="485px"  y="landscape.200px,portrait.0px" onEntry="this.position='relative';" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
                </lido-avatar>
            </lido-cell>
        <lido-cell layout="row" visible="true" margin="landscape.-336px 0px -49px,portrait.-103px 0px 333px 0px" bg-color="transparent" height="90%" width="landscape.84%,portrait.100%">
            <lido-image layout="col" is-slice="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/matchBox/linematching_building1.png" visible="true" height="100%" width="landscape.30%,portrait.40%"  onEntry="this.display='grid';  this.align-items='center';this.justify-content='center';this.gap='26px';">
                <lido-cell layout="col" visible="true" margin="0px 18px 0px -18px" bg-color="transparent" height="89%" width="100%" onEntry="this.display='flex'; align-items='center'; justify-content='space-around';">
                <lido-image z="10" visible="true" is-slice="true" src="https://wallpapers.com/images/featured/blank-white-7sn5o1woonmklx1h.jpg" tab-index="1" type="drag" id="drag1" value="${t.option1}" height="100px" width="auto" onEntry="this.display='flex'; this.align-items='center'; this.justify-content='center';" bg-color="white">
                    <lido-math-matrix id="matrix1" clickable="false" rows="${t.row1}" cols="${t.col1}"  defualtFill="${t.option1}" leftIndex="false" topIndex="false"  matrixImage="" activeBgColor="pink" inactiveBgColor="transparent"   border="2px solid black" height="150px" width="150px"
                    visible="true" margin="landscape.0,portrait.-26px 0px 0px 0px"></lido-math-matrix>
                </lido-image>
            
                <lido-image z="10" visible="true" is-slice="true" src="https://wallpapers.com/images/featured/blank-white-7sn5o1woonmklx1h.jpg" tab-index="2" type="drag" id="drag2" value="${t.option2}" height="100px" width="auto" onEntry="this.display='flex'; this.align-items='center'; this.justify-content='center';" bg-color="white">
                    <lido-math-matrix id="matrix2" clickable="false" rows="${t.row2}" cols="${t.col2}"  defualtFill="${t.option2}" leftIndex="false" topIndex="false"  matrixImage="" activeBgColor="pink" inactiveBgColor="transparent"   border="2px solid black" height="150px" width="150px"
                    visible="true" margin="landscape.0,portrait.-26px 0px 0px 0px"></lido-math-matrix>
                </lido-image>
            
                <lido-image z="10" visible="true" is-slice="true" src="https://wallpapers.com/images/featured/blank-white-7sn5o1woonmklx1h.jpg" tab-index="3" type="drag" id="drag3" value="${t.option3}" height="100px" width="auto" onEntry="this.display='flex'; this.align-items='center'; this.justify-content='center';" bg-color="white">
                    <lido-math-matrix id="matrix3" clickable="false" rows="${t.row3}" cols="${t.col3}"  defualtFill="${t.option3}" leftIndex="false" topIndex="false"  matrixImage="" activeBgColor="pink" inactiveBgColor="transparent"   border="2px solid black" height="150px" width="150px"
                    visible="true" margin="landscape.0,portrait.-26px 0px 0px 0px"></lido-math-matrix>
                
            </lido-image>
                <lido-image z="10" visible="true" is-slice="true" src="https://wallpapers.com/images/featured/blank-white-7sn5o1woonmklx1h.jpg" tab-index="4" type="drag" id="drag4" value="${t.option4}" height="100px" width="auto" onEntry="this.display='flex'; this.align-items='center'; this.justify-content='center';" bg-color="white">
                    <lido-math-matrix id="matrix4" clickable="false" rows="${t.row4}" cols="${t.col4}"  defualtFill="${t.option4}" leftIndex="false" topIndex="false"  matrixImage="" activeBgColor="pink" inactiveBgColor="transparent"   border="2px solid black" height="150px" width="150px"
                    visible="true" margin="landscape.0,portrait.-26px 0px 0px 0px"></lido-math-matrix>
                </lido-image>
            
                <lido-image z="10" visible="true" is-slice="true" src="https://wallpapers.com/images/featured/blank-white-7sn5o1woonmklx1h.jpg" tab-index="5" type="drag" id="drag5" value="${t.option5}" height="100px" width="auto" onEntry="this.display='flex'; this.align-items='center'; this.justify-content='center';" bg-color="white">
                    <lido-math-matrix id="matrix5" clickable="false" rows="${t.row5}" cols="${t.col5}"  defualtFill="${t.option5}" leftIndex="false" topIndex="false"  matrixImage="" activeBgColor="pink" inactiveBgColor="transparent"   border="2px solid black" height="150px" width="150px"
                    visible="true" margin="landscape.0,portrait.-26px 0px 0px 0px"></lido-math-matrix>
                </lido-image>
                </lido-cell>
            </lido-image>
            
            <lido-image layout="col" is-slice="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/matchBox/linematching_building2.png" visible="true" height="100%" width="landscape.30%,portrait.40%"  onEntry="this.display='grid';  this.align-items='center';this.justify-content='center';this.gap='26px';">
                <lido-cell layout="col" visible="true" margin="0px 18px 0px -18px" bg-color="transparent" height="89%" width="100%" onEntry="this.display='flex'; align-items='center'; justify-content='space-around';">
                <lido-image z="10" visible="true" is-slice="true" src="https://wallpapers.com/images/featured/blank-white-7sn5o1woonmklx1h.jpg" tab-index="11" type="drop" id="drop1" value="6" height="100px" width="auto" onEntry="this.display='flex'; this.align-items='center'; this.justify-content='center';" bg-color="white">
                    <lido-math-matrix id="matrix11" clickable="false" rows="3" cols="2"  defualtFill="6" leftIndex="false" topIndex="false"  matrixImage="" activeBgColor="palegreen" inactiveBgColor="transparent"   border="2px solid black" height="150px" width="150px"
                    visible="true" margin="landscape.0,portrait.-26px 0px 0px 0px"></lido-math-matrix>
                </lido-image>
            
                <lido-image z="10" visible="true" is-slice="true" src="https://wallpapers.com/images/featured/blank-white-7sn5o1woonmklx1h.jpg" tab-index="12" type="drop" id="drop2" value="8" height="100px" width="auto" onEntry="this.display='flex'; this.align-items='center'; this.justify-content='center';" bg-color="white">
                    <lido-math-matrix id="matrix12" clickable="false" rows="4" cols="2"  defualtFill="8" leftIndex="false" topIndex="false"  matrixImage="" activeBgColor="palegreen" inactiveBgColor="transparent"   border="2px solid black" height="150px" width="150px"
                    visible="true" margin="landscape.0,portrait.-26px 0px 0px 0px"></lido-math-matrix>
                </lido-image>
            
                <lido-image z="10" visible="true" is-slice="true" src="https://wallpapers.com/images/featured/blank-white-7sn5o1woonmklx1h.jpg" tab-index="13" type="drop" id="drop3" value="5" height="100px" width="auto" onEntry="this.display='flex'; this.align-items='center'; this.justify-content='center';" bg-color="white">
                    <lido-math-matrix id="matrix13" clickable="false" rows="5" cols="1"  defualtFill="5" leftIndex="false" topIndex="false"  matrixImage="" activeBgColor="palegreen" inactiveBgColor="transparent"   border="2px solid black" height="150px" width="150px"
                    visible="true" margin="landscape.0,portrait.-26px 0px 0px 0px"></lido-math-matrix>
                
            </lido-image>
                <lido-image z="10" visible="true" is-slice="true" src="https://wallpapers.com/images/featured/blank-white-7sn5o1woonmklx1h.jpg" tab-index="14" type="drop" id="drop4" value="4" height="100px" width="auto" onEntry="this.display='flex'; this.align-items='center'; this.justify-content='center';" bg-color="white">
                    <lido-math-matrix id="matrix14" clickable="false" rows="2" cols="2"  defualtFill="4" leftIndex="false" topIndex="false"  matrixImage="" activeBgColor="palegreen" inactiveBgColor="transparent"   border="2px solid black" height="150px" width="150px"
                    visible="true" margin="landscape.0,portrait.-26px 0px 0px 0px"></lido-math-matrix>
                </lido-image>
            
                <lido-image z="10" visible="true" is-slice="true" src="https://wallpapers.com/images/featured/blank-white-7sn5o1woonmklx1h.jpg" tab-index="15" type="drop" id="drop5" value="1" height="100px" width="auto" onEntry="this.display='flex'; this.align-items='center'; this.justify-content='center';" bg-color="white">
                    <lido-math-matrix id="matrix15" clickable="false" rows="1" cols="1"  defualtFill="1" leftIndex="false" topIndex="false"  matrixImage="" activeBgColor="palegreen" inactiveBgColor="transparent"   border="2px solid black" height="150px" width="150px"
                    visible="true" margin="landscape.0,portrait.-26px 0px 0px 0px"></lido-math-matrix>
                </lido-image>
                </lido-cell>
            </lido-image>
        </lido-cell>
    </lido-container>
    </main>
   `}var i,a,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ans1: '6',
    ans2: '8',
    ans3: '5',
    ans4: '4',
    ans5: '1',
    option1: '6',
    option2: '4',
    option3: '5',
    option4: '1',
    option5: '8',
    row1: '3',
    col1: '2',
    row2: '2',
    col2: '2',
    row3: '5',
    col3: '1',
    row4: '1',
    col4: '1',
    row5: '4',
    col5: '2'
  },
  render: args => {
    const xml = getContainerXml(args);
    return html\`<lido-home .xmlData="\${xml}"></lido-home>\`;
  }
}`,...(l=(a=e.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const c=["Blanks"];export{e as Blanks,c as __namedExportsOrder,d as default};
