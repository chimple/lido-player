import { Component, Prop, h, State, Host, Watch, Element } from '@stencil/core';
import { DragSelectedMapKey, DragMapKey, SelectedValuesKey, NextContainerKey, PrevContainerKey, DropLength, DropHasDrag, GameExitKey, LidoContainer } from '../../utils/constants';
import { dispatchActivityChangeEvent, dispatchGameCompletedEvent, dispatchGameExitEvent } from '../../utils/customEvents';
import { clearLocalStorage, calculateScale, getCancelBtnPopup, setCancelBtnPopup, executeActions } from '../../utils/utils';
import { AudioPlayer } from '../../utils/audioPlayer';

/**
 * @component LidoHome
 *
 * The `LidoHome` component renders a series of containers parsed from the provided XML data.
 * It handles navigation between containers, resets the state on page reloads or container transitions,
 * and displays progress indicators (dots) for each container.
 */
@Component({
  tag: 'lido-home',
  shadow: false,
  styleUrls: ['./../../css/index.css', './../../css/animation.css', './lido-home.css'],
})
export class LidoHome {
  /**
   * XML data passed to the component, which is parsed and used to render various containers.
   */
  @Prop() xmlData: string = '';

  /**
   * Initial index of the container being displayed.
   */
  @Prop() initialIndex: number = 0;

  /**
   * Boolean that controls the playability of the game.
   */
  @Prop() canplay: boolean = true;

  /**
   * Base URL for the containers.
   */
  @Prop() baseUrl: string = '';

  /**
   * The height of the container (CSS value).
   */
  @Prop() height: string = '';

  @Element() el: HTMLElement;

  /**
   * Current index of the container being displayed.
   */
  @State() currentContainerIndex: number = this.initialIndex;

  /**
   * Boolean that controls the display of the completion message after all containers have been viewed.
   */
  @State() showCompletionMessage: boolean = false;

  /**
   * Boolean that controls the visibility of the exit confirmation popup.
   * This is set to true when the user attempts to exit the game.
   */
  @State() exitFlag: boolean = false;

  /**
   * Stores the list of container-rendering functions parsed from XML.
   */
  @State() containers: (() => any)[] = [];

  /**
   * Event handler for transitioning to the next container in the sequence.
   * If the last container is reached, it shows a completion message.
   */
  NextContainerKey = (index?: number | undefined) => {
    // console.log("👉 NextContainerKey CALLED with index:", index);
    if (index != undefined && index == this.currentContainerIndex) return;
    // Clear selected values from localStorage on container transition
    clearLocalStorage();

    if (index != undefined && index < this.containers.length) {
      // Move to the next container
      this.currentContainerIndex = index;
      // window.dispatchEvent(new CustomEvent('activityChange', { detail: { index: this.currentContainerIndex } }));
      dispatchActivityChangeEvent(this.currentContainerIndex);
    } else if (this.currentContainerIndex < this.containers.length - 1) {
      // Move to the next container
      this.currentContainerIndex++;
      // window.dispatchEvent(new CustomEvent('activityChange', { detail: { index: this.currentContainerIndex } }));
      dispatchActivityChangeEvent(this.currentContainerIndex);
    } else if (this.currentContainerIndex >= this.containers.length - 1) {
      // Show the completion message if all containers have been viewed
      this.showCompletionMessage = true;
      // const event = new CustomEvent('gameCompleted');
      // window.dispatchEvent(event);
      dispatchGameCompletedEvent();

      this.currentContainerIndex = 0;
      // Hide the completion message after 3 seconds
      setTimeout(() => {
        this.showCompletionMessage = false;
      }, 3000);
    }
    // Reset the containers array to trigger a re-render
    this.containers = [...this.containers];
    this.updateArrowVisibility();
  };

  PrevContainerKey = (index?: number | undefined) => {
    console.log('👉 PrevContainerKey CALLED with index:', index);
    if (this.currentContainerIndex <= 0) return;

    // Clear selected values from localStorage on container transition
    clearLocalStorage();

    // Move to the previous container
    this.currentContainerIndex--;

    // Dispatch event to update the UI or state
    dispatchActivityChangeEvent(this.currentContainerIndex);

    // Refresh container array and update button visibility
    this.containers = [...this.containers];
    this.updateArrowVisibility();
  };

