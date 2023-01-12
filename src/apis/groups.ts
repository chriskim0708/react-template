import { localAuthInstance } from './instance';

namespace GroupsRepository {
  export interface Group {
    id: number;
    policyId: number;
    name: string;
  }

  const prefix = '/groups';
  const endpoints = {
    list: `${prefix}`,
    getById: `${prefix}/:id`,
  };

  export const find = async () => {
    return localAuthInstance.get<Group[]>(endpoints.list).then((resp) => resp.data);
  };

  export const findById = async (id: string | number) => {
    return localAuthInstance
      .get<Group>(endpoints.getById.replace(/\:id/i, String(id)))
      .then((resp) => resp.data);
  };
}

export default GroupsRepository;
