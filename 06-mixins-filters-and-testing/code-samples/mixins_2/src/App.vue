<template>
  <div id="app">
    <router-view></router-view>
    <router-link to="/component-1">Component #1</router-link>
    <router-link to="/component-2">Component #2</router-link>
  </div>
</template>

<script>
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";

export default {
  name: "App",
  components: {
    Component1,
    Component2
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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
  padding: 0 10px;
}
</style>
