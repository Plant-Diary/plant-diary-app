const { merge } = require("webpack-merge");

const commonConfig = require("./webpack.common.js");

module.exports = ({ env = "prod" }) => {
  const envConfig = require(`./webpack.${env}.js`);

  return merge(commonConfig, envConfig);
};
