import { CSSObject } from '@emotion/serialize';
import { EnumValues } from '@/types';

export const typographyProperty = 'typography';
export const typographyValues = {
  body20Bold: 'body_20_b',
} as const;

type TypographyCSSKey = EnumValues<typeof typographyValues>;
export type TypographyRecord = Record<TypographyCSSKey, CSSObject>;

export const typography: TypographyRecord = {
  [typographyValues.body20Bold]: {
    fontSize: '50px',
    color: '#0000ff',
    fontWeight: 'bold',
  },
};
