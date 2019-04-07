import { GraphQLObjectType } from 'graphql';
import pokemon from './queries/pokemon';
import pokemons from './queries/pokemons';

export const fields = {
  pokemon,
  pokemons,
};

export default new GraphQLObjectType({
  name: 'RootPokemonQuery',
  description: 'All pokemon queries',
  fields,
});
