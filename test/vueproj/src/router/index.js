import Vue from 'vue'
import VueRouter from 'vue-router'
import page1 from '../views/page1.vue'
import page6 from '../views/page6.vue'
import Home from '../views/Home.vue'
import page4 from '../views/page4.vue'
import page5 from '../views/page5.vue'
import page3 from '../views/page3.vue'
import page2 from '../views/page2.vue'
import 'vue-material-design-icons/styles.css';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/page4',
    name: 'page4',
    component: page4
  },
  {
    path: '/page1',
    name: 'page1',
    component: page1
  },
  {
    path: '/page6',
    name: 'page6',
    component: page6
  },
  {
    path: '/page5',
    name: 'page5',
    component: page5
  },
  {
    path: '/page3',
    name: 'page3',
    component: page3
  },
  {
    path: '/page2',
    name: 'page2',
    component: page2
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
