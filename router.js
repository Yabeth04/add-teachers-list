import { createRouter, createWebHistory } from 'vue-router';
import LoginUsers from './src/components/Login_users.vue';
import Panel2 from './src/components/admin/Panel_options.vue'; 

const routes = [
  { path: '/', component: LoginUsers }, //ruta raiz, primer componente en renderizar
  { path: '/panel2', component: Panel2 }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
