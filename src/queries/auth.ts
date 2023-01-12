import AuthRepository from '@/apis/auth';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '@/constants/queries';

const useAuthQueries = () => {
  const queryClient = useQueryClient();
  const signIn = useMutation({
    mutationFn: async (payload: AuthRepository.ISignInPayload) => {
      await AuthRepository.authorization(payload);
      return AuthRepository.findToken();
    },
    onSuccess: (data) => {
      queryClient.setQueryData([queryKeys.token], data.access_token);
    },
  });
  return {
    signIn,
  };
};

export default useAuthQueries;
