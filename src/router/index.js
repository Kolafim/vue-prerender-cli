import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

let Home = {template:'<div><h2>Home Page</h2></div>'}
let About = {template:'<div><h2>About Page</h2></div>'}
let Contact = {template:'<div><h2>Contact Page</h2></div>'}

console.log(process.env);

export default new Router({
  base: process.env.NODE_BASE_URL || '/',
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About, meta:{title: "About Page"}},
    { path: '/contact', component: Contact, meta:{title: "Contact Page"}}
  ]
})
