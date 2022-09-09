const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
const fs = require("fs");

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


console.log(GET_ENV())

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
    new webpack.ProvidePlugin({
        process: 'process/browser',
    }),
    new webpack.DefinePlugin({
        //'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development2'),
        ...GET_ENV(),
        //'process.env.REACT_APP_API_URL': JSON.stringify("http://localhost:5000/"),
    }),
];

module.exports = {
    mode,
    target,
    plugins,
    // devtool: 'source-map',
    entry: './src/index.jsx',
    devServer: {
        hot: true,
        port: 3000,
        proxy: {
            '/api': 'http://localhost:5000',
          },
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        fallback: {
            "fs": false,
            // "tls": false,
            // "net": false,
            "path": require.resolve("path-browserify"),
            "os": require.resolve("os-browserify/browser"),
            // "zlib": false,
            // "http": false,
            // "https": false,
            // "stream": false,
            // "crypto": false,
            // "crypto-browserify": require.resolve('crypto-browserify'),
          },
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/[hash][ext][query]',
        clean: true,
    },

    module: {
        rules: [
            { test: /\.(html)$/, use: ['html-loader'] },
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
                test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
                type: mode === 'production' ? 'asset' : 'asset/resource',
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    },
                },
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
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },
        ],
    },
};