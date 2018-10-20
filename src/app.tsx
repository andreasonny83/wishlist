import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from 'emotion-theming';
import { log, LogLevelDesc } from './log';

import './index.css';
import { Button } from './components/button';

const theme = {
  Button: {
    color: '#fff',
    background: '#00a396',
    colorDisabled: '##333',
    backgroundDisabled: '#3d968f',
    backgroundFocus: '#00c2b2',
    backgroundActive: '#00a396',
  },
};

interface IApp {
  name: string;
}

interface WishlistContextType {
  app: IApp;
}

export interface IAppConfig {
  logLevel?: LogLevelDesc;
  app: {
    name: string;
  };
}

export const WishlistProvider = React.createContext<WishlistContextType>(
  undefined
);

export const bootstrap = (appConfig: IAppConfig) => {
  log.setLevel(appConfig.logLevel);
  log.info('Bootstrapping App.');

  return ReactDOM.render(
    <WishlistProvider.Provider value={appConfig}>
      <ThemeProvider theme={theme}>
        <main>
          <h1>
            <span>Allo!</span>
            <span>Welcome to WishList</span>
          </h1>
          <Button className="start-button">Start</Button>
          <Button disabled className="start-button">
            Disabled
          </Button>
        </main>
      </ThemeProvider>
    </WishlistProvider.Provider>,
    document.getElementById('root')
  );
};
