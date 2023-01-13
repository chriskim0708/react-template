import { FC } from 'react';
import useListStore from '@/hooks/useListStore';

const LedgerList = () => {
  const [snapshot] = useListStore();
  const { items } = snapshot;
  return (
    <div>
      {items.map((v) => (
        <div key={v.id}>quantity: {v.quantity}</div>
      ))}
    </div>
  );
};

const Ledgers: FC = () => {
  const [, listStore] = useListStore();

  const onClick = () => {
    listStore.addItem({ listId: Math.random() * 10000, quantity: 2 });
  };

  return (
    <>
      <div>
        <button onClick={onClick}>add item</button>
        <LedgerList />
      </div>
    </>
  );
};

export default Ledgers;
