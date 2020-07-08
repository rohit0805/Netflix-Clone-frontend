const path=require('path');
const {CleanWebpackPlugin}=require('clean-webpack-plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');


module.exports={
    entry:'./src/js/app.js',
    output:{
        filename:"js/[main].[contenthash].js",
        path:path.resolve(__dirname,'dist')
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename:'index.html',
            inject:true,
            template:path.resolve(__dirname,'src','index.html'),
            favicon:'./src/images/icon.png'
        }),
    ],
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test:/\.(png|jpe?g|gif|m4v|ico)$/,
                exclude:/node_modules/,
                use:{
                    loader:'file-loader',
                    options:{
                        name:'[name].[contenthash].[ext]',
                        outputPath:'assets'
                    }
                }
            },
            {
                test:/\.html$/,
                use:['html-loader']
            }
        ]
    }
}