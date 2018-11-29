<template>
  <div class="container">
    <div class="pokemon">
      <router-view></router-view>

      <div class="pokemon-links has-text-centered">
        <router-link to="/charizard"></router-link>
        <router-link to="/blastoise"></router-link>
        <router-link to="/venusaur"></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import RouterView from "./router/RouterView";
import RouterLink from "./router/RouterLink";
import EventBus from "./event-bus";

export default {
  name: "App",
  created() {
    window.addEventListener("popstate", () => {
      EventBus.$emit("navigate");
    });
  },
  components: {
    "router-view": RouterView,
    "router-link": RouterLink
  }
};
</script>

<style lang="css" src="../styles.css">
/* Styles from stylesheet */
</style>