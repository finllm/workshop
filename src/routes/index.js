import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '@/views/Home/index.vue'
import Conference2023 from '@/views/Conference2023/index.vue'
import Brochure from '@/views/Brochure/index.vue'
import ConferenceBrochure from '@/views/ConferenceBrochure/index.vue'
import Cn2025 from '@/views/2025/CnPage/index.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/2025-CN',
    name: 'CnPage2025',
    component: Cn2025,
  },
  {
    path: '/2023',
    name: 'Conference2023',
    component: Conference2023,
  },
  {
    path: '/brochure',
    name: 'Brochure',
    component: Brochure,
  },
  {
    path: '/fcb',
    name: 'ConferenceBrochure',
    component: ConferenceBrochure,
  },
]

const router = new VueRouter({ mode: 'hash', routes })

export default router
