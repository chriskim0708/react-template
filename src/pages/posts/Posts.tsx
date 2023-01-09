import React, { FC, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import PostsService from '../../services/posts';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

interface IDialog {
  open: boolean;
}

const Dialog: FC<IDialog> = ({ open }) => {
  const { data, isLoading } = useQuery(['posts'], PostsService.getPosts, {
    refetchOnWindowFocus: false,
    cacheTime: 1000,
  });
  return (
    <>
      {open && (
        <StyledDialog>
          <ul>
            {!isLoading &&
              data?.map((post) => (
                <li key={post.id}>
                  <h2>{post.header}</h2>
                  <p>{post.content}</p>
                </li>
              ))}
          </ul>
        </StyledDialog>
      )}
    </>
  );
};

const Posts: FC = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useQuery(['posts'], PostsService.getPosts, {
    refetchOnWindowFocus: false,
    cacheTime: 1000,
  });
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(!open)}>
        open
      </button>
      <Dialog open={open} />
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

const StyledDialog = styled.div`
  width: 300px;
  height: 300px;
  z-index: 10;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-top: -150px;
  margin-left: -150px;
  overflow-y: auto;
  border: 1px solid #ccc;
  background-color: #fff;
`;

export default Posts;
