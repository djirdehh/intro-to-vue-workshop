<template>
  <div class="note-count">
    Note count: <strong>{{ storeState.notes.length }}</strong>
  </div>
</template>

<script>
import store from '../store';

export default {
  name: "NoteCountComponent",
  data() {
    return {
      storeState: store.state
    }
  }
};
</script>
