import List from './List';

describe('Ledger', () => {
  let list: List;

  beforeEach(() => {
    list = new List();
  });

  it('adds an item', () => {
    list = list.addItem({ listId: 1, quantity: 1 });
    expect(list.items).toHaveLength(1);
    list = list.addItem({ listId: 2, quantity: 1 });
    expect(list.items).toHaveLength(2);
  });
});
