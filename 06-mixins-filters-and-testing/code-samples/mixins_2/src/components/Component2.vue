<template>
  <div>
    <h1>This is Component #2</h1>
    <p>{{getGreeting}}</p>
  </div>
</template>

<script>
import { helloWorldMixin, createdMixin } from "../mixins";

export default {
  name: "Component2",
  mixins: [helloWorldMixin, createdMixin]
};
</script>
