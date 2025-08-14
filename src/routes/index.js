import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '@/views/Home/index.vue'
import Conference2023 from '@/views/Conference2023/index.vue'
import Brochure from '@/views/Brochure/index.vue'
import ConferenceBrochure from '@/views/ConferenceBrochure/index.vue'
import ConferenceBrochure2025 from '@/views/ConferenceBrochure2025/index.vue'
import ConferenceBrochure2023 from '@/views/ConferenceBrochure2023/index.vue'
import Invitation from '@/views/2025/invitation/index.vue'
import InvitationEN from '@/views/2025/invitationEN/index.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/invitation',
    name: 'Invitation',
    component: Invitation,
  },
  {
    path: '/invitationEN',
    name: 'InvitationEN',
    component: InvitationEN,
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
  {
    path: '/fcb2025',
    name: 'ConferenceBrochure2025',
    component: ConferenceBrochure2025,
  },
  {
    path: '/fcb2023',
    name: 'ConferenceBrochure2023',
    component: ConferenceBrochure2023,
  },
]

const router = new VueRouter({ mode: 'hash', routes })

export default router
