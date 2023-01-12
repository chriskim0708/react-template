import GroupsRepository from '@/apis/groups';

namespace GroupsService {
  export interface GroupResponse extends GroupsRepository.Group {}

  const transformGroupResponse = (group: Partial<GroupsRepository.Group> = {}): GroupResponse => ({
    id: Number(group.id),
    name: String(group.name),
    policyId: Number(group.policyId),
  });

  export const getGroups = async (): Promise<GroupResponse[]> => {
    const result = await GroupsRepository.find();
    return result.map(transformGroupResponse);
  };

  export const getGroupById = async (id: string | number): Promise<GroupResponse> => {
    const result = await GroupsRepository.findById(id);
    return transformGroupResponse(result);
  };
}

export default GroupsService;
