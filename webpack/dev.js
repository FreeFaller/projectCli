/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-17 10:21:00
 * @LastEditTime: 2019-10-17 14:25:20
 * @LastEditors: Please set LastEditors
 */
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
    mode,
    watch: true,
    plugins: [new webpack.HotModuleReplacementPlugin()]
}
const mergedConfig = merge(baseConfig, webpackConfig);

const options = {
    open: true,
    hot: true,
    stats: {
        colors: true,
    },
    proxy: {
        '/api/*': {
            target: 'http://localhost:8002',
            changeOrigin: true,
            filter: function (pathname, req) {
                var reg = /^\/api\//;
                var sufixReg = /\.(js)|(css)|(html)$/;
                var isProxy = reg.test(pathname) && !sufixReg.test(pathname);
                return isProxy;
            },
            onProxyReq: function (proxyReq, req, res) {
              let { proxyCookie } = process.env;
              if (proxyCookie) {
                  proxyReq.setHeader('Cookie', proxyCookie);
              }
          }
        }
    }
}
WebpackDevServer.addDevServerEntrypoints(mergedConfig, options);

const compiler = webpack(mergedConfig);
const server = new WebpackDevServer(compiler, options);

server.listen(8082, '127.0.0.1', () => {
    console.log('Starting server on http://localhost:8082');
});