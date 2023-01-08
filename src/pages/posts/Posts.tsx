import React, { FC } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import PostsService from '../../services/posts';
import { useNavigate } from 'react-router-dom';
import { useDependendQueries } from '../../hooks/queries';

const Posts: FC = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { data, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: PostsService.getPosts,
    meta: {
      header: 'test',
    },
  });
  const { token, isLoading: isTokenLoading } = useDependendQueries();
  const state = queryClient.getQueryData(['tokens']);
  const clear = () => {
    queryClient.removeQueries({ queryKey: ['tokens'], exact: true });
  };

  return (
    <>
      {isTokenLoading ? '...loading' : token?.access_token}
      <ul>
        {!isLoading &&
          data?.map((post) => (
            <li key={post.id}>
              <h2>{post.header}</h2>
              <p>{post.content}</p>
              <button onClick={() => navigate(post.id)}>page move</button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Posts;
