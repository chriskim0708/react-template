import { configureStore } from '@reduxjs/toolkit';
import { MainService, AnotherService } from '../services/apis';

export const store = configureStore({
  reducer: {
    [MainService.reducerPath]: MainService.api.reducer,
    [AnotherService.reducerPath]: AnotherService.api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(MainService.api.middleware, AnotherService.api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
