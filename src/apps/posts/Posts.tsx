import { FC, Suspense } from 'react';
import usePostsQueries from '@/queries/posts';
import { useNavigate } from 'react-router-dom';

const PostList = () => {
  const { usePostsQuery } = usePostsQueries();
  const { data } = usePostsQuery();
  const navigate = useNavigate();

  return (
    <>
      {data?.map((post) => (
        <li key={post.id}>
          <h2>{post.header}</h2>
          <p>{post.content}</p>
          <button onClick={() => navigate(post.id)}>page move</button>
        </li>
      ))}
    </>
  );
};

const Posts: FC = () => {
  return (
    <>
      <ul>
        <Suspense fallback={<>...loading</>}>
          <PostList />
        </Suspense>
      </ul>
    </>
  );
};

export default Posts;
