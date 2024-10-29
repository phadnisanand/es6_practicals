const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry: ['./src/js/index.js', './src/scss/main.scss'],
	devServer: {
		static: {
		  directory: path.join(__dirname, 'dist'),
		},
		compress: true,
		port: 9000,
	  },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    module: {
        rules: [
			{
				test: /\.s?css$/,
				use: [
				  MiniCssExtractPlugin.loader,
				  "css-loader",
				  "sass-loader"
				]
			},
		    {
				test: /\.(woff|woff2|eot|ttf|svg)$/,
				use: {
				  loader: 'url-loader',
				},
            },
        ],
    },
	 plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html',
            inject: false
        }),
		new MiniCssExtractPlugin({
          filename: "[name].css",
          chunkFilename: "[id].css"
        })
    ],
};