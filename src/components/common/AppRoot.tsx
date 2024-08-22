import { Component, getAssetPath, h, State } from '@stencil/core';

@Component({
  tag: 'app-root',
  shadow: false,
  assetsDirs: ['assets'],
})
export class AppRoot {
  @State() xmlData: string;

  async componentWillLoad() {
    const res = getAssetPath('./assets/xmlData.xml');
    console.log('🚀 ~ AppRoot ~ componentWillLoad ~ res:', res);
    const response = await fetch(res);
    const data = await response.text();
    this.xmlData = data;
  }

  render() {
    if (!this.xmlData) {
      return <div>Loading...</div>;
    }

    return <app-home xmlData={this.xmlData}></app-home>;
  }
}
