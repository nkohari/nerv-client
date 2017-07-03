import * as path from 'path';
import * as webpack from 'webpack';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

const env = {
  NODE_ENV: process.env.NODE_ENV
};

export const output = {
  path: path.resolve(__dirname, '../dist'),
  publicPath: '/',
  filename: '[hash]/[name].js'
};

export const rules = [
  {
    test: /\.(png|ttf|svg|jpg|gif|woff|woff2|eot)$/,
    loader: 'url-loader',
    options: { limit: 10000 }
  }
];

export const plugins = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'assets/index.html'
  }),
  new webpack.ProvidePlugin({
    React: 'react'
  }),
  new webpack.DefinePlugin({
    'process.env': Object.keys(env).reduce((hash, key) => {
      hash[key] = JSON.stringify(env[key]);
      return hash;
    }, {})
  })
];

export const resolve = {
  alias: {
    react: path.resolve(__dirname, '../node_modules/react')
  },
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  modules: [
    'node_modules'
  ]
};
