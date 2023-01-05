import { mainInstance } from './instance';

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
    return mainInstance.get<Post[]>(endpoints.list).then((resp) => resp.data);
  };

  export const findById = async (id: string | number) => {
    return mainInstance
      .get<Post>(endpoints.getById.replace(/\:id/i, String(id)))
      .then((resp) => resp.data);
  };
}

export default PostsRepository;
