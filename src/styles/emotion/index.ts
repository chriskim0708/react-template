import { typographyProperty, TypographyRecord } from './typography';
export { typography } from './typography';

export interface CustomTheme {
  [typographyProperty]: TypographyRecord;
}
