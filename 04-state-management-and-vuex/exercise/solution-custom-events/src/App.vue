<template>
  <div id="app">
    <div class="notes-section">
      <div class="columns">
        <div class="column has-text-centered">
          <strong>Notes</strong>
          <div v-for="(note, key) in notes"
              :key="key"
             class="notes">
            {{ note }}
          </div>
        </div>
      </div>
      <InputComponent @noteSubmitted="addNote($event)"></InputComponent>
    </div>
    <NoteCountComponent :notes="notes"></NoteCountComponent>
  </div>
</template>

<script>
import InputComponent from "./components/InputComponent";
import NoteCountComponent from "./components/NoteCountComponent";

export default {
  name: 'App',
  data() {
    return {
      notes: [],
    }
  },
  methods: {
    addNote($event) {
      this.notes.push($event);
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
