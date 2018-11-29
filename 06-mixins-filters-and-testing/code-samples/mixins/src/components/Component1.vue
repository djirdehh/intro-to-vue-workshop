<template>
  <h1>This is Component #1</h1>
</template>

<script>
import { createdMixin } from "../mixins";

export default {
  name: "Component1",
  mixins: [createdMixin]
};
</script>
