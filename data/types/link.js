import {
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

const Link = new GraphQLObjectType({
  name: 'Link',
  fields: () => ({
    _id: {type: GraphQLString},
    title: {type: GraphQLString},
    url: {type: GraphQLString}
  })
});

export default Link;