import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
  RouterProvider,
  Outlet,
} from 'react-router-dom';
import { createPostsRoute, createSignInRoute, createPoliciesRoute } from './routes';
import { useQueryClient } from '@tanstack/react-query';
import { getQueryCache } from '@/adapters/storage';
import { queryKeys } from './constants/queries';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {createPostsRoute()}
      {createSignInRoute()}
      {createPoliciesRoute()}
      <Route index element={<Navigate to="/signin" replace />} />
    </Route>,
  ),
);

function App() {
  const queryClient = useQueryClient();
  queryClient.setQueryData([queryKeys.token], getQueryCache(queryKeys.token));
  return (
    <>
      <RouterProvider router={router} />
      <Outlet />
    </>
  );
}

export default App;
