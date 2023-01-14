import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: `/`,
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: `/character`,
    name: 'Character',
    component: () => import("@/views/Character.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
