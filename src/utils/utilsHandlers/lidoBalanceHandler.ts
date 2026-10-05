import { calculateScale, equationCheck} from '../utils';

type BalanceDragElement = HTMLElement & {
  __lidoBalanceHome?: HTMLElement;
};

/**
 * Mount a drag item on a balance plate without using the generic
 * `drop-action="move"` flow. The generic flow creates a new source placeholder
 * for every move, which makes a previously used plate become the item's source.
 *
 * A balance item gets exactly one home placeholder: its original source. It can
 * then move freely between plate parents while continuing to inherit the plate's
 * tilt translation.
 */
export function placeDragOnBalancePlate(dragElement: HTMLElement, dropElement: HTMLElement) {
  const balanceEl = document.querySelector('lido-balance');
  const plateParent = dropElement?.parentElement as HTMLElement | null;
  if (!balanceEl || !plateParent) return;

  const drag = dragElement as BalanceDragElement;
  if (!drag.__lidoBalanceHome?.isConnected) {
    const home = document.createElement('div');
    home.className = 'lido-balance-source-placeholder';
    home.setAttribute('aria-hidden', 'true');
    drag.replaceWith(home);
    drag.__lidoBalanceHome = home;
  }

  // Appending an existing element moves it; it does not leave a second
  // placeholder in the previous plate.
  plateParent.append(drag);
  drag.style.position = 'absolute';
  drag.style.zIndex = '1';
  // The generic drag handler also uses transform. Disable transitions while
  // changing parents and calculating the new local offset so this is one
  // placement, rather than a right/left correction animation.
  drag.style.transition = 'none';
  drag.style.transform = 'translate(0, 0)';

  const dropRect = dropElement.getBoundingClientRect();
  const dragRect = drag.getBoundingClientRect();
  const scale = calculateScale() || 1;
  const x = (dropRect.left + dropRect.width / 2 - (dragRect.left + dragRect.width / 2)) / scale;
  const y = (dropRect.top + dropRect.height / 2 - (dragRect.top + dragRect.height / 2)) / scale;
  drag.style.transform = `translate(${x}px, ${y}px)`;
  requestAnimationFrame(() => {
    drag.style.transition = '';
  });
}

export function updateBalanceOnDrop(dragElement: HTMLElement, dropElement?: HTMLElement) {
  
  const balanceEl = document.querySelector('lido-balance') as  any;
   if (!balanceEl) return;
  const leftDrag = Array.from(document.querySelectorAll('[drop-to^="lefthandle"]')) as HTMLElement[];
  const rightDrag = Array.from(document.querySelectorAll('[drop-to^="righthandle"]')) as HTMLElement[];

  balanceEl.leftVal = calculateValue(leftDrag, balanceEl.operation);
  balanceEl.rightVal = calculateValue(rightDrag, balanceEl.operation);
  
  const container = document.getElementById('lido-container') as HTMLElement | null;
  const objectiveString = container?.['objective'] ?? container?.getAttribute('objective') ?? '';
  const isCorrect = !!container && balanceResult(container, objectiveString);
  const dropElements = container ? Array.from(container.querySelectorAll<HTMLElement>('[type="drop"]')) : [];
  const filledDropCount = dropElements.filter(drop => !!container?.querySelector(`[drop-to="${drop.id}"]`)).length;
  const allDropsFilled = dropElements.length > 0 && filledDropCount === dropElements.length;
  if (balanceEl.setFeedbackColor) {
    balanceEl.setFeedbackColor(allDropsFilled && isCorrect ? '#81C127' : allDropsFilled ? '#FF0410' : '');
  }
  if (balanceEl.updateTilt) {
    if (!isCorrect) {
      balanceEl.updateTilt(0, 0);
      return;
    }
    balanceEl.updateTilt(balanceEl.leftVal, balanceEl.rightVal);
  }
}


function calculateValue(elements: HTMLElement[], operation: string): number |null {
  if (elements.length === 0) return null;
  if (operation === "count") {
    return elements.length;
  }
  const ADD = ["add", "+"] ;
  const SUBTRACT = ["subtract", "-"] ;
  const MULTIPLY = ["multiply", "*"] ;
  const DIVIDE = ["divide", "/"];
  const expr = elements
    .map(el => el.getAttribute("value") || "0")
    .join(
      ADD.includes(operation) ? " + " :
      SUBTRACT.includes(operation) ? " - " :
      MULTIPLY.includes(operation) ? " * " :
      DIVIDE.includes(operation) ? " / " : " + "
    );

  try {
    const res = equationCheck(expr) as number | boolean;

    if (typeof res === "number") {
      return res;
    } else if (typeof res === "boolean") {
      return res ? 1 : 0;
    } else {
      return parseFloat(expr) || 0;
    }
  } catch (e) {
    console.warn("invalid exp", expr);
    return 0;
  }
}

export function balanceResult(container: HTMLElement, objectiveString: string): boolean {
  const additionalCheck = container.getAttribute('equationCheck');
  if (!additionalCheck) return false;

  const balanceEl = document.querySelector('lido-balance') as any;
  if (!balanceEl) return false;

  const leftVal = balanceEl.leftVal as number | null;
  const rightVal = balanceEl.rightVal as number | null;
  const hasLeft = !isNaN(leftVal) 
  const hasRight = !isNaN(rightVal) 

  if (leftVal==null || rightVal==null) {
    return false; 
  }

  const symbol = leftVal > rightVal ? '>' : leftVal < rightVal ? '<' : '=';
  const res = objectiveString === symbol;

  
  return res;
}