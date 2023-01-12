import { mainAuthInstance } from './instance';
import { wait } from '@/utils/wait';
namespace PostsRepository {
  export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  const prefix = '/posts';
  const endpoints = {
    list: `${prefix}`,
    getById: `${prefix}/:id`,
  };

  export const find = async () => {
    // await wait(5000);
    return mainAuthInstance.get<Post[]>(endpoints.list).then((resp) => resp.data);
  };

  export const findById = async (id: string | number) => {
    return mainAuthInstance
      .get<Post>(endpoints.getById.replace(/\:id/i, String(id)))
      .then((resp) => resp.data);
  };
}

export default PostsRepository;
