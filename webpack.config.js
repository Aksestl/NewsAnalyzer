const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackMd5Hash = require('webpack-md5-hash');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    entry: { 
	  index: './src/script/index.js',
	  about: './src/script/about.js',
	  statistics: './src/script/statistics.js'
	  
	},
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: './script/[name].[chunkhash].js',
 },
 devServer: {
  contentBase: path.join(__dirname, 'dist')
},
 devtool: 'source-map',
  module: {
        rules: [{
                test: /\.js$/, 
				use: { loader: "babel-loader" },
				exclude: /node_modules/
                },
            {
              test: /\.css$/i, 
              use: [
                {
                 loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: '../',
                    hmr: process.env.NODE_ENV === 'development',
                  }
                  
                },
                  
                  'css-loader', 
                  'postcss-loader'
              ]
            },
            {
                test: /\.(gif|png|jpe?g|svg|ico)$/i,
                use: [
                  'file-loader?name=./images/[name].[ext]',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      bypassOnDebug: true, 
                      disable: true, 
                    },
                  },
                ],
            },
            {
              test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader?name=./fonts/[name].[ext]'
            }
        ]
    },  
    plugins: [
        	new HtmlWebpackPlugin({ 
            inject: false,
            template: './src/pages/index.html',
            filename: 'index.html'
        }),
		new HtmlWebpackPlugin({ 
            inject: false,
            template: './src/pages/about.html',
            filename: 'about.html'
        }),
		new HtmlWebpackPlugin({ 
            inject: false,
            template: './src/pages/statistics.html',
            filename: 'statistics.html'
        }),
        new MiniCssExtractPlugin({
          filename: './styles/styles.[contenthash].css',
    }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                    preset: ['default'],
            },
            canPrint: true
       }),
        new WebpackMd5Hash()
    ]
 
}