import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from "../views/Dashboard";
import SignUp from "../views/SignUp";
import Page from "../views/Page";

Vue.use(VueRouter)

  const routes = [

    {
      path:'/',
      name:'SignUp',
      component: SignUp
    },
      {
          path:'/page',
          component: Page
      },
    {
      path:'/onboarding',
      name:'dashboard',
      component: Dashboard,
      meta:{requiresAuth:true}
    },
      {
          path:'*',
          redirect:'/'
      }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next) => {
  if(to.meta.requiresAuth){
      const authUser = window.localStorage.getItem('authUser');
      if(authUser){
          next();
          if(to.matched == '/signup'){
            next({path:'/signup',redirect:'/'})
          }
      }else{
        next({path:'/'})
      }
  }
  next();
})
export default router
