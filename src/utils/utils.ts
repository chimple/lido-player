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

    // Check for overlaps and highlight only the most overlapping element
    const allElements = document.querySelectorAll<HTMLElement>("[type='drop']");
    let mostOverlappedElement: HTMLElement | null = null;
    let maxOverlapArea = 0;

    allElements.forEach(otherElement => {
      const otherRect = otherElement.getBoundingClientRect();

      // Check if there is overlap
      const overlapWidth = Math.max(0, Math.min(elementRect.right, otherRect.right) - Math.max(elementRect.left, otherRect.left));
      const overlapHeight = Math.max(0, Math.min(elementRect.bottom, otherRect.bottom) - Math.max(elementRect.top, otherRect.top));
      const overlapArea = overlapWidth * overlapHeight;

      // Update the most overlapped element if this one has a larger overlap area
      if (overlapArea > maxOverlapArea) {
        maxOverlapArea = overlapArea;
        mostOverlappedElement = otherElement;
      }
    });

    // Reset styles for all elements
    allElements.forEach(otherElement => {
      otherElement.style.border = ''; // Reset border
      otherElement.style.backgroundColor = ''; // Reset background color
    });

    // Apply styles only to the most overlapped element
    if (mostOverlappedElement) {
      mostOverlappedElement.style.border = '2px dashed #ff0000'; // Red dashed border
      mostOverlappedElement.style.backgroundColor = 'rgba(255, 0, 0, 0.1)'; // Light red background
    }
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

    if (!mostOverlappedElement) return;

    console.log('Most overlapping element:', mostOverlappedElement['value'], element['value']);

    // Add pulse and highlight effect for a successful match
    if (mostOverlappedElement['value'] === element['value']) {
      console.log('🚀 ~ onEnd ~ mostOverlappedElement onMatch:', mostOverlappedElement['onMatch']);

      // Apply a pulse and highlight effect
      applyPulseAndHighlightEffect(mostOverlappedElement);
      applyPulseAndHighlightEffect(element);

      // Delay the execution of the action to show the effects
      setTimeout(() => {
        // Reset the visual effect after the delay
        mostOverlappedElement.style.transition = '';
        mostOverlappedElement.style.boxShadow = '';
        mostOverlappedElement.style.backgroundColor = '';
        element.style.transition = '';
        element.style.boxShadow = '';
        element.style.backgroundColor = '';

        // Perform actions if onMatch is defined
        const onMatch = mostOverlappedElement.getAttribute('onMatch');
        if (onMatch) {
          executeActions(onMatch, mostOverlappedElement, element);
        }
      }, 1000); // Adjust the delay time as needed (1000ms in this case)
    }
  };

  // Function to apply a pulse and highlight effect using inline styles
  const applyPulseAndHighlightEffect = (el: HTMLElement): void => {
    // Apply a longer background color change to light green and pulse effect
    el.style.transition = 'box-shadow 0.5s ease, background-color 0.5s ease';
    el.style.backgroundColor = 'rgba(144, 238, 144, 0.7)'; // Light green color

    // Apply a subtle pulse effect using box-shadow
    el.style.boxShadow = '0 0 15px 7px rgba(144, 238, 144, 0.5)'; // Light green shadow

    // Reset box-shadow after the effect duration
    setTimeout(() => {
      el.style.boxShadow = '0 0 0px 0px rgba(144, 238, 144, 0.0)'; // Reset shadow
    }, 500); // Extended duration for the pulse effect
  };

  // Function to execute actions parsed from the onMatch string
  const executeActions = (actionsString: string, dropElement: HTMLElement, dragElement: HTMLElement): void => {
    const actions = parseActions(actionsString);
    console.log('🚀 ~ executeActions ~ actions:', actions);
    actions.forEach(action => {
      const targetElement = action.actor === 'this' ? dropElement : action.actor === 'element' ? dragElement : document.getElementById(action.actor);
      console.log('🚀 ~ executeActions ~ targetElement:', targetElement);
      if (targetElement) {
        targetElement.style[action.action as any] = action.value;
      }
    });
  };

  // Function to parse actions string
  const parseActions = (input: string): Array<{ actor: string; action: string; value: string }> => {
    const actions = [];
    const actionStrings = input.split(';').map(action => action.trim());

    actionStrings.forEach(actionString => {
      if (actionString) {
        const [actorAction, value] = actionString.split('=').map(part => part.trim());
        const lastDotIndex = actorAction.lastIndexOf('.');
        if (lastDotIndex !== -1) {
          const actor = actorAction.substring(0, lastDotIndex).trim();
          const action = actorAction.substring(lastDotIndex + 1).trim();
          actions.push({ actor, action, value: value.replace(/['"]/g, '') });
        }
      }
    });

    return actions;
  };

  // Initialize draggable element styles
  element.style.cursor = 'move';
  element.style.transform = 'translate(0, 0)'; // Initialize transform for consistent dragging

  element.addEventListener('mousedown', onStart);
  element.addEventListener('touchstart', onStart);
}
