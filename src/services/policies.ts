import PoliciesRepository from '@/apis/policies';

namespace PoliciesService {
  export interface PolicyResponse extends PoliciesRepository.Policy {}

  const transformPolicyResponse = (
    policy: Partial<PoliciesRepository.Policy> = {},
  ): PolicyResponse => ({
    id: Number(policy.id),
    read: Boolean(policy.read),
    write: Boolean(policy.write),
  });

  export const getPolicies = async (): Promise<PolicyResponse[]> => {
    const result = await PoliciesRepository.find();
    return result.map(transformPolicyResponse);
  };

  export const getPolicyById = async (id: string | number): Promise<PolicyResponse> => {
    const result = await PoliciesRepository.findById(id);
    return transformPolicyResponse(result);
  };
}

export default PoliciesService;
