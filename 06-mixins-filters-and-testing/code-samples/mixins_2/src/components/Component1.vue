<template>
  <div>
    <h1>This is Component #1</h1>
    <p>{{getGreeting}}</p>
  </div>
</template>

<script>
import { helloWorldMixin, createdMixin } from "../mixins";

export default {
  name: "Component1",
  mixins: [helloWorldMixin, createdMixin]
};
</script>
