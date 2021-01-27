import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Index from '@/views/layout/index'

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
        component: () => import(/* webpackChunkName: "home" */ '../views/Home')
      },
      {
        path: '/list',
        name: 'List',
        component: () => import(/* webpackChunkName: "list" */ '../views/List')
      },
      {
        path: '/detail',
        name: 'Detail',
        component: () =>
          import(/* webpackChunkName: "detail" */ '../views/Detail')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
