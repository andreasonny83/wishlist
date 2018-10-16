import { bootstrap, IAppConfig } from './app';

declare var appConfig: IAppConfig;

window.onload = function() {
  bootstrap(appConfig);
};
