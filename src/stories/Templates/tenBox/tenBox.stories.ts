import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
    title: 'Templates/TenBox',
    argTypes: {
		num1: { control: 'number' },
		num2: { control: 'number' },
		num3: { control: 'number' },
		operator: { control: 'select', options: ['+', '-'] },
	}
}
export default meta;

export const TenBoxTemplate: StoryObj = {
	args: {
		num1: 13,
		num2: 15,
		// num3: 2,
		operator: '+',
	},

    render: (args) => {
        const xml = getContainerXml(args);
        return  html`<lido-home .xmlData="${xml}"></lido-home>`;
    }
}

const answerNumbers = (num1: number, num2: number, operator: string, num3?: number) => {
	let answer = 0;
	if (operator === '+') {
		answer = num1 + num2;
		if (num3 !== undefined) {
			answer += num3;
		}	
	} else if (operator === '-') {
		answer = num1 - num2;	
		if (num3 !== undefined) {
			answer -= num3;
		}
	}
	return answer;
}

const renderDropBoxes = (numOfDrops: number) => {
	const digits = numOfDrops.toString().split('');
	return digits.map((digit, index) => {
		return `<lido-text visible="true" id="drop${index}" string="?" tab-index="${index}" font-size="150px" font-color="#facf50" bg-color="#000000a5" type="drop" height="165px" width="115px" border-radius="15px" value="${digit}" onEntry="this.fontWeight='bold';"></lido-text>`
	}).join('');
}

const renderDragCells = () => {
  let html = "";
  for (let i = 0; i < 10; i++) {
    html += `
      <lido-text 
        visible="true" 
        id="drag${i}" 
        type="drag" 
        string="${i}" 
        value="${i}" 
        font-size="150px" 
        font-color="#3d1d0c" 
        height="165px" 
        width="115px" 
        bg-color="#f5f098" 
        border-radius="15px" 
        onEntry="this.fontWeight='bold';">
      </lido-text>
    `;
  }
  return html;
};


