import { createRouter, createWebHistory } from 'vue-router';
import NotFound from './views/NotFound.vue';
import { ADMIN_ROUTES } from './features/admin/admin.routes';
import { initialFetchAdminProducts } from './features/admin/stores/adminProductStore';
import { initialFetchProducts } from './features/boutique/stores/productStore';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/boutique',
    },
    {
      path: '/boutique',
      beforeEnter: [initialFetchProducts],
      component: () => import('@/features/boutique/Boutique.vue'),
    },
    {
      path: '/admin',
      beforeEnter: [initialFetchAdminProducts],
      component: () => import('@/features/admin/Admin.vue'),
      children: ADMIN_ROUTES,
    },
    {
      path: '/:notfound(.*)*',
      component: NotFound,
    },
  ],
});