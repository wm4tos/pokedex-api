import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../graphql/schema';

const app = express();


app.use(
  '/graphiql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

export default app;
