import ListStore from './ListStore';
import { ListItem } from './models/List';

test('ListStore', () => {
  const listStore = new ListStore();
  const handleChange = jest.fn();

  listStore.addListener(handleChange);
  listStore.addItem({ listId: 1, quantity: 1 });

  expect(handleChange).toBeCalled();

  expect(listStore.getSnapshot()).toEqual({
    items: [new ListItem({ id: 1, listId: 1, quantity: 1 })],
  });
});
