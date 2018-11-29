<template>
  <div class="card has-text-weight-bold has-text-white" :class="'card--' + id">
    <div class="card-image">
      <div class="card-image-container">
        <img :src="getPokemonImg">
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "PokemonCard",
  props: ["id"],
  computed: {
    getPokemonImg() {
      // eslint-disable-next-line no-undef
      return require(`../../static/${this.id}.png`);
    }
  }
};
</script>
