import { equationCheck} from '../utils';

export function updateBalanceOnDrop(dragElement: HTMLElement, dropElement?: HTMLElement) {
  
  const balanceEl = document.querySelector('lido-balance') as  any;
   if (!balanceEl) return;
  const leftDrag = Array.from(document.querySelectorAll('[drop-to^="lefthandle"]')) as HTMLElement[];
  const rightDrag = Array.from(document.querySelectorAll('[drop-to^="righthandle"]')) as HTMLElement[];

  balanceEl.leftVal = calculateValue(leftDrag, balanceEl.operation);
  balanceEl.rightVal = calculateValue(rightDrag, balanceEl.operation);
  console.log("leftpan:", balanceEl.leftVal, "rightpan:", balanceEl.rightVal);
   if (balanceEl.updateTilt) {
    balanceEl.updateTilt(balanceEl.leftVal, balanceEl.rightVal);
  }
}


function calculateValue(elements: HTMLElement[], operation: string): number {
  if (elements.length === 0) return 0;
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

  const leftVal = Number(balanceEl.leftVal ?? balanceEl.dataset?.leftVal ?? 0);
  const rightVal = Number(balanceEl.rightVal ?? balanceEl.dataset?.rightVal ?? 0);
  const hasLeft = !isNaN(leftVal) && container.querySelector('[drop-to^="lefthandle"]');
  const hasRight = !isNaN(rightVal) && container.querySelector('[drop-to^="righthandle"]');

  if (!hasLeft || !hasRight) {
    return false; 
  }

  const symbol = leftVal > rightVal ? '>' : leftVal < rightVal ? '<' : '=';
  const res = objectiveString === symbol;

  console.log("Result:", res);
  return res;
}