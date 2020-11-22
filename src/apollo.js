import { ApolloClient, InMemoryCache } from "@apollo/client";

// uri: "https://movieql.now.sh/",
const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
  cache: new InMemoryCache(),
});

export default client;
