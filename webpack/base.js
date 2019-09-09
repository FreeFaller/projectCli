const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const resolveApp = relative => require("path").resolve(process.cwd(), relative)
module.exports = function ({ mode }) {
    const dev = mode === 'development'
    const cssFilename = dev
        ? 'css/[name].css'
        : 'css/[name].[contenthash:8].css';
    return {
        mode: dev ? 'development' : 'production',
        devtool: dev ? 'cheap-module-eval-source-map' : 'hidden-source-map',

        entry: resolveApp('./src/main.js'),
        optimization: {
            runtimeChunk: true,
            splitChunks: {
                chunks: 'all'
            }
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                },
                // .vue文件
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {}
                },
                {
                    test: /\.less$/,
                    use: [
                        dev ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        'less-loader',
                    ]
                },
                {
                    test: /\.css$/,
                    use: [
                        dev ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader'
                    ]
                },
                {
                    test: /\.(png|jpg|jpeg|gif)(\?.+)?$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 10000,
                                name: 'images/[name]-[hash:8].[ext]'
                            }
                        }
                    ]
                },
                {
                    test: /\.(eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 10000,
                                name: 'font/[name]-[hash:8].[ext]'
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new VueLoaderPlugin(),
            new HtmlWebpackPlugin({
                template: resolveApp('./src/index.html'),
                filename: 'index.html'
            }),
            new webpack.DefinePlugin({
                'process.env.BVIEWPREFIX': "'bview'"
            }),
            new MiniCssExtractPlugin({
                filename: cssFilename
            })
        ],
        resolve: {
            // 指定几种默认后缀，即import引入时不需要写后缀
            extensions: ['.js', '.vue'],
            alias: {
                vue$: 'vue/dist/vue.runtime.esm.js',
                '@': resolve(__dirname, '../src'),
                'bview': resolveApp('./src/components/bview/src/index.js'),
                'componentDock': resolveApp('./src/components/business/componentDocker/components')
            }
        },
        performance: {
            hints: dev ? false : 'warning'
        }
    }
}