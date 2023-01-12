import { useMutation, useQueryClient } from '@tanstack/react-query';
import AuthService from '@/services/auth';
import { queryKeys } from '@/constants/queries';

const useAuthQueries = () => {
  const queryClient = useQueryClient();
  const useSignInMutation = useMutation({
    mutationFn: AuthService.signIn,
    onSuccess: (data) => {
      queryClient.setQueryData([queryKeys.token], data.access_token);
    },
  });
  return {
    useSignInMutation,
  };
};

export default useAuthQueries;
