import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
  RouterProvider,
  Outlet,
} from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import {
  createPostsRoute,
  createSignInRoute,
  createPoliciesRoute,
  createLedgersRoute,
} from './routes';
import { useQueryClient } from '@tanstack/react-query';
import { getQueryCache } from '@/adapters/storage';
import { queryKeys } from './constants/queries';
import { typography } from '@/styles/emotion';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {createPostsRoute()}
      {createSignInRoute()}
      {createPoliciesRoute()}
      {createLedgersRoute()}
      <Route index element={<Navigate to="/signin" replace />} />
    </Route>,
  ),
);

function App() {
  const queryClient = useQueryClient();
  queryClient.setQueryData([queryKeys.token], getQueryCache(queryKeys.token));
  return (
    <ThemeProvider
      theme={{
        typography,
      }}
    >
      <RouterProvider router={router} />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
