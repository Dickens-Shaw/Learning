// 增加tsx的支持
import 'vue-tsx-support/enable-check';
import { createApp } from 'vue';
import App from './App';
import router from './router';
import store from './store';
import { eleComponents } from './plugins/element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import { antComponents } from './plugins/antd-vue';

const app = createApp(App)
  .use(store)
  .use(router);

eleComponents.forEach((component: any) => {
  app.use(component);
});

antComponents.forEach(component => {
  app.use(component);
});

app.mount('#app');
