<template>
  <div class="container">
    <div class="pokemon">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import RouterView from "./router/RouterView";

export default {
  name: "App",
  components: {
    "router-view": RouterView
  }
};
</script>

<style lang="css" src="../styles.css">
/* Styles from stylesheet */
</style>
