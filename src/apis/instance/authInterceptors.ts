import { AxiosRequestConfig } from 'axios';
import { getQueryCache } from '@/adapters/storage';
import { queryKeys } from '@/constants/queries';

namespace AuthInterceptors {
  export const request = (config: AxiosRequestConfig) => {
    const cache = getQueryCache(queryKeys.token);
    if (cache && typeof cache === 'string') {
      config.headers = {
        Authorization: `Bearer ${cache}`,
      };
    }
    return config;
  };
}

export default AuthInterceptors;
