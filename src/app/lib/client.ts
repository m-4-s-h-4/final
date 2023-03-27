import { GraphQLClient } from 'graphql-request';

export const GRAPHQL_ENDPOINT = 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clfr1h9xb0o8501uo94mu1meu/master';

export const client = new GraphQLClient(GRAPHQL_ENDPOINT, {
  headers: {
    'Content-Type': 'application/json',
  },
});