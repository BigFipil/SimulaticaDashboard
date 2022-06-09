import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Configuration from "../views/Configuration.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/config",
    name: "Configuration",
    component: Configuration,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
