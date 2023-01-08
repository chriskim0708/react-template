import PostsRepository from '../apis/posts';

const wait = async (delay: number) => new Promise((resolve) => setTimeout(resolve, delay));

namespace PostsService {
  export interface PostResponse {
    user: string;
    id: string;
    header: string;
    content: string;
  }

  const transformPostResponse = (post: PostsRepository.Post) => ({
    user: String(post.userId),
    id: String(post.id),
    header: post.title,
    content: post.body,
  });

  export const getPosts = async (): Promise<PostResponse[]> => {
    const result = await PostsRepository.find();
    return result.map(transformPostResponse);
  };

  export const getPostById = async (id: string | number): Promise<PostResponse> => {
    const result = await PostsRepository.findById(id);
    await wait(5000);
    return transformPostResponse(result);
  };
}

export default PostsService;
