<template>
  <div>
    <input v-model="number" type="number">
    <button @click="addNumber">Add new number</button>
  </div>
</template>

<script>
import { store } from "../store.js";

export default {
  name: "NumberSubmit",
  data() {
    return {
      number: 0
    };
  },
  methods: {
    addNumber() {
      store.addNumber(Number(this.number));
    }
  }
};
</script>
