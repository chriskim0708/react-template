import { FC } from 'react';
import useLedgerStore from '@/hooks/useLedgerStore';

const Ledgers: FC = () => {
  const [snapshot] = useLedgerStore();
  const { items } = snapshot;
  return <>Ledgers</>;
};

export default Ledgers;
