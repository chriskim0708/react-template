import Item from './models/Item';
import Ledger from './models/Ledger';

export interface LedgerSnapshot {
  items: Item[];
}

export default class LedgerStore {
  listeners = new Set<() => void>();
  snapshot = {} as LedgerSnapshot;
  ledger = new Ledger();

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

  takeSnapshot() {
    this.snapshot = {
      ...this.snapshot,
      items: this.ledger.items,
    };
  }

  update() {
    this.takeSnapshot();
    this.publish();
  }

  addItem({ ledgerId, quantity }: { ledgerId: number; quantity: number }) {
    this.ledger = this.ledger.addItem({ ledgerId, quantity });
    this.update();
  }
}
