import { useEffect } from "react";
import { useFonts } from "expo-font";
// import "react-native-url-polyfill/auto";
import { SplashScreen, Stack } from "expo-router";

import GlobalProvider from "../context/GlobalProvider";
import { ApolloProvider } from "@/components/ApolloProvider";


// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

const RootLayout = () => {


  return (
    <GlobalProvider>
      <ApolloProvider>

      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        
        {/* <Stack.Screen name="course" component={course} /> */}
        {/* <Stack.Screen name="search/[query]" options={{ headerShown: false }} /> */}
      </Stack>
      </ApolloProvider>
    </GlobalProvider>
  );
};

export default RootLayout;
