import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ChiSiamo from '../views/ChiSiamo.vue';

// Importa altri componenti qui

const routes = [
  { path: '/HomePage', component: HomePage },
  { path: '/ChiSiamo', component: ChiSiamo }
  // Aggiungi altre rotte qui
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
