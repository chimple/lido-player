import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
type Rocket = {
  backgroundImage: string;
};
const meta: Meta<Rocket> = {
  title: 'Templates/Rocket'
};
export default meta;
export const Rocket: StoryObj<Rocket> = {
  render: (args) => {
    const xml = getContainerXml(args);
    return html`<lido-home xml-data="${xml}" xmlData="${xml}"></lido-home>`;
  },
};
function getContainerXml(args: Rocket) {
  return `<main> 
  <lido-container id="lido-container" objective="h,i,t" tabIndex="1" isContinueOnCorrect="true" onCorrect="fullRrocket.animation='placeToLeft 2.5s linear'; this.sleep='2000';" showCheck="false" bgImage='https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/Background_Sky.png' visible="true" onEntry="this.overflowY='hidden'; this.overflowX='hidden'; this.background-color='transparent';">
	
	<!-- Chimple Avatar -->
		<lido-cell layout="pos" id="pos1" disableEdit="true" value="pos2" height="305px" width="227px" x="landscape.1274px, portrait.541px" y="landscape.-60px, portrait.250px" ariaHidden="true" z="1" bgColor="transparent" visible="true"  onEntry="this.animation='rightToPlace 2.5s linear';">
			<lido-avatar id="lido-avatar" disableEdit="true" visible="true"  height="462px"  width="356px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" altText="{chimpleCharacterRive}">
			</lido-avatar>
		</lido-cell>

		
			
		<lido-image id="board_bg_wordnote" tabIndex="2" onEntry="this.position='absolute';" y='landscape.-37%, portrait.-16%' disableEdit="true" visible="true"  src="https://media.githubusercontent.com/media/chimple/bahama/refs/heads/master/assets/games/rocket/textures/board_bg_wordnote.png">
		</lido-image>

		<!-- Hit image -->
		<lido-image id="board_bg_wordnote" tabIndex="2" height="170px" width="100%" onEntry="this.position='absolute';" y='landscape.40px, portrait.100px' x='landscape.-21%, portrait.-36%' disableEdit="true" visible="true"  src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/hit_img_1.png">
		</lido-image>

		<lido-text id="heading" tabIndex="3"  visible="true" string="HIT" font="'Baloo Bhai 2'" fontColor="#fafafa" font-size="landscape.9rem, portrait.10rem" bgColor="transparent" onEntry="  this.fontWeight='700'; this.position='absolute';" y='landscape.0%, portrait.2%' x='landscape.40%, portrait.35%'  >
		</lido-text>

			<lido-cell onEntry="this.position='absolute'; this.grid-gap='10px'; this.display='flex';"  y='landscape.33%, portrait.43%' x='landscape.28%, portrait.9%'  tabIndex="5" id="fullRrocket">

			<lido-image bgColor="transparent" height='landscape.200px, portrait.225px' id="rockethead_bg_wordnote" tabIndex="6" width='landscape.25%, portrait.30%' disableEdit="true" visible="true"  
						src="https://media.githubusercontent.com/media/chimple/bahama/refs/heads/master/assets/games/rocket/textures/rockethead_bg_wordnote.png" 
						margin="landscape.0px 0px 0px 0px, portrait.0" 
						>
			</lido-image>
			

	<lido-image value="h" string="h" onEntry="this.padding='0px'; this.margin-left='-21px';
    this.margin-top='24px';" bgColor="transparent" id="drop-image1" disableEdit="true" type='drop' tabIndex='7' visible="true"  
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/dropImag.svg" height="landscape.158px, portrait.180px" width="landscape.9%, portrait.11%" 
						margin="0">
				</lido-image>

			<lido-image value="i" string="i" onEntry="this.padding='0px';
    this.margin-top='24px';" tabIndex='8' bgColor="transparent" id="drop-image2" disableEdit="true" type='drop' visible="true"  
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/dropImag.svg" height="landscape.158px, portrait.180px" width="landscape.9%, portrait.11%"
						>
				</lido-image>

				<lido-image value="t" string="t" onEntry="this.padding='0px';
    this.margin-top='24px';" tabIndex='9' bgColor="transparent" id="drop-image3" disableEdit="true" type='drop' visible="true"  
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/dropImag.svg" height="landscape.158px, portrait.180px" width="landscape.9%, portrait.11%"
						>
				</lido-image>

				<!-- wings -->
				<lido-image onEntry="
						this.position='absolute';
						this.padding='0px';" height="225px" width="27%" y='landscape.-48%, portrait.-39%' x='landscape.40%, portrait.48%' tabIndex='10' bgColor="transparent" id="wings-image1" disableEdit="true" visible="true"  
						src="https://media.githubusercontent.com/media/chimple/bahama/refs/heads/master/assets/games/rocket/textures/rockethandle_bg_wordnote.png" 
						margin="0">
				</lido-image>

				<lido-image onEntry="this.position='absolute';
						this.padding='0px';" y='landscape.40%, portrait.40%' x='landscape.40%, portrait.48%' height="225px" width="27%" tabIndex='11' bgColor="transparent" id="wings-image2" disableEdit="true" visible="true"  
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/rockethandle_bg_wordnote%201.png" 
						margin="0">
				</lido-image>

					<!-- Rocket end image -->
					<lido-image height="landscape.210px, portrait.210px" width="landscape.10%, portrait.8%" onEntry="this.zIndex='9';" bgColor="transparent" id="rocket-end" 
					disableEdit="true" tabIndex='12' margin="landscape. 0px -5% 0px -28px, portrait.5px -5% 0px -15px "
							src="https://media.githubusercontent.com/media/chimple/bahama/refs/heads/master/assets/games/rocket/textures/rocketend_bg_wordnote.png"
							>
					</lido-image>
					
					<!-- Word note background -->
					<lido-image onEntry="this.padding='0px';" height='220px'
    width='25%' tabIndex='13' bgColor="transparent" disableEdit="true" id="fire_image1"
							src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/Fire.png"
							margin="0">
					</lido-image>	
			</lido-cell>
	
			<!-- First Row (Randomized) -->
			<lido-cell y='landscape.60%, portrait.81%' onEntry="this.position='absolute'; this.grid-gap='0px'; this.z-index='9px'; this.display='flex'; this.padding='10px'; this.flex-wrap='nowrap'; this.justify-content='center';" bgColor="transparent"  justifyContent="space-evenly" width="100%" tabIndex='14' id="first_alphabetRow">

				<lido-image bgColor="transparent" audio="" onTouch="" onEntry="this.padding='0px'; this.boxShadow='none !important';" id="K" visible='true' value="K" tabIndex="15" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/K.svg" 
						height="landscape.160px, portrait.185px" width="landscape.6%, portrait.8%"></lido-image>
				<lido-image bgColor="transparent" onEntry="this.padding='0px';" id="Q" value="Q"  tabIndex="16" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/Q.svg" 
						height="landscape.160px, portrait.185px" width="landscape.6%, portrait.8%"></lido-image>
				<lido-image bgColor="transparent" onEntry="this.padding='0px';" id="D" value="D"  tabIndex="17" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/D.svg" 
						height="landscape.160px, portrait.185px" width="landscape.6%, portrait.8%"></lido-image>
				<lido-image bgColor="transparent" onEntry="this.padding='0px';" id="X" value="X"  tabIndex="18" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/X.svg" 
						height="landscape.160px, portrait.185px" width="landscape.6%, portrait.8%"></lido-image>
				<lido-image bgColor="transparent" onEntry="this.padding='0px';" id="A" value="A"  tabIndex="19" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/A.svg" 
						height="landscape.160px, portrait.185px" width="landscape.6%, portrait.8%"></lido-image>
				<lido-image bgColor="transparent" onEntry="this.padding='0px';" id="P" value="P"  tabIndex="20" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/P.svg" 
						height="landscape.160px, portrait.185px" width="landscape.6%, portrait.8%"></lido-image>
				<lido-image bgColor="transparent" onEntry="this.padding='0px';" id="G" value="G"  tabIndex="21" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/G.svg" 
						height="landscape.160px, portrait.185px" width="landscape.6%, portrait.8%"></lido-image>
				<lido-image bgColor="transparent" onEntry="this.padding='0px';" id="L" value="L"  tabIndex="22" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/L.svg" 
						height="landscape.160px, portrait.185px" width="landscape.6%, portrait.8%"></lido-image>
				<lido-image bgColor="transparent" onEntry="this.padding='0px';" id="W" value="W"  tabIndex="23" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/W.svg" 
						height="landscape.160px, portrait.185px" width="landscape.6%, portrait.8%"></lido-image>
				<lido-image bgColor="transparent" onEntry="this.padding='0px';" id="i" value="i"   tabIndex="24" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/I.svg" 
						height="landscape.160px, portrait.185px" width="landscape.6%, portrait.8%"></lido-image>
				<lido-image bgColor="transparent" onEntry="this.padding='0px';" id="F" value="F"  tabIndex="25" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/F.svg" 
						height="landscape.160px, portrait.185px" width="landscape.6%, portrait.8%"></lido-image>
				<lido-image bgColor="transparent" onEntry="this.padding='0px';" id="M" value="M" tabIndex="26" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/M.svg" 
						height="landscape.160px, portrait.185px" width="landscape.6%, portrait.8%">
					</lido-image>

				<lido-image bgColor="transparent" onEntry="this.padding='0px';" id="E"  value="E" tabIndex="27" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/E.svg" 
						height="landscape.160px, portrait.185px" width="landscape.6%, portrait.8%"></lido-image>
			</lido-cell>

			<!-- Second Row (Randomized) -->
			<lido-cell y='landscape.78%, portrait.89%' onEntry="this.position='absolute'; this.grid-gap='0px'; this.z-index='9px'; this.display='flex'; this.padding='10px'; this.flex-wrap='nowrap'; this.justify-content='center';" bgColor="transparent"  justifyContent="space-evenly" width="100%" tabIndex="28">
			
				<lido-image bgColor="transparent" onEntry="this.padding='0px';" id="Z" value="Z"  tabIndex="29" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/Z.svg" 
						height="landscape.160px, portrait.185px" width="landscape.6%, portrait.8%"></lido-image>
				<lido-image bgColor="transparent" onEntry="this.padding='0px';" id="J" value="J" tabIndex="30" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/J.svg" 
						height="landscape.160px, portrait.185px" width="landscape.6%, portrait.8%"></lido-image>
				<lido-image onEntry="this.padding='0px';" id="O" bgColor="transparent" value="O" dropAttr="infinite-drop" tabIndex="31" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/O.svg" 
						height="landscape.160px, portrait.185px" width="landscape.6%, portrait.8%"></lido-image>
				<lido-image bgColor="transparent" onEntry="this.padding='0px';" id="B" value="B"  tabIndex="32" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/B.svg" 
						height="landscape.160px, portrait.185px" width="landscape.6%, portrait.8%"></lido-image>
				<lido-image bgColor="transparent" onEntry="this.padding='0px';" id="N" value="N" tabIndex="33" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/N.svg" 
						height="landscape.160px, portrait.185px" width="landscape.6%, portrait.8%"></lido-image>
				<lido-image bgColor="transparent" onEntry="this.padding='0px';" id="h" value="h" tabIndex="34" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/H.svg" 
						height="landscape.160px, portrait.185px" width="landscape.6%, portrait.8%"></lido-image>
				<lido-image bgColor="transparent" onEntry="this.padding='0px';" id="t" value="t" tabIndex="35" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/T.svg" 
						height="landscape.160px, portrait.185px" width="landscape.6%, portrait.8%"></lido-image>
				<lido-image bgColor="transparent" onEntry="this.padding='0px';" id="S" value="S" tabIndex="36" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/S.svg" 
						height="landscape.160px, portrait.185px" width="landscape.6%, portrait.8%"></lido-image>
				<lido-image bgColor="transparent" onEntry="this.padding='0px';" id="V" value="V" tabIndex="37" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/V.svg" 
						height="landscape.160px, portrait.185px" width="landscape.6%, portrait.8%"></lido-image>
				<lido-image bgColor="transparent" onEntry="this.padding='0px';" id="R" value="R" tabIndex="38" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/R.svg" 
						height="landscape.160px, portrait.185px" width="landscape.6%, portrait.8%"></lido-image>
				<lido-image bgColor="transparent" onEntry="this.padding='0px';" id="C" value="C" tabIndex="39" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/C.svg" 
						height="landscape.160px, portrait.185px" width="landscape.6%, portrait.8%"></lido-image>
				<lido-image bgColor="transparent" onEntry="this.padding='0px';" id="Y" value="Y" tabIndex="40" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/Y.svg" 
						height="landscape.160px, portrait.185px" width="landscape.6%, portrait.8%"></lido-image>
				<lido-image bgColor="transparent" onEntry="this.padding='0px';" id="U" value="U" tabIndex="41" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/U.svg" 
						height="landscape.160px, portrait.185px" width="landscape.6%, portrait.8%"></lido-image>
			</lido-cell>
			
	</lido-container>
</main>`;
}



