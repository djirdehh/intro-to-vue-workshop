import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  notes: [],
  timestamps: []
};

const mutations = {
  ADD_NOTE(state, payload) {
    let newNote = payload;
    state.notes.push(newNote);
  }
};

const actions = {
  addNote(context, payload) {
    context.commit("ADD_NOTE", payload);
  }
};

const getters = {
  getNotes: state => state.notes,
  getNoteCount: state => state.notes.length
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});

export default store;
