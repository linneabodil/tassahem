import Vue from 'vue'
import VueRouter from 'vue-router'
import Start from '../views/Start.vue'
import auth from './auth';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'start',
    component: Start
  },
  {
    path: '/soker-hem',
    name: 'need-home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NeedHome.vue')
  },
  {
    path: '/animalcard',
    name: 'animalcard',
    component: () => import ('../components/AnimalCard.vue'),
  },
  {
    path: '/AnimalEdit/:id',
    name: 'AnimalEdit',
    component: () => import ('../components/AnimalEdit.vue')
  },
  {
    path: '/hittat-hem',
    name: 'found-home',
    component: () => import('../views/FoundHome.vue')
  },
  {
    path: '/information',
    name: 'information',
    component: () => import('../views/Information.vue')
  },
  {
    path: '/kontakt',
    name: 'contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Admin.vue'),
    meta: { requiresAdmin: true },
  },
  {
    path: '/logga-in',
    name: 'login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAdmin) && !auth.isAuthenticated()) {
    next({
      path: '/logga-in'
    });
  } else {
    next();
  }
});

export default router;
