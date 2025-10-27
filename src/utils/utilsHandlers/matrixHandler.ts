import { LidoContainer } from '../constants';
import { getElementScale } from './dragDropHandler';

export function handlingMatrix(element: HTMLElement) {
  const container = document.querySelector(LidoContainer) as HTMLElement;
  if (!container) return;
  const defualtMatrix = element as HTMLElement;
  adjustSizeForSlots(container, defualtMatrix);
  splitSlots(container, defualtMatrix);
}

const splitSlots = (container: HTMLElement, defualtMatrix: HTMLElement) => {
  const defualtElements = defualtMatrix.querySelectorAll('.slot');
  const allDropMatrixes = container.querySelectorAll('lido-math-matrix[type="drop"]');
  const allDragMatrixes = container.querySelectorAll('lido-math-matrix[type="drag"]');
  let slot = 1;
  for (let i = 0; i < allDropMatrixes.length; i++) {
    const el = allDropMatrixes[i] as HTMLElement;
    const rowCount = el.getAttribute('rows') ? parseInt(el.getAttribute('rows')!) : 1;
    const colCount = el.getAttribute('cols') ? parseInt(el.getAttribute('cols')!) : 1;

    if (rowCount === 1 || colCount === 1) {
      if (rowCount === colCount) {
        const numbers = Array.from({ length: 100 }, (_, i) => i + 1)
          .sort(() => Math.random() - 0.5) // Shuffle
          .slice(0, 10); // Take first 10 unique numbers

        allDropMatrixes.forEach((item, index) => {
          const dropElement = item as HTMLElement;
          const dropPosition = defualtElements[numbers[index]] as HTMLElement;

          // Safeguard if index > available numbers
          if (!dropPosition) return;

          postioningDropElement(dropElement, dropPosition);

          const dragElement = allDragMatrixes[index] as HTMLElement;
          dragElement.setAttribute('text', (numbers[index] + 1).toString());
        });

        // return;
      }
      if (rowCount === 2 && colCount === 1) {
        const pairs = generateDoubleSquares(10);
        console.log('pairs double : ', pairs);
        allDropMatrixes.forEach((item, index) => {
          const dropElement = item as HTMLElement;
          const dropPosition = defualtElements[pairs[index][0] - 1] as HTMLElement;
          postioningDropElement(dropElement, dropPosition);
        });
        allDragMatrixes.forEach((item, index) => {
          const dragElement = item as HTMLElement;
          dragElement.setAttribute('text', pairs[index].toString());
        });
        break;
      }
      if (rowCount === 5) {
        const dropPositionElements = generateHalfHorizontalStripes(i);
        const dropPosition = defualtElements[dropPositionElements[0] - 1] as HTMLElement;
        const dragElement = allDragMatrixes[i];
        dragElement.setAttribute('text', dropPositionElements.toString());
        postioningDropElement(el, dropPosition);
      }
      if (rowCount === 10) {
        const dropPosition = defualtElements[slot] as HTMLElement;
        const dragElement = allDragMatrixes[i];
        dragElement.setAttribute('text', Array.from({ length: 10 }, (_, i) => slot + 1 + i * 10).toString());
        postioningDropElement(el, dropPosition);
        slot = slot + 2;
      } else if (colCount === 10) {
        const dropPosition = defualtElements[10 + (slot - 1)] as HTMLElement;
        const dragElement = allDragMatrixes[i];
        dragElement.setAttribute('text', Array.from({ length: 10 }, (_, i) => i + 10 + slot).toString());
        postioningDropElement(el, dropPosition);
        slot = slot + 20;
      }
    } else if (rowCount === 3 || colCount === 3) {
      const slotCell = generateSlotsFromDrops(container);
      const cellNumbers = Object.keys(slotCell).map(key => slotCell[key].cells);
      allDragMatrixes.forEach((matrix, index) => {
        const dragElement = matrix as HTMLElement;
        // let dragTextAttr = dragElement.getAttribute('text');
        if (dragElement) {
          dragElement.setAttribute('text', cellNumbers[index].toString());
        }
      });
      allDropMatrixes.forEach((matrix, index) => {
        const dropElement = matrix as HTMLElement;
        const dropPosition = defualtElements[slotCell[`slot-${index + 1}`].cells[0] - 1] as HTMLElement;
        postioningDropElement(dropElement, dropPosition);
      });
      break; // stops the loop immediately
    } else if (rowCount === 2 || colCount === 2) {

      if (rowCount === colCount) {
        const pairs = generate2by2Squares(10);
        allDropMatrixes.forEach((item, index) => {
          const dropElement = item as HTMLElement;
          const dropPosition = defualtElements[pairs[index][0] - 1] as HTMLElement;
          postioningDropElement(dropElement, dropPosition);
        });
        allDragMatrixes.forEach((item, index) => {
          const dragElement = item as HTMLElement;
          dragElement.setAttribute('text', pairs[index].toString());
        });
        break;
      }
    }
  }
};

