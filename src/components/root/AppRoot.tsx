import { Component, h, State, Prop, getAssetPath } from '@stencil/core';

/**
 * @component AppRoot
 *
 * The `AppRoot` component is the main application entry point. It loads an external XML data file
 * from a specified URL or asset path and passes it down to the `app-home` component for rendering.
 * The XML path can be configured via a prop.
 */
@Component({
  tag: 'app-root',
  shadow: false,
  assetsDirs: ['assets'], // Specifies the directory for static assets
})
export class AppRoot {
  /**
   * Prop to hold the XML file path or URL. This can be a relative path or an external URL.
   */
  @Prop() xmlPath: string;

  /**
   * Initial index of the container being displayed.
   */
  @Prop() initialIndex: number = 0;

  /**
   * Boolean that controls the playability of the game.
   */
  @Prop() canplay: boolean = true;

  /**
   * State variable to hold the XML data fetched from the specified path or URL.
   */
  @State() xmlData: string;

  /**
   * Lifecycle method that runs before the component is loaded.
   * It fetches the XML data from the specified path or URL and sets it to the component's state.
   */
  async componentWillLoad() {
    // Validate the xmlPath prop
    if (!this.xmlPath) {
      console.error('XML path is not provided.');
      return;
    }

    // Fetch the XML data
    try {
      const resolvedPath = this.xmlPath.startsWith('http')
        ? this.xmlPath // Use the provided URL if it's an HTTP/HTTPS link
        : getAssetPath(this.xmlPath); // Otherwise, resolve it as an asset path

      const response = await fetch(resolvedPath);
      if (!response.ok) {
        throw new Error(`Failed to fetch XML data: ${response.statusText}`);
      }
      const data = await response.text();

      // Store the XML data in the component's state
      this.xmlData = data;
    } catch (error) {
      console.error('Error fetching XML data:', error);
      this.xmlData = null;
    }
  }

  render() {
    // Show a loading message until the XML data is fetched
    if (this.xmlData === undefined) {
      return <div>Loading...</div>;
    }

    // Show an error message if the XML data could not be fetched
    if (this.xmlData === null) {
      return <div>Error loading XML data. Please check the path or URL.</div>;
    }

    // Once the XML data is loaded, pass it to the `app-home` component
    return <app-home initialIndex={this.initialIndex} canplay={this.canplay} xmlData={this.xmlData}></app-home>;
  }
}
