import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
} from 'graphql';

import Link from './types/link';

const Schema = (db) => {

  const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Query',
      fields: () => ({
        links: {
          type: new GraphQLList(Link),
          resolve: () =>  db.collection('links').find({}).toArray()
        }
      })
    })
  });

  return schema;
};

export default Schema;