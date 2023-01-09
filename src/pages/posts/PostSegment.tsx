import React, { FC, useMemo } from 'react';
import { useQueryClient, useQuery, useQueries } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import PostsService from '../../services/posts';

const serialQueries = [
  { queryKey: ['qPosts'], queryFn: PostsService.getPosts },
  { queryKey: ['qPostById', 1], queryFn: PostsService.getPostById.bind(null, 1) },
];

const PostSegment: FC = () => {
  const { id = '' } = useParams();
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery(['posts', id], PostsService.getPostById.bind(null, id));

  /**
   * useQueries
   * 쿼리의 병렬 호출
   */
  const [postQuery, postByIdQuery] = useQueries({
    queries: serialQueries.map(({ queryKey, queryFn }) => ({ queryKey, queryFn })),
  });

  console.log('postQuery', postQuery);
  console.log('postByIdQuery', postByIdQuery);

  const selectPost = useMemo(() => {
    return queryClient
      .getQueryData<PostsService.PostResponse[]>(['posts'])
      ?.find((post) => post.id === id);
  }, [queryClient, id]);

  return (
    <>
      <h1>useQueryClient</h1>
      <h2>{selectPost?.header}</h2>
      <p>{selectPost?.content}</p>
      {!isLoading && (
        <>
          <h1>useQuery</h1>
          <h2>{data?.header}</h2>
          <p>{data?.content}</p>
        </>
      )}
    </>
  );
};

export default PostSegment;
