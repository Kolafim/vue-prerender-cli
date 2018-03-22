import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const Home = { template: '<div><h2>Home Page</h2></div>'}
const About = { template: '<div><h2>About Page</h2></div>'}
const Contact = { template: '<div><h2>Contact Page</h2></div>'}

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact }
  ]
})
