const store = {
  state: {
    notes: []
  },
  addNote(newNote) {
    this.state.notes.push(newNote);
  }
};

export default store;
