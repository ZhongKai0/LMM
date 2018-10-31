import Vue from 'vue'
import Router from 'vue-router'


import home from '../page/homeView'
Vue.use(Router)
// const index = () => import(/* webpackChunkName: "tabs" */ './page/index');
// const info = () => import(/* webpackChunkName: "tabs" */ './page/info');
// const user = () => import(/* webpackChunkName: "tabs" */ './page/user');
// const login = () => import(/* webpackChunkName: "user" */ './page/login');

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path:"/home",
      component:home,
       
    }
    // {
    //   path: '/pages',
    //   component: PagesView,
    //   children: [
    //     {
    //       path: '',
    //       redirect: '/pages/home'
    //     },
    //     {
    //       path: 'home',
    //       name: 'HomeView',
    //       component: HomeView
    //     },
    //     {
    //       path: 'movie',
    //       name: 'MovieView',
    //       component: MovieView
    //     },
    //     {
    //       path: 'book',
    //       name: 'BookView',
    //       component: BookView
    //     },
    //     {
    //       path: 'status',
    //       name: 'StatusView',
    //       component: StatusView
    //     },
    //     {
    //       path: 'group',
    //       name: 'GroupView',
    //       component: GroupView
    //     },
    //     {
    //       path: 'detail/:id',
    //       name: 'DetailView',
    //       component: DetailView
    //     }
    //   ]
    // },
    // {
    //   path: '/pages/:classify/subject/:id',
    //   name: 'SubjectView',
    //   components: {
    //     default: PagesView,
    //     subject: SubjectView
    //   }
    // },
    // {
    //   path: '/search',
    //   name: 'SearchView',
    //   components: {
    //     default: PagesView,
    //     search: SearchView
    //   }
    // },
    // {
    //   path: '/login',
    //   name: 'LoginView',
    //   component: LoginView
    // },
    // {
    //   path: '/register',
    //   name: 'RegisterView',
    //   component: RegisterView
    // },
    // {
    //   path: '*',
    //   redirect: '/pages/'
    // }
  ],
  mode:"history"
})
