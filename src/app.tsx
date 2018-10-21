import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ITheme, defaultTheme, ThemeProvider } from './theme';
import { log, LogLevelDesc } from './log';
import { mergeDeepRight } from 'ramda';
import { Button } from './components/button';
import { WishlistProvider } from './whishlist.provider';

import './styles/index.css';

export interface IAppConfig {
  logLevel?: LogLevelDesc;
  app: {
    name: string;
  };
  theme: ITheme;
}

export const bootstrap = (appConfig: IAppConfig) => {
  log.setLevel(appConfig.logLevel);
  log.info('Bootstrapping App.');

  const theme = mergeDeepRight(defaultTheme, appConfig.theme);

  log.debug('theme', theme);

  return ReactDOM.render(
    <WishlistProvider value={appConfig}>
      <ThemeProvider theme={theme}>
        <main>
          <h1 style={{ textAlign: 'center' }}>
            Allo!
            <br />
            <span>Welcome to WishList</span>
          </h1>
          <Button className="start-button">Start</Button>
          <Button disabled className="start-button">
            Disabled
          </Button>
        </main>
      </ThemeProvider>
    </WishlistProvider>,
    document.getElementById('root')
  );
};
