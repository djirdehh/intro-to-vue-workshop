<template>
  <div class="input-submit">
    <input
      placeholder='Enter a note'
      v-model="input"
      @keyup.enter="submitNote"
      class="input is-small" type="text" />
    <button class="button is-primary" @click="submitNote">Submit</button>
  </div>
</template>

<script>
export default {
  name: "InputComponent",
  data() {
    return {
      input: '',
    }
  },
  methods: {
    submitNote() {
      if (this.input !== '') {
        this.$emit('noteSubmitted', this.input);
        this.input = '';
      }
    }
  }
};
</script>
