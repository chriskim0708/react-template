import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
  RouterProvider,
  Outlet,
} from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { useQueryClient } from '@tanstack/react-query';
import { getQueryCache } from '@/adapters/storage';
import { queryKeys } from './constants/queries';
import { theme } from '@/styles/emotion';
import Posts from './apps/posts/Posts';
import Policies from './apps/policies/Policies';
import PolicySegment from './apps/policies/PolicySegment';
import Ledgers from './apps/ledgers/Ledgers';
import SignIn from './apps/signin/SignIn';
import ProtectedRoute from './routes/protected';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="signin">
        <Route index element={<SignIn />} />
      </Route>
      <Route path="ledgers">
        <Route
          index
          element={
            <ProtectedRoute>
              <Ledgers />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route path="policies">
        <Route
          index
          element={
            <ProtectedRoute>
              <Policies />
            </ProtectedRoute>
          }
        />
        <Route
          path=":id"
          element={
            <ProtectedRoute>
              <PolicySegment />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route path="posts">
        <Route index element={<Posts />} />
      </Route>
      <Route index element={<Navigate to="/signin" replace />} />
    </Route>,
  ),
);

function App() {
  const queryClient = useQueryClient();
  queryClient.setQueryData([queryKeys.token], getQueryCache(queryKeys.token));
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
