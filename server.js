import express from 'express';
import fs from 'fs';
import Schema from './data/schema';
import GraphQLHTTP from 'express-graphql';
import { MongoClient } from 'mongodb';
import {graphql} from 'graphql';
import {introspectionQuery} from 'graphql/utilities';

const app = express();

app.use(express.static('public'));

(async () => {
  let db = await MongoClient.connect('mongodb://localhost/rgr');
  let schema = Schema(db);

  app.use('/graphql', GraphQLHTTP({
    schema,
    graphiql: true
  }));

  app.listen(3000, () => console.log('Listining on port 3000'));

  // Generate schema.json
  const json = await graphql(schema, introspectionQuery);
  fs.writeFile('./data/schema.json', JSON.stringify(json, null, 2), err => {
    if (err) throw err;

    console.log('JSON schema created');
  })
})();