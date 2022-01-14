const bundleAnalyzer = require('@next/bundle-analyzer');
const withPlugins = require('next-compose-plugins');

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

// next / image で外部URLの画像を使用するときに必要
const nextConfig = {
  images: {
    domains: ['picsum.photos'],
  },
};

module.exports = withPlugins([withBundleAnalyzer, nextConfig]);
