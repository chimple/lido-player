import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-renderer',
  shadow: false,
})
export class AppRenderer {
  @Prop() data: string;

  private parseElement(element: Element): any {
    const tagName = element.nodeName.toLowerCase();
    console.log('Parsing Element:', tagName);

    const props: { [key: string]: any } = {};
    for (let i = 0; i < element.attributes.length; i++) {
      const attr = element.attributes[i];
      props[attr.name] = attr.value;
    }
    console.log('Props:', props);

    let children: any[] = [];
    if (element.childNodes && element.childNodes.length > 0) {
      children = Array.from(element.childNodes)
        .map(child => {
          if (child.nodeType === 1) {
            // ELEMENT_NODE
            return this.parseElement(child as Element);
          } else if (child.nodeType === 3 && child.textContent.trim() !== '') {
            // TEXT_NODE
            return (child as Text).textContent;
          }
        })
        .filter(Boolean);
    }

    switch (tagName) {
      case 'container':
        return <app-container {...props}>{children}</app-container>;
      case 'objective':
        return <app-objective {...props}>{children}</app-objective>;
      case 'col':
        return <app-col {...props}>{children}</app-col>;
      case 'image':
        return <app-image {...props}>{children}</app-image>;
      case 'row':
        return <app-row {...props}>{children}</app-row>;
      case 'text':
        return <app-text {...props}>{children}</app-text>;
      default:
        console.warn('Unknown tag:', tagName);
        return null;
    }
  }

  render() {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(this.data, 'text/xml');

    const rootElement = xmlDoc.documentElement;

    return this.parseElement(rootElement);
  }
}
