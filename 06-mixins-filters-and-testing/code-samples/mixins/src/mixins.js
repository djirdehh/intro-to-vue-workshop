export const createdMixin = {
  created() {
    // eslint-disable-next-line no-console
    console.log(`${this.$options.name} has been created!`);
  },
};
