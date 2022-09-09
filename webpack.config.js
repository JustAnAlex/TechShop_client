const path = require('path');
const webpack = require('webpack')
const fs = require("fs");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const GET_ENV = () => {
    let env = fs.readFileSync('.env', "utf8")
    env = env.split('\r\n').filter(el => el.trim() !== '')
    env = env.map(e => e.split('='))
    env.forEach((value, index, mass) => {
        value[0] = 'process.env.' + value[0]
        value[1] = JSON.stringify(value[1])
    })
    return Object.fromEntries(env)
}

let mode = 'development';
let target = 'web';
if (process.env.NODE_ENV === 'production') {
    mode = 'production';
    target = 'browserslist';
}

const plugins = [
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
    }),
    new HtmlWebpackPlugin({
        template: './public/index.html',
    }),
    new webpack.DefinePlugin({
        ...GET_ENV(),
        //'BrowserRouter': JSON.stringify(process.env.NODE_ENV || 'development2'),
        '<BrowserRouter>': 'HashRouter',
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
];

module.exports = {
    mode,
    target,
    plugins,
    // devtool: 'source-map',
    entry: './src/index.jsx',
    devServer: {
        port: 3000,
        historyApiFallback: true,
        proxy: {
            '/api': 'http://localhost:5000',
          },
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js',
    },

    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp|ico)$/,
                use: ['file-loader'],
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                use: ['file-loader'],
            },
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
                test: /\.js$/,  // for mobx
                enforce: 'pre',
                use: ['source-map-loader'],
            },
        ],
    },
};