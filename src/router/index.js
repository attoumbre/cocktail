import { createRouter, createWebHistory } from 'vue-router'


import * as Public from '@/views/public'
import {
  AdminLayout, Dashboard, UserIndex, UserAdd,
  UserEdit, CocktailIndex, CocktailEdit
} from '@/views/admin/'

const routes = [
  {
    path:'/', 
    name:'public', 
    component : Public.PublicLayout,
    children : [
      {path:'/', name:'home', component : Public.Home},
       { path:'/Cocktails', name:'Cocktails', component : Public.Cocktail},
       {path:'/Contact', name:'Contact', component : Public.Contact},
    ]
  }, 
 {
    path: '/admin',
    name:'admin',
    component:AdminLayout,
    children: [
      {path:'dashboard', name:'dashboard', component : Dashboard},
      { path:'users/index', name:'UserIndex', component : UserIndex},
      { path:'users/add', name:'UserAdd', component : UserAdd},
      { path:'users/edit/:id', name:'UserEdit', component : UserEdit },
     
      { path:'cocktails/index', name:'CocktailAdd', component : CocktailIndex},
      { path:'cocktails/edit/:id', name:'CocktailEdit', component : CocktailEdit },
    ]
 },
 {
  path:'/:pathMatch(.*)*', component: Public.NotFound
 }
//  {
//   path:'/:pathMatch(.*)*',redirect:'/'
//  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
