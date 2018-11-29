<template>
  <div>
    <input v-model="number" type="number">
    <button @click="addNumber">Add new number</button>
  </div>
</template>

<script>
export default {
  name: "NumberSubmit",
  data() {
    return {
      number: 0
    };
  },
  methods: {
    addNumber() {
      this.$store.dispatch("addNumber", Number(this.number));
    }
  }
};
</script>
