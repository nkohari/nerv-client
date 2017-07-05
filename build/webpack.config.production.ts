import * as path from 'path';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as common from './common';

const config = {

  devtool: 'cheap-module-source-map',

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
        use: 'ts-loader',
        include: path.resolve(__dirname, '../src')
      },
      {
        test: /\.(css|styl)$/,
        use: ExtractTextPlugin.extract({
          disable: (process.env.NODE_ENV === 'development'),
          fallback: 'style-loader',
          use: ['css-loader', 'stylus-loader']
        })
      },
      ...common.rules
    ]
  },

  plugins: [
    new ExtractTextPlugin('[hash]/[name].css'),
    ...common.plugins
  ],

  resolve: {
    ...common.resolve
  }

};

export default config;
