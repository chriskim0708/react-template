import Policies from '@/apps/policies/Policies';
import PolicySegment from '@/apps/policies/PolicySegment';
import { Route } from 'react-router-dom';
import ProtectedRoute from './protected';

export function createPoliciesRoute() {
  return (
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
  );
}
