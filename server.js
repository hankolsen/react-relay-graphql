import express from 'express';
import schema from './data/schema';
import GraphQLHTTP from 'express-graphql';
import { MongoClient } from 'mongodb';

const app = express();

app.use(express.static('public'));

(async () => {
  let db = await MongoClient.connect('mongodb://localhost/rgr');
  app.use('/graphql', GraphQLHTTP({
    schema: schema(db),
    graphiql: true
  }));

  app.listen(3000, () => console.log('Listining on port 3000'));
})();