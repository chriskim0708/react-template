import Posts from '@/apps/posts/Posts';
import PostSegment from '@/apps/posts/PostSegment';
import { Route } from 'react-router-dom';
import ProtectedRoute from './protected';

export function createPostsRoute() {
  return (
    <Route path="posts">
      <Route
        index
        element={
          <ProtectedRoute>
            <Posts />
          </ProtectedRoute>
        }
      />
      <Route
        path=":id"
        element={
          <ProtectedRoute>
            <PostSegment />
          </ProtectedRoute>
        }
      />
    </Route>
  );
}
