import { useQuery } from '@tanstack/react-query';
import UsersService from '@/services/users';
import { queryKeys } from '@/constants/queries';
import { CustomQueryOptions } from '@/types';

const useUsersQueries = () => {
  const useUsersQuery = <ReturnType = UsersService.UserResponse[]>(
    options?: CustomQueryOptions<UsersService.UserResponse[], ReturnType>,
  ) => {
    return useQuery([queryKeys.users], UsersService.getUsers, {
      ...options,
    });
  };
  const useUserQuery = <ReturnType = UsersService.UserResponse>(
    id: string | number,
    options?: CustomQueryOptions<UsersService.UserResponse, ReturnType>,
  ) => {
    return useQuery([queryKeys.users, id], UsersService.getUserById.bind(null, id), {
      ...options,
    });
  };
  return {
    useUsersQuery,
    useUserQuery,
  };
};

export default useUsersQueries;
