import Vue from 'vue';
import VueRouter from 'vue-router';
import PokemonCard from './components/PokemonCard';
import PokemonDetails from './components/PokemonDetails';
import PokemonStats from './components/PokemonStats';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: {
      template: `
        <h3 class="subtitle has-text-white">
          Select a Pokémon from the links below!
        </h3>
      `,
    },
  },
  {
    path: '/pokemon/:id',
    component: PokemonCard,
    props: true,
    children: [
      {
        path: 'details',
        component: PokemonDetails,
        props: true,
      },
      {
        path: 'stats',
        component: PokemonStats,
        props: true,
      },
    ],
  },
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
