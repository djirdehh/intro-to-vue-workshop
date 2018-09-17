import Vue from "vue";
import VueRouter from "vue-router";
import LosAngelesDetails from "./components/LosAngelesDetails";
import SaltLakeCityDetails from "./components/SaltLakeCityDetails";
import TorontoDetails from "./components/TorontoDetails";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: {
      name: "IndexBlurb",
      template: `<p class="city__title">Pick a city!</p>`
    }
  },
  { path: "/city/los-angeles", component: LosAngelesDetails },
  { path: "/city/salt-lake-city", component: SaltLakeCityDetails },
  { path: "/city/toronto", component: TorontoDetails },
  {
    path: "*",
    component: {
      name: "not-found-blurb",
      template: `<h2>Not Found :(. Pick a city from the links below!</h2>`
    }
  }
];

export default new VueRouter({
  mode: "history",
  routes
});
