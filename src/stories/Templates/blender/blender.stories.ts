import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
const meta: Meta = {
  title: 'Templates/blender',
  argTypes: {
    number: { control: 'text' },
    isAllowOnlyCorrect: { control: 'boolean' },
  },
};

export default meta;
export const OrderTractor: StoryObj = {
  args: {
    number: '211',
    isAllowOnlyCorrect: 'true',
  },

  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};
function buildObjectiveFromNumber(num) {
  num = parseInt(num);

  const hundreds = Math.floor(num / 100);
  const tens = Math.floor((num % 100) / 10);
  const ones = num % 10;

  const build = (count, value) => {
    if (count === 0) return "";
    let s = "";
    for (let i = 0; i < count; i++) {
      s += value;
      if (i < count - 1) s += "|";
    }
    return `(${s})`;
  };

  const hStr = build(hundreds, "100");
  const tStr = build(tens, "10");
  const oStr = build(ones, "1");

  const objective = [hStr, tStr, oStr].filter(s => s !== "").join(",");

  return {
    objective,   // same as before
  };
}

function getContainerXml(args) {
    const { objective } = buildObjectiveFromNumber(args.number);

  return `
    <main>
        <lido-container id="lido-container" visible="true" objective="${objective}" onCorrect="lido-avatar.avatarAnimate='Success'; sentenceText.speak='true'; this.sleep='2000';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" onEntry="sentenceText.speak='true';" is-continue-on-correct="true" bg-color="transparent" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/background-images/Blender.png" drop-action="infinite-drop" is-allow-only-correct="${args.isAllowOnlyCorrect}">
 <!-- Chimple Avatar -->
	<lido-cell layout="pos" id="pos1" disable-edit="true" value="pos2" height="landscape.448px,portrait.402px" width="landscape.350px,portrait.398px" x="landscape.1332px, portrait.-8%" y="landscape.547px, portrait.1%" aria-hidden="true" z="0" bg-color="transparent" visible="true" onEntry="">
			<lido-avatar id="lido-avatar" disable-edit="true" visible="true" height="100%" width="100%"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" alt-text="{chimpleCharacterRive}">
			</lido-avatar>
	</lido-cell>
	<lido-cell layout="pos" bg-color="transparent" visible="true" height="landscape.5px,portrait.70%" width="landscape.7px,portrait.90%" x="landscape.745px, portrait.44%" y="landscape.65px, portrait.8%" >
	    <lido-text visible="true"  value="${args.number}" string="${args.number}" font-family="'Baloo Bhai 2'" font-color="#182A4F" font-size="52px" bg-color="#FFE99B" width="147px" onEntry="this.fontWeight='800';this.border='5px solid #FFC805';this.border-radius='10px';" border-image=""></lido-text>
	</lido-cell>
	<lido-cell layout="row" bg-color="transparent" visible="true" height="landscape.60%,portrait.1120px" width="landscape.90%,portrait.900px" gap="1px" margin="landscape.86px 0px 0px 0px,portrait.258px 0px 0px 0px" padding="0px">
			<!-- Hundreds Place Value -->
		<lido-cell layout="col" bg-color="transparent" visible="true" height="landscape.506.25px,portrait.1051.8px" width="landscape.720px,portrait.810px" padding="0px">
			<lido-cell layout="landscape.row,portrait.col" bg-color="#5D44BD" visible="true" height="landscape.85px,portrait.261px" width="landscape.704px,portrait.269px"  margin="landscape.71px 0px 0px 0px,portrait.0">
				<lido-text visible="true"  value="Hundreds" string="Hundreds" font-family="'Baloo Bhai 2'" font-color="white" font-size="52px" onInCorrect="" onEntry="this.fontWeight='800';" border-image="">
			    </lido-text>
			    <lido-text id="hundreds" height="70px" width="108px" visible="true" value="000" string="000" font-family="'Baloo Bhai 2'" font-color="#182A4F" border-radius="21px" bg-color="white" font-size="52px" onInCorrect="" onEntry="this.fontWeight='800';" border-image="">
			    </lido-text>
			</lido-cell>
			<lido-cell id="hundredsDrop" value="100" dropAttr="landscape.stackcascade,portrait.verticalstack" is-allow-only-one-drop="false" type="drop" tab-index="1" layout="row" bg-color="white" visible="true" height="landscape.359px,portrait.752px" width="landscape.698px,portrait.290px" onEntry="this.justifyContent='flex-start';">
			</lido-cell>
		</lido-cell>
		<!-- Tens Place Value -->
		<lido-cell layout="col" bg-color="transparent" visible="true" height="landscape.506.25px,portrait.1051px" width="landscape.432px,portrait.810px" padding="0px">
		    <lido-cell layout="landscape.row,portrait.col" bg-color="#5D44BD" visible="true" height="landscape.85px,portrait.261px" width="landscape.426px,portrait.269px"  margin="landscape.71px 0px 0px 0px,portrait.0">
			    <lido-text visible="true"  value="Tens" string="Tens" font-family="'Baloo Bhai 2'" font-color="white" font-size="52px" onInCorrect=""  onEntry="this.fontWeight='800';" border-image="">
			    </lido-text>
			    <lido-text id="tens" height="70px" width="77px" visible="true"  value="00" string="00" font-family="'Baloo Bhai 2'" font-color="#182A4F" border-radius="21px" bg-color="white" font-size="52px" onInCorrect="" onEntry="this.fontWeight='800';" border-image="">
			    </lido-text>
			</lido-cell>
			<lido-cell id="tensDrop" value="10" dropAttr="landscape.stackcascade,portrait.verticalstack" type="drop" is-allow-only-one-drop="false" tab-index="2" layout="row" bg-color="white" visible="true" height="landscape.357px,portrait.752px" width="landscape.414px,portrait.290px" onEntry="this.justifyContent='flex-start';" ></lido-cell>
		</lido-cell>
		<!-- Units Place Value -->
		<lido-cell layout="col" bg-color="transparent" visible="true" height="landscape.506.25px,portrait.1051px" width="landscape.331px,portrait.810" padding="0px">
			<lido-cell layout="landscape.row,portrait.col" bg-color="#5D44BD" visible="true" height="landscape.85px,portrait.261px" width="landscape.310px,portrait.269px"  margin="landscape.71px 0px 0px 0px,portrait.0">
			    <lido-text visible="true"  value="Units" string="Units" font-family="'Baloo Bhai 2'" font-color="white" font-size="52px"  onInCorrect="" onEntry="this.fontWeight='800';" border-image="">
			    </lido-text>
			    <lido-text id="units" height="70px" width="55px" visible="true"  value="0" string="0" font-family="'Baloo Bhai 2'" font-color="#182A4F" border-radius="21px" bg-color="white" font-size="52px" onInCorrect="" onEntry="this.fontWeight='800';" border-image="">
			    </lido-text>
			</lido-cell>
			<lido-cell id="unitsDrop" value="1" dropAttr="landscape.stackcascade,portrait.verticalstack" type="drop" is-allow-only-one-drop="false" tab-index="3" layout="row" bg-color="white" visible="true" height="landscape.360px,portrait.752px" width="landscape.310px,portrait.290px" onEntry="this.justifyContent='flex-start';"></lido-cell>
		</lido-cell>
	</lido-cell>

	<lido-cell layout="row" bg-color="transparent" aria-hidden="true" visible="true" height="landscape.420px,portrait.30%" width="landscape.1451px,portrait.90%"  onEntry="this.z-index='1';">
		<lido-math-matrix id="hundredsDrag" value="100" tab-index="11" type="drag" rows="10" cols="10" defualtFill="100" leftIndex="false" topIndex="false" clickable="false" activeBgColor="#5D44BD" deactiveBgColor="#5D44BD" border="2px solid #4A3697" height="288px" width="220px" visible="true"></lido-math-matrix>
		<lido-math-matrix  id="tensDrag" value="10" type="drag" tab-index="12" rows="10" cols="1"  defualtFill="10" leftIndex="false" topIndex="false" clickable="false" activeBgColor="#F57139" deactiveBgColor="#F57139" border="2px solid #F34D08" height="288px" width="300px" visible="true"></lido-math-matrix>
		<lido-math-matrix id="unitsDrag" value="1" tab-index="13" type="drag" rows="1" cols="1"  defualtFill="100" leftIndex="false" topIndex="false" clickable="false" activeBgColor="#F57139" deactiveBgColor="#F57139" border="2px solid #F34D08" height="288px" width="80px" visible="true"></lido-math-matrix> 
	  </lido-cell>		
	
</lido-container>
    </main>
  `;
}
