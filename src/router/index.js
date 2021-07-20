import Vue from 'vue'
import VueRouter from 'vue-router'
import Exe1 from '../views/Exe-1.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Exe-1',
    component: Exe1
  },
  {
    path: '/Exe-2',
    name: 'Exe2',
    component: () => import('../views/Exe-2.vue')
  }
]
const router = new VueRouter({
  routes
})
export default router
