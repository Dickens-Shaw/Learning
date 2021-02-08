# Sp-scripts: vue3+tsx 兼容

## 基于 sp-sub-app 模板修改

1. 依赖&UI 库更新

```
    "updateDependencies": {
        "vue": "^3.0.5",
        "vue-router": "^4.0.3",
        "axios": "^0.21.0",
        "vuex": "^4.0.0"
    },
    "addDependencies": {
        "ant-design-vue": "^2.0.0-rc.9",
        "element-plus": "^1.0.2-beta.30"
    },
```

2. 入口文件改为 main.ts

```
    // 添加声明
    declare const window: Window & { __POWERED_BY_QIANKUN__: unknown };
```

3. 添加 typescript 配置文件 tsconfig.json
4. Axios 封装文件改为 api.ts 及相关语法升级
5. 微应用生命周期文件优化 life-cycle.js
   1. Vue 相关升级 3.0 语法
   2. 注册 UI 组件
6. Router 和 Store 语法升级
7. Demo 页面 app & Views & components 替换
8. 安装 CSS in JS 插件 vue-jss
9. 脚手架
   1. 添加依赖 babel-loader & @vue/babel-plugin-jsx
   2. start.js 编译 ts&tsx 文件添加 babel-loader(解决 ts-loader 无法编译 jsx 语法)
   3. babel.js
      1. 删除 presets： @vue/babel-preset-jsx(自动注入 h = this.$createElement，Setup()里 this 失效，添加参数 compositionAPI：true 可以解决，但是还需要处理 vModel 等更多语法问题)
      2. 添加 plugins： @vue/babel-plugin-jsx
