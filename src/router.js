import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './components/hello.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
