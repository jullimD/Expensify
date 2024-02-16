//Entry -> output

const path = require('path');



module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname,'public'),
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
              test: /\.s?css$/,
              use: ["style-loader", "css-loader","sass-loader"]
            },
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: ["babel-loader"]
            }
          ]


    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {

      historyApiFallback: true
  }
};