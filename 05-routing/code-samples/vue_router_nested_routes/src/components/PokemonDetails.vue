<template>
  <div class="card-content has-text-centered">
    <div class="main">
      <div class="title has-text-white">{{pokemon.name}}</div>
      <div class="hp hp-venusaur">hp {{pokemon.hp}}</div>
    </div>
  </div>
</template>

<script>
import pokemonData from "../data";

export default {
  name: "PokemonDetails",
  props: ["id"],
  data() {
    return {
      pokemon: {
        name: "",
        hp: 0
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
        this.pokemon.name = pokemonFromData.name;
        this.pokemon.hp = pokemonFromData.hp;
      }
    }
  }
};
</script>