  /**
   * Lifecycle method that runs before the component is loaded. It sets up event listeners for transitioning
   * between containers and parses the XML data into containers.
   */
  componentWillLoad() {
    // Listen for 'NextContainerKey' event to transition between containers
    window.addEventListener(NextContainerKey, () => {
      this.NextContainerKey();
    });

    window.addEventListener(PrevContainerKey, () => {
      this.PrevContainerKey();
    });

    window.addEventListener('changeContainer', (e: any) => {
      this.NextContainerKey(e.detail.index);
    });

    // Parse the provided XML data
    this.parseXMLData(this.xmlData);

    // Remove stored values in localStorage when the page is about to be unloaded
    window.addEventListener('beforeunload', () => {
      clearLocalStorage();
    });
  }
  @State() showDotsandbtn: boolean = false;
  componentDidLoad() {
    setTimeout(() => {
      this.showDotsandbtn = true;
    }, 10);
    this.updateArrowVisibility();

    if (this.height == '' || this.height === '0' || this.height === '0px' || this.height === '0%') {
      this.scaleNavbarContainer();
    } else {
      this.updateBackgroundImage();
    }

    window.addEventListener('resize', () => {
      this.scaleNavbarContainer(); // re-scale navbar on resize
    });
  }

  updateBackgroundImage() {
    const container = document.querySelector(LidoContainer);
    const bgImageSrc = container.getAttribute('bg-image');
    document.body.style.background = 'none';
    container.style.backgroundImage = bgImageSrc ? `url(${bgImageSrc})` : 'none';
    container.style.backgroundPosition = bgImageSrc ? `bottom` : 'none';
    setTimeout(() => {
      const navBar = document.querySelector('.lido-dot-container') as HTMLElement;
      navBar.classList.add('nav-for-lanai');
      container.append(navBar);
    }, 50);
  }
  /**
   * Lifecycle method that cleans up event listeners when the component is removed from the DOM.
   */
  disconnectedCallback() {
    window.removeEventListener(NextContainerKey, () => {
      this.NextContainerKey();
    });
    window.removeEventListener('changeContainer', (e: any) => {
      this.NextContainerKey(e.detail.index);
    });
    window.removeEventListener(PrevContainerKey, () => {
      this.PrevContainerKey();
    });
    window.removeEventListener('resize', () => {
      this.scaleNavbarContainer(); // clean up
    });
  }

