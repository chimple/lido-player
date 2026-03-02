import { Component, Prop, h, State, Host, Watch, Element, getAssetPath } from '@stencil/core';
import {
  DragSelectedMapKey,
  DragMapKey,
  SelectedValuesKey,
  NextContainerKey,
  PrevContainerKey,
  DropLength,
  DropHasDrag,
  GameExitKey,
  LidoContainer,
  exitUrl,
  prevUrl,
  nextUrl,
  speakUrl,
  ActivityScoreKey,
  LIDO_COMMON_AUDIO_PATH,
  TemplateID,
} from '../../utils/constants';
import { dispatchActivityChangeEvent, dispatchGameCompletedEvent, dispatchGameExitEvent } from '../../utils/customEvents';

import {
  calculateScale,
  getCancelBtnPopup,
  setCancelBtnPopup,
  executeActions,
  triggerPrevcontainer,
  convertUrlToRelative,
  triggerNextContainer,
  matchStringPattern,
  speakText,
} from '../../utils/utils';

import { AudioPlayer } from '../../utils/audioPlayer';
import { generateUUIDFallback } from '../../utils/utils';
import i18next from '../../utils/i18n';

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
  @Prop() commonAudioPath?: string="";

  /** Boolean to show or hide navigation buttons */
  @Prop() showNav: boolean = true;

  /** Array of active container indexes to be rendered */
  @Prop() activeContainerIndexes: number[] = [];

  /** Language to apply to all texts */
  @Prop() Lang?: string = '';
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
   * URL for the avatar Rive file.
   */
  @Prop() avatarUrl: string;

  /** Unique identifier for the component instance.
   * If not provided, a UUID is generated to ensure uniqueness.
   */
  @Prop() uuid: string = generateUUIDFallback();

  /**
   * Stores the resolved navigation bar icons.
   * Each key will hold either a valid custom URL or the default ConstNavIcons URL.
   */
  @State() navBarIcons: { exit: string; prev: string; next: string; speak: string };

  @Element() el: HTMLElement;

  /**
   * Current index of the container being displayed.
   */
  @State() currentContainerIndex: number | null = this.initialIndex;

  /**
   * Boolean that controls the visibility of the exit confirmation popup.
   * This is set to true when the user attempts to exit the game.
   */
  @State() exitFlag: boolean = false;

  /**
   * Stores the list of container-rendering functions parsed from XML.
   */
  @State() containers: (() => any)[] = [];

  /** Holds the parsed data loaded from data.json.Each object in the array represents the dynamic data
    for one XML container (matched by index).
  */
  @State() templateData: Record<string, any>[] = [];

  /** Regex used to detect placeholders in XML like {question_text}.It captures the key inside curly braces so it can be replaced
     with corresponding values from templateData during rendering.
  */
  private readonly placeholderRegex = /\{([a-zA-Z0-9_]+)\}/g;

  @Watch('Lang')
  onLangChange(newLang: string) {
    this.setLanguage(newLang);
    // re-render all containers with updated locale
    this.containers = [...this.containers];
  }

  private setLanguage(lang?: string) {
    const effectiveLang = lang || i18next.language; // fallback to current
    i18next.changeLanguage(effectiveLang);
    // Trigger re-render of containers to update <lido-text> dynamically
    this.containers = [...this.containers];
  }
  /**
   * Event handler for transitioning to the next container in the sequence.
   * If the last container is reached, it shows a completion message.
   */
  NextContainerKey = (index?: number | undefined) => {
    console.log(
      '🚀 ~ LidoHome ~ NextContainerKey ~',
      'ths uuid',
      this.uuid,
      'doc uuid',
      document.querySelector('lido-home').getAttribute('uuid'),
      'are both equal : ',
      this.uuid === document.querySelector('lido-home')?.getAttribute('uuid'),
    );
    if (this.uuid !== document.querySelector('lido-home')?.getAttribute('uuid')) return;

    // console.log("👉 NextContainerKey CALLED with index:", index);
    if (index != undefined && index == this.currentContainerIndex) return;
    // Clear selected values from localStorage on container transition
    // clearmemoryStorage();

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
      // const event = new CustomEvent('gameCompleted');
      // window.dispatchEvent(event);
      localStorage.removeItem(ActivityScoreKey);
      dispatchGameCompletedEvent();
      this.currentContainerIndex = null;
    }
    // Reset the containers array to trigger a re-render
    this.containers = [...this.containers];
    this.updateArrowVisibility();
  };

  PrevContainerKey = (index?: number | undefined) => {
    console.log('👉 PrevContainerKey CALLED with index:', index);
    if (this.currentContainerIndex <= 0) return;

    // Clear selected values from localStorage on container transition
    // clearmemoryStorage();

    // Move to the previous container
    this.currentContainerIndex--;

    // Dispatch event to update the UI or state
    dispatchActivityChangeEvent(this.currentContainerIndex);

    // Refresh container array and update button visibility
    this.containers = [...this.containers];
    this.updateArrowVisibility();
  };

  @Watch('commonAudioPath')
  onCommonAudioPathChange(path: string) {
    this.publishCommonAudioPath(path);
  }

  /**
   * Lifecycle method that runs before the component is loaded. It sets up event listeners for transitioning
   * between containers and parses the XML data into containers.
   */
  async componentWillLoad() {
    this.navBarIcons = {
      exit: this.exitButtonUrl || exitUrl,
      prev: this.prevButtonUrl || prevUrl,
      next: this.nextButtonUrl || nextUrl,
      speak: this.speakerButtonUrl || speakUrl,
    };

    if (this.currentContainerIndex === 0) {
      localStorage.removeItem(ActivityScoreKey);
      // clearmemoryStorage();
    }

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
    await this.loadTemplateData();

    const trimmed = (this.xmlData|| '').trim();
    if (trimmed.startsWith('<main')) {
        this.parseXMLData(this.xmlData);
      } else {
        const finalXml = await this.decompressBrotliBase64(this.xmlData);
        this.parseXMLData(finalXml);
      }
    // Parse the provided XML data
    

    // Remove stored values in localStorage when the page is about to be unloaded
    window.addEventListener('beforeunload', () => {
      AudioPlayer.getI().stop();
      localStorage.removeItem(ActivityScoreKey);
      // clearmemoryStorage();
    });
  }
  private async loadTemplateData() {
    if (!this.baseUrl) {
      return;
    }

    const candidatePaths = [`${this.baseUrl.replace(/\/+$/, '')}/data.json`];
    
    for (const path of candidatePaths) {
      try {
        const resolvedPath = path.startsWith('http') ? path : getAssetPath(path);
        const response = await fetch(resolvedPath);
        if (!response.ok) {
          continue;
        }

        const payload = await response.json();
        if (Array.isArray(payload)) {
          this.templateData = payload.filter(item => item && typeof item === 'object');
          if (this.templateData.length) {
            return;
          }
        }
      } catch (error) {
        console.warn(`[LidoHome] Failed to load template data from ${path}`, error);
      }
    }
  }
    private async decompressBrotliBase64(base64: string): Promise<string> {
    // Normalize payload (raw base64 / quoted / data URL / escaped newlines)
    base64 = (base64 || '').trim().replace(/^data:.*;base64,/, '').replace(/^['"]|['"]$/g, '').replace(/\\n/g, '').replace(/\s+/g, '').replace(/-/g, '+').replace(/_/g, '/');
    while (base64.length % 4) {
      base64 += '=';
    }
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    // Native Brotli first
    if ('DecompressionStream' in window) {
      try {
        const stream = new (window as any).DecompressionStream('br');
        const blob = new Blob([bytes]);
        const decompressedStream = blob.stream().pipeThrough(stream);
        const buffer = await new Response(decompressedStream).arrayBuffer();
        const decoded = new TextDecoder().decode(buffer);
        return decoded;
      } catch (nativeErr) {
        console.warn('[LidoRoot] Native Brotli unavailable, trying WASM fallback.', nativeErr);
      }
    }
    // Pure-JS fallback (no wasm asset required)
    try {
      const brotliDecodeModule = await import('brotli/dec/decode');
      const brotliDecompressBuffer =
        (brotliDecodeModule as any).BrotliDecompressBuffer ||
        (brotliDecodeModule as any).default?.BrotliDecompressBuffer;
      if (typeof brotliDecompressBuffer !== 'function') {
        throw new Error('BrotliDecompressBuffer function not found in brotli/dec/decode');
      }
      const decompressedBytes = brotliDecompressBuffer(bytes) as Uint8Array;
      const decoded = new TextDecoder().decode(decompressedBytes);  
      return decoded;
    } catch (fallbackErr) {   
      throw new Error(
        `Brotli decompression failed (native + fallback): ${fallbackErr instanceof Error ? fallbackErr.message : String(fallbackErr)}`,
      );
    }
  }

  @State() showDotsandbtn: boolean = false;
  componentDidLoad() {
    this.publishCommonAudioPath(this.commonAudioPath);
    setTimeout(() => {
      this.showDotsandbtn = true;
    }, 10);
    this.updateArrowVisibility();

    // if (this.height == '' || this.height === '0' || this.height === '0px' || this.height === '0%') {
    this.scaleNavbarContainer();
    // } else {
    //   this.updateBackgroundImage();
    // }
    // this.currentContainerIndex = 0;

    this.handleIcons();

    window.addEventListener('resize', () => {
      this.scaleNavbarContainer(); // re-scale navbar on resize
    });
  }
  private publishCommonAudioPath(path?: string) {
    if (!path) return;
    const cleanPath = path.replace(/\/+$/, '');
    (window as any)[LIDO_COMMON_AUDIO_PATH] = cleanPath;

    console.log('[LidoHome] Published common audio path:', cleanPath);

    // Dispatch a global event so LidoText knows the path is ready
    window.dispatchEvent(new Event('lidoCommonAudioPathReady'));
  }

  private async handleIcons() {
    const checkUrl = async (url?: string, containerUrl?: string, fallback?: string) => {
      // if (!url && !containerUrl) return fallback ?? false;
      if (url) return convertUrlToRelative(url);
      if (containerUrl) return convertUrlToRelative(containerUrl);
      return fallback ?? false;
      // try {
      //   let res = await fetch(url);
      //   if (res.ok && url) {
      //     return url;
      //   } else {
      //     if (!containerUrl) return fallback ?? false;
      //     res = await fetch(containerUrl);
      //     return res.ok ? containerUrl : fallback ?? false;
      //   }
      // } catch {
      //   return fallback ?? false;
      // }
    };

    const container = document.getElementById(LidoContainer) as HTMLElement;
    const containerExit = container.getAttribute('exit-button-url');
    const containerPrev = container.getAttribute('prev-button-url');
    const containerNext = container.getAttribute('next-button-url');
    const containerSpeak = container.getAttribute('speak-button-url') ?? container.getAttribute('speaker-button-url');

    this.navBarIcons = {
      exit: `${await checkUrl(this.exitButtonUrl, containerExit, exitUrl)}`,
      prev: `${await checkUrl(this.prevButtonUrl, containerPrev, prevUrl)}`,
      next: `${await checkUrl(this.nextButtonUrl, containerNext, nextUrl)}`,
      speak: `${await checkUrl(this.speakerButtonUrl, containerSpeak, speakUrl)}`,
    };
  }

  updateBackgroundImage() {
    const container = document.querySelector(LidoContainer) as HTMLElement;
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
  private resolveContainerData(index: number): Record<string, any> | null {
    if (!this.templateData?.length) return null;
    if (this.templateData[index]) return this.templateData[index];
    if (this.templateData.length === 1) return this.templateData[0];
    return null;
  }

  private replacePlaceholders(value: string, data: Record<string, any> | null): string {
    if (!data || !value) return value;
    return value.replace(this.placeholderRegex, (_match, key: string) => {
      const replacement = data[key];
      return replacement === undefined || replacement === null ? `{${key}}` : String(replacement);
    });
  }

  private applyDataToElement(sourceElement: Element, data: Record<string, any> | null): Element {
    if (!data) return sourceElement;

    const clonedElement = sourceElement.cloneNode(true) as Element;
    const allElements = [clonedElement, ...Array.from(clonedElement.querySelectorAll('*'))];

    allElements.forEach(node => {
      Array.from(node.attributes).forEach(attr => {
        const nextValue = this.replacePlaceholders(attr.value, data);
        if (nextValue !== attr.value) {
          node.setAttribute(attr.name, nextValue);
        }
      });
    });

    const walker = clonedElement.ownerDocument.createTreeWalker(clonedElement, NodeFilter.SHOW_TEXT);
    let textNode = walker.nextNode();
    while (textNode) {
      const currentValue = textNode.textContent || '';
      const nextValue = this.replacePlaceholders(currentValue, data);
      if (nextValue !== currentValue) {
        textNode.textContent = nextValue;
      }
      textNode = walker.nextNode();
    }

    return clonedElement;
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
    if (tagName === 'lido-text' && props.string) {
      props.string = i18next.t(props.string);
    }

    if (tagName === 'lido-text' && props.string) {
      props.string = i18next.t(props.string);
    }
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
      'lido-keyboard': <lido-keyboard {...props}>{children}</lido-keyboard>,
      'lido-math-matrix': <lido-math-matrix {...props}>{children}</lido-math-matrix>,
      'lido-balance': <lido-balance {...props}>{children}</lido-balance>,
      'lido-calculator': <lido-calculator {...props}>{children}</lido-calculator>,
      'lido-canvas': <lido-canvas {...props}>{children}</lido-canvas>,
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

    const containers = Array.from(containerElements)
      .map((container, index) => {
        if (this.activeContainerIndexes.length && !this.activeContainerIndexes.includes(index)) return;
        const dataForContainer = this.resolveContainerData(index);
        const hydratedContainer = this.applyDataToElement(container, dataForContainer);
        // Return a factory function that generates a fresh JSX node each time
        return () => this.parseElement(hydratedContainer);
      })
      .filter(Boolean); // Remove any undefined entries

    this.containers = containers;
  }

  // update arrow visibility

  private updateArrowVisibility = () => {
    if (!this.showNav) return;
    setTimeout(() => {
      const containerElement = this.el.querySelector('lido-container');
      if (!containerElement) return;
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
  private areAllDropsFilled(): boolean {
    const drops = Array.from(document.querySelectorAll('[type="drop"]'));
    const drags = Array.from(document.querySelectorAll('[type="drag"]')).filter(drag => drag.getAttribute('drop-to'));

    return drops.every(drop => {
      const dropId = drop.id;
      return drags.some(drag => drag.getAttribute('drop-to') === dropId);
    });
  }

  private async btnpopup() {
    setCancelBtnPopup(false);
    await AudioPlayer.getI().stop();

    const container = document.getElementById(LidoContainer) as HTMLElement;
    const allele = container.querySelectorAll('*');
    const templateId = container.getAttribute(TemplateID)
    if(templateId){
      const instructEl = this.el.querySelector(`#${templateId}`);
      if(instructEl){
        await executeActions("this.speak='true';", instructEl as HTMLElement)
      }
    }
    
    for (const el of Array.from(allele)) {
      if (getCancelBtnPopup()) break;

      const tabIndex = el.getAttribute('tab-index');

      const htmlel = el as HTMLElement;

      if (tabIndex && Number(tabIndex) > 0) {
        if(el && el.getAttribute('disable-speak')!=='true'){
          await AudioPlayer.getI().play(htmlel);
        }
        

        if (getCancelBtnPopup()) {
          await AudioPlayer.getI().stop();
          break;
        }

        await new Promise(resolve => setTimeout(resolve, 300));
      }
    }
    if (this.areAllDropsFilled()) {
      const objectiveString = container['objective'];
      const objectiveArray = JSON.parse(localStorage.getItem(SelectedValuesKey) || '[]');
      const res = matchStringPattern(objectiveString, objectiveArray);
      console.log('Resultt', res);
      if (res) {
        triggerNextContainer();
      }
    } else {
      console.log('Not yet filled ');
    }
  }

  popUpClick = (comment: string) => {
    const alertElement = this.el.querySelector('.lido-alert-popup');
    this.exitFlag = false;
    if (alertElement) {
      if (comment === 'exit') {
        dispatchGameExitEvent();
        AudioPlayer.getI().stop();
        localStorage.removeItem(ActivityScoreKey);
        // clearmemoryStorage();
        alertElement.remove();
        this.currentContainerIndex = 0;
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
    }, 500);
  }

  /**
   * Renders navigation dots for each container, indicating the progress of the user.
   * Clicking on a dot allows the user to jump to a specific container.
   */

  private renderDots() {
    const style = { pointerEvents: this.canplay ? 'none' : '' };
    return (
      <div id="lido-dot-indicator" class="lido-dot-container" style={{ visibility: 'hidden' }}>
        <div
          class="lido-exit-button popup
        -button"
          onClick={() => {
            this.exitFlag = true;
            AudioPlayer.getI().stop();
          }}
          // style={{ visibility: this.showNav ? 'visible' : 'hidden' }}
        >
          <lido-image src={this.navBarIcons.exit}></lido-image>
        </div>
        <div class="lido-btn-dot-container">
          {/* Navigation arrows and dots for container navigation */}
          <div
            id="lido-arrow-left"
            onClick={() => {
              triggerPrevcontainer();
            }}
            // style={{ visibility: this.showNav ? 'visible' : 'hidden' }}
          >
            <lido-image src={this.navBarIcons.prev} />
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
            // style={{ visibility: this.showNav ? 'visible' : 'hidden' }}
          >
            <lido-image src={this.navBarIcons.next} />
          </div>
        </div>
        <div id="main-audio" class="popup-button" onClick={() => this.btnpopup()} >
          <lido-image visible="true" src={this.navBarIcons.speak}></lido-image>
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

    const style = {
      userSelect: 'none', // Prevent any field selection
    };

    return (
      <Host class="lido-home" uuid={this.uuid} template-id="" index={this.currentContainerIndex} totalIndex={this.containers.length} style={style}>
        {/* Render the current container */}
        <div key={this.currentContainerIndex}>{this.containers[this.currentContainerIndex]?.()}</div>
        {/* Render navigation dots below the container */}
        {this.renderDots()}
        {/* Exit button */}
        {this.exitFlag && (
          <div class="lido-alert-parent">
            <div class="lido-alert-popup">
              <lido-cell
                class="lido-alert-content"
                visible="true"
                layout="col"
                width="340px"
                height="210px"
                bg-color="#fff"
                border-radius="16px"
                onEntry="this.box-shadow= '0 4px 8px 0 rgba(0, 0, 0, 0.25)';"
              >
                {/* onEntry="this.box-shadow= '0 4px 8px 0 rgba(0, 0, 0, 0.25)'; this.margin-bottom = ' -36px';" */}
                <lido-text
                  visible="true"
                  string="Do you want to exit?"
                  width="294px"
                  height="38px"
                  class="popup-exit-text"
                  font-size="22px"
                  onEntry="this.margin-bottom =' -36px';"
                ></lido-text>
                <lido-cell visible="true" layout="row" width="294px" class="btn-cell">
                  <lido-text
                    visible="true"
                    string="Exit"
                    width="92px"
                    height="53px"
                    font-size="16px"
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
                    string="Continue playing"
                    width="155px"
                    height="53px"
                    font-size="16px"
                    class="popup-button"
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
      </Host>
    );
  }
}
