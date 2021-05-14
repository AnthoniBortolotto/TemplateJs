const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname,'./src/index.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        chunkFilename: '[id].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js)x?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' },
                    { 
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: "[name]__[local]___[hash:base64:5]",
                            },														
                            sourceMap: true
                        }
                     },
                     { 
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [ 'autoprefixer', {}, ],
                                ],
                            },
                        }
                      }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'url-loader?limit=10000&name=img/[name].[ext]'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/src/templates/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ],
    devServer: {
        port: 8080,
        contentBase: path.resolve(__dirname, './dist'),
        compress: true,
        historyApiFallback: true,
    }
};