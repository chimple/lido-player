const transitionGuardEvents = ['pointerup', 'pointercancel', 'touchend', 'mouseup', 'click'] as const;

let transitionGuardActive = false;
let transitionGuardPointerId: number | null = null;
let transitionGuardTimer: number | undefined;
let trackedPointerId: number | null = null;

const clearTransitionGuard = (): void => {
  transitionGuardActive = false;
  transitionGuardPointerId = null;

  if (transitionGuardTimer !== undefined) {
    window.clearTimeout(transitionGuardTimer);
    transitionGuardTimer = undefined;
  }

  transitionGuardEvents.forEach(eventName => {
    window.removeEventListener(eventName, transitionGuardHandler, true);
  });
  window.removeEventListener('pointerdown', transitionGuardStartHandler, true);
  window.removeEventListener('touchstart', transitionGuardStartHandler, true);
};

const transitionGuardStartHandler = (): void => {
  if (transitionGuardActive) clearTransitionGuard();
};

const transitionGuardHandler = (event: Event): void => {
  if (!transitionGuardActive || !event.target) return;

  const activeContainer = document.querySelector('lido-container');
  if (!activeContainer || !(event.target instanceof Node) || !activeContainer.contains(event.target)) return;

  if (
    event.type === 'pointerup' &&
    transitionGuardPointerId !== null &&
    (event as PointerEvent).pointerId !== transitionGuardPointerId
  ) {
    return;
  }

  event.preventDefault();
  event.stopImmediatePropagation();
};

const trackPointerDown = (event: Event): void => {
  if (event.type === 'pointerdown') {
    const pointerId = (event as PointerEvent).pointerId;
    trackedPointerId = Number.isFinite(pointerId) ? pointerId : null;
    return;
  }

  if (trackedPointerId !== null) return;
  const touch = (event as TouchEvent).changedTouches?.[0];
  trackedPointerId = touch?.identifier ?? null;
};

export const startTransitionInputTracking = (): void => {
  window.addEventListener('pointerdown', trackPointerDown, true);
  window.addEventListener('touchstart', trackPointerDown, true);
};

export const stopTransitionInputTracking = (): void => {
  window.removeEventListener('pointerdown', trackPointerDown, true);
  window.removeEventListener('touchstart', trackPointerDown, true);
  trackedPointerId = null;
  clearTransitionGuard();
};

export const armTransitionInputGuard = (): void => {
  clearTransitionGuard();
  transitionGuardActive = true;
  transitionGuardPointerId = trackedPointerId;

  transitionGuardEvents.forEach(eventName => {
    window.addEventListener(eventName, transitionGuardHandler, true);
  });
  window.addEventListener('pointerdown', transitionGuardStartHandler, true);
  window.addEventListener('touchstart', transitionGuardStartHandler, true);
  transitionGuardTimer = window.setTimeout(clearTransitionGuard, 500);
};

export const getTrackedTransitionPointerId = (): number | null => trackedPointerId;

