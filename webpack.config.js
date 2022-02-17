const { merge } = require("webpack-merge");

const commonConfig = require("./webpackConfigurations/webpack.common.js");

module.exports = ({ env = "prod" }) => {
  const envConfig = require(`./webpackConfigurations/webpack.${env}.js`);

  return merge(commonConfig, envConfig);
};
