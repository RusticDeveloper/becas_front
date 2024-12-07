import { createRouter, createWebHistory } from 'vue-router'

import Postulation_Form from '@/Views/Postulation_Form.vue'
import Postulant_Log_In from '@/Views/Postulant_Log_In.vue'
import Postulant_Sign_up from '@/Views/Postulant_Sign_up.vue'
import Administrative_Log_In from '@/Views/Administrative_Log_In.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/autenticar',
      name: 'log_in',
      component: Postulant_Log_In
    },
    {
      path: '/registrar',
      name: 'sign_up',
      component: Postulant_Sign_up
    },
    {
      path: '/formulario',
      name: 'form',
      component: Postulation_Form
    },
    {
      path: '/ingreso_admin',
      name: 'form_admin',
      component: Administrative_Log_In
    }
  ]
})

export default router
