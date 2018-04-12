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
        path: __dirname + "/dist",
        filename: "js/"+"bundle-index.js"
        // filename: "js/"+"[name].[hash].js" //production环境时使用
    },
    resolve: {
        extensions: ['.js' , '.jsx' , '.json']
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader',query:{presets:['es2015','stage-0','react']}},
            { test: /\.(less|css)?$/,loader: ["style-loader", "css-loader", "less-loader"]},//, "postcss-loader"
            { test: /\.jpe?g$|\.gif$|\.eot$|\.png$|\.svg$|\.woff$|\.woff2$|\.ttf$/, loader: "file" },
        ]
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
        new CopyWebpackPlugin([
            { from: "node_modules/react/cjs/react.production.min.js", to: "js/react.min.js" },
            { from: "node_modules/react-dom/cjs/react-dom.production.min.js", to: "js/react-dom.min.js" },
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
    optimization: {
        /*splitChunks: {
            chunks: "initial", // 必须三选一： "initial" | "all"(默认就是all) | "async" 
            minSize: 0, // 最小尺寸，默认0
            minChunks: 1, // 最小 chunk ，默认1
            maxAsyncRequests: 1, // 最大异步请求数， 默认1
            maxInitialRequests : 1, // 最大初始化请求书，默认1
            name: function(){}, // 名称，此选项可接收 function
            cacheGroups:{ // 这里开始设置缓存的 chunks
                priority: 10, // 缓存组优先级
                vendor: { // key 为entry中定义的 入口名称
                    chunks: "initial", // 必须三选一： "initial" | "all" | "async"(默认就是异步) 
                    test: /react|lodash/, // 正则规则验证，如果符合就提取 chunk
                    name: "vendor", // 要缓存的 分隔出来的 chunk 名称 
                    minSize: 0,
                    minChunks: 1,
                    enforce: true,
                    maxAsyncRequests: 1, // 最大异步请求数， 默认1
                    maxInitialRequests : 1, // 最大初始化请求书，默认1
                    reuseExistingChunk: true // 可设置是否重用该chunk（查看源码没有发现默认值）
                }
            }
        }*/
        splitChunks: {

            cacheGroups: {
      
              commons: {
      
                chunks: 'initial',
      
                minChunks: 2, maxInitialRequests: 5,
      
                minSize: 0
      
              },
      
              vendor: {
      
                test: /node_modules/,
      
                chunks: 'initial',
      
                name: 'vendor',
      
                priority: 10,
      
                enforce: true
      
              }
      
            }
      
          },
    }
};