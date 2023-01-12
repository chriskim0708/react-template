import AuthRepository from '@/apis/auth';

namespace AuthService {
  export interface SignInResponse extends AuthRepository.Token {}

  export const signIn = async (payload: AuthRepository.SignInPayload): Promise<SignInResponse> => {
    await AuthRepository.authorization(payload);
    return AuthRepository.findToken();
  };
}

export default AuthService;
