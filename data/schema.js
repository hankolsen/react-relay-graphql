import { GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql';

let counter = 42;

let schema = new GraphQLSchema({

	query: new GraphQLObjectType({
		name: 'Query',
		fields: () => ({
			counter: {
				type: GraphQLInt,
				resolve: () => counter
			},
			message: {
				type: GraphQLString,
				resolve: () => 'Hey you!'
			}
		})
	}),

	mutation: new GraphQLObjectType({
		name: 'Mutation',
		fields: () => ({
			incrementCounter: {
				type: GraphQLInt,
				resolve: () => counter += 1
			}
		})
	})

});

export default schema;