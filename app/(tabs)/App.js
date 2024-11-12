import React from 'react';
import { View, StyleSheet } from 'react-native'; // Importing View and StyleSheet
import AuthLayout from '../(auth)/_layout';
import { ApolloProvider } from '../../components/ApolloProvider'; // Assuming you have ApolloProvider set up here
import { Provider } from 'react-redux';
import ProfileLayout from '../(Profile)/_layout'
import { store } from '../../redux/store';
export default function App() {
  return (
    <Provider store={store}>
      <ApolloProvider>
        <View style={styles.container}>
          <AuthLayout />
          <ProfileLayout/>
        </View>
      </ApolloProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Correctly setting flex value
  },
});
