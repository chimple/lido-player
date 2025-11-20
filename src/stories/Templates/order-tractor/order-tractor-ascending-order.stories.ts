import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
const meta: Meta = {
  title: 'Templates/order-tractor-ascending-order',
  argTypes: {
    option1: { control: 'text' },
    option2: { control: 'text' },
    option3: { control: 'text' },
    option4: { control: 'text' },
    option5: { control: 'text' },
    answer1: { control: 'text' },
    answer2: { control: 'text' },
    answer3: { control: 'text' },
    answer4: { control: 'text' },
    answer5: { control: 'text' },
	isAllowOnlyCorrect: { control: 'boolean'},
  },
};

export default meta;
export const OrderTractorAscending: StoryObj = {
  args: {
    option1: '15', option2: '14', option3: '13', option4: '12', option5: '11',
    answer1: '11', answer2: '12', answer3: '13', answer4: '14', answer5: '15', isAllowOnlyCorrect: 'true',
  },

  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home .xmlData="${xml}"></lido-home>`;
  },
};
function getContainerXml(args) { 
  return `
    <main>
	<lido-container id="lido-container" is-allow-only-correct="${args.isAllowOnlyCorrect}" show-Check="false" is-Continue-On-Correct="true" after-Drop="false" objective="${[args.answer1, args.answer2, args.answer3, args.answer4, args.answer5].join(',')}" visible="true" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/Spring.png" custom-style="#drop1, #drop2,#drop3,#drop4,#drop5{border: none !important;}" onCorrect="answer.disableType='true';lido-avatar.avatarAnimate='Success'; this.sleep='2000'; lido-avatar.animation='placeToLeft 2.5s linear'; answer.animation='placeToLeft 2.5s linear'; truck.animation='placeToLeft 2.5s linear'; trainAudio.speak='true';" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" onEntry="">

				<!-- Chimple Avatar -->
		<lido-cell layout="pos" id="pos1" disableEdit="true" value="pos2" height="300px" width="300px" x="landscape.110px,portrait.10px" y="landscape.80px,portrait.230px" ariaHidden="true" bgColor="transparent" visible="true"  onEntry="this.animation='rightToPlace 2.5s linear';">
				<lido-avatar id="lido-avatar" disableEdit="true" visible="true"  height="100%"  width="100%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/temp2/chimplecharacter.riv" altText="{chimpleCharacterRive}">
				</lido-avatar>
		</lido-cell>

		<!-- truck -->
		<lido-cell visible="true" id="truck" layout="row" height="60%" width="landscape.100%,portrait.auto" margin="landscape.0,portrait.650px -44px -11px -146px" bg-color="transparent"  onEntry=" this.animation='rightToPlace 2.5s linear';" onCorrect="" >
			<lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/ordertractor_cart.png" width="landscape.220px,portrait.250px" padding="0px" margin="landscape.350px -81px 0px 34px,portrait.178px -44px -11px -87px"></lido-image>
			<lido-text id="trainAudio" visible="false" audio="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/train1.m4a" onEntry="this.speak='true';"></lido-text>

			<!-- 1  -->
			<lido-cell visible="true" layout="col" bg-color="transparent" padding="0" margin="landscape.90px -121px 0px -189px,portrait.80px 0px 0px 42px" >

				<lido-image visible="true" id="drop5" onCorrect="lido-avatar.avatarAnimate='Success'" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='1000';" tab-index="1" type="drop" value="${args.answer1}" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/box_answer_soundtrain_trans.png" margin="landscape.200px 0px -90px 0px,portrait.50px 0px 0px 0px" width="landscape.200px,portrait.160px" background="transparent"></lido-image>
				<lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain_upper.png" margin="landscape.-5px 0px 0px 0px,portrait.-70px 0px 0px 0px"  
		        width="landscape.200px,portrait.160px" background="transparent"></lido-image>
				<lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain_base%20(1).png" margin="landscape.-175px 0px -150px 0px,portrait.-140px 0px 0px 0px" width="landscape.200px,portrait.160px" background="transparent"></lido-image>
				<lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain.png" margin="landscape.-1px 16px 0px 0px,portrait.-120px 13px 0px 0px"  width="landscape.217px,portrait.170px" background="transparent"></lido-image>
			</lido-cell>

			<!-- 2  -->
			<lido-cell visible="true" layout="col" bg-color="transparent" margin="landscape.70px -110px 0px -174px,portrait.60px 0px 0px -25px" >

				<lido-image visible="true" id="drop4" onCorrect="lido-avatar.avatarAnimate='Success'" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='1000';" tab-index="2" type="drop" value="${args.answer2}" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/box_answer_soundtrain_trans.png"  margin="landscape.200px 0px -90px 0px,portrait.50px 0px 0px 0px"
				width="landscape.200px,portrait.160px" background="transparent"></lido-image>
				<lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain_upper.png" margin="landscape.-5px 0px 0px 0px,portrait.-70px 0px 0px 0px"  
				width="landscape.200px,portrait.160px" background="transparent"></lido-image>
				<lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain_base%20(1).png" margin="landscape.-175px 0px 0px 0px,portrait.-140px 0px 0px 0px" width="landscape.200px,portrait.160px" background="transparent"></lido-image>
				<lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain_base%20(1).png" margin="landscape.-175px 0px -150px 0px,portrait.-140px 0px 0px 0px" width="landscape.200px,portrait.160px" background="transparent"></lido-image>
				<lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain.png" margin="landscape.-2px 18px 0px 0px,portrait.-120px 12px 0px 0px"  width="landscape.217px,portrait.170px" background="transparent"></lido-image>
			</lido-cell>

				<!-- 3  -->
			<lido-cell visible="true" layout="col" bg-color="transparent" margin=" landscape.50px -101px 0px -201px,portrait.40px 0px 0px -40px" >

				<lido-image visible="true" id="drop3" onCorrect="lido-avatar.avatarAnimate='Success'" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='1000';" tab-index="3" type="drop" value="${args.answer3}" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/box_answer_soundtrain_trans.png" margin="landscape.200px 0px -90px 0px,portrait.50px 0px 0px 0px" width="landscape.200px,portrait.160px" background="transparent"></lido-image>
				<lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain_upper.png" margin="landscape.-5px 0px 0px 0px,portrait.-70px 0px 0px 0px"  
				width="landscape.200px,portrait.160px" background="transparent"></lido-image>
				<lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain_base%20(1).png" margin="landscape.-175px 0px 0px 0px,portrait.-140px 0px 0px 0px" width="landscape.200px,portrait.160px" background="transparent"></lido-image>
				<lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain_base%20(1).png" margin="landscape.-175px 0px 0px 0px,portrait.-140px 0px 0px 0px" width="landscape.200px,portrait.160px" background="transparent"></lido-image>
				<lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain_base%20(1).png" margin="landscape.-175px 0px -150px 0px,portrait.-140px 0px 0px 0px" width="landscape.200px,portrait.160px" background="transparent"></lido-image>
				<lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain.png" margin="landscape.-2px 17px 0px 0px,portrait.-120px 11px 0px 0px"  width="landscape.218px,portrait.170px" background="transparent"></lido-image>
			</lido-cell>

			<!-- 4  -->
			<lido-cell visible="true" layout="col" bg-color="transparent" margin="landscape.30px -165px 0px -199px ,portrait.20px -55px 0px -25px" padding="0px" >

				<lido-image visible="true" id="drop2" onCorrect="lido-avatar.avatarAnimate='Success'" oonInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='1000';" tab-index="4" type="drop" value="${args.answer4}" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/box_answer_soundtrain_trans.png" margin="landscape.200px 0px -90px 0px,portrait.50px 0px 0px 0px" width="landscape.200px,portrait.160px" background="transparent"></lido-image>
				<lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain_upper.png" margin="landscape.-5px 0px 0px 0px,portrait.-70px 0px 0px 0px"  width="landscape.200px,portrait.160px" background="transparent"></lido-image>
				<lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain_base%20(1).png" margin="landscape.-175px 0px 0px 0px,portrait.-140px 0px 0px 0px" width="landscape.200px,portrait.160px" background="transparent"></lido-image>
				<lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain_base%20(1).png" margin="landscape.-175px 0px 0px 0px,portrait.-140px 0px 0px 0px" width="landscape.200px,portrait.160px" background="transparent"></lido-image>
				<lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain_base%20(1).png" margin="landscape.-175px 0px 0px 0px,portrait.-140px 0px 0px 0px" width="landscape.200px,portrait.160px" background="transparent"></lido-image>
				<lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain_base%20(1).png" margin="landscape.-175px 0px -150px 0px,portrait.-140px 0px 0px 0px" width="landscape.200px,portrait.160px" background="transparent"></lido-image>
				<lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain.png" margin="landscape.-2px 17px 0px 0px,portrait.-120px 12px 0px 0px"  width="landscape.217px,portrait.170px" background="transparent"></lido-image>
			</lido-cell>

			<!-- 5  -->
			<lido-cell visible="true" layout="col" bg-color="transparent" margin="landscape.0px -56px 0px -132px,portrait.0px 10px 0px 30px"  >

				<lido-image visible="true" id="drop1" onCorrect="lido-avatar.avatarAnimate='Success'" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='1000';" tab-index="5" type="drop" value="${args.answer5}" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/box_answer_soundtrain_trans.png" margin="landscape.200px 0px -90px 0px,portrait.50px 0px 0px 0px" width="landscape.200px,portrait.160px" background="transparent"></lido-image>
				<lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain_upper.png" margin="landscape.-5px 0px 0px 0px,portrait.-70px 0px 0px 0px"  width="landscape.200px,portrait.160px" background="transparent"></lido-image>
				<lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain_base%20(1).png" margin="landscape.-175px 0px 0px 0px,portrait.-140px 0px 0px 0px" width="landscape.200px,portrait.160px" background="transparent"></lido-image>
				<lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain_base%20(1).png" margin="landscape.-175px 0px 0px 0px,portrait.-140px 0px 0px 0px" width="landscape.200px,portrait.160px" background="transparent"></lido-image>
				<lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain_base%20(1).png" margin="landscape.-175px 0px 0px 0px,portrait.-140px 0px 0px 0px" width="landscape.200px,portrait.160px" background="transparent"></lido-image>
				<lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain_base%20(1).png" margin="landscape.-175px 0px 0px 0px,portrait.-140px 0px 0px 0px" width="landscape.200px,portrait.160px" background="transparent"></lido-image>
				<lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain_base%20(1).png" margin="landscape.-175px 0px -150px 0px,portrait.-140px 0px 0px 0px" width="landscape.200px,portrait.160px" background="transparent"></lido-image>
				<lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/trolly_drop_soundtrain.png" margin="landscape.-1px 18px 0px 0px,portrait.-120px 12px 0px 0px"  width="landscape.217px,portrait.170px" background="transparent"></lido-image>
			</lido-cell>


		</lido-cell>
		

		<!-- answers -->
		<lido-cell visible="true" id="answer" delay-visible="2650" layout="row" height="40%" width="100%" bg-color="transparent" onEntry="this.alignItems='center';this.justify-content='space-around'"  >
			
				<lido-text id="drg1" onTouch="this.speak='true';" height="landscape.200px,portrait.160px" width="landscape.200px,portrait.160px" visible="true" font-family="'Baloo Bhai 2'" font-size="110px" string="${args.option1}" value="${args.option1}" tab-index="6" bg-Color="transparent" onEntry="this.fontWeight='1000';" fontColor="gold" type="drag" border-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/box_answer_soundtrain.png" ></lido-text>
			
				<lido-text id="drg2" onTouch="this.speak='true';" height="landscape.200px,portrait.160px" width="landscape.200px,portrait.160px" visible="true" font-family="'Baloo Bhai 2'" font-size="110px" string="${args.option2}" value="${args.option2}" tab-index="7" bg-Color="transparent" onEntry="  this.fontWeight='1000';" fontColor="gold" type="drag" border-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/box_answer_soundtrain.png" ></lido-text>

				<lido-text id="drg3"  onTouch="this.speak='true';" height="landscape.200px,portrait.160px" width="landscape.200px,portrait.160px" visible="true" font-family="'Baloo Bhai 2'" font-size="110px" string="${args.option3}" value="${args.option3}" tab-index="8" bg-Color="transparent" onEntry="  this.fontWeight='1000';" fontColor="gold" type="drag" border-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/box_answer_soundtrain.png" ></lido-text>

				<lido-text id="drg4"  onTouch="this.speak='true';" height="landscape.200px,portrait.160px" width="landscape.200px,portrait.160px" visible="true" font-family="'Baloo Bhai 2'" font-size="110px" string="${args.option4}" value="${args.option4}" tab-index="9" bg-Color="transparent" onEntry="  this.fontWeight='1000';" fontColor="gold" type="drag" border-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/box_answer_soundtrain.png" ></lido-text>
			
				<lido-text id="drg5"  onTouch="this.speak='true';" height="landscape.200px,portrait.160px" width="landscape.200px,portrait.160px" visible="true" font-family="'Baloo Bhai 2'" font-size="110px" string="${args.option5}" value="${args.option5}" tab-index="10" bg-Color="transparent" onEntry="  this.fontWeight='1000';" fontColor="gold" type="drag" border-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Ordered%20Tractor/box_answer_soundtrain.png" ></lido-text>
			
		</lido-cell>
		

	</lido-container>
    </main>
  `;
}
