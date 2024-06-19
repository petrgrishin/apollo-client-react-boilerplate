import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';

const link = new GraphQLWsLink(
    createClient({
        url: 'ws://127.0.0.1:3030/graphql',
        credentials: 'include',
    }),
);

const client = new ApolloClient({
    link,
    uri: 'http://127.0.0.1:3030/graphql',
    credentials: 'include',
    cache: new InMemoryCache(),
});

export default client;
