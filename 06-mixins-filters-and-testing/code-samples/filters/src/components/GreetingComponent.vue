<template>
  <div>
    <h1>{{ greeting }}</h1>
    <h1>{{ greeting | reverseString }}</h1>
  </div>
</template>

<script>
export default {
  name: "GreetingComponent",
  data() {
    return {
      greeting: "Hello World!"
    };
  },
  filters: {
    reverseString(originalValue) {
      return originalValue
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
