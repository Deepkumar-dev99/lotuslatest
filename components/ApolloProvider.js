// graphql/client.tsx
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider as Provider } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  credentials: 'include', // Optional: Use if you are dealing with cookies and credentials
});

export const ApolloProvider = ({ children }) => {
  return <Provider client={client}>{children}</Provider>;
};

