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
        new MiniCssExtractPlugin({  // fix it
            filename: '[name].[contenthash].css', // обязателен, чтобы модульные стили применялись
        }),
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
                exclude: /\.module\.(scss|sass)$/,
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



            {
                test: /\.module\.(scss|sass)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader, // обязателен, чтобы модульные стили применялись
                    },
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 3,
                            sourceMap: true,
                            modules: {
                                mode: 'local', 
                                getLocalIdent: require('react-dev-utils/getCSSModuleLocalIdent'), // make BEM in module files
                            },
                        },
                    },
                    {
                        loader: require.resolve('sass-loader'),
                        options: {
                            sourceMap: true,
                        },
                    }

                ]
            },


/*
            {
                test: /\.module\.(scss|sass)$/,
                use:[
                // {
                //     loader: MiniCssExtractPlugin.loader,
                // },
                {
                    loader: require.resolve('css-loader'),
                    options: {
                        importLoaders: 3,
                        sourceMap: true,
                        modules: {
                            mode: 'local', // FIND IT
                            getLocalIdent: require('react-dev-utils/getCSSModuleLocalIdent'),
                        },
                    },
                },
                // {
                //     loader: require.resolve('postcss-loader'),
                //     options: {
                //       postcssOptions: {
                //         ident: 'postcss',
                //         config: false,
                //         plugins: [
                //               'postcss-flexbugs-fixes',
                //               [
                //                 'postcss-preset-env',
                //                 {
                //                   autoprefixer: {
                //                     flexbox: 'no-2009',
                //                   },
                //                   stage: 3,
                //                 },
                //               ],
                //               'postcss-normalize',
                //             ],
                //       },
                //       sourceMap: true,
                //     },
                // },
                {
                    loader: require.resolve('resolve-url-loader'),
                    options: {
                        sourceMap: true,
                        root: path.resolve(__dirname, 'src'),
                    },
                },
                {
                    loader: require.resolve('sass-loader'),
                    options: {
                        sourceMap: true,
                    },
                }
                ],
            },

            */

        ],
    },
};


