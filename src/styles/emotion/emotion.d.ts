import '@emotion/react';
import { CustomTheme } from '.';

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}
