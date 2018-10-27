import * as React from 'react';
import { ThemeProvider as ThemingProvider } from 'emotion-theming';
import { mergeDeepRight } from 'ramda';
import { defaultTheme, tealTheme, redTheme } from './themes';

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

const themes: IThemes = { tealTheme, redTheme };

export const getTheme = (themeName: string): ITheme =>
  (themes[`${themeName}Theme`] &&
    mergeDeepRight(defaultTheme, themes[`${themeName}Theme`])) ||
  defaultTheme;

interface IThemeProviderProps {
  children?: React.ReactNode;
  theme?: string;
}

export const ThemeProvider: React.SFC<IThemeProviderProps> = ({
  children,
  theme,
}) => <ThemingProvider theme={getTheme(theme)}>{children}</ThemingProvider>;
