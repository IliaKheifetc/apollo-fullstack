const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const LaunchAPI = require("./datasources/launch");
const UserAPI = require("./datasources/user");
const RocketAPI = require("./datasources/rocket");
const https = require("https");
const { createStore } = require("./utils");
const resolvers = require("./resolvers");

const store = createStore();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    launchAPI: new LaunchAPI(),
    userAPI: new UserAPI({ store }),
    rocketAPI: new RocketAPI()
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
