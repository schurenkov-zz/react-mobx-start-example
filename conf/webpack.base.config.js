import path from 'path';
import Config from 'webpack-config';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WorkerPlugin from 'worker-plugin';

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
};

export default new Config().merge({
  context: PATHS.src,
  entry: { index: ['@babel/polyfill', './index.tsx'] },
  output: {
    path: PATHS.dist,
    publicPath: '/',
    filename: 'bundle.js',
  },
  cache: false,
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['awesome-typescript-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(scss|css|sass)$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg|eot|ttf|woff|woff2|otf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.worker\.js$/,
        use: { loader: 'worker-loader', options: { inline: true, fallback: false } }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/index.html`,
      inject: false,
    }),
    new WorkerPlugin()
  ],
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx'],
    alias: {
      src: PATHS.src,
      'react-dom': '@hot-loader/react-dom'
    },
  },
});
