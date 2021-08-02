/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  env: {
    // eslint-disable-next-line no-process-env
    MICROFRONTEND_MODE: process.env.MICROFRONTEND_MODE
  },
  mount: {
    /* ... */
  },
  plugins: [
    /* ... */
  ],
  routes: [
    { match: 'routes', src: '.*', dest: '/index.html' }
  ],
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018'
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    port: 8_082,
    open: 'none'
    /* ... */
  },
  buildOptions: {
    /* ... */
  }
};
