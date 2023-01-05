import React, { FC } from 'react';
import PhotosService from '../../services/photos';

const Photos: FC = () => {
  const { data, isLoading } = PhotosService.usePhotosQuery();
  return (
    <>
      <ul>
        {!isLoading &&
          data?.map((photo) => (
            <li key={photo.id}>
              <h2>{photo.title}</h2>
              <img src={photo.url} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default Photos;
