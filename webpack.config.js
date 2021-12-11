const terser = require("terser-webpack-plugin");

const webpackConfig = env => {
  let mode = env.production ? 'production' : 'development';
  let optimization  = env.production ? {
    minimize: true,
    minimizer: [new terser()]
  } : {}; 
  let config= {
    mode,
    entry : './src/js/index.js',
    module: {
      rules: [
        {
          test: /.js$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        }
      ]
    },
    optimization
  }

  return config;
}



module.exports = webpackConfig;