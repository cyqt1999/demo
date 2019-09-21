import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

import Base from './router/base';
import Test from './router/test';



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        ...Base,
        ...Test
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () =>
        import("./views/Login.vue")
    }

  ]
})
