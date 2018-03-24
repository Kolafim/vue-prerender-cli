import Vue from 'vue'
import Router from 'vue-router'
// import MetaInfo from 'vue-meta-info'
import Home from '@/components/home'
import About from '@/components/about'
import Contact from '@/components/contact'

Vue.use(Router)
// Vue.use(MetaInfo)

console.log(process.env);

const BASE_TITLE = document.title;

// let Home = {template:'<div><h2>Home Page</h2></div>'}
// let About = {template:'<div><h2>About Page</h2></div>'}
// let Contact = {template:'<div><h2>Contact Page</h2></div>'}

const router = new Router({
  base: process.env.NODE_BASE_URL || '/',
  mode: 'history',
  routes: [
    {
      path: '/',
      name:'home',
      component: Home
    },
    {
      path: '/about',
      name:'about',
      component: About,
      meta:{title:'About'}
    },
    {
      path: '/contact',
      name:'contact',
      component: Contact,
      meta:{title:'Contact'}
    }
  ]
})
router.beforeEach((to,from,next)=>{
  if(to.meta.title){
    document.title = `${to.meta.title} - ${BASE_TITLE}`
  }else if(BASE_TITLE != document.title){
    document.title = BASE_TITLE
  }
  next()
})
export default router
