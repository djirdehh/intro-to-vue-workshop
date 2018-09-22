<template>
  <div class="section">
    <h1>This is Component #2</h1>
    <p>Counter: <strong>{{counter}}</strong></p>
    <button @click="increaseCounter">+</button>
  </div>
</template>

<script>
import {counterMixin} from '../mixins';

export default {
  name: "Component1",
  mixins: [counterMixin]
};
</script>

<style scoped>
.section {
  padding-bottom: 20px;
}
</style>
