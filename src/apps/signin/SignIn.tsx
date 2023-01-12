import React, { FC } from 'react';
import useAuthQueries from '@/queries/auth';

const SignIn: FC = () => {
  const { useSignInMutation } = useAuthQueries();
  return (
    <>
      <button
        type="button"
        onClick={() => useSignInMutation.mutate({ id: 'yskim', password: '1111' })}
      >
        login
      </button>
    </>
  );
};

export default SignIn;
