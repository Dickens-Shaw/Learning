## 项目简介

- _此处省略....(简单描述该项目名称、描述、功能概览，由该项目前端开发者覆盖填写)_

## 安装

- yarn

## 本地启动

- yarn start，在浏览器中访问 [localhost:3000](http://localhost:3000/)
- 如果有后端服务请求，请到根目录下的 config 文件夹的 configs 的 apiProxies 里面更改后端服务地址

## 发布构建

- 需要使用`Jenkins`构建发布

_关于 vendor_

我们的基础架构会将不常更改的三方库，例如 vue（配置`scripts/vendor.js`），打包到 vendor 目录（`vendor`）中。在代码中无需再引入，可分别通过 Vue 直接使用。

没有特殊情况，不要私自向 package.json 中添加三方依赖

## 技术栈

vue+single-spa+webpack+babel+eslint+jenkins

## 模板代码目录结构说明

各目录以实际项目为准，以下为常用目录：

- api 接口请求

- assets 为静态资源目录，有 images、styles、fonts 等。

- components 为通用组件目录。

- constants 为常量目录。

- router 路由配置

- store 全局状态

- utils 工具方法

- views 各路由模块

- plugins 插件模块

- config 配置

## 前端相关技术文档及规范：

- [前端编码规范]
