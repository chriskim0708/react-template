import React from 'react';
import SignIn from '../apps/signin/SignIn';
import { Route } from 'react-router-dom';

export function createSignInRoute() {
  return (
    <Route path="signin">
      <Route index element={<SignIn />} />
    </Route>
  );
}
