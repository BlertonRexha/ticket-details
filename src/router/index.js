import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'tickets',
    component: () => import('../views/Tickets.vue')
  },
  {
    path: '/ticket/:id',
    name: 'ticket',
    component: () => import('../views/Ticket.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
