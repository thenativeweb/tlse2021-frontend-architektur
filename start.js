const concurrently = require('concurrently');
const path = require('path');

// eslint-disable-next-line no-process-env
const { MICROFRONTEND_MODE } = process.env;

concurrently([
  { command: 'npm:start:backend', name: 'json-server' },
  { command: 'npm:start', name: 'container-app', cwd: path.resolve(__dirname, 'container-app'), env: { MICROFRONTEND_MODE }},
  { command: 'npm:start', name: 'article-overview', cwd: path.resolve(__dirname, 'article-overview'), env: { MICROFRONTEND_MODE }},
  { command: 'npm:start', name: 'article-page', cwd: path.resolve(__dirname, 'article-page'), env: { MICROFRONTEND_MODE }}
], {
  prefix: 'name',
  killOthers: [ 'failure', 'success' ]
});
