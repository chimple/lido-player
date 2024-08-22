import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  shadow: false,
})
export class AppRoot {
  @Prop() xmlData: string;
  private parseElement(element: Element): any {
    const tagName = element.nodeName.toLowerCase();
    const props: { [key: string]: any } = {};

    // Convert attributes to props using reduce for cleaner code
    Array.from(element.attributes).forEach(attr => {
      props[attr.name] = attr.value;
    });

    // Recursively parse child elements
    const children = Array.from(element.childNodes)
      .map(child => {
        if (child.nodeType === 1) {
          // ELEMENT_NODE
          return this.parseElement(child as Element);
        } else if (child.nodeType === 3 && child.textContent.trim() !== '') {
          // TEXT_NODE
          return child.textContent;
        }
        return null;
      })
      .filter(Boolean); // Remove null/undefined values

    // Dynamically map tag names to Stencil components
    const componentMapping = {
      'app-container': <app-container {...props}>{children}</app-container>,
      'app-objective': <app-objective {...props}>{children}</app-objective>,
      'app-col': <app-col {...props}>{children}</app-col>,
      'app-image': <app-image {...props}>{children}</app-image>,
      'app-row': <app-row {...props}>{children}</app-row>,
      'app-text': <app-text {...props}>{children}</app-text>,
    };

    if (componentMapping[tagName]) {
      return componentMapping[tagName];
    } else {
      console.warn(`Unknown tag: ${tagName}`);
      return null;
    }
  }

  render() {
    if (!this.xmlData) {
      return <div>Please provide XML data.</div>;
    }

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(this.xmlData, 'text/xml');

    const rootElement = xmlDoc.documentElement;

    return this.parseElement(rootElement);
  }
}
