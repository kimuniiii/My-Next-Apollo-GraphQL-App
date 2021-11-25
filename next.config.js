const bundleAnalyzer = require('@next/bundle-analyzer');
const withPlugins = require('next-compose-plugins');

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withPlugins([withBundleAnalyzer]);
