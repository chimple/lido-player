import { Component, h, State, Prop, getAssetPath } from '@stencil/core';

/**
 * @component LidoRoot
 *
 * The `LidoRoot` component is the main application entry point. It loads an external XML data file
 * from a specified URL or asset path and passes it down to the `lido-home` component for rendering.
 * The XML path can be configured via a prop.
 */
@Component({
  tag: 'lido-root',
  shadow: false,
  assetsDirs: ['assets'], // Specifies the directory for static assets
})
export class LidoRoot {
  /**
   * Prop to hold the XML file path or URL. This can be a relative path or an external URL.
   */
  @Prop() xmlPath: string = '';

  /**
   * Initial index of the container being displayed.
   */
  @Prop() initialIndex: number = 0;

  /**
   * CSS margin value applied to each child element inside the container.
   * Accepts standard CSS margin formats (e.g., '10px', '5px 10px', etc.).
   */
  @Prop() margin: string = '';

  /**
   * Boolean that controls the playability of the game.
   */
  @Prop() canplay: boolean = true;

  /**
   * Base URL for the containers.
   */
  @Prop() baseUrl: string = '';

  /**
   * Custom URL for the Exit button icon.
   * Falls back to the default icon if not provided or invalid.
   */
  @Prop() exitButtonUrl: string;

  /**
   * Custom URL for the Previous button icon.
   * Falls back to the default icon if not provided or invalid.
   */
  @Prop() prevButtonUrl: string;

  /**
   * Custom URL for the Next button icon.
   * Falls back to the default icon if not provided or invalid.
   */
  @Prop() nextButtonUrl: string;

  /**
   * Custom URL for the Speaker button icon.
   * Falls back to the default icon if not provided or invalid.
   */
  @Prop() speakerButtonUrl: string;

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
    // if (!this.xmlPath) {
    //   console.error('XML path is not provided.');
    //   return;
    // }
    const xmlPath = this.xmlPath ?? this.baseUrl + (this.baseUrl?.endsWith('/') ? 'index.xml' : '/index.xml');
    console.log('🚀 ~ LidoRoot ~ componentWillLoad ~ this.baseUrl:', this.baseUrl);
    console.log('🚀 ~ LidoRoot ~ componentWillLoad ~ this.xmlPath:', this.xmlPath);
    console.log('🚀 ~ LidoRoot ~ componentWillLoad ~ xmlPath:', xmlPath);
    // Fetch the XML data
    try {
      const resolvedPath = xmlPath.startsWith('http')
        ? xmlPath // Use the provided URL if it's an HTTP/HTTPS link
        : getAssetPath(xmlPath); // Otherwise, resolve it as an asset path

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

    // Once the XML data is loaded, pass it to the `lido-home` component
    return <lido-home initialIndex={this.initialIndex} canplay={this.canplay} xmlData={this.xmlData} baseUrl={this.baseUrl} exitButtonUrl={this.exitButtonUrl} prevButtonUrl={this.prevButtonUrl} nextButtonUrl={this.nextButtonUrl} speakerButtonUrl={this.speakerButtonUrl}></lido-home>;
  }
}
