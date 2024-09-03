export function format(first?: string, middle?: string, last?: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export function enableDraggingWithScaling(element: HTMLElement): void {
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let initialX = 0;
  let initialY = 0;

  // Fetch the container element
  const container = document.getElementById('container');
  if (!container) {
    console.error(`Container with ID "container" not found.`);
    return;
  }

  // Function to get the scale of an element
  const getElementScale = (el: HTMLElement): number => {
    const transform = window.getComputedStyle(el).transform;
    if (transform === 'none') {
      return 1; // No scaling
    } else {
      const matrix = transform.match(/matrix\(([^)]+)\)/);
      if (matrix) {
        const matrixValues = matrix[1].split(', ');
        const scaleX = parseFloat(matrixValues[0]);
        return scaleX; // Assuming uniform scaling (same scale in X and Y)
      }
    }
    return 1; // Fallback to no scaling
  };

  const onStart = (event: MouseEvent | TouchEvent): void => {
    isDragging = true;

    if (event instanceof MouseEvent) {
      startX = event.clientX;
      startY = event.clientY;
    } else {
      startX = event.touches[0].clientX;
      startY = event.touches[0].clientY;
    }

    // Apply dragging styles to the element
    element.style.opacity = '0.8';
    element.style.cursor = 'grabbing';

    // Parse the current transform values at the start of each drag
    const transform = window.getComputedStyle(element).transform;
    if (transform !== 'none') {
      const matrix = transform.match(/matrix\(([^)]+)\)/);
      if (matrix) {
        const matrixValues = matrix[1].split(', ');
        initialX = parseFloat(matrixValues[4]);
        initialY = parseFloat(matrixValues[5]);
      }
    } else {
      initialX = 0;
      initialY = 0;
    }

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onEnd);
    document.addEventListener('touchmove', onMove);
    document.addEventListener('touchend', onEnd);
  };

  const rect1 = container.getBoundingClientRect();
  const rect2 = element.getBoundingClientRect();

  let verticalDistance = rect1.top - rect2.top;
  let horizontalDistance = rect1.left - rect2.left;

  const observer = new MutationObserver(mutationsList => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
        const rect1 = container.getBoundingClientRect();
        const rect2 = element.getBoundingClientRect();
        verticalDistance = rect1.top - rect2.top;
        horizontalDistance = rect1.left - rect2.left;
      }
    }
  });

  // Configure the observer to watch for attribute changes
  const observerConfig = {
    attributes: true, // Monitor attribute changes
    attributeFilter: ['style'], // Only observe changes to the 'style' attribute
  };

  // Start observing the element
  observer.observe(container, observerConfig);

  const onMove = (event: MouseEvent | TouchEvent): void => {
    if (!isDragging) return;

    const containerScale = getElementScale(container);

    let dx = 0;
    let dy = 0;

    if (event instanceof MouseEvent) {
      dx = (event.clientX - startX) / containerScale;
      dy = (event.clientY - startY) / containerScale;
    } else {
      dx = (event.touches[0].clientX - startX) / containerScale;
      dy = (event.touches[0].clientY - startY) / containerScale;
    }

    // Calculate the new position considering scaling
    const newLeft = initialX + dx;
    const newTop = initialY + dy;

    // Get the dimensions and scale-corrected position of the container and element
    const containerRect = container.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();

    const numbers = element.style.transform.match(/-?\d+(\.\d+)?/g);

    const result = numbers.map(Number);
    const initialElementLeftPx = elementRect.left / containerScale - result[0];
    const initialElementTopPx = elementRect.top - result[1];

    const maxRight = containerRect.width / containerScale - Math.abs(horizontalDistance / containerScale) - elementRect.width / containerScale;
    const maxLeft = containerRect.left - initialElementLeftPx;
    const maxTop = containerRect.top - initialElementTopPx;
    const maxBottom = containerRect.height / containerScale - Math.abs(verticalDistance / containerScale) - elementRect.height / containerScale;

    const newLeftClamp = newLeft + initialElementLeftPx <= containerRect.left ? maxLeft : Math.min(newLeft, maxRight);

    const newTopClamp = newTop + initialElementTopPx <= containerRect.top ? maxTop : Math.min(newTop, maxBottom);

    // Apply transform with translation within boundaries
    element.style.transform = `translate(${newLeftClamp}px, ${newTopClamp}px)`;

    // Check for overlaps and apply overlapping styles
    const allElements = document.querySelectorAll<HTMLElement>("[type='drop']");
    allElements.forEach(otherElement => {
      const otherRect = otherElement.getBoundingClientRect();

      // Check if there is overlap
      const isOverlapping = elementRect.left < otherRect.right && elementRect.right > otherRect.left && elementRect.top < otherRect.bottom && elementRect.bottom > otherRect.top;

      if (isOverlapping) {
        otherElement.style.border = '2px dashed #ff0000'; // Red dashed border
        otherElement.style.backgroundColor = 'rgba(255, 0, 0, 0.1)'; // Light red background
      } else {
        otherElement.style.border = ''; // Reset border
        otherElement.style.backgroundColor = ''; // Reset background color
      }
    });
  };

  const onEnd = (): void => {
    isDragging = false;
    document.removeEventListener('mousemove', onMove);
    document.removeEventListener('mouseup', onEnd);
    document.removeEventListener('touchmove', onMove);
    document.removeEventListener('touchend', onEnd);

    // Reset styles when dragging ends
    element.style.opacity = '';
    element.style.cursor = 'move';

    // Reset overlapping styles from all elements
    const allElements = document.querySelectorAll<HTMLElement>("[type='drop']");
    allElements.forEach(otherElement => {
      otherElement.style.border = ''; // Reset border
      otherElement.style.backgroundColor = ''; // Reset background color
    });

    // Check for overlaps and log the most overlapping element
    const elementRect = element.getBoundingClientRect();
    let mostOverlappedElement: HTMLElement | null = null;
    let maxOverlapArea = 0;

    allElements.forEach(otherElement => {
      const otherRect = otherElement.getBoundingClientRect();

      // Calculate overlap
      const overlapWidth = Math.max(0, Math.min(elementRect.right, otherRect.right) - Math.max(elementRect.left, otherRect.left));
      const overlapHeight = Math.max(0, Math.min(elementRect.bottom, otherRect.bottom) - Math.max(elementRect.top, otherRect.top));
      const overlapArea = overlapWidth * overlapHeight;

      // Update the most overlapped element if this one has a larger overlap area
      if (overlapArea > maxOverlapArea) {
        maxOverlapArea = overlapArea;
        mostOverlappedElement = otherElement;
      }
    });

    if (mostOverlappedElement) {
      console.log('Most overlapping element:', mostOverlappedElement, mostOverlappedElement['onMatch']);
    }
  };

  // Initialize draggable element styles
  element.style.cursor = 'move';
  element.style.transform = 'translate(0, 0)'; // Initialize transform for consistent dragging

  element.addEventListener('mousedown', onStart);
  element.addEventListener('touchstart', onStart);
}
