import React from 'react';
import Photos from '../pages/photos/Photos';
import { Route } from 'react-router-dom';

export function createPhotosRoute() {
  return (
    <Route path="photos">
      <Route index element={<Photos />} />
    </Route>
  );
}
