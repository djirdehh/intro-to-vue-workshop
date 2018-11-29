<template>
  <div class="hello-world">
    <h2>{{ getGreeting }}</h2>
    <p>This is the Hello World component.</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      reversedGreeting: "!dlrow olleH"
    };
  },
  computed: {
    getGreeting() {
      return this.reversedGreeting
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>

<style scoped>
.hello-world {
  width: 100%;
  text-align: center;
}
</style>
