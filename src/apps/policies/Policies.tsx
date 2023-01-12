import { FC, Suspense } from 'react';
import useUsersQueries from '@/queries/users';
import { useNavigate } from 'react-router-dom';

const PolicyList = () => {
  const { useUsersQuery } = useUsersQueries();
  const navigate = useNavigate();
  const { data } = useUsersQuery();

  return (
    <>
      {data?.map((user) => (
        <li key={user.id}>
          <h2>{user.name}</h2>
          <button onClick={() => navigate(`${user.id}`)}>page move</button>
        </li>
      ))}
    </>
  );
};

const Policies: FC = () => {
  return (
    <>
      <ul>
        <Suspense fallback={<>...loading</>}>
          <PolicyList />
        </Suspense>
      </ul>
    </>
  );
};

export default Policies;
