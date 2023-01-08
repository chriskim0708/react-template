import React, { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import PostsService from '../../services/posts';
import { useNavigate } from 'react-router-dom';
import { useDependendQueries } from '../../hooks/queries';

const Posts: FC = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useQuery(['posts'], PostsService.getPosts);
  const { token, isLoading: isTokenLoading } = useDependendQueries();

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
