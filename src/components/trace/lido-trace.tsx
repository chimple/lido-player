import { Component, Prop, h, Host, State, Watch, Element } from '@stencil/core';
import { convertUrlToRelative, executeActions, triggerNextContainer,speakIcon, setVisibilityWithDelay, parseProp } from '../../utils/utils';
import { LidoContainer, TraceMode } from '../../utils/constants';
import { svg } from 'lit';

// Enum for different tracing modes

@Component({
  tag: 'lido-trace',
  styleUrl: 'lido-trace.css',
  shadow: false,
  assetsDirs: ['svg', 'images'], //  ← added “images” so finger.png is bundled
})
export class LidoTrace {
  /**
   * Controls whether the speak icon should appear directly on the top right corner of targeted element.
  */
  @Prop() showSpeakIcon: boolean = false;
  /**
   * Various configuration properties for `lido-trace`
   */
  /**
   * Unique identifier for this `lido-trace` component instance.
   */
  @Prop() id: string = '';

  /**
   * Source URL or path for the SVG file used in this component.
   */
  @Prop() svgSource: string = '';

  /**
 * Array of SVG URLs to be used for tracing, separated by semicolons.
 * This allows multiple SVGs to be loaded and traced in sequence.
 */
  @State() svgUrls: string[] = [];

  /**
   * Index of the currently active SVG in the `svgUrls` array.
   * This is used to track which SVG is currently being traced.
   */
  @State() currentSvgIndex: number = 0;

  /**
   * Specifies whether the component is currently in a moving state.
   * This can be used to control animations or transitions.
   * Defaults to `false`.
  */
  @State() moving: boolean = false;

  /**
   * A custom string value associated with the component for additional data or identification.
   */
  @Prop() value: string = '';

  /**
   * Specifies the height of the component container, accepts any valid CSS height value (e.g., `"100px"`, `"50%"`).
   */
  @Prop() height: string = 'auto';

  /**
   * Specifies the width of the component container, accepts any valid CSS width value (e.g., `"100px"`, `"50%"`).
   */
  @Prop() width: string = 'auto';

  /**
   * Defines the x-coordinate position (left offset) of the component container, using any valid CSS `left` value (e.g., `"10px"`, `"5%"`).
   */
  @Prop() x: string = '0px';

  /**
   * Defines the y-coordinate position (top offset) of the component container, using any valid CSS `top` value (e.g., `"10px"`, `"5%"`).
   */
  @Prop() y: string = '0px';

  /**
   * Sets the z-index of the component, controlling its stacking order on the page.
   */
  @Prop() z: string = '0';

  /**
   * Accessible label for screen readers, providing a textual description of the component's purpose.
   */
  @Prop() ariaLabel: string = '';

  /**
   * Controls visibility for assistive technologies. If `"true"`, the component is hidden from screen readers.
   */
  @Prop() ariaHidden: string = '';

  /**
   * Sets the tab order of the component within the page, enabling keyboard navigation.
   */
  @Prop() tabIndex: number = 0;

  /**
   * Mode for the tracing interaction, defining how users interact with the SVG paths.
   * Options may include `"noFlow"`, `"showFlow"`, `"freeTrace"`, `"blindTracing"`, and `"blindFreeTrace"`
   */
  @Prop() mode: string = TraceMode.ShowFlow;

  /**
   * URL for the finger hint image
   */
  @Prop() fingerHintUrl: string = 'https://aeakbcdznktpsbrfsgys.supabase.co/storage/v1/object/public/template-assets/trace/Tracing-hand.svg';

  /**
   * Event handler for an Incorrect Trace, which can be used to trigger custom logic when the action is incorrect.
   */
  @Prop() onInCorrect: string;

  /**
   * Event handler for a Correct Trace, which can be used to hide the column or trigger other custom logic.
   */
  @Prop() onCorrect: string;

  /**
   * Indicates whether to highlight the text associated with the SVG when the trace is completed.
   */
  @Prop() highlightTextId: string = '';

  /**
   * Indicates whether to play an animation trace when the SVG is completed.
   */
  @Prop() animationTrace: boolean = false;

