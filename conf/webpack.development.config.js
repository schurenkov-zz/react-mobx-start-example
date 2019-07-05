import webpack from 'webpack';
import Config from 'webpack-config';

export default new Config().extend('conf/webpack.base.config.js').merge({
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './src',
    hot: true,
    port: 3000,
    historyApiFallback: true,
    proxy: {
      '/api/**': {
        target: 'http://campaign.stage.dosta.online/api',
        pathRewrite: { '^/api': '' },
        secure: false,
        changeOrigin: true,
      },
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
});
