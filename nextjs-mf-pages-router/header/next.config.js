const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'header',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './header': './components/Header.js',
        },
        remotes: {},
        shared: {},
        extraOptions:{
          automaticAsyncBoundary: true,
        }
      }),
    );

    return config;
  },
};
