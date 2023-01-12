import Ledgers from '@/apps/ledgers/Ledgers';
import { Route } from 'react-router-dom';
import ProtectedRoute from './protected';

export function createLedgersRoute() {
  return (
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
  );
}
