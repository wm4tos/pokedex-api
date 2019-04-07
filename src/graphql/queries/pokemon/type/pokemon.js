import createType from 'mongoose-schema-to-graphql';
import { schema } from '../../../../db/models/pokemon';

const pokemon = createType({
  name: 'Pokemon',
  class: 'GraphQLObjectType',
  schema,
  exclude: ['__v'],
});

export default pokemon;
