<template>
  <div class="section">
    <h1>This is Component #2</h1>
    <p>Counter: <strong>{{counter}}</strong></p>
    <button @click="increaseCounter">+</button>
  </div>
</template>

<script>
export default {
  name: "Component2",
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increaseCounter() {
      this.counter++;
    }
  }
};
</script>

<style scoped>
.section {
  padding-bottom: 20px;
}
</style>
