import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Submit from '@/components/Submit';
import Admin from '@/components/Admin';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/submit',
      name: 'submit',
      component: Submit,
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
    },
  ],
});
