import * as React from 'react';
import { ThemeProvider as ThemingProvider } from 'emotion-theming';
import { mergeDeepRight } from 'ramda';
import { defaultTheme, lightTheme, darkTheme } from './themes';

export interface ITheme {
  Button: {
    color?: string;
    background?: string;
    backgroundFocus?: string;
    backgroundActive?: string;
  };
}

interface IThemes {
  [key: string]: ITheme;
}

const themes: IThemes = { lightTheme, darkTheme };

const getTheme = (themeName: string): ITheme =>
  (themes[`${themeName}Theme`] &&
    mergeDeepRight(defaultTheme, themes[`${themeName}Theme`])) ||
  defaultTheme;

interface ThemeProviderProps {
  children?: React.ReactNode;
  theme?: string;
}

export const ThemeProvider: React.SFC<ThemeProviderProps> = ({
  children,
  theme,
}) => <ThemingProvider theme={getTheme(theme)}>{children}</ThemingProvider>;
