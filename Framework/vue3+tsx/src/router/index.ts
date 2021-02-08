import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Index from '@/views/layout/index';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        meta: {
          title: '主页'
        },
        component: () => import(/* webpackChunkName: "home" */ '../views/Home')
      },
      {
        path: '/list',
        name: 'List',
        meta: {
          title: '列表'
        },
        component: () => import(/* webpackChunkName: "list" */ '../views/List')
      },
      {
        path: '/detail',
        name: 'Detail',
        meta: {
          title: '详情'
        },
        component: () =>
          import(/* webpackChunkName: "detail" */ '../views/Detail')
      },
      {
        path: '/test',
        name: 'Test',
        meta: {
          title: '测试'
        },
        component: () =>
          import(/* webpackChunkName: "detail" */ '../views/Test')
      },
      {
        path: '/child',
        name: 'Child',
        meta: {
          title: '子路由'
        },
        component: () =>
          import(/* webpackChunkName: "detail" */ '../views/children'),
        children: [
          {
            path: '/child/1',
            name: 'Child1',
            meta: {
              title: '子路由1'
            },
            component: () =>
              import(/* webpackChunkName: "detail" */ '../views/children/Child')
          },
          {
            path: '/child/2',
            name: 'Child2',
            meta: {
              title: '子路由2'
            },
            component: () =>
              import(/* webpackChunkName: "detail" */ '../views/children/Child')
          }
        ]
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
