const NextFederationPlugin = require('@module-federation/nextjs-mf');
const { FederatedTypesPlugin } = require('@module-federation/typescript');

const federationConfig = {
    name: 'header',
    filename: 'static/chunks/remoteEntry.js',
    exposes: {
        './header': './components/Header',
    },
    remotes: {},
    shared: {},
    extraOptions:{
        automaticAsyncBoundary: true,
    }
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.plugins.push(
        new NextFederationPlugin(federationConfig),
        new FederatedTypesPlugin({
            disableDownloadingRemoteTypes: true,
            federationConfig,
        }),
    );

    return config;
  },
}

module.exports = nextConfig
