import Config from 'webpack-config';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import TerserPlugin from 'terser-webpack-plugin';

export default new Config().extend('conf/webpack.base.config.js').merge({
  mode: 'production',
  optimization: {
    minimizer: [new TerserPlugin()],
  },
  devtool: 'source-map',
  plugins: [
    new webpack.LoaderOptionsPlugin({ options: { postcss: [autoprefixer] } }),
  ]
});
