import { Component, Element, Host, Prop, State, h } from '@stencil/core';
import { attachSpeakIcon, handlingChildElements, initEventsForElement, setVisibilityWithDelay, parseProp, speakIcon } from '../../utils/utils';
import { max } from 'mathjs';

/**
 * @component LidoCell
 *
 * A flexible UI cell component configurable via props like size, position, visibility,
 * background, and events. Supports layout flows (`wrap`, `flex`, `row`, `col`, `pos`, `random`), accessibility,
 * audio, and dynamic child management for rich interactive content.
 */
@Component({
  tag: 'lido-cell',
  styleUrl: 'lido-cell.css',
  shadow: false,
})
export class LidoCell {
  /**
   * Controls whether the speak icon should appear directly on the top right corner of targeted element if it is true.
   */
  @Prop() showSpeakIcon: boolean = false;
  /**
   * Defines the width of the scrollbar within the cell (e.g., '14px').
   * Defaults to '0px' if not specified, effectively hiding the scrollbar.
   */
  @Prop() scrollbarWidth: string = '';
  /**
   * The unique identifier for the column component.
   */
  @Prop() id: string = '';

  /**
   * The value associated with the column component. Typically used for internal logic.
   */
  @Prop() value: string = '';

  /**
   * The height of the column component (CSS value, e.g., '100px', '50%').
   */
  @Prop() height: string = 'auto';

  /**
   * The width of the column component (CSS value, e.g., '100px', '50%').
   */
  @Prop() width: string = 'auto';

  /**
   * The ARIA label of the container. Used for accessibility to indicate the purpose of the element.
   */
  @Prop() ariaLabel: string = '';

  /**
   * The ARIA hidden attribute of the container. Used for accessibility to hide the element.
   */
  @Prop() ariaHidden: string = '';

  /**
   * The x-coordinate (left position) of the column within its container (CSS value, e.g., '10px', '5vw').
   */
  @Prop() x: string = '0px';

  /**
   * The y-coordinate (top position) of the column within its container (CSS value, e.g., '10px', '5vh').
   */
  @Prop() y: string = '0px';

  /**
   * The z-index of the column to control stacking order.
   */
  @Prop() z: string = '0';

  /**
   * The gap between child elements inside the column (CSS value, e.g., '10px', '5px 10px').
   * This is applicable when the layout is set to `wrap` or `flex`.
   */
  @Prop() gap: string = '0';

  /**
   * The background color of the column (CSS color value, e.g., '#FFFFFF', 'blue').
   */
  @Prop() bgColor: string = '';

  /**
   * Defines the type of the column, which can be used for styling or specific logic handling.
   */
  @Prop() type: string = '';

  /**
   * The tab index value, used to set the tab order of the column for keyboard navigation.
   */
  @Prop() tabIndex: number = 0;

  /**
   * A boolean that controls whether the column is visible (`true`) or hidden (`false`).
   */
  @Prop() visible: string = 'false';

  /**
   * Audio file URL or identifier for sound that will be associated with the column.
   */
  @Prop() audio: string = '';

  /**
   * Event handler for a touch event, where a custom function can be triggered when the column is touched.
   */
  @Prop() onTouch: string = '';

  /**
   * Event handler for an Incorrect matching action, which can be used to trigger custom logic when the action is incorrect.
   */
  @Prop() onInCorrect: string = '';

  /**
   * Event handler for a Correct matching action, which can be used to hide the column or trigger other custom logic.
   */
  @Prop() onCorrect: string = '';

  /**
   * Event handler for when the column is entered, which can be used to initiate specific behaviors on entry.
   */
  @Prop() onEntry: string = '';

  /**
   * Reference to the HTML element that represents this component.
   */
  @Element() el: HTMLElement;

  /**
   * The number of child elements that should be displayed inside the row.
   * This value is dynamically adjusted based on `minLength` and `maxLength`.
   */
  @Prop() childElementsLength: number = 9999;

  /**
   * The minimum number of child elements that must be displayed inside the row.
   * If `childElementsLength` is less than this value, additional elements may be shown to meet this minimum.
   */
  @Prop() minLength: number = 0;

  /**
   * The maximum number of child elements that can be displayed inside the row.
   * If `childElementsLength` exceeds this value, excess elements will be hidden.
   */
  @Prop() maxLength: number = 9999;

  /**
   * Determines the layout behavior of the component's children.
   *
   * - `wrap`: Applies a grid layout to the children, allowing them to wrap automatically in a grid format.
   * - `flex`: Applies a flex layout with wrapping behavior (`flex-wrap`).
   * - `col`: Arranges children in a single column using a vertical flex direction.
   * - `row`: Arranges children in a single row using a horizontal flex direction.
   * - `pos`: Applies absolute positioning to children, allowing manual placement using `x` and `y` values.
   * - `random`: Positions child elements randomly within the container using absolute positioning.
   *
   * Default: `'wrap'`
   */
  @Prop() layout: string = 'wrap';

  /**
   * The minimum number of drag elements that must be dropped inside the Drop element.
   */
  @Prop() minDrops: number = 1;

  /**
   * The Maximum number of drag elements that can be dropped inside the Drop element.
   */
  @Prop() maxDrops: number = 1;

  /**
   * CSS margin value applied to each child element inside the container.
   * Accepts standard CSS margin formats (e.g., '10px', '5px 10px', etc.).
   */
  @Prop() margin: string = '';

