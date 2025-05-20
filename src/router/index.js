import { createRouter, createWebHashHistory } from "vue-router";

// imports
import home from "@/views/home.vue";
import ErrorPage from "@/views/Error.vue";
import r2 from "@/views/r2.vue";
import r1 from "@/views/r1.vue";
import InfoPage from "@/views/Info.vue";

// importe tout les fichiers dans /projects (projets des enfants)
const projectModules = import.meta.glob("@/projects/**/*.vue", { eager: true });

const projectRoutes = Object.keys(projectModules).map((path) => {
  const match = path.match(/\/projects\/([^/]+)\/([^/]+)\.vue$/);
  if (!match) return null;

  const folder = match[1];
  const file = match[2];

  return {
    path: `/${folder}/${file.toLowerCase()}`,
    component: projectModules[path].default,
  };
}).filter(route => route !== null);

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: home },
    { path: "/info", component: InfoPage},
    { path: "/maurice-leblanc", component: r2 },
    { path: "/louis-blanc", component: r1 },
    ...projectRoutes,
    {
      path: "/:pathMatch(.*)*",
      component: ErrorPage,
    },
  ],
});

export default router;
