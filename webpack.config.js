const webpack = require("webpack");
const path = require("path");

var DEV = path.resolve(__dirname+"/src/lib");
var OUTPUT = path.resolve(__dirname+"/src/output");

var config = {
  entry: DEV + "/App.jsx",
  output: {
    path: OUTPUT,
    filename: "app.js"
  },
  module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react', 'stage-2']
            }
         },
         {
	          test: /\.css$/,
	          loader: "style-loader!css-loader"
         }
      ]
   }
};

module.exports = config;
