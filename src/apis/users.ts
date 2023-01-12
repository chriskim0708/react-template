import { localAuthInstance } from './instance';

namespace UsersRepository {
  export interface User {
    id: number;
    groupId: number;
    name: string;
  }

  const prefix = '/users';
  const endpoints = {
    list: `${prefix}`,
    getById: `${prefix}/:id`,
  };

  export const find = async () => {
    return localAuthInstance.get<User[]>(endpoints.list).then((resp) => resp.data);
  };

  export const findById = async (id: string | number) => {
    return localAuthInstance
      .get<User>(endpoints.getById.replace(/\:id/i, String(id)))
      .then((resp) => resp.data);
  };
}

export default UsersRepository;
