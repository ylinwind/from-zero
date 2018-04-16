var CopyWebpackPlugin = require("copy-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var webpack = require("webpack");
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
//
// "NODE_ENV=production webpack --config ./webpack.production.config.js --progress"  写在package.json中
module.exports = {
    devtool:'source-map',
    entry: "./src/index.js",
    output: {
        path: __dirname + "/build",
        filename: "js/"+"bundle-index.js",
        // filename: "js/"+"[name].[hash].js" //production环境时使用
        publicPath:'../../',
    },
    resolve: {
        extensions: ['.js' , '.jsx' , '.json']
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader',query:{presets:['es2015','stage-0','react']}},
            { test: /\.(less|css)?$/,loader: ExtractTextPlugin.extract('style-loader','css-loader','less-loader',{
                publicPath:'../' 
            })
            },//, "postcss-loader"
            // { test: /\.(less|css)?$/,loader: '["style-loader", "css-loader", "less-loader"]'},//, "postcss-loader"
            // { test: /\.jpe?g$|\.gif$|\.eot$|\.png$|\.svg$|\.woff$|\.woff2$|\.ttf$/, loader: "file" },
            // {test: /\.(png|jpg|jpeg|gif|woff)$/, loader: 'url-loader?limit=4192&name=[path][name].[ext]' },
            { test: /\.jpe?g$|\.gif$|\.jpg$|\.eot$|\.png$|\.svg$|\.woff$|\.woff2$|\.ttf$/, loader: "url-loader?limit=8192&name=imgs/[hash:8].[name].[ext]"},
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    // externals: {
    //     "react": "React",
    //     'react-dom': 'ReactDOM',
    // },
    plugins: [
        // new CleanWebpackPlugin(
        //     ['/dist/js/main.*.js'],
        //     {
        //         root:__dirname,
        //         verbose:true,
        //         dry:false
        //     }
        // ),
        // new webpack.optimize.CommonsChunkPlugin({
        //     names:['vendor','manifest']
        // }),
        // new ExtractTextPlugin({  
        //     use: loaders,  
        //     fallback: 'style-loader',  
        //     publicPath:'../../'            //添加此代码！！！  
        //   }) ,
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
        /*新版本报错
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })*/
    ],
    // optimization: {
    //     splitChunks: {

    //         cacheGroups: {
      
    //           commons: {
      
    //             chunks: 'initial',
      
    //             minChunks: 2, maxInitialRequests: 5,
      
    //             minSize: 0
      
    //           },
      
    //           vendor: {
      
    //             test: /node_modules/,
      
    //             chunks: 'initial',
      
    //             name: 'vendor',
      
    //             priority: 10,
      
    //             enforce: true
      
    //           }
      
    //         }
      
    //       },
    // }
};