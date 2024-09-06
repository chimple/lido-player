import { Component, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'app-home',
  shadow: false,
})
export class AppHome {
  @Prop() xmlData: string;
  @State() currentContainerIndex: number = 0;
  @State() showCompletionMessage: boolean = false;
  @State() containers: any[] = [];

  componentWillLoad() {
    window.addEventListener('nextContainer', this.nextContainer);
    this.parseXMLData(this.xmlData);
  }

  disconnectedCallback() {
    window.removeEventListener('nextContainer', this.nextContainer);
  }

  private parseXMLData(xmlData: string) {
    if (xmlData) {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlData, 'text/xml');
      const rootElement = xmlDoc.documentElement;
      this.parseContainers(rootElement);
    }
  }

  private parseElement(element: Element): any {
    const tagName = element.nodeName.toLowerCase();
    const props: { [key: string]: any } = {};

    Array.from(element.attributes).forEach(attr => {
      props[attr.name] = attr.value;
    });

    const children = Array.from(element.childNodes)
      .map(child => {
        if (child.nodeType === 1) {
          return this.parseElement(child as Element);
        } else if (child.nodeType === 3 && child.textContent.trim() !== '') {
          return child.textContent;
        }
        return null;
      })
      .filter(Boolean);

    const componentMapping = {
      'app-container': <app-container {...props}>{children}</app-container>,
      'app-objective': <app-objective {...props}>{children}</app-objective>,
      'app-col': <app-col {...props}>{children}</app-col>,
      'app-image': <app-image {...props}>{children}</app-image>,
      'app-row': <app-row {...props}>{children}</app-row>,
      'app-text': <app-text {...props}>{children}</app-text>,
      'app-pos': <app-pos {...props}>{children}</app-pos>,
      'app-shape': <app-shape {...props}>{children}</app-shape>,
      'app-wrap': <app-wrap {...props}>{children}</app-wrap>,
      'app-random': <app-random {...props}>{children}</app-random>,
    };

    if (componentMapping[tagName]) {
      return componentMapping[tagName];
    } else {
      console.warn(`Unknown tag: ${tagName}`);
      return null;
    }
  }

  private parseContainers(rootElement: Element) {
    const containers = [];
    const containerElements = rootElement.querySelectorAll('app-container');
    containerElements.forEach(container => {
      const parsedElement = this.parseElement(container);
      if (parsedElement) {
        containers.push(parsedElement);
      }
    });
    this.containers = containers;
  }

  private nextContainer = () => {
    if (this.currentContainerIndex < this.containers.length - 1) {
      this.currentContainerIndex++;
    } else {
      this.showCompletionMessage = true;
      setTimeout(() => {
        this.showCompletionMessage = false;
      }, 3000);
    }

    // Reset the containers to force a full re-render
    this.containers = [...this.containers];
  };

  render() {
    if (!this.xmlData) {
      return <div>Please provide XML data.</div>;
    }

    return (
      <div>
        <div key={this.currentContainerIndex}>
          {this.containers[this.currentContainerIndex]}
          {/* <button onClick={this.nextContainer}>Next Container</button> */}
        </div>
        {this.showCompletionMessage && <div class="snackbar">All containers have been displayed!</div>}
        <style>
          {`
            .snackbar {
              visibility: visible;
              min-width: 250px;
              background-color: #333;
              color: #fff;
              text-align: center;
              border-radius: 2px;
              padding: 16px;
              position: fixed;
              z-index: 1;
              bottom: 30px;
              left: 50%;
              transform: translateX(-50%);
              font-size: 17px;
            }
          `}
        </style>
      </div>
    );
  }
}
