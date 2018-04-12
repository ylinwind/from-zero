var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    devtool:'cheap-module-eval-source-map',
    entry:{
        main:__dirname + '/src/index.js',
        vendor:'moment'
    },
    output:{
        path:__dirname + '/public',
        filename:'[name].[id].js',
        publicPath:'/public/'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                query:{
                    presets:['es2015','stage-0']
                }
            },
            {
                test:/\.less$/,
                exclude:/node_modules/,
                loader:'style-loader!css-loader!less-loader'
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(
            ['public/index.*.js','public/manifest.*.js'],
            {
                root:__dirname,
                verbose:true,
                dry:false
            }
        ),
        new webpack.optimize.CommonsChunkPlugin({
            names:['vendor','manifest']
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html'),
            filename: 'index.html'
        }),
        new UglifyJsPlugin({
            beautify:true,
            exclude:['/node_modules/'],
            compress:{
                warnings:false
            },
            output:{
                comments:false
            }
        }),
        new CopyWebpackPlugin([ // from是要copy的文件，to是生成出来的文件
            { from: "node_modules/react/umd/react.xxx.js", to: "js/react.min.js" },
            { from: "node_modules/react-dom/umd/react-dom.xxx.js", to: "js/react-dom.min.js" },
            { from: "public/favicon.ico", to: "favicon.ico" }
        ])
    ],
    externals: {
        "react": "React",
        'react-dom': 'ReactDOM',
    },
}