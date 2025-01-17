import { Component, Prop, h, Host, State } from '@stencil/core';
import { triggerNextContainer } from '../../utils/utils';
import { TraceMode } from '../../utils/constants';

// Enum for different tracing modes

@Component({
  tag: 'lido-trace',
  styleUrl: 'lido-trace.css',
  shadow: false,
  assetsDirs: ['svg'],
})
export class LidoTrace {
  /**
   * Various configuration properties for `lido-trace`
   */
  /**
   * Unique identifier for this `lido-trace` component instance.
   */
  @Prop() id: string;

  /**
   * Source URL or path for the SVG file used in this component.
   */
  @Prop() svgSource: string;

  /**
   * A custom string value associated with the component for additional data or identification.
   */
  @Prop() value: string;

  /**
   * Specifies the height of the component container, accepts any valid CSS height value (e.g., `"100px"`, `"50%"`).
   */
  @Prop() height: string;

  /**
   * Specifies the width of the component container, accepts any valid CSS width value (e.g., `"100px"`, `"50%"`).
   */
  @Prop() width: string;

  /**
   * Defines the x-coordinate position (left offset) of the component container, using any valid CSS `left` value (e.g., `"10px"`, `"5%"`).
   */
  @Prop() x: string;

  /**
   * Defines the y-coordinate position (top offset) of the component container, using any valid CSS `top` value (e.g., `"10px"`, `"5%"`).
   */
  @Prop() y: string;

  /**
   * Sets the z-index of the component, controlling its stacking order on the page.
   */
  @Prop() z: string;

  /**
   * Accessible label for screen readers, providing a textual description of the component's purpose.
   */
  @Prop() ariaLabel: string;

  /**
   * Controls visibility for assistive technologies. If `"true"`, the component is hidden from screen readers.
   */
  @Prop() ariaHidden: string;

  /**
   * Sets the tab order of the component within the page, enabling keyboard navigation.
   */
  @Prop() tabIndex: number;

  /**
   * Mode for the tracing interaction, defining how users interact with the SVG paths.
   * Options may include `"noFlow"`, `"showFlow"`, `"freeTrace"`, `"blindTracing"`, and `"blindFreeTrace"`.
   */
  @Prop() mode: string;

  //   @Element() el!: HTMLElement;

  @State() fileIndex: number = -1;
  @State() isDragging: boolean = false;
  @State() activePointerId: number | null = null;

  // MODES = ['noFlow', 'showFlow', 'freeTrace', 'blindTracing', 'blindFreeTrace'];

