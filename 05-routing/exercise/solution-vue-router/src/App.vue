<template>
  <div id="app">
    <div class="cities">
      <h2 class="title">Which city?</h2>
      <div class="links">
        <router-link to="/city/los-angeles">
          Los Angeles, California
        </router-link>
        <router-link to="/city/salt-lake-city">
          Salt Lake City, Utah
        </router-link>
        <router-link to="/city/toronto">
          Toronto, Ontario
        </router-link>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="css" src="../public/styles.css">
/* Styles from stylesheet */
</style>
