import Vue from 'vue'
import VueRouter from 'vue-router'
import HeroView from  '@/views/HeroView'
import ContactUs from  '@/views/ContactUs'
import OurCoffeeView from  '@/views/OurCoffeeView'
import ForYourPleasure from  '@/views/ForYourPleasure'
import ThankYouPage from  '@/views/ThankYouPage'
import GoodsItemView from  '@/views/GoodsItemView'



Vue.use(VueRouter)

const routes = [
    { path:'/', component: HeroView},
    { path:'/contacts', component: ContactUs},
    { path:'/our-coffee', component: OurCoffeeView},
    { path:'/goodspage', component: ForYourPleasure},
    { path:'/thanks', component: ThankYouPage }, 
    { name:'coffee', path:'/our-coffee/:id', component: GoodsItemView },
    { name:'goods', path:'/goodspage/:id', component: GoodsItemView }
  ] 

const router = new VueRouter ({
  mode:'history',
  routes
})

export default router