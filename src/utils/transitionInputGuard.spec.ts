import { triggerNextContainer, triggerPrevcontainer } from './utils';
import { AudioPlayer } from './audioPlayer';
import {
  armTransitionInputGuard,
  startTransitionInputTracking,
  stopTransitionInputTracking,
} from './transitionInputGuard';

const pointerEvent = (type: string, pointerId: number): Event => {
  const event = new Event(type, { bubbles: true, cancelable: true });
  Object.defineProperty(event, 'pointerId', { value: pointerId });
  return event;
};

const activeContainer = (): HTMLElement => {
  const container = document.createElement('lido-container');
  document.body.appendChild(container);
  return container;
};

describe('transition input guard', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.spyOn(AudioPlayer.prototype, 'stop').mockImplementation(() => undefined);
    activeContainer();
    startTransitionInputTracking();
  });

  afterEach(() => {
    jest.restoreAllMocks();
    stopTransitionInputTracking();
    document.body.innerHTML = '';
    jest.useRealTimers();
  });

  it('guards residual pointerup and pointercancel after Next navigation', () => {
    const option = document.createElement('button');
    document.querySelector('lido-container')!.appendChild(option);
    window.dispatchEvent(pointerEvent('pointerdown', 7));
    triggerNextContainer();
    const pointerUp = pointerEvent('pointerup', 7);
    const pointerCancel = pointerEvent('pointercancel', 7);
    option.dispatchEvent(pointerUp);
    option.dispatchEvent(pointerCancel);

    expect(pointerUp.defaultPrevented).toBe(true);
    expect(pointerCancel.defaultPrevented).toBe(true);
  });

  it('guards residual pointerup after Previous navigation', () => {
    const option = document.createElement('button');
    document.querySelector('lido-container')!.appendChild(option);
    window.dispatchEvent(pointerEvent('pointerdown', 8));
    triggerPrevcontainer();
    const pointerUp = pointerEvent('pointerup', 8);
    option.dispatchEvent(pointerUp);

    expect(pointerUp.defaultPrevented).toBe(true);
  });

  it.each(['touchend', 'mouseup', 'click'])('guards residual %s', eventType => {
    const option = document.createElement('button');
    document.querySelector('lido-container')!.appendChild(option);
    armTransitionInputGuard();
    const event = new Event(eventType, { bubbles: true, cancelable: true });
    option.dispatchEvent(event);

    expect(event.defaultPrevented).toBe(true);
  });

  it('allows a fresh interaction after navigation', () => {
    const option = document.createElement('button');
    document.querySelector('lido-container')!.appendChild(option);
    const handler = jest.fn();
    option.addEventListener('click', handler);

    armTransitionInputGuard();
    window.dispatchEvent(new Event('pointerdown', { bubbles: true }));
    option.dispatchEvent(new Event('click', { bubbles: true }));

    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('clears the guard after 500 ms', () => {
    const option = document.createElement('button');
    document.querySelector('lido-container')!.appendChild(option);
    const handler = jest.fn();
    option.addEventListener('click', handler);

    armTransitionInputGuard();
    jest.advanceTimersByTime(500);
    option.dispatchEvent(new Event('click', { bubbles: true }));

    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('removes listeners and timers during cleanup', () => {
    const option = document.createElement('button');
    document.querySelector('lido-container')!.appendChild(option);
    const handler = jest.fn();
    option.addEventListener('click', handler);

    armTransitionInputGuard();
    stopTransitionInputTracking();
    option.dispatchEvent(new Event('click', { bubbles: true }));
    jest.advanceTimersByTime(500);

    expect(handler).toHaveBeenCalledTimes(1);
  });
});

