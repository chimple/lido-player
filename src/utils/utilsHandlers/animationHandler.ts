import { AnimationVanishedValuesKey, SelectedValuesKey } from "../constants";
import { calculateScore, executeActions, triggerNextContainer } from "../utils";

const readVanishedValues = (container: HTMLElement): string[] => {
  try {
    const values = JSON.parse(container.getAttribute(AnimationVanishedValuesKey) ?? '[]');
    return Array.isArray(values) ? values : [];
  } catch {
    return [];
  }
};
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
           const vanishedValues = readVanishedValues(container);
           const vanishedValue = dragElement.getAttribute('value') ?? dragElement.textContent?.trim();
           if (vanishedValue) {
             vanishedValues.push(vanishedValue);
             container.setAttribute(AnimationVanishedValuesKey, JSON.stringify(vanishedValues));
           }
 
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
           const normalizedVanishedValues = vanishedValues.map(v => v.trim()).sort().join(',');
           const normalizedObjective = objective?.split(',').map(v => v.trim()).sort().join(',');
           const isObjectiveComplete =
             !!objective &&
             normalizedVanishedValues === normalizedObjective;

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
              container.removeAttribute(AnimationVanishedValuesKey);
            }
           }, 800); // match animation duration
         }, 250);
}
