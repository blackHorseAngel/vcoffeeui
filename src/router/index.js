import Vue from 'vue'
// import Vuex from 'vuex'
import Router from 'vue-router'
import AppIndex from '@/components/home/AppIndex';
import Register from "@/components/registry/Register";
import Login from '@/components/login/Login';
import ErrorPage from "@/components/error/ErrorPage";
import Home from '@/components/home/Home';
import NavMenu from "@/components/common/NavMenu";
import Company from "@/components/company/Company";
import User from "@/components/user/User";
import Equipment from "@/components/equipment/Equipment";
import Account from "@/components/account/Account";
import Consume from "@/components/consume/Consume";
// import HelloWorld from '@/components/HelloWorld'


// Vue.use(Vuex)
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
      path: '/register',
      name: '/Register',
      component: Register
    },
    {
      path: '/error',
      name: '/ErrorPage',
      component: ErrorPage
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect:'/index',
      children:[
        {
          path:'/index',
          name:'AppIndex',
          component:AppIndex
        },
        {
          path: '/company',
          name: 'Company',
          component: Company
        },
        {
          path: '/user',
          name: 'User',
          component: User
        },
        {
          path:'/equipment',
          name: 'Equipment',
          component: Equipment
        },
        {
          path:'/account',
          name: 'Account',
          component: Account
        },
        {
          path:'/consume',
          name: 'Consume',
          component: Consume
        }
      ]
    },
    {
      path: '/nvaMenu',
      name: 'NavMenu',
      component: NavMenu
    }
    /*{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }*/
]

})
