import { ApolloClient, InMemoryCache } from "@apollo/client";

// apollo client sample
// uri: "https://48p1r2roz4.sse.codesandbox.io",
const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

export default client;