  /**
   * Delay in milliseconds to make the cell visible after mount.
   */
  @Prop() delayVisible: string = '';

  @Element() el!: HTMLElement;

  @State() style: { [key: string]: string } = {};

  @State() fileIndex: number = -1;
  @State() isDragging: boolean = false;
  @State() activePointerId: number | null = null;

  /** ───────────────────────────────────────────────────────────
   *  NEW: idle‑timer + finger‑hint state
   *  ─────────────────────────────────────────────────────────── */
  @State() idleTimer: number | null = null;
  @State() fingerImg: SVGImageElement | null = null;

  // MODES = ['noFlow', 'showFlow', 'freeTrace', 'blindTracing', 'blindFreeTrace'];

  // Handle the pointermove event with optimizations
  // Update the path trace as the red circle moves
  @Watch('svgSource')
  @Watch('mode')
  async initializeSVG() {
    let state = {
      fileIndex: -1,
      currentPathIndex: 0,
      lastLength: 0,
      totalPathLength: 0,
      isDragging: false,
      circle: null as SVGCircleElement | null,
      paths: [] as SVGGeometryElement[],
      svg: null as SVGSVGElement | null,
      proximityThreshold: 100, // General proximity threshold
      freeTraceProximityThreshold: 50, // Reduced proximity threshold for free trace
      rafId: null as number | null,
      pointerMoveEvent: null as PointerEvent | null,
      activePointerId: null as number | null,
      mode: this.mode,
      flowMarkers: [] as SVGPolygonElement[],
      freeTraceLines: [] as SVGPathElement[],
      currentFreePath: [] as (SVGPathElement | null)[],
      lastPointerPos: null as { x: number; y: number } | null,
    };

    const url = this.svgUrls[this.currentSvgIndex];
    console.log("Loading SVG from URL:", url);
    if (!url || url.trim() === '') {
      console.error("No SVG URL provided or index out of bounds.");
      return;
    }
    const svgText = await this.fetchSVG(url);
    console.log("SVG fetched successfully\n");

    await this.loadAnotherSVG(state, true); // Load the first SVG
  }

  componentDidLoad() {
    setVisibilityWithDelay(this.el, this.delayVisible);
  }

