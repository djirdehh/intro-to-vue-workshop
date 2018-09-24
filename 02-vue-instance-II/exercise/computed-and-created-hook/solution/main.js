new Vue({
  el: '#app',
  data: {
    users: [],
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        const data = response.data;
        this.users = response.data;
      });  
  },
  computed: {
    reversedUsers() {
      return this.users.reverse();
    }
  }
});
