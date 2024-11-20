import { useRouter } from 'expo-router'; // Import useRouter for redirection
import { StatusBar } from 'expo-status-bar';
import { useGlobalContext } from '../../context/GlobalProvider';
import GlobalProvider from '../../context/GlobalProvider';
import { View } from 'react-native';
import { Stack } from 'expo-router'; // Ensure this is correctly imported
import { Provider } from 'react-redux';
import { store } from '../../redux/store'; // Import your Redux store

const EditProfileLayout = () => {
  const { loading, isLogged } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href="/notification" />;

  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <GlobalProvider>
          <Stack>
            <Stack.Screen
              name="notification"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="accountScreen"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="profilehelp"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="profilesecurity"
              options={{
                headerShown: false,
              }}
            />
          </Stack>
        </GlobalProvider>
      </View>
    </Provider>
  );
};

export default EditProfileLayout;
