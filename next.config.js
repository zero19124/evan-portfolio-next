/** @type {import('next').NextConfig} */
// const webpack = require("webpack");
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
  // webpack: (config) => {
  //   config.plugins.push(
  //     new webpack.DefinePlugin({
  //       "process.env.BUILD_TIME": JSON.stringify(new Date().toLocaleString()),
  //     })
  //   );

  //   return config;
  // },
};

module.exports = nextConfig;
