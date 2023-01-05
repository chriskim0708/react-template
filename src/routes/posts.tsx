import React from 'react';
import Posts from '../pages/posts/Posts';
import PostSegment from '../pages/posts/PostSegment';
import { Route } from 'react-router-dom';

export function createPostsRoute() {
  return (
    <>
      <Route path="posts">
        <Route index element={<Posts />} />
        <Route path=":id" element={<PostSegment />} />
      </Route>
    </>
  );
}
