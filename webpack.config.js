const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
  entry: APP_DIR+'/index.js',
  output: {
	    path: BUILD_DIR,
	    filename: 'bundle.js'
  },
  plugins: [
	    new HtmlWebpackPlugin({
	      template: 'public/index.html'
	    }),
	    new CopyWebpackPlugin([
	    	{ from: 'public/favicon.ico' }
	    ])
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: {presets: ['es2015', 'react']} },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/, query: {presets: ['es2015', 'react']} },
      { test: /\.css$/, loader: 'style-loader!css-loader'},
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader" }
    ]
  },
  devServer: {
	  proxy: {
		  '/api/*': {
			  target: 'http://localhost:3001',
			  pathRewrite: {'^/api' : ''}
		  }
	  }
  }
};
