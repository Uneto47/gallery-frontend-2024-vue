import { createRouter, createWebHistory } from 'vue-router';
import Home from '../src/pages/Home.vue';
import Favorites from '../src/pages/Favorites.vue' ;

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/favorites', name: 'Favorites', component: Favorites },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
