import { createRouter, createWebHistory } from 'vue-router';
import LoginUsers from './src/components/Login_users.vue';
import Panel2 from './src/components/admin/Panel_options.vue'; 
import Calculator from './src/components/admin/calculator.vue';
import register_teachers from './src/components/admin/register_teachers.vue';
import Show_list from './src/components/admin/Show_list.vue';

const routes = [
  { path: '/', component: LoginUsers }, //ruta raiz, primer componente en renderizar
  { path: '/panel2', component: Panel2 },
  { path: '/calculator',component: Calculator},
  { path: '/register_teachers',component: register_teachers},
  { path: '/show_list',component: Show_list},

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
