import { GraphQLString, GraphQLList, GraphQLBoolean } from 'graphql';
import Pokemon from '../type/pokemon';
import { GetPokemonList } from '../../../../controllers/pokemon.controller';

export default {
  type: new GraphQLList(Pokemon),
  args: {
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
    evolved: {
      type: GraphQLBoolean,
    },
    evolutionStage: {
      type: GraphQLString,
    },
    crossGen: {
      type: GraphQLBoolean,
    },
    notGettable: {
      type: GraphQLBoolean,
    },
    futureEvolve: {
      type: GraphQLBoolean,
    },
    weather1: {
      type: GraphQLString,
    },
    weather2: {
      type: GraphQLString,
    },
    regional: {
      type: GraphQLBoolean,
    },
    spawns: {
      type: GraphQLBoolean,
    },
  },
  resolve: (root, args) => GetPokemonList(args),
};
