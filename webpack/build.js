const mode = 'production';

const path = require('path');
const webpack = require('webpack');
// css压缩
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// js压缩
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const rm = require('rimraf');
const merge = require('webpack-merge');
const generateBase = require('./base.js');

// 获取基础配置
const config = require('./config.js');

const webpackConfig = {
    output: {
        path: path.resolve(__dirname, config.distPath),
        publicPath: config.publicPath,
        filename: 'js/[name].[chunkhash:8].js',
        chunkFilename: 'js/chunks/[name].[chunkhash:8].js'
    },
    // @UPDATED
    // 指定webpack构建环境，使用对应的内建优化策略
    // Provides process.env.NODE_ENV with value production. Enables FlagDependencyUsagePlugin, FlagIncludedChunksPlugin, ModuleConcatenationPlugin, NoEmitOnErrorsPlugin, OccurrenceOrderPlugin, SideEffectsFlagPlugin and UglifyJsPlugin.
    // https://webpack.js.org/concepts/mode/
    mode,
    optimization: {
        runtimeChunk: {
            name: entrypoint => `manifest~${entrypoint.name}`
        },
        minimizer: [
            // // 配置UglifyJsPlugin压缩js文件
            // new UglifyJsPlugin({
            //     cache: true,
            //     parallel: true,
            //     sourceMap: true
            // }),
            // 配置css文件压缩
            new OptimizeCSSAssetsPlugin({
                cssProcessor: require('cssnano'),
                cssProcessorOptions: {
                    discardComments: {
                        removeAll: true
                    },
                    // 避免 cssnano 重新计算 z-index
                    safe: true,
                    // 支持 -webkit-box-orient
                    autoprefixer: false
                },
                canPrint: false
            })
        ]
    },
    plugins: [
        // 当一个chunk变更时不会引起其他chunk id变更
        new webpack.HashedModuleIdsPlugin()
    ]
};
// merge config
const buildConfig = merge(
    generateBase(
        Object.assign(
            {
                mode
            },
            config
        )
    ),
    webpackConfig
);
webpack(buildConfig, function (err, stats) {
    if (err) {
        throw err;
    }
    console.log('Build complete');
});
rm(path.resolve(__dirname, config.distPath), err => {
    if (err) throw err;
});
