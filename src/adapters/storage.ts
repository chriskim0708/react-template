const queryCacheKey = 'REACT_QUERY_OFFLINE_CACHE';

type QueryKey = string | number[];

interface QueryStorage {
  clientState: {
    queries: {
      queryKey: QueryKey[];
      state: {
        data: unknown;
      };
    }[];
  };
}

const getQueryStorage = () => {
  return JSON.parse(localStorage.getItem(queryCacheKey) || 'null');
};

export const getQueryCache = (key: string) => {
  const storage = getQueryStorage() as QueryStorage | null;
  const query = storage?.clientState.queries.find((query) =>
    (query.queryKey as QueryKey[]).includes(key),
  );
  return query?.state.data;
};
