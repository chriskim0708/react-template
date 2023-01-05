import React, { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import SignService from '@/services/signin';

const SignIn: FC = () => {
  const { data, isLoading } = useQuery(['signin'], SignService.authorization);
  return <>{!isLoading && <span>token: {data?.access_token}</span>}</>;
};

export default SignIn;
