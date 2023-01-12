import { FC, Suspense } from 'react';
import { useSerialPolicyQuery } from './hooks';
import { useParams } from 'react-router-dom';

const PolicyDetail = () => {
  const { id } = useParams();
  const { user, group, policy } = useSerialPolicyQuery(Number(id));

  return (
    <>
      <p>user: {user?.name}</p>
      <p>group: {group?.name}</p>
      <p>
        policy: read - {String(policy?.read)}, write - {String(policy?.write)}
      </p>
    </>
  );
};

const PolicySegment: FC = () => {
  return (
    <>
      <ul>
        <Suspense fallback={<>...loading</>}>
          <PolicyDetail />
        </Suspense>
      </ul>
    </>
  );
};

export default PolicySegment;
