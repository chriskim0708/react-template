import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
  RouterProvider,
  Outlet,
} from 'react-router-dom';
import { createPostsRoute, createUsersRoute, createPhotosRoute, createSignInRoute } from './routes';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {createPostsRoute()}
      {createUsersRoute()}
      {createPhotosRoute()}
      {createSignInRoute()}
      <Route index element={<Navigate to="/posts" replace />} />
    </Route>,
  ),
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Outlet />
    </>
  );
}

export default App;
