import SignRepository from '../apis/sign';

namespace SignService {
  export type SignResponse = SignRepository.Token;

  export const authorization = async (): Promise<SignResponse> => {
    return await SignRepository.authorization().then((result) => ({
      ...result,
      access_token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
    }));
  };
}

export default SignService;
