import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
  RouterProvider,
  Outlet,
} from 'react-router-dom';
import {
  createPostsRoute,
  createSignInRoute,
  createPoliciesRoute,
  createLedgersRoute,
} from './routes';
import { useQueryClient } from '@tanstack/react-query';
import { getQueryCache } from '@/adapters/storage';
import { queryKeys } from './constants/queries';
import Cart from '@/apps/cart/Cart';

const Test = ({ str }: { str?: string }) => {
  return <>{str}</>;
};
const Hoc = () => {
  return <>{Cart({ children: <Test /> })({ str: 'sadfasfd' })}</>;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {createPostsRoute()}
      {createSignInRoute()}
      {createPoliciesRoute()}
      {createLedgersRoute()}
      <Route path="cart" element={<Hoc />} />
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
