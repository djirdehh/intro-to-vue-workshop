<template>
  <div id="app">
    <GreetingComponent/>
  </div>
</template>

<script>
import GreetingComponent from "./components/GreetingComponent";

export default {
  name: "App",
  components: {
    GreetingComponent
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
</style>
