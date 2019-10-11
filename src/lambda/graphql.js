const { ApolloServer } = require("apollo-server-lambda");
const resolvers = require('./resolvers');
const typeDefs = require('./typedefs');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true
});

exports.handler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true,
  },
});