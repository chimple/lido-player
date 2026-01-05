export class Timer {
  private startTime = 0;
  private elapsedTime = 0;
  private intervalId: number | null = null;
  private onTick: (elapsed: number) => void;

  constructor(onTick: (elapsed: number) => void) {
    this.onTick = onTick;
  }

  start() {
    if (this.intervalId) return;

    this.startTime = Date.now();
    this.intervalId = window.setInterval(() => {
      this.elapsedTime = Date.now() - this.startTime;
      this.onTick(this.elapsedTime);
    }, 1000);
  }

  pause() {
    if (!this.intervalId) return;

    clearInterval(this.intervalId);
    this.intervalId = null;
    this.elapsedTime = Date.now() - this.startTime;
  }

  resume() {
    if (this.intervalId) return;

    this.startTime = Date.now() - this.elapsedTime;
    this.intervalId = window.setInterval(() => {
      this.elapsedTime = Date.now() - this.startTime;
      this.onTick(this.elapsedTime);
    }, 1000);
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.startTime = 0;
    this.elapsedTime = 0;
  }

  getElapsed() {
    return this.intervalId
      ? Date.now() - this.startTime
      : this.elapsedTime;
  }
}
 
export const screenTimer = new Timer(ms => {
});