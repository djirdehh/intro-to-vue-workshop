<template>
  <div class="pokemon">
    <component :is="currentView"></component>
  </div>
</template>

<script>
import routes from "./routes";
import EventBus from "../event-bus";

export default {
  name: "RouterView",
  data() {
    return {
      currentView: {}
    };
  },
  methods: {
    getRouteObject() {
      return routes.find(route => route.path === window.location.pathname);
    }
  },
  created() {
    // Get correct component upon page load
    if (!this.getRouteObject()) {
      this.currentView = {
        template: `
          <h3 class="subtitle has-text-white">
            Sorry, we couldn't find that Pokémon :(.
          </h3>
        `
      };
    } else {
      this.currentView = this.getRouteObject().component;
    }

    // Get correct component upon redirect
    EventBus.$on("navigate", () => {
      this.currentView = this.getRouteObject().component;
    });
  }
};
</script>
