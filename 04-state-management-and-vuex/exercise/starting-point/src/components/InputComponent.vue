<template>
  <div class="input-submit">
    <input
      placeholder='Enter a note'
      v-model="input"
      class="input is-small"
      type="text" />
    <button class="button is-primary">Submit</button>
  </div>
</template>

<script>
export default {
  name: "InputComponent",
  data() {
    return {
      input: '',
    }
  }
};
</script>
