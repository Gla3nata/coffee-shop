import Vue from 'vue'
import VueRouter from 'vue-router'
import HeroView from  '@/views/HeroView'
import ContactsPage from  '@/views/ContactsPage'
import OurCoffeeView from  '@/views/OurCoffeeView'


Vue.use(VueRouter)

const router = new VueRouter ({
  mode:'history',
  routes: [
    {
      path:'/',
      component: HeroView
    },
        {
      path:'/contacts',
      component: ContactsPage
    },
        {
      path:'/our-coffee',
      component: OurCoffeeView
    }
  ]
})

export default router