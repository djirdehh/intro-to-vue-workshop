<template>
  <div class="card-content has-text-centered">
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
</template>

<script>
import pokemonData from "../data";

export default {
  name: "PokemonStats",
  props: ["id"],
  data() {
    return {
      pokemon: {
        type: "",
        weight_lbs: 0,
        height_m: 0
      }
    };
  },
  created() {
    this.getPokemon();
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
        this.pokemon.type = pokemonFromData.type;
        this.pokemon.weight_lbs = pokemonFromData.weight_lbs;
        this.pokemon.height_m = pokemonFromData.height_m;
      }
    }
  }
};
</script>
