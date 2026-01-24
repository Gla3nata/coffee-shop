import Vue from 'vue'
import VueRouter from 'vue-router'
import HeroView from  '@/views/HeroView'
import ContactUs from  '@/views/ContactUs'
import OurCoffeeView from  '@/views/OurCoffeeView'
import ForYourPleasure from  '@/views/ForYourPleasure'
import ThankYouPage from  '@/views/ThankYouPage'



Vue.use(VueRouter)

const router = new VueRouter ({
  mode:'history',
  routes: [
    { path:'/', component: HeroView},
    { path:'/contacts', component: ContactUs},
    { path:'/our-coffee', component: OurCoffeeView},
    { path:'/goodspage', component: ForYourPleasure},
    { path:'/thanks', component: ThankYouPage },
  ]
})

export default router