function generateSlotsFromDrops(container: HTMLElement) {
  const gridSize = 10;
  let availableCells = Array.from({ length: 100 }, (_, i) => i + 1);
  const occupied = new Set<number>();

  type Slot = { cells: number[]; width: number; height: number };
  const slots: Record<string, Slot> = {};
  let generated = 0;

  const getCell = (row: number, col: number) => row * gridSize + col + 1;

  // Get all <lido-math-matrix type="drop">
  const allDropMatrixes = container.querySelectorAll('lido-math-matrix[type="drop"]');

  for (const matrix of Array.from(allDropMatrixes)) {
    const width = parseInt(matrix.getAttribute('cols') || '1');
    const height = parseInt(matrix.getAttribute('rows') || '1');
    const possiblePositions: number[][] = [];

    // generate all possible top-left positions
    for (let row = 0; row <= gridSize - height; row++) {
      for (let col = 0; col <= gridSize - width; col++) {
        const cells: number[] = [];
        let canPlace = true;

        for (let r = 0; r < height; r++) {
          for (let c = 0; c < width; c++) {
            const cell = getCell(row + r, col + c);
            if (occupied.has(cell)) {
              canPlace = false;
              break;
            }
            cells.push(cell);
          }
          if (!canPlace) break;
        }

        if (canPlace) possiblePositions.push(cells);
      }
    }

    if (possiblePositions.length === 0) {
      console.warn(`No space left for matrix ${generated + 1}`);
      continue;
    }

    // Pick a random valid position
    const randomCells = possiblePositions[Math.floor(Math.random() * possiblePositions.length)];

    // Mark as occupied & remove from available
    randomCells.forEach(c => {
      occupied.add(c);
      availableCells = availableCells.filter(x => x !== c);
    });

    generated++;
    slots[`slot-${generated}`] = { cells: randomCells, width, height };
  }

  return slots;
}

const postioningDropElement = (dropElement: HTMLElement, dropPosition: HTMLElement) => {
  const container = document.getElementById(LidoContainer) as HTMLElement;
  const containerScale = getElementScale(container);
  dropElement.style.transform = 'translate(0,0)';

  const posRect = dropPosition.getBoundingClientRect();
  const dropRect = dropElement.getBoundingClientRect();

  const posCenterX = posRect.left + posRect.width / 2;
  const posCenterY = posRect.top + posRect.height / 2;
  const dropCenterX = dropRect.left + dropRect.width / 2;
  const dropCenterY = dropRect.top + dropRect.height / 2;

  const scaledLeft = (posCenterX - dropCenterX) / containerScale;
  const scaledTop = (posCenterY - dropCenterY) / containerScale;

  const rowCount = dropElement.getAttribute('rows') ? parseInt(dropElement.getAttribute('rows')) : 1;
  const colCount = dropElement.getAttribute('cols') ? parseInt(dropElement.getAttribute('cols')) : 1;
  const elementWidth = parseInt(dropPosition.style.width);

  if (rowCount === 1 || colCount === 1) {
    if (rowCount === colCount) {
      dropElement.style.transform = `translate(${scaledLeft}px, ${scaledTop}px)`;
      return;
    } else if (rowCount > colCount) {
      if (rowCount === 10) {
        dropElement.style.transform = `translate(${scaledLeft + (elementWidth * 4 + elementWidth / 2)}px, ${scaledTop}px)`;
      } else if (rowCount === 5) {
        dropElement.style.transform = `translate(${scaledLeft + elementWidth * 2}px, ${scaledTop}px)`;
      } else if (rowCount === 2) {
        dropElement.style.transform = `translate(${scaledLeft + elementWidth / 2}px, ${scaledTop}px)`;
      }
    } else if (rowCount < colCount) {
      if (colCount === 10) {
        dropElement.style.transform = `translate(${scaledLeft}px, ${scaledTop + elementWidth * 4 + elementWidth * 0.1842 + elementWidth / 2}px)`;
      } else if (colCount === 5) {
        dropElement.style.transform = `translate(${scaledLeft}px, ${scaledTop + elementWidth * 2 + elementWidth * 0.0921}px)`;
      }
    }
    return;
  }

  if (rowCount === colCount) {
    if (rowCount === 2) {
      dropElement.style.transform = `translate(${scaledLeft + elementWidth / 2}px, ${scaledTop + elementWidth / 2 + 4}px)`;
      return;
    }
    dropElement.style.transform = `translate(${scaledLeft + elementWidth}px, ${scaledTop + elementWidth + 4}px)`;
    return;
  }

  if (rowCount === 3) {
    if (colCount === 2) {
      dropElement.style.transform = `translate(${scaledLeft + elementWidth}px, ${scaledTop + elementWidth / 2 + 4}px)`;
      return;
    } else if (colCount === 1) {
      dropElement.style.transform = `translate(${scaledLeft + elementWidth}px, ${scaledTop}px)`;
      return;
    }
  }

  if (rowCount === 2) {
    if (colCount === 3) {
      dropElement.style.transform = `translate(${scaledLeft + elementWidth / 2}px, ${scaledTop + elementWidth + 4}px)`;
      return;
    } else if (colCount === 1) {
      dropElement.style.transform = `translate(${scaledLeft + elementWidth / 2}px, ${scaledTop}px)`;
      return;
    }
  }
};

