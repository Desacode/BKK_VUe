import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Information from "../views/Information.vue";
import Job from "../views/Job.vue";

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
  {
    path: "/job",
    name: "Job",
    component: Job,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
