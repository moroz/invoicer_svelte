import { ApolloClient, InMemoryCache } from "@apollo/client/core";

const client = new ApolloClient({
  uri: "http://localhost:4000/api",
  cache: new InMemoryCache()
});

export default client;
