const path = require('path');
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const dotenv = require('dotenv')
dotenv.config()

const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd

// let mode = 'development';
// let target = 'web';
// if (process.env.NODE_ENV === 'production') {
//     mode = 'production';
//     target = 'browserslist';
// }

console.log("process.env.NODE_ENV ", process.env.NODE_ENV)

module.exports = {
    mode: process.env.NODE_ENV,
    target: 'web',
    //devtool: 'inline-source-map',
    // devtool: 'source-map',
    entry: './src/index.tsx',
    devServer: {
        port: 3000,
        historyApiFallback: true,
        // proxy: {
        //     '/api': 'http://localhost:5000',
        //   },
        //hot: true
    },
    //cache: false,
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.ts'],
        alias: {
            '@fonts': path.resolve(__dirname, 'src/static/fonts'),
            '@': path.resolve(__dirname, 'src'),
        },
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js',
    },

    plugins: [
        // new MiniCssExtractPlugin({  // fix it
        //     filename: '[name].[contenthash].css',
        // }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(process.env),
            // 'process.env.REACT_APP_API_URL': JSON.stringify('66'),
            'process.env.REACT_APP_API_URL': JSON.stringify(isDev ? null : process.env.REACT_APP_API_URL),
            // ...GET_ENV(),
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'public/logo_64x64.png'),
                    to: path.resolve(__dirname, 'dist', ),
                },
            ],
        }),
        new ReactRefreshPlugin(),
    ],

    module: {
        rules: [
            // {
            //     test: /\.(s[ac]|c)ss$/i,
            //     use: [
            //         MiniCssExtractPlugin.loader,
            //         'css-loader',
            //         'postcss-loader',
            //         'sass-loader',
            //     ],
            // },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader","css-loader","sass-loader"]  
            },

            {
                test: /\.(png|jpe?g|gif|svg|webp|ico)$/,
                use: ['file-loader'],
            }, // test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            {
                test: /\.(woff2?|eot|ttf|otf)$/,
                type: 'asset/resource',
            },
            // {
            //     test: /\.(woff2?|eot|ttf|otf)$/,
            //     use: [{
            //         loader: 'file-loader',   // fix it
            //         options: {
            //             name: '[name].[ext]',
            //             outputPath: 'fonts'
            //         }
            //     }]
            // },

            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    },
                }
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },

            {
                test: /\.js$/,  // for mobx
                enforce: 'pre',
                use: ['source-map-loader'],
            },
        ],
    },
};