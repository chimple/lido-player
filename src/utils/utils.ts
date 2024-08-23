import Draggable from 'plain-draggable';

export function format(first?: string, middle?: string, last?: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export function initializeDraggable(_element: HTMLElement) {
  // Convert NodeList to an Array
  const snapTargets = Array.from(document.querySelectorAll('[type="drop"]'));

  const draggable = new Draggable(_element, {
    containment: { left: 0, top: 0, width: 10000, height: 10000 },
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
