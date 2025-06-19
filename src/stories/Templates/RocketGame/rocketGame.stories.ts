import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

type RocketArgs = {
  objective: string;
  hitBackgroundImage: string;
  hitText: string;
  dropImage1: string;
  dropImage2: string;
  dropImage3: string;
  backgroundImage: string;
};

const meta: Meta<RocketArgs> = {
  title: 'Templates/Rocket',
  argTypes: {
    objective: {
      control: 'text',
      description: 'Comma-separated letters to match (e.g. "h,i,t")',
      defaultValue: 'h,i,t'
    },
    hitBackgroundImage: {
      control: 'text',
      description: 'Background image for HIT text',
      defaultValue: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/hit_img_1.png'
    },
    hitText: {
      control: 'text',
      description: 'The word to display (e.g. "HIT")',
      defaultValue: 'HIT'
    },
    dropImage1: {
      control: 'text',
      description: 'Drop slot for first letter',
      defaultValue: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/dropImag.svg'
    },
    dropImage2: {
      control: 'text',
      description: 'Drop slot for second letter',
      defaultValue: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/dropImag.svg'
    },
    dropImage3: {
      control: 'text',
      description: 'Drop slot for third letter',
      defaultValue: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/dropImag.svg'
    },
    backgroundImage: {
      control: 'text',
      description: 'Main background image',
      defaultValue: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/Background_Sky.png'
    }
  },
  args: {
    objective: 'h,i,t',
    hitBackgroundImage: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/hit_img_1.png',
    hitText: 'HIT',
    dropImage1: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/dropImag.svg',
    dropImage2: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/dropImag.svg',
    dropImage3: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/dropImag.svg',
    backgroundImage: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/Background_Sky.png'
  }
};

export default meta;

export const Rocket: StoryObj<RocketArgs> = {
  render: (args) => {
    const xml = getContainerXml(args);
    return html`<lido-home xml-data="${xml}" xmlData="${xml}"></lido-home>`;
  }
};

