import Vue from "vue";
import VueRouter from "vue-router";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: {
      name: "IndexBlurb",
      template: `<p class="city__title">Pick a component.</p>`
    }
  },
  { path: "/component-1", component: Component1 },
  { path: "/component-2", component: Component2 },
  {
    path: "*",
    component: {
      name: "not-found-blurb",
      template: `<h2>Not Found :(. Pick either Components #1 or #2</h2>`
    }
  }
];

export default new VueRouter({
  mode: "history",
  routes
});
