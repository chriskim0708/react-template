import useUsersQueries from '@/queries/users';
import useGroupsQueries from '@/queries/groups';
import usePoliciesQueries from '@/queries/policies';

export const useSerialPolicyQuery = (userId: number) => {
  const { useUserQuery } = useUsersQueries();
  const { useGroupQuery } = useGroupsQueries();
  const { usePolicyQuery } = usePoliciesQueries();

  const { data: user } = useUserQuery(userId);
  const { data: group } = useGroupQuery(Number(user?.id), {
    enabled: !!user?.id,
  });
  const { data: policy } = usePolicyQuery(Number(group?.id), {
    enabled: !!group?.id,
  });

  return {
    user,
    group,
    policy,
  };
};
