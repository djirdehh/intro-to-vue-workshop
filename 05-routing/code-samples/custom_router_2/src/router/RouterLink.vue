<template>
  <a @click="navigate" :href="to">{{ to }}</a>
</template>

<script>
import EventBus from "../event-bus";

export default {
  name: "RouterLink",
  props: {
    to: {
      type: String,
      required: true
    }
  },
  methods: {
    navigate(evt) {
      evt.preventDefault();
      window.history.pushState(null, null, this.to);
      EventBus.$emit("navigate");
    }
  }
};
</script>