const getContainerXml = (args: any) => {
	const answer = answerNumbers(args.num1, args.num2, args.operator, args.num3);
    return `
    <main>
    <lido-container visible="true" objective="${answer.toString().split("").join(",")}" bg-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Tenbox/tenbox.png" is-continue-on-correct="true" onCorrect="this.sleep='1500';" drop-action="infinite-drop" id="lido-container" >
	<lido-cell visible="true" layout="col" height="100%" width="100%" bg-color="transparent">
		<lido-cell visible="true" layout="landscape.row, portrait.col" height="53%" width="auto" gap="20px" bg-color="transparent">
			<lido-cell visible="true" layout="col" height="100%" width="500px" bg-color="transparent">
				${!args.num3 && args.num1 >= 10 ? `
					<lido-cell visible="true" height="50%" width="100%" layout="row">
						<lido-text id="tenBox" visible="false" font-size="150px" bg-color="#fbd061" width="100%" height="70%" onEntry="this.border='4px solid #c86d29';" border-radius="20px">
							<lido-image visible="true" is-slice="true" width="35%" height="100%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Tenbox/sunflower.png">
								<lido-text visible="true" string="10" font-size="145px" bg-color="transparent" onEntry="this.fontWeight='700';"></lido-text>
							</lido-image>
						</lido-text>
						<lido-math-matrix visible="true" height="100%" width="100%" rows="5" cols="2" border="2px solid orange" border-radius="7px" active-bg-color="white" deactive-bg-color="white" onEntry="this.sleep='1000'; this.display='none'; tenBox.display='flex';" defualt-fill="10" clickable="false" matrix-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/FoodJar/apple.png"></lido-math-matrix>
					</lido-cell>
					` : ``}

				${!args.num3 && args.num1 === 20 ? `
					<lido-cell visible="true" height="50%" width="100%" layout="row">
						<lido-text id="tenBox1" visible="false" font-size="150px" bg-color="#fbd061" width="100%" height="70%" onEntry="this.border='4px solid #c86d29';" border-radius="20px">
							<lido-image visible="true" is-slice="true" width="35%" height="100%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Tenbox/sunflower.png">
								<lido-text visible="true" string="10" font-size="145px" bg-color="transparent" onEntry="this.fontWeight='700';"></lido-text>
							</lido-image>
						</lido-text>
						<lido-math-matrix visible="true" height="100%" width="100%" rows="5" cols="2" border="2px solid orange" border-radius="7px" active-bg-color="white" deactive-bg-color="white" onEntry="this.sleep='1000'; this.display='none'; tenBox1.display='flex';" defualt-fill="10" clickable="false" matrix-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/FoodJar/apple.png"></lido-math-matrix>
					</lido-cell>
					` : `<lido-math-matrix visible="${args.num1 !== 10 ? true : false}" height="50%" width="100%" rows="5" cols="2" border="2px solid orange" border-radius="7px" active-bg-color="white" deactive-bg-color="white" defualt-fill="${args.num1 > 10 ? args.num1-10 : args.num1}" clickable="false" matrix-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/FoodJar/apple.png"></lido-math-matrix>`}
				

				

			</lido-cell>

			<lido-cell visible="true" layout="col" height="100%" width="500px" bg-color="transparent">
				${!args.num3 && args.num2 >= 10 ? `
					<lido-cell visible="true" height="50%" width="100%" layout="row">
						<lido-text id="tenBox2" visible="false" font-size="150px" bg-color="#fbd061" width="100%" height="70%" onEntry="this.border='4px solid #c86d29';" border-radius="20px">
							<lido-image visible="true" is-slice="true" width="35%" height="100%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Tenbox/sunflower.png">
								<lido-text visible="true" string="10" font-size="145px" bg-color="transparent" onEntry="this.fontWeight='700';"></lido-text>
							</lido-image>
						</lido-text>
						<lido-math-matrix visible="true" height="100%" width="100%" rows="5" cols="2" border="2px solid orange" border-radius="7px" active-bg-color="white" deactive-bg-color="white" onEntry="this.sleep='1000'; this.display='none'; tenBox2.display='flex';" defualt-fill="10" clickable="false" matrix-image="${args.operator === "+" ? `https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/FoodJar/apple.png` : 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Tenbox/apple%20outline.png'}"></lido-math-matrix>
					</lido-cell>
					` : ``}
				

				${!args.num3 && args.num2 === 20 ? `
					<lido-cell visible="true" height="50%" width="100%" layout="row">
						<lido-text id="tenBox3" visible="false" font-size="150px" bg-color="#fbd061" width="100%" height="70%" onEntry="this.border='4px solid #c86d29';" border-radius="20px">
							<lido-image visible="true" is-slice="true" width="35%" height="100%" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Tenbox/sunflower.png">
								<lido-text visible="true" string="10" font-size="145px" bg-color="transparent" onEntry="this.fontWeight='700';"></lido-text>
							</lido-image>
						</lido-text>
						<lido-math-matrix visible="true" height="100%" width="100%" rows="5" cols="2" border="2px solid orange" border-radius="7px" active-bg-color="white" deactive-bg-color="white" onEntry="this.sleep='1000'; this.display='none'; tenBox3.display='flex';" defualt-fill="10" clickable="false" matrix-image="${args.operator === "+" ? `https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/FoodJar/apple.png` : 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Tenbox/apple%20outline.png'}"></lido-math-matrix>
					</lido-cell>
					` : `<lido-math-matrix visible="${args.num2 !== 10 ? true : false}" height="50%" width="100%" rows="5" cols="2" border="2px solid orange" border-radius="7px" active-bg-color="white" deactive-bg-color="white" defualt-fill="${args.num2 > 10 ? args.num2-10 : args.num2}" clickable="false" matrix-image="${args.operator === "+" ? `https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/FoodJar/apple.png` : 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Tenbox/apple%20outline.png'}"></lido-math-matrix>`}
			</lido-cell>
			${args.num3 ? `
			<lido-cell visible="true" layout="col" height="100%" width="500px" bg-color="transparent">
				<lido-math-matrix visible="true" height="50%" width="100%" rows="5" cols="2" border="2px solid orange" border-radius="7px" active-bg-color="white" deactive-bg-color="white" defualt-fill="${args.num3}" clickable="false" matrix-image="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/FoodJar/apple.png"></lido-math-matrix>
			</lido-cell>` : ``}
		</lido-cell>
		<lido-cell visible="true" layout="row" height="20%" width="auto" gap="20px" bg-color="transparent">
			<lido-text visible="true" string="${args.num1}${args.operator}${args.num2}${args.num3 ? args.operator + args.num3 : ""} = " font-size="150px" font-color="white" onEntry="this.fontWeight='bold';" onTouch="this.fontSize='20px'; this.visibility='hidden';"></lido-text>
			${renderDropBoxes(answer)}
		</lido-cell>
		<lido-cell visible="true" layout="landscape.row, portrait.flex" height="landscpae.20%, portrait.30%" gap="landscape.0, portrait.80px" width="100%" bg-color="transparent">
			
			${renderDragCells()}

		</lido-cell>
	</lido-cell>
</lido-container>
</main>`;
}