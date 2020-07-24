import Vue from 'vue';
import Router from 'vue-router';
import Index from './pages/Index.vue';
import Landing from './pages/Landing.vue';
import Login from './pages/Login.vue';
import Register from './pages/Register.vue';
import Profile from './pages/Profile.vue';

import Admin from './pages/Admin.vue';
import Overview from "./pages/Overview.vue";
import Products from "./pages/Products.vue";
import Orders from "./pages/Orders.vue";
import Farmer from "./pages/Farmer.vue";

import MainNavbar from './layout/MainNavbar.vue';
import LoginNavbar from './layout/LoginNavbar.vue';
import AdminNavbar from './layout/AdminNavbar.vue';
import MainFooter from './layout/MainFooter.vue';

import {fb} from './firebase'


Vue.use(Router);

// Create constant so as to filter the routers
const router = new Router({
  linkExactActiveClass: 'active',
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      meta: {title:'SOKO SASA'},
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/landing',
      name: 'landing',
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/login',
      name: 'login',
      meta: {title:'LOGIN'},
      components: { default: Login, header: LoginNavbar },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: '/register',
      name: 'register',
      meta: {title:'REGISTER'},
      components: { default: Register, header: LoginNavbar },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: '/profile',
      name: 'profile',
      meta: {title:'PROFILE'},
      components: { default: Profile, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/admin',
      name: 'admin',
      components: { default: Admin, },
      meta: { requiresAuth: true, title:'ADMIN' },
      children:[
        {
          path: "overview",
          name: "overview",
          meta: {title:'OVERVIEW'},
          component: Overview
        },
        {
          path: "products",
          name: "products",
          meta: {title:'PRODUCTS'},
          component: Products
        },
        {
          path: "farmer",
          name: "farmer",
          meta: {title:'FARMER'},
          component: Farmer
        },
        {
          path: "orders",
          name: "orders",
          meta: {title:'POSTS'},
          component: Orders
        }
      ]
    },

  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});

//Filter the routers
router.beforeEach((to, from, next) => {

  document.title = to.meta.title
    next()

  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = fb.auth().currentUser

  if (requiresAuth && !currentUser) {
      next('/login')
  } else if (requiresAuth && currentUser) {
      next()
  } else {
      next()
  }
})

//Export the filtered routers
export default router;
