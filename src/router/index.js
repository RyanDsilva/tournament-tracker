import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';
import Home from '@/components/Home';
import Submit from '@/components/Submit';
import Admin from '@/components/Admin';
import Login from '@/components/Login';

Vue.use(Router);

const router = new Router({
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
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  const currentUser = firebase.auth().currentUser;

  if (requiresAuth && !currentUser) {
    next('/login');
  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }
});

export default router;
