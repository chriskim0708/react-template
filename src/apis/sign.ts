import { localInstance } from './instance';

namespace SignRepository {
  export interface Token {
    access_token: string;
    refresh_token: string;
  }

  const prefix = '/signin';
  const endpoints = {
    login: `${prefix}`,
  };

  export const authorization = async () => {
    return localInstance.get<Token>(endpoints.login).then((resp) => resp.data);
  };
}

export default SignRepository;
