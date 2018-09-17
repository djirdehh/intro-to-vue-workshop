<template>
  <div class="note-count">
    Note count: <strong>{{ notes.length }}</strong>
  </div>
</template>

<script>
export default {
  name: "NoteCountComponent",
  props: ['notes']
};
</script>
