import Draggable from 'plain-draggable';

export function format(first?: string, middle?: string, last?: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export function initializeDraggable(_element: HTMLElement) {
  const draggable = new Draggable(_element, {
    // onDrag: () => {
    //   const rect = draggable.element.getBoundingClientRect();
    //   console.log('🚀 ~ initializeDraggable ~ rect:', rect);
    // },
    containment: { left: 0, top: 0, width: 10000, height: 10000 },
    snap: {
      targets: document.querySelectorAll('.text'),
    },
  });
  console.log('draggable', draggable);
}
