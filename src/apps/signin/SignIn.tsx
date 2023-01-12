import React, { FC } from 'react';
import useAuthQueries from '@/queries/auth';

const SignIn: FC = () => {
  const { signIn } = useAuthQueries();
  return (
    <>
      <button type="button" onClick={() => signIn.mutate({ id: 'yskim', password: '1111' })}>
        login
      </button>
    </>
  );
};

export default SignIn;
