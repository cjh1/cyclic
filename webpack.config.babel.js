import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: ''
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/env'
            ]
          }
        }
      }
    ]
  }
};
