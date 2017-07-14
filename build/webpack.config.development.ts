import * as fs from 'fs';
import * as path from 'path';
import * as webpack from 'webpack';
import * as common from './common';

const readFile = file => fs.readFileSync(path.resolve(__dirname, file));

const config: webpack.Configuration = {

  devtool: 'cheap-module-eval-source-map',
  stats: 'minimal',

  devServer: {
    https: true,
    historyApiFallback: true,
    port: 8081,
    public: 'mineboss.dev:8081',
    cert: readFile('../config/certs/dev.cert.pem'),
    key: readFile('../config/certs/dev.key.pem')
  },

  entry: {
    ...common.entry
  },

  output: {
    ...common.output
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['react-hot-loader', 'ts-loader'],
        include: path.resolve(__dirname, '../src')
      },
      {
        test: /\.(css|styl)$/,
        use: ['style-loader', 'css-loader', 'stylus-loader']
      },
      ...common.rules
    ]
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    ...common.plugins
  ],

  resolve: {
    ...common.resolve
  }

};

export default config;
