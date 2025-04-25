import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Component/Trace',
  argTypes: {
    svgFile: { control: 'file' },
    mode: { control: 'select', options: ['noFlow', 'showFlow', 'freeTrace', 'blindTracing', 'blindFreeTrace'] },
  },
};
export default meta;

export const QuestionAndOptions: StoryObj = {
  args: {
    svgFile: ['https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/hindi_aa.svg'],
    mode: 'showFlow',
  },

  render: args => {
    const xml = getContainerXml(args);
    console.log('🚀 ~ xml:', xml);
    return html`<lido-home xml-data="${xml}" xmlData="${xml}"></lido-home>`;
  },
};

function getContainerXml(args) {
  let svgText = args.svgFile[0];
  let mode = args.mode;
  return `<main>
	<lido-container id="lido-container" tabIndex="1" value="mainContainer1" objective="D-6ba518e3,D-5a192ba3,D-b686f882,D-9095b74f,D-e0a32c78,D-1e4e88f1" ariaLabel="" height="100vh" width="100vw" x="0" y="0" z="0" bgColor="#FFB742" visible="true" audio="background1.mp3" onTouch="" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000';" onEntry="" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" showCheck="false" isContinueOnCorrect="true">
		<lido-trace id="image1" tabIndex="2" value="image1" visible="true" svgSource="${svgText}" mode="${mode}" z="0" width="1600px" height="900px" onEntry="" altText="{backgroundImage}">
		</lido-trace>
	</lido-container>
	</main>`;
}
