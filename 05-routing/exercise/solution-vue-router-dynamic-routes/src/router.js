import Vue from "vue";
import VueRouter from "vue-router";
import CityDetails from "./components/CityDetails";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: {
      name: "IndexBlurb",
      template: `<p class="city__title">Pick a city!</p>`
    }
  },
  {
    path: "/city/:id",
    component: CityDetails,
    props: true,
    beforeEnter: (to, from, next) => {
      const id = to.params.id;
      if (["salt-lake-city", "los-angeles", "toronto"].includes(id)) {
        next();
      } else {
        next("/not-found");
      }
    }
  },
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
