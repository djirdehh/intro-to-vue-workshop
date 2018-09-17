<template>
  <div>
    <p class="city__title">{{ city.title }}</p>
    <p class="city__description">
      {{ city.description }}
    </p>
  </div>
</template>

<script>
import cities from '../data';

export default {
  name: "CityDetails",
  props: ['id'],
  data() {
    return {
      city: {
        title: '',
        description: ''
      }
    }
  },
  created() {
    this.getCityFromId();
  },
  watch: {
    id() {
      this.getCityFromId();
    }
  },
  methods: {
    getCityFromId() {
      const cityFromId = cities.find(city => city.id === this.id);
      this.city = cityFromId;
    }
  }
};
</script>
