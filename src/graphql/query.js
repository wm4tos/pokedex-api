import { GraphQLObjectType } from 'graphql';
import { fields as pokemonFields } from './schemas/pokemon/query';

const fields = {
  ...pokemonFields,
};

export default new GraphQLObjectType({
  name: 'RootQuery',
  description: 'All queries in the server',
  fields,
});
