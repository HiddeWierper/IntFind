import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Skills from '../views/Skills.vue'; // Voeg deze import toe
import School from '../views/School.vue'; // Voeg deze import toe

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/skills', component: Skills }, // Voeg deze route toe
  { path: '/school', component: School }, // Voeg deze route toe
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
