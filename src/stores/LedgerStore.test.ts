import LedgerStore from './LedgerStore';
import Item from './models/Item';

test('LedgerStore', () => {
  const ledgerStore = new LedgerStore();
  const handleChange = jest.fn();

  ledgerStore.addListener(handleChange);
  ledgerStore.addItem({ ledgerId: 1, quantity: 1 });

  expect(handleChange).toBeCalled();

  expect(ledgerStore.getSnapshot()).toEqual({
    items: [new Item({ id: 1, ledgerId: 1, quantity: 1 })],
  });
});
