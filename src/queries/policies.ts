import { useQuery } from '@tanstack/react-query';
import PoliciesService from '@/services/policies';
import { queryKeys } from '@/constants/queries';
import { CustomQueryOptions } from '@/types';

const usePoliciesQueries = () => {
  const usePoliciesQuery = <ReturnType = PoliciesService.PolicyResponse[]>(
    options?: CustomQueryOptions<PoliciesService.PolicyResponse[], ReturnType>,
  ) => {
    return useQuery([queryKeys.policies], PoliciesService.getPolicies, {
      ...options,
    });
  };
  const usePolicyQuery = <ReturnType = PoliciesService.PolicyResponse>(
    id: string | number,
    options?: CustomQueryOptions<PoliciesService.PolicyResponse, ReturnType>,
  ) => {
    return useQuery([queryKeys.policies, id], PoliciesService.getPolicyById.bind(null, id), {
      ...options,
    });
  };
  return {
    usePoliciesQuery,
    usePolicyQuery,
  };
};

export default usePoliciesQueries;
