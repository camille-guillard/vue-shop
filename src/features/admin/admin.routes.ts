import type { RouteRecordRaw } from 'vue-router';

export const ADMIN_ROUTES: RouteRecordRaw[] = [
  {
    path: '',
    redirect: '/admin/addproduct',
  },
  {
    path: 'addproduct',
    component: () => import('./views/ProductForm.vue'),
  },
  {
    path: 'productlist',
    component: () => import('./views/ProductList.vue'),
  },
  {
    path: 'edit/:productId',
    name: 'edit',
    component: () => import('./views/ProductForm.vue'),
  },
];