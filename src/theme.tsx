export { ThemeProvider } from 'emotion-theming';

export interface ITheme {
  Button: {
    color?: string;
    background?: string;
    backgroundFocus?: string;
    backgroundActive?: string;
  };
}

export const defaultTheme: ITheme = {
  Button: {
    color: '#fff',
    background: '#00a396',
    backgroundFocus: '#00c2b2',
    backgroundActive: '#00a396',
  },
};
