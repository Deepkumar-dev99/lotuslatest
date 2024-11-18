import { useEffect } from 'react';
import { useFonts } from 'expo-font';
// import "react-native-url-polyfill/auto";
import { SplashScreen, Stack } from 'expo-router';

import GlobalProvider from '../context/GlobalProvider';
import { ApolloProvider } from '@/components/ApolloProvider';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  return (
    <Provider store={store}>
      <GlobalProvider>
        <ApolloProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(Profile)" options={{ headerShown: false }} />
            <Stack.Screen name="(Course)" options={{ headerShown: false }} />
            {/* <Stack.Screen name="course" component={course} /> */}
            {/* <Stack.Screen name="search/[query]" options={{ headerShown: false }} /> */}
          </Stack>
        </ApolloProvider>
      </GlobalProvider>
    </Provider>
  );
};

export default RootLayout;
