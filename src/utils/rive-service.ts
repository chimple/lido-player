// rive-service.ts
export class RiveService {
  private static instance: RiveService;
  public riveInstance: any;

  private constructor() {}

  public static getInstance() {
    if (!RiveService.instance) {
      RiveService.instance = new RiveService();
    }
    return RiveService.instance;
  }

  public setRiveInstance(instance: any) {
    this.riveInstance = instance;
  }

  public getRiveInstance() {
    return this.riveInstance;
  }
}
