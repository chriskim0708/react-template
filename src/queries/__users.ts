import { MainService } from '../services/apis';

namespace UsersService {
  interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string | number;
        lng: string | number;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  }
  export type UserResponse = Pick<User, 'id' | 'name' | 'company' | 'phone'>;

  const prefix = 'users';
  const endpoints = {
    list: `${prefix}`,
    getById: `${prefix}/:id`,
  };
  const transformUserResponse = (user: User): UserResponse => ({
    id: user.id,
    name: user.name,
    phone: user.phone,
    company: {
      ...user.company,
    },
  });
  const api = MainService.api.injectEndpoints({
    endpoints: (build) => ({
      users: build.query<UserResponse[], void>({
        query: () => endpoints.list,
        transformResponse: (response: User[]) => response.map(transformUserResponse),
      }),
    }),
    overrideExisting: false,
  });
  export const { useUsersQuery } = api;
}

export default UsersService;
