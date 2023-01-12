import { localAuthInstance } from './instance';

namespace PoliciesRepository {
  export interface Policy {
    id: number;
    write: boolean;
    read: boolean;
  }

  const prefix = '/policies';
  const endpoints = {
    list: `${prefix}`,
    getById: `${prefix}/:id`,
  };

  export const find = async () => {
    return localAuthInstance.get<Policy[]>(endpoints.list).then((resp) => resp.data);
  };

  export const findById = async (id: string | number) => {
    return localAuthInstance
      .get<Policy>(endpoints.getById.replace(/\:id/i, String(id)))
      .then((resp) => resp.data);
  };
}

export default PoliciesRepository;
