import UsersRepository from '@/apis/users';
import { wait } from '@/utils/wait';

namespace UsersService {
  export interface UserResponse extends UsersRepository.User {}

  const transformUserResponse = (user: Partial<UsersRepository.User> = {}): UserResponse => ({
    id: Number(user.id),
    name: String(user.name),
    groupId: Number(user.groupId),
  });

  export const getUsers = async (): Promise<UserResponse[]> => {
    const result = await UsersRepository.find();
    return result.map(transformUserResponse);
  };

  export const getUserById = async (id: string | number): Promise<UserResponse> => {
    const result = await UsersRepository.findById(id);
    await wait(3000);
    return transformUserResponse(result);
  };
}

export default UsersService;
