import Typography from './typography';
export interface CustomTheme {
  [Typography.property]: Typography.Styles;
}

export const theme = {
  typography: Typography.typography,
};
