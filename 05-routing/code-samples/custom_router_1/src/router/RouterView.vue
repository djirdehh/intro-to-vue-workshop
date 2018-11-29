<template>
  <div class="pokemon">
    <component :is="currentView"></component>
  </div>
</template>

<script>
import routes from './routes';

export default {
  name: "RouterView",
  data() {
    return {
      currentView: {}
    }
  },
  created() {
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
  },
  methods: {
    getRouteObject() {
      return routes.find(
        route => route.path === window.location.pathname
      );
    }
  }
};
</script>
