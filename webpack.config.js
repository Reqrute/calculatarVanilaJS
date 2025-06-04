import { resolve } from 'path';

import HtmlWebpackPlugin from 'html-webpack-plugin';

export const entry = './src/index.js';
export const output = {
  filename: 'main.js',
  path: resolve(__dirname, 'dist'),
  clean: true,
};
export const module = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader',
    },
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
  ],
};
export const plugins = [
  new HtmlWebpackPlugin({
    template: './src/index.html',
  }),
];
export const devServer = {
  static: './dist',
  port: 3000,
  open: true,
};
export const mode = 'development';
