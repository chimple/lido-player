import { SelectedValuesKey } from "../constants";
import { calculateScore, executeActions, triggerNextContainer } from "../utils";

const tempVanishedValues: any[] = [];
export function dragDropAnimation(container: HTMLElement, dragElement: HTMLElement, dropElement: HTMLElement): void {
 container.style.pointerEvents = "none";
         setTimeout(async () => {
           const div = document.createElement('div');
           container.append(div);
           div.classList.add('after-drop-popup-container');
 
           dragElement.style.scale = `1`;
           dropElement.style.scale = `1`;
 
           const allDragElements = container.querySelectorAll('[type="drag"]');
           const dragParents = Array.from(allDragElements).map(el => el.parentElement);
           const allSameParent = dragParents.every(parent => parent === dragElement.parentElement);
           const selectedValues: any[] = JSON.parse(container.getAttribute(SelectedValuesKey) ?? '[]');
           const vanishedValue = dragElement.getAttribute('value') ?? dragElement.textContent?.trim();
           if (vanishedValue) {
             tempVanishedValues.push(vanishedValue);}
 
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
 
           const objective = container.getAttribute('objective');
           const isObjectiveComplete =
             !!objective &&
             tempVanishedValues.map(v => v.trim()).sort().join(',') ===
               objective.split(',').map(v => v.trim()).sort().join(',');

           if (dropElement.getAttribute('type') === 'drop') {
             const dropOnCorrect = dropElement.getAttribute('onCorrect') || '';
             await executeActions(dropOnCorrect, dropElement, dragElement);
           }

           if (isObjectiveComplete) {
             const containerOnCorrect = container?.getAttribute('onCorrect') || '';
             await executeActions(containerOnCorrect, container);
           }

             dragElement.classList.remove('zoom-fade-in');
             dropElement.classList.remove('zoom-fade-in');
 
             dragElement.classList.add('zoom-fade-out');
             dropElement.classList.add('zoom-fade-out');
 
           setTimeout(() => {
             div.remove();
             container.style.pointerEvents = 'auto';
 
            if (isObjectiveComplete) {
              calculateScore();
              triggerNextContainer();
              tempVanishedValues.length = 0;
            }
           }, 800); // match animation duration
         }, 250);
}
