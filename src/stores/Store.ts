export default abstract class Store<Snapshot> {
  protected listeners = new Set<() => void>();
  protected snapshot = {} as Snapshot;

  addListener(listener: () => void) {
    this.listeners.add(listener);
  }

  removeListener(listener: () => void) {
    this.listeners.delete(listener);
  }

  getSnapshot() {
    return this.snapshot;
  }

  publish() {
    this.listeners.forEach((listener) => listener());
  }

  abstract takeSnapshot(): void;
  abstract update(): void;
}
