import { useSyncExternalStore } from 'react';

import ListStore, { ListSnapshot } from '@/stores/ListStore';

const listStore = new ListStore();

const useListStore = (): [ListSnapshot, ListStore] => {
  const snapshot = useSyncExternalStore(
    (onStoreChange) => {
      listStore.addListener(onStoreChange);
      return () => listStore.removeListener(onStoreChange);
    },
    () => listStore.getSnapshot(),
  );
  return [snapshot, listStore];
};

export default useListStore;
