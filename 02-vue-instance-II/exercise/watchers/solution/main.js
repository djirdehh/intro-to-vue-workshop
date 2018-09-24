new Vue({
  el: '#app',
  data: {
    km: 0,
    m: 0
  },
  watch: {
    km() {
      if (this.km) {
        this.m = this.km * 1000;
      }
    },
    m() {
      if (this.m) {
        this.km = this.m / 1000;
      }
    }
  }
});
