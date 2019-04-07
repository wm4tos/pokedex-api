import { GraphQLObjectType } from 'graphql';
import pokemon from './queries/pokemon/query';

const fields = {
  pokemon,
};

export default new GraphQLObjectType({
  name: 'RootQuery',
  description: 'All queries in the server',
  fields,
});
