import { triggerNextContainer } from "../utils"; 

/* ------------------ helpers ------------------ */

const wait = (ms: number) =>
  new Promise<void>(resolve => setTimeout(resolve, ms));

/* ------------------ animation ------------------ */

const animationToRemoveEquationSolvedCellForNimbleTable = (
  activeCell: HTMLElement,
  container: HTMLElement
) => {
  return new Promise<void>((resolve) => {
    const keyframes = `
      @keyframes widthDecrease {
        0% { 
          background-color: ${activeCell.style.backgroundColor};
          height: ${activeCell.style.height};
          margin: ${activeCell.style.margin};
        }
        100% { background-color: transparent; height: 0px; margin: 0px; }
      }`;

    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

    activeCell.style.animation = `widthDecrease 0s`;

    activeCell.addEventListener(
      "animationend",
      () => {
        activeCell.remove();
        // Trigger next container only after the last calculate cell is removed
        const remainingCalculateTypes = container.querySelectorAll("[type='calculate']");
        if (remainingCalculateTypes.length === 0) {
          setTimeout(() => triggerNextContainer(), 2000);
        }

        resolve();
      },
      { once: true }
    );
  });
};

/* ------------------ PRACTICE MODE ------------------ */

const checkEquationOfActiveCell = async (container: HTMLElement) => {
  const calculatorValue =
    container.querySelector("#lidoCalculator")?.getAttribute("value") || "";

  const allCalculateTypes = container.querySelectorAll("[type='calculate']");
  const activeCell = allCalculateTypes[0] as HTMLElement;
  if (!activeCell) return;

  const activeCellValue = Number(activeCell["value"]);
  const calculateValue = Number(calculatorValue);

  if (activeCellValue !== calculateValue) return;

  const equation = activeCell["string"];
  const element1 = container.querySelector("#dummy111") as HTMLElement;
  const element2 = container.querySelector("#dummy112") as HTMLElement;

  // 1. mascot animation
  await wait(3000);

  // Save previous element2 BEFORE overwriting
  const previousElement2Content = element2.innerHTML;

  // Replace ?
  activeCell.innerHTML = equation.replaceAll("?", calculateValue.toString());

  // Update element2 with NEW content
  element2.innerHTML = activeCell.innerHTML;

  // 3. animate out
  await animationToRemoveEquationSolvedCellForNimbleTable(activeCell, container);

  // 4. update element1 ONLY from second equation onwards
  if (previousElement2Content) {
    element1.innerHTML = previousElement2Content;
  }
};

/* ------------------ MAIN HANDLER ------------------ */

let score = 0;

export const handleSolvedEquationSubmissionAndScoreUpdate = async (
  container?: HTMLElement
) => {
  const resolvedContainer =
    container ?? (document.getElementById("lido-container") as HTMLElement);
  if (!resolvedContainer) return;

  const calculatorValue =
    resolvedContainer.querySelector("#lidoCalculator")?.getAttribute("value") ||
    "";
  if (!calculatorValue.length) return;

  const allCalculateTypes =
    resolvedContainer.querySelectorAll("[type='calculate']");
  const activeCell = allCalculateTypes[0] as HTMLElement;
  if (!activeCell) return;

  const isContinueOnCorrect =
    resolvedContainer.getAttribute("is-continue-on-correct") === "true";

  const activeCellValue = Number(activeCell["value"]);
  const calculateValue = Number(calculatorValue);

  const element1 = resolvedContainer.querySelector("#dummy111") as HTMLElement;
  const element2 = resolvedContainer.querySelector("#dummy112") as HTMLElement;

  /* ---------- PRACTICE MODE ---------- */
  if (isContinueOnCorrect) {
    await checkEquationOfActiveCell(resolvedContainer);
    return;
  }

  /* ---------- TEST MODE ---------- */

  // Score update
  if (activeCellValue === calculateValue) {
    score++;
  } else {
    if (score > 0) score--;
  }
  console.log("SCORE:", score);

  const equation = activeCell["string"];

  //1. mascot animation
  await wait(3000);


  // Save previous element2 BEFORE overwrite
  const previousElement2Content = element2.innerHTML;

  // Replace ?
  activeCell.innerHTML = equation.replaceAll("?", calculateValue.toString());

  // Update element2 with new content
  element2.innerHTML = activeCell.innerHTML;

  //3. animate out
  await animationToRemoveEquationSolvedCellForNimbleTable(
    activeCell,
    resolvedContainer
  );

  //4. update element1 ONLY after animation & only if previous exists
  if (previousElement2Content) {
    element1.innerHTML = previousElement2Content;
  }
};
