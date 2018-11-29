export const helloWorldMixin = {
  data() {
    return {
      reversedGreeting: '!dlrow olleH',
    };
  },
  computed: {
    getGreeting() {
      return this.reversedGreeting
        .split('')
        .reverse()
        .join('');
    },
  },
};

export const createdMixin = {
  created() {
    // eslint-disable-next-line no-console
    console.log(`${this.$options.name} has been created!`);
  },
};
