const graphql = require('graphql');
const { GraphQLObjectType, GraphQLId } = graphql;

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    dummyField: {type: GraphQLId}
  }
});

module.exports = RootQueryType;
