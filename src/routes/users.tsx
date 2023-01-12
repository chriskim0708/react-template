import Users from '../apps/users/Users';
import UserSegment from '../apps/users/UserSegment';
import { Route } from 'react-router-dom';

export function createUsersRoute() {
  return (
    <Route path="users">
      <Route index element={<Users />} />
      <Route path=":id" element={<UserSegment />} />
    </Route>
  );
}
