import Users from '../pages/users/Users';
import UserSegment from '../pages/users/UserSegment';
import { Route } from 'react-router-dom';

export function createUsersRoute() {
  return (
    <Route path="users">
      <Route index element={<Users />} />
      <Route path=":id" element={<UserSegment />} />
    </Route>
  );
}
