import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "../views/Dashboard.vue";
import FarmsPage from "../views/FarmsPage.vue";
import CropsPage from "../views/CropsPage.vue";

const routes = [
  { path: "/", component: Dashboard },
  { path: "/farms", component: FarmsPage },
  { path: "/crops", component: CropsPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
