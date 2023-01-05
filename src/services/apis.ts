import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export namespace MainService {
  export const reducerPath = 'mainApi';
  export const api = createApi({
    reducerPath,
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://jsonplaceholder.typicode.com',
    }),
    endpoints: () => ({}),
  });
}

export namespace AnotherService {
  export const reducerPath = 'anotherApi';
  export const api = createApi({
    reducerPath,
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://jsonplaceholder.typicode.com',
    }),
    endpoints: () => ({}),
  });
}
