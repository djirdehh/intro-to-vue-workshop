export const counterMixin = {
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    increaseCounter() {
      this.counter++;
    }
  }
};
