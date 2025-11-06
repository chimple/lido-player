import { triggerNextContainer } from "../utils"; 

// Helper to animate and remove the active equation cell
const animationToRemoveEquationSolvedCellForNimbleTable = (activeCell: HTMLElement, allCalculateTypes: NodeListOf<Element>) => {
  return new Promise<void>((resolve) => {
    const keyframes = `
      @keyframes widthDecrease {
        0% { 
          background-color: ${activeCell.style.backgroundColor};
          height: ${activeCell.style.height};
          margin: ${activeCell.style.margin};
          ${activeCell.innerHTML = ""}
        }
        100% { background-color: transparent; height: 0px; margin: 0px; }
      }`;

    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    activeCell.style.animation = `widthDecrease 0.1s`;

    activeCell.addEventListener('animationend', () => {
      activeCell.style.height = '0px';
      activeCell.style.margin = '0px';
      activeCell.style.backgroundColor = 'transparent';
      activeCell.remove();

      // Trigger next container if last cell
      if (allCalculateTypes.length === 1) {
        setTimeout(() => triggerNextContainer(), 2000);
      }

      resolve();
    });
  });
};


// Function: checks and animates equation when correct
const checkEquationOfActiveCell = async (container: HTMLElement) => {   
  const calculatorValue = container.querySelector("#lidoCalculator")?.getAttribute("value");
  const allCalculateTypes = document.querySelectorAll("[type='calculate']");    
  const activeCell = allCalculateTypes[0] as HTMLElement;

  const activeCellValue = Number(activeCell["value"])
  const calculteValue = Number(calculatorValue)
  
  if (!activeCell || calculteValue !== activeCellValue) return;

  const equation = activeCell["string"];

  // Replace equation after a short delay
  //await new Promise(r => setTimeout(r, 200));
  activeCell.innerHTML = equation.replaceAll("?", calculteValue);  

  const element2 = container.querySelector("#dummy112") as HTMLElement;
  element2.innerHTML = activeCell.innerHTML;

  // Animate and clean up
  await animationToRemoveEquationSolvedCellForNimbleTable(activeCell, allCalculateTypes);
};

// Function: handles equation check when clicked on OK
let score=0;
export const handleSolvedEquationSubmissionAndScoreUpdate = async () => {
  const container = document.getElementById('lido-container') as HTMLElement;
  const calculatorValue = container.querySelector("#lidoCalculator")?.getAttribute("value");
  const allCalculateTypes = document.querySelectorAll("[type='calculate']");    
  const activeCell = allCalculateTypes[0] as HTMLElement;
  const isContinueOnCorrect = container.getAttribute("is-continue-on-correct") === "true";

  const activeCellValue = Number(activeCell["value"])
  const calculteValue = Number(calculatorValue)
  
  
  const element1 = container.querySelector("#dummy111") as HTMLElement;
  const element2 = container.querySelector("#dummy112") as HTMLElement;

  // PRACTICE MODE (continue only if correct)
  if (isContinueOnCorrect) {
    if (element2.innerHTML.length > 0 && activeCellValue === calculteValue) {
      element1.innerHTML = element2.innerHTML;
    }
    await checkEquationOfActiveCell(container);
  }

  // TEST MODE (store all, animate regardless of correctness)
  else {
    if(calculatorValue.length>0){
      if(calculatorValue === activeCell["value"]){
        score++;
        console.log("SCOREEEE", score)
      }else{
        if(score>0){ score--;}
        console.log("SCOREEEE", score)
      }
      if (element2.innerHTML.length > 0) {
        element1.innerHTML = element2.innerHTML;
      }
      const equation = activeCell["string"];
      // Replace value visually
      activeCell.innerHTML = equation.replaceAll("?", calculteValue);  
      element2.innerHTML = activeCell.innerHTML; 

      // Animate
      await animationToRemoveEquationSolvedCellForNimbleTable(activeCell, allCalculateTypes);
    }
  }
};


