import React, { FC, useMemo } from 'react';
import UsersService from '../../queries/__users';

const UserSegment: FC = () => {
  const { data = [], isFetching } = UsersService.useUsersQuery();
  const selectUser = useMemo(() => data[0], [data]);
  return <>{!isFetching && <h2>{selectUser.name}</h2>}</>;
};

export default UserSegment;
