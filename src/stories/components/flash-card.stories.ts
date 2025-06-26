import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Component/FlashCard',
  argTypes: {
    svgFile: { control: 'file' },
    mode: { control: 'select', options: ['noFlow', 'showFlow', 'freeTrace', 'blindTracing', 'blindFreeTrace'] },
  },
};
export default meta;

export const FrontTextBackCol: StoryObj = {
  args: {},
  render: _ => {
    const xml = `<main>
	<lido-container id="lido-container" tab-index="1" value="mainContainer3" objective="lion,crocodile,cow" bg-color="#B1BEFD" aria-label="" height="100vh" width="100vw" x="0" y="0" z="0" visible="true" audio="background1.mp3" onTouch="" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000'; this.removeClone='.cloned-element'" onEntry="" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="true" dropAttr="diagonal">
		<lido-row visible="true" width="landscape.100%, portrait.338px" onEntry="" height="landscape.100%, portrait." y="landscape.340px, portrait.300px" x="landscape.,portrait.520px" direction="landscape.row, portrait.column">
			<lido-flash-card x="50" y="200" width="220px" height="140px">
				<lido-text slot="front" width="400px" height="200px" display="flex" onEntry="" font-family="" fontSize="48px" z="1" font-color="black" fontWeight="bold" color="#000000" string="lion" visible="true" y="landscape.35px, portrait.15px" bg-color="red">
				</lido-text>
				<lido-col id="col5" slot="back" disable-edit="true" visible="true" width="300px" height="400px" bg-color="orange" type="" tab-index="6" dropAttr="diagonal" value="cat" onEntry="this.position='relative';" y="landscape.-50px,portrait.">
					<lido-image visible="true" src="https://i0.wp.com/pixahive.com/wp-content/uploads/2021/02/Yellow-pattern-abstract-background-wallpaper-325431-pixahive.jpg?fit=778%2C435ssl=1" z="0" width="200px" height="300px" onEntry="">
					</lido-image>
					<lido-text width="300px" height="200px" display="flex" onEntry="" font-family="" fontSize="48px" z="1" font-color="black" fontWeight="bold" color="#000000" string="tiger" visible="true" y="landscape.35px, portrait.15px" bg-color="yellow">
					</lido-text>
				</lido-col>
			</lido-flash-card>
		</lido-row>
	</lido-container>
	</main>`;
    return html`<lido-home xml-data="${xml}" xmlData="${xml}"></lido-home>`;
  },
};

export const BothText: StoryObj = {
  args: {},
  render: _ => {
    const xml = `<main>
      <lido-container id="lido-container" tab-index="1" value="mainContainer3" objective="lion,crocodile,cow" bg-color="#B1BEFD" aria-label="" height="100vh" width="100vw" x="0" y="0" z="0" visible="true" audio="background1.mp3" onTouch="" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000'; this.removeClone='.cloned-element'" onEntry="" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="true" dropAttr="diagonal">
          <lido-row visible="true" width="landscape.100%, portrait.338px" onEntry="" height="landscape.100%, portrait." y="landscape.340px, portrait.300px" x="landscape.,portrait.520px" direction="landscape.row, portrait.column">
              <lido-flash-card x="50" y="200" width="220px" height="140px">
                  <lido-text slot="front" width="400px" height="200px" display="flex" onEntry="" font-family="" fontSize="48px" z="1" font-color="black" fontWeight="bold" color="#000000" string="lion" visible="true" y="landscape.35px, portrait.15px" bg-color="red">
                  </lido-text>
                      <lido-text slot="back" width="300px" height="200px" display="flex" onEntry="" font-family="" fontSize="48px" z="1" font-color="black" fontWeight="bold" color="#000000" string="tiger" visible="true" y="landscape.35px, portrait.15px" bg-color="yellow">
                      </lido-text>
              </lido-flash-card>
          </lido-row>
      </lido-container>
      </main>`;
    return html`<lido-home xml-data="${xml}" xmlData="${xml}"></lido-home>`;
  },
};

export const BothImages: StoryObj = {
  args: {},
  render: _ => {
    const xml = `<main>
      <lido-container id="lido-container" tab-index="1" value="mainContainer3" objective="lion,crocodile,cow" bg-color="#B1BEFD" aria-label="" height="100vh" width="100vw" x="0" y="0" z="0" visible="true" audio="background1.mp3" onTouch="" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000'; this.removeClone='.cloned-element'" onEntry="" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="true" dropAttr="diagonal">
          <lido-row visible="true" width="landscape.100%, portrait.338px" onEntry="" height="landscape.100%, portrait." y="landscape.340px, portrait.300px" x="landscape.,portrait.520px" direction="landscape.row, portrait.column">
              <lido-flash-card x="50" y="200" width="220px" height="140px">
                          <lido-image visible="true" slot="front" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/thumbnails/sticker/Bird_Blue.png" z="0" width="200px" height="300px" onEntry="">
                      </lido-image>
                      <lido-image visible="true" slot="back" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/thumbnails/sticker/Boat.png" z="0" width="200px" height="300px" onEntry="">
                      </lido-image>
              </lido-flash-card>
          </lido-row>
      </lido-container>
      </main>`;
    return html`<lido-home xml-data="${xml}" xmlData="${xml}"></lido-home>`;
  },
};

export const FrontImageBackText: StoryObj = {
  args: {},
  render: _ => {
    const xml = `<main>
        <lido-container id="lido-container" tab-index="1" value="mainContainer3" objective="lion,crocodile,cow" bg-color="#B1BEFD" aria-label="" height="100vh" width="100vw" x="0" y="0" z="0" visible="true" audio="background1.mp3" onTouch="" onCorrect="lido-avatar.avatarAnimate='Success'; this.sleep='2000'; this.removeClone='.cloned-element'" onEntry="" onInCorrect="lido-avatar.avatarAnimate='Fail'; this.sleep='2000';" show-check="false" is-continue-on-correct="true" dropAttr="diagonal">
            <lido-row visible="true" width="landscape.100%, portrait.338px" onEntry="" height="landscape.100%, portrait." y="landscape.340px, portrait.300px" x="landscape.,portrait.520px" direction="landscape.row, portrait.column">
                <lido-flash-card x="50" y="200" width="220px" height="140px">
                            <lido-image visible="true" slot="front" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/thumbnails/sticker/Bird_Blue.png" z="0" width="200px" height="300px" onEntry="">
                        </lido-image>
                    <lido-text slot="back" width="300px" height="200px" display="flex" onEntry="" font-family="" fontSize="48px" z="1" font-color="black" fontWeight="bold" color="#000000" string="Bird" visible="true" y="landscape.35px, portrait.15px" bg-color="yellow">
                      </lido-text>
                </lido-flash-card>
            </lido-row>
        </lido-container>
        </main>`;
    return html`<lido-home xml-data="${xml}" xmlData="${xml}"></lido-home>`;
  },
};

