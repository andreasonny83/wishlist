import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { log, LogLevelDesc } from './log';

import './index.css';

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
      <h1>
        <span>Allo!</span>
        <span>Welcome to WishList</span>
      </h1>
    </WishlistProvider.Provider>,
    document.getElementById('root')
  );
};
