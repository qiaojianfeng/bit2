// @ts-nocheck
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: '首页' }
  },
  {
    path: '/login',
    name: 'Login',
    meta: { title: '登陆' },
    component: () => import('../views/Login.vue')
  },
  {
    path: '/my',
    name: 'My',
    meta: { title: '个人中心' },
    component: () => import('../views/My.vue'),
    redirect: '/my/photo',
    children: [
      {
        path: 'photo',
        name: 'MyPhoto',
        component: () => import('../components/auth/MyPhoto.vue')
      },
      {
        path: 'like',
        name: 'MyLike',
        component: () => import('../components/auth/MyLike.vue')
      },
      {
        path: 'intro',
        name: 'MyIntro',
        component: () => import('../components/auth/MyIntro.vue')
      }
    ]
  },
  {
    path: '/discover',
    name: 'Discover',
    meta: { title: '发现' },
    component: () => import('../views/Discover.vue')
  },
  {
    path: '/photo/:id',
    name: 'Photo',
    props: true,
    meta: { title: '图片详情' },
    component: () => import('../views/Photo.vue')
  },
  {
    path: '/about',
    name: 'About',
    meta: { title: '关于' },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/404',
    name: 'NotFound',
    meta: { title: '404' },
    component: () => import('../views/NotFound.vue')
  },
  { path: '/:pathMatch(.*)', redirect: '/404' }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
