const mode = 'development';
const webpack = require('webpack')
const merge = require('webpack-merge');
const WebpackDevServer = require('webpack-dev-server');
const generateBase = require('./base.js');

let baseConfig = generateBase({ mode });
// webpack配置
let webpackConfig = {
    output: {
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].[hash].js',
        publicPath: '/'
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    mode,
    watch: true,
    plugins: [new webpack.HotModuleReplacementPlugin()]
}
const mergedConfig = merge(baseConfig, webpackConfig);

const options = {
    open: true,
    hot: true,
    // host: 'localhost',
    stats: {
        colors: true,
    },
}
WebpackDevServer.addDevServerEntrypoints(mergedConfig, options);

const compiler = webpack(mergedConfig);
const server = new WebpackDevServer(compiler, options);

server.listen(8080, '127.0.0.1', () => {
    console.log('Starting server on http://localhost:8080');
});