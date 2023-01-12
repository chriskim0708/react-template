import { useQuery } from '@tanstack/react-query';
import PostsService from '@/services/posts';
import { queryKeys } from '@/constants/queries';
import { CustomQueryOptions } from '@/types';

const usePostsQueries = () => {
  const usePostsQuery = <ReturnType = PostsService.PostResponse[]>(
    options?: CustomQueryOptions<PostsService.PostResponse[], ReturnType>,
  ) => {
    return useQuery([queryKeys.posts], PostsService.getPosts, {
      ...options,
    });
  };
  const usePostQuery = <ReturnType = PostsService.PostResponse>(
    id: string | number,
    options?: CustomQueryOptions<PostsService.PostResponse, ReturnType>,
  ) => {
    return useQuery([queryKeys.posts, id], PostsService.getPostById.bind(null, id), {
      ...options,
    });
  };
  const useSelectPostQuery = (id: number) => {
    return usePostsQuery<PostsService.PostResponse | undefined>({
      select: (data) => data.find((post) => post.id === String(id)),
    });
  };

  return {
    usePostsQuery,
    usePostQuery,
    useSelectPostQuery,
  };
};

export default usePostsQueries;
