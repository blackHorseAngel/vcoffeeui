import Vue from 'vue'
import Router from 'vue-router'
import AppIndex from '@/components/home/AppIndex'
import Login from '@/components/login/Login'
// import HelloWorld from '@/components/HelloWorld'


Vue.use(Router)

export default new Router({
  //先把页面的状态保存到一个对象的state里，当页面的URL变化时找到对应的对象，从而还原这个页面，摆脱#实现前端路由自由
  mode:'history',
  routes: [
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/index',
      name:'AppIndex',
      component:AppIndex
    }
    /*{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }*/
]

})
