import Item from './Item';

export default class Ledger {
  items: Item[] = [];

  constructor({ items = [] }: { items?: Item[] } = {}) {
    this.items = items;
  }

  addItem({ ledgerId, quantity }: { ledgerId: number; quantity: number }) {
    const id = Math.max(0, ...this.items.map((i) => i.id)) + 1;
    const item = new Item({ id, ledgerId, quantity });

    return new Ledger({
      items: [...this.items, item],
    });
  }
}
