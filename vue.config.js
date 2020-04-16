const path = require("path")
const fs = require("fs")

/**
 * @readdirSync fs模块，用于读取文件夹下所有的文件/文件夹，返回数组，fs.readdir的同步版本
 * @resolve path模块，用于拼接文件路径
 * @existsSync fs模块，判断路径是否存在，返回布尔值
 */
const dirs = fs.readdirSync(path.resolve(process.cwd(), "src/pages"))
const pages = dirs.reduce((config,dirname)=>{
    const filePath = `src/pages/${dirname}/main.js`
    const tplPath = path.resolve(process.cwd(), `./public/${dirname}.html`)

    if(fs.existsSync(tplPath)){
        config[dirname] = filePath
    }else{
        config[dirname] = {
            entry:filePath,//page的入口
            template:'public/index.html',//模板的来源
            filename:`${dirname}.html`//在dist/xx.html输出
        }
    }
    return config
},{})
// 多页面 pages 使用的模版默认为 public/[dir-name].html，如果找不到该模版，默认使用 public/index.html

/**
 * publicPath: 应用会默认部署在根路径，使用publicPath可以定义部署在子路径，pages模式不要使用相对路径
 * productionSourceMap: 为true 则打包会生成.map文件
 * contentBase: 告诉服务器从那个目录提取静态文件
 * compress: 一切服务都启用 gzip 压缩
 * historyApiFallback: 当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html
 * disableHostCheck: 绕过主机检查
 * devServer.proxy.changeOrigin: 默认情况下，代理时会保留主机标头的来源，您可以将changeOrigin设置为true来覆盖此行为
 * devServer.proxy.secure: 默认情况下，不接受运行在 HTTPS 上，且使用了无效证书的后端服务器,设置为false表示接受
 * chainWebpack: webpack的链式操作
 * configureWebpack：可能是个对象，也可能是个函数，主要是通过webpack-merge合并到配置里
 * configureWebpack.resolve: 相当于合并内容到webpack原来的resolve[https://webpack.docschina.org/configuration/resolve/#resolve]
 * configureWebpack.resolve.alias: 创建 import 或 require 的别名，来确保模块引入变得更简单
 */
module.exports = {
    publicPath: process.env.VUE_APP_MODE === "production" ? "/prod/" : "/",
    pages,
    outputDir:process.env.VUE_APP_MODE === "production"? path.resolve(`${process.cwd()}/dist-prod/`):path.resolve(`${process.cwd()}/dist-beta/`),
    productionSourceMap:process.env.VUE_APP_MODE === "beta",
    devServer:{
        port:3434,
        host: "127.0.0.1",
        contentBase: "./dist",
        compress:true,
        historyApiFallback:true,
        disableHostCheck: true,
        proxy:{
            "/": {
                target: "http://10.122.122.10:8070",
                changeOrigin: true,
                secure: false,
                // pathRewrite: {"^/sjjc" : ""}
              },
        }

    },
    chainWebpack: config => {
        config.module
          .rule("images")
          .use("url-loader")
          .tap(args => {
            return {
              limit: 4096,
              fallback: {
                loader: "file-loader",
                options: {
                  name: "images/[name].[hash:8].[ext]",
                },
              },
            };
          });
        config.module
          .rule("svg")
          .use("file-loader")
          .tap(args => {
            return {
              name: "images/[name].[hash:8].[ext]",
            };
          });
      },
      configureWebpack: {
        resolve:{
            alias:{
                "@_src": path.resolve(__dirname,"src/")
            }
        }
      }
}