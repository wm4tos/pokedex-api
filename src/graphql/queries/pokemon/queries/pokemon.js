import { GraphQLString } from 'graphql';
import Pokemon from '../type/pokemon';
import { GetPokemon } from '../../../../controllers/pokemon.controller';

export default {
  type: Pokemon,
  args: {
    name: {
      type: GraphQLString,
    },
    _id: {
      type: GraphQLString,
    },
  },
  resolve: (root, args) => GetPokemon(args),
};
