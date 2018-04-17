var CopyWebpackPlugin = require("copy-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var webpack = require("webpack");
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
//
// "NODE_ENV=production webpack --config ./webpack.production.config.js --progress"  写在package.json中
module.exports = {
    // devtool:'source-map',
    entry: "./src/index.js",
    output: {
        path: __dirname + "/build",
        filename: "js/"+"bundle-index.js",
        // filename: "js/"+"[name].[hash].js" //production环境时使用
        // publicPath:'../../',
    },
    resolve: {
        extensions: ['.js' , '.jsx' , '.json'],
        alias: {
            'LxComs': path.resolve(__dirname, './src/redux/components'),
           }
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader',query:{presets:['es2015','stage-0','react']}},
            { test: /\.(less|css)?$/,loader: ['style-loader','css-loader','less-loader']},//, "postcss-loader"
            {test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192',options:{ publicPath:'./images'}},
            // { test: /\.jpe?g$|\.gif$|\.jpg$|\.eot$|\.png$|\.svg$|\.woff$|\.woff2$|\.ttf$/, loader: "url-loader?limit=8192&name=imgs/[hash:8].[name].[ext]"},
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new CopyWebpackPlugin([
            // { from: "node_modules/react/cjs/react.production.min.js", to: "js/react.min.js" },
            // { from: "node_modules/react-dom/cjs/react-dom.production.min.js", to: "js/react-dom.min.js" },
            { from: "index.html", to: "index.html" },
            { from: "src/favicon.ico", to: "favicon.ico" }
        ]),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html'),
            filename: 'index.html'
        })
    ],
};