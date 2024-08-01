import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SubscriptionSuccess from "../views/SubscriptionSuccess.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/subscription-success",
    name: "newsletter subscription success",
    component: SubscriptionSuccess,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
