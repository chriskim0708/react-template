export class ListItem {
  readonly id;
  readonly listId;
  readonly quantity;

  constructor({ id, listId, quantity }: { id: number; listId: number; quantity: number }) {
    this.id = id;
    this.listId = listId;
    this.quantity = quantity;
  }
}

export default class List {
  items: ListItem[] = [];

  constructor({ items = [] }: { items?: ListItem[] } = {}) {
    this.items = items;
  }

  addItem({ listId, quantity }: { listId: number; quantity: number }) {
    const id = Math.max(0, ...this.items.map((i) => i.id)) + 1;
    const item = new ListItem({ id, listId, quantity });

    return new List({
      items: [...this.items, item],
    });
  }
}
