import List, { ListItem } from './models/List';
import Store from './Store';

export interface ListSnapshot {
  items: ListItem[];
}

export default class ListStore extends Store<ListSnapshot> {
  private list = new List();

  constructor() {
    super();
    this.takeSnapshot();
  }

  takeSnapshot() {
    this.snapshot = {
      items: this.list.items,
    };
  }

  update() {
    this.takeSnapshot();
    this.publish();
  }

  addItem({ listId, quantity }: { listId: number; quantity: number }) {
    this.list = this.list.addItem({ listId, quantity });
    this.update();
  }
}
