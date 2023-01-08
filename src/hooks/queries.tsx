import { useQuery } from '@tanstack/react-query';
import PostsService from '../services/posts';
import SignService from '../services/signin';

export const useDependendQueries = () => {
  const { data } = useQuery(['posts', 1], PostsService.getPostById.bind(null, 1));
  const { data: token, isLoading } = useQuery(['tokens'], SignService.authorization, {
    enabled: !!data?.id,
  });
  return {
    token,
    isLoading,
  };
};
