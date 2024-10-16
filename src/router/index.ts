import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import termsView from '@/views/TermsView.vue'
import LoginView from '@/views/LoginView.vue';
import DashboardView from '@/views/DashboardView.vue';
import VerifyView from '@/views/VerifyView.vue';



/* const before = (to: any, from: any, next: any) => {
  const password: string | null = prompt('¿Ingrese su contraseña?')
  if (password === '123asd') {
    next() // Permite la navegación
  } else {
    alert('Contraseña incorrecta')
    next(false) // Bloquea la navegación
  }
} */

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/terms',
      name: 'Terms',
      component: () => import('@/views/TermsView.vue')
    },
    { path: '/login',
      name: 'Login',
      component: () => import('@/views/LoginView.vue')
     },
     { path: '/Dashboard',
      name: 'Dashboard',
      component: () => import('@/views/DashboardView.vue')
     },
    {
      path: '/verify',
      name: 'verify',
      component: () => import('@/views/VerifyView.vue'),
      //beforeEnter: before
    },
    {
      path: '/examine/:paymetReference',
      name: 'examine',
      component: () => import('@/views/ExamineView.vue')
    }
  ]
})

export default router
