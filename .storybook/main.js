const path = require('path');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  // Add any Storybook addons you want here: https://storybook.js.org/addons/
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-postcss',
  ],
  framework: '@storybook/react',
  webpackFinal: async (config) => {
    config.resolve.extensions.push('.ts', '.tsx');
    [].push.apply(config.resolve.plugins, [
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
        configFile: path.resolve(__dirname, '../src/tsconfig.src.json'),
      }),
    ]);
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    });

    return config;
  },
};
