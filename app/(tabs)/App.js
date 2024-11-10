import React from 'react';
import { View, StyleSheet } from 'react-native';  // Importing View and StyleSheet
import AuthLayout from '../(auth)/_layout';
import { ApolloProvider } from '../../components/ApolloProvider';  // Assuming you have ApolloProvider set up here

export default function App() {
  return (
    <ApolloProvider>
      <View style={styles.container}>
        <AuthLayout />
      </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  // Correctly setting flex value
  },
});
