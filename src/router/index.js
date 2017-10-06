import Vue from 'vue'
import Router from 'vue-router'

import home from 'container/Home'
import list from 'container/Home/List'
import me from 'container/Home/Me'

import login from 'container/Login'
import signin from 'container/SignIn'
import needForm from 'container/NeedForm'
import serviceForm from 'container/ServiceForm'
import editUserInfo from 'container/EditUserInfo'
import aboutUs from 'container/AboutUs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: 'list',
          name: 'list',
          component: list
        },
        {
          path: 'me',
          name: 'me',
          component: me
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/signin',
      name: 'signin',
      component: signin
    },
    {
      path: '/needForm',
      name: 'needForm',
      component: needForm
    },
    {
      path: '/serviceForm',
      name: 'serviceForm',
      component: serviceForm
    },
    {
      path: '/editUserInfo',
      name: 'editUserInfo',
      component: editUserInfo
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUs
    }
  ]
})
