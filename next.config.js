module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.jsx$/,
      use: ['@compiled/webpack-loader'],
    });

    return config;
  },
};
