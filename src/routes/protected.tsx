import { FC, ReactNode } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { Navigate } from 'react-router-dom';
import { queryKeys } from '@/constants/queries';

interface IProtectedRoute {
  children: ReactNode;
}

const ProtectedRoute: FC<IProtectedRoute> = ({ children }) => {
  const queryClient = useQueryClient();
  const token = queryClient.getQueryData<string>([queryKeys.token]);
  return <>{token ? children : <Navigate to="/signin" />}</>;
};

export default ProtectedRoute;