function getContainerXml(args: RocketArgs) {
  // Extract letters from objective
  const [letter1, letter2, letter3] = args.objective.split(',').map(l => l.trim());
  
  return `<main> 
  <lido-container id="lido-container" objective="${args.objective}" tabIndex="1" isContinueOnCorrect="true" onCorrect="fullRrocket.animation='placeToLeft 2.5s linear'; this.sleep='2000';" showCheck="false" bgImage="${args.backgroundImage}" visible="true" onEntry="this.overflowY='hidden'; this.overflowX='hidden'; this.background-color='transparent';">
	
	<!-- Chimple Avatar -->
	<lido-cell layout="pos" id="pos1" disableEdit="true" value="pos2" height="305px" width="227px" x="landscape.1274px, portrait.541px" y="landscape.-60px, portrait.250px" ariaHidden="true" z="1" bgColor="transparent" visible="true" onEntry="this.animation='rightToPlace 2.5s linear';">
		<lido-avatar id="lido-avatar" disableEdit="true" visible="true" height="462px" width="356px" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" altText="{chimpleCharacterRive}">
		</lido-avatar>
	</lido-cell>


    <lido-cell layout="pos" value="pos3" visible="true" height="landscape.305px, portrait.auto " width="landscape.100%, portrait.100%;" y='landscape.-35%, portrait.-12%' x='landscape.23%, portrait.0%' onEntry="this.background-color='transparent'">
				<lido-image id="board_bg_wordnote" tabIndex="2" disableEdit="true" visible="true"  src="https://media.githubusercontent.com/media/chimple/bahama/refs/heads/master/assets/games/rocket/textures/board_bg_wordnote.png">
				</lido-image>

				<!-- Hit image -->
				<lido-image id="board_bg_wordnote" tabIndex="2" height="170px" width="100%" onEntry="" y='landscape.124%, portrait.360px' x='landscape.-42%, portrait.-36%' disableEdit="true" visible="true"  src="${args.hitBackgroundImage}">
				</lido-image>

				<lido-text id="heading" tabIndex="3"  visible="true" string="${args.hitText}" font="'Baloo Bhai 2'" fontColor="#fafafa" font-size="landscape.9rem, portrait.10rem" bgColor="transparent" onEntry="this.fontWeight='700';" y='landscape.100%, portrait.18rem' x='landscape.23%, portrait.35%'  >
				</lido-text>
		</lido-cell>

	<lido-cell onEntry="this.position='absolute'; this.grid-gap='10px'; this.display='flex';" y='landscape.33%, portrait.43%' x='landscape.28%, portrait.9%' tabIndex="5" id="fullRrocket">

		<lido-image bgColor="transparent" height='landscape.200px, portrait.225px' id="rockethead_bg_wordnote" tabIndex="6" width='landscape.25%, portrait.30%' disableEdit="true" visible="true"  
					src="https://media.githubusercontent.com/media/chimple/bahama/refs/heads/master/assets/games/rocket/textures/rockethead_bg_wordnote.png" 
					margin="landscape.0px 0px 0px 0px, portrait.0">
		</lido-image>

		<lido-image value="${letter1}" string="${letter1}" onEntry="this.padding='0px'; this.margin-left='-21px'; this.margin-top='24px';" bgColor="transparent" id="drop-image1" disableEdit="true" type='drop' tabIndex='7' visible="true"  
					src="${args.dropImage1}" height="landscape.158px, portrait.180px" width="landscape.9%, portrait.11%" margin="0">
		</lido-image>

		<lido-image value="${letter2}" string="${letter2}" onEntry="this.padding='0px'; this.margin-top='24px';" tabIndex='8' bgColor="transparent" id="drop-image2" disableEdit="true" type='drop' visible="true"  
					src="${args.dropImage2}" height="landscape.158px, portrait.180px" width="landscape.9%, portrait.11%">
		</lido-image>

		<lido-image value="${letter3}" string="${letter3}" onEntry="this.padding='0px'; this.margin-top='24px';" tabIndex='9' bgColor="transparent" id="drop-image3" disableEdit="true" type='drop' visible="true"  
					src="${args.dropImage3}" height="landscape.158px, portrait.180px" width="landscape.9%, portrait.11%">
		</lido-image>

		<!-- wings -->
		<lido-image onEntry="this.position='absolute'; this.padding='0px';" height="225px" width="27%" y='landscape.-48%, portrait.-39%' x='landscape.40%, portrait.48%' tabIndex='10' bgColor="transparent" id="wings-image1" disableEdit="true" visible="true"  
					src="https://media.githubusercontent.com/media/chimple/bahama/refs/heads/master/assets/games/rocket/textures/rockethandle_bg_wordnote.png" margin="0">
		</lido-image>

		<lido-image onEntry="this.position='absolute'; this.padding='0px';" y='landscape.40%, portrait.40%' x='landscape.40%, portrait.48%' height="225px" width="27%" tabIndex='11' bgColor="transparent" id="wings-image2" disableEdit="true" visible="true"  
					src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/rockethandle_bg_wordnote%201.png" margin="0">
		</lido-image>

		<!-- Rocket end image -->
		<lido-image height="landscape.210px, portrait.210px" width="landscape.10%, portrait.8%" onEntry="this.zIndex='9';" bgColor="transparent" id="rocket-end" 
		disableEdit="true" tabIndex='12' margin="landscape. 0px -5% 0px -28px, portrait.5px -5% 0px -15px "
				src="https://media.githubusercontent.com/media/chimple/bahama/refs/heads/master/assets/games/rocket/textures/rocketend_bg_wordnote.png">
		</lido-image>
		
		<!-- Word note background -->
		<lido-image onEntry="this.padding='0px';" height='220px' width='25%' tabIndex='13' bgColor="transparent" disableEdit="true" id="fire_image1"
				src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/Fire.png" margin="0">
		</lido-image>	
	</lido-cell>

	<!-- First Row (Randomized) -->
			<lido-cell disableEdit="true" layout="row" ariaHidden="true" visible="true" height='landscape.130px, portrait.0px' margin="landscape.35% 0px 0px 0px, portrait.145% 0px 0px 0px" onEntry="this.z-index='9px'; this.justify-content='center'; this.padding='10px';" bgColor="transparent"  justifyContent="space-evenly" width="100%" tabIndex='14' id="first_alphabetRow">

				<lido-image bgColor="transparent" audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/sounds/k.mp3" onTouch="this.speak='true';" onEntry="this.padding='0px'; this.boxShadow='none !important';" id="k" visible='true' value="k" tabIndex="15" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/K.svg" 
						height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%">\
					</lido-image>
				<lido-image bgColor="transparent" audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/sounds/q.mp3" onTouch="this.speak='true';" onEntry="this.padding='0px';" id="q" value="q"  tabIndex="16" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/Q.svg" 
						height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%"></lido-image>
				<lido-image bgColor="transparent" audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/sounds/d.mp3" onTouch="this.speak='true';" onEntry="this.padding='0px';" id="d" value="d"  tabIndex="17" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/D.svg" 
						height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%"></lido-image>
				<lido-image bgColor="transparent" audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/sounds/x.mp3" onTouch="this.speak='true';" onEntry="this.padding='0px';" id="x" value="x"  tabIndex="18" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/X.svg" 
						height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%"></lido-image>
				<lido-image bgColor="transparent" audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/sounds/a.mp3" onTouch="this.speak='true';" onEntry="this.padding='0px';" id="a" value="a"  tabIndex="19" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/A.svg" 
						height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%"></lido-image>
				<lido-image bgColor="transparent" audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/sounds/p.mp3" onTouch="this.speak='true';" onEntry="this.padding='0px';" id="p" value="p"  tabIndex="20" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/P.svg" 
						height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%"></lido-image>
				<lido-image bgColor="transparent" audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/sounds/g.mp3" onTouch="this.speak='true';" onEntry="this.padding='0px';" id="g" value="g"  tabIndex="21" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/G.svg" 
						height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%"></lido-image>
				<lido-image bgColor="transparent" audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/sounds/l.mp3" onTouch="this.speak='true';" onEntry="this.padding='0px';" id="l" value="l"  tabIndex="22" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/L.svg" 
						height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%"></lido-image>
				<lido-image bgColor="transparent" audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/sounds/w.mp3" onTouch="this.speak='true';" onEntry="this.padding='0px';" id="w" value="w"  tabIndex="23" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/W.svg" 
						height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%"></lido-image>
				<lido-image bgColor="transparent" audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/sounds/i.mp3" onTouch="this.speak='true';" onEntry="this.padding='0px';" id="i" value="i"   tabIndex="24" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/I.svg" 
						height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%"></lido-image>
				<lido-image bgColor="transparent" audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/sounds/f.mp3" onTouch="this.speak='true';" onEntry="this.padding='0px';" id="f" value="f"  tabIndex="25" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/F.svg" 
						height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%"></lido-image>
				<lido-image bgColor="transparent" audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/sounds/m.mp3" onTouch="this.speak='true';" onEntry="this.padding='0px';" id="m" value="m" tabIndex="26" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/M.svg" 
						height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%">
					</lido-image>

				<lido-image bgColor="transparent" audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/sounds/e.mp3" onTouch="this.speak='true';" onEntry="this.padding='0px';" id="e"  value="e" tabIndex="27" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/E.svg" 
						height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%"></lido-image>
			</lido-cell>

			<!-- Second Row (Randomized) -->
			<lido-cell layout="row" ariaHidden="true" visible="true" onEntry="this.z-index='9px'; this.padding='10px'; this.justify-content='center';" bgColor="transparent"  justifyContent="space-evenly" width="100%" tabIndex="28">
			
				<lido-image bgColor="transparent" audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/sounds/z.mp3" onTouch="this.speak='true';" onEntry="this.padding='0px';" id="z" value="z"  tabIndex="29" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/Z.svg" 
						height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%"></lido-image>
				<lido-image bgColor="transparent" audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/sounds/j.mp3" onTouch="this.speak='true';" onEntry="this.padding='0px';" id="j" value="j" tabIndex="30" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/J.svg" 
						height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%"></lido-image>
				<lido-image audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/sounds/o.mp3" onTouch="this.speak='true';" onEntry="this.padding='0px';" id="o" bgColor="transparent" value="o" dropAttr="infinite-drop" tabIndex="31" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/O.svg" 
						height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%"></lido-image>
				<lido-image audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/sounds/b.mp3" onTouch="this.speak='true';" bgColor="transparent" onEntry="this.padding='0px';" id="b" value="b"  tabIndex="32" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/B.svg" 
						height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%"></lido-image>
				<lido-image audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/sounds/n.mp3" onTouch="this.speak='true';" bgColor="transparent" onEntry="this.padding='0px';" id="n" value="n" tabIndex="33" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/N.svg" 
						height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%"></lido-image>
				<lido-image audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/sounds/h.mp3" onTouch="this.speak='true';" bgColor="transparent" onEntry="this.padding='0px';" id="h" value="h" tabIndex="34" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/H.svg" 
						height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%"></lido-image>
				<lido-image audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/sounds/t.mp3" onTouch="this.speak='true';" bgColor="transparent" onEntry="this.padding='0px';" id="t" value="t" tabIndex="35" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/T.svg" 
						height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%"></lido-image>
				<lido-image audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/sounds/s.mp3" onTouch="this.speak='true';" bgColor="transparent" onEntry="this.padding='0px';" id="s" value="s" tabIndex="36" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/S.svg" 
						height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%"></lido-image>
				<lido-image audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/sounds/v.mp3" onTouch="this.speak='true';" bgColor="transparent" onEntry="this.padding='0px';" id="v" value="v" tabIndex="37" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/V.svg" 
						height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%"></lido-image>
				<lido-image audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/sounds/r.mp3" onTouch="this.speak='true';" bgColor="transparent" onEntry="this.padding='0px';" id="r" value="r" tabIndex="38" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/R.svg" 
						height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%"></lido-image>
				<lido-image audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/sounds/c.mp3" onTouch="this.speak='true';" bgColor="transparent" onEntry="this.padding='0px';" id="c" value="c" tabIndex="39" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/C.svg" 
						height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%"></lido-image>
				<lido-image audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/sounds/y.mp3" onTouch="this.speak='true';" bgColor="transparent" onEntry="this.padding='0px';" id="y" value="y" tabIndex="40" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/Y.svg" 
						height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%"></lido-image>
				<lido-image audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/sounds/u.mp3" onTouch="this.speak='true';" bgColor="transparent" onEntry="this.padding='0px';" id="u" value="u" tabIndex="41" dropAttr="infinite-drop" type="drag" disableEdit="true" 
						src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/RocketAssets/Fullalphabet/U.svg" 
						height="landscape.160px, portrait.200px" width="landscape.6%, portrait.10%"></lido-image>
			</lido-cell>
	
  </lido-container>
</main>`;
}