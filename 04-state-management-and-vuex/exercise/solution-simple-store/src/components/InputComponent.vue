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
import store from '../store';

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
        store.addNote(this.input);
        this.input = '';
      }
    }
  }
};
</script>
