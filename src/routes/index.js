import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("../views/Home.vue");
const About = () => import("../views/About.vue");
const Restaurant = () => import("../views/Restaurant.vue");
const RestaurantDetail = () => import("../views/RestaurantDetail.vue");
const NotFound = () => import("../views/NotFound.vue");

const routes = [
  { path: "/", component: Home },
  { path: "/nosotros", component: About },
  // { path: "/restaurante", component: Restaurant },
  { path: "/restaurante/:id", component: RestaurantDetail, props: true },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
