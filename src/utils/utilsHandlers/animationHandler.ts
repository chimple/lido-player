import { DropMode } from "../constants";

export function dragDropAnimation(container: HTMLElement, dragElement: HTMLElement, dropElement: HTMLElement): void {
    const checkdropAttr = container.getAttribute('dropAttr');
      if (checkdropAttr && checkdropAttr.toLowerCase() === DropMode.EnableAnimation.toLowerCase()) {
        container.style.pointerEvents = "none";
        setTimeout(() => {
          const div = document.createElement('div');
          container.append(div);
          div.classList.add('after-drop-popup-container');

          dragElement.style.scale = `1`;
          dropElement.style.scale = `1`;

          const allDragElements = container.querySelectorAll('[type="drag"]');
          const dragParents = Array.from(allDragElements).map(el => el.parentElement);
          const allSameParent = dragParents.every(parent => parent === dragElement.parentElement);

          // Remove from old parents
          if (allSameParent) {
            dragElement.remove();
            dropElement.remove();
          } else {
            dragElement.parentElement.parentElement.remove();
            dropElement.parentElement.parentElement.remove();
          }

          // Add animation and popup classes
          dragElement.classList.add('zoom-fade-in', 'after-drop-popup-drag-element');

          dropElement.classList.add('zoom-fade-in', 'after-drop-popup-drop-element');

          div.appendChild(dragElement);
          div.appendChild(dropElement);

          dropElement.classList.remove('empty');

          setTimeout(() => {
            dragElement.classList.remove('zoom-fade-in');
            dropElement.classList.remove('zoom-fade-in');

            dragElement.classList.add('zoom-fade-out');
            dropElement.classList.add('zoom-fade-out');

            setTimeout(() => {
              div.remove();
              container.style.pointerEvents = 'auto';
            }, 800); // match animation duration
          }, 2000); // stay for 2 seconds
        }, 250);
      }
}