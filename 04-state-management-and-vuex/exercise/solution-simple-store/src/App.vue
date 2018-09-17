<template>
  <div id="app">
    <div class="notes-section">
      <div class="columns">
        <div class="column has-text-centered">
          <strong>Notes</strong>
          <div v-for="(note, key) in storeState.notes"
              :key="key"
             class="notes">
            {{ note }}
          </div>
        </div>
      </div>
      <InputComponent></InputComponent>
    </div>
    <NoteCountComponent></NoteCountComponent>
  </div>
</template>

<script>
import InputComponent from "./components/InputComponent";
import NoteCountComponent from "./components/NoteCountComponent";
import store from './store';

export default {
  name: 'App',
  data() {
    return {
      storeState: store.state
    }
  },
  components: {
    'InputComponent': InputComponent,
    'NoteCountComponent': NoteCountComponent
  }
};
</script>

<style lang="css" src="../public/styles.css">
/* Styles from stylesheet */
</style>
