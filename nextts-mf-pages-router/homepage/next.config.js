const NextFederationPlugin = require('@module-federation/nextjs-mf');
const { FederatedTypesPlugin } = require('@module-federation/typescript');

const remotes = isServer => {
    const location = isServer ? 'ssr' : 'chunks';
    return {
        header: `header@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
    };
};

const federationConfig = (isServer) => ({
    name: 'homepage',
    filename: 'static/chunks/remoteEntry.js',
    exposes: {},
    remotes: remotes(isServer),
    shared: {},
    extraOptions:{
        automaticAsyncBoundary: true,
    }
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin(federationConfig(options.isServer)),
      new FederatedTypesPlugin({
          disableTypeCompilation: true,
          federationConfig: federationConfig(false),
      }),
    );

    return config;
  },
}

module.exports = nextConfig
