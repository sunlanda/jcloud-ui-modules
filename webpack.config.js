var path = require('path')
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


const extractSass = new ExtractTextPlugin({
    // filename: "[name].[contenthash].css",
    filename: "[name].css",
    disable: process.env.NODE_ENV === "development"
});


module.exports = {
    //插件项
    plugins: [commonsPlugin],
    //页面入口文件配置
    entry: {
        index: './lib/index.js'
    },
    //入口文件输出配置
    output: {
        path: __dirname + '/dist/',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'element-ui': path.resolve(__dirname, '../node_modules/element-ui-jcloud')
        }
    },

    module: {
        rules: [{
            test: /\.scss$/,
            use: extractSass.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                // use style-loader in development
                fallback: "style-loader"
            })
        }]
    },
    plugins: [
        extractSass
    ]


};