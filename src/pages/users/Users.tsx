import React, { FC } from 'react';
import UsersService from '../../services/users';
import { useNavigate } from 'react-router-dom';

const Users: FC = () => {
  const navigate = useNavigate();
  const { data, isLoading } = UsersService.useUsersQuery(undefined, {
    // refetchOnMountOrArgChange: true,
  });
  return (
    <>
      <ul>
        {!isLoading &&
          data?.map((user) => (
            <li key={user.id}>
              <h2>{user.name}</h2>
              <p>{user.phone}</p>
              <p>{user.company.name}</p>
              <button onClick={() => navigate(`${user.id}`)}>page move</button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Users;
