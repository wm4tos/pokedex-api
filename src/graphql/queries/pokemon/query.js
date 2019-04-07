import { GraphQLString, GraphQLList } from 'graphql';
import Pokemon from './type/pokemon';
import { GetOnePokemon } from '../../../controllers/pokemon.controller';

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
      type: GraphQLString,
    },
  },
  resolve: (root, args) => GetOnePokemon(args),
};
