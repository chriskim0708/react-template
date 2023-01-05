import React, { FC, useMemo } from 'react';
import { useQueryClient, useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import PostsService from '../../services/posts';

const PostSegment: FC = () => {
  const { id = '' } = useParams();
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery(['posts', id], PostsService.getPostById.bind(null, id));

  const selectPost = useMemo(() => {
    return queryClient
      .getQueryData<PostsService.PostResponse[]>(['posts'])
      ?.find((post) => post.id === id);
  }, []);

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
