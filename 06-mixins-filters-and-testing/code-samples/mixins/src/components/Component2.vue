<template>
  <h1>This is Component #2</h1>
</template>

<script>
import { createdMixin } from "../mixins";

export default {
  name: "Component2",
  mixins: [createdMixin]
};
</script>
