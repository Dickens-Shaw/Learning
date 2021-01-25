/*
 * @Description: vue.config
 * @Autor: Xdg
 * @Date: 2021-01-25 11:46:48
 * @LastEditors: Xdg
 * @LastEditTime: 2021-01-25 14:55:29
 */

const autoprefixer = require("autoprefixer");
const pxtorem = require("postcss-pxtorem");

module.exports = {
  publicPath: "/",
  lintOnSave: false,
  productionSourceMap: true,
  parallel: false, // ts-loader不支持多线程 ts下打包会丢失三方组件样式
  devServer: {
    proxy: {
      '/api': {
        target: '*',
        changOrigin: true,
      }
    },
    disableHostCheck: true
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          // 单位适配 之后要改vw 直接用插件postcss-px-to-viewport替换pxtorem即可
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ["*"]
          })
        ]
      },
      scss: {
        prependData: ``, // @import "~@/*.scss";
      }
    }
  },
  // 打包忽略项
  configureWebpack: {
    devtool: "source-map",
    resolve: {
      extensions: [".js", ".vue", ".json", ".ts", ".tsx"] // 加入ts 和 tsx
    }
  },
  chainWebpack: config => {
    // * 移除prefetch和preload
    config.plugins.delete("prefetch");
    config.plugins.delete("preload");
  }
}