const dotEnv = require('dotenv');

// importing webpack dependencies
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

const getFaviconUrl = () => {
  //TODO: link to be added later
  return '#'
}

// instantiating webpack dependencies
const cleanWebpack = new CleanWebpackPlugin({
    // Simulate the removal of files
    //
    // default: false
    dry: true,

    // Write Logs to Console
    // (Always enabled when dry is true)
    //
    // default: false
    verbose: true,

    // Automatically remove all unused webpack assets on rebuild
    //
    // default: true
    cleanStaleWebpackAssets: false,

    // Do not allow removal of current webpack assets
    //
    // default: true
    protectWebpackAssets: false,

});
const htmlWebpack = new htmlWebpackPlugin({
  template: 'src/index.html',
  title: 'MyArcade',
  getFaviconUrl,
});
const namedModulesPlugin = new webpack.NamedModulesPlugin();
const hotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin();
const miniCssExtract = new miniCssExtractPlugin();

// stringify env variables
const envs = dotEnv.config().parsed;
const stringifiedEnvs = {};
Object.keys(envs).forEach((envKey) => {
  stringifiedEnvs[envKey] = JSON.stringify(envs[envKey]);
});

const definePlugin = new webpack.DefinePlugin({
  'process.env': stringifiedEnvs
});

module.exports = {
  cleanWebpack,
  htmlWebpack,
  namedModulesPlugin,
  hotModuleReplacementPlugin,
  miniCssExtract,
  miniCssExtractPlugin,
  definePlugin
};
