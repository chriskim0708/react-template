import { CSSObject } from '@emotion/serialize';
import { EnumValues } from '@/types';
namespace Typography {
  export const property = 'typography';
  export const values = {
    body20Bold: 'body_20_b',
  } as const;

  export type Key = EnumValues<typeof values>;
  export type Styles = Record<Key, CSSObject>;

  export const typography: Styles = {
    [values.body20Bold]: {
      fontSize: '50px',
      color: '#0000ff',
      fontWeight: 'bold',
    },
  };
}

export default Typography;