const adjustSizeForSlots = (container: HTMLElement, defualtMatrix: HTMLElement) => {
  const defualtElement = defualtMatrix.querySelector('.slot') as HTMLElement;
  const width = defualtElement.style.width;
  const allDropMatrixes = container.querySelectorAll('lido-math-matrix[type="drop"]');
  const allDragMatrixes = container.querySelectorAll('lido-math-matrix[type="drag"]');

  allDragMatrixes.forEach(item => {
    const el = item as HTMLElement;
    Array.from(el.querySelectorAll('.slot')).forEach(slot => {
      const slotEl = slot as HTMLElement;
      slotEl.parentElement.style.width = width;
      slotEl.style.width = width;
      slotEl.style.height = width;
    });
  });
  allDropMatrixes.forEach(item => {
    const el = item as HTMLElement;
    Array.from(el.querySelectorAll('.slot')).forEach(slot => {
      const slotEl = slot as HTMLElement;
      slotEl.parentElement.style.width = width;
      slotEl.style.width = width;
      slotEl.style.height = width;
    });
  });
};

function generateHalfHorizontalStripes(index: number) {
  const numbers = Array.from({ length: 10 }, (_, i) => index + 1 + i * 10);

  const randomPlace = Math.floor(Math.random() * 6);

  const startSlot = numbers[randomPlace];

  console.log(
    'kedachuruchu',
    Array.from({ length: 5 }, (_, i) => startSlot + i * 10),
  );

  return Array.from({ length: 5 }, (_, i) => startSlot + i * 10);
}

function generate2by2Squares(count = 16) {
  const gridSize = 10;
  const squares = [];
  const usedCells = new Set();

  function getCell(row, col) {
    return (row - 1) * gridSize + col;
  }

  while (squares.length < count) {
    const row = Math.floor(Math.random() * (gridSize - 1)) + 1; // 1–9
    const col = Math.floor(Math.random() * (gridSize - 1)) + 1; // 1–9

    const square = [getCell(row, col), getCell(row, col + 1), getCell(row + 1, col), getCell(row + 1, col + 1)];

    // Skip if overlapping with previous
    if (square.some(cell => usedCells.has(cell))) continue;

    // Mark cells as used
    square.forEach(cell => usedCells.add(cell));
    squares.push(square);
  }

  return squares;
}

function generateDoubleSquares(count = 16) {
  const gridSize = 10;
  const pairs = [];
  const usedCells = new Set();

  function getCell(row, col) {
    return (row - 1) * gridSize + col;
  }

  while (pairs.length < count) {
    const row = Math.floor(Math.random() * (gridSize - 1)) + 1; // 1–9
    const col = Math.floor(Math.random() * gridSize) + 1; // 1–10

    const top = getCell(row, col);
    const bottom = getCell(row + 1, col);

    // Skip if already used
    if (usedCells.has(top) || usedCells.has(bottom)) continue;

    pairs.push([top, bottom]);
    usedCells.add(top);
    usedCells.add(bottom);
  }

  return pairs;
}
