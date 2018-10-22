import { bootstrap, IAppConfig } from './app';

declare var appConfig: IAppConfig;

// tslint:disable-next-line
window.onload = function() {
  bootstrap(appConfig);
};
