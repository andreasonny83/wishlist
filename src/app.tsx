import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from './theme';
import { log, LogLevelDesc } from './log';
import { Button } from './components/button';
import { WishlistProvider } from './whishlist.provider';

import './styles/index.css';

export interface IAppConfig {
  logLevel?: LogLevelDesc;
  app: {
    name: string;
  };
}

export const bootstrap = (appConfig: IAppConfig) => {
  log.setLevel(appConfig.logLevel);
  log.info('Bootstrapping App.');

  return ReactDOM.render(
    <App config={appConfig} />,
    document.getElementById('root')
  );
};

interface IAppProps {
  config: IAppConfig;
}

class App extends React.PureComponent<IAppProps> {
  public render() {
    return (
      <WishlistProvider value={this.props.config}>
        <ThemeProvider theme="light">
          <main>
            <h1 style={{ textAlign: 'center' }}>
              Allo!
              <br />
              <span>Welcome to WishList</span>
            </h1>
            <Button className="start-button">Start</Button>
            <Button disabled={true} className="start-button">
              Disabled
            </Button>
          </main>
        </ThemeProvider>
      </WishlistProvider>
    );
  }
}
