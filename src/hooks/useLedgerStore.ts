import { useSyncExternalStore } from 'react';

import LedgerStore, { LedgerSnapshot } from '@/stores/LedgerStore';

const ledgerStore = new LedgerStore();

const useLedgerStore = (): [LedgerSnapshot, LedgerStore] => {
  const snapshot = useSyncExternalStore(
    (onStoreChange) => {
      ledgerStore.addListener(onStoreChange);
      return () => ledgerStore.removeListener(onStoreChange);
    },
    () => ledgerStore.getSnapshot(),
  );
  return [snapshot, ledgerStore];
};

export default useLedgerStore;
