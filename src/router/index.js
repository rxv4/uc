import { createRouter, createWebHistory } from 'vue-router';

import home from '@/views/home.vue';
import r1 from '@/views/r1.vue';
import r2 from '@/views/r2.vue';
import r3 from '@/views/r3.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: home, // Page d'accueil
    },
    {
      path: '/r1',
      component: r1, // Page pour la route /r1
    },
    {
      path: '/r2',
      component: r2, // Page pour la route /r2
    },
    {
      path: '/r3',
      component: r3, // Page pour la route /r3
    }
  ]
});

export default router;
