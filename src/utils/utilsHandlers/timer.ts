export class Timer {
  private static instance: Timer;

  private startTime = 0;
  private elapsedTime = 0;
  private intervalId: number | null = null;
  private onTick?: (elapsed: number) => void;

  private constructor() {}

  public static getI(onTick?: (elapsed: number) => void): Timer {
    if (!Timer.instance) {
      Timer.instance = new Timer();
    }

    if (onTick) {
      Timer.instance.onTick = onTick;
    }

    return Timer.instance;
  }

  public start() {
    if (this.intervalId) return;

    this.startTime = Date.now() - this.elapsedTime;

    this.intervalId = window.setInterval(() => {
      this.elapsedTime = Date.now() - this.startTime;
      this.onTick?.(this.elapsedTime);
    }, 1000);
  }

  public pause() {
    if (!this.intervalId) return;

    clearInterval(this.intervalId);
    this.intervalId = null;
    this.elapsedTime = Date.now() - this.startTime;
  }

  public resume() {
    if (this.intervalId) return;
    this.start();
  }

  public stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }

    this.startTime = 0;
    this.elapsedTime = 0;
    this.onTick?.(0);
  }

  public getElapsed() {
    return this.intervalId
      ? Date.now() - this.startTime
      : this.elapsedTime;
  }
}

export let ACTIVYTY_TIME_SPEND_ARRAY: number[] = [];  
