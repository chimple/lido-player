import { LIDO_INTERACTION_CLEANUP_EVENT, LidoContainer } from '../constants';

type MoveElement = HTMLElement & {
  __lidoMoveCleanup?: () => void;
};

const getContainerScale = (container: HTMLElement): number => {
  const transform = window.getComputedStyle(container).transform;
  if (!transform || transform === 'none') return 1;

  const matrix = new DOMMatrixReadOnly(transform);
  return matrix.a || 1;
};

const readPixelPosition = (value: string, fallback: number): number => {
  const parsed = parseFloat(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const getParentContainer = (element: HTMLElement): HTMLElement | null => {
  return element.closest<HTMLElement>('lido-container') ?? document.getElementById(LidoContainer);
};

export function enableFreeMove(element: HTMLElement): void {
  const moveElement = element as MoveElement;
  moveElement.__lidoMoveCleanup?.();

  const container = getParentContainer(element);
  if (!container) return;

  let isMoving = false;
  let didMove = false;
  let startX = 0;
  let startY = 0;
  let initialLeft = 0;
  let initialTop = 0;

  const onStart = (event: MouseEvent | TouchEvent): void => {
    if (container.getAttribute('canplay') !== 'false') return;

    const point = event instanceof MouseEvent ? event : event.touches[0];
    if (!point) return;

    const computedStyle = window.getComputedStyle(element);
    if (computedStyle.position === 'static') {
      element.style.position = 'absolute';
    }

    isMoving = true;
    didMove = false;
    startX = point.clientX;
    startY = point.clientY;
    initialLeft = readPixelPosition(element.style.left || computedStyle.left, element.offsetLeft);
    initialTop = readPixelPosition(element.style.top || computedStyle.top, element.offsetTop);

    element.style.cursor = 'grabbing';
    element.style.transition = 'none';
    element.style.zIndex = element.style.zIndex || element.getAttribute('z') || '1';

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onEnd);
    document.addEventListener('touchmove', onMove, { passive: false });
    document.addEventListener('touchend', onEnd);
  };

  const onMove = (event: MouseEvent | TouchEvent): void => {
    if (!isMoving) return;
    if (event.cancelable) event.preventDefault();

    const point = event instanceof MouseEvent ? event : event.touches[0];
    if (!point) return;

    didMove = true;
    const scale = getContainerScale(container);
    const nextLeft = initialLeft + (point.clientX - startX) / scale;
    const nextTop = initialTop + (point.clientY - startY) / scale;

    element.style.left = `${nextLeft}px`;
    element.style.top = `${nextTop}px`;
  };

  const removeDocumentListeners = () => {
    document.removeEventListener('mousemove', onMove);
    document.removeEventListener('mouseup', onEnd);
    document.removeEventListener('touchmove', onMove);
    document.removeEventListener('touchend', onEnd);
  };

  const onEnd = (): void => {
    if (!isMoving) return;

    isMoving = false;
    removeDocumentListeners();
    element.style.cursor = 'move';

    if (!didMove) return;

    element.setAttribute('x', element.style.left);
    element.setAttribute('y', element.style.top);
  };

  const preventMovedClick = (event: MouseEvent) => {
    if (!didMove) return;
    event.preventDefault();
    event.stopPropagation();
    didMove = false;
  };

  const cleanup = () => {
    isMoving = false;
    removeDocumentListeners();
    element.removeEventListener('mousedown', onStart);
    element.removeEventListener('touchstart', onStart);
    element.removeEventListener('click', preventMovedClick, true);
    element.removeEventListener(LIDO_INTERACTION_CLEANUP_EVENT, cleanup);
    if (moveElement.__lidoMoveCleanup === cleanup) {
      delete moveElement.__lidoMoveCleanup;
    }
  };

  moveElement.__lidoMoveCleanup = cleanup;
  element.style.cursor = 'move';
  element.style.touchAction = 'none';
  element.addEventListener('mousedown', onStart);
  element.addEventListener('touchstart', onStart);
  element.addEventListener('click', preventMovedClick, true);
  element.addEventListener(LIDO_INTERACTION_CLEANUP_EVENT, cleanup);
}
