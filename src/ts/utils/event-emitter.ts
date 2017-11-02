interface IEventRegistry {
  [key: string]: Function;
}

interface IEventHandler {
  (value: any): void;
}

class MyEventEmitter {
  private registry: IEventRegistry;
  constructor() {
    this.registry = {};
  }

  on(event: string, callback: IEventHandler) {
    if (!this.registry[event]) {
      this.registry[event] = callback;
    }
  }

  emit(event: string, value?: any) {
    this.registry[event](value);
  }
}

export { MyEventEmitter };