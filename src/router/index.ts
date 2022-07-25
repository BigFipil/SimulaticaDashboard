import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Configuration from "../views/Configuration.vue";
import Particles from "../views/Particles.vue";
import Editor from "../views/Editor.vue";
import Examples from "../views/Examples.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
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
  {
    path: "/particles",
    name: "Particles",
    component: Particles,
  },
  {
    path: "/editor",
    name: "Editor",
    component: Editor,
  },
  {
    path: "/examples",
    name: "Examples",
    component: Examples,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
