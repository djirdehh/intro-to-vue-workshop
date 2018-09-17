<template>
  <div id="app">
    <div class="cities">
      <h2 class="title">Which city?</h2>
      <!-- use router-link components instead of <a> -->
      <div class="links">
        <a>
          Los Angeles, California
        </a>
        <a>
          Salt Lake City, Utah
        </a>
        <a>
          Toronto, Ontario
        </a>
      </div>
      <!-- remove static component/its import and reference router-view -->
      <SaltLakeCityDetails></SaltLakeCityDetails>
    </div>
  </div>
</template>

<script>
import SaltLakeCityDetails from './components/SaltLakeCityDetails';

export default {
  name: 'App',
  components: {
    SaltLakeCityDetails
  }
};
</script>

<style lang="css" src="../public/styles.css">
/* Styles from stylesheet */
</style>
