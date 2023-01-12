import { localInstance, localAuthInstance } from './instance';

namespace AuthRepository {
  export interface Token {
    access_token: string;
    refresh_token: string;
  }

  export interface SignInPayload {
    id: string;
    password: string;
  }

  const prefix = '/auth';
  const endpoints = {
    signin: `${prefix}/signin`,
    token: `${prefix}/token`,
  } as const;

  export const authorization = async (payload: SignInPayload) => {
    return localInstance.post<Token>(endpoints.signin, payload).then((resp) => resp.data);
  };

  export const findToken = async () => {
    return localAuthInstance.get<Token>(endpoints.token).then((resp) => resp.data);
  };
}

export default AuthRepository;