  /**
   * Parses the provided XML string into an XML DOM object and extracts the containers from it.
   *
   * @param xmlData - The XML data as a string.
   */
  private parseXMLData(xmlData: string) {
    if (xmlData) {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlData, 'text/xml');
      const rootElement = xmlDoc.documentElement;

      // Parse containers from the root XML element
      this.parseContainers(rootElement);
    }
  }

  @Watch('xmlData')
  onXmlDataChange(newValue: string) {
    this.parseXMLData(newValue);
  }

  /**
   * Recursively parses an XML element and its children, converting them into corresponding Stencil components.
   *
   * @param element - The XML element to parse.
   * @returns The corresponding Stencil component with parsed props and children.
   */
  private parseElement(element: Element): any {
    const tagName = element.nodeName.toLowerCase();
    const props: { [key: string]: any } = {};

    // Extract attributes from the element and map them to props
    Array.from(element.attributes).forEach(attr => {
      props[attr.name] = attr.value;
    });

    // Recursively parse child elements
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

    // Map XML tags to Stencil components
    const componentMapping = {
      'lido-container': (
        <lido-container {...props} canplay={this.canplay} baseUrl={this.baseUrl} height={this.height}>
          {children}
        </lido-container>
      ),
      'lido-flash-card': <lido-flash-card {...props}>{children}</lido-flash-card>,
      'lido-col': <lido-col {...props}>{children}</lido-col>,
      'lido-trace': <lido-trace {...props}>{children}</lido-trace>,
      'lido-image': <lido-image {...props}>{children}</lido-image>,
      'lido-row': <lido-row {...props}>{children}</lido-row>,
      'lido-text': <lido-text {...props}>{children}</lido-text>,
      'lido-pos': <lido-pos {...props}>{children}</lido-pos>,
      'lido-shape': <lido-shape {...props}>{children}</lido-shape>,
      'lido-wrap': <lido-wrap {...props}>{children}</lido-wrap>,
      'lido-random': <lido-random {...props}>{children}</lido-random>,
      'lido-avatar': <lido-avatar {...props}>{children}</lido-avatar>,
      'lido-cell': <lido-cell {...props}>{children}</lido-cell>,
      'lido-slide-fill': <lido-slide-fill {...props}>{children}</lido-slide-fill>,
      'lido-float': <lido-float {...props}>{children}</lido-float>,
    };

    // If the tag is known, return the corresponding Stencil component, otherwise log a warning
    if (componentMapping[tagName]) {
      return componentMapping[tagName];
    } else {
      console.warn(`Unknown tag: ${tagName}`);
      return null;
    }
  }

  /**
   * Parses the `lido-container` elements from the XML root element and stores them in the `containers` state.
   *
   * @param rootElement - The root element of the parsed XML document.
   */
  private parseContainers(rootElement: Element) {
    const containerElements = rootElement.querySelectorAll('lido-container');

    const containers = Array.from(containerElements).map(container => {
      // Return a factory function that generates a fresh JSX node each time
      return () => this.parseElement(container);
    });

    this.containers = containers;
  }

  // update arrow visibility

  private updateArrowVisibility = () => {
    setTimeout(() => {
      const containerElement = this.el.querySelector('lido-container');
      const prevbtn = containerElement.getAttribute('show-prev-button');
      const nextbtn = containerElement.getAttribute('show-next-button');
      const rightbtn = this.el.querySelector('#lido-arrow-right') as HTMLElement;
      const leftbtn = this.el.querySelector('#lido-arrow-left') as HTMLElement;

      if (prevbtn !== 'true') {
        leftbtn.style.visibility = 'hidden';
      } else {
        leftbtn.style.visibility = 'visible';
      }

      if (nextbtn !== 'true') {
        rightbtn.style.visibility = 'hidden';
      } else {
        rightbtn.style.visibility = 'visible';
      }
    }, 100);
  };

  private async btnpopup() {
    setCancelBtnPopup(false);
    await AudioPlayer.getI().stop();

    const container = document.getElementById(LidoContainer);
    const allele = container.querySelectorAll('*');

    for (const el of Array.from(allele)) {
      if (getCancelBtnPopup()) break;

      const tabIndex = el.getAttribute('tab-index');
      const htmlel = el as HTMLElement;

      if (tabIndex && Number(tabIndex) > 0) {
        await AudioPlayer.getI().play(htmlel);

        if (getCancelBtnPopup()) {
          await AudioPlayer.getI().stop();
          break;
        }

        await new Promise(resolve => setTimeout(resolve, 300));
      }
    }
  }

  popUpClick = (comment: string) => {
    const alertElement = this.el.querySelector('.lido-alert-popup');
    this.exitFlag = false;
    if (alertElement) {
      if (comment === 'exit') {
        dispatchGameExitEvent();
        clearLocalStorage();
        alertElement.remove();
      } else {
        alertElement.remove();
      }
    }
  };
  private scaleNavbarContainer() {
    setTimeout(() => {
      const navBar = document.querySelector('.lido-dot-container') as HTMLElement;
      if (!navBar) return;

      if ((window.innerWidth === 1600 && window.innerHeight === 900) || (window.innerWidth === 900 && window.innerHeight === 1600)) {
        const exit_and_audio_margin = document.querySelectorAll<HTMLElement>('.lido-exit-button, #main-audio');
        exit_and_audio_margin.forEach(el => {
          el.style.marginLeft = '10px';
          el.style.marginRight = '10px';
        });
      }
      if (window.innerWidth > window.innerHeight) {
        navBar.style.top = '6%';
      } else {
        navBar.style.top = '3.5%';
      }

      // Apply the scale to the navbar
      navBar.style.transform = `translate(-50%, -50%)`;
      navBar.style.visibility = 'visible';

      Array.from(navBar.children).forEach(el => {
        const item = el as HTMLElement;
        item.style.transform = `scale(${calculateScale()})`;
      });

      navBar.style.width = window.outerWidth + 'px';
    }, 100);
  }

  /**
   * Renders navigation dots for each container, indicating the progress of the user.
   * Clicking on a dot allows the user to jump to a specific container.
   */

  private renderDots() {
    const style = { pointerEvents: this.canplay ? 'none' : '' };
    return (
      <div id="lido-dot-indicator" class="lido-dot-container">
        <div
          class="lido-exit-button popup
        -button"
          onClick={() => {
            this.exitFlag = true;
            AudioPlayer.getI().stop();
          }}
        >
          <lido-image src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Navbar-buttons/Close.svg"></lido-image>
        </div>
        <div class="lido-btn-dot-container">
          {/* Navigation arrows and dots for container navigation */}
          <div
            id="lido-arrow-left"
            onClick={event => {
              console.log('Target:', event.target); // What was clicked
              console.log('Current Target:', event.currentTarget); // Where the onClick is bound
              console.log('✅ Button clicked - prevBtn action triggered');
              executeActions("this.nextBtn='true'", event.currentTarget as HTMLElement);
            }}
          >
            <lido-image src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Navbar-buttons/Previous.svg" />
          </div>

          {this.containers.map((_, index) => (
            <div class="parent_dots">
              <span
                class={`lido-dot ${index < this.currentContainerIndex ? 'completed' : index === this.currentContainerIndex ? 'current' : ''}`}
                onClick={() => this.jumpToContainer(index)}
                style={style}
              ></span>
            </div>
          ))}
          <div
            id="lido-arrow-right"
            onClick={event => {
              console.log('Target:', event.target); // What was clicked
              console.log('Current Target:', event.currentTarget); // Where the onClick is bound
              console.log('✅ Button clicked - nextBtn action triggered');
              executeActions("this.nextBtn='true'", event.currentTarget as HTMLElement);
            }}
          >
            <lido-image src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Navbar-buttons/Next.svg" />
          </div>
        </div>
        <div id="main-audio" class="popup-button" onClick={() => this.btnpopup()}>
          <lido-image visible="true" src="https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/Navbar-buttons/Audio%20icon.svg"></lido-image>
        </div>
      </div>
    );
  }

  /**
   * Jumps to a specific container based on the index of the dot clicked.
   *
   * @param index - The index of the container to jump to.
   */
  private jumpToContainer(index: number) {
    this.NextContainerKey(index);
    // this.currentContainerIndex = index;
    // this.containers = [...this.containers]; // Trigger re-render
  }

  render() {
    console.log('🚀 ~ LidoHome ~ render ~ this.containers:', this);
    if (!this.xmlData) {
      // If no XML data is provided, prompt the user to provide it
      return <div>Please provide XML data.</div>;
    }

    return (
      <Host class="lido-home" index={this.currentContainerIndex} totalIndex={this.containers.length}>
        {/* Render the current container */}
        <div key={this.currentContainerIndex}>{this.containers[this.currentContainerIndex]?.()}</div>

        {/* Render navigation dots below the container */}

        {this.showDotsandbtn && this.renderDots()}

        {/* Exit button */}
        {this.exitFlag && (
          <div class="lido-alert-parent">
            <div class="lido-alert-popup">
              <lido-cell
                class="lido-alert-content"
                visible="true"
                layout="col"
                width="720px"
                height="360px"
                bg-color="#fff"
                border-radius="16px"
                onEntry="this.box-shadow= '0 4px 8px 0 rgba(0, 0, 0, 0.25)';"
              >
                {/* onEntry="this.box-shadow= '0 4px 8px 0 rgba(0, 0, 0, 0.25)'; this.margin-bottom = ' -36px';" */}
                <lido-text
                  visible="true"
                  string="Do you want to exit?"
                  width="622px"
                  height="57px"
                  class="popup-exit-text"
                  font-size="40px"
                  onEntry="this.margin-bottom =' -36px';"
                ></lido-text>
                <lido-cell visible="true" layout="row" width="80%" class="btn-cell">
                  <lido-text
                    visible="true"
                    string="EXIT"
                    width="240px"
                    height="105px"
                    font-size="24px"
                    margin="0px 50px 0px 0px"
                    class="popup-button"
                    onClick={() => this.popUpClick('exit')}
                    borderRadius="16px"
                    onEntry='this.color="#F34D08"; this.font-weight="700"; this.box-shadow="0 2px 0 #F34D08";'
                    fontFamily="Baloo Bhai 2"
                    font-weight="700"
                    bgColor="white"
                    border-radius="16px"
                  ></lido-text>
                  <lido-text
                    visible="true"
                    string="KEEP PLAYING"
                    width="280px"
                    height="105px"
                    font-size="24px"
                    class=" popup-button"
                    onClick={() => this.popUpClick('cancel')}
                    borderRadius="16px"
                    onEntry='this.color=white; this.font-weight="700"; this.box-shadow="0 2px 0 #F34D08";'
                    font-family="Baloo Bhai 2"
                    font-weight="700"
                    bgColor="#F34D08"
                    border-radius="16px"
                  ></lido-text>
                </lido-cell>
              </lido-cell>
            </div>
          </div>
        )}

        {/* Show completion message if all containers have been displayed */}
        {this.showCompletionMessage && <div class="lido-snackbar">All containers have been displayed!</div>}
      </Host>
    );
  }
}
