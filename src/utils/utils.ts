import Draggable from 'plain-draggable';

export function format(first?: string, middle?: string, last?: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export function initializeDraggable(_element: HTMLElement) {
  // Convert NodeList to an Array
  const snapTargets = Array.from(document.querySelectorAll('[type="drop"]'));

  const draggable = new Draggable(_element, {
    containment: document.getElementById('container'),
    snap: {
      targets: snapTargets,
      // gravity: 70,
      center: true,
      base: 'document',
      edge: 'inside',
    },
  });

  console.log('draggable', draggable);
}
