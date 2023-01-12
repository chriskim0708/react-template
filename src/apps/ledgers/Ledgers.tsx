import { FC } from 'react';
import useLedgerStore from '@/hooks/useLedgerStore';

const LedgerList = () => {
  const [snapshot] = useLedgerStore();
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
  const [, ledgerStore] = useLedgerStore();

  const onClick = () => {
    ledgerStore.addItem({ ledgerId: Math.random() * 10000, quantity: 2 });
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
