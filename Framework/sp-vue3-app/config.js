const envs = [
  {
    // 分支对应的配置，本地开发取configs第一条数据，构建时选择分支
    branch: 'dev',
    // 镜像名称
    name: 'subapp',
    // folder放置当前项目分支打包后文件的目录，通过此目录可以将整个项目前后端打的包放在一个文件夹下
    folder: 'ceshi',
    // 前端页面访问端口
    port: '10001',
    // apiProxies是项目中调用后端API的地址，请根据项目需要修改其中的参数
    apiProxies: {
      '/subapp/api/*': 'https://tmicrouag.dgg188.cn',
    },
    hosts: {},
    // 需要额外注入的全局变量，代码中可直接通过 window.__EXTERNAL_ENVIRONMENT__.xx 使用
    externalEnvironment: {},
    // 部署应用包时的基本 URL
    baseUrl: '/',
    //应用运行环境如:开发环境、测试环境、生产环境
    SP_SERVER_ENV: 'development',
  },
];

const config =  {
  // 本地开发时，根据这个值匹配envs的配置
  branch: 'dev',

  // 是否为移动端应用，为true时启用px转rem规则
  isH5: false,

  // 子应用名称，作为主应用的匹配规则
  subAppName: 'subapp',

  // subApps是微前端主应用加载的所有子应用的配置
  subApps: {},

  // 用于设置不同库之间的代码共享，remotes用来设置需要引用代码的库的信息，
  remotes: {},

  //用于设置不同库之间的代码共享，exposes用来暴露需要共享给其它库使用的代码
  exposes: {},
}

module.exports = {
  config,
  envs,
};
