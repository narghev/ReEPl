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
    loaders: [{
        include: DEV,
        loader: "babel-loader",
    }]
  }
};

module.exports = config;