  /**
   * CSS padding value applied to each child element inside the container.
   * Accepts standard CSS padding formats (e.g., '10px', '5px 10px', etc.).
   */
  @Prop() padding: string = '';

  /**
   * CSS align-items property to control the alignment of flex items.
   * Example: 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'.
   */
  @Prop() alignItems: string = '';

  /**
   * CSS filter to apply border radius to the image.
   * Example: '10px' for  images.
   */
  @Prop() borderRadius: string = '0px';

  /**
   * CSS flex direction for the component, which can be used to control the layout of child elements.
   * Accepts values like 'row', 'column', etc.
   */
  @Prop() flexDirection: string = '';

  /**
   * Stores the dynamic style properties for the component, allowing runtime updates to styling.
   */
  @State() style: { [key: string]: string } = {};

  /**
   * Delay in milliseconds to make the cell visible after mount.
   */
  @Prop() delayVisible: string = '';
   /**
     * When set to true, disables the speak functionality of long press for this component and its children.
     */
    @Prop() disableSpeak: boolean = false;

  /**
   * This lifecycle hook is called after the component is rendered in the DOM.
   * It initializes events for the column based on the provided type.
   */
  componentDidLoad() {
    setVisibilityWithDelay(this.el, this.delayVisible);

    initEventsForElement(this.el, this.type);

    handlingChildElements(this.el, this.minLength, this.maxLength, this.childElementsLength);
    // Select all direct child elements of the component
    // const slotElements = this.el.querySelectorAll('.lido-random > *');
    // if (!slotElements) return;
    // // Iterate over each child and apply random positions
    // slotElements.forEach((child: HTMLElement) => {
    //   const randomTop = Math.random() * 100; // Random value between 0 and 100 for vertical position
    //   const randomLeft = Math.random() * 100; // Random value between 0 and 100 for horizontal position

    //   child.style.top = `${randomTop}%`;
    //   child.style.left = `${randomLeft}%`;
    // });

    setTimeout(() => {
      const check_random_attr = this.el.className.includes('lido-random') ? this.el : null;

      if (check_random_attr) {
        const parentcontainer = check_random_attr.parentElement;

        if (!parentcontainer) return;

        // Get parent size

        const parentWidth = parentcontainer.offsetWidth;

        const parentHeight = parentcontainer.offsetHeight;

        // Place child elements randomly inside parent
        const children = Array.from(check_random_attr.children) as HTMLElement[];

        children.forEach(child => {
          const childWidth = child.offsetWidth;
          const childHeight = child.offsetHeight;

          const maxLeft = parentWidth - childWidth;
          const maxTop = parentHeight - childHeight;

          const randLeft = Math.random() * maxLeft;
          const randTop = Math.random() * maxTop;

          child.style.position = 'absolute';
          child.style.left = `${randLeft}px`;
          child.style.top = `${randTop}px`;
        });
      }
    }, 50);
    if (this.showSpeakIcon) {
      attachSpeakIcon(this.el);
    }
  }

  /**
   * Lifecycle method that runs before the component is rendered.
   * Initializes styles and sets up event listeners for resize and load events.
   */
  componentWillLoad() {
    this.updateStyles();

    window.addEventListener('resize', this.updateStyles.bind(this));
    window.addEventListener('load', this.updateStyles.bind(this));
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this.updateStyles.bind(this));
    window.removeEventListener('load', this.updateStyles.bind(this));
  }

  updateStyles() {
    const orientation = window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
    this.style = {
      'height': parseProp(this.height, orientation),
      'width': parseProp(this.width, orientation),
      'backgroundColor': parseProp(this.bgColor, orientation),
      'top': parseProp(this.y, orientation),
      'left': parseProp(this.x, orientation),
      'zIndex': this.z,
      'margin': parseProp(this.margin, orientation),
      'padding': parseProp(this.padding, orientation),
      'borderRadius': parseProp(this.borderRadius, orientation),
      'gap': parseProp(this.gap, orientation),
      '--scrollbar-width': parseProp(this.scrollbarWidth || '0px', orientation),
      'display': JSON.parse(parseProp(`${this.visible}`, orientation))
        ? parseProp(this.layout, orientation) === 'wrap'
          ? 'grid'
          : parseProp(this.layout, orientation) === 'pos' || parseProp(this.layout, orientation) === 'random'
          ? 'block'
          : 'flex'
        : 'none',
      'flexDirection': this.flexDirection ? parseProp(this.flexDirection, orientation) : '',
      'alignItems': this.alignItems ? parseProp(this.alignItems, orientation) : '',
    };
    this.el.className = `lido-${parseProp(this.layout, orientation)}`;
  }
  render() {
    return (
      <Host
        id={this.id}
        class="lido-cell"
        value={this.value}
        type={this.type}
        tab-index={this.tabIndex}
        style={this.style}
        minDrops={this.minDrops}
        maxDrops={this.maxDrops}
        aria-label={this.ariaLabel}
        aria-hidden={this.ariaHidden}
        audio={this.audio}
        onTouch={this.onTouch}
        onCorrect={this.onCorrect}
        onInCorrect={this.onInCorrect}
        onEntry={this.onEntry}
        flex-direction={this.flexDirection}
        disable-speak={this.disableSpeak}
      >
        {/* Slot for child elements */}
        <slot />
      </Host>
    );
  }
}
