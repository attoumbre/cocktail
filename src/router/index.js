import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/public/Home.vue'
import Cocktail from '@/views/public/Cocktail.vue'
import Contact from '@/views/public/Contact.vue'
import NotFound from '@/views/public/NotFound.vue'
import PublicLayout from '@/views/public/Layout.vue'

import AdminLayout from '@/views/admin/Layout.vue'
import Dashboard from '@/views/admin/Dashboard.vue'
import UserIndex from '@/views/admin/users/UserIndex.vue'
import UserAdd from '@/views/admin/users/UserAdd.vue'
import UserEdit from '@/views/admin/users/UserEdit.vue'

import CocktailIndex from '@/views/admin/cocktails/CocktailIndex.vue'
import CocktailEdit from '@/views/admin/cocktails/CocktailEdit.vue'

const routes = [
  {
    path:'/', 
    name:'public', 
    component : PublicLayout,
    children : [
      {path:'/', name:'home', component : Home},
       { path:'/Cocktails', name:'Cocktails', component : Cocktail},
       {path:'/Contact', name:'Contact', component : Contact},
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
  path:'/:pathMatch(.*)*', component:NotFound
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
