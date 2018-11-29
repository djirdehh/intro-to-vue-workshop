new Vue({
  el: '#app',
  data: {
    input: '',
    counter: 0,
  },
  watch: {
    input() {
      this.counter++;
    },
  },
});
