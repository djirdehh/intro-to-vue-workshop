import Vue from 'vue';
import App from './App.vue';
// Create a separate router instance, import it here, and declare it in the Vue instance

new Vue({
  render: h => h(App)
}).$mount('#app');
