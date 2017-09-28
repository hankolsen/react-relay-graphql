import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
} from 'graphql';

import Link from './types/link';

const Schema = (db) => {

  const store = {};

	const storeType = new GraphQLObjectType({
		name: 'Store',
		fields: () => ({
			links: {
				type: new GraphQLList(Link),
				resolve: () =>  db.collection('links').find({}).toArray()
			}
		})
	});

	const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Query',
      fields: () => ({
        store: {
          type: storeType,
          resolve: () => store
        }
    })
    })
  });

  return schema;
};

export default Schema;