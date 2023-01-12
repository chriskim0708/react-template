import { UseQueryOptions } from '@tanstack/react-query';
import { QueryValues } from '@/constants/queries';
import { AxiosError } from 'axios';

export type EnumValues<T> = T[keyof T];

export type CustomQueryOptions<VModelType, ReturnType> = Omit<
  UseQueryOptions<VModelType, AxiosError, ReturnType, [QueryValues, ...unknown[]]>,
  'select'
> & {
  select?: (data: VModelType) => ReturnType;
};
