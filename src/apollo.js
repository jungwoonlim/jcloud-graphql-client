import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
  resolvers: {
    Movie: {
      isLiked: () => false,
    },
    Mutation: {
      toggleLikeMovie: (_, { id, isLiked }, { cache }) => {
        const myMovie = {
          __typename: "Movie",
          id: `${id}`,
          isLiked: `${isLiked}`,
        };

        cache.modify({
          id: cache.identify(myMovie),
          fields: {
            isLiked(cachedName) {
              return !isLiked;
            },
          },
          /* broadcast: false // Include this to prevent automatic query refresh */
        });
      },
    },
  },
});

export default client;
