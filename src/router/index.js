import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Gyms from '@/components/Gyms'
import Gym from '@/components/Gym'
import Circuit from '@/components/Circuit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home // The front page
    },
    {
      path: '/gyms',
      name: 'Gyms',
      component: Gyms // List and find gyms
    },
    {
      path: '/gym',
      name: 'Gym',
      component: Gym // List gy info and circuits
    },
    {
      path: '/circuit',
      name: 'Circuit',
      component: Circuit // List the problems in a circuit
    }
  ]
})
