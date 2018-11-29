import Vue from 'vue';
import VueRouter from 'vue-router';
import BlastoiseCard from './components/BlastoiseCard';
import CharizardCard from './components/CharizardCard';
import VenusaurCard from './components/VenusaurCard';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: CharizardCard },
  { path: '/charizard', component: CharizardCard },
  { path: '/blastoise', component: BlastoiseCard },
  { path: '/venusaur', component: VenusaurCard },
  {
    path: '*',
    component: {
      template: `
        <h3 class="subtitle has-text-white">
          Sorry. We couldn't find that Pokémon :(.
        </h3>
      `,
    },
  },
];

export default new VueRouter({
  mode: 'history',
  routes,
});
