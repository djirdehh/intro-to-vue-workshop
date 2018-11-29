<template>
  <div class="card has-text-weight-bold has-text-white" :class="'card--' + pokemon.id">
    <div class="card-image">
      <div class="card-image-container">
        <img :src="getPokemonImg">
      </div>
    </div>
    <div class="card-content has-text-centered">
      <div class="main">
        <div class="title has-text-white">{{pokemon.name}}</div>
        <div class="hp hp-venusaur">hp {{pokemon.hp}}</div>
      </div>
      <div class="stats columns is-mobile">
        <div class="column">
          {{pokemon.type}}
          <br>
          <span class="tag is-danger">Type</span>
        </div>
        <div class="column center-column">
          {{pokemon.weight_lbs}} lbs
          <br>
          <span class="tag is-danger">Weight</span>
        </div>
        <div class="column">
          {{pokemon.height_m}} m
          <br>
          <span class="tag is-danger">Height</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pokemonData from "../data";

export default {
  name: "PokemonCard",
  props: ["id"],
  data() {
    return {
      pokemon: {
        id: "",
        name: "",
        hp: 0,
        type: "",
        weight_lbs: 0,
        height_m: 0
      }
    };
  },
  beforeRouteUpdate(to, from, next) {
    if (to.path === "/pokemon/venusaur") next("/pokemon/charizard");
    else next();
  },
  created() {
    this.getPokemon();
  },
  computed: {
    getPokemonImg() {
      // eslint-disable-next-line no-undef
      return require(`../../static/${this.pokemon.id}.png`);
    }
  },
  watch: {
    id() {
      this.getPokemon();
    }
  },
  methods: {
    getPokemon() {
      const idParam = this.id;
      const pokemonFromData = pokemonData.find(
        pokemon => pokemon.id === idParam
      );

      if (pokemonFromData) {
        this.pokemon = pokemonFromData;
        this.pokemonImage = `${this.pokemon.id}Image`;
      }
    }
  }
};
</script>
