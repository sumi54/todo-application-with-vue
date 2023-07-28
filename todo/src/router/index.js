import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import YapilacakEkle from '../views/YapilacakEkle.vue'
import YapilacakGuncelle from '../views/YapilacakGuncelle.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/yapilacakekle',
      name: 'YapilacakEkle',
      component: YapilacakEkle
    },
    {
      path: '/yapilacak-guncelle/:id',
      name: 'YapilacakGuncelle',
      component: YapilacakGuncelle,
      props:true
    }
  ]
  
})

export default router
