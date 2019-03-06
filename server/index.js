const { readFileSync } = require("fs");
const { ApolloServer } = require("apollo-server");

const typeDefs = readFileSync(`${__dirname}/schema/typeDefs.graphql`, "utf8");
const resolvers = require("./schema/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ctx => ({
    ...ctx.request
  })
});

server.listen().then(({ url }) => console.log(`Server is running on ${url}`));
