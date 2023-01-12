import { EnumValues } from '@/types';

export const queryKeys = {
  posts: 'posts',
  token: 'token',
  users: 'users',
  policies: 'policies',
  groups: 'groups',
} as const;

export type QueryKeys = keyof typeof queryKeys;
export type QueryValues = EnumValues<typeof queryKeys>;
