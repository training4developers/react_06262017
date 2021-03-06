import http from 'http';
import express from 'express';
import graphqlHttp from 'express-graphql';

import { schema } from './widgets-graphql/schema';

const port = 3020;

const app = express();

app.use('/', graphqlHttp({
  schema,
  pretty: true,
  graphiql: true,
  context: {
    baseUrl: 'http://localhost:3000/api'
  }
}));

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`widgets graphql server stated on port ${port}`);
});
