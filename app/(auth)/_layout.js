import { useRouter } from "expo-router";  // Import useRouter for redirection
import { StatusBar } from "expo-status-bar";
import { useGlobalContext } from "../../context/GlobalProvider";
import GlobalProvider from "../../context/GlobalProvider";
import { View } from "react-native";
import { Stack } from "expo-router";  // Ensure this is correctly imported

const AuthLayout = () => {
  const { loading, isLogged } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href="/b2" />;

  return (
    <View style={{ flex: 1 }}>
      <GlobalProvider>
      <Stack>
        <Stack.Screen
          name="signin"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="signup"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="b2"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
      </GlobalProvider>
    </View>
  );
};

export default AuthLayout;
