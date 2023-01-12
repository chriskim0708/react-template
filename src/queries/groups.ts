import { useQuery } from '@tanstack/react-query';
import GroupsService from '@/services/groups';
import { queryKeys } from '@/constants/queries';
import { CustomQueryOptions } from '@/types';

const useGroupsQueries = () => {
  const useGroupsQuery = <ReturnType = GroupsService.GroupResponse[]>(
    options?: CustomQueryOptions<GroupsService.GroupResponse[], ReturnType>,
  ) => {
    return useQuery([queryKeys.groups], GroupsService.getGroups, {
      ...options,
    });
  };
  const useGroupQuery = <ReturnType = GroupsService.GroupResponse>(
    id: string | number,
    options?: CustomQueryOptions<GroupsService.GroupResponse, ReturnType>,
  ) => {
    return useQuery([queryKeys.groups, id], GroupsService.getGroupById.bind(null, id), {
      ...options,
    });
  };
  return {
    useGroupsQuery,
    useGroupQuery,
  };
};

export default useGroupsQueries;
