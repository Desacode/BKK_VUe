import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Information from "../views/Information.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/informasi",
    name: "Information",
    component: Information,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
