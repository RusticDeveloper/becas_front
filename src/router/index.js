import { createRouter, createWebHistory } from 'vue-router'

import Postulation_Form from '@/Views/Application_Form.vue'
import Postulant_Log_In from '@/Views/Applicant_Log_In.vue'
import Postulant_Sign_up from '@/Views/Applicant_Sign_up.vue'
import Administrative_Log_In from '@/Views/Administrative_Log_In.vue'
import Postulation_List from '@/Views/Application_List.vue'
import Admin_Statistics from '@/Views/Admin_Statistics.vue'
import Forbiden_Page from '@/components/system_info/Forbiden_Page.vue'
import Not_Found_Page from '@/components/system_info/Not_Found_Page.vue'
import Postulation_Information_Managemenet from '@/Views/Application_Information_Management.vue'
import Application_Evaluation_Modal from '@/components/Application_Evaluation_Modal.vue'
import Report_Management from '@/Views/Report_Management.vue'
import User_Profile from '@/Views/User_Profile.vue'
import Period_Management from '@/Views/Period_Management.vue'

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
    },
    {
      path: '/postulaciones',
      name: 'postulation_list',
      component: Postulation_List
    },
    {
      path: '/estadisticas',
      name: 'statistics',
      component: Admin_Statistics
    },
    {
      path: '/postulante_info',
      name: 'postulant_information',
      component: Postulation_Information_Managemenet
    },
    // ? ruta de prueba se puede cambiar
    {
      path: '/periodo',
      name: 'period_management',
      component: Period_Management
    },
    {
      path: '/perfil',
      name: 'user_profile',
      component: User_Profile
    },
    {
      path: '/reportes',
      name: 'repots',
      component: Report_Management
    },
    {
      path: '/forbiden',
      name: 'forbiden',
      component: Forbiden_Page
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not_found',
      component: Not_Found_Page
    }
  ]
})

export default router
