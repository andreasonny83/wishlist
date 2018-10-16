'use strict';

const fs = require('fs-extra');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

const paths = {};
paths.appStatic = resolveApp('static');
paths.appBuild = resolveApp('build');
paths.appHtml = resolveApp('static/index.html');

function copyPublicFolder() {
  fs.copySync(paths.appStatic, paths.appBuild, {
    dereference: true,
    filter: (file) => file !== paths.appHtml,
  });
}

copyPublicFolder();
