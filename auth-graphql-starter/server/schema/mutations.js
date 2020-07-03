const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql;
const UserTypes = require("./types/user_type");
const UserType = require("./types/user_type");
const AuthService = require("../services/auth");

const mutataion = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parentValue, args, context) {
        return AuthService.signup({ email, password, context });
      },
    },
  },
});

module.exports = mutataion;
