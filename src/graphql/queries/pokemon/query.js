import { GraphQLString, GraphQLList, GraphQLBoolean } from 'graphql';
import Pokemon from './type/pokemon';
import { GetPokemonList } from '../../../controllers/pokemon.controller';

export default {
  type: new GraphQLList(Pokemon),
  args: {
    name: {
      type: GraphQLString,
    },
    _id: {
      type: GraphQLString,
    },
    generation: {
      type: GraphQLString,
    },
    familyID: {
      type: GraphQLString,
    },
    type1: {
      type: GraphQLString,
    },
    type2: {
      type: GraphQLString,
    },
    legendary: {
      type: GraphQLBoolean,
    },
  },
  resolve: (root, args) => GetPokemonList(args),
};
