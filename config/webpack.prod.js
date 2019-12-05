const cssNano = require('cssnano');
const merge = require('webpack-merge');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const config = require('./webpack.config.js');

module.exports = merge(config, {
  output: {
    filename: '[name].min.js',
  },
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessor: cssNano,
        cssProcessorOptions: {
          reduceIdents: false,
        },
      }),
    ],
  },
});
