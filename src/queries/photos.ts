import { AnotherService } from '../services/apis';

namespace PhotosService {
  interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  }
  export type PhotoResponse = Pick<Photo, 'id' | 'title' | 'url'>;

  const prefix = 'photos';
  const endpoints = {
    list: `${prefix}`,
    getById: `${prefix}/:id`,
  };
  const transformPhotoResponse = (photo: Photo): PhotoResponse => ({
    id: photo.id,
    title: photo.title,
    url: photo.url,
  });
  const api = AnotherService.api.injectEndpoints({
    endpoints: (build) => ({
      photos: build.query<PhotoResponse[], void>({
        query: () => endpoints.list,
        transformResponse: (response: Photo[]) => response.map(transformPhotoResponse),
      }),
    }),
    overrideExisting: false,
  });
  export const { usePhotosQuery } = api;
}

export default PhotosService;
