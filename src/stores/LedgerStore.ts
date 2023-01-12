import Item from './models/Item';
import Ledger from './models/Ledger';
import Store from './Store';

export interface LedgerSnapshot {
  items: Item[];
}

export default class LedgerStore extends Store<LedgerSnapshot> {
  private ledger = new Ledger();

  constructor() {
    super();
    this.takeSnapshot();
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
