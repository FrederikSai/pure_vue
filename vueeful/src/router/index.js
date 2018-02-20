import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Alert from '@/components/Alert'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/alert',
      name: 'Alert',
      component: Alert
    }
  ]
})