  // Handle the pointermove event with optimizations
  // Update the path trace as the red circle moves
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
    };

    await this.loadAnotherSVG(state, true); // Load the first SVG
  }

  componentWillLoad() {
    this.initializeSVG();
  }
  // Fetch the SVG file asynchronously
  async fetchSVG(url: string): Promise<string> {
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
    const svgContainer = document.getElementById('svgContainer') as HTMLElement;
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
    const svgContainer = document.getElementById('svgContainer') as HTMLElement;
    return svgContainer.querySelector('svg');
  }

  // Get all path and line elements from the SVG
  getPaths(svg: SVGSVGElement) {
    return Array.from(svg.querySelectorAll('path, line'));
  }

  // Create flow markers along the path to guide the user
  createFlowMarkersForPath(path: SVGGeometryElement, markerCount = 10) {
    const totalLength = path.getTotalLength();
    const interval = totalLength / (markerCount + 1); // Space markers evenly
    const markers: SVGPolygonElement[] = [];

    for (let i = 1; i <= markerCount; i++) {
      const point = path.getPointAtLength(i * interval);
      const nextPoint = path.getPointAtLength((i + 0.5) * interval); // Slightly ahead point for direction

      // Create an arrow marker
      const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x);
      const arrowMarker = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
      arrowMarker.setAttribute('points', '-5,-5 0,0 -5,5');
      arrowMarker.setAttribute('fill', 'blue');
      arrowMarker.setAttribute('transform', `translate(${point.x},${point.y}) rotate(${(angle * 180) / Math.PI})`);
      arrowMarker.setAttribute('class', 'lido-flow-indicator');
      markers.push(arrowMarker);
      path.parentNode?.appendChild(arrowMarker); // Append to the same SVG container
    }
    return markers;
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

      // Create green path for tracing effect
      const greenPath = path.cloneNode() as SVGPathElement;
      greenPath.setAttribute('stroke', 'green');
      greenPath.setAttribute('stroke-width', '13');
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
        path.setAttribute('stroke-width', '10');
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
    circle.setAttribute('id', 'lido-draggableCircle');
    circle.setAttribute('cx', firstPathStart.x.toString());
    circle.setAttribute('cy', firstPathStart.y.toString());
    circle.setAttribute('r', '20'); // Radius of the draggable circle
    circle.setAttribute('fill', 'red');
    state.svg?.appendChild(circle);
    state.circle = circle;
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
        // Capture the pointer to continue receiving events even if it leaves the element
        state.circle.setPointerCapture(evt.pointerId);
      }
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
    state.svg?.addEventListener('pointerup', (evt: PointerEvent) => {
      if (evt.pointerId === state.activePointerId) {
        state.isDragging = false;
        state.activePointerId = null;
      }
    });

    state.svg?.addEventListener('pointercancel', (evt: PointerEvent) => {
      if (evt.pointerId === state.activePointerId) {
        state.isDragging = false;
        state.activePointerId = null;
      }
    });

    // Optional: Prevent context menu on long press
    state.svg?.addEventListener('contextmenu', (evt: MouseEvent) => {
      evt.preventDefault();
    });
  }

  // Modified handlePointerMove function
  handlePointerMove(state: any) {
    if (!state.isDragging) return;
    if (!state.circle || !state.paths || state.paths.length === 0) return;

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
        newPath.setAttribute('stroke', 'green');
        newPath.setAttribute('stroke-width', '8');
        newPath.setAttribute('fill', 'none');

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
      triggerNextContainer();
    }
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

    // Update fileIndex based on whether isNext is true or false
    // if (isNext) {
    //   state.fileIndex++;
    //   if (state.fileIndex >= this.svgFiles.length) {
    //     state.fileIndex = this.svgFiles.length - 1; // Stay at the last file
    //     return;
    //   }
    // } else {
    //   state.fileIndex--;
    //   if (state.fileIndex < 0) {
    //     state.fileIndex = 0; // Stay at the first file
    //     return;
    //   }
    // }

    try {
      if (state.svg) {
        this.cleanupPreviousSVG(state);
      }

      //   const svgText = await this.fetchSVG(this.svgSource ?? this.svgFiles[state.fileIndex]);
      const svgText = await this.fetchSVG(this.svgSource);

      this.insertSVG(svgText);

      state.svg = this.getSVGElement();
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
  }

  // Move to the next path in the SVG
  moveToNextPath(state: any) {
    state.isDragging = false;
    state.currentPathIndex++;
    state.lastLength = 0;

    if (state.currentPathIndex >= state.paths.length) {
      //  this.loadAnotherSVG(state, true);
      triggerNextContainer();
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
  }

  render() {
    const style = {
      height: this.height,
      width: this.width,
      top: this.y,
      left: this.x,
      zIndex: this.z,
      position: 'absolute' as const,
    };

    // List of SVG file names to process sequentially
    // const svgFiles = ['A_test.svg', 'B_test.svg', 'C_test.svg', 'D_test.svg', 'अ_test.svg', 'ट_test.svg', 'क_test.svg', 'ख_test.svg', 'ग_test.svg']; // Add more SVG file names as needed

    return (
      <Host class="lido-trace" id={this.id} style={style} aria-label={this.ariaLabel} aria-hidden={this.ariaHidden} tabindex={this.tabIndex}>
        <div id="lido-svgContainer"></div>
      </Host>
    );
  }
}
