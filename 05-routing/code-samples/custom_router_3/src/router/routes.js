import BlastoiseCard from '../components/BlastoiseCard';
import CharizardCard from '../components/CharizardCard';
import VenusaurCard from '../components/VenusaurCard';

export default [
  { path: '/', component: CharizardCard },
  { path: '/charizard', component: CharizardCard },
  { path: '/blastoise', component: BlastoiseCard },
  { path: '/venusaur', component: VenusaurCard },
];
