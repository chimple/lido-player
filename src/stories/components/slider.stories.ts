import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Component/Slider',
  argTypes: {
    src: { control: 'select', options: ['https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/slider/gwt.svg', 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/slider/beeker.svg','https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/slider/beekerFrame.svg'] },
    fillPercentage: { control: 'number' },
    numberType: {
      control: 'select',
      options: ['integer', 'decimal', 'fraction'],
    },
    min: { control: 'number'},
    division: { control: 'number' },
    max: { control: 'number' },
    fillDirection: { control: 'select', options: ['vertical', 'horizontal'] },
  },
};
export default meta;

export const QuestionAndOptions: StoryObj = {
  args: {
    src: 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/slider/gwt.svg',
    fillPercentage: 30,
    numberType: 'integer',
    min: 0,
    division: 5,
    max: 10,
    fillDirection: 'vertical',
  },

  render: args => {
    const xml = getContainerXml(args);
    return html`<lido-home xml-data="${xml}" xmlData="${xml}"></lido-home>`;
  },
};

function getContainerXml(args) {
  const { src, fillPercentage, fillDirection, min, max, division, numberType } = args;

  return `<main>
    <lido-container id="lido-container" tabIndex="1" value="mainContainer1" objective="..." ariaLabel="" height="100vh" width="100vw" x="0" y="0" z="0" bgColor="black" visible="true">
      <lido-slide-fill fill="${fillPercentage}" width="500px" src="${src}" fillDirection="${fillDirection}" numberType="${numberType}" min="${min}" max="${max}" division="${division}" ></lido-slider-fill>
    </lido-container>
  </main>`;
}
