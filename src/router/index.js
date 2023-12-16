import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Video from '../views/Video.vue'
import TList from '../views/TList.vue'

import Blank from '../views/Blank.vue';
import { checkUserAuthentication } from "../utilities/login";
const routes = [
  {
    path: '/blank',
    component: Blank,
  },
  // {
  //   path: '/',
  //   component: Home,
  // },
  // {
  //   path: '/',
  //   redirect: '/home'
  //   /* 
  //   ok 推荐上面
  //   */
  //   // redirect: 'home'
  //   /* 
  //   目标要有 path
  //   */
  //   // redirect: { name: 'home' }
  // },
  {
    path: '/',
    component: Home,
    children: [
      {
        path: 'home',
        // name: 'home',
        component: () => import('../views/HomeBody.vue'),
        alias: ['/']
      }, {
        path: 'hot',
        component: () => import('../views/Hot.vue')
      }, {
        path: 'rank',
        component: () => import('../views/Rank.vue')
      }, {
        path: 'search',
        name: 'search',
        component: () => import('../views/Search.vue')
      }
    ]
  },
  {
    path: '/login',
    component: Login,
  }, {
    path: '/register',
    component: Register,
  }, {
    name: 'video',
    path: '/video/:id',
    component: Video,
    props: true
  }, {
    name: 'type',
    path: '/type/list',
    component: TList
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
/* 
登录状态检查
*/
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    /* 
    用户点击登出、切换用户时，清除用户信息
    */
    localStorage.removeItem('user');
    next();
    return;
  }
  if (to.path === '/register') {
    next();
    return;
  }
  checkUserAuthentication() ? next() : next('/login');

});
export default router
