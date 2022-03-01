const { merge } = require("webpack-merge");

const commonConfig = require("./build/webpack.common.js");

module.exports = ({ env = "prod" }) => {
  const envConfig = require(`./build/webpack.${env}.js`);

  return merge(commonConfig, envConfig);
};