  componentWillLoad() {

    this.updateStyles();
    window.addEventListener('resize', this.updateStyles.bind(this));
    window.addEventListener('load', this.updateStyles.bind(this));

    this.svgUrls = this.svgSource.split(';').map(s => s.trim());
    console.log("svgUrls", this.svgUrls);
    this.currentSvgIndex = 0;
    console.log("curentSvgIndex", this.currentSvgIndex);
    if(this.showSpeakIcon) {
      speakIcon(this.el);
      this.el.append(speakIcon(this.el));
    }
    this.initializeSVG();
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this.updateStyles.bind(this));
    window.removeEventListener('load', this.updateStyles.bind(this));
  }

  /** ───────────────────────────────────────────────────────────
   *  Idle‑timer helpers
   *  ─────────────────────────────────────────────────────────── */
  private resetIdleTimer(state: any) {
    if (this.idleTimer !== null) {
      clearTimeout(this.idleTimer);
      this.idleTimer = null;
    }
    this.idleTimer = window.setTimeout(() => {
      this.showFingerHint(state);
    }, 3000);
  }

  private showFingerHint(state: any) {
    if (this.fingerImg) return; // already showing

    const currentPath = state.paths[state.currentPathIndex];
    if (!currentPath) return;

    /**  FIX: centre the image on the path (was offset down‑right)  **/
    const IMG_SIZE = 40; // width & height of finger.png

    const img = document.createElementNS('http://www.w3.org/2000/svg', 'image');
    img.setAttributeNS('http://www.w3.org/1999/xlink', 'href', convertUrlToRelative(this.fingerHintUrl));
    img.setAttribute('width', `${IMG_SIZE}`);
    img.setAttribute('height', `${IMG_SIZE}`);
    img.setAttribute('id', 'lido-finger-hint');
    img.style.pointerEvents = 'none';
    img.style.opacity = '0.8';

    // place the image so its centre aligns with the path’s start point
    // const start = currentPath.getPointAtLength(0);
    img.setAttribute('x', '0');
    img.setAttribute('y', '0');

    // animateMotion
    const motion = document.createElementNS('http://www.w3.org/2000/svg', 'animateMotion');
    motion.setAttribute('dur', '2s');
    motion.setAttribute('repeatCount', 'indefinite');

    const mpath = document.createElementNS('http://www.w3.org/2000/svg', 'mpath');
    mpath.setAttributeNS('http://www.w3.org/1999/xlink', 'href', `#${currentPath.id}`);
    motion.appendChild(mpath);
    img.appendChild(motion);

    state.svg?.appendChild(img);
    this.fingerImg = img;
  }

  private hideFingerHint() {
    if (this.fingerImg && this.fingerImg.parentNode) {
      this.fingerImg.parentNode.removeChild(this.fingerImg);
    }
    this.fingerImg = null;
  }

  // Fetch the SVG file asynchronously
  async fetchSVG(url: string): Promise<string> {
  
    console.log(`Fetching SVG from: ${url}`);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch SVG (${url}): ${response.statusText}`);
    }
    return await response.text();
  }

  // to calculate the bounding box of all paths
  calculateBoundingBox(paths: SVGGeometryElement[], padding = 22) {
    let minX = Infinity,
      minY = Infinity,
      maxX = -Infinity,
      maxY = -Infinity;
    paths.forEach(path => {
      const length = path.getTotalLength();
      const numPoints = 100; // Number of points to sample along the path
      for (let i = 0; i <= numPoints; i++) {
        const point = path.getPointAtLength((i / numPoints) * length);
        if (point.x < minX) minX = point.x;
        if (point.y < minY) minY = point.y;
        if (point.x > maxX) maxX = point.x;
        if (point.y > maxY) maxY = point.y;
      }
    });
    // Apply padding
    minX -= padding;
    minY -= padding;
    maxX += padding;
    maxY += padding;
    return { minX, minY, maxX, maxY };
  }

  // Insert the fetched SVG into the container and adjust viewBox
  insertSVG(svgText: string) {
    const svgContainer = document.getElementById('lido-svgContainer') as HTMLElement;
    if (!svgContainer) return
    svgContainer.innerHTML = svgText;

    // After inserting, get the SVG element
    const svgElement = svgContainer.querySelector('svg') as SVGSVGElement;

    // Remove the width and height attributes from the SVG element
    svgElement.removeAttribute('width');
    svgElement.removeAttribute('height');

    // Get all paths
    const paths = svgElement.querySelectorAll('path, line') as NodeListOf<SVGGeometryElement>;

    // Calculate bounding box
    const bbox = this.calculateBoundingBox(Array.from(paths));

    // Set the viewBox to the bounding box
    const viewBoxWidth = bbox.maxX - bbox.minX;
    const viewBoxHeight = bbox.maxY - bbox.minY;
    svgElement.setAttribute('viewBox', `${bbox.minX} ${bbox.minY} ${viewBoxWidth} ${viewBoxHeight}`);
  }

  // Retrieve the SVG element from the container
  getSVGElement() {
    const svgContainer = document.getElementById('lido-svgContainer') as HTMLElement;
    return svgContainer.querySelector('svg');
  }

  // Get all path and line elements from the SVG
  getPaths(svg: SVGSVGElement) {
    return Array.from(svg.querySelectorAll('path, line'));
  }

  // Create a single dotted line with an arrow at the end for the entire path
  createFlowMarkersForPath(path: SVGGeometryElement) {

    if (!path) return;

    const svg = path.ownerSVGElement;
    if (!svg) return;

    // --- 1. Create the dotted line that follows the same path ---

    // Create a new <path> element that will visually represent the flow (dotted line)
    const dottedLine = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    // Copy the "d" (path drawing instructions) from the original path
    dottedLine.setAttribute('d', path.getAttribute('d') || '');


    dottedLine.setAttribute('stroke', 'blue');
    dottedLine.setAttribute('stroke-width', '2');

    // Define a repeating pattern of dashes: "6 units on, 6 units off"
    dottedLine.setAttribute('stroke-dasharray', '6,6'); 
    dottedLine.setAttribute('fill', 'none');

    // Add a class name for styling or later querying
    dottedLine.setAttribute('class', 'lido-flow-indicator');

    path.parentNode?.appendChild(dottedLine);

    // --- 2. Ensure we only add <defs> + marker once per SVG ---

    // Look for an existing <defs> section with our custom ID inside the SVG
    let defs = svg.querySelector('defs#lido-flow-defs');

    // If it doesn’t exist, create one and insert it at the top of the SVG
    if (!defs) {
      defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
      defs.setAttribute('id', 'lido-flow-defs');
      svg.insertBefore(defs, svg.firstChild); // defs should usually be at the beginning
    }

    // --- 3. Create a unique marker for this path ---

    const uniqueId = `arrow-${Math.random().toString(36)}`;

    // Create the <marker> element that defines the arrowhead
    const marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');


    marker.setAttribute('id', uniqueId);

    // Set the width/height of the marker viewport (10x10 units)
    marker.setAttribute('markerWidth', '10');
    marker.setAttribute('markerHeight', '10');

    // Reference point inside the marker (where the path will attach to arrow)
    marker.setAttribute('refX', '5');
    marker.setAttribute('refY', '5');

    // Automatically rotate arrowhead to match the path direction
    marker.setAttribute('orient', 'auto');

    // Scale the marker relative to the stroke width of the path
    marker.setAttribute('markerUnits', 'strokeWidth');

    // --- Create the arrow shape itself ---

    const arrowPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    // Define the arrowhead shape using SVG path commands
    arrowPath.setAttribute('d', 'M0,0 L10,5 L0,10 L2,5 Z'); 

    arrowPath.setAttribute('fill', 'blue');
    marker.appendChild(arrowPath);
    defs.appendChild(marker);

    // --- 4. Attach the arrow marker to the end of the dotted line  ---
  
    dottedLine.setAttribute('marker-end', `url(#${uniqueId})`);

    return dottedLine;
  }

  // Show or hide flow indicators based on mode
  updateFlowIndicators(state: any) {
    const indicators = state.svg.querySelectorAll('.lido-flow-indicator');
    indicators.forEach(indicator => {
      if (state.mode === TraceMode.NoFlow) {
        (indicator as HTMLElement).style.display = 'none';
      } else if (state.mode === TraceMode.ShowFlow) {
        (indicator as HTMLElement).style.display = 'block';
      }
    });
  }

  // Create a new path element for the drawing effect
  setupDrawingPath(state: any) {
    state.paths.forEach((path: any, index: number) => {
      const pathLength = path.getTotalLength();

      // /** give every path an id so <mpath> can follow it */
      path.setAttribute('id', 'lido-path-' + index); //  ← NEW

      // Create green path for tracing effect
      const greenPath = path.cloneNode() as SVGPathElement;
      greenPath.style.opacity = '100';
      greenPath.style['stroke-opacity'] = '100';
      // greenPath.setAttribute('stroke', 'green');
      const strokeWidth = path.style['stroke-width'] || path.getAttribute('stroke-width');
      greenPath.setAttribute('stroke-width', strokeWidth);
      greenPath.setAttribute('stroke-dasharray', pathLength.toString());
      greenPath.setAttribute('stroke-dashoffset', pathLength.toString()); // Hidden initially
      path.parentNode.appendChild(greenPath, path);

      path.setAttribute('class', 'lido-trace-path'); // Add class for easier reference
      greenPath.setAttribute('class', 'lido-trace-path-green'); // Add class for easier reference

      (path as any).greenPath = greenPath;
      path.classList.add(state.mode);

      // Conditionally hide or show the black path based on blind tracing mode
      if (state.mode === TraceMode.BlindTracing || state.mode === TraceMode.BlindFreeTrace) {
        // In blind tracing or blind free trace mode, hide the black path
        path.setAttribute('stroke', 'none');
      } else {
        // In other modes, show the black path
        path.setAttribute('stroke', '#000');
        path.setAttribute('stroke-width', strokeWidth);
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke-dasharray', pathLength.toString());
        path.setAttribute('stroke-dashoffset', '0'); // Fully visible initially
      }

      // Only create flow markers for the current path in normal modes
      if (index === state.currentPathIndex && state.mode === TraceMode.ShowFlow) {
        state.flowMarkers = this.createFlowMarkersForPath(path);
      }
    });

    state.totalPathLength = state.paths[state.currentPathIndex].getTotalLength();
  }

  // Set up the draggable circle at the start of the first path
  setupDraggableCircle(state: any) {
    const firstPathStart = state.paths[0].getPointAtLength(0);
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    const strokeWidth = state.paths[state.currentPathIndex].style['stroke-width'] || state.paths[state.currentPathIndex].getAttribute('stroke-width');
    circle.setAttribute('id', 'lido-draggableCircle');
    circle.setAttribute('cx', firstPathStart.x.toString());
    circle.setAttribute('cy', firstPathStart.y.toString());
    circle.setAttribute('r', `calc(${strokeWidth || 10} / 3)`); // Radius of the draggable circle
    circle.setAttribute('fill', '#81C127');
    state.svg?.appendChild(circle);
    state.circle = circle;

    this.resetIdleTimer(state); // ← start idle timer once the SVG is ready
  }

  // Add necessary event listeners using Pointer Events
  addEventListeners(state: any) {
    // Ensure the circle exists before adding events
    if (!state.circle || !state.paths || state.paths.length === 0) return;

    // Handle pointerdown on the circle to start dragging
    state.circle.addEventListener('pointerdown', (evt: PointerEvent) => {
      evt.preventDefault(); // Prevent default actions like text selection
      const pointerPos = this.getPointerPosition(evt, state.svg!);
      const circlePos = {
        x: parseFloat(state.circle.getAttribute('cx')!),
        y: parseFloat(state.circle.getAttribute('cy')!),
      };
      const distance = this.getDistanceSquared(pointerPos, circlePos);
      if (distance <= state.proximityThreshold * state.proximityThreshold) {
        state.isDragging = true;
        state.activePointerId = evt.pointerId;
        state.circle.setPointerCapture(evt.pointerId);
      }
      this.hideFingerHint(); // ← NEW
      this.resetIdleTimer(state); // ← NEW
    });

    // Handle pointermove on the SVG to update the circle position
    state.svg?.addEventListener('pointermove', (evt: PointerEvent) => {
      if (!state.isDragging || evt.pointerId !== state.activePointerId) return;

      state.pointerMoveEvent = evt;
      if (!state.rafId) {
        state.rafId = requestAnimationFrame(() => {
          this.handlePointerMove(state);
          state.rafId = null;
        });
      }
    });

    // Handle pointerup and pointercancel on the SVG to stop dragging
    const endDrag = (evt: PointerEvent) => {
      if (evt.pointerId === state.activePointerId) {
        state.isDragging = false;
        state.activePointerId = null;
        this.hideFingerHint(); // ← NEW
        this.resetIdleTimer(state); // ← NEW
      }
    };
    state.svg?.addEventListener('pointerup', endDrag);
    state.svg?.addEventListener('pointercancel', endDrag);

    // Optional: Prevent context menu on long press
    state.svg?.addEventListener('contextmenu', (evt: MouseEvent) => {
      evt.preventDefault();
    });
  }

  // Modified handlePointerMove function
  handlePointerMove(state: any) {
    if (!state.isDragging) return;
    if (!state.circle || !state.paths || state.paths.length === 0) return;

    this.hideFingerHint(); // user is active, remove hint

    const evt = state.pointerMoveEvent as PointerEvent;
    const pointerPos = this.getPointerPosition(evt, state.svg!);
    const circlePos = {
      x: parseFloat(state.circle.getAttribute('cx')!),
      y: parseFloat(state.circle.getAttribute('cy')!),
    };

    const currentPath = state.paths[state.currentPathIndex];
    if (!currentPath) {
      console.error('No valid path found at the current index');
      return;
    }

    // Use a reduced proximity threshold for free trace mode
    let proximitySquared;
    if (state.mode === TraceMode.FreeTrace || state.mode === TraceMode.BlindFreeTrace) {
      proximitySquared = state.freeTraceProximityThreshold * state.freeTraceProximityThreshold;
    } else {
      proximitySquared = state.proximityThreshold * state.proximityThreshold;
    }

    // Calculate the distance between the pointer and the draggable circle
    const distanceSquared = this.getDistanceSquared(pointerPos, circlePos);

    // If the pointer is outside the proximity threshold, do not proceed with drawing or moving
    if (distanceSquared > proximitySquared) {
      return; // Skip any further actions
    }

    const closestPoint = this.getClosestPointOnPath(currentPath, pointerPos);

    // Ensure drawing happens only within proximity threshold
    const distanceToPathSquared = this.getDistanceSquared(pointerPos, closestPoint);
    if (distanceToPathSquared > proximitySquared) {
      return; // Skip drawing if too far from the path
    }

    // For free trace mode and blind free trace mode, allow free drawing only if within the reduced proximity threshold
    if (state.mode === TraceMode.FreeTrace || state.mode === TraceMode.BlindFreeTrace) {
      // Initialize the currentFreePath array if it's not created
      if (!state.currentFreePath) {
        state.currentFreePath = [];
      }

      // Create a new path element if it's the first trace for the current path index
      if (!state.currentFreePath[state.currentPathIndex]) {
        const newPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        // newPath.setAttribute('stroke', 'green');
        const strokeWidth = state.paths[state.currentPathIndex].style['stroke-width'] || state.paths[state.currentPathIndex].getAttribute('stroke-width');
        newPath.setAttribute('stroke-width', strokeWidth);
        newPath.setAttribute('fill', 'none');
        newPath.setAttribute('stroke-linecap', 'round');
        newPath.setAttribute('stroke', 'lightgreen');
        // Start the new path at the current pointer position
        newPath.setAttribute('d', `M${pointerPos.x},${pointerPos.y}`);
        state.svg?.appendChild(newPath);
        state.currentFreePath[state.currentPathIndex] = newPath;

        // Reset lastPointerPos for the new path
        state.lastPointerPos = pointerPos;
      }

      // Get the previous position to draw a smooth curve
      const previousPos = state.lastPointerPos || pointerPos;

      // Create a quadratic curve from the previous point to the current point
      const newPathData = state.currentFreePath[state.currentPathIndex].getAttribute('d');
      const midPointX = (previousPos.x + pointerPos.x) / 2;
      const midPointY = (previousPos.y + pointerPos.y) / 2;
      const updatedPathData = `${newPathData} Q ${previousPos.x},${previousPos.y} ${midPointX},${midPointY}`;

      // Update the path's 'd' attribute with the new curve
      state.currentFreePath[state.currentPathIndex].setAttribute('d', updatedPathData);

      // Move the draggable circle with the freehand trace
      state.circle.setAttribute('cx', pointerPos.x.toString());
      state.circle.setAttribute('cy', pointerPos.y.toString());

      // Make sure the red dot (circle) is always on top
      state.svg?.appendChild(state.circle); // This moves the circle to the last child, making it the topmost

      // Update the last pointer position
      state.lastPointerPos = pointerPos;

      const currentPathLength = currentPath.getTotalLength();
      const distanceToEnd = currentPathLength - closestPoint.length;

      // If close to the end of the path, move to the next path
      if (distanceToEnd < 5) {
        this.moveToNextPath(state);
        state.currentFreePath[state.currentPathIndex] = null; // Reset free path for next path
      }

      // this.resetIdleTimer(state); // ← keep timer alive
      return; // Exit early since we're in free trace or blind free trace mode
    }

    // In normal modes, allow movement and drawing only within the general proximity threshold
    if (state.isDragging && closestPoint.length >= state.lastLength) {
      state.lastLength = closestPoint.length;
      state.circle.setAttribute('cx', closestPoint.x.toString());
      state.circle.setAttribute('cy', closestPoint.y.toString());

      // Make sure the red dot (circle) is always on top
      state.svg?.appendChild(state.circle); // This moves the circle to the last child, making it the topmost

      currentPath.greenPath?.setAttribute('stroke-dashoffset', (state.totalPathLength - state.lastLength).toString());
    }

    // Check if the current path is completed
    if (state.totalPathLength - 1 - state.lastLength < 5 && state.currentPathIndex < state.paths.length - 1) {
      this.moveToNextPath(state);
    } else if (state.totalPathLength - 1 - state.lastLength < 5 && state.currentPathIndex === state.paths.length - 1) {
      //   this.loadAnotherSVG(state, true);
      this.moveToNextContainer();
    }

    // this.resetIdleTimer(state); // ← keep timer alive
  }

  // Move to the next container after completing the current SVG
  async moveToNextContainer() {
    if(this.moving) return; // Prevent multiple calls
    this.moving = true; // Set moving to true to prevent re-entrance

    if(this.highlightTextId) {
      this.highlightLetter(this.currentSvgIndex);
    }
    if(this.animationTrace) {
      await this.playTraceAnimation();
    }

    console.log(`Moving to next container after SVG index: ${this.currentSvgIndex}`);
    if(this.currentSvgIndex < this.svgUrls.length - 1)
    {
       this.currentSvgIndex++;
       await this.initializeSVG();
       this.moving = false;
       return;
    }

    const container = document.getElementById(LidoContainer) as HTMLElement;
    if (container && this.onCorrect) {
      await executeActions(this.onCorrect, container);
    }
    triggerNextContainer();
  }

  // Get the pointer position relative to the SVG
  getPointerPosition(evt: PointerEvent, svg: SVGSVGElement) {
    const svgPoint = svg.createSVGPoint();
    svgPoint.x = evt.clientX;
    svgPoint.y = evt.clientY;
    const ctm = svg.getScreenCTM()?.inverse();
    return ctm ? svgPoint.matrixTransform(ctm) : { x: evt.clientX, y: evt.clientY };
  }

  // Calculate the squared Euclidean distance between two points
  getDistanceSquared(p1: { x: number; y: number }, p2: { x: number; y: number }) {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    return dx * dx + dy * dy;
  }

  // Find the closest point on the given path to the specified point using two-pass sampling
  getClosestPointOnPath(pathNode: SVGGeometryElement, point: { x: number; y: number }) {
    const pathLength = pathNode.getTotalLength();
    let closestPoint = { x: 0, y: 0, length: 0 };
    let minDistanceSquared = Infinity;

    // First pass: coarse sampling
    const coarseStep = 20; // Increased step for better performance
    let coarseClosestPoint = { x: 0, y: 0, length: 0 };
    let coarseMinDistanceSquared = Infinity;

    for (let i = 0; i <= pathLength; i += coarseStep) {
      const pointOnPath = pathNode.getPointAtLength(i);
      const distanceSquared = this.getDistanceSquared(point, pointOnPath);

      if (distanceSquared < coarseMinDistanceSquared) {
        coarseMinDistanceSquared = distanceSquared;
        coarseClosestPoint = {
          x: pointOnPath.x,
          y: pointOnPath.y,
          length: i,
        };
      }
    }

    // Second pass: fine sampling around coarseClosestPoint
    const fineStep = 2; // Increased step to reduce computations
    const searchStart = Math.max(coarseClosestPoint.length - coarseStep, 0);
    const searchEnd = Math.min(coarseClosestPoint.length + coarseStep, pathLength);

    for (let i = searchStart; i <= searchEnd; i += fineStep) {
      const pointOnPath = pathNode.getPointAtLength(i);
      const distanceSquared = this.getDistanceSquared(point, pointOnPath);

      if (distanceSquared < minDistanceSquared) {
        minDistanceSquared = distanceSquared;
        closestPoint = { x: pointOnPath.x, y: pointOnPath.y, length: i };
      }
    }

    return closestPoint;
  }

  // Load the next or previous SVG based on the isNext flag
  async loadAnotherSVG(state: any, isNext: boolean) {
    state.isDragging = false;

    try {
      if (state.svg) {
        this.cleanupPreviousSVG(state);
      }
      
      const svgText = await this.fetchSVG(convertUrlToRelative(this.svgSource.split(';').map(s => s.trim())[this.currentSvgIndex]));

      this.insertSVG(svgText);

      state.svg = this.getSVGElement();
      if (this.mode === TraceMode.BlindTracing || this.mode === TraceMode.BlindFreeTrace) {
        //make image in the svg style as display none
        state.svg.querySelectorAll('image').forEach(img => {
          img.style.display = 'none';
        });
      }
      state.paths = this.getPaths(state.svg);

      this.setupDrawingPath(state);
      this.setupDraggableCircle(state);
      this.addEventListeners(state);
    } catch (error) {
      console.error(`Error loading SVG (${this.svgSource}):`, error);
    }
  }

  // Cleanup previous SVG's elements and state
  cleanupPreviousSVG(state: any) {
    if (state.circle) {
      state.svg?.removeChild(state.circle);
      state.circle = null;
    }

    const indicators = state.svg?.querySelectorAll('.lido-flow-indicator') as NodeListOf<SVGPolygonElement>;
    indicators.forEach(indicator => {
      indicator.remove(); // Remove all previous flow indicators
    });

    state.currentPathIndex = 0;
    state.lastLength = 0;
    state.totalPathLength = state.paths[0].getTotalLength();

    this.hideFingerHint();
    this.resetIdleTimer(state);
  }

  // Move to the next path in the SVG
  async moveToNextPath(state: any) {
    state.isDragging = false;
    state.currentPathIndex++;
    state.lastLength = 0;

    this.hideFingerHint(); // remove hint when changing path

    if (state.currentPathIndex >= state.paths.length) {
      this.moveToNextContainer();
      return;
    }

    const nextPath = state.paths[state.currentPathIndex];
    if (!nextPath) {
      console.error('No valid path found at the next index');
      return;
    }

    state.totalPathLength = nextPath.getTotalLength();

    const startPoint = nextPath.getPointAtLength(0);
    state.circle?.setAttribute('cx', startPoint.x.toString());
    state.circle?.setAttribute('cy', startPoint.y.toString());

    if (state.mode === TraceMode.ShowFlow) {
      state.flowMarkers = this.createFlowMarkersForPath(nextPath);
    }

    this.resetIdleTimer(state);
  }

  private async playTraceAnimation() {
    const el = document.getElementById(this.id);
    if (!el) return;
    el.classList.add('trace-animate');
    // Wait for the animation to finish (500ms)
    await new Promise(resolve => setTimeout(resolve, 500));
    el.classList.remove('trace-animate');
  }

  private async highlightLetter(index: number) {

    const container = document.getElementById(LidoContainer);
    if (!container) return;
  
    // Ensure highlightTextId is set
    const textId = this.highlightTextId;
    if(!textId) return;

    // Find the lido-text element by id 
    const textElem = document.getElementById(textId);
    if (!textElem) return;
    
    // Check if the textElem has a span-type attribute
    const spanType = textElem.getAttribute('span-type');
    if (!spanType) return;
   
    // Find the .lido-text-content container inside lido-text
    const content = textElem.querySelector('.lido-text-content');
    if (!content) return;
  
    if (spanType === 'letters') {
      const letters = content.querySelectorAll('.text-letters');
      if (index < 0 || index >= letters.length) return;
      // Highlight the current letter keeping the previous ones highlighted
      const letter = letters[index];
      if (letter) letter.classList.add('letter-highlight');
    }

    if (spanType === 'words') {
      const words = content.querySelectorAll('.text-words');
      if (index < 0 || index >= words.length) return;
      // Highlight the current word keeping the previous ones highlighted
      const word = words[index];
      if (word) word.classList.add('word-highlight');
    }
  }

  updateStyles() {
      const orientation = window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
      this.style = {
        'height': parseProp(this.height, orientation),
        'width': parseProp(this.width, orientation),
        'top': parseProp(this.y, orientation),
        'left': parseProp(this.x, orientation),
        'zIndex': this.z,
        'position': 'absolute',
      };
    }


  render() {
    return (

      <Host
        class="lido-trace"
        id={this.id}
        onCorrect={this.onCorrect}
        onInCorrect={this.onInCorrect}
        style={this.style}
        aria-label={this.ariaLabel}
        aria-hidden={this.ariaHidden}
        tabindex={this.tabIndex}
      >
        <div style={this.style} id="lido-svgContainer"></div>
      </Host>
    );
  }
}
