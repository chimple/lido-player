import { Component, getAssetPath, h, State } from '@stencil/core';
// import { Style } from './../../index.css';

/**
 * @component AppRoot
 *
 * The `AppRoot` component is the main application entry point. It loads an external XML data file
 * from the `assets` directory and passes it down to the `app-home` component for rendering. The component
 * uses the Stencil lifecycle to fetch the XML data asynchronously before rendering the content.
 */
@Component({
  tag: 'app-root',
  shadow: false,
  assetsDirs: ['assets'], // Specifies the directory for static assets
})
export class AppRoot {
  /**
   * State variable to hold the XML data fetched from the external file.
   */
  @State() xmlData: string;

  /**
   * Lifecycle method that runs before the component is loaded.
   * It fetches the XML data from the assets folder and sets it to the component's state.
   */
  async componentWillLoad() {
    // Get the path to the XML file from the assets directory
    const res = getAssetPath('./assets/xmlData.xml');

    // Fetch the XML data asynchronously
    const response = await fetch(res);
    
    
    const data = await response.text();

    // Store the XML data in the component's state
    this.xmlData = data;
  }

  render() {
    // Show a loading message until the XML data is fetched
    if (!this.xmlData) {
      return <div>Loading...</div>;
    }

    // Once the XML data is loaded, pass it to the `app-home` component
    return <app-home initialIndex={0} canplay={true} xmlData={this.xmlData}></app-home>;
  }
}
